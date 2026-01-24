import { useInView } from "@/lib/hooks/useInView";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import "./style.css";
import { div } from "motion/react-client";
import useStore from "@/lib/store/store";

interface IProject {
  name: string;
  description: string;
  imageUrl?: string;
  videoUrl?: string;
  skills: string[];
}

function Project({ data, animationDelay }: { data: IProject; animationDelay: number }) {
  const { ui, updateUI } = useStore();
  const wasInView = useRef(false);

  const { ref, inView } = useInView<HTMLDivElement>({
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      wasInView.current = true;
      updateUI({ projects: { inView: ui.projects.inView + 1 } });
    } else {
      if (wasInView.current) {
        wasInView.current = false;
        updateUI({ projects: { inView: ui.projects.inView - 1 } });
      }
    }
  }, []);
  return (
    <div ref={ref}>
      <div
        style={{
          animationDelay: `${animationDelay}s`,
        }}
        className={`text-center flex flex-col gap-4 project ${inView ? "project-fade-in" : ""}`}
      >
        <h2 className="text-lg font-semibold">{data.name}</h2>
        <p>{data.description}</p>
        {data?.videoUrl ? (
          <Image
            loading="lazy"
            className="w-full aspect-video object-cover rounded"
            src={data?.imageUrl ?? ""}
            width={500}
            height={0}
            alt={data.name}
          />
        ) : (
          <video loop autoPlay muted src={data.videoUrl}></video>
        )}
        <div className="flex gap-2 justify-center">
          {data.skills.map((skill) => (
            <span className="text-yellow-300   text-xs border border-yellow-300/10 px-2 py-0.5 rounded" key={skill}>
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Project;
