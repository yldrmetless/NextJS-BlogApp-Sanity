import Link from "next/link";
import React from "react";
import { FiMenu } from "react-icons/fi";

const Navbar = () => {
  const navigation = [
    { title: "Home", href: "/" },
    { title: "Features", href: "/features" },
    { title: "About", href: "/about" },
    { title: "Studio", href: "/studio" },
  ];
  return (
    <div className="w-full bg-white/70 h-20 shadow-md sticky top-0 backdrop-blur-2xl transition-colors z-50">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4 lg:px-0 h-full">
        <Link href={"/"}>
          <h1 className="text-black cursor-pointer text-3xl font-extrabold uppercase">
            Bloggers
          </h1>
        </Link>

        <div className="hidden md:inline-flex items-center justify-center gap-x-4 text-gray-700 hover:text-black transition-all duration-200">
          {navigation.map((item) => (
            <Link
              className="text-sm uppercase font-semibold relative group overflow-hidden"
              href={item.href}
              key={item?.title}
            >
              {item?.title}
              <span className="w-full h-[1px] bg-gray-700 absolute inline-block left-0 bottom-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-200"></span>
            </Link>
          ))}
        </div>

        <div className="md:hidden">
          <FiMenu className="text-2xl cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
