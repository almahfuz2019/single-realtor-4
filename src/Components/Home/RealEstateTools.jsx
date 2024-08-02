/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React from "react";

export default function RealEstateTools() {
  return (
    <section className="bg-[#E2E6E7] mt-[168px]">
      <div className="max-w-[1320px] overflow-hidden mx-auto py-32 lg:py-[128px] px-4">
        {/* Header section */}
        {/* Header section */}
        <header className="text-center justify-center flex flex-col gap-y-3 md:gap-y-6 mb-20">
          <h1
            data-aos="fade-up"
            className="text-[#56382D] font-georgia font-bold text-4xl md:text-5xl md:leading-[55px] playfair-display-font"
          >
            Real Estate Tools
          </h1>
          <div
            data-aos="fade-up"
            className="w-[156px] bg-[#56382D] mx-auto h-[2px] md:h-[3px] -mt-1"
          ></div>
          <p
            data-aos="fade-up"
            className="text-sm sm:text-lg md:text-xl text-[#000000B2] font-normal"
          >
            Access Our Suite of Real Estate Tools for Guidance and Instant
            alerts
          </p>
        </header>

        <section className="grid grid-cols-1  items-start bg-white rounded-2xl gap-y-10 md:gap-y-0 overflow-hidden pb-10 md:pb-0">
          {/* Card 1 */}
          <div
            className="grid grid-cols-1 md:grid-cols-2 items-center gap-y-8 md:gap-y-0 "
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <div className="flex items-center gap-8 h-full order-2 md:order-1">
              <div className="xl:flex hidden flex-col items-center justify-center max-w-10">
                <p className="transform -rotate-90 text-primary text-xl font-bold flex font-georgia gap-2 ml-7 leading-none">
                  Buyers
                  <span> Guideline</span>
                </p>
              </div>
              <div className="lg:border-l-2 lg:border-primary h-full md:pl-8 flex flex-col items-center justify-center px-5">
                <p className="text-sm sm:text-base md:text-lg mb-4">
                  Partner with Us to Sell Your Property: Expert Guidance,
                  Comprehensive Marketing, and Skilled Negotiation to Ensure a
                  Successful...
                </p>
                <a
                  href="#"
                  className="rounded-xl bg-primary text-white text-center px-6 py-2 md:mt-4 inline-block font-montserrat transition duration-300 ease-in-out transform hover:bg-red-600 hover:scale-105"
                >
                  See Guideline
                </a>
              </div>
            </div>
            <div className="flex justify-center order-1 md:order-2">
              <Image
                src="/Images/Real_Estate_Tools/real_state_Image1.png"
                alt="Real Estate"
                height="480"
                width="710"
                className="object-cover w-full"
              />
            </div>
          </div>
          {/* Card 2 */}
          <div
            className="grid grid-cols-1 md:grid-cols-2 items-center gap-y-8 md:gap-y-0 "
            data-aos="fade-up"
            data-aos-delay="800"
          >
            <div className="flex justify-center order-1">
              <Image
                src="/Images/Real_Estate_Tools/real_state_Image2.png"
                alt="Real Estate"
                height="480"
                width="710"
                className="object-cover"
              />
            </div>
            <div className="flex items-center gap-8 h-full order-2">
              <div className="lg:border-r-2 lg:border-primary h-full md:pr-8 flex flex-col items-center justify-center px-5">
                <p className="text-sm sm:text-base md:text-lg mb-4">
                  Unlock the Door to Your Dream Home: Essential Tips, Expert
                  Advice, and Comprehensive Resources to Guide You Through Every
                  Step of...
                </p>
                <a
                  href="#"
                  className="rounded-xl bg-primary text-white text-center px-6 py-2 md:mt-4 inline-block font-montserrat transition duration-300 ease-in-out transform hover:bg-red-600 hover:scale-105"
                >
                  See Guideline
                </a>
              </div>
              <div className="xl:flex hidden flex-col items-center justify-center max-w-10">
                <p className="transform -rotate-90 text-primary text-xl font-bold flex font-georgia gap-2 mr-7 leading-none">
                  Buyers
                  <span> Guideline</span>
                </p>
              </div>
            </div>
          </div>
          {/* Card 3 */}
          <div
            className="grid grid-cols-1 md:grid-cols-2 items-center gap-y-8 md:gap-y-0 "
            data-aos="fade-up"
            data-aos-delay="1000"
          >
            <div className="flex items-center gap-8 h-full order-2 md:order-1">
              <div className="xl:flex hidden flex-col items-center justify-center max-w-10">
                <p className="transform -rotate-90 text-primary text-xl font-bold flex font-georgia gap-2 leading-none ml-7">
                  Buyers
                  <span> Guideline</span>
                </p>
              </div>
              <div className="lg:border-l-2 lg:border-primary h-full md:pl-8 flex flex-col items-center justify-center px-5">
                <p className="text-sm sm:text-base md:text-lg mb-4">
                  Stay Ahead of the Market: Sign Up for Instant Alerts and
                  Receive Notifications About New Listings, Price Changes, and
                  Market...
                </p>
                <a
                  href="#"
                  className="rounded-xl bg-primary text-white text-center px-6 py-2 md:mt-4 inline-block font-montserrat transition duration-300 ease-in-out transform hover:bg-red-600 hover:scale-105"
                >
                  See Guideline
                </a>
              </div>
            </div>
            <div className="flex justify-center order-1 md:order-2">
              <Image
                src="/Images/Real_Estate_Tools/real_state_Image3.png"
                alt="Real Estate"
                height="480"
                width="710"
                className="object-cover"
              />
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
