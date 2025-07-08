
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { PaperRingsPlayer } from "./components/PaperRingsPlayer";
import { Gallery } from "./components/Gallery";

const photos = [
  "/images/photo1.jpg",
  "/images/photo2.jpg",
  "/images/photo3.jpg",
  "/images/photo4.jpg",
  "/images/photo5.jpg",
  "/images/photo6.jpg",
  "/images/photo7.jpg",
  "/images/photo8.jpg",
  "/images/photo9.jpg",
  "/images/photo10.jpg",
  "/images/photo11.jpg"
];

export default function BhumiBirthday() {
  return (
    <div className="min-h-screen bg-pink-100 text-center text-pink-900 font-sans overflow-x-hidden">
      <PaperRingsPlayer />
      <motion.h1
        className="text-4xl md:text-6xl font-bold mt-10 mb-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Happy Birthday, Booboo! 🎂💗
      </motion.h1>
      <motion.p
        className="text-lg max-w-2xl mx-auto px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        From your Dudu — with all the love in the world 💞
      </motion.p>
      <motion.div
        className="my-10 px-4"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <Card className="bg-pink-200 shadow-xl max-w-3xl mx-auto border-2 border-dashed border-pink-300">
          <CardContent className="p-6 text-left text-lg leading-relaxed">
            <p>
              Happy birthday my babyy — finally the day comes when
              "hoor ki pari was landed on this planet" 🧚‍♀️ I am so thankful for
              this day, and I don't know how to express myself or how to tell you
              just how much I love you. You're my biggest lucky charm, my
              blessing, my everything. You are truly amazing, the most perfect
              girl in the universe — the child every parent dreams of, the
              partner every guy wishes for... but in the most selfish way: you
              are *myyyy*! 💖
            </p>
          </CardContent>
        </Card>
      </motion.div>
      <Gallery images={photos} />
      <footer className="mt-20 pb-10 text-sm">
        Made with 🩷 by your Dudu — July 19, 2025
      </footer>
    </div>
  );
}
