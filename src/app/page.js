import Image from "next/image";

import Navbar from "@/components/Navbar/Navbar";
import MainSwiperWrapper from "@/wrappers/MainSwiperWrapper/MainSwiperWrapper";
import HomeSlide from "@/components/slides/HomeSlide/HomeSlide";
import WorkSlide from "@/components/slides/WorkSlide/WorkSlide";
 
// import { motion, useMotionValue } from "motion/react";
// React Server Components
// import * as motion2 from "motion/react-client";

export default function Home() {
    // const [isDark,setIsDark] = React.useState(false);
    // const x = useMotionValue(0);
    // useEffect(() => {
    // document = isDark ? "black" : "white";

    // },[isDark]);

    return (
        <div className="relative overflow-hidden p-5 lg:p-10 h-full ">
                 {/* <button onClick={() => setIsDark(!isDark)}>Toggle</button> */}

                <MainSwiperWrapper
                    slides={[<HomeSlide key={1} />, <WorkSlide key={2} />]}
                />

         </div>
    );
}
