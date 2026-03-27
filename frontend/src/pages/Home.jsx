import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";
import "./Home.css";

const skillCols = [
  {
    icon: "⬡",
    title: "AI / ML",
    skills: [
      { name: "Machine Learning", level: 5 },
      { name: "Deep Learning / CNNs", level: 4 },
      { name: "NLP & Transformers", level: 4 },
      { name: "Computer Vision", level: 4 },
      { name: "Scikit-learn / XGBoost", level: 5 },
    ],
  },
  {
    icon: "◈",
    title: "Data & Backend",
    skills: [
      { name: "Python / FastAPI", level: 5 },
      { name: "TensorFlow / PyTorch", level: 4 },
      { name: "Pandas / NumPy", level: 5 },
      { name: "SQL / PostgreSQL", level: 4 },
      { name: "Node.js / Express", level: 3 },
    ],
  },
  {
    icon: "◎",
    title: "Tools & Infra",
    skills: [
      { name: "Jupyter / Colab", level: 5 },
      { name: "Git / GitHub", level: 5 },
      { name: "Docker", level: 3 },
      { name: "AWS / GCP Basics", level: 3 },
      { name: "CI/CD Pipelines", level: 3 },
    ],
  },
];

const initialForm = { name: "", email: "", message: "" };

function validate({ name, email, message }) {
  const e = {};
  if (!name.trim()) e.name = "Required";
  if (!email.trim()) e.email = "Required";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) e.email = "Invalid email";
  if (!message.trim()) e.message = "Required";
  return e;
}

export default function Home() {
  const [projects, setProjects] = useState([]);
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null);

  useEffect(() => {
    fetch("/api/projects")
      .then((r) => r.json())
      .then((d) => setProjects(d.data || []))
      .catch(() => {});
  }, []);

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
    <div className="home">
      {/* ── HERO ── */}
      <section className="hero">
        <div className="container">
          <div className="hero-badge">Available for work</div>
          <p className="hero-intro">I&apos;m</p>
          <h1 className="hero-name">
            <span className="highlight">Renika J.</span>
          </h1>
          <p className="hero-role">AI &amp; ML Engineer.</p>
          <p className="hero-desc">
            Building intelligent systems at the intersection of data, machine learning, and
            real-world impact. Currently pursuing BSc in Artificial Intelligence &amp; Machine
            Learning, focused on scalable models and intuitive applications.
          </p>
          <div className="hero-actions">
            <Link to="/projects" className="btn-primary">View Projects</Link>
            <Link to="/contact" className="btn-outline">Contact Me</Link>
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section className="home-about">
        <div className="container">
          <p className="section-label">This Chapter</p>
          <div className="about-grid">
            {/* Replace photo.jpg in frontend/public/ with your photo */}
            <div className="about-image-wrap">
              <img src="/photo.jpg" alt="Renika J" className="about-photo" />
            </div>
            <div>
              <h2 className="about-title">Bridging Intelligence and Craft</h2>
              <p className="about-body">
                I believe AI at its best is invisible — seamlessly woven into products that feel
                natural. My approach focuses on building models that are as robust under the hood
                as they are elegant in their outputs.
              </p>
              <p className="about-body">
                As a BSc AIML student, I balance rigorous academic research in deep learning and
                data science with hands-on projects that solve real problems.
              </p>
              <div className="about-tags">
                <span className="about-tag">ML Research</span>
                <span className="about-tag">Data-Driven</span>
                <span className="about-tag">Fast Learner</span>
                <span className="about-tag">Problem Solver</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section className="home-projects">
        <div className="container">
          <p className="section-label">Selected Works</p>
          <div className="section-header">
            <h2 className="section-title">Digital Creations</h2>
            <p className="section-desc">
              A collection of projects exploring modern ideas and complex problem-solving.
            </p>
          </div>
          <div className="projects-grid">
            {projects.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
        </div>
      </section>

      {/* ── SKILLS ── */}
      <section className="home-skills">
        <div className="container">
          <p className="section-label">Stack &amp; Expertise</p>
          <h2 className="section-title" style={{ marginBottom: 0 }}>Technical Arsenal</h2>
          <div className="skills-grid">
            {skillCols.map(({ icon, title, skills }) => (
              <div key={title} className="skill-col">
                <div className="skill-col-icon">{icon}</div>
                <p className="skill-col-title">{title}</p>
                {skills.map(({ name, level }) => (
                  <div key={name} className="skill-item-row">
                    <span>{name}</span>
                    <div className="skill-dots">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <div key={i} className={`skill-dot ${i <= level ? "filled" : ""}`} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section className="home-contact">
        <div className="container">
          <p className="section-label">Get in Touch</p>
          <div className="contact-grid">
            <div>
              <h2 className="contact-cta-title">
                Let&apos;s build something<br />
                <span className="highlight">extraordinary together.</span>
              </h2>
              <p className="contact-cta-desc">
                I&apos;m always open to discussing new projects, creative ideas, or opportunities
                to be part of your visions.
              </p>
              <ul className="contact-info-list">
                <li className="contact-info-item">
                  <span className="contact-info-icon">✉</span>
                  jagadeesh718@gmail.com
                </li>
                <li className="contact-info-item">
                  <span className="contact-info-icon">📍</span>
                  Bangalore, Karnataka, India
                </li>
              </ul>
            </div>

            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              <div className="form-group">
                <label htmlFor="c-name">Name</label>
                <input
                  id="c-name" name="name" type="text"
                  value={form.name} onChange={handleChange}
                  placeholder="Your Name"
                  className={errors.name ? "error" : ""}
                />
                {errors.name && <span className="field-error">{errors.name}</span>}
              </div>
              <div className="form-group">
                <label htmlFor="c-email">Email</label>
                <input
                  id="c-email" name="email" type="email"
                  value={form.email} onChange={handleChange}
                  placeholder="you@example.com"
                  className={errors.email ? "error" : ""}
                />
                {errors.email && <span className="field-error">{errors.email}</span>}
              </div>
              <div className="form-group">
                <label htmlFor="c-message">Message</label>
                <textarea
                  id="c-message" name="message" rows={4}
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
      </section>
    </div>
  );
}
