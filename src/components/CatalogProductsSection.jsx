import React, { useEffect, useMemo, useRef, useState } from "react";
import {
    motion,
    AnimatePresence,
    useScroll,
    useTransform,
    useSpring,
} from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "../LanguageContext";

// TRANSLATIONS
const content = {
    de: {
        categories: [
            "Alle",
            "Kleiderschränke",
            "TV-Möbel",
            "Küchen",
            "Schlafzimmer",
            "Büro",
        ],
        sectionLabel: "Katalog",
        sectionTitle: "Ausgewählte Möbelstücke",
        sectionDesc:
            "Eine kuratierte Auswahl hochwertiger Möbelstücke für den täglichen Gebrauch, architektonische Harmonie und moderne Innenräume.",
        productDesc: "Hochwertige {material}-Oberfläche mit eleganter Silhouette.",
        products: [
            {
                id: 1,
                name: "Nordischer Eichen-Kleiderschrank",
                category: "Kleiderschränke",
                material: "Eiche",
                color: "Braun",
                image: "/catalog-wardrobe.webp",
            },
            {
                id: 2,
                name: "Minimalistisches TV-Lowboard",
                category: "TV-Möbel",
                material: "Walnuss",
                color: "Braun",
                image: "/catalog-tv-unit.webp",
            },
            {
                id: 3,
                name: "Moderner Küchenschrank",
                category: "Küchen",
                material: "MDF",
                color: "Weiß",
                image: "/catalog-kitchen.webp",
            },
            {
                id: 4,
                name: "Bettgestell mit weichen Kanten",
                category: "Schlafzimmer",
                material: "Eschenholz",
                color: "Beige",
                image: "/catalog-bedroom.webp",
            },
            {
                id: 6,
                name: "Executive-Schreibtisch",
                category: "Büro",
                material: "Walnuss",
                color: "Schwarz",
                image: "/catalog-office.webp",
            },
        ],
    },
    en: {
        categories: [
            "All",
            "Wardrobes",
            "TV Units",
            "Kitchens",
            "Bedroom",
            "Office",
        ],
        sectionLabel: "Catalog",
        sectionTitle: "Selected furniture pieces",
        sectionDesc:
            "A curated selection of high-quality furniture pieces designed for everyday use, architectural harmony, and modern interiors.",
        productDesc: "Premium {material} finish with an elegant silhouette.",
        products: [
            {
                id: 1,
                name: "Nordic oak wardrobe",
                category: "Wardrobes",
                material: "Oak",
                color: "Brown",
                image: "/catalog-wardrobe.webp",
            },
            {
                id: 2,
                name: "Minimalist TV lowboard",
                category: "TV Units",
                material: "Walnut",
                color: "Brown",
                image: "/catalog-tv-unit.webp",
            },
            {
                id: 3,
                name: "Modern kitchen cabinet",
                category: "Kitchens",
                material: "MDF",
                color: "White",
                image: "/catalog-kitchen.webp",
            },
            {
                id: 4,
                name: "Soft-edge bed frame",
                category: "Bedroom",
                material: "Ash wood",
                color: "Beige",
                image: "/catalog-bedroom.webp",
            },
            {
                id: 6,
                name: "Executive desk",
                category: "Office",
                material: "Walnut",
                color: "Black",
                image: "/catalog-office.webp",
            },
        ],
    },
};

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

function ProductCard({ item, index, descTemplate, isMobile }) {
    const cardRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: cardRef,
        offset: isMobile ? ["start 97%", "end 18%"] : ["start 92%", "end 15%"],
    });

    const smooth = useSpring(scrollYProgress, {
        stiffness: isMobile ? 90 : 120,
        damping: isMobile ? 24 : 22,
        mass: isMobile ? 0.5 : 0.35,
    });

    const y = useTransform(
        smooth,
        [0, 1],
        isMobile ? [24, -8] : [60, -18]
    );

    const opacity = useTransform(
        smooth,
        [0, 0.2, 0.75, 1],
        isMobile ? [0, 1, 1, 0.98] : [0, 1, 1, 0.92]
    );

    const scale = useTransform(
        smooth,
        [0, 0.2, 1],
        isMobile ? [0.97, 1, 1] : [0.94, 1, 1]
    );

    const imageScale = useTransform(
        smooth,
        [0, 0.5, 1],
        isMobile ? [1.08, 1.03, 1.05] : [1.18, 1.08, 1.14]
    );

    const imageY = useTransform(
        smooth,
        [0, 1],
        isMobile ? [10, -10] : [24, -24]
    );

    const contentY = useTransform(
        smooth,
        [0, 1],
        isMobile ? [8, -4] : [24, -10]
    );

    return (
        <motion.div
            ref={cardRef}
            layout
            initial={false}
            style={{
                y,
                opacity,
                scale,
                willChange: "transform, opacity",
            }}
            whileHover={isMobile ? undefined : { y: -10, scale: 1.01 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/4"
        >
            <div className="relative aspect-[4/4.6] overflow-hidden">
                <motion.img
                    src={item.image}
                    alt={item.name}
                    style={{ scale: imageScale, y: imageY, willChange: "transform" }}
                    className="h-full w-full object-cover"
                    loading="lazy"
                />

                <motion.div
                    initial={{ opacity: 0, scale: 0.8, y: -10 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.5 }}
                    transition={{
                        delay: index * 0.04,
                        duration: isMobile ? 0.4 : 0.5,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                    className="absolute right-4 top-4 rounded-full border border-white/15 bg-black/25 p-2 backdrop-blur-md"
                >
                    <ArrowUpRight className="h-4 w-4 text-orange-200" />
                </motion.div>
            </div>

            <motion.div
                style={{ y: contentY, willChange: "transform" }}
                className="relative p-5 md:p-6"
            >
                <div className="mb-3 flex items-center justify-between">
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.16em] text-orange-200/70">
                        {item.category}
                    </span>
                </div>

                <h3 className="text-xl font-medium text-white">{item.name}</h3>

                <p className="mt-3 text-sm leading-7 text-white/60">
                    {descTemplate.replace("{material}", item.material)}
                </p>
            </motion.div>
        </motion.div>
    );
}

export default function CatalogProductsSection() {
    const { lang } = useLanguage();
    const t = content[lang];

    const [isMobile, setIsMobile] = useState(false);
    const [activeCategory, setActiveCategory] = useState(
        lang === "de" ? "Kleiderschränke" : "Wardrobes"
    );

    const filtersRef = useRef(null);
    const sectionRef = useRef(null);

    useEffect(() => {
        const media = window.matchMedia("(max-width: 767px)");

        const updateIsMobile = () => setIsMobile(media.matches);
        updateIsMobile();

        if (media.addEventListener) {
            media.addEventListener("change", updateIsMobile);
            return () => media.removeEventListener("change", updateIsMobile);
        } else {
            media.addListener(updateIsMobile);
            return () => media.removeListener(updateIsMobile);
        }
    }, []);

    useEffect(() => {
        setActiveCategory(lang === "de" ? "Kleiderschränke" : "Wardrobes");
    }, [lang]);

    const filteredProducts = useMemo(() => {
        return activeCategory === t.categories[0]
            ? [...t.products]
            : t.products.filter((item) => item.category === activeCategory);
    }, [activeCategory, t]);

    return (
        <>
            <section ref={filtersRef}>
                <div className="mx-auto max-w-7xl overflow-hidden px-6 md:px-10">
                    <div
                        className={`
                            flex w-full gap-3 overflow-x-auto pb-2
                            ${isMobile ? "snap-x snap-mandatory no-scrollbar" : "w-max pb-1"}
                        `}
                    >
                        {t.categories.map((item) => {
                            const active = activeCategory === item;

                            return (
                                <button
                                    key={item}
                                    onClick={() => setActiveCategory(item)}
                                    className={`
                                        shrink-0 rounded-full border px-5 py-3 text-sm transition-colors duration-300
                                        ${isMobile ? "snap-start" : ""}
                                        ${
                                            active
                                                ? "border-orange-300 bg-orange-400 text-[#111]"
                                                : "border-white/10 bg-white/5 text-white/75"
                                        }
                                    `}
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
                className="mx-auto max-w-7xl px-6 pb-0 pt-8 md:px-10 md:py-18"
            >
                <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                    <div>
                        <p className="text-xs uppercase tracking-[0.22em] text-orange-200/55">
                            {t.sectionLabel}
                        </p>
                        <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
                            {t.sectionTitle}
                        </h2>
                    </div>

                    <p className="max-w-xl text-sm leading-7 text-white/60">
                        {t.sectionDesc}
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
                    <AnimatePresence initial={false}>
                        {filteredProducts.map((item, index) => (
                            <ProductCard
                                key={`${lang}-${activeCategory}-${item.id}`}
                                item={item}
                                index={index}
                                descTemplate={t.productDesc}
                                isMobile={isMobile}
                            />
                        ))}
                    </AnimatePresence>
                </div>
            </section>
        </>
    );
}