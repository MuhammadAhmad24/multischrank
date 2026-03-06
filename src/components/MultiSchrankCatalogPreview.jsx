import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
    ArrowLeft,
    ArrowRight,
    ArrowUpRight,
    MessageCircle,
    Sparkles,
} from "lucide-react";

const container = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.08,
        },
    },
};

const fadeUp = {
    hidden: {
        opacity: 0,
        y: 36,
        filter: "blur(10px)",
    },
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

const cardReveal = {
    hidden: {
        opacity: 0,
        y: 24,
        scale: 0.985,
    },
    show: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

const items = [
    {
        title: "Luxury Wardrobes",
        description:
            "Elegant wardrobe systems with refined finishes, seamless detailing, and intelligent storage.",
        image: "catalog-wardrobe.webp",
        tag: "Featured",
        href: "#catalog",
    },
    {
        title: "Living Room Furniture",
        description:
            "Modern furniture concepts crafted to bring warmth, sophistication, and balance into everyday spaces.",
        image: "catalog-living.webp",
        tag: "Modern",
        href: "#catalog",
    },
    {
        title: "Bedroom Furniture",
        description:
            "Timeless bedroom pieces designed for comfort, calm interiors, and contemporary elegance.",
        image: "catalog-bedroom.webp",
        tag: "Refined",
        href: "#catalog",
    },
    {
        title: "Kitchen Solutions",
        description:
            "Functional kitchen cabinetry and premium design solutions tailored for modern living.",
        image: "catalog-kitchen.webp",
        tag: "Custom",
        href: "#catalog",
    },
    {
        title: "TV Units",
        description:
            "Minimal entertainment units shaped for clean compositions and elevated interior aesthetics.",
        image: "catalog-tv-unit.webp",
        tag: "Minimal",
        href: "#catalog",
    },
    {
        title: "Office Furniture",
        description:
            "Smart workspace furniture that combines productivity, elegance, and practical organization.",
        image: "catalog-office.webp",
        tag: "Workspace",
        href: "#catalog",
    },
];

function SliderCard({ item, index }) {
    return (
        <motion.a
            data-slide
            variants={cardReveal}
            href={item.href}
            className="group relative block h-90 sm:h-112 w-[82vw] shrink-0 snap-center overflow-hidden rounded-4xl border border-white/10 bg-white/5 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-2xl sm:w-120 lg:h-136 lg:w-xl"
        >
            <div className="absolute inset-0 overflow-hidden">
                <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.05]"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/25 to-transparent" />
                <div className="absolute inset-0 bg-[linear-gradient(120deg,transparent_0%,rgba(255,255,255,0.08)_45%,transparent_65%)] opacity-70" />
            </div>

            <div className="pointer-events-none absolute inset-0 rounded-4xl ring-1 ring-inset ring-white/10 transition duration-300 group-hover:ring-amber-300/30" />

            <div className="relative flex h-full flex-col justify-between p-6 md:p-8">
                <div className="flex items-start justify-between gap-4">
                    <div className="rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-[11px] uppercase tracking-[0.24em] text-white/75 backdrop-blur-xl">
                        {item.tag}
                    </div>

                    <div className="text-sm font-medium text-white/40">
                        0{index + 1}
                    </div>
                </div>

                <div className="max-w-xl">
                    <h3 className="text-2xl font-semibold tracking-[-0.03em] text-white md:text-4xl">
                        {item.title}
                    </h3>

                    <p className="mt-1 sm:mt-4 max-w-lg text-sm md:leading-7 text-white/65 md:text-base">
                        {item.description}
                    </p>

                    <div className="mt-2 sm:mt-6 inline-flex items-center gap-2 text-sm font-medium text-white/85 transition duration-300 group-hover:text-amber-300">
                        <span>Explore Collection</span>
                        <ArrowUpRight
                            size={16}
                            className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        />
                    </div>
                </div>
            </div>
        </motion.a>
    );
}

export default function MultiSchrankCatalogSlider() {
    const sliderRef = useRef(null);
    const autoSlideRef = useRef(null);

    const getCards = () => {
        if (!sliderRef.current) return [];
        return Array.from(sliderRef.current.querySelectorAll("[data-slide]"));
    };

    const getActiveIndex = () => {
        if (!sliderRef.current) return 0;

        const cards = getCards();
        if (!cards.length) return 0;

        const currentScroll = sliderRef.current.scrollLeft;

        let closestIndex = 0;
        let smallestDiff = Infinity;

        cards.forEach((card, index) => {
            const diff = Math.abs(card.offsetLeft - currentScroll);
            if (diff < smallestDiff) {
                smallestDiff = diff;
                closestIndex = index;
            }
        });

        return closestIndex;
    };

    const scrollToIndex = (index) => {
        if (!sliderRef.current) return;

        const cards = getCards();
        if (!cards.length) return;

        const safeIndex = Math.max(0, Math.min(index, cards.length - 1));

        sliderRef.current.scrollTo({
            left: cards[safeIndex].offsetLeft,
            behavior: "smooth",
        });
    };

    const scrollLeft = () => {
        const currentIndex = getActiveIndex();
        const prevIndex = currentIndex <= 0 ? 0 : currentIndex - 1;
        scrollToIndex(prevIndex);
    };

    const scrollRight = () => {
        const cards = getCards();
        if (!cards.length) return;

        const currentIndex = getActiveIndex();
        const nextIndex = currentIndex >= cards.length - 1 ? 0 : currentIndex + 1;

        scrollToIndex(nextIndex);
    };

    const pauseAutoSlide = () => {
        if (autoSlideRef.current) {
            clearInterval(autoSlideRef.current);
            autoSlideRef.current = null;
        }
    };

    const resumeAutoSlide = () => {
        pauseAutoSlide();

        autoSlideRef.current = setInterval(() => {
            scrollRight();
        }, 3500);
    };

    useEffect(() => {
        resumeAutoSlide();

        return () => {
            pauseAutoSlide();
        };
    }, []);

    return (
        <section
            id="catalog"
            className="relative overflow-hidden bg-neutral-950 py-12 text-white md:py-18"
        >
            {/* Background */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute left-[-8%] top-[12%] h-80 w-80 rounded-full bg-amber-500/10 blur-3xl" />
                <div className="absolute right-[-8%] bottom-[8%] h-96 w-96 rounded-full bg-white/6 blur-3xl" />
            </div>

            {/* Grid */}
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size[:42px_42px]" />

            <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.12 }}
                className="relative"
            >
                {/* Header */}
                <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
                    <div className="max-w-3xl">
                        <motion.div
                            variants={fadeUp}
                            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.28em] text-white/65 backdrop-blur-xl"
                        >
                            <Sparkles size={14} className="text-amber-400" />
                            Our Collection
                        </motion.div>

                        <motion.h2
                            variants={fadeUp}
                            className="mt-6 text-3xl font-semibold leading-[1.05] tracking-[-0.04em] text-white sm:text-4xl md:text-5xl xl:text-6xl"
                        >
                            Discover furniture with a{" "}
                            <span className="bg-linear-to-r from-white via-white to-amber-300 bg-clip-text text-transparent">
                                luxury perspective.
                            </span>
                        </motion.h2>

                        <motion.p
                            variants={fadeUp}
                            className="mt-6 max-w-2xl text-base leading-8 text-white/65 md:text-lg"
                        >
                            Explore a curated selection of premium furniture and
                            interior solutions created for elegant homes, modern
                            lifestyles, and timeless living spaces.
                        </motion.p>
                    </div>
                </div>

                {/* Slider */}
                <motion.div variants={fadeUp} className="relative mt-8 sm:mt-14">
                    {/* Left Arrow */}
                    <button
                        onClick={() => {
                            pauseAutoSlide();
                            scrollLeft();
                            resumeAutoSlide();
                        }}
                        className="absolute left-4 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-neutral-900/70 text-white/80 backdrop-blur-xl transition duration-300 hover:border-white/20 hover:bg-neutral-800/80 hover:text-white lg:inline-flex"
                        aria-label="Scroll left"
                    >
                        <ArrowLeft size={18} />
                    </button>

                    {/* Right Arrow */}
                    <button
                        onClick={() => {
                            pauseAutoSlide();
                            scrollRight();
                            resumeAutoSlide();
                        }}
                        className="absolute right-4 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-neutral-900/70 text-white/80 backdrop-blur-xl transition duration-300 hover:border-white/20 hover:bg-neutral-800/80 hover:text-white lg:inline-flex"
                        aria-label="Scroll right"
                    >
                        <ArrowRight size={18} />
                    </button>

                    <div
                        ref={sliderRef}
                        onMouseEnter={pauseAutoSlide}
                        onMouseLeave={resumeAutoSlide}
                        className="scrollbar-none flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 sm:px-6 pb-4 lg:px-10"
                        style={{
                            scrollbarWidth: "none",
                            msOverflowStyle: "none",
                        }}
                    >
                        {items.map((item, index) => (
                            <SliderCard key={item.title} item={item} index={index} />
                        ))}
                    </div>
                </motion.div>

                {/* CTA */}
                <div className="mx-auto mt-12 flex max-w-7xl flex-col items-center justify-center gap-4 px-5 sm:px-6 sm:flex-row lg:px-10">
                    <a
                        href="/catalog"
                        className="group inline-flex items-center gap-2 rounded-full bg-white px-5 sm:px-6 py-3.5 text-sm font-semibold text-neutral-900 transition duration-300 hover:scale-[1.03] hover:shadow-[0_12px_40px_rgba(255,255,255,0.18)]"
                    >
                        View Full Catalog
                        <ArrowRight
                            size={17}
                            className="transition-transform duration-300 group-hover:translate-x-1"
                        />
                    </a>

                    <a
                        href="#"
                        target="_blank"
                        rel="noreferrer"
                        className="group inline-flex items-center gap-2 rounded-full border border-green-400/25 bg-green-500/10 px-5 sm:px-6 py-3.5 text-sm font-medium text-green-300 backdrop-blur-xl transition duration-300 hover:scale-[1.03] hover:border-green-400/50 hover:bg-green-500/20"
                    >
                        <MessageCircle size={17} />
                        Start Your Project
                        <ArrowUpRight
                            size={16}
                            className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        />
                    </a>
                </div>
            </motion.div>
        </section>
    );
}