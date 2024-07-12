import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <div>
      <section className="relative lg:px-0 overflow-hidden">
        {/* Hero section background */}
        <div
          className="relative bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(https://i.ibb.co/fncKjhW/Rectangle-172.png)`,
          }}
          data-aos="fade-in"
        >
          <div className="relative mx-auto max-w-[1420px] px-4 h-[64vh] sm:h-[70vh] lg:h-screen flex flex-col items-center justify-center">
            <div className="text-center flex flex-col items-center mt-10 2xl:mt-0">
              {/* Hero Title */}
              <h1
                className="sm:text-4xl text-3xl md:text-5xl md:leading-[55px] font-bold text-white Georgia"
                data-aos="fade-up"
              >
                Turn the key to a brighter future.{" "}
                <br className="md:block hidden" />
                Find your dream home here
              </h1>

              {/* Call-to-action buttons */}
              <div className="mt-10 sm:mt-20 flex gap-3 md:gap-8 justify-center w-full">
                <a
                  href="#"
                  className="sm:w-auto rounded-md lg:rounded-xl bg-primary px-4 md:px-[33px] py-2 md:py-[14px] text-lg md:text-2xl font-medium text-white shadow transition-all duration-300 ease-in-out transform"
                  data-aos="fade-right"
                  data-aos-duration="1200"
                >
                  Explore Listing
                </a>

                <a
                  href="#"
                  className="flex items-center justify-center gap-2 lg:gap-4 sm:w-auto rounded-md lg:rounded-xl border px-4 md:px-[33px] py-2 md:py-[14px] text-lg md:text-2xl font-medium text-white shadow focus:outline-none focus:ring hover:shadow-md montserrat-font"
                  data-aos="fade-left"
                >
                  <Image
                    src="https://i.ibb.co/DQJ8MYP/Mask-group-11.png"
                    height="24"
                    width="24"
                    alt="Call Icon"
                    className="md:h-auto md:w-auto h-4 w-4 "
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
