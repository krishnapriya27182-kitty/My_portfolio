import "./About.css";

export default function About() {
  return (
    <div className="about-page">
      <div className="container">
        <p className="section-label">This Chapter</p>
        <h1 className="page-title">About Me</h1>

        <div className="about-grid">
          <div className="about-image-wrap">
            <img src="/photo.jpg" alt="Renika J" className="about-photo" />
          </div>

          <div className="about-content">
            <h2 className="about-subtitle">Bridging Intelligence and Craft</h2>
            <p className="about-body">
              I believe AI at its best is invisible — seamlessly woven into products that feel
              natural. My approach focuses on building models that are as robust under the hood
              as they are elegant in their outputs.
            </p>
            <p className="about-body">
              As a BSc AIML student, I balance rigorous academic research in deep learning and
              data science with hands-on projects that solve real-world problems.
            </p>

            <div className="about-details">
              <div className="detail-row">
                <span className="detail-label">Location</span>
                <span className="detail-value">Bangalore, Karnataka, India</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Education</span>
                <span className="detail-value">BSc Artificial Intelligence &amp; ML</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Focus</span>
                <span className="detail-value">ML, Deep Learning, Data Science</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Status</span>
                <span className="detail-value available">Open to Work</span>
              </div>
            </div>

            <div className="about-tags">
              <span className="about-tag">ML Research</span>
              <span className="about-tag">Data-Driven</span>
              <span className="about-tag">Fast Learner</span>
              <span className="about-tag">Problem Solver</span>
              <span className="about-tag">Open Source</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
