import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import flower from "../../../assets/flower.webm";
import flower_idle from "../../../assets/flower-idle.png";

import star_bottom from "../../../assets/star_bottom.webm";
import star_bottom_idle from "../../../assets/star_bottom-idle.png";

import star_top from "../../../assets/star_top.webm";
import star_top_idle from "../../../assets/star_top-idle.png";

function HeroVisual() {
  const [supportsWebM, setSupportsWebM] = useState(true);

  useEffect(() => {
    const video = document.createElement("video");
    const canPlay = video.canPlayType('video/webm; codecs="vp9"');
    setSupportsWebM(!!canPlay);
  }, []);

  return (
    <div className="relative w-full md:w-1/2 flex items-center justify-center min-h-[320px] sm:min-h-[400px] lg:min-h-[500px] xl:min-h-[600px] select-none md:mt-0">
      {/* Background Animated Rings */}
      <motion.div
        className="absolute rounded-full border border-indigo-300/40"
        style={{ width: "70vw", height: "70vw", maxWidth: 320, maxHeight: 320 }}
        animate={{ rotate: 360, scale: [1, 1.05, 1] }}
        transition={{ rotate: { duration: 30, repeat: Infinity, ease: "linear" }, scale: { duration: 6, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" } }}
      />
      <motion.div
        className="absolute rounded-full border border-sky-400/30"
        style={{ width: "59vw", height: "59vw", maxWidth: 260, maxHeight: 260 }}
        animate={{ rotate: -360, scale: [1, 1.08, 1] }}
        transition={{ rotate: { duration: 20, repeat: Infinity, ease: "linear" }, scale: { duration: 5, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" } }}
      />
      <motion.div
        className="absolute rounded-full border border-indigo-300/20"
        style={{ width: "48vw", height: "48vw", maxWidth: 180, maxHeight: 180 }}
        animate={{ rotate: 360, scale: [1, 0.92, 1] }}
        transition={{ rotate: { duration: 40, repeat: Infinity, ease: "linear" }, scale: { duration: 7, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" } }}
      />

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(black_1px,transparent_1px)] bg-[size:8px_8px] opacity-5 pointer-events-none z-0" />

      {/* Top Star - closer to flower */}
      <div className="absolute top-[12%] left-1/2 translate-x-22 md:translate-x-32  z-20">
        {supportsWebM ? (
          <video
            src={star_top}
            className="w-20 sm:w-24 md:w-28 object-contain"
            autoPlay
            loop
            muted
            playsInline
            aria-label="Animated top star"
          />
        ) : (
          <img
            src={star_top_idle}
            alt="Star Top"
            className="w-20 sm:w-24 md:w-28 object-contain"
          />
        )}
      </div>

      {/* Flower */}
      <div className="relative z-10 flex items-center justify-center">
        {supportsWebM ? (
          <video
            src={flower}
            className="h-[240px] sm:h-[280px] md:h-[350px] lg:h-[450px] xl:h-[500px] object-contain rounded-full"
            autoPlay
            loop
            muted
            playsInline
            aria-label="Animated flower"
          />
        ) : (
          <img
            src={flower_idle}
            alt="Center flower"
            className="h-[300px] sm:h-[300px] md:h-[320px] lg:h-[380px] xl:h-[420px] object-cover md:object-contain rounded-full"
          />
        )}
      </div>

      {/* Bottom Star - closer to flower */}
      <div className="absolute bottom-[12%] left-1/2 -translate-x-40 md:-translate-x-60 z-20">
        {supportsWebM ? (
          <video
            src={star_bottom}
            className="w-20 sm:w-24 md:w-28 object-contain"
            autoPlay
            loop
            muted
            playsInline
            aria-label="Animated bottom star"
          />
        ) : (
          <img
            src={star_bottom_idle}
            alt="Star Bottom"
            className="w-20 sm:w-24 md:w-28 object-contain"
          />
        )}
      </div>
    </div>
  );
}

export default HeroVisual;
