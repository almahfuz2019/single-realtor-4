/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React from "react";

export default function Services() {
  return (
    <section id="services" className="bg-[#E2E6E7]">
      <div className="max-w-[1320px] overflow-hidden mx-auto py-16 sm:py-24 lg:py-32 px-4">
        {/* Header section */}
        <header className="text-center flex flex-col gap-y-3 md:gap-y-6 mb-12 sm:mb-16 md:mb-20">
          <h1
            data-aos="fade-up"
            className="text-[#56382D] font-georgia font-bold text-3xl sm:text-4xl md:text-5xl md:leading-[55px] playfair-display-font"
          >
            Services We Serve
          </h1>
          <div
            data-aos="fade-up"
            className="w-[120px] sm:w-[156px] bg-[#56382D] mx-auto h-[2px] md:h-[3px] -mt-1"
          ></div>
          <p
            data-aos="fade-up"
            className="text-sm sm:text-lg md:text-xl text-[#000000B2] font-normal"
          >
            Comprehensive Real Estate Solutions: Meet All Your Property Needs
          </p>
        </header>
        <div className="rounded-lg overflow-hidden custom-service-shadow max-w-[1320px] mx-auto">
          {/* Service items */}
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  ">
            {/* First service item */}
            <Image
              src="/Images/Services/Service_Image1.png"
              height="298"
              width="473"
              alt="Service Image"
              className="w-full"
              data-aos="fade-up"
            />
            <div className="flex flex-col h-full p-5" data-aos="fade-up">
              <h3 className="font-bold text-primary text-xl sm:text-2xl mb-2 font-georgia">
                Sell Your Property
              </h3>
              <p className="text-sm sm:text-base md:text-lg font-normal text-justify">
                Maximize Your Home's Value: Expert Guidance, Strategic
                Marketing, and Skilled Negotiation...
              </p>
              <a
                href=""
                className="rounded-xl bg-primary text-white text-center py-2 max-w-[140px] mt-4 font-montserrat transition duration-300 ease-in-out transform hover:bg-red-600 hover:scale-105"
              >
                List Property
              </a>
            </div>
            <Image
              src="/Images/Services/Service_Image2.png"
              height="298"
              width="473"
              alt="Service Image"
              className="w-full sm:hidden lg:block"
              data-aos="fade-up"
            />
          </div>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  ">
            {/* Second service item */}
            <div className="flex flex-col h-full p-5" data-aos="fade-up">
              <h3 className="font-bold text-primary text-xl sm:text-2xl mb-2 font-georgia">
                Purchase Dream Home
              </h3>
              <p className="text-sm sm:text-base md:text-lg font-normal text-justify">
                Find Your Perfect Home: Expert Guidance and Personalized
                Services to Navigate the Buying Process...
              </p>
              <a
                href=""
                className="rounded-xl bg-primary text-white text-center py-2 max-w-[140px] mt-4 font-montserrat transition duration-300 ease-in-out transform hover:bg-red-600 hover:scale-105"
              >
                Explore Home
              </a>
            </div>
            <Image
              src="/Images/Services/Service_Image3.png"
              height="298"
              width="473"
              alt="Service Image"
              className="w-full"
              data-aos="fade-up"
            />
            <div
              className="lg:flex flex-col h-full p-5 hidden "
              data-aos="fade-up"
            >
              <h3 className="font-bold text-primary text-xl sm:text-2xl mb-2 font-georgia">
                Bright Rental Condos
              </h3>
              <p className="text-sm sm:text-base md:text-lg font-normal text-justify">
                Discover Modern Living: Explore Our Selection of Bright Rental
                Condos Offering Stylish Designs, Prime Locations...
              </p>
              <a
                href=""
                className="rounded-xl bg-primary text-white text-center py-2 max-w-[140px] mt-4 font-montserrat "
              >
                See Condos
              </a>
            </div>
          </div>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  ">
            {/* Third service item */}
            <Image
              src="/Images/Services/Service_Image4.png"
              height="298"
              width="473"
              alt="Service Image"
              className="w-full hidden sm:block "
              data-aos="fade-up"
            />
            <div className="flex flex-col h-full p-5" data-aos="fade-up">
              <h3 className="font-bold text-primary text-xl sm:text-2xl mb-2 font-georgia">
                Mortgage Calculator
              </h3>
              <p className="text-sm sm:text-base md:text-lg font-normal text-justify">
                Plan Your Finances with Ease: Use Our Mortgage Calculator to
                Accurately Estimate Monthly Payments...
              </p>
              <a
                href=""
                className="rounded-xl bg-primary text-white text-center py-2 max-w-[140px] mt-4 font-montserrat "
              >
                Calculate
              </a>
            </div>
            <Image
              src="/Images/Services/Service_Image5.png"
              height="298"
              width="473"
              alt="Service Image"
              className="w-full hidden lg:block"
              data-aos="fade-up"
            />
          </div>

          <div className="sm:grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  hidden">
            {/* Fourth service item */}
            <div className="flex flex-col h-full p-5" data-aos="fade-up">
              <h3 className="font-bold text-primary text-xl sm:text-2xl mb-2 font-georgia">
                Home Evaluation
              </h3>
              <p className="text-sm sm:text-base md:text-lg font-normal text-justify">
                Get an Accurate Home Valuation: Our Expert Assessment Provides
                You with a Detailed and Precise...
              </p>
              <a
                href=""
                className="rounded-xl bg-primary text-white text-center py-2 max-w-[140px] mt-4 font-montserrat "
              >
                Evaluate
              </a>
            </div>
            <Image
              src="/Images/Services/Service_Image6.png"
              height="298"
              width="473"
              alt="Service Image"
              className="w-full"
              data-aos="fade-up"
            />
            <div
              className="lg:flex flex-col h-full p-5 hidden"
              data-aos="fade-up"
            >
              <h3 className="font-bold text-primary text-xl sm:text-2xl mb-2 font-georgia">
                First-Time Buyer Assistance
              </h3>
              <p className="text-sm sm:text-base md:text-lg font-normal text-justify">
                Guiding You to Your First Home: Expert Advice, Resources, and
                Personalized Support to Make Your First...
              </p>
              <a
                href=""
                className="rounded-xl bg-primary text-white text-center py-2 max-w-[140px] mt-4 font-montserrat "
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
