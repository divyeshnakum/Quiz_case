import React, { useEffect, useRef, useState } from "react";
import Pagination from "./Pagination";


const PaginationList = ({ data = [] }) => {
  const containerRef = useRef(null);
  const CARD_WIDTH = 220; // card width in px
  const ROWS = 2; // how many rows you want in UI
const totalItems = data.length;
  const [itemsPerPage, setItemsPerPage] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  // 🔹 AUTO calculate items per page
  useEffect(() => {
    const calculateItems = () => {
      if (!containerRef.current) return;

      const containerWidth = containerRef.current.offsetWidth;
      const itemsPerRow = Math.floor(containerWidth / CARD_WIDTH);

      const calculatedItems = Math.max(itemsPerRow * ROWS, 1);
      setItemsPerPage(calculatedItems);
    };

    calculateItems();
    window.addEventListener("resize", calculateItems);
    return () => window.removeEventListener("resize", calculateItems);
  }, []);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const visibleData = data.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <div>
      {/* Data Container */}
      <div
        ref={containerRef}
        className="grid gap-4"
        style={{
          gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
        }}
      >
        {visibleData.map((item, index) => (
          <div key={index} className="border p-4 rounded shadow">
            {item}
          </div>
        ))}
      </div>

      {/* Pagination */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default PaginationList;
