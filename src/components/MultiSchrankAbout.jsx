import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Sparkles, BadgeCheck, Ruler, Layers3 } from "lucide-react";

const features = [
    {
        icon: <BadgeCheck size={18} className="text-orange-400" />,
        title: "Hochwertige Materialien",
        text: "Sorgfältig ausgewählte Oberflächen und Materialien, die Wärme, Eleganz und langlebige Qualität vermitteln.",
    },
    {
        icon: <Ruler size={18} className="text-orange-400" />,
        title: "Individuelles Design",
        text: "Möbelkonzepte, die auf reale Räume, praktische Anforderungen und einen anspruchsvollen modernen Lebensstil abgestimmt sind.",
    },
    {
        icon: <Layers3 size={18} className="text-orange-400" />,
        title: "Zeitlose Ästhetik",
        text: "Klare Linien, ausgewogene Proportionen und raffinierte Details, die auch nach Jahren modern bleiben.",
    },
];

function AnimatedCard({ item, progress, range }) {
    const [start, end] = range;

    const opacity = useTransform(progress, [start, end], [0, 1]);
    const y = useTransform(progress, [start, end], [90, 0]);
    const scale = useTransform(progress, [start, end], [0.9, 1]);
    const rotateX = useTransform(progress, [start, end], [12, 0]);
    const filter = useTransform(
        progress,
        [start, end],
        ["blur(10px)", "blur(0px)"]
    );

    return (
        <motion.div
            style={{
                opacity,
                y,
                scale,
                rotateX,
                filter,
                transformPerspective: 1200,
            }}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-xl transition-all duration-500"
        >
            <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(249,115,22,0.16),transparent_60%)]" />
            </div>

            <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-orange-500/8 blur-2xl opacity-0 transition duration-500 group-hover:opacity-100" />

            <div className="relative">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                    {item.icon}
                </div>

                <h3 className="mt-6 text-xl font-semibold text-white">
                    {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-white/60">
                    {item.text}
                </p>
            </div>
        </motion.div>
    );
}

export default function MultiSchrankAbout() {
    const sectionRef = useRef(null);
    const cardsRef = useRef(null);

    const { scrollYProgress: sectionProgress } = useScroll({
        target: sectionRef,
        offset: ["start 85%", "end 20%"],
    });

    const { scrollYProgress: cardsProgress } = useScroll({
        target: cardsRef,
        offset: ["start 90%", "end 20%"],
    });

    const bgY = useTransform(sectionProgress, [0, 1], [60, -60]);
    const sectionOpacity = useTransform(
        sectionProgress,
        [0, 0.12, 0.9, 1],
        [0.45, 1, 1, 0.75]
    );

    const headingY = useTransform(sectionProgress, [0, 0.2], [40, 0]);
    const headingOpacity = useTransform(sectionProgress, [0, 0.18], [0, 1]);
    const headingFilter = useTransform(
        sectionProgress,
        [0, 0.18],
        ["blur(10px)", "blur(0px)"]
    );

    const ranges = [
        [0.0, 0.22],
        [0.18, 0.4],
        [0.36, 0.58],
    ];

    return (
        <section
            ref={sectionRef}
            id="about"
            className="relative -mt-20 overflow-hidden bg-neutral-950 pb-12 text-white sm:pb-18"
        >
            {/* Background glow */}
            <motion.div
                style={{ y: bgY }}
                className="pointer-events-none absolute inset-0"
            >
                <div className="absolute left-[10%] top-[10%] h-72 w-72 rounded-full bg-orange-500/10 blur-3xl" />
                <div className="absolute right-[8%] bottom-[0%] h-80 w-80 rounded-full bg-orange-300/6 blur-3xl" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(249,115,22,0.08),transparent_26%)]" />
            </motion.div>

            <motion.div
                style={{ opacity: sectionOpacity }}
                className="relative mx-auto max-w-7xl px-6 lg:px-10"
            >
                {/* Heading */}
                <motion.div
                    style={{
                        y: headingY,
                        opacity: headingOpacity,
                        filter: headingFilter,
                    }}
                    className="mx-auto max-w-4xl text-center"
                >
                    <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.28em] text-orange-200 backdrop-blur-xl">
                        <Sparkles size={14} className="text-orange-400" />
                        Über MultiSchrank
                    </div>

                    <h2 className="mt-6 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-6xl">
                        Entwickelt, um{" "}
                        <span className="bg-linear-to-r from-orange-200 via-orange-300 to-orange-500 bg-clip-text text-transparent">
                            Schönheit und Funktion
                        </span>{" "}
                        in den Alltag zu bringen
                    </h2>

                    <p className="mx-auto mt-6 max-w-3xl text-lg text-white/60">
                        MultiSchrank entwickelt hochwertige Möbel- und
                        Innenraumlösungen, die moderne Ästhetik, durchdachte
                        Funktionalität und zeitlose Handwerkskunst miteinander verbinden.
                    </p>
                </motion.div>

                {/* Cards */}
                <div
                    ref={cardsRef}
                    className="mt-16 grid gap-6 md:grid-cols-3"
                >
                    {features.map((item, index) => (
                        <AnimatedCard
                            key={item.title}
                            item={item}
                            progress={cardsProgress}
                            range={ranges[index]}
                        />
                    ))}
                </div>
            </motion.div>
        </section>
    );
}