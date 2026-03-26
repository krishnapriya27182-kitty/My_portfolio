import { useState, useEffect } from "react";
import ProjectCard from "../components/ProjectCard";
import "./Projects.css";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/projects")
      .then((r) => r.json())
      .then((d) => { setProjects(d.data || []); setLoading(false); })
      .catch(() => setLoading(false));
  }, []);

  return (
    <div className="projects-page">
      <div className="container">
        <p className="section-label">Selected Works</p>
        <div className="projects-header">
          <h1 className="page-title">Digital Creations</h1>
          <p className="projects-subtitle">
            A collection of projects exploring modern ideas and complex problem-solving.
          </p>
        </div>

        {loading ? (
          <p className="loading-msg">Loading projects...</p>
        ) : (
          <div className="projects-grid-full">
            {projects.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
