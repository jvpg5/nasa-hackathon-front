/**
 * Types for NASA API responses
 */

// Main response structure
export interface ApiResponse {
  responseHeader: ResponseHeader;
  response: Response;
}

// Header with metadata about the request
export interface ResponseHeader {
  zkConnected: boolean;
  status: number;
  QTime: number;
  params: {
    target: string;
  };
}

// Response data containing search results
export interface Response {
  numFound: number;
  start: number;
  maxScore: number;
  numFoundExact: boolean;
  docs: ImageDocument[];
}

// Document representing a single image item
export interface ImageDocument {
  FILE_NAME: string;
  TARGET_NAME: string;
  INSTRUMENT_ID: string;
  ATLAS_LABEL_URL: string;
  CENTER_LONGITUDE: number;
  A_AXIS_RADIUS: number;
  ATLAS_PRODUCT_TYPE: string;
  PRODUCT_TYPE: string[];
  DESCRIPTION: string;
  NUMBER_OF_LINES: number;
  MISSION_PHASE_NAME: string;
  UPPER_LEFT_LONGITUDE: number;
  ATLAS_VOLUME_URL: string;
  B_AXIS_RADIUS: number;
  VOLUME_ID: string;
  MAP_PROJECTION_TYPE: string;
  UPPER_LEFT_LATITUDE: number;
  ATLAS_MISSION_NAME: string;
  ATLAS_SPACECRAFT_NAME: string;
  IMAGE_ID: string;
  PRODUCT_ID: string;
  identifier: string[];
  ATLAS_DATA_URL: string;
  FILE_PATH: string;
  ATLAS_BROWSE_URL: string; // URL for browsing the image
  ATLAS_PRIMARY_TARGET_NAME: string;
  LOWER_RIGHT_LATITUDE: number;
  UPPER_RIGHT_LONGITUDE: number;
  C_AXIS_RADIUS: number;
  INSTRUMENT_NAME: string;
  MAP_RESOLUTION: number;
  ATLAS_INSTRUMENT_NAME: string[];
  DATA_SET_ID: string;
  MAP_SCALE: number;
  LOWER_LEFT_LATITUDE: number;
  PRODUCT_CREATION_TIME: string; // ISO date string
  LOWER_RIGHT_LONGITUDE: number;
  SPACECRAFT_NAME: string;
  CENTER_LATITUDE: number;
  UPPER_RIGHT_LATITUDE: number;
  LOWER_LEFT_LONGITUDE: number;
  ATLAS_THUMBNAIL_URL: string; // URL for thumbnail image
  uuid: string;
  TARGET: string[];
  RELEVANT_DOC_FIELDS: string[];
  NO_SORT_DOC_FIELDS: string[];
  _version_: number;
}

// Optional simplified image type for gallery display
export interface GalleryImage {
  id: string;
  title: string;
  thumbnailUrl: string;
  browseUrl: string;
  dataUrl: string;
  instrument: string;
  target: string;
  productId: string;
  creationTime: string;
}

// Helper function to convert ImageDocument to GalleryImage
export const toGalleryImage = (doc: ImageDocument): GalleryImage => {
  return {
    id: doc.uuid,
    title: doc.PRODUCT_ID,
    thumbnailUrl: doc.ATLAS_THUMBNAIL_URL,
    browseUrl: doc.ATLAS_BROWSE_URL,
    dataUrl: doc.ATLAS_DATA_URL,
    instrument: doc.INSTRUMENT_NAME,
    target: doc.ATLAS_PRIMARY_TARGET_NAME,
    productId: doc.PRODUCT_ID,
    creationTime: doc.PRODUCT_CREATION_TIME
  };
};