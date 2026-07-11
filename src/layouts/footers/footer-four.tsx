import React from 'react';
import { RightArrow, SvgBgSm } from '@/components/svg';
import Link from 'next/link';

export default function FooterFour() {
  return (
    <footer>
      <div className="tp-footer-3-area dark-bg pt-120">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-6 col-md-6 mb-60">
              <div className="tp-footer-3-widget-wrapper footer-col-3-1">
                <div className="tp-footer-3-widget mb-40">
                  <h4 className="tp-footer-3-title">Explore</h4>
                  <div className="tp-footer-3-menu">
                    <ul>
                      <li><Link href="/">Home</Link></li>
                      <li><Link href="#services">Services</Link></li>
                      <li><Link href="#portfolio">Portfolio</Link></li>
                      <li><Link href="#contact">Contact</Link></li>
                    </ul>
                  </div>
                </div>
                <div className="tp-footer-3-widget">
                  <h4 className="tp-footer-3-title">Enquiry list</h4>
                  <div className="tp-footer-3-input-box d-flex align-items-center">
                    <input type="email" placeholder="Email address..." />
                    <button className="tp-footer-3-btn p-relative">
                      <span className="icon-1">
                        <RightArrow clr='#19191A' />
                      </span>
                      <span className="icon-2">
                        <SvgBgSm/>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 mb-60">
              <div className="tp-footer-3-widget text-md-center footer-col-3-2">
                <div className="tp-footer-3-logo-box">
                  <p className="mb-100">
                    Floral design for celebrations, <br />
                    brand moments, and intimate tables.
                  </p>
                  <Link className="tp-footer-3-logo p-relative flower-footer-logo" href="/">
                    Bloom Floral
                  </Link>
                  <p className="tp-footer-3-copyright">
                    {new Date().getFullYear()} Bloom Floral <br /> © All rights reserved
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 mb-60">
              <div className="tp-footer-3-widget-wrapper footer-col-3-3">
                <div className="tp-footer-3-widget mb-30">
                  <h4 className="tp-footer-3-title">Contact</h4>
                  <div className="tp-footer-2-contact-item">
                    <span>
                      <Link href="#contact">Available for weddings, events, and private bookings</Link>
                      </span>
                  </div>
                  <div className="tp-footer-2-contact-item">
                    <span>P: <Link href="tel:+27833824166">+27833824166</Link></span>
                    <span>E: <Link href="mailto:hello@bloomfloral.co.za">hello@bloomfloral.co.za</Link></span>
                  </div>
                </div>
                <div className="tp-footer-3-widget">
                  <h4 className="tp-footer-3-title">Follow</h4>
                  <div className="tp-footer-3-social">
                    <Link href="#"><i className="fa-brands fa-facebook-f"></i></Link>
                    <Link href="#"><i className="fa-brands fa-instagram"></i></Link>
                    <Link href="mailto:hello@bloomfloral.co.za"><i className="fa-solid fa-envelope"></i></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </footer>
  )
}
