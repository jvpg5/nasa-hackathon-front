"use client";

import { useState, useEffect } from "react";
import { ApiResponse, GalleryImage, toGalleryImage, } from "@/lib/types";
import Image from "next/image";
import axios from "axios";
import { CustomModal, ModalFooter, useModal } from "@/components/ui/custom-modal";

// Lightbox imports
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// Plugins imports
import Captions from "yet-another-react-lightbox/plugins/captions";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
//import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
//import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

// Plugin styles
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

import { NasaAPIParams } from "@/lib/nasa-api-types";

interface GalleryProps {
  query?: string;
  initialData?: ApiResponse;
  itemsPerPage?: number;
  apiParams?: NasaAPIParams;
  currentPage?: number;
}

export default function ImageGallery({ 
  query = "venus", 
  initialData, 
  itemsPerPage = 12,
  apiParams,
  currentPage = 1
}: GalleryProps) {
  const [data, setData] = useState<ApiResponse | null>(initialData || null);
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState<boolean>(!initialData);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState<number>(currentPage);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});
  
  // Modal states usando nosso hook personalizado
  const imageModal = useModal();
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [modalImageFailed, setModalImageFailed] = useState<boolean>(false);
  
  // Lightbox states
  const [lightboxOpen, setLightboxOpen] = useState<boolean>(false);
  const [lightboxIndex, setLightboxIndex] = useState<number>(0);

  // Fetch data if not provided
  useEffect(() => {
    if (!initialData) {
      fetchData(currentPage);
    } else {
      // Process initial data
      const galleryImages = initialData.response.docs.map(toGalleryImage);
      setImages(galleryImages);
      calculateTotalPages(initialData.response.numFound);
    }
    // Update page when currentPage prop changes
    setPage(currentPage);
    
    // Add listener for popstate events (browser back/forward buttons)
    const handlePopState = () => {
      // With server components and server actions handling URL changes,
      // we don't need complex popstate handling, but we need this for manual browser navigation
      // This will cause a full page refresh handled by the server component
    };
    
    window.addEventListener('popstate', handlePopState);
    
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, [initialData, query, apiParams, currentPage]);

  // Calculate total pages
  const calculateTotalPages = (totalItems: number) => {
    setTotalPages(Math.ceil(totalItems / itemsPerPage));
  };

  // Function to fetch data from API using axios
  const fetchData = async (pageNum: number) => {
    try {
      setLoading(true);
      setError(null);
      
      // Calculate start index for pagination
      const start = (pageNum - 1) * itemsPerPage;
      
      // Use apiParams if provided, otherwise build basic query
      let params: Record<string, string | number> = {};
      
      if (apiParams) {
        // Use provided API parameters, filtering out undefined values
        Object.entries(apiParams).forEach(([key, value]) => {
          if (value !== undefined) {
            params[key] = value;
          }
        });
        // Update page-specific parameters
        params.start = (pageNum - 1) * itemsPerPage;
      } else {
        // Build basic parameters
        params = {
          image_content: query,
          start: start,
          rows: itemsPerPage
        };
      }
      
      // Make request to our proxy API
      const response = await axios.get<ApiResponse>(
        `/api/nasa`,
        { params }  
      );
      
      setData(response.data);
      
      // Convert documents to gallery images
      const galleryImages = response.data.response.docs.map(toGalleryImage);
      setImages(galleryImages);
      
      // Calculate total pages
      calculateTotalPages(response.data.response.numFound);
    } catch (err) {
      setError(
        axios.isAxiosError(err) 
          ? `Error fetching data: ${err.message}`
          : "An unknown error occurred"
      );
      console.error("Failed to fetch image data:", err);
    } finally {
      setLoading(false);
    }
  };
  
  // Handle page change
  const handlePageChange = (newPage: number) => {
    // Update current page state
    setPage(newPage);
    
    // If we're using URL-based navigation with apiParams, update URL
    if (apiParams) {
      // Get current URL and search params
      const url = new URL(window.location.href);
      const searchParams = url.searchParams;
      
      // Update page parameter
      searchParams.set('page', newPage.toString());
      
      // With Next.js server components, we use full page navigation for consistency
      window.location.href = `${url.pathname}?${searchParams.toString()}`;
    } else {
      // Use traditional method for non-URL based navigation
      fetchData(newPage);
      
      // Scroll to top when page changes
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Handle retry loading for failed images
  const handleRetryImage = (imageId: string, event: React.MouseEvent) => {
    event.stopPropagation(); // Prevent opening the modal when clicking retry
    setFailedImages(prev => ({
      ...prev,
      [imageId]: false
    }));
  };
  
  // Handle retry loading for modal image
  const handleRetryModalImage = () => {
    setModalImageFailed(false);
    // Force re-render of the image by creating a new URL with a timestamp
    if (selectedImage) {
      const newSelectedImage = { ...selectedImage };
      newSelectedImage.browseUrl = `${selectedImage.browseUrl}${selectedImage.browseUrl.includes('?') ? '&' : '?'}retry=${Date.now()}`;
      setSelectedImage(newSelectedImage);
    }
  };
  
  // Open image modal
  const openImageModal = (image: GalleryImage) => {
    setSelectedImage(image);
    // Reset modal image failure state when a new image is selected
    setModalImageFailed(false);
    const imageIndex = images.findIndex(img => img.id === image.id);
    setLightboxIndex(imageIndex !== -1 ? imageIndex : 0);
    setLightboxOpen(true);
  };
  
  return (
    <div className="w-full">
      <div className="flex flex-wrap justify-between items-baseline gap-4 mb-6">
        <h2 className="text-2xl font-bold text-gray-100">
          NASA Images - <span className="capitalize">{query}</span>
        </h2>
        {data && (
          <div className="text-sm text-gray-400">
            <span>Total results: {data.response.numFound}</span>
            <span className="ml-4">
              Query time: {data.responseHeader.QTime}ms
            </span>
          </div>
        )}
      </div>
      
      {loading && (
        <div className="flex flex-col justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mb-4"></div>
          <p className="text-gray-400">Loading images from NASA database...</p>
        </div>
      )}

      {error && (
        <div className="bg-red-900/30 border border-red-800 text-red-200 px-6 py-4 rounded-lg mb-8">
          <h3 className="text-lg font-semibold mb-2">Error</h3>
          <p>{error}</p>
          <button 
            onClick={() => fetchData(page)}
            className="mt-4 bg-red-700 hover:bg-red-600 text-white px-4 py-2 rounded transition-colors"
          >
            Try Again
          </button>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {images.map((image) => {
          const formattedDate =
            image.creationTime && !isNaN(new Date(image.creationTime).getTime())
              ? new Date(image.creationTime).toLocaleDateString()
              : "N/A";

          return (
            <div
              key={image.id}
              className="bg-slate-900 border border-slate-800 rounded-lg overflow-hidden shadow-lg hover:shadow-cyan-500/10 hover:border-slate-700 transition-all duration-300 ease-in-out transform hover:-translate-y-1 cursor-pointer"
              onClick={() => openImageModal(image)}
            >
              <div className="relative h-56 w-full">
                <Image
                  src={image.thumbnailUrl}
                  alt={image.title || "NASA Image"}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  onError={(e) => {
                    // Mark this image as failed
                    setFailedImages(prev => ({
                      ...prev,
                      [image.id]: true
                    }));
                    (e.target as HTMLImageElement).src = "/globe.svg";
                    (e.target as HTMLImageElement).className =
                      "object-contain p-8";
                  }}
                />
                {failedImages[image.id] && (
                  <div className="absolute bottom-0 left-0 right-0 bg-black/70 p-2 flex justify-center">
                    <button
                      onClick={(e) => handleRetryImage(image.id, e)}
                      className="text-xs bg-blue-600 hover:bg-blue-500 text-white px-2 py-1 rounded transition-colors"
                    >
                      Retry Image
                    </button>
                  </div>
                )}
              </div>
              <div className="p-4">
                <h3
                  className="text-lg font-bold mb-2 truncate text-gray-100"
                  title={image.title}
                >
                  {image.title}
                </h3>
                <div className="text-sm text-gray-400 space-y-1">
                  <p className="truncate">Target: {image.target || "N/A"}</p>
                  <p className="truncate">
                    Instrument: {image.instrument || "N/A"}
                  </p>
                  <p className="truncate">Created: {formattedDate}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {images.length === 0 && !loading && !error && (
        <div className="text-center p-8 text-gray-400">
          <p>No images found for the selected target.</p>
        </div>
      )}

      {/* Pagination controls */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-8 gap-2">
          <button
            onClick={() => handlePageChange(Math.max(1, page - 1))}
            disabled={page === 1}
            className={`px-4 py-2 rounded ${
              page === 1
                ? 'bg-gray-700 text-gray-400 cursor-not-allowed'
                : 'bg-blue-600 hover:bg-blue-700 text-white'
            }`}
          >
            Previous
          </button>
          
          <div className="flex items-center px-4">
            <span className="text-gray-300">
              Page {page} of {totalPages}
            </span>
          </div>
          
          <button
            onClick={() => handlePageChange(Math.min(totalPages, page + 1))}
            disabled={page === totalPages}
            className={`px-4 py-2 rounded ${
              page === totalPages
                ? 'bg-gray-700 text-gray-400 cursor-not-allowed'
                : 'bg-blue-600 hover:bg-blue-700 text-white'
            }`}
          >
            Next
          </button>
        </div>
      )}

      

      {/* Image Preview Modal - Usando nosso componente personalizado */}
      <CustomModal 
        isOpen={imageModal.isOpen} 
        onClose={imageModal.onClose}
        title={selectedImage?.title || "Image Preview"}
        size="xl"
      >
        <div className="relative w-full h-[60vh]">
          {selectedImage && (
            <>
              <Image
                src={selectedImage.browseUrl}
                alt={selectedImage.title}
                fill
                className="object-contain"
                sizes="(max-width: 1200px) 100vw, 1200px"
                onError={(e) => {
                  // Mark modal image as failed
                  setModalImageFailed(true);
                  // Fallback to a placeholder if image fails to load
                  (e.target as HTMLImageElement).src = '/globe.svg';
                  (e.target as HTMLImageElement).className = 'object-contain p-8';
                }}
                onLoad={() => {
                  // Reset failure state when image loads successfully
                  setModalImageFailed(false);
                }}
              />
              {modalImageFailed && (
                <div className="absolute bottom-4 left-0 right-0 flex justify-center">
                  <button
                    onClick={handleRetryModalImage}
                    className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded transition-colors"
                  >
                    Retry Loading Image
                  </button>
                </div>
              )}
            </>
          )}
        </div>
        {selectedImage && (
          <div className="mt-4 text-sm space-y-1">
            <p><strong>Target:</strong> {selectedImage.target}</p>
            <p><strong>Instrument:</strong> {selectedImage.instrument}</p>
            <p><strong>Created:</strong> {selectedImage.creationTime && !isNaN(new Date(selectedImage.creationTime).getTime()) ? new Date(selectedImage.creationTime).toLocaleDateString() : "N/A"}</p>
            <p className="mt-2">
              <a 
                href={selectedImage.browseUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300"
              >
                Open original image in new tab
              </a>
            </p>
          </div>
        )}
        
        <ModalFooter>
          <button
            className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-md transition-colors"
            onClick={imageModal.onClose}
          >
            Close
          </button>
          {selectedImage && (
            <>
              <button
                className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-md transition-colors mr-2"
                onClick={() => {
                  const imageIndex = images.findIndex(img => img.id === selectedImage.id);
                  setLightboxIndex(imageIndex !== -1 ? imageIndex : 0);
                  setLightboxOpen(true);
                }}
              >
                Enhanced View
              </button>
            </>
          )}
        </ModalFooter>
      </CustomModal>
      
      {/* Yet Another React Lightbox */}
      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        index={lightboxIndex}
        slides={images.map(image => ({
          src: image.browseUrl,
          alt: image.title,
          title: image.title,
          description: `Target: ${image.target} | Instrument: ${image.instrument} | Created: ${image.creationTime && !isNaN(new Date(image.creationTime).getTime()) ? new Date(image.creationTime).toLocaleDateString() : "N/A"}`
        }))}
        plugins={[Captions, Fullscreen, 
          
          //Slideshow, Thumbnails, 
          
          Zoom]}
        captions={{ descriptionTextAlign: "center" }}
        carousel={{ finite: images.length <= 1 }}
        //thumbnails={{ width: 120, height: 80 }}
        zoom={{ maxZoomPixelRatio: 5 }}
      />
    </div>
  );
}