import React from "react";
import { motion } from "framer-motion";
import ScrollCharacterHeading from "./ScrollCharacterHeading";
import {
    Sparkles,
    Layers3,
    Hammer,
    BadgeCheck,
    ScanSearch,
    ArrowUpRight,
    MessageCircle,
} from "lucide-react";

const introFade = {
    hidden: {
        opacity: 0,
        y: 30,
        filter: "blur(10px)",
    },
    show: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: {
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

const cardReveal = {
    hidden: {
        opacity: 0,
        y: 40,
        scale: 0.985,
        filter: "blur(10px)",
    },
    show: {
        opacity: 1,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
        transition: {
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

const features = [
    {
        number: "01",
        icon: <Layers3 size={18} className="text-amber-400" />,
        title: "Premium Materials",
        text: "Carefully selected finishes, elegant textures, and refined surfaces that bring warmth, quality, and long-lasting visual appeal.",
    },
    {
        number: "02",
        icon: <Hammer size={18} className="text-amber-400" />,
        title: "Precision Craftsmanship",
        text: "Every furniture concept is shaped with accuracy, balance, and detailing that reflects a premium standard from every angle.",
    },
    {
        number: "03",
        icon: <ScanSearch size={18} className="text-amber-400" />,
        title: "Intelligent Function",
        text: "Smart storage, practical layouts, and thoughtful usability combine to create interiors that feel effortless in everyday living.",
    },
    {
        number: "04",
        icon: <BadgeCheck size={18} className="text-amber-400" />,
        title: "Refined Finish",
        text: "A timeless visual language with clean lines, soft balance, and sophisticated finishing designed for modern spaces.",
    },
];

export default function MultiSchrankMaterials() {
    return (
        <section className="relative overflow-hidden bg-neutral-950 py-12 text-white md:py-18">
            {/* Background */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute left-[-10%] top-[8%] h-80 w-80 rounded-full bg-amber-500/10 blur-3xl" />
                <div className="absolute right-[-8%] bottom-[10%] h-96 w-96 rounded-full bg-white/6 blur-3xl" />
            </div>

            {/* Grid */}
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size[:42px_42px]" />

            <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
                {/* Top Heading */}
                <motion.div
                    variants={introFade}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3 }}
                    className="mx-auto max-w-4xl text-center"
                >
                    <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.28em] text-white/65 backdrop-blur-xl">
                        <Sparkles size={14} className="text-amber-400" />
                        Materials & Craftsmanship
                    </div>

                    <ScrollCharacterHeading
                        line1="Built around detail."
                        line2="Finished with intention."
                    />

                    <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-white/65 md:text-lg">
                        We focus on materials, precision, and functionality to create
                        furniture that feels refined in appearance, premium in quality,
                        and effortless in daily use.
                    </p>

                    <div className="mt-8 flex justify-center">
                        <a
                            href="https://wa.me/923001234567"
                            target="_blank"
                            rel="noreferrer"
                            className="group inline-flex items-center gap-2 rounded-full border border-green-400/25 bg-green-500/10 px-5 sm:px-6 py-3.5 text-sm font-medium text-green-300 backdrop-blur-xl transition duration-300 hover:scale-[1.03] hover:border-green-400/50 hover:bg-green-500/20"
                        >
                            <MessageCircle size={17} />
                            Discuss Your Project
                            <ArrowUpRight
                                size={16}
                                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                            />
                        </a>
                    </div>
                </motion.div>

                {/* Bottom Cards */}
                <div className="mt-8 sm:mt-16 grid gap-5 md:grid-cols-2">
                    {features.map((item, index) => (
                        <motion.div
                            key={item.title}
                            variants={cardReveal}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ delay: index * 0.06 }}
                            className="group relative overflow-hidden rounded-4xl border border-white/10 bg-white/5 p-6 backdrop-blur-2xl shadow-[0_18px_50px_rgba(0,0,0,0.25)] transition-all duration-500 hover:-translate-y-1 hover:border-white/20 hover:shadow-[0_35px_80px_rgba(0,0,0,0.55)] md:p-8">
                            <div className="pointer-events-none absolute inset-0 rounded-4xl bg-[radial-gradient(circle_at_top_right,rgba(251,191,36,0.10),transparent_28%)] opacity-0 transition duration-500 group-hover:opacity-100" />

                            <div className="relative flex items-start justify-between gap-4">
                                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
                                    {item.icon}
                                </div>

                                <div className="text-4xl font-semibold tracking-[-0.05em] text-white/10 md:text-5xl">
                                    {item.number}
                                </div>
                            </div>

                            <div className="relative mt-6">
                                <p className="text-xs uppercase tracking-[0.24em] text-white/40">
                                    Feature {item.number}
                                </p>

                                <h3 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-white">
                                    {item.title}
                                </h3>

                                <p className="mt-3 text-sm leading-7 text-white/60 md:text-base">
                                    {item.text}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}