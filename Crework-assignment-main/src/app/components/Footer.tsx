import {
  FacebookIcon,
  LinkedInIcon,
} from "@/utils/Icons";

import { MarkGithubIcon, MailIcon } from '@primer/octicons-react';


import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <>
      <div className="bg-gray-950 z-50 w-full p-4 text-white md:px-24 px-6 py-8 mt-auto">
        <Link
          href="/"
          className=" lg:hidden flex justify-center items-center pb-4"
        >
          <h1 className=" text-white text-3xl font-extrabold block my-auto ">
            Crework
            <span className="m-0 text-[#FAAF3E] text-4xl font-serif">.</span>
          </h1>
        </Link>

        <div className=" grid lg:grid-cols-4 grid-cols-2 md:grid-cols-3 place-items-center md:place-items-stretch gap-8 footerBorder pb-8">
          <Link href="/" className="w-fit h-fit hidden lg:block">
            <h1 className=" text-white text-3xl font-extrabold block my-auto ">
              Crework
              <span className="m-0 text-[#FAAF3E] text-4xl font-serif">.</span>
            </h1>
          </Link>

          <div className="flex flex-col gap-4 font-poppins text-[#ADADAD]">
            <Link href="/" className="w-fit h-fit">
              <p className="font-medium text-lg">
                <span className="hidden md:block">Newsletter</span>
                <span className=" md:hidden">About Us</span>
              </p>
            </Link>
            <Link href="/" className="w-fit h-fit">
              <p className=" font-medium text-lg">
                <span className="hidden md:block">Builders Cohort</span>
                <span className=" md:hidden">Curriculum</span>
              </p>
            </Link>
          </div>

          <div className="flex flex-col gap-4 font-poppins text-[#ADADAD]">
            <Link href="/" className="w-fit h-fit">
              <p className=" font-medium text-lg">
                <span className="hidden md:block">30 Days of PM</span>
                <span className=" md:hidden">Our Graduates</span>
              </p>
            </Link>
            <Link href="/" className="w-fit h-fit">
              <p className=" font-medium text-lg">
                <span className="hidden md:block">Transition to PM role</span>
                <span className=" md:hidden">Refund Policy</span>
              </p>
            </Link>
          </div>

          <div className=" flex gap-2 justify-center  col-span-2 md:col-auto    md:justify-end items-center">
            <div className="icon-container cursor-pointer">
              <a href='https://www.linkedin.com/in/arman-ali-890233237/'><LinkedInIcon /></a>
            </div>
            <div className="icon-container cursor-pointer">
              <a href='https://github.com/Arman-ali1'><MarkGithubIcon /></a>
            </div>
            <div className="icon-container cursor-pointer">
              <MailIcon />
            </div>
            <div className="icon-container cursor-pointer">
              <FacebookIcon />
            </div>
          </div>
        </div>

        <div className="hidden md:block w-full text-center mt-8 text-gray-500 ">
          Copyright © 2024 Crework
        </div>
        <div className="hidden md:block w-full text-center mt-8 text-gray-500 text-2xl">
          Crework-Task Made by<span className="text-red-900 text-3xl font-extrabold"> ♥ </span>Arman Ali
        </div>
      </div>
    </>
  );
};

export default Footer;
