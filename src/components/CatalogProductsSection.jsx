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
    "Alle",
    "Kleiderschränke",
    "TV-Möbel",
    "Küchen",
    "Schlafzimmer",
    "Büro",
];

const products = [
    {
        id: 1,
        name: "Nordischer Eichen-Kleiderschrank",
        category: "Kleiderschränke",
        material: "Eiche",
        color: "Braun",
        price: 1200,
        image: "/catalog-wardrobe.webp",
    },
    {
        id: 2,
        name: "Minimalistisches TV-Lowboard",
        category: "TV-Möbel",
        material: "Walnuss",
        color: "Braun",
        price: 780,
        image: "/catalog-tv-unit.webp",
    },
    {
        id: 3,
        name: "Moderner Küchenschrank",
        category: "Küchen",
        material: "MDF",
        color: "Weiß",
        price: 1600,
        image: "/catalog-kitchen.webp",
    },
    {
        id: 4,
        name: "Bettgestell mit weichen Kanten",
        category: "Schlafzimmer",
        material: "Eschenholz",
        color: "Beige",
        price: 980,
        image: "/catalog-bedroom.webp",
    },
    {
        id: 6,
        name: "Executive-Schreibtisch",
        category: "Büro",
        material: "Walnuss",
        color: "Schwarz",
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
            <div className="relative aspect-[4/4.6] overflow-hidden">
                <motion.img
                    src={item.image}
                    alt={item.name}
                    style={{ scale: imageScale, y: imageY }}
                    className="h-full w-full object-cover"
                />

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
                    <ArrowUpRight className="h-4 w-4 text-orange-200" />
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
                    <span className="text-sm text-white/80">{item.price}€</span>
                </div>

                <h3 className="text-xl font-medium text-white">{item.name}</h3>

                <p className="mt-3 text-sm leading-7 text-white/60">
                    Hochwertige {item.material}-Oberfläche mit eleganter
                    Silhouette.
                </p>

            </motion.div>
        </motion.div>
    );
}

export default function CatalogProductsSection() {
    const [activeCategory, setActiveCategory] = useState("Kleiderschränke");

    const filtersRef = useRef(null);
    const sectionRef = useRef(null);

    const filteredProducts = useMemo(() => {
        return activeCategory === "Alle"
            ? [...products]
            : products.filter((item) => item.category === activeCategory);
    }, [activeCategory]);

    return (
        <>
            <section ref={filtersRef}>
                <div className="mx-auto max-w-7xl px-6 md:px-10">
                    <div className="flex w-max gap-3 pb-1">
                        {categories.map((item) => {
                            const active = activeCategory === item;

                            return (
                                <button
                                    key={item}
                                    onClick={() => setActiveCategory(item)}
                                    className={`rounded-full border px-5 py-3 text-sm ${active
                                            ? "border-orange-300 bg-orange-400 text-[#111]"
                                            : "border-white/10 bg-white/5 text-white/75"
                                        }`}
                                >
                                    {item}
                                </button>
                            );
                        })}
                    </div>
                </div>
            </section>

            <section
                ref={sectionRef}
                className="mx-auto max-w-7xl px-6 pb-12 pt-8 md:px-10 md:py-18"
            >
                <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                    <div>
                        <p className="text-xs uppercase tracking-[0.22em] text-orange-200/55">
                            Katalog
                        </p>
                        <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
                            Ausgewählte Möbelstücke
                        </h2>
                    </div>

                    <p className="max-w-xl text-sm leading-7 text-white/60">
                        Eine kuratierte Auswahl hochwertiger Möbelstücke für
                        den täglichen Gebrauch, architektonische Harmonie und
                        moderne Innenräume.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
                    <AnimatePresence mode="wait">
                        {filteredProducts.map((item, index) => (
                            <ProductCard
                                key={`${activeCategory}-${item.id}`}
                                item={item}
                                index={index}
                            />
                        ))}
                    </AnimatePresence>
                </div>
            </section>
        </>
    );
}