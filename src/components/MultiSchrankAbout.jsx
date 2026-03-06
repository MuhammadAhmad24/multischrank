import React from "react";
import { motion } from "framer-motion";
import { Sparkles, BadgeCheck, Ruler, Layers3 } from "lucide-react";

const container = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.14,
            delayChildren: 0.1,
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
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

const cardReveal = {
    hidden: {
        opacity: 0,
        y: 24,
        filter: "blur(8px)",
    },
    show: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: {
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

const features = [
    {
        icon: <BadgeCheck size={18} className="text-amber-400" />,
        title: "Premium Materials",
        text: "Carefully selected finishes and surfaces that bring warmth, elegance, and lasting quality.",
    },
    {
        icon: <Ruler size={18} className="text-amber-400" />,
        title: "Tailored Design",
        text: "Furniture concepts planned around real spaces, practical needs, and refined modern lifestyles.",
    },
    {
        icon: <Layers3 size={18} className="text-amber-400" />,
        title: "Timeless Aesthetics",
        text: "Clean lines, balanced proportions, and sophisticated detailing that remain relevant for years.",
    },
];

export default function MultiSchrankAbout() {
    return (
        <section
            id="about"
            className="relative overflow-hidden bg-neutral-950 py-12 text-white md:py-18"
        >
            {/* Background */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute left-[10%] top-[10%] h-72 w-72 rounded-full bg-amber-500/10 blur-3xl" />
                <div className="absolute right-[8%] bottom-[0%] h-80 w-80 rounded-full bg-white/6 blur-3xl" />
            </div>

            {/* Grid */}
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size[:42px_42px]" />

            <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-10"
            >
                {/* Center Intro */}
                <div className="mx-auto max-w-4xl text-center">
                    <motion.div
                        variants={fadeUp}
                        className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.28em] text-white/65 backdrop-blur-xl"
                    >
                        <Sparkles size={14} className="text-amber-400" />
                        About MultiSchrank
                    </motion.div>

                    <motion.h2
                        variants={fadeUp}
                        className="mt-6 text-3xl font-semibold leading-[1.05] tracking-[-0.04em] text-white sm:text-4xl md:text-5xl xl:text-6xl"
                    >
                        Crafted to bring{" "}
                        <span className="bg-linear-to-r from-white via-white to-amber-300 bg-clip-text text-transparent">
                            beauty and function
                        </span>{" "}
                        into everyday spaces.
                    </motion.h2>

                    <motion.p
                        variants={fadeUp}
                        className="mx-auto mt-6 max-w-3xl text-base leading-8 text-white/65 md:text-lg"
                    >
                        MultiSchrank creates premium furniture and interior solutions
                        that combine modern aesthetics, thoughtful functionality, and
                        timeless craftsmanship. Every concept is designed to elevate
                        contemporary homes with a balance of elegance, comfort, and
                        intelligent use of space.
                    </motion.p>
                </div>

                {/* Feature Cards */}
                <div className="mt-8 sm:mt-14 grid gap-5 md:grid-cols-3">
                    {features.map((item) => (
                        <motion.div
                            key={item.title}
                            variants={cardReveal}
                            className="group relative overflow-hidden rounded-4xl border border-white/10 bg-white/5 p-6 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.25)] transition-all duration-500 hover:-translate-y-1 hover:border-white/20 hover:shadow-[0_35px_80px_rgba(0,0,0,0.55)]"
                        >

                            {/* Hover Glow */}
                            <div className="pointer-events-none absolute inset-0 rounded-4xl bg-[radial-gradient(circle_at_top_right,rgba(251,191,36,0.10),transparent_28%)] opacity-0 transition duration-500 group-hover:opacity-100" />

                            <div className="relative">
                                <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
                                    {item.icon}
                                </div>

                                <h3 className="mt-5 text-xl font-semibold text-white">
                                    {item.title}
                                </h3>

                                <p className="mt-3 text-sm leading-7 text-white/60">
                                    {item.text}
                                </p>
                            </div>

                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}