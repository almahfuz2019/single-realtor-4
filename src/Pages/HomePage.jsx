import About from "@/Components/Home/About";
import Contact from "@/Components/Home/Contact";
import Featured from "@/Components/Home/FeaturedListing";
import Hero from "@/Components/Home/Hero";
import Newsletter from "@/Components/Home/Newsletter";
import RealEstateTools from "@/Components/Home/RealEstateTools";
import SearchArea from "@/Components/Home/SearchArea";
import Services from "@/Components/Home/Services";
import React from "react";
export default function HomePage() {
  return (
    <div>
        <Hero/>
        <SearchArea/>
        <About/>
        <Services/>
        <Featured/>
      <Newsletter />
      <RealEstateTools />
      <Contact/>
    </div>
  );
}
