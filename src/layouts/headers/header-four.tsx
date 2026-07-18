'use client';
import React, { useEffect } from "react";
import Link from "next/link";
import useStickyHeader from "@/hooks/use-sticky-header";
import { ScrollSmoother } from "@/plugins";

const nav_links = [
  { href: "/", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#contact-form", label: "Contact" },
];

export default function HeaderFour() {
const {isSticky, headerFullWidth} = useStickyHeader(20);
  useEffect(() => {
    headerFullWidth();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleAnchorClick = (event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!href.startsWith("#")) return;

    const target = document.querySelector(href);
    if (!target) return;

    event.preventDefault();
    window.history.pushState(null, "", href);

    const smoother = ScrollSmoother.get();
    if (smoother) {
      smoother.scrollTo(target, true, "top 120px");
      return;
    }

    const targetTop = target.getBoundingClientRect().top + window.scrollY - 120;
    window.scrollTo({ top: targetTop, behavior: "smooth" });
  };
  
  return (
    <>
      <header>
        <div id="header-sticky" className={`tp-header-3-area tp-header-3-on-dark mt-35 z-index-5 ${isSticky?'header-sticky':''}`}>
          <div className="container container-1740">
            <div className="row align-items-center">
              <div className="col-xl-3 col-lg-6 col-md-6 col-6">
                <div className="tp-header-logo tp-header-3-logo flower-header-logo">
                  <Link href="/">Majestic Florist</Link>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 d-none d-xl-block">
                <div className="tp-header-3-menu-wrap text-center">
                  <div className="tp-header-3-menu-box d-inline-flex align-items-center justify-content-between">
                    <div className="tp-header-3-menu header-main-menu">
                      <nav className="tp-main-menu-content flower-simple-menu">
                        <ul>
                          {nav_links.map((link) => (
                            <li key={link.href}>
                              <Link href={link.href} onClick={(event) => handleAnchorClick(event, link.href)}>
                                {link.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-md-6 col-6">
                <div className="tp-header-3-right d-flex align-items-center justify-content-end">
                  <div className="tp-header-3-social d-none d-sm-block">
                    <Link href="mailto:info@majesticflorist.co.za" aria-label="Email Majestic Florist">
                      <i className="fa-solid fa-envelope"></i>
                    </Link>
                    <Link href="tel:+27613548164" aria-label="Call Majestic Florist">
                      <i className="fa-solid fa-phone"></i>
                    </Link>
                    <Link href="https://www.majesticflorist.co.za" aria-label="Visit the Majestic Florist website">
                      <i className="fa-solid fa-globe"></i>
                    </Link>
                  </div>
                  <Link href="#contact-form" className="flower-mobile-cta d-xl-none">Contact</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
