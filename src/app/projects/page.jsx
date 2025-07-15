"use client";
import React, { useRef } from "react";
import * as motion from "motion/react-client";

const navVariants = {
    open: {
        transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
    closed: {
        transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
};

const projectData = [
    { title: "Project1", description: "Description1", image: "image1" },
    { title: "Project2", description: "Description2", image: "image2" },
    { title: "Project2", description: "Description2", image: "image2" },
    { title: "Project2", description: "Description2", image: "image2" },
    { title: "Project2", description: "Description2", image: "image2" },
    { title: "Project2", description: "Description2", image: "image2" },
    { title: "Project2", description: "Description2", image: "image2" },
    { title: "Project2", description: "Description2", image: "image2" },
    { title: "Project2", description: "Description2", image: "image2" },
];

export default function Projects  ()  {
    const containerRef = useRef(null);

    const dimentions = {
        height: (() => containerRef.current?.offsetHeight)(),
        width: (() => containerRef.current?.offsetWidth)(),
    };

    return (
        <div className="flex flex-col justify-center items-center h-full max-w-3xl mx-auto">
          <div className="my-10">
            <p className="text-[10px] uppercase px-2 py-1 font-bold bg-gray-500/20 rounded-full w-fit mx-auto">Portfolio</p>
          <h1 className="text-3xl font-bold">Recent Projects</h1>
          </div>

          <motion.div
            initial={false}
            animate={true ? "open" : "closed"}
            custom={dimentions.height}
            variants={navVariants}
            ref={containerRef}
            className="grid grid-cols-2 gap-2 w-full h-full"
        >
            {projectData.map((project, index) => (
                <ProjectCard data={project} key={index}   />
            ))}
        </motion.div>
        </div>
    );
};




//--------------------------------------------------------------------------




const itemVariants = {
    open: {
        y: 0,
        opacity: 1,
        transition: {
            y: { stiffness: 1000, velocity: -100 },
        },
    },
    closed: {
        y: 50,
        opacity: 0,
        transition: {
            y: { stiffness: 1000 },
        },
    },
}

const ProjectCard = ({ data }) => {
     return (
        <motion.div
             variants={itemVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="w-full h-full bg-amber-400/10"
        >
            <div>{data.title}</div>
        </motion.div>
    );
};

