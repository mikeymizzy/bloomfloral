'use client';
import React from "react";
import { ArrowBg, RightArrowTwo } from "../svg";
import Link from "next/link";
import { ScrollSmoother } from "@/plugins";
import Slider from "react-slick";
import Image from "next/image";
// flower portfolio images
import flower_01 from '@/assets/img/flower-portfolio/flower-01.jpeg';
import flower_02 from '@/assets/img/flower-portfolio/flower-02.jpeg';
import flower_03 from '@/assets/img/flower-portfolio/flower-03.jpeg';
import flower_04 from '@/assets/img/flower-portfolio/flower-04.jpeg';
import flower_05 from '@/assets/img/flower-portfolio/flower-05.jpeg';
import flower_06 from '@/assets/img/flower-portfolio/flower-06.jpeg';
import majestic_01 from '@/assets/img/flower-portfolio/majestic-01.jpeg';
import majestic_02 from '@/assets/img/flower-portfolio/majestic-02.jpeg';
import majestic_03 from '@/assets/img/flower-portfolio/majestic-03.jpeg';

const hero_images = [majestic_01, majestic_02, majestic_03, flower_01, flower_02, flower_03, flower_04, flower_05, flower_06];

export default function HeroBannerFour() {
  const handleBookFlowers = () => {
    const target = document.getElementById("contact-form");
    if (!target) return;

    const smoother = ScrollSmoother.get();
    if (smoother) {
      smoother.scrollTo(target, true, "top 120px");
      return;
    }

    const targetTop = target.getBoundingClientRect().top + window.scrollY - 120;
    window.scrollTo({ top: targetTop, behavior: "smooth" });
  };

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 5000,
    autoplay: true,
    autoplaySpeed: 6000,
    fade: true,
    cssEase: "linear",
    arrows: false,
    pauseOnHover: false,
  };

  return (
    <div className="tp-hero-3-area tp-hero-3-ptb tp-hero-3-dark fix p-relative">
      {/* Background Image Slider */}
      <div className="tp-hero-3-bg-slider p-absolute top-0 left-0 w-100 h-100">
        <Slider {...sliderSettings}>
          {hero_images.map((img, idx) => (
            <div key={idx} className="tp-hero-3-bg-slide">
              <Image
                src={img}
                alt={`Hero background ${idx + 1}`}
                fill
                className="object-cover"
                priority={idx === 0}
              />
            </div>
          ))}
        </Slider>
      </div>

      {/* Content Overlay */}
      <div className="container p-relative z-index-10">
        <div className="row">
          <div className="col-xl-12">
            <div className="tp-hero-3-content-box text-center p-relative">
              <div className="tp-hero-3-circle-shape">
                <span></span>
              </div>
              <h4 className="tp-hero-3-title tp_reveal_anim">
                <span className="tp-reveal-line">Bespoke floral</span>
                <span className="tp-reveal-line">event styling</span>
              </h4>
              <span className="tp-hero-3-category tp_reveal_anim">
                weddings / corporate events / tablescapes / installations
              </span>
              <button
                className="tp-btn-black-2"
                onClick={handleBookFlowers}
                type="button"
                aria-label="Book Flowers"
              >
                Book Flowers{" "}
                <span className="p-relative">
                  <RightArrowTwo />
                  <ArrowBg />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
