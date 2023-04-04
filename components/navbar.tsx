"use client";
import Link from "next/link";
import { useState } from "react";
import Drawer from "./drawer";
import DrawerItems from "./drawerItems";
import NavbarItems from "./navbarItems";

export const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white  font-bold border-b-2 ">
      <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="relative flex items-center justify-between">
          <a
            href="/"
            aria-label="Company"
            title="Company"
            className="inline-flex items-center"
          >
            <img
              src="./images/bezgettour.png
                  "
              alt=""
            />
          </a>
          <NavbarItems />
          <div className="lg:hidden">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline "
              data-drawer-target="drawer-example"
              data-drawer-show="drawer-example"
              aria-controls="drawer-example"
              onClick={() => setIsOpen(true)}
            >
              <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                />
                <path
                  fill="currentColor"
                  d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                />
                <path
                  fill="currentColor"
                  d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                />
              </svg>
            </button>
            <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
              <div className="flex flex-col ">
                <button
                  className="w-12 self-end p-2"
                  onClick={() => setIsOpen(false)}
                >
                  <img src="./images/close.png" alt="" />
                </button>
                <DrawerItems />
              </div>
            </Drawer>
          </div>
        </div>
      </div>
    </div>
  );
};
