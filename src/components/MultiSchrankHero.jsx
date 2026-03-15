import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Sparkles } from "lucide-react";

const container = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.14,
            delayChildren: 0.12,
        },
    },
};

const fadeUp = {
    hidden: {
        opacity: 0,
        y: 40,
        filter: "blur(10px)",
    },
    show: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: {
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

const revealLine = {
    hidden: {
        opacity: 0,
        y: 70,
        filter: "blur(12px)",
    },
    show: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: {
            duration: 1.1,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

export default function MultiSchrankHero() {
    const sectionRef = useRef(null);
    const trackRef = useRef(null);

    const { scrollYProgress: heroProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end start"],
    });

    const { scrollYProgress: imageProgress } = useScroll({
        target: trackRef,
        offset: ["start end", "end start"],
    });

    // text slightly lifts on scroll
    const contentY = useTransform(heroProgress, [0, 0.35], [0, -60]);
    const contentOpacity = useTransform(heroProgress, [0, 0.35], [1, 0.82]);

    const imageWidth = useTransform(
        imageProgress,
        [0, 0.3, 0.62, 1],
        ["38vw", "38vw", "90vw", "90vw"]
    );

    const imageHeight = useTransform(
        imageProgress,
        [0, 0.3, 0.62, 1],
        ["34vh", "34vh", "72vh", "72vh"]
    );

    const imageRadius = useTransform(
        imageProgress,
        [0, 0.3, 0.62, 1],
        [28, 28, 16, 16]
    );

    const imageScale = useTransform(
        imageProgress,
        [0, 0.3, 0.62, 1],
        [0.96, 1, 1.03, 1.03]
    );

    const imageOpacity = useTransform(
        imageProgress,
        [0, 0.08, 0.2, 1],
        [0.55, 0.8, 1, 1]
    );

    const imageShadow = useTransform(
        imageProgress,
        [0, 0.62],
        [
            "0 20px 60px rgba(0,0,0,0.28)",
            "0 40px 140px rgba(0,0,0,0.48)",
        ]
    );

    return (
        <section
            ref={sectionRef}
            className="relative bg-[#0a0a0a] text-white"
        >
            {/* background */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_30%)]" />

                {/* purple glow */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(249,115,22,0.14),transparent_22%)]" />

                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_80%,rgba(255,255,255,0.05),transparent_20%)]" />

                <div className="absolute left-[-10%] top-[-8%] h-112 w-md rounded-full bg-orange-500/10 blur-3xl" />

                <div className="absolute right-[-8%] top-[10%] h-96 w-[24rem] rounded-full bg-white/8 blur-3xl" />
            </div>

            {/* first screen */}
            <div className="relative z-20 min-h-[78vh] sm:min-h-screen mb-5 md:mb-0">
                <motion.div
                    initial="hidden"
                    animate="show"
                    variants={container}
                    style={{ y: contentY, opacity: contentOpacity }}
                    className="mx-auto flex md:min-h-screen w-full max-w-7xl flex-col items-center px-5 pt-[20vh] text-center sm:px-6 md:pt-44 lg:px-10"
                >
                    <motion.div
                        variants={fadeUp}
                        className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[10px] uppercase tracking-[0.32em] text-white/65 backdrop-blur-xl sm:text-xs"
                    >
                        <Sparkles size={14} className="text-orange-400" />
                        Premium Innenräume • MultiSchrank
                    </motion.div>

                    <div className="mt-8 space-y-3">
                        <motion.h1
                            variants={revealLine}
                            className="mx-auto max-w-5xl text-4xl font-semibold leading-[0.95] tracking-[-0.05em] sm:text-6xl md:text-7xl xl:text-[6.4rem]"
                        >
                            Moderne Möbel
                        </motion.h1>

                        <motion.h1
                            variants={revealLine}
                            className="mx-auto max-w-5xl text-4xl font-semibold leading-[0.95] tracking-[-0.05em] sm:text-6xl md:text-7xl xl:text-[6.4rem]"
                        >
                            für{" "}
                            <span className="bg-linear-to-r from-white via-orange-300 to-orange-500 bg-clip-text text-transparent">
                                stilvolle Räume
                            </span>
                        </motion.h1>
                    </div>
                </motion.div>
            </div>

            {/* sticky growth track */}
            <div
                ref={trackRef}
                className="relative z-10 h-screen md:h-[200vh]"
            >
                <div className="sticky top-1/2 -translate-y-1/2">
                    <motion.div
                        style={{
                            width: imageWidth,
                            scale: imageScale,
                            opacity: imageOpacity,
                        }}
                        className="mx-auto"
                    >
                        <motion.div
                            style={{
                                borderRadius: imageRadius,
                            }}
                            className="relative overflow-hidden border border-white/10 bg-white/5 backdrop-blur-2xl"
                        >
                            <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.14),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(249,115,22,0.18),transparent_28%)]" />

                            <motion.img
                                src="hero-interior.jpg"
                                alt="Luxuriöses Interieur"
                                style={{ height: imageHeight }}
                                className="w-full object-cover"
                            />

                            <div className="absolute inset-0 bg-linear-to-t from-black/35 via-transparent to-transparent" />

                            <motion.div
                                animate={{ x: ["-120%", "120%"] }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    repeatDelay: 2,
                                    ease: "easeInOut",
                                }}
                                className="absolute inset-y-0 left-0 z-20 w-1/3 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.12),transparent)]"
                            />
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}