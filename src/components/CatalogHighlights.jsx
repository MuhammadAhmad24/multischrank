import React, { useRef } from "react";
import {
    motion,
    useScroll,
    useTransform,
    useSpring,
} from "framer-motion";
import { Ruler, BadgeCheck, Hammer, Sparkles } from "lucide-react";

const highlights = [
    {
        icon: Ruler,
        title: "Made to Measure",
        text: "Built around your room dimensions and layout needs.",
    },
    {
        icon: BadgeCheck,
        title: "Premium Materials",
        text: "Selected finishes and durable construction standards.",
    },
    {
        icon: Hammer,
        title: "Precision Build",
        text: "Clean detailing with a strong focus on execution quality.",
    },
    {
        icon: Sparkles,
        title: "Refined Finish",
        text: "Minimal, elegant surfaces designed for modern interiors.",
    },
];

function HighlightCard({ item, index, progress }) {
    const Icon = item.icon;

    const start = 0.16 + index * 0.1;
    const end = start + 0.18;

    const opacity = useTransform(progress, [start, end], [0, 1]);
    const y = useTransform(progress, [start, end], [70, 0]);
    const scale = useTransform(progress, [start, end], [0.94, 1]);
    const rotateX = useTransform(progress, [start, end], [10, 0]);
    const blurValue = useTransform(progress, [start, end], [10, 0]);
    const iconScale = useTransform(progress, [start, end], [0.8, 1]);
    const innerY = useTransform(progress, [start, end], [18, 0]);

    return (
        <motion.div
            style={{
                opacity,
                y,
                scale,
                rotateX,
                filter: useTransform(blurValue, (v) => `blur(${v}px)`),
                transformStyle: "preserve-3d",
            }}
            className="rounded-3xl border border-white/10 bg-white/4 p-6 will-change-transform"
        >
            <motion.div
                style={{ scale: iconScale }}
                className="mb-4 inline-flex rounded-2xl border border-white/10 bg-white/5 p-3"
            >
                <Icon className="h-5 w-5 text-white" />
            </motion.div>

            <motion.div style={{ y: innerY }}>
                <h3 className="text-lg font-medium text-white">{item.title}</h3>

                <p className="mt-3 text-sm leading-7 text-white/60">
                    {item.text}
                </p>
            </motion.div>
        </motion.div>
    );
}

export default function CatalogHighlights() {
    const sectionRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start 85%", "end 20%"],
    });

    const progress = useSpring(scrollYProgress, {
        stiffness: 110,
        damping: 26,
        mass: 0.4,
    });

    const headingOpacity = useTransform(progress, [0, 0.22], [0, 1]);
    const headingY = useTransform(progress, [0, 0.22], [50, 0]);
    const headingBlur = useTransform(progress, [0, 0.22], [12, 0]);

    const sectionY = useTransform(progress, [0, 1], [40, -20]);
    const sectionOpacity = useTransform(progress, [0, 0.18, 1], [0.4, 1, 1]);

    return (
        <section
            ref={sectionRef}
            className="border-y border-white/10 bg-white/3 py-16 md:py-20"
        >
            <motion.div
                style={{ y: sectionY, opacity: sectionOpacity }}
                className="mx-auto max-w-7xl px-6 md:px-10"
            >
                <motion.div
                    style={{
                        opacity: headingOpacity,
                        y: headingY,
                        filter: useTransform(
                            headingBlur,
                            (v) => `blur(${v}px)`
                        ),
                    }}
                    className="mx-auto mb-10 max-w-3xl text-center md:mb-14"
                >
                    <p className="text-xs uppercase tracking-[0.28em] text-white/45">
                        Why it feels premium
                    </p>

                    <h2 className="mt-4 text-3xl font-semibold leading-tight text-white md:text-5xl">
                        Crafted for balance,
                        <span className="block text-white/65">
                            precision, and lasting use
                        </span>
                    </h2>

                    <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/60 md:text-base">
                        Every detail is shaped to feel intentional, from dimension
                        planning to finish quality, so the final result looks refined
                        and works beautifully in daily life.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
                    {highlights.map((item, i) => (
                        <HighlightCard
                            key={i}
                            item={item}
                            index={i}
                            progress={progress}
                        />
                    ))}
                </div>
            </motion.div>
        </section>
    );
}