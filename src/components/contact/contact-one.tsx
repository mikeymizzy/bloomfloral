import React from "react";
import Image from "next/image";
import cta from '@/assets/img/flower-portfolio/flower-23.jpeg';

export default function ContactOne() {
  return (
    <div id="contact" className="tp-cta-area black-bg pt-120 pb-120 z-index fix">
      <div className="container">
        <div className="col-xl-12">
          <div className="tp-cta-title-box p-relative">
            <h4 className="tp-cta-title cta-text">
              Let’s design
              <span>your florals</span>
            </h4>
            <p className="tp_fade_bottom">
              Share your date, venue, color direction, and floral wish list.
              We will shape the arrangements around your occasion.
            </p>
            <div className="tp-cta-icon">
              <Image src={cta} alt="floral consultation arrangement" sizes="180px" />
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-xl-8 col-lg-10">
            <form className="flower-contact-form" action="mailto:hello@bloomfloral.co.za" method="post">
              <div className="row">
                <div className="col-md-6">
                  <input type="text" name="name" placeholder="Your name" aria-label="Your name" />
                </div>
                <div className="col-md-6">
                  <input type="email" name="email" placeholder="Email address" aria-label="Email address" />
                </div>
                <div className="col-md-6">
                  <input type="tel" name="phone" placeholder="Phone number" aria-label="Phone number" />
                </div>
                <div className="col-md-6">
                  <input type="text" name="event_date" placeholder="Event date" aria-label="Event date" />
                </div>
                <div className="col-12">
                  <input type="text" name="event_type" placeholder="Wedding, corporate event, tablescape..." aria-label="Event type" />
                </div>
                <div className="col-12">
                  <textarea name="message" placeholder="Tell us about the venue, color palette, guest count, and floral style you want" aria-label="Floral enquiry details"></textarea>
                </div>
                <div className="col-12 text-center">
                  <button type="submit">Send Enquiry</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
