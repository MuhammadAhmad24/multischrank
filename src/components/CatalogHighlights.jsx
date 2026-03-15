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
        title: "Maßgefertigt",
        text: "Perfekt abgestimmt auf Ihre Raummaße und funktionalen Anforderungen.",
    },
    {
        icon: BadgeCheck,
        title: "Hochwertige Materialien",
        text: "Ausgewählte Oberflächen und langlebige Qualitätsstandards in der Verarbeitung.",
    },
    {
        icon: Hammer,
        title: "Präzise Verarbeitung",
        text: "Klare Details und ein hoher Anspruch an Ausführung und Qualität.",
    },
    {
        icon: Sparkles,
        title: "Raffinierte Oberflächen",
        text: "Minimalistische und elegante Flächen für moderne Innenräume.",
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
            className="relative rounded-3xl border border-white/10 bg-white/4 p-6 will-change-transform"
        >
            <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-3xl">
                <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-orange-500/8 blur-2xl" />
            </div>

            <motion.div
                style={{ scale: iconScale }}
                className="relative z-10 mb-4 inline-flex rounded-2xl border border-white/10 bg-white/5 p-3"
            >
                <Icon className="h-5 w-5 text-orange-300" />
            </motion.div>

            <motion.div style={{ y: innerY }} className="relative z-10">
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
            className="relative overflow-hidden border-y border-white/10 bg-white/3 py-12 sm:py-16 md:py-20"
        >
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute left-[8%] top-[10%] h-56 w-56 rounded-full bg-orange-500/6 blur-3xl" />
                <div className="absolute right-[6%] bottom-[0%] h-64 w-64 rounded-full bg-orange-400/6 blur-3xl" />
            </div>

            <motion.div
                style={{ y: sectionY, opacity: sectionOpacity }}
                className="relative z-10 mx-auto max-w-7xl px-6 md:px-10"
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
                    <p className="text-xs uppercase tracking-[0.28em] text-orange-200/70">
                        Warum es hochwertig wirkt
                    </p>

                    <h2 className="mt-4 text-3xl font-semibold leading-tight text-white md:text-5xl">
                        Entwickelt für Balance,
                        <span className="block bg-linear-to-r from-orange-200 via-orange-300 to-orange-500 bg-clip-text text-transparent">
                            Präzision und langlebige Nutzung
                        </span>
                    </h2>

                    <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/60 md:text-base">
                        Jedes Detail ist bewusst gestaltet – von der Maßplanung
                        bis zur Qualität der Oberflächen – damit das Endergebnis
                        hochwertig wirkt und im Alltag perfekt funktioniert.
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