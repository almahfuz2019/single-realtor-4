"use client";
import Image from "next/image";
import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";

export default function Footer() {
  React.useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <footer className="bg-[#734635] font-montserrat overflow-hidden">
      <div className="max-w-[1320px] py-[100px] mx-auto px-4">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 text-white">
          {/* Contact Information */}
          <section data-aos="fade-right">
            <h6 className="font-semibold sm:text-4xl text-3xl lg:text-4xl font-georgia">
              Robert Pattinson
            </h6>
            <p className="text-xl mt-3 font-weight-400 text-[#FFFFFFCC]">
              Real Estate Professional
            </p>
            <p className="mt-3 font-normal text-xl leading-[25px] text-justify">
              A top performing agent with 15 years of NYC real estate
              experience, specializes in luxury homes and commercial properties,
              providing exceptional service and expert guidance for all your
              real estate needs.
            </p>
            <div className="mt-10">
              <Link
                href="#"
                className="rounded-lg text-[#E2E6E7] border border-[#E2E6E7] text-2xl font-medium px-[43px] py-[15px]"
              >
                Drop a message
              </Link>
            </div>
          </section>

          {/* Useful Links */}
          <section data-aos="fade-up">
            <h6 className="font-semibold sm:text-4xl text-3xl lg:text-4xl font-georgia lg:mb-10 md:mb-7 mb-6">
              Useful Links
            </h6>
            <Link
              href="#"
              className="block text-2xl font-weight-400 text-white mb-2"
            >
              Home
            </Link>
            <Link
              href="#"
              className="block text-2xl font-weight-400 text-white mb-2"
            >
              About Me
            </Link>
            <Link
              href="#"
              className="block text-2xl font-weight-400 text-white mb-2"
            >
              Services
            </Link>
            <Link
              href="#"
              className="block text-2xl font-weight-400 text-white mb-2"
            >
              Featured Listing
            </Link>
            <Link
              href="#"
              className="block text-2xl font-weight-400 text-white mb-2"
            >
              Contact Us
            </Link>
          </section>

          {/* Additional Links */}
          <section data-aos="fade-left">
            <h6 className="font-semibold sm:text-4xl text-3xl lg:text-4xl font-georgia lg:mb-10 md:mb-7 mb-6">
              Contact Us
            </h6>
            <div className="mt-5 flex flex-col gap-4">
              <div className="flex items-center gap-x-4">
                <Image
                  src="https://i.ibb.co/tJzJjHb/Frame-456-4.png"
                  height="32"
                  width="32"
                  alt="Phone"
                />
                <p className="text-lg">(555) 123-4567</p>
              </div>
              <div className="flex items-center gap-x-4">
                <Image
                  src="https://i.ibb.co/d7JZjzW/Frame-458-4.png"
                  height="32"
                  width="32"
                  alt="Email"
                />
                <p className="text-lg">robert.pattinson@xyzrealty.com</p>
              </div>
              <div className="flex items-center gap-x-4">
                <Image
                  src="https://i.ibb.co/BBNptDq/Frame-534-2.png"
                  height="32"
                  width="32"
                  alt="Address"
                />
                <p className="text-lg">1234 Broadway, New York, NY 10001</p>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="bg-[#112140] py-4">
        <div className="max-w-[1320px] mx-auto px-4 grid-cols-1 grid lg:grid-cols-3 items-center lg:justify-between">
          <ul className="flex gap-x-2 px-1">
            <li>
              <Link href="#" className="text-secondary text-xl">
                <Image
                  src="https://i.ibb.co/RcgMwDm/Frame-456.png"
                  height="32"
                  width="32"
                  alt="Facebook"
                />
              </Link>
            </li>
            <li>
              <Link href="#" className="text-secondary text-xl">
                <Image
                  src="https://i.ibb.co/NS9qWnT/Frame-457.png"
                  height="32"
                  width="32"
                  alt="Twitter"
                />
              </Link>
            </li>
            <li>
              <Link href="#" className="text-secondary text-xl">
                <Image
                  src="https://i.ibb.co/zs4RCS5/Frame-458.png"
                  height="32"
                  width="32"
                  alt="Instagram"
                />
              </Link>
            </li>
          </ul>
          <div className="lg:text-center text-left mt-6 lg:mt-0">
            <p className="text-[#FFFFFFB2] text-base font-weight-400">
              Webflow Template by TECHPLATO.Inc
            </p>
            <p className="text-[#FFFFFFB2] text-base font-weight-400">
              All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
