import React from "react";
import Link from "next/link";

const Hireme = () => {
  return (
    <div className=" w-full bg-black  bg-grid-blue-500/[0.3]  relative flex  h-96 justify-center ">
      <div className="absolute pointer-events-none inset-0  lex items-center justify-center bg-gradient-to-b from-black/0 to-black/90"></div>
      <div className="z-0  md:p-8 p-2 w-full flex  flex-col items-center gap-8 mt-8">
        <h1 className="text-white  text-wrap font-bold text-4xl mx-auto md:w-[40vw] px-10">
          Ready to take
          <span className="bg-gradient-to-b from-blue-500 to-blue-600 inline-block text-transparent bg-clip-text px-2">
            your
          </span>
          digital presence to the next level?
        </h1>
        <div>
          <Link
            href=" mailto:maheshjyothula23@gmail.com"
            className="px-8 py-2 rounded-full bg-gradient-to-b from-blue-500 to-blue-600 text-white focus:ring-2 focus:ring-blue-400 hover:shadow-xl transition duration-200"
          >
            Hire me
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hireme;
