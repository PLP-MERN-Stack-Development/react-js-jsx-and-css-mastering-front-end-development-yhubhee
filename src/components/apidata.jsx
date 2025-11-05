// src/components/ApiData.jsx
import React, { useState, useEffect } from "react";
import Button from "./button";
import Loader from "./loader";


const ApiData = () => {
  const [data, setData] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [page, setPage] = useState(1);
  const limit = 10; // items per page

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${limit}`);
        if (!res.ok) throw new Error("Failed to fetch data");
        const json = await res.json();
        setData(json);
        setFiltered(json);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [page]);

  // 🔍 Search filter
  useEffect(() => {
    if (search.trim() === "") {
      setFiltered(data);
    } else {
      const lower = search.toLowerCase();
      setFiltered(data.filter((item) => item.title.toLowerCase().includes(lower)));
    }
  }, [search, data]);

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">🌐 Public API Data</h2>

      {/* Search */}
      <div className="flex items-center gap-2 mb-4">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search posts..."
          className="flex-1 border rounded px-3 py-2 text-gray-800"
        />
        <Button variant="secondary" onClick={() => setSearch("")}>
          Clear
        </Button>
      </div>

      {/* Loading & Error States */}
      {loading && <Loader />}
      {error && <p className="text-red-500">Error: {error}</p>}

      {/* Data Display */}
      {!loading && !error && (
        <div className="grid md:grid-cols-2 gap-4">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="border border-gray-200 dark:border-gray-700 p-4 rounded-lg hover:shadow-md transition"
            >
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">{item.body}</p>
            </div>
          ))}
        </div>
      )}

      {/* Pagination */}
      <div className="flex justify-between mt-6">
        <Button
          variant="secondary"
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          disabled={page === 1}
        >
          Prev
        </Button>
        <span className="text-sm font-medium">Page {page}</span>
        <Button variant="secondary" onClick={() => setPage((prev) => prev + 1)}>
          Next
        </Button>
      </div>
    </div>
  );
};

export default ApiData;
