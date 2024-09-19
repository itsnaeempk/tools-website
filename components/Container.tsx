"use client";
import { tools } from "@/config/tools";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Container = () => {
  const [selectedTab, setSelectedTab] = useState<"tools" | "scripts">("tools");

  return (
    <section className="mt-12">
      <label
        htmlFor="switch"
        className="cursor-pointer  w-max block mx-auto"
        data-aos="fade-in"
      >
        <input
          type="checkbox"
          id="switch"
          className="hidden w-max"
          checked={selectedTab === "scripts"}
          onChange={() =>
            setSelectedTab((prev) => (prev === "tools" ? "scripts" : "tools"))
          }
        />
        <div className="flex items-center justify-between h-16  rounded-full  bg-gradient-to-br from-[#A55BDF] to-[#26C7EA] relative  w-max text-center select-none">
          <div className="grid grid-cols-2 items-center gap-5 px-2 z-10 text-white">
            <div
              className={`transition-colors px-5 ${
                selectedTab === "tools" ? "text-black" : ""
              }`}
            >
              Tools
            </div>
            <div
              className={`transition-colors px-5 ${
                selectedTab === "scripts" ? "text-black" : ""
              }`}
            >
              Scripts
            </div>
          </div>
          <div
            className={`h-[calc(100%-15px)] w-[calc(50%-16px)] rounded-full bg-white absolute transition-all left-2 ${
              selectedTab === "scripts" ? "left-[calc(50%+8px)]" : ""
            }`}
          ></div>
        </div>
      </label>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-10 mt-16">
        {tools.map((tool, index) => (
          <div
            key={tool.id}
            className="flex flex-col items-center gap-5 rounded-[34px] overflow-hidden bg-[#EFEFEF]"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <div className="bg-gray-400 w-full aspect-[2/1] relative">
              <Image
                src={tool.image}
                alt={tool.name}
                fill
                className="w-12 h-12"
              />
            </div>
            <div className="flex justify-between gap-5 items-center w-full px-5 pb-5">
              <h3 className="text-xl">{tool.name}</h3>
              <Link
                href={tool.url}
                className="bg-black bg-gradient-to-r from-[#202639] to-[#3f4c77] text-white  text-sm px-5 py-4 rounded-lg whitespace-nowrap hover:opacity-80"
              >
                {tool.btn}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Container;
