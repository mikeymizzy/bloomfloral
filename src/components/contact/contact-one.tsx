"use client";

import React, { useState, useEffect } from "react";
// decorative image removed per request

export default function ContactOne() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [feedback, setFeedback] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("sending");
    setFeedback("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          phone: formData.get("phone"),
          eventDate: formData.get("event_date"),
          eventType: formData.get("event_type"),
          message: formData.get("message"),
          website: formData.get("website"),
        }),
      });

      const result = (await response.json()) as { error?: string };
      if (!response.ok) {
        throw new Error(result.error || "Unable to send your enquiry.");
      }

      form.reset();
      setStatus("success");
      setFeedback("Thank you. Your enquiry has been sent to Majestic Florist.");
    } catch (error) {
      setStatus("error");
      setFeedback(error instanceof Error ? error.message : "Unable to send your enquiry.");
    }
  };

  useEffect(() => {
    if (typeof window === "undefined") return;

    const scrollToForm = () => {
      try {
        const formEl = document.getElementById("contact-form");
        if (formEl) {
          // wait for layout animations to complete (e.g., gsap animations on viewport enter)
          setTimeout(() => {
            const rect = formEl.getBoundingClientRect();
            const yOffset = -100; // account for fixed header
            window.scrollBy({
              top: rect.top + window.scrollY + yOffset,
              behavior: "smooth",
            });
          }, 300); // give animations time to run
        }
      } catch (e) {
        /* ignore */
      }
    };

    const handleHash = () => {
      const hash = window.location.hash;
      if (hash === "#contact" || hash === "#contact-form") {
        scrollToForm();
      }
    };

    // run once on mount in case we landed with the hash
    handleHash();
    window.addEventListener("hashchange", handleHash);
    return () => window.removeEventListener("hashchange", handleHash);
  }, []);

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
            {/* contact image removed */}
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-xl-8 col-lg-10">
            <form id="contact-form" className="flower-contact-form" onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-md-6">
                  <input type="text" name="name" placeholder="Your name" aria-label="Your name" required />
                </div>
                <div className="col-md-6">
                  <input type="email" name="email" placeholder="Email address" aria-label="Email address" required />
                </div>
                <div className="col-md-6">
                  <input type="tel" name="phone" placeholder="Phone number" aria-label="Phone number" required />
                </div>
                <div className="col-md-6">
                  <input type="text" name="event_date" placeholder="Event date" aria-label="Event date" />
                </div>
                <div className="col-12">
                  <select name="event_type" aria-label="Event type" defaultValue="" required>
                    <option value="" disabled>Choose event type</option>
                    <option value="Wedding">Wedding</option>
                    <option value="Corporate event">Corporate event</option>
                    <option value="Private function">Private function</option>
                    <option value="Birthday or celebration">Birthday or celebration</option>
                    <option value="Tablescape or dinner">Tablescape or dinner</option>
                    <option value="Floral installation">Floral installation</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div className="col-12">
                  <textarea name="message" placeholder="Tell us about the venue, color palette, guest count, and floral style you want" aria-label="Floral enquiry details" required></textarea>
                </div>
                <div className="flower-hp-field" aria-hidden="true">
                  <label htmlFor="website">Website</label>
                  <input id="website" type="text" name="website" tabIndex={-1} autoComplete="off" />
                </div>
                <div className="col-12 text-center">
                  <button type="submit" disabled={status === "sending"}>
                    {status === "sending" ? "Sending…" : "Send Enquiry"}
                  </button>
                  {feedback && (
                    <p className={`flower-form-feedback ${status}`} role="status" aria-live="polite">
                      {feedback}
                    </p>
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
