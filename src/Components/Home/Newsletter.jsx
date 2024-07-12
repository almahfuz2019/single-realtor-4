"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Newsletter() {
  // Initialize AOS for fancy animations
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className=" overflow-hidden mx-auto  ">
      <div
        className="relative bg-cover bg-center py-32 lg:py-[168px] px-4"
        style={{
          backgroundImage: "url('https://i.ibb.co/s9dZh88/Rectangle-3870.png')",
        }} // Background image path
        data-aos="fade-up"
      >
        {/* Dark overlay for better text contrast */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* Main container for the content */}
        <div className="relative container mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold">
            Browse rentals by neighborhood, <br className="hidden md:block" />
            <span className="text-primary">Never miss a new listing.</span>
          </h2>
          <p className="mb-8 mt-6 text-[#FFEAEACC] text-xl md:text-2xl">
            Subscribe and stay tuned on market trends, new listing or community
            info
          </p>

          {/* Subscription form */}
          <form className="max-w-lg mx-auto mt-10">
            <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6">
              <input
                type="text"
                placeholder="Name"
                required
                className="input input-bordered w-full mb-4 md:mb-0 bg-transparent text-white placeholder-gray-300 border-white transition-transform duration-300 ease-in-out hover:scale-105"
              />
              <input
                type="email"
                placeholder="Type your email"
                required
                className="input input-bordered w-full mb-4 md:mb-0 bg-transparent text-white placeholder-gray-300 border-white transition-transform duration-300 ease-in-out hover:scale-105"
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary w-full mt-6 transition-transform duration-300 ease-in-out hover:scale-105"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
