import React, { useRef } from "react";
import {
    motion,
    useScroll,
    useTransform,
    useSpring,
} from "framer-motion";
import {
    Gem,
    ShieldCheck,
    Sparkles,
    Compass,
} from "lucide-react";

const values = [
    {
        icon: Gem,
        number: "01",
        title: "Materialqualität",
        text: "Wir wählen Oberflächen, Texturen und Konstruktionsmaterialien mit Blick auf langfristige Haltbarkeit und visuelle Balance.",
    },
    {
        icon: ShieldCheck,
        number: "02",
        title: "Für Langlebigkeit gebaut",
        text: "Jedes Detail entsteht mit Präzision, Stabilität und disziplinierter Ausführung, damit das Endergebnis über lange Zeit verlässlich wirkt.",
    },
    {
        icon: Sparkles,
        number: "03",
        title: "Ruhige Ästhetik",
        text: "Unser Ansatz vermeidet visuelle Unruhe. Im Mittelpunkt stehen Proportion, Wärme und eine raffinierte Schlichtheit, die zeitlos statt kurzfristig wirkt.",
    },
    {
        icon: Compass,
        number: "04",
        title: "Kundenzentriertes Denken",
        text: "Jedes Projekt orientiert sich an echten Lebensgewohnheiten und nicht nur an Trends, damit jeder Raum persönlich und funktional wirkt.",
    },
];

function ScrollRevealText({
    text,
    progress,
    className = "",
    start = 0,
    end = 1,
}) {
    const chars = text.split("");

    return (
        <span className={className}>
            {chars.map((char, index) => {
                const charStart = start + (index / chars.length) * (end - start);
                const charEnd =
                    start + ((index + 1) / chars.length) * (end - start);

                const opacity = useTransform(
                    progress,
                    [charStart, charEnd],
                    [0.1, 1]
                );

                return (
                    <motion.span
                        key={`${char}-${index}`}
                        style={{ opacity }}
                        className="inline-block"
                    >
                        {char === " " ? "\u00A0" : char}
                    </motion.span>
                );
            })}
        </span>
    );
}

function ValueCard({ item, index, progress }) {
    const Icon = item.icon;
    const base = index * 0.08;

    const yRaw = useTransform(
        progress,
        [0.04 + base, 0.24 + base, 0.55 + base],
        [80, 0, -10]
    );

    const opacity = useTransform(
        progress,
        [0.02 + base, 0.14 + base, 0.24 + base],
        [0, 0.65, 1]
    );

    const scaleRaw = useTransform(
        progress,
        [0.04 + base, 0.24 + base],
        [0.94, 1]
    );

    const blurValue = useTransform(
        progress,
        [0.03 + base, 0.2 + base],
        [10, 0]
    );

    const filter = useTransform(blurValue, (v) => `blur(${v}px)`);

    const y = useSpring(yRaw, {
        stiffness: 110,
        damping: 22,
        mass: 0.75,
    });

    const scale = useSpring(scaleRaw, {
        stiffness: 110,
        damping: 20,
        mass: 0.75,
    });

    return (
        <motion.div
            style={{
                y,
                opacity,
                scale,
                filter,
            }}
            className="relative min-h-80 overflow-hidden rounded-[28px] border border-white/10 bg-white/4 p-6 backdrop-blur-xl md:p-7"
        >
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute -left-10 top-0 h-28 w-28 rounded-full bg-orange-500/10 blur-2xl" />
                <div className="absolute bottom-0 right-0 h-24 w-24 rounded-full bg-white/6 blur-2xl" />
            </div>

            <div className="absolute right-5 top-5 text-5xl font-semibold tracking-[-0.08em] text-white/10">
                {item.number}
            </div>

            <div className="relative z-10 flex h-full flex-col">
                <div className="flex items-center justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/6">
                        <Icon className="h-6 w-6 text-orange-300" />
                    </div>
                </div>

                <div className="mt-16">
                    <h3 className="text-2xl font-medium tracking-[-0.04em]">
                        {item.title}
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-white/62 md:text-[15px]">
                        {item.text}
                    </p>
                </div>

                <div className="mt-auto pt-10">
                    <div className="h-px w-full bg-linear-to-r from-orange-200/30 to-transparent" />
                </div>
            </div>
        </motion.div>
    );
}

export default function OurValuesSection() {
    const sectionRef = useRef(null);
    const headingRef = useRef(null);
    const cardsRef = useRef(null);

    const { scrollYProgress: sectionProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });

    const { scrollYProgress: headingProgress } = useScroll({
        target: headingRef,
        offset: ["start 0.8", "end 0.35"],
    });

    const { scrollYProgress: cardsProgress } = useScroll({
        target: cardsRef,
        offset: ["start 0.92", "end 0.45"],
    });

    const headingY = useTransform(headingProgress, [0, 1], [40, -10]);
    const introOpacity = useTransform(headingProgress, [0, 0.18], [0.25, 1]);

    const lineScale = useTransform(cardsProgress, [0, 0.22], [0.6, 1]);
    const lineOpacity = useTransform(cardsProgress, [0, 0.18], [0.2, 1]);

    return (
        <section
            ref={sectionRef}
            className="relative overflow-hidden bg-[#0f0f0d] py-28 text-[#f5f1eb] md:pt-36 md:pb-42"
        >
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute left-[-10%] top-[10%] h-72 w-72 rounded-full bg-orange-500/10 blur-3xl" />
                <div className="absolute bottom-[5%] right-[-5%] h-80 w-80 rounded-full bg-white/5 blur-3xl" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.06),transparent_35%)]" />
            </div>

            <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10">
                <div ref={headingRef}>
                    <motion.div
                        style={{ y: headingY, opacity: introOpacity }}
                        className="pt-2 md:pt-4"
                    >
                        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] uppercase tracking-[0.28em] text-white/65 backdrop-blur-sm">
                            <span className="h-1.5 w-1.5 rounded-full bg-orange-400" />
                            Unsere Werte
                        </div>

                        <h2 className="text-3xl font-medium leading-[0.95] tracking-[-0.04em] sm:text-5xl md:text-6xl xl:text-7xl">
                            <ScrollRevealText
                                text="Prinzipien, die"
                                progress={headingProgress}
                                start={0.05}
                                end={0.42}
                            />

                            <span className="block text-white">
                                <ScrollRevealText
                                    text="jede unserer Entscheidungen prägen"
                                    progress={headingProgress}
                                    start={0.48}
                                    end={0.92}
                                />
                            </span>
                        </h2>
                    </motion.div>
                </div>

                <motion.div
                    style={{ scaleX: lineScale, opacity: lineOpacity }}
                    className="mt-14 h-px origin-left bg-linear-to-r from-orange-200/40 via-white/10 to-transparent"
                />

                <div
                    ref={cardsRef}
                    className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4"
                >
                    {values.map((item, index) => (
                        <ValueCard
                            key={item.title}
                            item={item}
                            index={index}
                            progress={cardsProgress}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}