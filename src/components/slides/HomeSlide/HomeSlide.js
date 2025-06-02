import WavyText from "@/components/wavy-text/WavyText";
import * as motion from "motion/react-client";
 
export default function HomeSlide() {
    return (
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
    );
}
