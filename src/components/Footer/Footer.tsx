"use client"
import { blogRoute, contactsRoute, faqRoute, homeRoute } from "@/utils/const";
import {
  ArrowUpIcon,
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { FC } from "react";

const Footer: FC = () => {

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="h-[293px] bg-blue-950 mt-[56px] px-[113px] py-3 ">
      <div className=" pt-9">
        <div className="flex justify-between flex-wrap">
          <div className="flex flex-col space-y-2">
            <span className="text-white font-medium text-base">Company</span>
            <Link
              href={contactsRoute}
              className="text-gray-400 hover:text-gray-600 transition duration-300"
            >
              Contact Us
            </Link>
            <Link
              href={blogRoute}
              className="text-gray-400 hover:text-gray-600 transition duration-300"
            >
              Blog
            </Link>
            <Link
              href="#"
              className="text-gray-400 hover:text-gray-600 transition duration-300"
            >
              Order Status
            </Link>
            <Link
              href={homeRoute}
              className="text-gray-400 hover:text-gray-600 transition duration-300"
            >
              Returns
            </Link>
          </div>
          <div className="flex flex-col space-y-2">
            <span className="text-white font-medium text-base">Info</span>
            <Link
              href="#"
              className="text-gray-400 hover:text-gray-600 transition duration-300"
            >
              How it works?
            </Link>
            <Link
              href="#"
              className="text-gray-400 hover:text-gray-600 transition duration-300"
            >
              Our promises
            </Link>
            <Link
              href={faqRoute}
              className="text-gray-400 hover:text-gray-600 transition duration-300"
            >
              FAQ
            </Link>
          </div>
          <div className="flex flex-col space-y-2">
            <span className="text-white font-medium text-base">Contact us</span>
            <div className="flex items-center space-x-1">
              <MapPinIcon width={20} height={20} color="white" />
              <span className="text-gray-400">
                123 Main Street, Anytown,USA
              </span>
            </div>
            <div className="flex items-center space-x-1">
              <PhoneIcon width={20} height={20} color="white" />
              <span className="text-gray-400">+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-1">
              <EnvelopeIcon width={20} height={20} color="white" />
              <span className="text-gray-400">TechHeimSupport@gmail.com</span>
            </div>
          </div>
          <div>
            <div className="p-4 rounded-full bg-blue-200 cursor-pointer hover:bg-blue-400 transition duration-300" onClick={scrollToTop}>
              <ArrowUpIcon width={20} height={20} color="black" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
