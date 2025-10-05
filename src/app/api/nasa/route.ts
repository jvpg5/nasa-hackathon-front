import { NextResponse } from 'next/server';
import axios from 'axios';

/**
 * NASA PDS-Imaging API Integration
 * Documentation: https://pds-imaging.jpl.nasa.gov/tools/atlas/api/
 */
export async function GET(request: Request) {
  // Extract the search parameters from the request URL
  const { searchParams } = new URL(request.url);
  
  // Core search parameters
  const imageContent = searchParams.get('image_content') || 'crater';
  const start = searchParams.get('start') || '0';
  const rows = searchParams.get('rows') || '12';
  
  // Additional search parameters based on API documentation
  const target = searchParams.get('target');
  const instrument = searchParams.get('instrument_name');
  const mission = searchParams.get('mission');
  const datasetId = searchParams.get('pds_archive_status');
  const productType = searchParams.get('primary_product_type');
  const filters = searchParams.get('fq');
  
  // Date range filters
  const startDate = searchParams.get('start_date');
  const endDate = searchParams.get('stop_date');
  
  // Spatial search parameters
  const pt = searchParams.get('pt'); // Latitude,Longitude format
  const d = searchParams.get('d');   // Distance in km
  
  // Build query parameters
  const params: Record<string, string> = {
    start,
    rows,
    // 'q' accepts apache solr query, by defaults has this one
    q: `+ATLAS_THUMBNAIL_URL:* -ATLAS_THUMBNAIL_URL:brwsnotavail.jpg +ATLAS_BROWSE_URL:* -ATLAS_BROWSE_URL:brwsnotavail.jpg -ATLAS_BROWSE_URL:*starbrite.jpl.nasa.gov*`
  };

  // Add conditional parameters
  //if (imageContent) params.image_content = imageContent;
  if (target) params.q += ` +TARGET_NAME:"${target}"`;
  if (instrument) params.instrument = instrument;
  if (mission) params.q += ` +ATLAS_MISSION_NAME:"${mission}"`;
  if (datasetId) params.pds_archive_status = datasetId;
  if (productType) params.primary_product_type = productType;
  if (filters) params.fq = filters;
  
  // Handle date range filter
  if (startDate && endDate) {
    params.fq = params.fq ? 
      `${params.fq} AND time_min:[${startDate} TO ${endDate}]` : 
      `time_min:[${startDate} TO ${endDate}]`;
  } else if (startDate) {
    params.fq = params.fq ? 
      `${params.fq} AND time_min:[${startDate} TO *]` : 
      `time_min:[${startDate} TO *]`;
  } else if (endDate) {
    params.fq = params.fq ? 
      `${params.fq} AND time_min:[* TO ${endDate}]` : 
      `time_min:[* TO ${endDate}]`;
  }
  
  // Handle spatial search
  if (pt && d) {
    params.pt = pt;
    params.d = d;
    params.spatial = 'true';
  }

  try {
    // Forward the request to NASA API
    console.log(params);
    const response = await axios.get(
      `https://pds-imaging.jpl.nasa.gov/solr/pds_archives/search`,
      {
        params,
        headers: {
          'Accept': 'application/json',
        },
        // Add timeout to prevent hanging requests
        //timeout: 150000 
      }
    );

    // Return the NASA API response
    return NextResponse.json(response.data);
  } catch (error) {
    console.error('Error fetching data from NASA API:', error);
    
    // Improved error handling with error details
    let status = 500;
    let errorMessage = 'Failed to fetch data from NASA API';
    
    if (axios.isAxiosError(error)) {
      console.log(error)
      status = error.response?.status || 500;
      errorMessage = error.response?.data?.message || error.message || errorMessage;
      
      // Handle specific error cases
      if (error.code === 'ECONNABORTED') {
        errorMessage = 'Connection to NASA API timed out. Try again later.';
      }
    }
    
    // Return appropriate error response
    return new NextResponse(
      JSON.stringify({ 
        error: errorMessage,
        details: axios.isAxiosError(error) ? {
          code: error.code,
          status: error.response?.status,
        } : undefined
      }), 
      { 
        status,
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
  }
}