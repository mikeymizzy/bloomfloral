'use client';
import React from "react";
import { ArrowBg, RightArrowTwo } from "../svg";
import Link from "next/link";
import { ScrollSmoother } from "@/plugins";

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

  return (
    <div className="tp-hero-3-area tp-hero-3-ptb tp-hero-3-dark fix">
      <div className="container">
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
