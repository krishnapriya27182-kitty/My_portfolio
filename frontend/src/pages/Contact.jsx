import { useState } from "react";
import "./Contact.css";

const initialForm = { name: "", email: "", message: "" };

function validate({ name, email, message }) {
  const e = {};
  if (!name.trim()) e.name = "Required";
  if (!email.trim()) e.email = "Required";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) e.email = "Invalid email";
  if (!message.trim()) e.message = "Required";
  return e;
}

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
    if (errors[name]) setErrors((p) => ({ ...p, [name]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const v = validate(form);
    if (Object.keys(v).length) { setErrors(v); return; }
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.success) { setStatus("success"); setForm(initialForm); }
      else setStatus("error");
    } catch { setStatus("error"); }
  };

  return (
    <div className="contact-page">
      <div className="container">
        <p className="section-label">Get in Touch</p>
        <div className="contact-grid">
          <div className="contact-left">
            <h1 className="contact-title">
              Let&apos;s build something<br />
              <span className="highlight">extraordinary together.</span>
            </h1>
            <p className="contact-desc">
              I&apos;m always open to discussing new projects, creative ideas, or opportunities to
              be part of your visions.
            </p>
            <ul className="contact-info-list">
              <li className="contact-info-item">
                <span className="contact-info-icon">✉</span>
                {/* TODO: Replace with your email */}
                your.email@example.com
              </li>
              <li className="contact-info-item">
                <span className="contact-info-icon">📍</span>
                Bangalore, Karnataka, India
              </li>
            </ul>
            <div className="contact-socials">
              <a href="https://github.com/username" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://linkedin.com/in/username" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="https://twitter.com/username" target="_blank" rel="noopener noreferrer">Twitter</a>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                id="name" name="name" type="text"
                value={form.name} onChange={handleChange}
                placeholder="Your Name"
                className={errors.name ? "error" : ""}
              />
              {errors.name && <span className="field-error">{errors.name}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                id="email" name="email" type="email"
                value={form.email} onChange={handleChange}
                placeholder="you@example.com"
                className={errors.email ? "error" : ""}
              />
              {errors.email && <span className="field-error">{errors.email}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message" name="message" rows={5}
                value={form.message} onChange={handleChange}
                placeholder="How can I help you?"
                className={errors.message ? "error" : ""}
              />
              {errors.message && <span className="field-error">{errors.message}</span>}
            </div>
            {status === "success" && (
              <p className="form-status success">Message sent. I&apos;ll get back to you soon.</p>
            )}
            {status === "error" && (
              <p className="form-status error">Something went wrong. Please try again.</p>
            )}
            <button type="submit" className="btn-send">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
}
