import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ProjectCard from "../../frontend/src/components/ProjectCard";

const mockProject = {
  id: 1,
  title: "Test Project",
  description: "A test project description.",
  techStack: ["React", "Node.js"],
  githubUrl: "https://github.com/test/repo",
  demoUrl: "https://demo.example.com",
};

describe("ProjectCard", () => {
  it("renders the project title", () => {
    render(<ProjectCard project={mockProject} />);
    expect(screen.getByText("Test Project")).toBeInTheDocument();
  });

  it("renders the project description", () => {
    render(<ProjectCard project={mockProject} />);
    expect(screen.getByText("A test project description.")).toBeInTheDocument();
  });

  it("renders all tech stack tags", () => {
    render(<ProjectCard project={mockProject} />);
    expect(screen.getByText("React")).toBeInTheDocument();
    expect(screen.getByText("Node.js")).toBeInTheDocument();
  });

  it("renders GitHub and demo links", () => {
    render(<ProjectCard project={mockProject} />);
    expect(screen.getByText("GitHub")).toHaveAttribute("href", mockProject.githubUrl);
    expect(screen.getByText("Live Demo")).toHaveAttribute("href", mockProject.demoUrl);
  });
});
