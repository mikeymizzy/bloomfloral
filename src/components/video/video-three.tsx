import React from "react";
import Image from "next/image";
import feature_img from "@/assets/img/flower-portfolio/majestic-03.jpeg";

export default function VideoThree() {
  return (
    <div className="tp-video-3-area">
      <div className="tp-video-3-wrap p-relative">
        <Image
          data-speed=".7"
          className="play-video"
          src={feature_img}
          alt="Luxury floral tablescape"
          sizes="100vw"
        />
      </div>
    </div>
  );
}
