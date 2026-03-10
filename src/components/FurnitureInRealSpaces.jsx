import React from "react";
import { motion } from "framer-motion";

const fadeUp = {
    hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
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

const stagger = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.12,
        },
    },
};

const defaultInspirations = [
    "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1200&auto=format&fit=crop",
];

export default function FurnitureInRealSpaces({
    inspirations = defaultInspirations,
}) {
    return (
        <section className="mx-auto max-w-7xl px-6 pb-16 md:px-10 md:pb-20">
            <motion.div
                variants={stagger}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.15 }}
                className="mb-10"
            >
                <motion.p
                    variants={fadeUp}
                    className="text-xs uppercase tracking-[0.22em] text-white/45"
                >
                    Inspiration
                </motion.p>

                <motion.h2
                    variants={fadeUp}
                    className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl"
                >
                    Furniture in real spaces
                </motion.h2>
            </motion.div>

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.15fr_0.85fr]">
                <motion.div
                    initial={{ opacity: 0, y: 35 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="overflow-hidden rounded-[28px] border border-white/10"
                >
                    <img
                        src={inspirations[0]}
                        alt="Inspiration 1"
                        className="h-full min-h-[460px] w-full object-cover"
                    />
                </motion.div>

                <div className="grid gap-6">
                    {inspirations.slice(1).map((src, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 35 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: i * 0.08 }}
                            className="overflow-hidden rounded-[28px] border border-white/10"
                        >
                            <img
                                src={src}
                                alt={`Inspiration ${i + 2}`}
                                className="h-[220px] w-full object-cover"
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}