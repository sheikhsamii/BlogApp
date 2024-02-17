import React from "react";
import Pagination from "./components/Pagination";
import Search from "./components/Search";
import Stories from "./components/Stories";

function App() {
 
  
  return (
    <div className="flex items-center justify-center flex-col">
      <Search />
      <Pagination />
      <Stories />
    </div>
  );
}

export default App;
