import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const lines = [
    "We design spaces that feel calm, warm, and intentional.",
    "Every detail is crafted to bring clarity, balance, and premium presence.",
    "From concept to finish, our work transforms simple interiors into memorable experiences.",
    "Built with precision, shaped with taste, and made to feel timeless.",
];

export default function AboutHero() {
    const sectionRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end end"],
    });

    const { scrollYProgress: sectionProgress } = useScroll({
        target: sectionRef,
        offset: ["start 85%", "end 20%"],
    });

    const bgY = useTransform(sectionProgress, [0, 1], [60, -60]);

    const imageScale = useTransform(scrollYProgress, [0, 1], [0.8, 1.55]);
    const imageY = useTransform(scrollYProgress, [0, 1], [0, -40]);
    const imageRotate = useTransform(scrollYProgress, [0, 1], [0, -4]);
    const glowOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.25, 0.5, 0.8]);

    return (
        <section
            ref={sectionRef}
            className="relative bg-neutral-950 text-white"
        >

            {/* Background glow */}
            <motion.div
                style={{ y: bgY }}
                className="pointer-events-none fixed inset-0"
            >
                <div className="fixed left-[10%] top-[5%] h-72 w-72 rounded-full bg-amber-500/10 blur-3xl" />
                <div className="absolute right-[8%] bottom-[0%] h-80 w-80 rounded-full bg-white/10 blur-3xl" />
            </motion.div>

            {/* overall scroll height */}
            <div className="relative mx-auto grid min-h-[320vh] max-w-7xl grid-cols-1 gap-10 px-6 py-20 md:px-10 lg:grid-cols-2 lg:px-14">
                {/* LEFT / SCROLLING TEXT */}
                <div className="relative flex flex-col justify-center py-[10vh]">
                    <div className="mx-auto flex w-full max-w-2xl flex-col gap-24 md:gap-32">
                        <div className="space-y-6">
                            <motion.span
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.6 }}
                                transition={{ duration: 0.7 }}
                                className="inline-block rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] uppercase tracking-[0.28em] text-white/60"
                            >
                                About Us
                            </motion.span>

                            <motion.h1
                                initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
                                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                                viewport={{ once: true, amount: 0.6 }}
                                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                                className="max-w-3xl text-4xl font-medium leading-[0.95] tracking-[-0.04em] text-white sm:text-5xl md:text-6xl lg:text-7xl"
                            >
                                We create interiors that feel premium before they are even touched.
                            </motion.h1>
                        </div>

                        {lines.map((line, index) => (
                            <RevealLine key={index} text={line} />
                        ))}
                    </div>
                </div>

                {/* RIGHT / STICKY IMAGE */}


                <div className="relative h-full">
                    <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden">
                        <div className="relative flex h-full w-full items-center justify-center">
                            {/* soft glow */}
                            <motion.div
                                style={{ opacity: glowOpacity }}
                                className="absolute h-88 w-88 rounded-full bg-white/10 blur-3xl"
                            />

                            {/* image frame */}
                            <motion.div
                                style={{
                                    scale: imageScale,
                                    y: imageY,
                                    rotate: imageRotate,
                                }}
                                className="relative h-57.5 w-45 overflow-hidden rounded-[26px] border border-white/10 shadow-[0_20px_80px_rgba(0,0,0,0.45)] sm:h-65 sm:w-52.5 md:h-75 md:w-60"
                            >
                                <img
                                    src="/about-hero.jpeg"
                                    alt="About visual"
                                    className="h-full w-full object-cover"
                                />

                                {/* dark overlay for better text contrast */}
                                <div className="absolute inset-0 bg-linear-to-b from-black/10 via-transparent to-black/20" />
                            </motion.div>

                            {/* optional subtle ring */}
                            <motion.div
                                style={{ scale: imageScale }}
                                className="absolute h-65 w-52.5 rounded-4xl border border-white/8 sm:h-72.5 sm:w-60 md:h-82.5 md:w-67.5"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function RevealLine({ text }) {
    const lineRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: lineRef,
        offset: ["start 75%", "center center"],
    });

    const color = useTransform(
        scrollYProgress,
        [0, 0.35, 0.7, 1],
        [
            "rgba(255,255,255,0.22)",
            "rgba(255,255,255,0.35)",
            "rgba(255,255,255,0.78)",
            "rgba(255,255,255,1)",
        ]
    );

    const y = useTransform(scrollYProgress, [0, 1], [40, 0]);
    const opacity = useTransform(scrollYProgress, [0, 0.25, 1], [0.35, 0.65, 1]);

    // blur value
    const blurValue = useTransform(scrollYProgress, [0, 1], [8, 0]);

    // filter string
    const filter = useTransform(blurValue, (value) => `blur(${value}px)`);

    return (
        <div
            ref={lineRef}
            className="relative flex min-h-[58vh] items-center"
        >
            <motion.h2
                style={{
                    color,
                    y,
                    opacity,
                    filter,
                }}
                className="max-w-[18ch] text-3xl font-medium leading-[1.02] tracking-[-0.04em] sm:text-4xl md:text-5xl lg:text-6xl"
            >
                {text}
            </motion.h2>
        </div>
    );
}