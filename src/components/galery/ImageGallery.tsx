"use client";

import { useState, useEffect } from "react";
import { ApiResponse, GalleryImage, toGalleryImage, ImageDocument } from "@/lib/types";
import Image from "next/image";
import axios from "axios";
import { CustomModal, ModalFooter, useModal } from "@/components/ui/custom-modal";

// Lightbox imports
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// Plugins imports
import Captions from "yet-another-react-lightbox/plugins/captions";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

// Plugin styles
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

interface GalleryProps {
  query?: string;
  initialData?: ApiResponse;
  itemsPerPage?: number;
}

export default function ImageGallery({ query = "mars", initialData, itemsPerPage = 12 }: GalleryProps) {
  const [data, setData] = useState<ApiResponse | null>(initialData || null);
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState<boolean>(!initialData);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  
  // Modal states usando nosso hook personalizado
  const imageModal = useModal();
  const jsonModal = useModal();
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [selectedImageData, setSelectedImageData] = useState<ImageDocument | null>(null);
  
  // Lightbox states
  const [lightboxOpen, setLightboxOpen] = useState<boolean>(false);
  const [lightboxIndex, setLightboxIndex] = useState<number>(0);

  // Fetch data if not provided
  useEffect(() => {
    if (!initialData) {
      fetchData(1);
    } else {
      // Process initial data
      const galleryImages = initialData.response.docs.map(toGalleryImage);
      setImages(galleryImages);
      calculateTotalPages(initialData.response.numFound);
    }
    // Reset to first page when query changes
    setPage(1);
  }, [initialData, query]);

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
      
      // Make request to our proxy API instead of directly to NASA API
      const response = await axios.get<ApiResponse>(
        `/api/nasa?image_content=${encodeURIComponent(query)}&start=${start}&rows=${itemsPerPage}`
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
    setPage(newPage);
    fetchData(newPage);
    // Scroll to top when page changes
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Open image modal
  const openImageModal = (image: GalleryImage) => {
    setSelectedImage(image);
    const imageIndex = images.findIndex(img => img.id === image.id);
    setLightboxIndex(imageIndex !== -1 ? imageIndex : 0);
    setLightboxOpen(true);
  };

  // Open JSON data modal
  const openJsonModal = (image: GalleryImage) => {
    // Find the original document data for this image
    const originalDoc = data?.response.docs.find(doc => doc.uuid === image.id);
    if (originalDoc) {
      setSelectedImageData(originalDoc);
      jsonModal.onOpen();
    }
  };
  
  // Fechar um modal e abrir outro
  const openJsonFromImageModal = (image: GalleryImage) => {
    imageModal.onClose();
    // Pequeno timeout para permitir a animação de fechamento
    setTimeout(() => openJsonModal(image), 100);
  };

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-2xl font-bold mb-6">NASA Images - {query}</h2>
      
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
        {images.map((image) => (
          <div key={image.id} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
            <div 
              className="relative h-48 bg-gray-900 cursor-pointer" 
              onClick={() => openImageModal(image)}
            >
              <Image 
                src={image.thumbnailUrl} 
                alt={image.title}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                onError={(e) => {
                  // Fallback to a placeholder if image fails to load
                  (e.target as HTMLImageElement).src = '/globe.svg';
                  (e.target as HTMLImageElement).className = 'object-contain p-8';
                }}
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2 truncate">{image.title}</h3>
              <div className="text-sm text-gray-400">
                <p>Target: {image.target}</p>
                <p>Instrument: {image.instrument}</p>
                <p className="truncate">Created: {new Date(image.creationTime).toLocaleDateString()}</p>
              </div>
              <div className="mt-4 flex justify-between">
                <button
                  className="px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded transition-colors"  
                  onClick={() => openImageModal(image)}
                >
                  View Image
                </button>
                <button
                  className="px-3 py-1 bg-gray-600 hover:bg-gray-700 text-white text-sm rounded transition-colors"  
                  onClick={() => openJsonModal(image)}
                >
                  JSON Data
                </button>
              </div>
            </div>
          </div>
        ))}
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

      

      {/* Metadata */}
      {data && (
        <div className="mt-8 text-sm text-gray-500">
          <p>Total results: {data.response.numFound}</p>
          <p>Query time: {data.responseHeader.QTime}ms</p>
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
            <Image
              src={selectedImage.browseUrl}
              alt={selectedImage.title}
              fill
              className="object-contain"
              sizes="(max-width: 1200px) 100vw, 1200px"
              onError={(e) => {
                // Fallback to a placeholder if image fails to load
                (e.target as HTMLImageElement).src = '/globe.svg';
                (e.target as HTMLImageElement).className = 'object-contain p-8';
              }}
            />
          )}
        </div>
        {selectedImage && (
          <div className="mt-4 text-sm space-y-1">
            <p><strong>Target:</strong> {selectedImage.target}</p>
            <p><strong>Instrument:</strong> {selectedImage.instrument}</p>
            <p><strong>Created:</strong> {new Date(selectedImage.creationTime).toLocaleDateString()}</p>
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
              <button
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors"
                onClick={() => openJsonFromImageModal(selectedImage)}
              >
                View JSON Data
              </button>
            </>
          )}
        </ModalFooter>
      </CustomModal>

      {/* JSON Data Modal - Usando nosso componente personalizado */}
      <CustomModal 
        isOpen={jsonModal.isOpen} 
        onClose={jsonModal.onClose}
        title={`Image JSON Data${selectedImage ? ': ' + selectedImage.title : ''}`}
        size="full"
      >
        {selectedImageData ? (
          <pre className="bg-gray-900 p-4 rounded-md overflow-auto max-h-[60vh] text-sm whitespace-pre-wrap">
            <code className="text-gray-200">
              {JSON.stringify(selectedImageData, null, 2)}
            </code>
          </pre>
        ) : (
          <p className="text-gray-400">No data available</p>
        )}
        
        <ModalFooter>
          <button
            className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-md transition-colors"
            onClick={jsonModal.onClose}
          >
            Close
          </button>
          {selectedImageData && (
            <button
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors"
              onClick={() => {
                navigator.clipboard.writeText(JSON.stringify(selectedImageData, null, 2));
                alert("JSON data copied to clipboard!");
              }}
            >
              Copy JSON
            </button>
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
          description: `Target: ${image.target} | Instrument: ${image.instrument} | Created: ${new Date(image.creationTime).toLocaleDateString()}`
        }))}
        plugins={[Captions, Fullscreen, Slideshow, Thumbnails, Zoom]}
        captions={{ descriptionTextAlign: "center" }}
        carousel={{ finite: images.length <= 1 }}
        thumbnails={{ width: 120, height: 80 }}
        zoom={{ maxZoomPixelRatio: 5 }}
      />
    </div>
  );
}