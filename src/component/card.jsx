import { useQuery } from "@tanstack/react-query";
import React from "react";
import { FaStar, FaRegStar } from "react-icons/fa";

const Cards = () => {
  const { data, isLoading, isError } = useQuery({
    queryFn: async () => {
      try {
        const dataFetch = await fetch("https://fakestoreapi.com/products");
        if (dataFetch.ok) {
          const jsonData = await dataFetch.json();
          return jsonData;
        } else {
          throw new console.error("Unable to fecth the data");
        }
      } catch (error) {
        console.log(error);
      }
    },
    queryKey: ["getProducts"],
  });
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-[100vh]">
        Loading....
      </div>
    );
  }
  if (isError) {
    console.log("error to fecth");
    return (
      <div className="flex justify-center items-center h-[100vh]">
        Error in fetching data
      </div>
    );
  }
  if (!data) {
    console.log("Data is undefined or null");
    return <div>Data </div>;
  }
  return (
    <div className="  rounded-lg shadow-md overflow-hidden border border-gray-200 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 m-8">
      {data.map((item) => (
        <div
          key={item.id}
          className=" bg-[#faf7f9] hover:drop-shadow-xl rounded-lg"
        >
          <img
            src={item.image}
            alt="images of cards"
            className="h-[22rem] w-full rounded-t-lg "
          />
          <div className="p-4">
            <h2 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
              <span className="text-red-500 text-xl">●{item.title}</span>
            </h2>

            <p className="text-sm text-gray-600 mt-2 line-clamp-1">
              {/* Lorem Ipsum, Dolor Sit Amet Consectetur Adipisicing Elit. Magni Deserunt Atque Id Quam Iste Placeat Expedita Incidunt? */}
              {item.description}
            </p>

            {/* Rating */}
            <div className="flex items-center text-red-500 mt-3">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaRegStar />
            </div>

            {/* Price */}
            <div className="mt-3 text-lg font-semibold text-gray-800">
              <span className="text-red-500">Rs.{item.price}</span>{" "}
              <span className="text-gray-500 line-through text-sm">
                Rs.2000.00
              </span>
            </div>

            {/* Button */}
            <button className="mt-4 px-4 py-2 bg-red-500 text-white text-sm font-semibold rounded hover:bg-pink-700 transition">
              Book Now
            </button>
          </div>
        </div>
      ))}

      {/* Content */}
    </div>
  );
};

export default Cards;
