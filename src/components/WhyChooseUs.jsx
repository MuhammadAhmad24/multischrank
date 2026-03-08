import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, BadgeCheck, Layers3, Sparkles } from "lucide-react";

const reasons = [
    {
        number: "01",
        icon: Sparkles,
        title: "Detail Driven Approach",
        text: "Every surface, edge, and proportion is considered carefully so the final result feels refined from every angle.",
    },
    {
        number: "02",
        icon: Layers3,
        title: "Premium Material Selection",
        text: "We work with materials that bring warmth, durability, and a stronger visual presence to the space.",
    },
    {
        number: "03",
        icon: BadgeCheck,
        title: "Built Around Real Spaces",
        text: "Instead of generic solutions, each piece is shaped around actual dimensions, use, and flow of the interior.",
    },
    {
        number: "04",
        icon: ArrowUpRight,
        title: "Modern Yet Timeless",
        text: "The design language stays clean and contemporary while remaining balanced enough to feel relevant for years.",
    },
];
function WhyChooseUsCard({ item, index, progress, total }) {
    const step = 1 / total;
    const start = index * step;
    const enter = start + step * 0.22;

    const stackGap = 22; // jitna upar old cards stack hongi
    const scaleStep = 0.035;

    const input = [0, start, enter];
    const yOutput = ["120%", "120%", "0%"];
    const scaleOutput = [1, 1, 1];

    // jab next cards aayengi to current card peeche/upar stack hoti jayegi
    for (let j = index + 1; j < total; j++) {
        const nextStart = j * step;
        const nextEnter = nextStart + step * 0.22;
        const level = j - index;

        input.push(nextStart, nextEnter);
        yOutput.push(`${-(level - 1) * stackGap}px`, `${-level * stackGap}px`);
        scaleOutput.push(1 - (level - 1) * scaleStep, 1 - level * scaleStep);
    }

    const y = useTransform(progress, input, yOutput);
    const scale = useTransform(progress, input, scaleOutput);
    const opacity = useTransform(progress, [0, start, enter], [0, 0, 1]);

    const Icon = item.icon;

    return (
        <motion.div
            style={{
                y,
                scale,
                opacity,
                zIndex: index + 1,
                pointerEvents: "none",
            }}
            className="absolute inset-x-0 bottom-10 sm:bottom-0 mx-auto flex h-[58vh] w-full items-end"
        >
            <div className="grid h-full w-full grid-cols-1 overflow-hidden rounded-4xl border border-white/10 bg-linear-to-b from-[#161616] to-[#0c0c0c] shadow-[0_30px_120px_rgba(0,0,0,0.6)] md:grid-cols-[0.95fr_1.05fr]">
                <div className="relative flex flex-col justify-between border-b border-white/10 p-6 sm:p-8 md:border-b-0 md:border-r md:p-10 lg:p-12">
                    <div className="flex items-start justify-between">
                        <span className="text-[0.7rem] font-medium uppercase tracking-[0.35em] text-white/45">
                            Why Choose Us
                        </span>

                        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/80">
                            <Icon size={18} strokeWidth={1.8} />
                        </div>
                    </div>

                    <div>
                        <div className="mb-5 text-sm tracking-[0.3em] text-white/30">
                            {item.number}
                        </div>

                        <h3 className="max-w-md text-3xl font-semibold leading-[1.05] text-white sm:text-4xl lg:text-5xl">
                            {item.title}
                        </h3>
                    </div>
                </div>

                <div className="flex flex-col justify-between p-6 sm:p-8 md:p-10 lg:p-12">
                    <p className="max-w-xl text-base leading-8 text-white/68 sm:text-lg">
                        {item.text}
                    </p>

                    <div className="mt-8 grid grid-cols-2 gap-4 sm:gap-5">
                        <div className="rounded-2xl border border-white/10 bg-white/3 p-4 sm:p-5">
                            <div className="mb-2 text-xs uppercase tracking-[0.25em] text-white/35">
                                Quality
                            </div>
                            <div className="text-sm leading-7 text-white/70">
                                Controlled execution with careful finishing and long-term durability in mind.
                            </div>
                        </div>

                        <div className="rounded-2xl border border-white/10 bg-white/3 p-4 sm:p-5">
                            <div className="mb-2 text-xs uppercase tracking-[0.25em] text-white/35">
                                Experience
                            </div>
                            <div className="text-sm leading-7 text-white/70">
                                Spaces are designed to feel visually calm, functional, and naturally premium.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default function WhyChooseUsStacked() {
    const sectionRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end end"],
    });

    const headingY = useTransform(scrollYProgress, [0, 1], [0, -40]);
    const headingOpacity = useTransform(scrollYProgress, [0, 0.14, 0.22], [1, 1, 0.45]);
    const progressScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

    return (
        <section
            ref={sectionRef}
            className="relative h-[420vh] bg-[#070707] text-white pb-12 md:pb-20"
        >
            <div className="sticky top-0 h-screen overflow-hidden">
                {/* background glow */}
                <div className="pointer-events-none absolute inset-0">
                    <div className="absolute left-1/2 top-[14%] h-96 w-[24rem] -translate-x-1/2 rounded-full bg-white/4 blur-[120px]" />
                    <div className="absolute right-[8%] top-[42%] h-80 w-[20rem] rounded-full bg-white/3 blur-[120px]" />
                </div>

                {/* heading */}
                <motion.div
                    style={{ y: headingY, opacity: headingOpacity }}
                    className="absolute left-0 right-0 top-0 z-30 mx-auto w-full max-w-6xl px-5 pt-16 sm:px-6 md:px-8 lg:px-10 lg:pt-20"
                >
                    <div className="max-w-2xl">
                        <span className="inline-block text-[0.72rem] uppercase tracking-[0.35em] text-white/40">
                            Why Choose Us
                        </span>

                        <h2 className="mt-4 text-4xl font-semibold leading-[0.95] text-white/85 sm:text-5xl md:text-6xl lg:text-7xl">
                            Reasons that
                            <span className="block">
                                feel clear in every detail
                            </span>
                        </h2>
                    </div>
                </motion.div>

                {/* cards area */}
                <div className="relative mx-auto h-screen w-full max-w-6xl overflow-hidden px-5 pt-56 pb-24 sm:px-6 md:px-8 lg:px-10 lg:pt-64">
                    {reasons.map((item, index) => (
                        <WhyChooseUsCard
                            key={item.number}
                            item={item}
                            index={index}
                            progress={scrollYProgress}
                            total={reasons.length}
                        />
                    ))}
                </div>

                {/* progress line */}
                <div className="absolute bottom-8 left-1/2 z-40 h-0.5 w-[min(92vw,420px)] -translate-x-1/2 overflow-hidden rounded-full bg-white/10">
                    <motion.div
                        style={{
                            scaleX: progressScale,
                            transformOrigin: "left",
                        }}
                        className="h-full w-full rounded-full bg-white/80"
                    />
                </div>
            </div>
        </section>
    );
}