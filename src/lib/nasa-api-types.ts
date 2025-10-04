/**
 * NASA PDS-Imaging API Types
 * Based on documentation: https://pds-imaging.jpl.nasa.gov/tools/atlas/api/
 */

/**
 * NASA PDS-Imaging API Query Parameters
 */
export interface NasaAPIParams {
  /**
   * Free text search on image content descriptions
   * Example: 'crater', 'mars', 'europa'
   */
  image_content?: string;
  
  /**
   * Index of first record to return (0-based)
   * Used for pagination
   */
  start?: string | number;
  
  /**
   * Maximum number of records to return
   */
  rows?: string | number;
  
  /**
   * Target body (e.g., 'mars', 'venus')
   */
  target?: string;
  
  /**
   * Name of the instrument
   * Examples: 'MAHLI', 'NAVCAM', 'MASTCAM'
   */
  instrument_name?: string;
  
  /**
   * Name of the mission
   * Examples: 'MSL', 'MRO', 'VOYAGER'
   */
  mission_name?: string;
  
  /**
   * PDS Archive Status
   * Example: 'pds3', 'pds4'
   */
  pds_archive_status?: string;
  
  /**
   * Primary Product Type
   * Example: 'image', 'spectrum'
   */
  primary_product_type?: string;
  
  /**
   * Filter query - Solr format
   * Example: 'target:mars', 'instrument_name:MAHLI'
   */
  fq?: string;
  
  /**
   * Sort order for results
   * Default: 'score desc'
   * Examples: 'time_min asc', 'target asc', etc.
   */
  sort?: string;
  
  /**
   * Start date for filtering images
   * Format: 'YYYY-MM-DDThh:mm:ssZ'
   */
  start_date?: string;
  
  /**
   * End date for filtering images
   * Format: 'YYYY-MM-DDThh:mm:ssZ'
   */
  stop_date?: string;
  
  /**
   * Latitude,Longitude format for spatial search
   * Example: '10.5,120.3'
   */
  pt?: string;
  
  /**
   * Distance in kilometers for spatial search
   * Used with 'pt' parameter
   */
  d?: string | number;
  
  /**
   * Flag to enable spatial search
   * Set to 'true' when using spatial search
   */
  spatial?: string;
  
  /**
   * Additional parameters allowed by the API
   */
  [key: string]: string | number | undefined;
}

/**
 * Available sort fields in the NASA PDS-Imaging API
 */
export const NasaAPISortFields = [
  'score',
  'time_min',
  'time_max',
  'target',
  'instrument_name',
  'mission_name',
  'pds_archive_status',
  'primary_product_type'
] as const;

export type NasaAPISortField = typeof NasaAPISortFields[number];

/**
 * Sort directions
 */
export type SortDirection = 'asc' | 'desc';

/**
 * Utility function to create a sort parameter value
 */
export function createSortParam(field: NasaAPISortField, direction: SortDirection = 'desc'): string {
  return `${field} ${direction}`;
}