import React, { useEffect, useState } from "react";
import Loader from "./Loader";
import { useGlobalContext } from "../context/context";

const Stories = () => {
  

  const { hits, isLoading } = useGlobalContext();
  console.log(hits, "hits");

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleString();
  };

  return (
    <>
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-center my-8">Stories</h1>
        {isLoading && (
          <div>
            <Loader />
          </div>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {hits.map((story, index) => (
            <div key={index} className="bg-white rounded shadow-md p-6">
              <h2 className="text-xl font-bold mb-10">{story.title}</h2>
              <p className="text-gray-700">
                Author <b className="capitalize">{story.author}</b>{" "}
              </p>
              <div className="text-gray-700 flex justify-between">
                <p className="text-gray-700">
                  Points <b>{story.points}</b>{" "}
                </p>
                <p>
                  Created At <b>{formatDate(story.created_at)}</b>
                </p>
              </div>

              <a
                href={story.url}
                className="text-blue-500 hover:underline mt-2 block"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read more
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Stories;
