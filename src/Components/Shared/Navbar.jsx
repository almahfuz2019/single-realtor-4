import Image from "next/image";
import React from "react";

export default function Navbar() {
  return (
    <div>
      <div id="home" className="max-w-[1320px] mx-auto px-4 hidden lg:block">
        <div className="navbar py-4">
          {/* Navbar start */}
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn bg-transparent border-none shadow-none flex items-center"
              >
                <Image
                  src="/Images/Navbar/menu_Icon.webp"
                  height={48}
                  width={48}
                  alt=""
                  className="w-[36px] h-[36px] md:w-[48px] md:h-[48px]"
                />
                <p className="font-century-gothic font-normal text-[20px] leading-[28px] ml-2 md:text-[28px] md:leading-[35px]">
                  Menu
                </p>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-lg md:text-2xl"
              >
                <li>
                  <a href="#home" className="text-lg md:text-2xl">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about-me" className="text-lg md:text-2xl">
                    About Me
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-lg md:text-2xl">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-lg md:text-2xl">
                    Featured Listing
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-lg md:text-2xl">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* Navbar center */}
          <div className="navbar-center">
            <a className="btn btn-ghost text-xl">
              <Image
                src="/Images/Navbar/logo.webp"
                height={43}
                width={112}
                alt=""
                className="h-[30px] w-[80px] md:h-[43px] md:w-[112px]"
              />
            </a>
          </div>
          {/* Navbar end */}
          <div className="navbar-end gap-2 md:gap-3">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/Images/Navbar/facFacebook.png"
                height={36}
                width={36}
                alt="Facebook"
                className="h-[24px] w-[24px] md:h-[36px] md:w-[36px] hover:opacity-75"
              />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/Images/Navbar/twitter.png"
                height={36}
                width={36}
                alt="Twitter"
                className="h-[24px] w-[24px] md:h-[36px] md:w-[36px] hover:opacity-75"
              />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/Images/Navbar/Instagram.png"
                height={36}
                width={36}
                alt="Instagram"
                className="h-[24px] w-[24px] md:h-[36px] md:w-[36px] hover:opacity-75"
              />
            </a>
          </div>
        </div>
      </div>
      {/* for phone  */}
      <div className="max-w-[1320px] mx-auto block lg:hidden">
        <div className="navbar ">
          {/* Navbar start */}
          {/* Navbar center */}
          <div className="navbar-start">
            <a className="btn btn-ghost text-xl">
              <Image
                src="/Images/Navbar/logo.webp"
                height={43}
                width={112}
                alt=""
                className="h-[30px] w-[80px] md:h-[43px] md:w-[112px]"
              />
            </a>
          </div>
          {/* Navbar end */}{" "}
          <div className="navbar-end">
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn bg-transparent border-none shadow-none flex items-center"
              >
                <Image
                  src="/Images/Navbar/menu_Icon.webp"
                  height={48}
                  width={48}
                  alt=""
                  className="w-[36px] h-[36px] md:w-[48px] md:h-[48px]"
                />
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-lg md:text-2xl"
              >
                <li>
                  <a href="#home" className="text-lg md:text-2xl">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about-me" className="text-lg md:text-2xl">
                    {" "}
                    About Me
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-lg md:text-2xl">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#featured" className="text-lg md:text-2xl">
                    Featured Listing
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-lg md:text-2xl">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
