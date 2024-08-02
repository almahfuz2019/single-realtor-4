"use client";
import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";


export default function SearchArea() {
  return (
    <div className="max-w-[1320px] mx-auto px-4">
      {/* Search Tabs */}
      <div
        className="-mt-14 w-full bg-[#E2E6E7] py-8 px-4 rounded-xl text-black"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        <Tabs>
          <TabList className="flex flex-wrap font-georgia font-normal justify-center space-x-2 lg:space-x-4 mb-8">
            <Tab
              className="px-2 lg:px-4 py-2 cursor-pointer text-lg md:text-2xl font-normal"
              selectedClassName="border-b-2 border-[#56382D] text-[#56382D]"
            >
              Sell
            </Tab>
            <Tab
              className="px-2 lg:px-4 py-2 cursor-pointer text-lg md:text-2xl font-normal"
              selectedClassName="border-b-2 border-[#56382D] text-[#56382D]"
            >
              Buy
            </Tab>
            <Tab
              className="px-2 lg:px-4 py-2 cursor-pointer text-lg md:text-2xl font-normal"
              selectedClassName="border-b-2 border-[#56382D] text-[#56382D]"
            >
              Rent
            </Tab>
          </TabList>

          {/* Sell Tab */}
          <TabPanel>
            <form className="flex font-century-gothic flex-wrap lg:flex-nowrap justify-center space-y-4 lg:space-y-0 lg:space-x-4">
              <select className="w-full lg:w-1/4 p-2 border rounded-xl text-base">
                <option>Property Category</option>
                <option>Property Category sell</option>
                <option>Property Category</option>
                {/* Add more options here */}
              </select>
              <select className="w-full lg:w-1/4 p-2 border rounded-xl text-base">
                <option>Location</option>
                <option>Location1 sell</option>
                <option>Location2</option>
                {/* Add more options here */}
              </select>
              <select className="w-full lg:w-1/4 p-2 border rounded-xl text-base">
                <option>Average Price</option>
                <option>Average Price</option>
                <option>Average Price</option>
                <option>Average Price sell</option>
                {/* Add more options here */}
              </select>
              <button
                type="submit"
                className="w-full lg:w-1/4 p-2 bg-[#D1513A] text-lg md:text-2xl text-white rounded-xl font-montserrat transition duration-300 ease-in-out transform hover:bg-red-600  "
              >
                Browse
              </button>
            </form>
          </TabPanel>

          {/* Buy Tab */}
          <TabPanel>
            <form className="flex flex-wrap lg:flex-nowrap font-century-gothic justify-center space-y-4 lg:space-y-0 lg:space-x-4">
              <select className="w-full lg:w-1/4 p-2 border rounded-xl text-base">
                <option>Property Category</option>
                <option>Property Category buy</option>
                <option>Property Category</option>
                {/* Add more options here */}
              </select>
              <select className="w-full lg:w-1/4 p-2 border rounded-xl text-base">
                <option>Location</option>
                <option>Location1 buy</option>
                <option>Location2</option>
                {/* Add more options here */}
              </select>
              <select className="w-full lg:w-1/4 p-2 border rounded-xl text-base">
                <option>Average Price</option>
                <option>Average Price buy</option>
                <option>Average Price</option>
                {/* Add more options here */}
              </select>
              <button
                type="submit"
                className="w-full lg:w-1/4 p-2 bg-[#C61414CC] text-lg md:text-2xl text-white rounded-xl font-montserrat transition duration-300 ease-in-out transform hover:bg-red-600"
              >
                Browse
              </button>
            </form>
          </TabPanel>

          {/* Rent Tab */}
          <TabPanel>
            <form className="flex flex-wrap lg:flex-nowrap font-century-gothic justify-center space-y-4 lg:space-y-0 lg:space-x-4">
              <select className="w-full lg:w-1/4 p-2 border rounded-xl text-base">
                <option>Property Category</option>
                <option>Property Category rent</option>
                <option>Property Category</option>
                {/* Add more options here */}
              </select>
              <select className="w-full lg:w-1/4 p-2 border rounded-xl text-base">
                <option>Location</option>
                <option>Location1 rent</option>
                <option>Location2</option>
                {/* Add more options here */}
              </select>
              <select className="w-full lg:w-1/4 p-2 border rounded-xl text-base">
                <option>Average Price</option>
                <option>Average Price rent</option>
                <option>Average Price</option>
                {/* Add more options here */}
              </select>
              <button
                type="submit"
                className="w-full lg:w-1/4 p-2 bg-[#C61414CC] text-lg md:text-2xl text-white rounded-xl font-montserrat transition duration-300 ease-in-out transform hover:bg-red-600"
              >
                Browse
              </button>
            </form>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
}
