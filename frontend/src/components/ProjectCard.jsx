import "./ProjectCard.css";

const tagClass = (tech) => {
  const t = tech.toLowerCase();
  if (t.includes("react")) return "react";
  if (t.includes("node")) return "node";
  if (t.includes("typescript") || t === "ts") return "ts";
  if (t.includes("next")) return "next";
  return "default";
};

const thumbEmoji = (title) => {
  const t = title.toLowerCase();
  if (t.includes("task") || t.includes("manage")) return "🤖";
  if (t.includes("weather")) return "🖥";
  if (t.includes("commerce") || t.includes("store")) return "🧑‍🚀";
  return "💻";
};

export default function ProjectCard({ project }) {
  const { title, description, techStack, githubUrl, demoUrl } = project;

  return (
    <article className="project-card">
      <div className="project-thumb">
        <span>{thumbEmoji(title)}</span>
      </div>

      <div className="project-tags">
        {techStack.slice(0, 3).map((tech) => (
          <span key={tech} className={`project-tag ${tagClass(tech)}`}>
            {tech}
          </span>
        ))}
      </div>

      <div className="project-body">
        <h3 className="project-title">{title}</h3>
        <p className="project-desc">{description}</p>
      </div>

      <div className="project-footer">
        {githubUrl && (
          <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="project-link">
            GitHub
          </a>
        )}
        {demoUrl && (
          <a href={demoUrl} target="_blank" rel="noopener noreferrer" className="project-link demo">
            Live Demo
          </a>
        )}
      </div>
    </article>
  );
}
