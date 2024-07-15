import Image from "next/image";
import React from "react";

export default function Navbar() {
  return (
    <div>
      <div className="max-w-[1320px] mx-auto px-4 hidden xl:block">
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
                  src="https://i.ibb.co/tx0hQMz/Mask-group-10.png"
                  height={48}
                  width={48}
                  alt=""
                  className="w-[36px] h-[36px] md:w-[48px] md:h-[48px]"
                />
                <p className="didact-gothic-regular font-normal text-[20px] leading-[28px] ml-2 md:text-[28px] md:leading-[35px]">
                  Menu
                </p>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-lg md:text-2xl"
              >
                <li>
                  <a className="text-lg md:text-2xl">Home</a>
                </li>
                <li>
                  <a className="text-lg md:text-2xl">Portfolio</a>
                </li>
                <li>
                  <a className="text-lg md:text-2xl">About</a>
                </li>
                <li>
                  <a className="text-lg md:text-2xl">Contact</a>
                </li>
              </ul>
            </div>
          </div>
          {/* Navbar center */}
          <div className="navbar-center">
            <a className="btn btn-ghost text-xl">
              <Image
                src="https://i.ibb.co/tLjq363/Group-168-1.png"
                height={43}
                width={112}
                alt=""
                className="h-[30px] w-[80px] md:h-[43px] md:w-[112px]"
              />
            </a>
          </div>
          {/* Navbar end */}
          <div className="navbar-end gap-2 md:gap-3">
            <Image
              src="https://i.ibb.co/pxF0yq1/Frame-458-6.png"
              height={36}
              width={36}
              alt=""
              className="h-[24px] w-[24px] md:h-[36px] md:w-[36px]"
            />
            <Image
              src="https://i.ibb.co/gJjCtGC/Frame-457-3.png"
              height={36}
              width={36}
              alt=""
              className="h-[24px] w-[24px] md:h-[36px] md:w-[36px]"
            />
            <Image
              src="https://i.ibb.co/PxdwcZv/Frame-456-6.png"
              height={36}
              width={36}
              alt=""
              className="h-[24px] w-[24px] md:h-[36px] md:w-[36px]"
            />
          </div>
        </div>
      </div>
      {/* for phone  */}
      <div className="max-w-[1320px] mx-auto block xl:hidden">
        <div className="navbar ">
          {/* Navbar start */}
          {/* Navbar center */}
          <div className="navbar-start">
            <a className="btn btn-ghost text-xl">
              <Image
                src="https://i.ibb.co/tLjq363/Group-168-1.png"
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
                  src="https://i.ibb.co/tx0hQMz/Mask-group-10.png"
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
                  <a className="text-lg md:text-2xl">Home</a>
                </li>
                <li>
                  <a className="text-lg md:text-2xl">Portfolio</a>
                </li>
                <li>
                  <a className="text-lg md:text-2xl">About</a>
                </li>
                <li>
                  <a className="text-lg md:text-2xl">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
