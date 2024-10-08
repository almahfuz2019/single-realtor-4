import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <div>
      <section className="relative lg:px-0 overflow-hidden">
        {/* Hero section background */}
        <div
          className="relative bg-cover bg-center bg-no-repeat bg-[url('/Images/Home/background.png')]"
          data-aos="fade-in"
        >
          <div className="relative mx-auto max-w-[1420px] px-4 h-[64vh] sm:h-[70vh] lg:h-screen flex flex-col items-center justify-center">
            <div className="text-center flex flex-col items-center mt-10 2xl:mt-0">
              {/* Hero Title */}
              <h1
                className="sm:text-4xl font-georgia text-3xl md:text-5xl md:leading-[55px] font-bold text-white Georgia"
                data-aos="fade-up"
              >
                Turn the key to a brighter future.{" "}
                <br className="md:block hidden" />
                Find your dream home here
              </h1>

              {/* Call-to-action buttons */}
              <div className="mt-10 sm:mt-20 flex gap-3 md:gap-8 justify-center w-full">
                <a
                  href="#featured"
                  className="sm:w-auto rounded-md lg:rounded-xl bg-primary px-4 md:px-[33px] py-2 md:py-[14px] text-lg md:text-2xl font-medium text-white shadow font-montserrat  transition duration-300 ease-in-out transform hover:bg-red-600"
                  data-aos="fade-right"
                  data-aos-duration="1200"
                >
                  Explore Listing
                </a>

                <a
                  href="#contact"
                  className="flex items-center justify-center gap-2 lg:gap-4 sm:w-auto font-montserrat rounded-md lg:rounded-xl border px-4 md:px-[33px] py-2 md:py-[14px] text-lg md:text-2xl font-medium text-white shadow focus:outline-none focus:ring hover:shadow-md montserrat-font hover:border-primary"
                  data-aos="fade-left"
                >
                  <Image
                    src="/Images/Home/call_Icon.webp"
                    height="24"
                    width="24"
                    alt="Call Icon"
                    className="md:h-auto md:w-auto h-4 w-4"
                  />
                  Book A Call
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
