import React from "react";
import MultiSchrankHero from "../components/MultiSchrankHero";
import MultiSchrankAbout from "../components/MultiSchrankAbout";
import MultiSchrankCatalogPreview from "../components/MultiSchrankCatalogPreview";
import MultiSchrankMaterials from "../components/MultiSchrankMaterials";
import MultiSchrankProcess from "../components/MultiSchrankProcess";

export default function Home() {
    return (
        <>
            <MultiSchrankHero />
            <MultiSchrankAbout />
            <MultiSchrankCatalogPreview />
            <MultiSchrankMaterials />
            <MultiSchrankProcess />
        </>
    );
}