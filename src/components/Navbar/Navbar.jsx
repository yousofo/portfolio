"use client";
import ThemeSwitcher from "@/components/ThemeSwitcher/ThemeSwitcher";
import { useSwiperStore } from "@/wrappers/MainSwiperWrapper/MainSwiperWrapper";

export default function Navbar() {
    let { swiper } = useSwiperStore();

    function handleNavClick(slideIndex) {
        // if (swiper) {
        //     swiper.slideTo(slideIndex);
        // }
    }

    return (
        <div className="relative z-50 flex justify-center items-center w-full h-24 sm:h-20">
            <nav className="nav    sm:bg-transparent ">
                <div className="nav-con  relative flex justify-center p-1 m-auto gap-1 w-max rounded-md text-foreground bg-opacity-30 bg-foreground">
                    <button
                        id="aboutBtn"
                        onClick={() => handleNavClick(0)}
                        className="about transition-colors cursor-pointer flex items-center px-3 rounded-md gap-1 bg-background bg-opacity-90"
                    >
                        About
                    </button>
                    <nav className="links [&>*]:rounded-md [&>*] [&>*]:bg-background [&>*]:bg-opacity-90 flex text-ntext gap-1 rounded-lg items-center text-sm ml:text-base [&>*]:transition-colors">
                        <a
                            className="border border-transparent p-2 "
                            id="workBtn"
                            onClick={() => handleNavClick(1)}
                            href="https://github.com/yousofo?tab=repositories"
                        >
                            Recent Works
                        </a>
                        <a
                        href="https://drive.google.com/file/d/1jA9k2vd63ndzKSrnsgr8Gl2syp3GVHvc/view?usp=drive_link"
                            className="border border-transparent p-2 "
                            id="contactBtn"
                            onClick={() => handleNavClick(2)}
                        >
                            
                         Resume 
                            {/* Contact &amp; CV */}
                        </a>
                        <a
                            className="border border-transparent [&>*]:rounded-md text-background "
                            id="contactBtn"
                        >
                            <ThemeSwitcher />
                        </a>
                    </nav>
                </div>
            </nav>
        </div>
    );
}
