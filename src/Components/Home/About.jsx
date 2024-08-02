import Image from "next/image";
import React from "react";

export default function About() {
  // Fun facts data
  const data = [
    { id: "1", count: "15", name: "Years Of Experience" },
    { id: "2", count: "300+", name: "Property Transactions" },
    { id: "3", count: "1k+", name: "Happy Clients" },
    { id: "4", count: "1B+", name: "Net Revenue" },
  ];

  return (
    <section
      id="about-me"
      className="max-w-[1320px] overflow-hidden mx-auto py-32 lg:py-[218px] px-4"
    >
      {/* Header section */}
      <header className="text-center justify-center flex flex-col gap-y-3 md:gap-y-6 mb-20">
        <h1
          data-aos="fade-up"
          className="text-[#56382D] font-georgia font-bold text-4xl md:text-5xl md:leading-[55px] playfair-display-font"
        >
          About Mason Mount
        </h1>
        <div
          data-aos="fade-up"
          className="w-[156px] bg-[#56382D] mx-auto h-[2px] md:h-[3px] -mt-1"
        ></div>
        <p
          data-aos="fade-up"
          className="sm:text-xl text-[#000000B2] text-sm font-normal"
        >
          Experienced and Dedicated Realtor: Providing Personalized Guidance to
          Help You Achieve Your Real Estate Goals
        </p>
      </header>

      {/* Main content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-14 md:gap-y-24 items-end justify-center gap-10">
        <div data-aos="fade-right">
          <Image
            height="746"
            width="600"
            className="bg-cover"
            src="/Images/About/me.webp"
            alt="Owner Image"
          />
        </div>
        <div data-aos="fade-left">
          <h4 className="font-bold text-3xl text-[#D1513A] mb-4 font-georgia">
            Beyond the transaction, building lasting relationships
          </h4>
          <p className="text-xl text-justify font-normal text-[#000000CC] mb-6">
            Specializing in luxury residential and commercial real estate, I
            offer expertise in high-end homes and in-depth market analysis to
            help clients make informed buying or selling decisions. My roles
            include client representation, negotiation, transaction management,
            and marketing. I offer extensive NYC real estate knowledge, strong
            communication, industry connections, and meticulous transaction
            attention.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 mb-10 gap-3">
            {Array(4)
              .fill()
              .map((_, index) => (
                <div key={index} className="flex items-center gap-2">
                  <Image
                    height="24"
                    width="24"
                    className=""
                    src="/Images/About/checkmark.webp"
                    alt="Checkmark"
                  />
                  <p className="text-lg font-medium font-montserrat">
                    Exceptional Market Expertise
                  </p>
                </div>
              ))}
          </div>
          <div>
            <a
              href="#contact"
              className="sm:w-auto rounded-md font-montserrat lg:rounded-xl bg-primary px-4 md:px-[33px] py-2 md:py-[14px] text-lg md:text-2xl font-medium text-white shadow  hover:shadow-lg focus:outline-none focus:ring transition duration-300 ease-in-out transform hover:bg-red-600 hover:scale-105"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              Contact Me
            </a>
          </div>
          <div className="flex items-center gap-6 mt-12  justify-start">
            <Image
              height={325}
              width={274}
              className=""
              src="/Images/About/me_with_another_image1.webp"
              alt="Owner Image"
            />
            <Image
              height={325}
              width={274}
              className=""
              src="/Images/About/me_with_another_image2.webp"
              alt="Owner Image"
            />
          </div>
        </div>
      </div>

      {/* Fun facts section */}
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10 justify-center py-8 px-4 mt-20 overflow-hidden">
        {data.map((item, index) => (
          <div
            key={item.id}
            className="text-black text-center"
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-delay={index * 100} // Staggering delay
          >
            <h3
              className="font-semibold text-4xl font-montserrat text-[#56382D] md:text-7xl mb-3"
              data-aos-duration="1000"
              data-aos-delay={index * 100 + 200} // Staggering delay for the count
            >
              {item.count}
            </h3>
            <p
              className="font-normal text-base md:text-2xl"
              data-aos-duration="1200"
              data-aos-delay={index * 200 + 300} // Staggering delay for the description
            >
              {item.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
