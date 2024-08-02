import About from "@/Components/Home/About";
import Contact from "@/Components/Home/Contact";
import Featured from "@/Components/Home/FeaturedListing";
import Hero from "@/Components/Home/Hero";
import { FaArrowTurnUp } from "react-icons/fa6";
import Newsletter from "@/Components/Home/Newsletter";
import RealEstateTools from "@/Components/Home/RealEstateTools";
import SearchArea from "@/Components/Home/SearchArea";
import Services from "@/Components/Home/Services";
import React from "react";
export default function HomePage() {
  return (
    <div>
      <Hero />
      <SearchArea />
      <About />
      <Services />
      <Featured />
      <Newsletter />
      <RealEstateTools />
      <Contact />
      <a href="#home">
        <div className="fixed text-xl sm:text-2xl md:text-4xl p-2 sm:p-3 md:p-4 bg-white hover:bg-[#201A1E] text-[#201A1E] hover:border-white hover:text-white border border-[#201A1E] cursor-pointer z-10 bottom-5 right-2 rounded-full">
          <FaArrowTurnUp />
        </div>
      </a>
    </div>
  );
}
