"use client";

import Link from "next/link";
import { MiniLogo } from ".";
import { links } from "@/mydata/links";
import { usePathname } from "next/navigation";
import { IoMdSearch } from "react-icons/io";
import { FaBell } from "react-icons/fa";
import { UserNav } from "@/components/usernav";
import toast from "react-hot-toast";

const Navbar = () => {
  const searchClick = () => {
    toast(
      "Hey there! I did not code this feature into the app. This search icon is purely for UI purposes ;)"
    );
  };

  const notifClick = () => {
    toast(
      "Hi! This notification bell button is solely for UI purposes. I did not code any functionality into it ;)"
    );
  };

  const pathname = usePathname();

  return (
    <nav className="w-full max-w-7xl mx-auto items-center justify-between px-5 sm:px-6 py-5 lg:px-8 flex">
      <div className="flex items-center">
        <Link href="/home" className="w-32">
          <MiniLogo />
        </Link>
        <ul className="lg:flex gap-x-4 ml-14 hidden">
          {links.map((link, idx) => (
            <div key={idx}>
              {pathname === link.href ? (
                <li>
                  <Link
                    href={link.href}
                    className="text-white font-semibold text-[16px]"
                  >
                    {link.name}
                  </Link>
                </li>
              ) : (
                <li className=" flex flex-col items-center gap-1 group">
                  <Link
                    className=" text-gray-300 font-normal text-sm group-hover:scale-90 transition duration-500 ease-in-out"
                    href={link.href}
                  >
                    {link.name}
                  </Link>
                  <div className="w-[5px] h-[5px] rounded-full bg-transparent group-hover:bg-gray-300  " />
                </li>
              )}
            </div>
          ))}
        </ul>
      </div>

      <div className=" flex items-center gap-x-8">
        <button onClick={searchClick}>
          <IoMdSearch className=" cursor-pointer text-white" size={20} />
        </button>
        <button onClick={notifClick}>
          <FaBell size={20} className=" cursor-pointer text-white" />
        </button>
        <UserNav />
      </div>
    </nav>
  );
};

export default Navbar;
