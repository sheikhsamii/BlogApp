import React, { useState, useMemo } from "react";
import { useGlobalContext } from "../context/context";

const Search = () => {
    const [input, setInput] = useState("");
    const { setQuery } = useGlobalContext();

    const debounce = (func, delay) => {
        let timer;
        return function (...args) {
            const context = this;
            clearTimeout(timer);
            timer = setTimeout(() => func.apply(context, args), delay);
        };
    };

    // Create memoized debounced function
    const handleInputChange = useMemo(() => {
        return debounce((value) => {
            console.log(value);
            setQuery(value);
        }, 500); // Adjust the delay time as needed
    }, [setQuery]); // Memoize when setQuery changes

    const handleChange = (e) => {
        setInput(e.target.value);
        handleInputChange(e.target.value);
    };

    return (
        <div className="w-full md:w-1/3 mt-20">
            <input
                className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="Search your blog..."
                value={input}
                onChange={handleChange}
            />
        </div>
    );
};

export default Search;
