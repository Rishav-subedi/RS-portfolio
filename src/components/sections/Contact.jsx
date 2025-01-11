import React from "react";
import "../../styles/Contact.css"; // Include a custom CSS file for styling
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <h2>Contact Me</h2>
      <div className="contact-container">
        {/* Left Section: Contact Info */}
        <div className="contact-info">
          <p>
            Have a question or want to work together? I’d love to hear from you.
            Feel free to reach out using the <strong>form</strong> or directly via email or my
            social platforms.
          </p>
          <ul className="contact-details">
            <li>
              📧 Email:{" "}
              <a href="mailto:rishavsubedi5@gmail.com">
                Rishavsubedi5@gmail.com
              </a>
            </li>
            <li>
              📞 Phone: <a href="tel:+9779867779378">+977 9867779378</a>
            </li>
            <li>🌍 Location: Kathmandu, Nepal</li>
          </ul>
          <div
            className="contact-links"
            style={{ display: "flex", gap: "10px" }}
          >
            {/* LinkedIn Icon Button */}
            <a
              href="https://www.linkedin.com/in/rishav-subedi-2635a0185/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
              style={{ fontSize: "24px", color: "#0A66C2" }}
            >
              <FaLinkedin />
            </a>

            {/* GitHub Icon Button */}
            <a
              href="https://github.com/Rishav-subedi"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
              style={{ fontSize: "24px", color: "#171515" }}
            >
              <FaGithub />
            </a>

            {/* Instagram Icon Button */}
            <a
              href="https://www.instagram.com/_rishav.subedi/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
              style={{ fontSize: "24px", color: "#E1306C" }}
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Right Section: Contact Form */}
        <div className="contact-form-container">
          <form
            className="contact-form"
            action="https://formspree.io/f/xzzzkwwl"
            method="POST"
          >
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
