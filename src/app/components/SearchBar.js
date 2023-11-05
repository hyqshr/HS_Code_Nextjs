"use client"
import React, { useState } from 'react';
import axios from 'axios'; // Import Axios

const SearchBar = () => {
    const [search, setSearch] = useState('');
    const [result, setResult] = useState(null); // To store the response

    const handleSearch = async () => { // Make the function asynchronous
        try {
            const response = await axios.get(
                `https://faidsfxae2m7pbhmcn2ggxf6ui0tklzk.lambda-url.us-east-1.on.aws/?description=${search}`
                ); 
            setResult(response.data); // Store the response data
        } catch (error) {
            console.error("There was an error fetching the data:", error);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 class="mb-4 text-4xl py-5 font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl text-black">Harmonized System (HS) Codes Look Up</h1>
            <p class="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48">🚀 Fast-track your trade with a touch of AI! 🤖 Dive into the future of HS code lookups and let our intelligent system do the heavy lifting for you. </p>


            <div className="flex border-2 rounded-lg w-3/4">
                <input 
                    type="text" 
                    placeholder="Search..." 
                    className="w-full py-4 px-6 rounded-l-lg focus:outline-none"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <button 
                    onClick={handleSearch}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-4 rounded-r-lg"
                >
                    Search
                </button>
            </div>

            <div className='py-7 flex flex-col items-center justify-center'>
              {result && (
                  <table className="w-2/3 bg-white shadow-md rounded-lg py-9">
                      <thead>
                          <tr className="w-full h-16 border-gray-300 border-b py-8">
                              <th className="pl-14 text-gray-600 font-normal pr-6 text-left text-sm tracking-normal leading-4">Code</th>
                              <th className="text-gray-600 font-normal pr-6 text-left text-sm tracking-normal leading-4">Confidence</th>
                              <th className="text-gray-600 font-normal pr-6 text-left text-sm tracking-normal leading-4">Keywords</th>
                          </tr>
                      </thead>
                      <tbody>
                          {Object.entries(result.top5)
                            .sort((a, b) => b[1] - a[1]) // Sort by value in descending order
                            .map(([code, value]) => (
                              <tr key={code} className="h-14 border-gray-300 border-b">
                                  <td className="pl-14 text-sm pr-6 whitespace-no-wrap text-gray-800 tracking-normal leading-4">{code}</td>
                                  <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 tracking-normal leading-4">{value}</td>
                                  <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 tracking-normal leading-4">{result.keywords[code]}</td>
                              </tr>
                          ))}
                      </tbody>
                  </table>
              )}
            </div>
        </div>
    );
};

export default SearchBar;
