import * as React from "react";
import { useState } from "react";
import { Icon } from "@iconify/react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const mobileChild = (
    <nav className="fixed w-full h-fit bg-gray-100 font-bold shadow z-50 md:flex md:items-center md:justify-between">
      <div className="flex justify-between px-6 py-3 w-full">
        <a href="/" className="w-fit text-2xl">
          iOS Club
        </a>
        <div className="place-self-center">
          <button
            className="block hamburger md:hidden focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Icon
              icon={isOpen ? "akar-icons:cross" : "bx:menu"}
              className="w-6 h-6"
            />
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="bg-white flex flex-col ont-bold md:z-aut w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 shadow">
          <ul className="">
            {menuItems.map((item, index) => (
              <li key={index} class="md:ml-8 text-x1 mx-4 my-6 md:my-0">
                <a
                  href={item.url}
                  className="text-x1 text-gray-800 hover:text-cyan-600 duartion-500"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
          <button class="w-fit bg-blue-300 text-white px-10 py-2 md:ml-8 hover:bg-blue-500 rounded-full duration-700">
            Join Us
          </button>
        </div>
      )}
    </nav>
  );
  const desktopChild = (
    <nav className="fixed flex items-center justify-between font-bold py-4 text-lg px-3 md:px-8 text-solid w-screen top-0 bg-white shadow-md z-50">
      <a href="/" className="font-bold">
        iOS Club
      </a>

      <ul className="md:flex md:items-center">
        {menuItems.map((item, index) => (
          <li key={index} className="md:ml-8 text-x1">
            <a
              href={item.url}
              className="text-x1 text-gray-800 hover:text-cyan-600 duartion-500"
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
      <button class="bg-blue-300 text-white px-6 py-2 md:ml-8 hover:bg-blue-500 rounded-full duration-700">
        Join Us
      </button>
    </nav>
  );
  return (
    <div>
      <div className="block md:hidden">{mobileChild}</div>
      <div className="hidden md:block">{desktopChild}</div>
    </div>
  );
};

export default Navbar;

const menuItems = [
  {
    name: "首頁",
    url: "/",
    icon: "uil:home",
  },
  {
    name: "社團課程",
    url: "/course",
    icon: "akar-icons:book",
  },
  {
    name: "社團活動",
    url: "/club_activities",
    icon: "uil:calender",
  },
  {
    name: "社團相簿",
    url: "/gallery_list",
    icon: "uil:image",
  },
];
