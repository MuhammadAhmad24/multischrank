import React, { useMemo, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

function Character({ char, progress, start, end }) {
    const opacity = useTransform(progress, [start, end], [0.5, 1]);
    const y = useTransform(progress, [start, end], [14, 0]);

    return (
        <motion.span
            style={{ opacity, y }}
            className="inline-block will-change-transform"
        >
            {char === " " ? "\u00A0" : char}
        </motion.span>
    );
}

function Line({ text, startIndex, progress }) {
    const chars = text.split("");

    return (
        <span className="block">
            {chars.map((char, i) => {
                const index = startIndex + i;
                return (
                    <CharacterMap
                        key={`${text}-${i}`}
                        char={char}
                        index={index}
                        progress={progress}
                    />
                );
            })}
        </span>
    );
}

function CharacterMap({ char, index, progress }) {
    const totalSpread = 0.78;
    const step = 0.022;
    const start = Math.min(index * step, totalSpread);
    const end = Math.min(start + 0.16, 1);

    return (
        <Character
            char={char}
            progress={progress}
            start={start}
            end={end}
        />
    );
}

export default function ScrollCharacterHeading({
    line1,
    line2,
    className = "",
}) {
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        // animation jaldi start ho aur top 30% se pehle complete ho
        offset: ["start 92%", "start 30%"],
    });

    const line1Chars = useMemo(() => line1.split(""), [line1]);
    const line2Chars = useMemo(() => line2.split(""), [line2]);

    return (
        <h2
            ref={ref}
            className={`mt-6 text-3xl font-semibold leading-[1.05] tracking-[-0.04em] text-white sm:text-4xl md:text-5xl xl:text-6xl ${className}`}
        >
            <Line
                text={line1}
                startIndex={0}
                progress={scrollYProgress}
            />
            <Line
                text={line2}
                startIndex={line1Chars.length}
                progress={scrollYProgress}
            />
        </h2>
    );
}