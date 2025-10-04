"use client";

import Header from "@/components/header";
import ImageGallery from "@/components/galery/ImageGallery";
import { useState } from "react";

export default function Gallery() {
  const [searchQuery, setSearchQuery] = useState<string>("crater");

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const query = formData.get("query") as string;
    if (query) {
      setSearchQuery(query);
    }
  };

  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">NASA Image Gallery</h1>

        {/* Search form */}
        <form onSubmit={handleSearch} className="mb-8 flex gap-2">
          <input
            type="text"
            name="query"
            placeholder="Search for images (e.g., crater, mountain, canyon)"
            className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            defaultValue={searchQuery}
          />
          <button 
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md transition-colors"
          >
            Search
          </button>
        </form>

        <ImageGallery query={searchQuery} />
      </main>
    </>
  );
}
