import Image from "next/image";
import React from "react";

export default function Navbar() {
  return (
    <div className="max-w-[1320px] mx-auto">
      <div className="navbar ">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn bg-transparent border-none shadow-none "
            >
              <Image
                src="https://i.ibb.co/tx0hQMz/Mask-group-10.png"
                height="48"
                width="48"
                alt=""
              />
              <p className="didact-gothic-regular font-normal text-[28px] leading-[35px] ml-2">
                Menu
              </p>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-2xl"
            >
              <li>
                <a className="text-2xl">Homepage</a>
              </li>
              <li>
                <a className="text-2xl">Portfolio</a>
              </li>
              <li>
                <a className="text-2xl">About</a>
              </li>
              <li>
                <a className="text-2xl">About</a>
              </li>
              <li>
                <a className="text-2xl">About</a>
              </li>
              <li>
                <a className="text-2xl">About</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <a className="btn btn-ghost text-xl">
            <Image
              src="https://i.ibb.co/tLjq363/Group-168-1.png"
              height="43"
              width="112"
              alt=""
            />
          </a>
        </div>
        <div className="navbar-end gap-3">
          <Image
            src="https://i.ibb.co/pxF0yq1/Frame-458-6.png"
            height="36"
            width="36"
            alt=""
          />

          <Image
            src=" https://i.ibb.co/gJjCtGC/Frame-457-3.png"
            height="36"
            width="36"
            alt=""
          />
          <Image
            src="  https://i.ibb.co/PxdwcZv/Frame-456-6.png"
            height="36"
            width="36"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
