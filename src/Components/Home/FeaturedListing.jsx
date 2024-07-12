"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";

const cardData = {
  forBuy: [
    {
      name: "Sarah Avenue",
      price: "$40,533",
      address: "Downtown, W/55 street, Toronto",
      beds: 2,
      baths: 3,
      measurement: 430,
      imgSrc: "https://i.ibb.co/ys3rmVZ/Rectangle-122.png",
    },
    {
      name: "Sarah Avenue",
      price: "$40,533",
      address: "Downtown, W/55 street, Toronto",
      beds: 2,
      baths: 3,
      measurement: 430,
      imgSrc: "https://i.ibb.co/ys3rmVZ/Rectangle-122.png",
    },
    {
      name: "Sarah Avenue",
      price: "$40,533",
      address: "Downtown, W/55 street, Toronto",
      beds: 2,
      baths: 3,
      measurement: 430,
      imgSrc: "https://i.ibb.co/ys3rmVZ/Rectangle-122.png",
    },
    {
      name: "Sarah Avenue",
      price: "$40,533",
      address: "Downtown, W/55 street, Toronto",
      beds: 2,
      baths: 3,
      measurement: 430,
      imgSrc: "https://i.ibb.co/ys3rmVZ/Rectangle-122.png",
    },
    {
      name: "Sarah Avenue",
      price: "$40,533",
      address: "Downtown, W/55 street, Toronto",
      beds: 2,
      baths: 3,
      measurement: 430,
      imgSrc: "https://i.ibb.co/ys3rmVZ/Rectangle-122.png",
    },
    {
      name: "Sarah Avenue",
      price: "$40,533",
      address: "Downtown, W/55 street, Toronto",
      beds: 2,
      baths: 3,
      measurement: 430,
      imgSrc: "https://i.ibb.co/ys3rmVZ/Rectangle-122.png",
    },
    {
      name: "Sarah Avenue",
      price: "$40,533",
      address: "Downtown, W/55 street, Toronto",
      beds: 2,
      baths: 3,
      measurement: 430,
      imgSrc: "https://i.ibb.co/ys3rmVZ/Rectangle-122.png",
    },
    {
      name: "Sarah Avenue",
      price: "$40,533",
      address: "Downtown, W/55 street, Toronto",
      beds: 2,
      baths: 3,
      measurement: 430,
      imgSrc: "https://i.ibb.co/ys3rmVZ/Rectangle-122.png",
    },
    {
      name: "Sarah Avenue",
      price: "$40,533",
      address: "Downtown, W/55 street, Toronto",
      beds: 2,
      baths: 3,
      measurement: 430,
      imgSrc: "https://i.ibb.co/ys3rmVZ/Rectangle-122.png",
    },
    {
      name: "Sarah Avenue",
      price: "$40,533",
      address: "Downtown, W/55 street, Toronto",
      beds: 2,
      baths: 3,
      measurement: 430,
      imgSrc: "https://i.ibb.co/ys3rmVZ/Rectangle-122.png",
    },
    {
      name: "Sarah Avenue",
      price: "$40,533",
      address: "Downtown, W/55 street, Toronto",
      beds: 2,
      baths: 3,
      measurement: 430,
      imgSrc: "https://i.ibb.co/ys3rmVZ/Rectangle-122.png",
    },
    // Add more items as needed
  ],
  forSell: [
    {
      name: "Sarah Avenue",
      price: "$40,533",
      address: "Downtown, W/55 street, Toronto",
      beds: 2,
      baths: 3,
      measurement: 430,
      imgSrc: "https://i.ibb.co/ys3rmVZ/Rectangle-122.png",
    },
    {
      name: "Sarah Avenue",
      price: "$40,533",
      address: "Downtown, W/55 street, Toronto",
      beds: 2,
      baths: 3,
      measurement: 430,
      imgSrc: "https://i.ibb.co/ys3rmVZ/Rectangle-122.png",
    },
    {
      name: "Sarah Avenue",
      price: "$40,533",
      address: "Downtown, W/55 street, Toronto",
      beds: 2,
      baths: 3,
      measurement: 430,
      imgSrc: "https://i.ibb.co/ys3rmVZ/Rectangle-122.png",
    },
    {
      name: "Sarah Avenue",
      price: "$40,533",
      address: "Downtown, W/55 street, Toronto",
      beds: 2,
      baths: 3,
      measurement: 430,
      imgSrc: "https://i.ibb.co/ys3rmVZ/Rectangle-122.png",
    },
    // Add more items as needed
  ],

  forRent: [
    {
      name: "Sarah Avenue",
      price: "$40,533",
      address: "Downtown, W/55 street, Toronto",
      beds: 2,
      baths: 3,
      measurement: 430,
      imgSrc: "https://i.ibb.co/ys3rmVZ/Rectangle-122.png",
    },
    {
      name: "Sarah Avenue",
      price: "$40,533",
      address: "Downtown, W/55 street, Toronto",
      beds: 2,
      baths: 3,
      measurement: 430,
      imgSrc: "https://i.ibb.co/ys3rmVZ/Rectangle-122.png",
    },
    {
      name: "Sarah Avenue",
      price: "$40,533",
      address: "Downtown, W/55 street, Toronto",
      beds: 2,
      baths: 3,
      measurement: 430,
      imgSrc: "https://i.ibb.co/ys3rmVZ/Rectangle-122.png",
    },
    {
      name: "Sarah Avenue",
      price: "$40,533",
      address: "Downtown, W/55 street, Toronto",
      beds: 2,
      baths: 3,
      measurement: 430,
      imgSrc: "https://i.ibb.co/ys3rmVZ/Rectangle-122.png",
    },
    {
      name: "Sarah Avenue",
      price: "$40,533",
      address: "Downtown, W/55 street, Toronto",
      beds: 2,
      baths: 3,
      measurement: 430,
      imgSrc: "https://i.ibb.co/ys3rmVZ/Rectangle-122.png",
    },
    {
      name: "Sarah Avenue",
      price: "$40,533",
      address: "Downtown, W/55 street, Toronto",
      beds: 2,
      baths: 3,
      measurement: 430,
      imgSrc: "https://i.ibb.co/ys3rmVZ/Rectangle-122.png",
    },
    {
      name: "Sarah Avenue",
      price: "$40,533",
      address: "Downtown, W/55 street, Toronto",
      beds: 2,
      baths: 3,
      measurement: 430,
      imgSrc: "https://i.ibb.co/ys3rmVZ/Rectangle-122.png",
    },
    {
      name: "Sarah Avenue",
      price: "$40,533",
      address: "Downtown, W/55 street, Toronto",
      beds: 2,
      baths: 3,
      measurement: 430,
      imgSrc: "https://i.ibb.co/ys3rmVZ/Rectangle-122.png",
    },
    {
      name: "Sarah Avenue",
      price: "$40,533",
      address: "Downtown, W/55 street, Toronto",
      beds: 2,
      baths: 3,
      measurement: 430,
      imgSrc: "https://i.ibb.co/ys3rmVZ/Rectangle-122.png",
    },
    {
      name: "Sarah Avenue",
      price: "$40,533",
      address: "Downtown, W/55 street, Toronto",
      beds: 2,
      baths: 3,
      measurement: 430,
      imgSrc: "https://i.ibb.co/ys3rmVZ/Rectangle-122.png",
    },
    {
      name: "Sarah Avenue",
      price: "$40,533",
      address: "Downtown, W/55 street, Toronto",
      beds: 2,
      baths: 3,
      measurement: 430,
      imgSrc: "https://i.ibb.co/ys3rmVZ/Rectangle-122.png",
    },
    {
      name: "Sarah Avenue",
      price: "$40,533",
      address: "Downtown, W/55 street, Toronto",
      beds: 2,
      baths: 3,
      measurement: 430,
      imgSrc: "https://i.ibb.co/ys3rmVZ/Rectangle-122.png",
    },
    {
      name: "Sarah Avenue",
      price: "$40,533",
      address: "Downtown, W/55 street, Toronto",
      beds: 2,
      baths: 3,
      measurement: 430,
      imgSrc: "https://i.ibb.co/ys3rmVZ/Rectangle-122.png",
    },
    {
      name: "Sarah Avenue",
      price: "$40,533",
      address: "Downtown, W/55 street, Toronto",
      beds: 2,
      baths: 3,
      measurement: 430,
      imgSrc: "https://i.ibb.co/ys3rmVZ/Rectangle-122.png",
    },
    {
      name: "Sarah Avenue",
      price: "$40,533",
      address: "Downtown, W/55 street, Toronto",
      beds: 2,
      baths: 3,
      measurement: 430,
      imgSrc: "https://i.ibb.co/ys3rmVZ/Rectangle-122.png",
    },
    {
      name: "Sarah Avenue",
      price: "$40,533",
      address: "Downtown, W/55 street, Toronto",
      beds: 2,
      baths: 3,
      measurement: 430,
      imgSrc: "https://i.ibb.co/ys3rmVZ/Rectangle-122.png",
    },
    {
      name: "Sarah Avenue",
      price: "$40,533",
      address: "Downtown, W/55 street, Toronto",
      beds: 2,
      baths: 3,
      measurement: 430,
      imgSrc: "https://i.ibb.co/ys3rmVZ/Rectangle-122.png",
    },
    {
      name: "Sarah Avenue",
      price: "$40,533",
      address: "Downtown, W/55 street, Toronto",
      beds: 2,
      baths: 3,
      measurement: 430,
      imgSrc: "https://i.ibb.co/ys3rmVZ/Rectangle-122.png",
    },
    {
      name: "Sarah Avenue",
      price: "$40,533",
      address: "Downtown, W/55 street, Toronto",
      beds: 2,
      baths: 3,
      measurement: 430,
      imgSrc: "https://i.ibb.co/ys3rmVZ/Rectangle-122.png",
    },
    {
      name: "Sarah Avenue",
      price: "$40,533",
      address: "Downtown, W/55 street, Toronto",
      beds: 2,
      baths: 3,
      measurement: 430,
      imgSrc: "https://i.ibb.co/ys3rmVZ/Rectangle-122.png",
    },
    // Add more items as needed
  ],
  forSelli: [
    {
      name: "Sarah Avenue",
      price: "$40,533",
      address: "Downtown, W/55 street, Toronto",
      beds: 2,
      baths: 3,
      measurement: 430,
      imgSrc: "https://i.ibb.co/ys3rmVZ/Rectangle-122.png",
    },
    {
      name: "Sarah Avenue",
      price: "$40,533",
      address: "Downtown, W/55 street, Toronto",
      beds: 2,
      baths: 3,
      measurement: 430,
      imgSrc: "https://i.ibb.co/ys3rmVZ/Rectangle-122.png",
    },
    {
      name: "Sarah Avenue",
      price: "$40,533",
      address: "Downtown, W/55 street, Toronto",
      beds: 2,
      baths: 3,
      measurement: 430,
      imgSrc: "https://i.ibb.co/ys3rmVZ/Rectangle-122.png",
    },
    {
      name: "Sarah Avenue",
      price: "$40,533",
      address: "Downtown, W/55 street, Toronto",
      beds: 2,
      baths: 3,
      measurement: 430,
      imgSrc: "https://i.ibb.co/ys3rmVZ/Rectangle-122.png",
    },
    // Add more items as needed
  ],
};

const itemsPerPage = 6;

export default function Featured() {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentTab, setCurrentTab] = useState(0);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleTabChange = (tabIndex) => {
    setCurrentTab(tabIndex);
    setCurrentPage(1);
  };

  const getPaginatedData = (data) => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return data.slice(startIndex, endIndex);
  };

  const getTotalPages = (data) => {
    return Math.ceil(data.length / itemsPerPage);
  };

  const getAllData = () => {
    return [...cardData.forBuy, ...cardData.forSell, ...cardData.forRent];
  };

  const currentData = () => {
    switch (currentTab) {
      case 0:
        return getAllData();
      case 1:
        return cardData.forBuy;
      case 2:
        return cardData.forSell;
      case 3:
        return cardData.forRent;
      default:
        return getAllData();
    }
  };

  const productCount = () => {
    switch (currentTab) {
      case 0:
        return `${getAllData().length}`;
      case 1:
        return `${cardData.forBuy.length}`;
      case 2:
        return `${cardData.forSell.length}`;
      case 3:
        return `${cardData.forRent.length}`;

      default:
        return `${getAllData().length}`;
    }
  };

  return (
    <div className="">
      <section className="max-w-[1320px] overflow-hidden mx-auto py-32 lg:py-[218px] px-4 ">
        {/* Header section */}
        <header className="text-center justify-center flex flex-col gap-y-3 md:gap-y-6 mb-20">
          <h1
            data-aos-delay="200"
            className="text-[#56382D] font-bold text-4xl  md:text-5xl md:leading-[55px] playfair-display-font"
          >
            Featured Listings
          </h1>
          <div className="w-[156px] bg-[#56382D] mx-auto h-[2px] md:h-[3px] -mt-3"></div>
          <p
            data-aos-delay="400"
            className="sm:text-xl text-[#000000B2] text-sm font-normal "
          >
            Handpicked Featured Listings Showcasing the Best Homes and
            Investment Opportunities Available
          </p>
        </header>
        <div className="text-center mb-10"></div>
        <div className="mx-auto mt-20">
          <Tabs selectedIndex={currentTab} onSelect={handleTabChange}>
            <TabList className="flex lg:space-x-4 text-xl  font-normal text-black mb-6">
              <Tab
                selectedClassName="bg-primary rounded text-white"
                className="px-4 py-2 cursor-pointer border-b-2 hover:border-primary border-transparent"
              >
                All
              </Tab>
              <Tab
                selectedClassName="bg-primary rounded text-white"
                className="px-4 py-2 cursor-pointer border-b-2 hover:border-primary border-transparent"
              >
                Buy
              </Tab>
              <Tab
                selectedClassName="bg-primary rounded text-white"
                className="px-4 py-2 cursor-pointer border-b-2 hover:border-primary border-transparent"
              >
                Sell
              </Tab>

              <Tab
                selectedClassName="bg-primary rounded text-white"
                className="px-4 py-2 cursor-pointer border-b-2 hover:border-primary border-transparent"
              >
                Rent
              </Tab>
            </TabList>
            <div className="flex justify-between items-center border py-4 border-x-0">
              <p className="text-xl">{productCount()} Listings Found</p>
              <div className="flex items-center text-xl font-normal">
                <span className="mr-2 hidden md:block">Go to the page:</span>
                <span className="mr-2 block md:hidden">Pages:</span>
                <select
                  value={currentPage}
                  onChange={(e) => handlePageChange(Number(e.target.value))}
                  className="border rounded px-2 py-1"
                >
                  {Array.from({ length: getTotalPages(currentData()) }).map(
                    (_, index) => (
                      <option key={index} value={index + 1}>
                        {index + 1}
                      </option>
                    ),
                  )}
                </select>
              </div>
            </div>
            <TabPanel>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-6">
                {getPaginatedData(getAllData()).map((card, index) => (
                  <div
                    key={index}
                    className="rounded-lg overflow-hidden"
                    data-aos="fade-up"
                  >
                    <Image
                      src={card.imgSrc}
                      alt={card.name}
                      width={300}
                      height={200}
                      className="w-full h-auto mb-4"
                    />
                    <div className="p-6 flex flex-col gap-5">
                      <div className="flex justify-between items-center text-base text-black font-normal">
                        <h3 className="font-medium text-2xl md:text-[32px]">
                          {card.name}
                        </h3>
                        <p className="text-red-600 font-medium text-2xl md:text-[32px]">
                          {card.price}
                        </p>
                      </div>
                      <p className="text-base md:text-xl">{card.address}</p>
                      <p className="text-base md:text-xl mt-[-10px] md:mt-0">
                        {card.beds} Beds | {card.baths} Baths |{" "}
                        {card.measurement} Sq/Ft
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </TabPanel>
            <TabPanel>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
                {getPaginatedData(cardData.forBuy).map((card, index) => (
                  <div
                    key={index}
                    className="rounded-lg overflow-hidden"
                    data-aos="fade-up"
                  >
                    <Image
                      src={card.imgSrc}
                      alt={card.name}
                      width={300}
                      height={200}
                      className="w-full h-auto mb-4"
                    />
                    <div className="p-6 flex flex-col gap-5">
                      <div className="flex justify-between items-center text-base text-black font-normal">
                        <h3 className="font-medium text-2xl md:text-[32px]">
                          {card.name}
                        </h3>
                        <p className="text-red-600 font-medium text-2xl md:text-[32px]">
                          {card.price}
                        </p>
                      </div>
                      <p className="text-base md:text-xl">{card.address}</p>
                      <p className="text-base md:text-xl mt-[-10px] md:mt-0">
                        {card.beds} Beds | {card.baths} Baths |{" "}
                        {card.measurement} Sq/Ft
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </TabPanel>
            <TabPanel>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
                {getPaginatedData(cardData.forSell).map((card, index) => (
                  <div
                    key={index}
                    className="rounded-lg overflow-hidden"
                    data-aos="fade-up"
                  >
                    <Image
                      src={card.imgSrc}
                      alt={card.name}
                      width={300}
                      height={200}
                      className="w-full h-auto mb-4"
                    />
                    <div className="p-6 flex flex-col gap-5">
                      <div className="flex justify-between items-center text-base text-black font-normal">
                        <h3 className="font-medium text-2xl md:text-[32px]">
                          {card.name}
                        </h3>
                        <p className="text-red-600 font-medium text-2xl md:text-[32px]">
                          {card.price}
                        </p>
                      </div>
                      <p className="text-base md:text-xl">{card.address}</p>
                      <p className="text-base md:text-xl mt-[-10px] md:mt-0">
                        {card.beds} Beds | {card.baths} Baths |{" "}
                        {card.measurement} Sq/Ft
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </TabPanel>

            <TabPanel>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
                {getPaginatedData(cardData.forRent).map((card, index) => (
                  <div
                    key={index}
                    className="rounded-lg overflow-hidden"
                    data-aos="fade-up"
                  >
                    <Image
                      src={card.imgSrc}
                      alt={card.name}
                      width={300}
                      height={200}
                      className="w-full h-auto mb-4"
                    />
                    <div className="p-6 flex flex-col gap-5">
                      <div className="flex justify-between items-center text-base text-black font-normal">
                        <h3 className="font-medium text-2xl md:text-[32px]">
                          {card.name}
                        </h3>
                        <p className="text-red-600 font-medium text-2xl md:text-[32px]">
                          {card.price}
                        </p>
                      </div>
                      <p className="text-base md:text-xl">{card.address}</p>
                      <p className="text-base md:text-xl mt-[-10px] md:mt-0">
                        {card.beds} Beds | {card.baths} Baths |{" "}
                        {card.measurement} Sq/Ft
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </TabPanel>
          </Tabs>
          {/* pagination  */}
          <div className="flex flex-col md:flex-row gap-y-5 justify-between items-center mt-10 border border-x-0 pt-4 border-b-0">
            <p className="text-xl">{productCount()} Listings Found</p>
            <div className="flex flex-wrap gap-y-5 text-xl text-black">
              <button
                onClick={() => handlePageChange(1)}
                disabled={currentPage === 1}
                className="mx-1 px-3 py-1 border rounded bg-white  disabled:opacity-50 disabled:cursor-not-allowed"
              >
                First
              </button>
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="mx-1 px-3 py-1 border rounded bg-white disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Previous
              </button>
              {Array.from({ length: getTotalPages(currentData()) }).map(
                (_, index) => (
                  <button
                    key={index}
                    onClick={() => handlePageChange(index + 1)}
                    className={`mx-1 px-3 py-1 border rounded ${
                      currentPage === index + 1
                        ? "bg-primary rounded text-white"
                        : "bg-white "
                    }`}
                  >
                    {index + 1}
                  </button>
                ),
              )}
              <button
                onClick={() => handlePageChange(getTotalPages(currentData()))}
                disabled={currentPage === getTotalPages(currentData())}
                className="mx-1 px-3 py-1 border rounded bg-white  disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Last
              </button>
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === getTotalPages(currentData())}
                className="mx-1 px-3 py-1 border rounded bg-white disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Next
              </button>
            </div>
            <div className="flex items-center text-xl font-normal">
              <span className="mr-2 hidden md:block">Go to the page:</span>
              <span className="mr-2 block md:hidden">Pages:</span>
              <select
                value={currentPage}
                onChange={(e) => handlePageChange(Number(e.target.value))}
                className="border rounded px-2 py-1"
              >
                {Array.from({ length: getTotalPages(currentData()) }).map(
                  (_, index) => (
                    <option key={index} value={index + 1}>
                      {index + 1}
                    </option>
                  ),
                )}
              </select>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
