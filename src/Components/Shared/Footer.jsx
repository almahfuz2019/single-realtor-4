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
    <footer className="bg-[#734635]  overflow-hidden">
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
              <a
                href="#contact"
                className="rounded-lg text-[#E2E6E7] border border-[#E2E6E7] text-2xl font-medium px-[35px] py-[10px] font-montserrat transition duration-300 ease-in-out hover:bg-[#E2E6E7] hover:text-[#000]"
              >
                Drop a message
              </a>
            </div>
          </section>

          {/* Useful Links */}
          <section data-aos="fade-up">
            <h6 className="font-semibold sm:text-4xl text-3xl lg:text-4xl font-georgia lg:mb-10 md:mb-7 mb-6">
              Useful Links
            </h6>
            <a
              href="#home"
              className="block text-2xl font-weight-400 text-white mb-2"
            >
              Home
            </a>
            <a
              href="#about-me"
              className="block text-2xl font-weight-400 text-white mb-2"
            >
              About Me
            </a>
            <a
              href="#services"
              className="block text-2xl font-weight-400 text-white mb-2"
            >
              Services
            </a>
            <a
              href="#featured"
              className="block text-2xl font-weight-400 text-white mb-2"
            >
              Featured Listing
            </a>
            <a
              href="#contact"
              className="block text-2xl font-weight-400 text-white mb-2"
            >
              Contact Us
            </a>
          </section>

          {/* Additional Links */}
          <section data-aos="fade-left">
            <h6 className="font-semibold sm:text-4xl text-3xl lg:text-4xl font-georgia lg:mb-10 md:mb-7 mb-6">
              Contact Us
            </h6>
            <div className="mt-5 flex flex-col gap-4">
              <div className="flex items-center gap-x-4">
                <Image
                  src="/Images/Footer/call.png"
                  height="32"
                  width="32"
                  alt="Phone"
                />
                <a href="tel:5551234567" className="text-lg">
                  (555) 123-4567
                </a>
              </div>
              <div className="flex items-center gap-x-4">
                <Image
                  src="/Images/Footer/email.png"
                  height="32"
                  width="32"
                  alt="Email"
                />
                <a
                  href="mailto:robert.pattinson@xyzrealty.com"
                  className="text-lg"
                >
                  robert.pattinson@xyzrealty.com
                </a>
              </div>
              <div className="flex items-center gap-x-4">
                <Image
                  src="/Images/Footer/location.png"
                  height="32"
                  width="32"
                  alt="Address"
                />
                <a
                  href="https://www.google.com/maps/search/?api=1&query=1234+Broadway,+New+York,+NY+10001"
                  className="text-lg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  1234 Broadway, New York, NY 10001
                </a>
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
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary text-xl hover:opacity-75"
              >
                <Image
                  src="/Images/Footer/Facebook.png"
                  height="32"
                  width="32"
                  alt="Facebook"
                />
              </a>
            </li>
            <li>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary text-xl hover:opacity-75"
              >
                <Image
                  src="/Images/Footer/twitter.png"
                  height="32"
                  width="32"
                  alt="Twitter"
                />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary text-xl hover:opacity-75"
              >
                <Image
                  src="/Images/Footer/instgram.png"
                  height="32"
                  width="32"
                  alt="Instagram"
                />
              </a>
            </li>
          </ul>

          <div className="lg:text-center text-left mt-6 lg:mt-0 font-montserrat">
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
