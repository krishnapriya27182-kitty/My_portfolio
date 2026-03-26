import "./Skills.css";

const skillGroups = [
  {
    icon: "🧠",
    category: "AI / Machine Learning",
    skills: [
      { name: "Machine Learning", level: 5 },
      { name: "Deep Learning / CNNs", level: 4 },
      { name: "Natural Language Processing", level: 4 },
      { name: "Computer Vision", level: 4 },
      { name: "Reinforcement Learning", level: 3 },
      { name: "Scikit-learn / XGBoost", level: 5 },
      { name: "Model Evaluation & Tuning", level: 5 },
    ],
  },
  {
    icon: "⬡",
    category: "Data Science & Frontend",
    skills: [
      { name: "Python", level: 5 },
      { name: "Pandas / NumPy", level: 5 },
      { name: "Matplotlib / Seaborn", level: 4 },
      { name: "TensorFlow / Keras", level: 4 },
      { name: "PyTorch", level: 4 },
      { name: "React / JavaScript", level: 3 },
      { name: "HTML / CSS", level: 4 },
    ],
  },
  {
    icon: "◈",
    category: "Backend & Databases",
    skills: [
      { name: "FastAPI / Flask", level: 4 },
      { name: "Node.js / Express", level: 3 },
      { name: "SQL / PostgreSQL", level: 4 },
      { name: "MongoDB", level: 3 },
      { name: "REST APIs", level: 4 },
      { name: "GraphQL", level: 3 },
      { name: "Firebase", level: 3 },
    ],
  },
  {
    icon: "◎",
    category: "Tools & Infrastructure",
    skills: [
      { name: "Jupyter / Google Colab", level: 5 },
      { name: "Git / GitHub", level: 5 },
      { name: "Docker", level: 3 },
      { name: "AWS / GCP Basics", level: 3 },
      { name: "Linux / Bash", level: 4 },
      { name: "CI/CD Pipelines", level: 3 },
      { name: "Streamlit / Gradio", level: 4 },
    ],
  },
];

export default function Skills() {
  return (
    <div className="skills-page">
      <div className="container">
        <p className="section-label">Stack &amp; Expertise</p>
        <h1 className="page-title">Technical Arsenal</h1>

        <div className="skills-grid">
          {skillGroups.map(({ icon, category, skills }) => (
            <div key={category} className="skill-group">
              <div className="skill-group-icon">{icon}</div>
              <h2 className="skill-group-title">{category}</h2>
              <div className="skill-list">
                {skills.map(({ name, level }) => (
                  <div key={name} className="skill-row">
                    <span className="skill-name">{name}</span>
                    <div className="skill-dots">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <div key={i} className={`skill-dot ${i <= level ? "filled" : ""}`} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
