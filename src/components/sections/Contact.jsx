import React from "react";
import "../../styles/Contact.css"; // Include a custom CSS file for styling

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <h2>Contact Me</h2>
      <div className="contact-container">
        {/* Left Section: Contact Info */}
        <div className="contact-info">
          <p>
            Have a question or want to work together? I’d love to hear from you.
            Feel free to reach out using the form or directly via email or my
            social platforms.
          </p>
          <ul className="contact-details">
            <li>
              📧 Email:{" "}
              <a href="mailto:your-email@example.com">Rishavsubedi5@gmail.com</a>
            </li>
            <li>
              📞 Phone: <a href="tel:+1234567890">+977 9867779378</a>
            </li>
            <li>🌍 Location: Kathmandu, Nepal</li>
          </ul>
          <div className="contact-links">
            <a
              href="https://www.linkedin.com/in/rishav-subedi-2635a0185/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/Rishav-subedi"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              GitHub
            </a>
            <a
              href="https://x.com/elonmusk"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              Twitter
            </a>
          </div>
        </div>

        {/* Right Section: Contact Form */}
        <div className="contact-form-container">
          <h3 style={{textAlign:'center'}}>Hit me up!!</h3>
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
