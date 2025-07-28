"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import logo from "../common/logo.png";
import Courses from "../courses/page";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "HOME", href: "/" },
    { label: "COURSES", href: "/courses" },
    { label: "PLANS", href: "/plans" },
    { label: "TESTIMONIALS", href: "/testimonials" },
  ];

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <div className="flex items-center space-x-2 cursor-pointer">
            <Image
              src={logo}
              width={150}
              height={150}
              alt="Maazster Logo"
              className="h-10"
            />
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              <span
                className={`text-sm font-semibold hover:text-orange-500 ${
                  item.label === "HOME" ? "text-orange-500" : "text-black"
                }`}
              >
                {item.label}
              </span>
            </Link>
          ))}
          <button className="bg-orange-400 text-white px-4 py-2 rounded-full hover:bg-orange-500 transition">
            CONTACT US
          </button>
        </div>

        {/* 


      ***********************************************************************
      *                                                                      *
      *                           Mobile Menu Button                         *
      *                                                                      *
      *                                                                      *
      ************************************************************************


*/}

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-black"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* 
      ***********************************************************************
      *                                                                      *
      *                                 Mobile Menu                          *
      *                                                                      *
      *                                                                      *
      ************************************************************************



*/}

      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="flex flex-col px-6 pb-4 space-y-4">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <span className="text-sm font-medium text-black hover:text-orange-500">
                  {item.label}
                </span>
              </Link>
            ))}
            <button className="bg-orange-400 text-white px-4 py-2 rounded-full hover:bg-orange-500 transition">
              CONTACT US
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
