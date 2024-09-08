"use client";
import { TextGenerateEffect } from "./ui/text-generate-effect";

const words = `Bringing Your Brand to Life with Innovative Digital Solutions `;

export default function TextGenerateEffectDemo() {
  return (
    <TextGenerateEffect
      words={words}
      className="p-8  md:max-w-lg mx-auto text-center md:text-2xl  text-blue-500"
    />
  );
}
