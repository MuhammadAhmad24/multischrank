import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "../LanguageContext";

const content = {
    de: {
        badge: "Kontaktformular",
        title1: "Erzählen Sie uns von",
        titleHighlight: "Ihrem Projekt",
        placeholders: {
            name: "Vollständiger Name",
            phone: "Telefonnummer",
            email: "E-Mail-Adresse",
            message: "Erzählen Sie uns mehr über Ihr Projekt...",
        },
        button: "Absenden",
        whatsappText: (data) => `Hallo, ich möchte mich über ein Möbelprojekt informieren.

Name: ${data.name}
Telefon: ${data.phone}
E-Mail: ${data.email}
Nachricht: ${data.message}`,
    },
    en: {
        badge: "Contact form",
        title1: "Tell us about",
        titleHighlight: "your project",
        placeholders: {
            name: "Full name",
            phone: "Phone number",
            email: "Email address",
            message: "Tell us more about your project...",
        },
        button: "Send message",
        whatsappText: (data) => `Hello, I would like to inquire about a furniture project.

Name: ${data.name}
Phone: ${data.phone}
Email: ${data.email}
Message: ${data.message}`,
    },
};

export default function ContactForm() {
    const { lang } = useLanguage();
    const t = content[lang];

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

        const whatsappNumber = "4915563440433";
        const text = t.whatsappText(formData);

        const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
        window.open(url, "_blank");
    };

    return (
        <section className="relative overflow-hidden bg-neutral-950 py-12 text-white md:py-18">
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[42px_42px]" />

            <div className="pointer-events-none absolute inset-0">
                <div className="absolute left-[-10%] top-[10%] h-72 w-72 rounded-full bg-orange-500/10 blur-3xl" />
                <div className="absolute bottom-[-10%] right-[-5%] h-72 w-72 rounded-full bg-orange-400/10 blur-3xl" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(249,115,22,0.08),transparent_26%)]" />
            </div>

            <div className="relative mx-auto grid max-w-6xl px-6 sm:gap-12 md:px-8 lg:grid-cols-2 lg:items-start z-50">
                <motion.div
                    ref={headingRef}
                    style={{
                        opacity: headingOpacity,
                        scale: headingScale,
                        y: headingY,
                    }}
                    className="relative sm:mt-18"
                >
                    <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/4 px-4 py-2 text-[11px] uppercase tracking-[0.22em] text-orange-200 backdrop-blur-md">
                        {t.badge}
                    </div>

                    <h2 className="text-[clamp(2.7rem,5vw,4.8rem)] font-semibold tracking-[-0.05em]">
                        {t.title1}
                        <span className="block bg-linear-to-r from-orange-200 via-orange-300 to-orange-500 bg-clip-text text-transparent">
                            {t.titleHighlight}
                        </span>
                    </h2>

                    <div className="mt-6 h-px w-24 bg-linear-to-r from-orange-400/80 via-white/30 to-transparent" />
                </motion.div>

                <motion.div
                    ref={formRef}
                    style={{
                        opacity: formOpacity,
                        scale: formScale,
                        y: formY,
                    }}
                    className="relative z-60 rounded-4xl border border-white/10 bg-white/4 p-6 backdrop-blur-xl md:p-8"
                >
                    <form onSubmit={handleSubmit} className="relative z-10 space-y-5">
                        <input
                            type="text"
                            name="name"
                            placeholder={t.placeholders.name}
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full rounded-2xl border border-white/10 bg-black/20 px-5 py-4 text-sm text-white placeholder:text-white/30 outline-none transition duration-300 focus:border-orange-300/40 focus:bg-black/30"
                        />

                        <input
                            type="text"
                            name="phone"
                            placeholder={t.placeholders.phone}
                            required
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full rounded-2xl border border-white/10 bg-black/20 px-5 py-4 text-sm text-white placeholder:text-white/30 outline-none transition duration-300 focus:border-orange-300/40 focus:bg-black/30"
                        />

                        <input
                            type="email"
                            name="email"
                            placeholder={t.placeholders.email}
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full rounded-2xl border border-white/10 bg-black/20 px-5 py-4 text-sm text-white placeholder:text-white/30 outline-none transition duration-300 focus:border-orange-300/40 focus:bg-black/30"
                        />

                        <textarea
                            name="message"
                            rows={6}
                            placeholder={t.placeholders.message}
                            required
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full resize-none rounded-2xl border border-white/10 bg-black/20 px-5 py-4 text-sm text-white placeholder:text-white/30 outline-none transition duration-300 focus:border-orange-300/40 focus:bg-black/30"
                        />

                        <button
                            type="submit"
                            className="group flex w-full items-center justify-center gap-2 rounded-full bg-orange-400 px-6 py-4 text-sm font-medium text-black transition duration-300 hover:scale-[1.01] hover:bg-white cursor-pointer"
                        >
                            {t.button}
                            <ArrowUpRight className="h-4 w-4 transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
}