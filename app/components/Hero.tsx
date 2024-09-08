"use client";
import React from "react";
import { BackgroundBeamsWithCollision } from "@/app/components/ui/backgroundBeams";
import { Spotlight } from "./ui/Spotlight";
import NavBar from "./NavBar";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
import { TextGenerateEffect } from "./ui/text-generate-effect";

export default function GridBackgroundDemo() {
  return (
    <>
      <Spotlight fill="blue" className="w-[100vw] mt-10  " />
      <div
        className="  w-full bg-black  bg-grid-blue-500/[0.3]  relative flex   "
        id="hero"
      >
        <BackgroundBeamsWithCollision className=" bg-none shadow-none  w-full">
          <div className="absolute pointer-events-none inset-0  lex items-center justify-center bg-gradient-to-b from-black/0 to-black/90"></div>
          <div className="w-full flex flex-col  absolute p-4">
            <NavBar />
            <div className="w-full flex justify-center mt-10">
              <button className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block">
                <span className="absolute inset-0 overflow-hidden rounded-full">
                  <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
                </span>
                <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 ">
                  <span>{`Hi There 👋`}</span>
                </div>
                <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
              </button>
            </div>
            <div className=" w-full flex flex-col justify-center items-center   md:py-8  md:px-16 p-2 ">
              <TextGenerateEffect
                words={"   Transforming Ideas Into Seamless User Experiences"}
                className="text-white md:text-8xl text-3xl font-bold text-wrap text-center"
              />

              <div className=" mt-6 flex flex-col items-center gap-4 md:gap-4   ">
                <h1 className="text-white font-mono text-xs md:text-sm ">
                  Hello, I am Mahesh a{" "}
                  <span>
                    <TypeAnimation
                      sequence={[
                        // Same substring at the start will only be typed once, initially
                        " Software Developer",
                        1000,
                        "Freelancer",
                        1000,
                        "FullStack Developer",
                        1000,
                      ]}
                      speed={50}
                      repeat={Infinity}
                      className="text-purple-500 font-bold "
                    />
                  </span>
                </h1>
                <p className="text-gray-400 text-center text-sm md:w-[50vw] ">
                  I am a software developer who specializes in creating
                  exceptional digital experiences.
                </p>
                <Link
                  href="mailto:maheshjyothula23@gmail.com"
                  className="px-8 py-2 rounded-full bg-gradient-to-b from-blue-500 to-blue-600 text-white focus:ring-2 focus:ring-blue-400 hover:shadow-xl transition duration-200 my-4"
                >
                  Contact me
                </Link>
              </div>
            </div>
          </div>
        </BackgroundBeamsWithCollision>
      </div>
    </>
  );
}
