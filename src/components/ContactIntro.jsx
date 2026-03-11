import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";

export default function ContactIntro() {
    const sectionRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start center", "end center"],
    });

    const opacity = useTransform(
        scrollYProgress,
        [0, 0.25, 0.5, 0.75, 1],
        [0.1, 1, 1, 1, 0.1]
    );

    const y = useTransform(scrollYProgress, [0, 1], [60, -60]);

    const cards = [
        {
            icon: Phone,
            title: "Phone",
            text: "+49 XXX XXX XXX",
        },
        {
            icon: Mail,
            title: "Email",
            text: "info@multischrank.com",
        },
        {
            icon: MapPin,
            title: "Location",
            text: "Germany",
        },
    ];

    return (
        <section
            ref={sectionRef}
            className="relative overflow-hidden bg-neutral-950 pt-36 text-white md:pt-40"
        >
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute left-[8%] top-[10%] h-64 w-64 rounded-full bg-orange-500/8 blur-3xl" />
                <div className="absolute right-[6%] bottom-[0%] h-72 w-72 rounded-full bg-orange-400/6 blur-3xl" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.04),transparent_35%)]" />
            </div>

            <div className="relative z-10 mx-auto max-w-6xl px-6 md:px-8">
                <motion.div
                    style={{ opacity, y }}
                    className="mb-16 text-center md:mb-20"
                >
                    <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-semibold leading-[1.02] tracking-[-0.04em]">
                        Let’s start
                        <span className="block bg-linear-to-r from-orange-200 via-orange-300 to-orange-500 bg-clip-text text-transparent">
                            your furniture project
                        </span>
                    </h2>

                    <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-white/70">
                        Share your ideas, questions, or project details. Our team will help you move
                        forward with clarity.
                    </p>
                </motion.div>

                <div className="grid gap-5 md:grid-cols-3 md:gap-6">
                    {cards.map((card, index) => {
                        const Icon = card.icon;

                        return (
                            <motion.div
                                key={index}
                                whileHover={{ y: -4, scale: 1.01 }}
                                transition={{
                                    duration: 0.25,
                                    ease: [0.22, 1, 0.36, 1],
                                }}
                                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#0f0f10] p-8 transition-colors duration-300 hover:border-orange-300/20 hover:bg-[#141416]"
                            >
                                <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                    <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-orange-500/10 blur-2xl" />
                                </div>

                                <div className="relative z-10">
                                    <Icon className="mb-5 h-6 w-6 text-orange-300" />

                                    <h3 className="text-lg font-medium text-white/90">
                                        {card.title}
                                    </h3>

                                    <p className="mt-2 text-sm leading-6 text-white/60">
                                        {card.text}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}