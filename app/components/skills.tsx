"use client";
import {
  Html,
  Css,
  Javascript,
  NodeJs,
  NextJs,
  ReactIcon,
  Typescript,
  Tailwindcss,
  Aws,
  Python,
  Docker,
  Java,
  Kafka,
  MongoDB,
} from "@/public/logo";

import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export default function InfiniteMovingCardsDemo() {
  return (
    <div
      className="bg-black flex flex-col antialiased  items-center justify-center relative overflow-hidden w-full  "
      id="layoutGrid"
    >
      <InfiniteMovingCards
        items={data}
        direction="right"
        speed="slow"
        className="opacity-20"
      />
      <InfiniteMovingCards
        items={data}
        direction="left"
        speed="slow"
        className="opacity-20"
      />
    </div>
  );
}

const data = [
  {
    title: "Html",
    icon: Html,
  },
  {
    title: "Css",
    icon: Css,
  },
  {
    title: "Javascript",
    icon: Javascript,
  },
  {
    title: "Typescript",
    icon: Typescript,
  },
  {
    title: "React.js",
    icon: ReactIcon,
  },
  {
    title: "Next.js",
    icon: NextJs,
  },
  {
    title: "Node.js",
    icon: NodeJs,
  },
  {
    title: "MongoDB",
    icon: MongoDB,
  },
  {
    title: "Tailwindcss",
    icon: Tailwindcss,
  },
  {
    title: "Docker",
    icon: Docker,
  },
  {
    title: "Aws",
    icon: Aws,
  },
  {
    title: "Python",
    icon: Python,
  },
  {
    title: "Java",
    icon: Java,
  },
  {
    title: "Kafka",
    icon: Kafka,
  },
];
