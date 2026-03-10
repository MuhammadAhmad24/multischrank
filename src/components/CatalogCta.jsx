import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, MessageCircle } from "lucide-react";

export default function CatalogCta() {
    return (
        <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20">
            <motion.div
                initial={{ opacity: 0, y: 35, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.9 }}
                className="rounded-[34px] border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/3 p-8 md:p-12"
            >
                <div className="max-w-3xl">
                    <p className="text-xs uppercase tracking-[0.22em] text-white/45">
                        Custom Furniture
                    </p>

                    <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">
                        Need a custom size or finish?
                    </h2>

                    <p className="mt-5 max-w-2xl text-sm leading-7 text-white/65 md:text-base">
                        We create tailored furniture solutions for residential and
                        commercial spaces with a focus on functionality, spatial balance,
                        and premium finishing.
                    </p>

                    <div className="mt-8 flex flex-wrap gap-4">
                        <button className="group inline-flex items-center gap-2 rounded-full bg-[#f5f1eb] px-6 py-3 text-sm font-medium text-[#111] transition hover:scale-[1.02]">
                            Get a Quote
                            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </button>

                        <button className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10">
                            <MessageCircle className="h-4 w-4" />
                            Talk to Us
                        </button>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}