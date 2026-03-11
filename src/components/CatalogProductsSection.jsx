import React, { useMemo, useRef, useState } from "react";
import {
    motion,
    AnimatePresence,
    useScroll,
    useTransform,
    useSpring,
} from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const categories = [
    "All",
    "Wardrobes",
    "TV Units",
    "Kitchen",
    "Bedroom",
    "Office",
];

const products = [
    {
        id: 1,
        name: "Nordic Oak Wardrobe",
        category: "Wardrobes",
        material: "Oak",
        color: "Brown",
        price: 1200,
        image: "/catalog-wardrobe.webp",
    },
    {
        id: 2,
        name: "Minimal TV Console",
        category: "TV Units",
        material: "Walnut",
        color: "Brown",
        price: 780,
        image: "/catalog-tv-unit.webp",
    },
    {
        id: 3,
        name: "Modern Kitchen Cabinet",
        category: "Kitchen",
        material: "MDF",
        color: "White",
        price: 1600,
        image: "/catalog-kitchen.webp",
    },
    {
        id: 4,
        name: "Soft Edge Bed Frame",
        category: "Bedroom",
        material: "Ash Wood",
        color: "Beige",
        price: 980,
        image: "/catalog-bedroom.webp",
    },
    {
        id: 6,
        name: "Executive Work Desk",
        category: "Office",
        material: "Walnut",
        color: "Black",
        price: 860,
        image: "/catalog-office.webp",
    },
];

const fadeUp = {
    hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
    show: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: {
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
        },
    },
    exit: {
        opacity: 0,
        y: 20,
        filter: "blur(8px)",
        transition: {
            duration: 0.35,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

const stagger = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.08,
        },
    },
};

function ProductCard({ item, index }) {
    const cardRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: cardRef,
        offset: ["start 92%", "end 15%"],
    });

    const smooth = useSpring(scrollYProgress, {
        stiffness: 120,
        damping: 22,
        mass: 0.35,
    });

    const y = useTransform(smooth, [0, 1], [60, -18]);
    const opacity = useTransform(smooth, [0, 0.2, 0.75, 1], [0, 1, 1, 0.92]);
    const scale = useTransform(smooth, [0, 0.2, 1], [0.94, 1, 1]);
    const imageScale = useTransform(smooth, [0, 0.5, 1], [1.18, 1.08, 1.14]);
    const imageY = useTransform(smooth, [0, 1], [24, -24]);
    const contentY = useTransform(smooth, [0, 1], [24, -10]);

    return (
        <motion.div
            ref={cardRef}
            layout
            initial="hidden"
            animate="show"
            exit="exit"
            variants={fadeUp}
            style={{ y, opacity, scale }}
            whileHover={{ y: -10, scale: 1.01 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/4"
        >
            <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                <div className="absolute -left-10 top-0 h-32 w-32 rounded-full bg-white/10 blur-3xl" />
                <div className="absolute bottom-0 right-0 h-28 w-28 rounded-full bg-orange-500/16 blur-3xl" />
            </div>

            <div className="relative aspect-[4/4.6] overflow-hidden">
                <motion.img
                    src={item.image}
                    alt={item.name}
                    style={{ scale: imageScale, y: imageY }}
                    className="h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-transparent opacity-90" />
                <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),transparent_35%,transparent_65%,rgba(255,255,255,0.06))] opacity-60" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(249,115,22,0.12),transparent_30%)]" />

                <motion.div
                    initial={{ opacity: 0, scale: 0.8, y: -10 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.5 }}
                    transition={{
                        delay: index * 0.04,
                        duration: 0.5,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                    className="absolute right-4 top-4 rounded-full border border-white/15 bg-black/25 p-2 backdrop-blur-md"
                >
                    <ArrowUpRight className="h-4 w-4 text-orange-200 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </motion.div>
            </div>

            <motion.div
                style={{ y: contentY }}
                className="relative p-5 md:p-6"
            >
                <div className="mb-3 flex items-center justify-between">
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.16em] text-orange-200/70">
                        {item.category}
                    </span>
                    <span className="text-sm text-white/80">${item.price}</span>
                </div>

                <h3 className="text-xl font-medium text-white">{item.name}</h3>

                <p className="mt-3 text-sm leading-7 text-white/60">
                    Premium {item.material} finish with a refined silhouette.
                </p>

                <div className="mt-5 flex items-center justify-between hidden">
                    <span className="text-sm text-white/45">{item.color}</span>
                    <button className="text-sm text-white transition duration-300 group-hover:text-orange-200">
                        View Details
                    </button>
                </div>
            </motion.div>
        </motion.div>
    );
}

export default function CatalogProductsSection() {
    const [activeCategory, setActiveCategory] = useState("Wardrobes");
    const [sortBy, setSortBy] = useState("Featured");

    const filtersRef = useRef(null);
    const sectionRef = useRef(null);

    const { scrollYProgress: filtersProgress } = useScroll({
        target: filtersRef,
        offset: ["start 95%", "end 20%"],
    });

    const { scrollYProgress: sectionProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });

    const smoothFilters = useSpring(filtersProgress, {
        stiffness: 100,
        damping: 22,
        mass: 0.4,
    });

    const smoothSection = useSpring(sectionProgress, {
        stiffness: 90,
        damping: 22,
        mass: 0.4,
    });

    const filterY = useTransform(smoothFilters, [0, 1], [40, -10]);
    const filterOpacity = useTransform(smoothFilters, [0, 0.2, 1], [0, 1, 1]);

    const headingY = useTransform(smoothSection, [0, 0.5, 1], [70, 0, -40]);
    const headingOpacity = useTransform(
        smoothSection,
        [0, 0.18, 0.9, 1],
        [0, 1, 1, 0.45]
    );

    const gridY = useTransform(smoothSection, [0, 0.5, 1], [90, 0, -60]);

    const filteredProducts = useMemo(() => {
        let list =
            activeCategory === "All"
                ? [...products]
                : products.filter((item) => item.category === activeCategory);

        if (sortBy === "Price Low to High") {
            list.sort((a, b) => a.price - b.price);
        } else if (sortBy === "Price High to Low") {
            list.sort((a, b) => b.price - a.price);
        } else if (sortBy === "Newest") {
            list.sort((a, b) => b.id - a.id);
        }

        return list;
    }, [activeCategory, sortBy]);

    return (
        <>
            <section
                ref={filtersRef}
                className="relative z-50 border-white/10"
            >
                <motion.div
                    style={{ y: filterY, opacity: filterOpacity }}
                    className="mx-auto max-w-7xl px-6 md:px-10"
                >
                    <div className="no-scrollbar -mx-6 overflow-x-auto px-6 md:mx-0 md:px-0">
                        <div className="flex w-max gap-3 pb-1">
                            {categories.map((item) => {
                                const active = activeCategory === item;

                                return (
                                    <button
                                        key={item}
                                        onClick={() => setActiveCategory(item)}
                                        className={`shrink-0 whitespace-nowrap rounded-full border px-5 py-3 text-sm transition-colors duration-300 ${
                                            active
                                                ? "border-orange-300 bg-orange-400 text-[#111]"
                                                : "border-white/10 bg-white/5 text-white/75 hover:border-orange-300/20 hover:bg-white/10"
                                        }`}
                                    >
                                        {item}
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                </motion.div>
            </section>

            <section
                ref={sectionRef}
                className="relative z-50 mx-auto max-w-7xl px-6 pb-12 pt-8 md:px-10 md:py-18"
            >
                <motion.div
                    style={{ y: headingY, opacity: headingOpacity }}
                    variants={stagger}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.15 }}
                    className="relative mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between"
                >
                    <motion.div variants={fadeUp}>
                        <p className="text-xs uppercase tracking-[0.22em] text-orange-200/55">
                            Catalog
                        </p>
                        <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
                            Selected furniture pieces
                        </h2>
                    </motion.div>

                    <motion.p
                        variants={fadeUp}
                        className="max-w-xl text-sm leading-7 text-white/60"
                    >
                        A curated selection of premium furniture designed for
                        everyday use, architectural harmony, and clean modern
                        interiors.
                    </motion.p>
                </motion.div>

                <motion.div
                    key={activeCategory}
                    variants={stagger}
                    initial="hidden"
                    animate="show"
                    style={{ y: gridY }}
                    className="relative grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3"
                >
                    <AnimatePresence mode="wait">
                        {filteredProducts.map((item, index) => (
                            <ProductCard
                                key={`${activeCategory}-${item.id}`}
                                item={item}
                                index={index}
                            />
                        ))}
                    </AnimatePresence>
                </motion.div>
            </section>
        </>
    );
}