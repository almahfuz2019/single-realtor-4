"use client";
/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function RealEstateTools() {
  // Initialize AOS for fancy animations
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="bg-[#E2E6E7] mt-[168px]">
      <div className="max-w-[1320px] overflow-hidden mx-auto py-32 lg:py-[128px] px-4">
        {/* Header section */}
        <header className="text-center justify-center flex flex-col gap-y-3 md:gap-y-6 mb-20">
          <h1
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-[#56382D] font-bold text-4xl md:text-5xl md:leading-[55px] playfair-display-font"
          >
            Real Estate Tools
          </h1>
          <div className="w-[156px] bg-[#56382D] mx-auto h-[2px] md:h-[3px] -mt-3"></div>
          <p
            data-aos="fade-up"
            data-aos-delay="400"
            className="sm:text-xl text-[#000000B2] text-sm font-normal"
          >
            Access Our Suite of Real Estate Tools for Guidance and Instant
            alerts
          </p>
        </header>

        <section className="grid grid-cols-1 gap-y-10 items-start">
          {/* Card 1 */}
          <div
            className="grid grid-cols-1 md:grid-cols-2 items-center gap-y-8 md:gap-y-0 gap-x-5"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <div className="flex items-center gap-8 h-full order-2 md:order-1">
              <div className="md:flex hidden flex-col items-center justify-center max-w-0">
                <p className="transform -rotate-90 text-primary text-xl font-bold flex gap-2 leading-none">
                  Buyers
                  <span> Guideline</span>
                </p>
              </div>
              <div className="md:border-l-2 md:border-primary h-full md:pl-8 flex flex-col items-center justify-center">
                <p className="text-lg mb-4">
                  Partner with Us to Sell Your Property: Expert Guidance,
                  Comprehensive Marketing, and Skilled Negotiation to Ensure a
                  Successful and Stress-Free Selling Experience. Maximize Your
                  Home's Value and Achieve Your Real Estate Goals with
                  Confidence.
                </p>
                <a
                  href="#"
                  className="rounded-xl bg-red-500 text-white text-center px-6 py-2  md:mt-4 inline-block"
                >
                  See Guideline
                </a>
              </div>
            </div>
            <div className="flex justify-center order-1 md:order-2">
              <Image
                src="https://i.ibb.co/QY4X94B/Rectangle-3872-1.png"
                alt="Real Estate"
                height="480"
                width="710"
                className="object-cover w-full"
              />
            </div>
          </div>
          {/* Card 2 */}
          <div
            className="grid grid-cols-1 md:grid-cols-2 items-center gap-y-8 md:gap-y-0 gap-x-5"
            data-aos="fade-up"
            data-aos-delay="800"
          >
            <div className="flex justify-center order-1">
              <Image
                src="https://i.ibb.co/QY4X94B/Rectangle-3872-1.png"
                alt="Real Estate"
                height="480"
                width="710"
                className="object-cover"
              />
            </div>
            <div className="flex items-center gap-8 h-full order-2">
              <div className="md:border-r-2 md:border-primary h-full md:pr-8 flex flex-col items-center justify-center">
                <p className="text-lg mb-4">
                  Partner with Us to Sell Your Property: Expert Guidance,
                  Comprehensive Marketing, and Skilled Negotiation to Ensure a
                  Successful and Stress-Free Selling Experience. Maximize Your
                  Home's Value and Achieve Your Real Estate Goals with
                  Confidence.
                </p>
                <a
                  href="#"
                  className="rounded-xl bg-red-500 text-white text-center px-6 py-2  md:mt-4 inline-block"
                >
                  See Guideline
                </a>
              </div>
              <div className="md:flex hidden flex-col items-center justify-center max-w-0">
                <p className="transform -rotate-90 text-primary text-xl font-bold flex gap-2 leading-none">
                  Buyers
                  <span> Guideline</span>
                </p>
              </div>
            </div>
          </div>
          {/* Card 3 */}
          <div
            className="grid grid-cols-1 md:grid-cols-2 items-center gap-y-8 md:gap-y-0 gap-x-5"
            data-aos="fade-up"
            data-aos-delay="1000"
          >
            <div className="flex items-center gap-8 h-full order-2 md:order-1">
              <div className="md:flex hidden flex-col items-center justify-center max-w-0">
                <p className="transform -rotate-90 text-primary text-xl font-bold flex gap-2 leading-none">
                  Buyers
                  <span> Guideline</span>
                </p>
              </div>
              <div className="md:border-l-2 md:border-primary h-full md:pl-8 flex flex-col items-center justify-center">
                <p className="text-lg mb-4">
                  Partner with Us to Sell Your Property: Expert Guidance,
                  Comprehensive Marketing, and Skilled Negotiation to Ensure a
                  Successful and Stress-Free Selling Experience. Maximize Your
                  Home's Value and Achieve Your Real Estate Goals with
                  Confidence.
                </p>
                <a
                  href="#"
                  className="rounded-xl bg-red-500 text-white text-center px-6 py-2  md:mt-4 inline-block"
                >
                  See Guideline
                </a>
              </div>
            </div>
            <div className="flex justify-center order-1 md:order-2">
              <Image
                src="https://i.ibb.co/QY4X94B/Rectangle-3872-1.png"
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
