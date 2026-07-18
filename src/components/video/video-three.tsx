'use client';
import React from "react";
import Image from "next/image";
import Slider from "react-slick";
// flower portfolio images
import flower_01 from '@/assets/img/flower-portfolio/flower-01.jpeg';
import flower_02 from '@/assets/img/flower-portfolio/flower-02.jpeg';
import flower_03 from '@/assets/img/flower-portfolio/flower-03.jpeg';
import flower_04 from '@/assets/img/flower-portfolio/flower-04.jpeg';
import flower_05 from '@/assets/img/flower-portfolio/flower-05.jpeg';
import flower_06 from '@/assets/img/flower-portfolio/flower-06.jpeg';
import flower_07 from '@/assets/img/flower-portfolio/flower-07.jpeg';
import flower_08 from '@/assets/img/flower-portfolio/flower-08.jpeg';
import majestic_01 from '@/assets/img/flower-portfolio/majestic-01.jpeg';
import majestic_02 from '@/assets/img/flower-portfolio/majestic-02.jpeg';
import majestic_03 from '@/assets/img/flower-portfolio/majestic-03.jpeg';
import majestic_04 from '@/assets/img/flower-portfolio/majestic-04.jpeg';
import majestic_05 from '@/assets/img/flower-portfolio/majestic-05.jpeg';
import majestic_06 from '@/assets/img/flower-portfolio/majestic-06.jpeg';
import majestic_07 from '@/assets/img/flower-portfolio/majestic-07.jpeg';
import majestic_08 from '@/assets/img/flower-portfolio/majestic-08.jpeg';

const all_images = [
  majestic_01, majestic_02, majestic_03, majestic_04, 
  majestic_05, majestic_06, majestic_07, majestic_08,
  flower_01, flower_02, flower_03, flower_04, 
  flower_05, flower_06, flower_07, flower_08,
];

export default function VideoThree() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 800,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    pauseOnHover: true,
    dotsClass: "tp-video-3-dots",
  };

  return (
    <div className="tp-video-3-area">
      <div className="tp-video-3-wrap p-relative">
        <Slider {...sliderSettings}>
          {all_images.map((img, idx) => (
            <div key={idx} className="tp-video-3-slide p-relative">
              <Image
                data-speed=".7"
                className="play-video"
                src={img}
                alt={`Luxury floral design ${idx + 1}`}
                sizes="100vw"
                priority={idx === 0}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
