import React, { useState } from "react";
import { HiStar } from "react-icons/hi";

function RatingComponent() {
  const [rating, setRating] = useState(0);

  return (
    <div className="bg-white rounded-lg max-w-xs mx-auto overflow-hidden shadow-lg">
      <div className="bg-yellow-200 text-center p-8">
        <div className="p-2 inline-block bg-white rounded-full">
          <HiStar className="h-12 w-12 text-yellow-500" />
        </div>
      </div>
      <div className="px-8 py-6">
        <h2 className="text-center text-gray-700 text-lg font-semibold">
          How Would You Rate Our App Experience?
        </h2>
        <div className="flex justify-center mt-4">
          {[...Array(5)].map((_, i) => (
            <HiStar
              key={i}
              className={`h-6 w-6 cursor-pointer ${
                i < rating ? "text-yellow-500" : "text-gray-300"
              }`}
              onClick={() => setRating(i + 1)}
            />
          ))}
        </div>
        <button className="mt-6 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
          Submit
        </button>
        <button className="mt-4 w-full text-gray-600 hover:text-gray-700">
          No, Thanks!
        </button>
      </div>
    </div>
  );
}

export default RatingComponent;
