import React from "react";
import Faq from "../components/Faq";
import CatalogHero from "../components/CatalogHero";
import CatalogHighlights from "../components/CatalogHighlights";
import FeaturedCollection from "../components/FeaturedCollection";
import CatalogProductsSection from "../components/CatalogProductsSection";


export default function CatalogPage() {
    return (
        <main className="bg-[#0f0f10] text-[#f5f1eb]">
            <CatalogHero />
            <CatalogProductsSection/>
            <FeaturedCollection />
            <CatalogHighlights />
            <Faq />
        </main>
    );
}