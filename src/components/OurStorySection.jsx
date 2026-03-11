import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const panels = [
    {
        index: "01",
        title: "Vom Detail geleitet",
        text: "Jedes Projekt beginnt mit einer klaren gestalterischen Absicht, bei der Proportion, Material und Atmosphäre von Anfang an gemeinsam entwickelt werden.",
        meta: "Absicht / Atmosphäre / Material",
    },
    {
        index: "02",
        title: "Mit Balance gestaltet",
        text: "Wir entwerfen Räume, die ruhig und anspruchsvoll wirken, sodass Weichheit, Struktur und Funktion im gleichen Rhythmus zusammenfinden – ohne visuelle Unruhe.",
        meta: "Weichheit / Struktur / Rhythmus",
    },
    {
        index: "03",
        title: "Für lange Zeit gemacht",
        text: "Unser Ansatz wird von zeitloser Zurückhaltung, sorgfältiger Ausführung und Oberflächen geprägt, die auch über kurzlebige Trends hinaus relevant bleiben.",
        meta: "Zurückhaltung / Langlebigkeit / Präsenz",
    },
    {
        index: "04",
        title: "Von Klarheit geprägt",
        text: "Wir reduzieren das Unnötige und konzentrieren uns auf das Wesentliche, um Innenräume zu schaffen, die bewusst, harmonisch und visuell souverän wirken.",
        meta: "Klarheit / Präzision / Fokus",
    },
    {
        index: "05",
        title: "Durch Erfahrung definiert",
        text: "Für uns zählt nicht nur die Optik, sondern auch, wie sich ein Raum im Alltag anfühlt – natürlich in der Bewegung, angenehm im Gebrauch und stark im Charakter.",
        meta: "Erlebnis / Komfort / Identität",
    },
];

export default function OurStorySection() {
    const sectionRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end end"],
    });

    const x = useTransform(
        scrollYProgress,
        [0, 1],
        ["0%", "-80%"]
    );

    const labelOpacity = useTransform(
        scrollYProgress,
        [0, 0.06, 0.16],
        [0.35, 1, 1]
    );

    const lineScale = useTransform(scrollYProgress, [0, 1], [0.08, 1]);
    const bgMove = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);

    return (
        <section
            ref={sectionRef}
            className="relative bg-neutral-950 text-white"
        >
            <div className="relative h-[420vh]">
                <div className="sticky top-0 h-screen overflow-hidden">
                    {/* background */}
                    <div className="absolute inset-0 overflow-hidden">
                        <motion.div
                            style={{ x: bgMove }}
                            className="absolute inset-0 opacity-[0.08]"
                        >
                            <div className="h-full w-full bg-[linear-gradient(to_right,rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-size-[64px_64px]" />
                        </motion.div>

                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.06),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.04),transparent_26%)]" />

                        <motion.div
                            style={{ scaleX: lineScale }}
                            className="absolute left-0 top-0 h-px w-full origin-left bg-white/15"
                        />
                    </div>

                    {/* top heading */}
                    <div className="absolute left-0 right-0 top-14 z-20 mx-auto max-w-7xl px-6 pt-8 md:px-10 lg:px-16">
                        <motion.div style={{ opacity: labelOpacity }}>
                            <h2 className="max-w-4xl text-5xl font-medium leading-[0.9] tracking-[-0.06em] text-white sm:text-6xl md:text-7xl lg:text-[96px]">
                                Unsere Geschichte
                            </h2>
                        </motion.div>
                    </div>

                    {/* horizontal track */}
                    <motion.div
                        style={{ x }}
                        className="flex h-full w-[500%]"
                    >
                        {panels.map((panel, i) => (
                            <StoryPanel key={panel.index} panel={panel} i={i} />
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

function StoryPanel({ panel, i }) {
    return (
        <section className="relative flex h-screen w-screen shrink-0 items-center pt-14">
            <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-10 px-6 md:px-10 lg:grid-cols-[0.8fr_1.2fr] lg:px-16">
                {/* left side */}
                <div className="flex items-start lg:items-end">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.45 }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        className="text-white/14"
                    >
                        <span className="block text-[96px] font-medium leading-none tracking-[-0.08em] sm:text-[130px] md:text-[180px] lg:text-[220px]">
                            {panel.index}
                        </span>
                    </motion.div>
                </div>

                {/* right side */}
                <div className="flex items-center">
                    <div className="max-w-3xl">
                        <motion.h3
                            initial={{ opacity: 0, y: 70 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.45 }}
                            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                            className="text-4xl font-medium leading-[0.92] tracking-[-0.05em] text-white sm:text-5xl md:text-6xl lg:text-7xl"
                        >
                            {panel.title}
                        </motion.h3>

                        <motion.p
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.45 }}
                            transition={{
                                duration: 0.9,
                                delay: 0.08,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className="mt-6 max-w-2xl text-base leading-8 text-white/58 md:text-lg"
                        >
                            {panel.text}
                        </motion.p>

                        <motion.div
                            initial={{ scaleX: 0, opacity: 0 }}
                            whileInView={{ scaleX: 1, opacity: 1 }}
                            viewport={{ once: false, amount: 0.45 }}
                            transition={{ duration: 0.8, delay: 0.12 }}
                            className="mt-8 h-px w-full max-w-[320px] origin-left bg-white/15"
                        />

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: false, amount: 0.45 }}
                            transition={{ duration: 1, delay: 0.18 }}
                            className="mt-5 text-[11px] uppercase tracking-[0.24em] text-white/35"
                        >
                            {panel.meta}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}