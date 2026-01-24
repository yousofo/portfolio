"use client";
import React from "react";
import * as motion from "motion/react-client";
import Image from "next/image";
 import Project from "@/modules/projects/project/project";

function Projects() {
  const projects = Array.from({ length: 50 }, () => ({
    name: "Project 1",
    description: "Description of Project 1",
    imageUrl: "/assets/projects/project.jpg",
    videoUrl: "/assets/projects/cat.mp4",
    skills: ["React", "Node.js", "MongoDB"],
  }));

  function isInViewPort(el: HTMLDivElement) {
    const rect = el.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= window.innerHeight;
  }

  return (
    <div
       className="container no-scrollbar overflow-auto h-full mx-auto p-4 mt-[10vh] grid gap-8  sm:grid-cols-2 md:grid-cols-3 "
    >
      {projects.map((project, ix) => (
        <Project key={ix} data={project} animationDelay={ix * 0.1} />
      ))}
    </div>
  );
}

export default Projects;
