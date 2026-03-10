import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        message: "",
    });

    const headingRef = useRef(null);
    const formRef = useRef(null);

    const { scrollYProgress: headingProgress } = useScroll({
        target: headingRef,
        offset: ["start 80%", "end 20%"],
    });

    const headingOpacity = useTransform(
        headingProgress,
        [0, 0.5, 1],
        [0.2, 1, 0.2]
    );
    const headingScale = useTransform(
        headingProgress,
        [0, 0.5, 1],
        [0.82, 1, 0.82]
    );
    const headingY = useTransform(
        headingProgress,
        [0, 0.5, 1],
        [80, 0, -80]
    );

    const { scrollYProgress: formProgress } = useScroll({
        target: formRef,
        offset: ["start 85%", "end 55%"],
    });

    const formOpacity = useTransform(formProgress, [0, 1], [0, 1]);
    const formScale = useTransform(formProgress, [0, 1], [0.94, 1]);
    const formY = useTransform(formProgress, [0, 1], [90, 0]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const whatsappNumber = "491234567890";

        const text = `Hello, I would like to inquire about a furniture project.

Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}
Message: ${formData.message}`;

        const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
        window.open(url, "_blank");
    };

    return (
        <section className="relative overflow-hidden bg-neutral-950 pt-18 pb-12 text-white md:py-18">
            {/* subtle grid */}
            <div className="pointer-events-none fixed inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[42px_42px]" />
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute left-[-10%] top-[10%] h-72 w-72 rounded-full bg-amber-500/10 blur-3xl" />
                <div className="absolute bottom-[-10%] right-[-5%] h-72 w-72 rounded-full bg-orange-400/10 blur-3xl" />
            </div>

            <div className="relative mx-auto grid max-w-6xl sm:gap-12 px-6 md:px-8 lg:grid-cols-2 lg:items-start">
                <motion.div
                    ref={headingRef}
                    style={{
                        opacity: headingOpacity,
                        scale: headingScale,
                        y: headingY,
                    }}
                    className="relative sm:mt-18"
                >
                    <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/4 px-4 py-2 text-[11px] uppercase tracking-[0.22em] text-white/60 backdrop-blur-md">
                        Contact Form
                    </div>

                    <h2 className="text-[clamp(2.7rem,5vw,4.8rem)] font-semibold leading-[0.95] tracking-[-0.05em]">
                        Tell us about
                        <span className="block">
                            your project
                        </span>
                    </h2>

                    <div className="mt-6 h-px w-24 bg-linear-to-r from-amber-400/80 via-white/30 to-transparent" />
                </motion.div>

                <motion.div
                    ref={formRef}
                    style={{
                        opacity: formOpacity,
                        scale: formScale,
                        y: formY,
                    }}
                    className="relative rounded-4xl border border-white/10 bg-white/4 p-6  backdrop-blur-xl md:p-8 z-40"
                >
                    <form onSubmit={handleSubmit} className="space-y-5">
                        <input
                            type="text"
                            name="name"
                            placeholder="Full Name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full rounded-2xl border border-white/10 bg-black/20 px-5 py-4 text-sm text-white placeholder:text-white/30 outline-none transition duration-300 focus:border-white/20 focus:bg-black/30"
                        />

                        <input
                            type="text"
                            name="phone"
                            placeholder="Phone Number"
                            required
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full rounded-2xl border border-white/10 bg-black/20 px-5 py-4 text-sm text-white placeholder:text-white/30 outline-none transition duration-300 focus:border-white/20 focus:bg-black/30"
                        />

                        <input
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full rounded-2xl border border-white/10 bg-black/20 px-5 py-4 text-sm text-white placeholder:text-white/30 outline-none transition duration-300 focus:border-white/20 focus:bg-black/30"
                        />

                        <textarea
                            name="message"
                            rows={6}
                            placeholder="Tell us about your project..."
                            required
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full resize-none rounded-2xl border border-white/10 bg-black/20 px-5 py-4 text-sm text-white placeholder:text-white/30 outline-none transition duration-300 focus:border-white/20 focus:bg-black/30"
                        />

                        <button
                            type="submit"
                            className="group flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-4 text-sm font-medium text-neutral-950 transition duration-300 hover:scale-[1.01]"
                        >
                            Submit
                            <ArrowUpRight className="h-4 w-4 transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
}