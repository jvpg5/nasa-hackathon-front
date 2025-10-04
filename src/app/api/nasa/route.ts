import { NextResponse } from 'next/server';
import axios from 'axios';

export async function GET(request: Request) {
  // Extract the search parameters from the request URL
  const { searchParams } = new URL(request.url);
  const imageContent = searchParams.get('image_content') || 'crater';
  const start = searchParams.get('start') || '0';
  const rows = searchParams.get('rows') || '12';

  try {
    // Forward the request to NASA API
    const response = await axios.get(
      `https://pds-imaging.jpl.nasa.gov/solr/pds_archives/search`,
      {
        params: {
          image_content: imageContent,
          start,
          rows
        },
        headers: {
          'Accept': 'application/json',
        },
        // Add timeout to prevent hanging requests
        timeout: 10000 
      }
    );

    // Return the NASA API response
    return NextResponse.json(response.data);
  } catch (error) {
    console.error('Error fetching data from NASA API:', error);
    
    // Determine appropriate status code and message based on error
    let status = 500;
    let errorMessage = 'Failed to fetch data from NASA API';
    
    if (axios.isAxiosError(error)) {
      if (error.code === 'ECONNABORTED') {
        errorMessage = 'Request to NASA API timed out';
      } else if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        status = error.response.status;
        errorMessage = `NASA API responded with status: ${error.response.status}`;
      } else if (error.request) {
        // The request was made but no response was received
        errorMessage = 'No response received from NASA API';
      }
    }
    
    // Return appropriate error response
    return new NextResponse(
      JSON.stringify({ 
        error: errorMessage 
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