import React from "react";
import { useGlobalContext } from "../context/context";

//PREV PAGE
const Pagination = () => {
  const { page, nbPages,prevPage,nextPage } = useGlobalContext();
  return (
    <div className="flex items-center mt-10">
      <button 
      onClick={() => prevPage()}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-l">
        Prev
      </button>
      <p className="mx-2">Page <span className="font-bold">{page + 1}</span> of {nbPages}</p>
      <button 
   onClick={() => nextPage()}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r">
        Next
      </button>
    </div>
  );
};

export default Pagination;
