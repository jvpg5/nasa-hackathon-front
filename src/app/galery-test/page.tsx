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
  "use server";

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

export default async function Gallery({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  // Helper function to safely get string parameter
  const getStringParam = (
    param: string | string[] | undefined
  ): string | undefined => {
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
            stop_date: stopDate ? `${stopDate}T23:59:59Z` : undefined,
          }}
          currentPage={page}
        />
      </main>
    </>
  );
}
