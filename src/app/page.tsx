"use client"

import { useThemeContext } from "@/context/themeContext";
import { IconBrandInstagram, IconFileFilled, IconMail } from "@tabler/icons-react";
import Image from "next/image";

import Link from "next/link";
import React from "react";
import TooltipWrapper from "./components/tooltips/tooltips";

export default function Home() {
  const { theme } = useThemeContext();
  return (
    <div className="bg-light-background h-screen text-light-text dark:bg-dark-background dark:text-dark-text transition-colors duration-300 ease-in-out">
      <div className="container min-h-[80vh] px-20 justify-center flex mx-auto gap-10 items-center">
        <Image src="/zam-photo.jpeg" width={300} height={300} alt="photo" className="rounded-lg" />
        <div className="">
          <div>
            <h1 className="text-3xl font-bold text-center">About Me</h1>
          </div>
          <div className="flex flex-col gap-3">
            <div>
              i&apos;m frontend Developer, My job is Develop, improve, maintain, and publish high quality user-facing web.
              To Ensure apps that develop are cross-device compatible, adhere to our company-wide style guide, and matches 
              the designed user experience and Doing test driven development. 
            </div>
            <div>
              As a technology enthusiast, I thrive on building dynamic user interfaces and robust frontend architectures. My expertise lies in TypeScript,
              React, Node.js and Next.js, and I&apos;m always excited to explore new frameworks and design patterns that push the boundaries of web development.
              I believe in the power of clean, modular code to create scalable and maintainable applications that make a real difference in users&apos; lives.
            </div>
        
            <div className="flex gap-2 justify-center items-center">
              
              <Link href="/">
                {theme === "light" ?
                  <div className="flex gap-1 text-sm items-center rounded-lg bg-black p-1">
                    <Image src='/github-white.png' alt="github" width={30} height={30} />

                  </div>
                  :
                  <div className="flex gap-2 text-sm items-center rounded-lg bg-white p-1">
                    <Image src='/github-black.png' alt="github" width={30} height={30} />
                  </div>
                }
              </Link>
              <TooltipWrapper tooltipText="CV" position="top">
              <Link href="/">
                <div className="flex gap-2 text-sm items-center rounded-lg p-2 bg-blue-700">
                  <Image src='/linkedin.png' alt="linkedin" width={25} height={25} />

                </div>

              </Link>
              </TooltipWrapper>
              <Link href="/">
              <TooltipWrapper tooltipText="CV" position="top">
                <div className="flex gap-2 text-sm items-center rounded-lg p-2 bg-black text-white">
                  <IconFileFilled size={25} />
                </div>
              </TooltipWrapper>
              </Link>
              <Link href="/">
                <div className="flex gap-2 text-sm items-center rounded-lg p-2 bg-[#ec4899] text-white">
                  <IconBrandInstagram size={25} />
                </div>
              </Link>
              <Link href="/">
                <div className="flex gap-2 text-sm items-center rounded-lg p-2 bg-[#eab308] text-white">
                  <IconMail size={25} />
                </div>
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>

  );
}
