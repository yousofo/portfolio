"use client";
import * as motion from "motion/react-client";
import ThemeSwitcher from "@/components/ThemeSwitcher/ThemeSwitcher";
import { useSwiperStore } from "@/wrappers/MainSwiperWrapper/MainSwiperWrapper";
import Link from "next/link";

export default function Navbar() {
    let { swiper } = useSwiperStore();

    function handleNavClick(slideIndex) {
        // if (swiper) {
        //     swiper.slideTo(slideIndex);
        // } 
    }
    
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0 ,translateY: 100 }}
            animate={{ opacity: 1, scale: 1 ,translateY: 0 }}
            transition={{
                duration: 0.5,
                scale: { type: "spring", visualDuration: 0.4, bounce: 0.4 },
            }}
        >
            <div className="relative z-50 flex justify-center items-center w-full h-24 sm:h-20">
                <nav className="nav    sm:bg-transparent ">
                    <div className="nav-con  relative flex justify-center p-1 m-auto gap-1 w-max rounded-md text-foreground bg-foreground/30">
                        {/* <button
                            id="aboutBtn"
                            onClick={() => handleNavClick(0)}
                            className="about transition-colors cursor-pointer flex items-center px-3 rounded-md gap-1 bg-background"
                        >
                            About
                        </button> */}
                        <nav className="links [&>*]:rounded-md [&>*] [&>*]:bg-background [&>*]:bg-opacity-90 flex text-ntext gap-1 rounded-lg items-center text-sm ml:text-base [&>*]:transition-colors">
                            <Link
                                className="border border-transparent p-2 "
                                id="workBtn"
                                onClick={() => handleNavClick(1)}
                                // href="https://github.com/yousofo?tab=repositories"
                                href="/projects"
                            >
                                Projects
                            </Link>
                            <a
                                href="https://drive.google.com/file/d/1jA9k2vd63ndzKSrnsgr8Gl2syp3GVHvc/view?usp=drive_link"
                                className="border border-transparent p-2 "
                                id="contactBtn"
                                onClick={() => handleNavClick(2)}
                            >
                                Resume
                                {/* Contact &amp; CV */}
                            </a>
                            <div
                                className="border border-transparent [&>*]:rounded-md text-background  "
                                id="contactBtn"
                            >
                                <ThemeSwitcher />
                            </div>
                        </nav>
                    </div>
                </nav>
            </div>
        </motion.div>
    );
}
