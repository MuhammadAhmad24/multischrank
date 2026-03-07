import React, { useRef } from "react";
import {
    motion,
    useScroll,
    useTransform,
    useSpring,
} from "framer-motion";
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
        y: 36,
        scale: 0.985,
        filter: "blur(8px)",
    },
    show: (i) => ({
        opacity: 1,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
        transition: {
            duration: 0.85,
            delay: i * 0.08,
            ease: [0.22, 1, 0.36, 1],
        },
    }),
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

function FeatureCard({ item, index, progress }) {
    const cardY = useSpring(
        useTransform(
            progress,
            [0, 1],
            index % 2 === 0 ? [26, -26] : [36, -36]
        ),
        {
            stiffness: 90,
            damping: 24,
            mass: 0.6,
        }
    );

    const contentY = useSpring(
        useTransform(
            progress,
            [0, 1],
            index % 2 === 0 ? [10, -10] : [14, -14]
        ),
        {
            stiffness: 90,
            damping: 24,
            mass: 0.6,
        }
    );

    return (
        <motion.div
            custom={index}
            variants={cardReveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.18 }}
            style={{ y: cardY }}
            whileHover={{
                y: -6,
                transition: { duration: 0.3, ease: "easeOut" },
            }}
            className="group relative overflow-hidden rounded-4xl border border-white/10 bg-white/5 p-6 backdrop-blur-2xl transition-all duration-500 hover:border-white/20 hover:shadow-[0_22px_60px_rgba(0,0,0,0.26)] md:p-8"
        >
            {/* soft amber top glow */}
            <div className="pointer-events-none absolute inset-0 rounded-4xl bg-[radial-gradient(circle_at_top_right,rgba(251,191,36,0.10),transparent_34%)] opacity-70" />

            {/* full card shine */}
            <motion.div
                animate={{ x: ["-160%", "220%"] }}
                transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "linear",
                    delay: index * 0.6,
                }}
                className="pointer-events-none absolute -top-[20%] left-0 h-[140%] w-[42%] -rotate-18 bg-linear-to-r from-transparent via-white/14 to-transparent blur-2xl"
            />

            <motion.div style={{ y: contentY }} className="relative z-10">
                <div className="flex items-start justify-between gap-4">
                    <motion.div
                        animate={{ y: [0, -3, 0] }}
                        transition={{
                            duration: 3.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: index * 0.2,
                        }}
                        className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5"
                    >
                        {item.icon}
                    </motion.div>

                    <div className="text-4xl font-semibold tracking-[-0.05em] text-white/10 md:text-5xl">
                        {item.number}
                    </div>
                </div>

                <div className="mt-6">
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
        </motion.div>
    );
}

export default function MultiSchrankMaterials() {
    const sectionRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });

    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 90,
        damping: 24,
        mass: 0.5,
    });

    const headingY = useSpring(
        useTransform(smoothProgress, [0, 1], [50, -50]),
        {
            stiffness: 80,
            damping: 22,
        }
    );

    const paragraphY = useSpring(
        useTransform(smoothProgress, [0, 1], [22, -22]),
        {
            stiffness: 80,
            damping: 22,
        }
    );

    const ctaY = useSpring(
        useTransform(smoothProgress, [0, 1], [16, -16]),
        {
            stiffness: 80,
            damping: 22,
        }
    );

    const orbLeftY = useSpring(
        useTransform(smoothProgress, [0, 1], [80, -80]),
        {
            stiffness: 60,
            damping: 20,
        }
    );

    const orbRightY = useSpring(
        useTransform(smoothProgress, [0, 1], [-70, 70]),
        {
            stiffness: 60,
            damping: 20,
        }
    );

    return (
        <section
            ref={sectionRef}
            className="relative overflow-hidden bg-neutral-950 py-12 text-white md:py-18"
        >
            {/* background */}
            <div className="pointer-events-none absolute inset-0">
                <motion.div
                    style={{ y: orbLeftY }}
                    animate={{ scale: [1, 1.04, 1] }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute left-[-10%] top-[8%] h-80 w-80 rounded-full bg-amber-500/10 blur-3xl"
                />
                <motion.div
                    style={{ y: orbRightY }}
                    animate={{ scale: [1, 1.03, 1] }}
                    transition={{
                        duration: 12,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute right-[-8%] bottom-[10%] h-96 w-96 rounded-full bg-white/6 blur-3xl"
                />
            </div>

            <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
                {/* heading */}
                <motion.div
                    variants={introFade}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3 }}
                    style={{ y: headingY }}
                    className="mx-auto max-w-4xl text-center"
                >
                    <motion.div
                        whileHover={{ y: -2, scale: 1.02 }}
                        className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.28em] text-white/65 backdrop-blur-xl"
                    >
                        <motion.span
                            animate={{
                                rotate: [0, 8, -6, 0],
                                scale: [1, 1.07, 1],
                            }}
                            transition={{
                                duration: 3.5,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        >
                            <Sparkles size={14} className="text-amber-400" />
                        </motion.span>
                        Materials & Craftsmanship
                    </motion.div>

                    <ScrollCharacterHeading
                        line1="Built around detail."
                        line2="Finished with intention."
                    />

                    <motion.p
                        style={{ y: paragraphY }}
                        className="mx-auto mt-6 max-w-3xl text-base leading-8 text-white/65 md:text-lg"
                    >
                        We focus on materials, precision, and functionality to create
                        furniture that feels refined in appearance, premium in quality,
                        and effortless in daily use.
                    </motion.p>

                    <motion.div
                        style={{ y: ctaY }}
                        className="mt-8 flex justify-center"
                    >
                        <motion.a
                            href="#"
                            target="_blank"
                            rel="noreferrer"
                            whileHover={{ y: -3, scale: 1.03 }}
                            whileTap={{ scale: 0.98 }}
                            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-green-400/25 bg-green-500/10 px-5 py-3.5 text-sm font-medium text-green-300 backdrop-blur-xl transition duration-300 hover:border-green-400/50 hover:bg-green-500/20 sm:px-6"
                        >
                            <motion.span
                                animate={{ x: ["-130%", "180%"] }}
                                transition={{
                                    duration: 3.2,
                                    repeat: Infinity,
                                    ease: "linear",
                                }}
                                className="pointer-events-none absolute -top-[30%] left-0 h-[160%] w-[34%] -rotate-18 bg-linear-to-r from-transparent via-white/18 to-transparent blur-xl"
                            />
                            <MessageCircle size={17} />
                            Discuss Your Project
                            <ArrowUpRight
                                size={16}
                                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                            />
                        </motion.a>
                    </motion.div>
                </motion.div>

                {/* cards */}
                <div className="mt-14 grid gap-5 sm:mt-16 md:grid-cols-2">
                    {features.map((item, index) => (
                        <FeatureCard
                            key={item.title}
                            item={item}
                            index={index}
                            progress={smoothProgress}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}