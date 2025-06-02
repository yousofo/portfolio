import Skill from "@/components/skill/Skill";
import { SpinningBullet } from "@/components/spinning-bullet/SpinningBullet";
import WavyText from "@/components/wavy-text/WavyText";
import * as motion from "motion/react-client";
import Image from "next/image";

export default function HomeSlide() {
    let colors = [
        "bg-amber-300",
        "bg-blue-300",
        "bg-green-300",
        "bg-red-300",
        "bg-purple-300",
        "bg-pink-300",
        "bg-yellow-300",
        "bg-teal-300",
        "bg-indigo-300",
        "bg-gray-300",
        "bg-lime-300",
        "bg-cyan-300",
        "bg-orange-300",
        "bg-emerald-300",
        "bg-fuchsia-300",
        "bg-violet-300",
        "bg-rose-300",
        "bg-sky-300",
        "bg-indigo-300",
        "bg-gray-300",
        "bg-lime-300",
        "bg-cyan-300",
        "bg-orange-300",
        "bg-emerald-300",
        "bg-fuchsia-300",
        "bg-violet-300",
        "bg-rose-300",
        "bg-sky-300",
    ];
    //make hexColors
    // let hexColors = [
    //     "#fbbf24",
    //     "#60a5fa",
    //     "#34d399",
    //     "#f87171",
    //     "#a78bfa",
    //     "#ec4899",
    //     "#facc15",
    //     "#2dd4bf",
    //     "#818cf8",
    //     "#c084fc",
    //     "#f472b6",
    //     "#60a5fa",
    //     "#a3e635",
    //     "#22d3ee",
    //     "#fb923c",
    //     "#10b981",
    //     "#ec4899",
    //     "#8b5cf6",
    //     "#e879f9",
    // ];
    let images = [
        "/skills/Microsoft_.NET_logo.svg.png",
        "/skills/Angular_full_color_logo.svg.png",
        "/skills/react-removebg-preview.png",
        "/skills/prime.png",
        "/skills/sass-removebg-preview.png",
        "/skills/github-logo-2.webp",
        "/skills/bootstrap-logo.png",
        "/skills/mui.png",
        "/skills/tailwind-logo.png",
        "/skills/csharp.svg",
        "/skills/html-logo.png",
        "/skills/js.webp",
        "/skills/python-logo.png",
        "/skills/css-3.svg",
    ];
    return (
        <div>
            <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    duration: 1,
                    scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
                }}
            >
                <div className="name overflow-hidden sm:me-2 text-foreground transition-colors tracking-wide text-center">
                    <h2 className="font-bold text-4xl lg:text-5xl  ">
                        Hello!{" "}
                        <span className="text-3xl lg:text-4xl">
                            I&apos;m Youssef
                        </span>
                    </h2>
                    <p className="offers text   mt-1 text  text-yellow-600 font-bold dark:text-yellow-300/80">
                        {/* I&apos;m a <span>web developer</span> and I love building{" "}
        <span>web apps</span>! */}
                        <WavyText>A Full Stack Web Developer</WavyText>
                    </p>
                    <p className="offers text   mt-4 text-xl text-foreground/70">
                        {/* I&apos;m a <span>web developer</span> and I love building{" "}
        <span>web apps</span>! */}
                        You can check out my work and get in touch with me.
                    </p>
                </div>
            </motion.div>
            <div className="flex flex-wrap justify-center gap-1 mt-10">
                {images.map((imageUrl, index) => (
                    <Skill key={index} delay={index * 0.1}>
                        <Image
                            src={imageUrl}
                            width={50}
                            height={50}
                            alt="skill icon"
                        />
                    </Skill>
                ))}
            </div>
            <div className="fixed   left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-90 z-[-1]">
                {/* {Array.from({ length: 10 }, (_, i) =>
                    colors.map((color, index) => (
                        <SpinningBullet
                            key={`${i}-${index}`}
                            width={Math.random() * 100 + 12}
                            className={color}
                            delay={i / 4 + Math.random() * 2}
                        />
                    ))
                )} */}
            </div>
        </div>
    );
}
const tt = <svg width="100vw" height="100vh" viewBox="0 0 200 200">
    {/* <!-- Central reference point (optional) --> */}
    {/* <circle cx="100" cy="100" r="2" fill="white" /> */}

    {/* <!-- Group of orbiting stars --> */}
    <g id="orbiting-stars">
        {/* <!-- You can add more or randomize angles --> */}
        {/* {hexColors.map((color, index) => (
            <circle
                key={index}
                cx={100 + 60 * Math.cos((index * Math.PI) / 5)}
                cy={100 + 60 * Math.sin((index * Math.PI) / 5)}
                r={0.5}
                fill={color}
            />
        ))} */}
    </g>

    {/* <!-- Animation (optional, use CSS or JS as alternative) --> */}
    <style>
        {`
      #orbiting-stars {
      transform-origin: 100px 100px;
      animation: rotate 4s linear infinite;
    }

    @keyframes rotate {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
      `}
    </style>
</svg>;
