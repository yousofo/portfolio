import { delay } from "motion";
import * as motion from "motion/react-client";
import React from "react";
import "./styles.css";
const Skill = ({ children, delay=0 }) => {
    return (
        <motion.button
            className="skill rounded overflow-hidden"
            initial={{
                opacity: 0,
                scale: 0,
                translateX: -1000,
                translateY: 100,
            }}
            animate={{
                opacity: 1,
                scale: 1,
                translateX: 0,
                translateY: 0,
                pathLength: 1,
            }}
            transition={{
                duration: 1,
                delay,
                bounce: 0.5,
                type: "Tween",
                scale: {
                    type: "spring",
                    visualDuration: 0.7,
                    bounce: 0.7,
                    delay: 0.7,
                },
            }}
        >
            {children}
        </motion.button>
    );
};

export default Skill;
