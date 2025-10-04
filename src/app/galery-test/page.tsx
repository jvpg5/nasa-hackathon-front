import Header from "@/components/header";
import ImageGallery from "@/components/galery/ImageGallery";
import { NasaAPIParams } from "@/lib/nasa-api-types";
import { redirect } from "next/navigation";
import { NasaAPISortFields } from "@/lib/nasa-api-types";

interface SearchParams extends NasaAPIParams {
  query?: string;
  page?: string;
  rows?: string;
  target?: string;
  instrument?: string;
  mission?: string;
  sort?: string;
  start_date?: string;
  stop_date?: string;
}

// Server Action for form submission
async function searchAction(formData: FormData) {
  'use server';
  
  // Build query parameters from the form data
  const params = new URLSearchParams();
  
  const query = formData.get("query")?.toString();
  if (query) params.set("query", query);
  
  const target = formData.get("target")?.toString();
  if (target) params.set("target", target);
  
  const rows = formData.get("rows")?.toString();
  if (rows) params.set("rows", rows);
  
  const instrument = formData.get("instrument")?.toString();
  if (instrument) params.set("instrument", instrument);
  
  const mission = formData.get("mission")?.toString();
  if (mission) params.set("mission", mission);
  
  const sort = formData.get("sort")?.toString();
  if (sort) params.set("sort", sort);
  
  const startDate = formData.get("start_date")?.toString();
  if (startDate) params.set("start_date", startDate);
  
  const stopDate = formData.get("stop_date")?.toString();
  if (stopDate) params.set("stop_date", stopDate);
  
  // Reset to page 1 on new search
  params.set("page", "1");
  
  // Redirect to the same page with new query parameters
  redirect(`/galery-test?${params.toString()}`);
}

export default async function Gallery(
  { searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }
) {
  // Helper function to safely get string parameter
  const getStringParam = (param: string | string[] | undefined): string | undefined => {
    if (!param) return undefined;
    return Array.isArray(param) ? param[0] : param;
  };

  // Default values
  const query = getStringParam(searchParams.query) || "crater";
  const page = Number(getStringParam(searchParams.page)) || 1;
  const rows = Number(getStringParam(searchParams.rows)) || 12;
  
  // Additional API parameters
  const target = getStringParam(searchParams.target);
  const instrument = getStringParam(searchParams.instrument);
  const mission = getStringParam(searchParams.mission);
  const sort = getStringParam(searchParams.sort);
  const startDate = getStringParam(searchParams.start_date);
  const stopDate = getStringParam(searchParams.stop_date);
  
  // Calculate start index for API
  const start = (page - 1) * rows;

  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">NASA Image Gallery</h1>

        {/* Search form with expanded options */}
        <form action={searchAction} className="mb-8 space-y-4">
          <div className="flex gap-2">
            <input
              type="text"
              name="query"
              placeholder="Search for images (e.g., crater, mountain, canyon)"
              className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              defaultValue={query}
            />
            <button 
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md transition-colors"
            >
              Search
            </button>
          </div>
          
          <details className="bg-gray-800/50 p-4 rounded-lg">
            <summary className="cursor-pointer font-medium text-blue-400 mb-2">Advanced Search Options</summary>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
              <div>
                <label className="block text-sm text-gray-300 mb-1">Target Body</label>
                <input
                  type="text"
                  name="target"
                  placeholder="e.g., mars, europa"
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md"
                  defaultValue={target}
                />
              </div>
              
              <div>
                <label className="block text-sm text-gray-300 mb-1">Instrument</label>
                <input
                  type="text"
                  name="instrument"
                  placeholder="e.g., MAHLI, NAVCAM"
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md"
                  defaultValue={instrument}
                />
              </div>
              
              <div>
                <label className="block text-sm text-gray-300 mb-1">Mission</label>
                <input
                  type="text"
                  name="mission"
                  placeholder="e.g., MSL, VOYAGER"
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md"
                  defaultValue={mission}
                />
              </div>
              
              <div>
                <label className="block text-sm text-gray-300 mb-1">Items Per Page</label>
                <select 
                  name="rows" 
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md"
                  defaultValue={rows}
                >
                  <option value="12">12</option>
                  <option value="24">24</option>
                  <option value="48">48</option>
                  <option value="96">96</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm text-gray-300 mb-1">Sort By</label>
                <select 
                  name="sort" 
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md"
                  defaultValue={sort || "score desc"}
                >
                  <option value="score desc">Relevance</option>
                  <option value="time_min desc">Date (Newest First)</option>
                  <option value="time_min asc">Date (Oldest First)</option>
                  <option value="target asc">Target Name (A-Z)</option>
                  <option value="instrument_name asc">Instrument (A-Z)</option>
                  <option value="mission_name asc">Mission (A-Z)</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm text-gray-300 mb-1">Start Date</label>
                <input
                  type="date"
                  name="start_date"
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md"
                  defaultValue={startDate}
                />
              </div>
              
              <div>
                <label className="block text-sm text-gray-300 mb-1">End Date</label>
                <input
                  type="date"
                  name="stop_date"
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md"
                  defaultValue={stopDate}
                />
              </div>
            </div>
          </details>
        </form>

        <ImageGallery 
          query={query}
          itemsPerPage={rows}
          apiParams={{
            image_content: query,
            start: start.toString(),
            rows: rows.toString(),
            target: target,
            instrument_name: instrument, // Map instrument param to instrument_name
            mission_name: mission, // Map mission param to mission_name
            sort: sort,
            start_date: startDate ? `${startDate}T00:00:00Z` : undefined,
            stop_date: stopDate ? `${stopDate}T23:59:59Z` : undefined
          }}
          currentPage={page}
        />
      </main>
    </>
  );
}
