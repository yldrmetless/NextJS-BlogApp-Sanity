import Link from "next/link";
import React from "react";
import { BsFacebook, BsGithub, BsInstagram , BsYoutube } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="p-10 bg-black text-gray-100 flex items-center justify-between w-full lg:px-72 mx-auto">
      <h1 className="text-white text-3xl font-extrabold uppercase">Bloggers</h1>
      <div className="text-gray-300 hidden md:inline-flex items-center justify-center gap-x-8">
        <BsYoutube className="text-2xl cursor-pointer hover:text-red-500 transition-all duration-200" />
        <BsGithub className="text-2xl cursor-pointer hover:text-red-500 transition-all duration-200" />
        <BsFacebook className="text-2xl cursor-pointer hover:text-red-500 transition-all duration-200" />
        <BsInstagram  className="text-2xl cursor-pointer hover:text-red-500 transition-all duration-200" />
      </div>
      <p className="text-sm text-gray-300">
        © All rights reserved {""}{" "}
        <Link href="/" className="hover:text-white font-semibold">
          Mete Yıldırım
        </Link>
      </p>
    </div>
  );
};

export default Footer;
