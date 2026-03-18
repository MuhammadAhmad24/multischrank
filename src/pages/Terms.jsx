import React from "react";
import { useLanguage } from "../LanguageContext";

const content = {
    de: {
        label: "AGB",
        title1: "Allgemeine",
        titleHighlight: "Geschäftsbedingungen",
        intro:
            "Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Verträge, Lieferungen und Leistungen zwischen MultiSchrank und seinen Kunden.",
        sections: [
            {
                title: "1. Geltungsbereich",
                paragraphs: [
                    "Diese Allgemeinen Geschäftsbedingungen gelten für alle Geschäftsbeziehungen zwischen MultiSchrank und seinen Kunden in der jeweils zum Zeitpunkt des Vertragsschlusses gültigen Fassung.",
                ],
            },
            {
                title: "2. Vertragsabschluss",
                paragraphs: [
                    "Die Darstellung unserer Produkte auf der Website stellt kein rechtlich bindendes Angebot dar, sondern eine unverbindliche Präsentation unseres Sortiments.",
                    "Ein Vertrag kommt erst zustande, wenn eine Bestellung oder ein Auftrag durch MultiSchrank bestätigt wird.",
                ],
            },
            {
                title: "3. Preise und Zahlung",
                paragraphs: [
                    "Alle Preise verstehen sich in Euro inklusive der jeweils gültigen gesetzlichen Mehrwertsteuer, sofern nicht anders angegeben.",
                    "Die Zahlung erfolgt gemäß den im Angebot oder Vertrag vereinbarten Zahlungsbedingungen.",
                ],
            },
            {
                title: "4. Lieferung und Leistung",
                paragraphs: [
                    "Lieferzeiten werden individuell vereinbart und können je nach Projektumfang variieren. Verzögerungen aufgrund höherer Gewalt bleiben vorbehalten.",
                ],
            },
            {
                title: "5. Gewährleistung",
                paragraphs: [
                    "Es gelten die gesetzlichen Gewährleistungsrechte gemäß den geltenden gesetzlichen Bestimmungen.",
                ],
            },
            {
                title: "6. Haftung",
                paragraphs: [
                    "MultiSchrank haftet nur für Schäden, die auf vorsätzlichem oder grob fahrlässigem Verhalten beruhen, soweit gesetzlich zulässig.",
                ],
            },
            {
                title: "7. Schlussbestimmungen",
                paragraphs: [
                    "Es gilt das Recht der Bundesrepublik Deutschland. Sollten einzelne Bestimmungen dieser AGB unwirksam sein, bleibt die Wirksamkeit der übrigen Bestimmungen unberührt.",
                ],
            },
        ],
    },
    en: {
        label: "Terms",
        title1: "General",
        titleHighlight: "Terms and Conditions",
        intro:
            "These General Terms and Conditions apply to all contracts, deliveries, and services between MultiSchrank and its customers.",
        sections: [
            {
                title: "1. Scope",
                paragraphs: [
                    "These General Terms and Conditions apply to all business relationships between MultiSchrank and its customers in the version valid at the time the contract is concluded.",
                ],
            },
            {
                title: "2. Conclusion of Contract",
                paragraphs: [
                    "The presentation of our products on the website does not constitute a legally binding offer, but rather a non-binding presentation of our range.",
                    "A contract is only concluded once an order or request has been confirmed by MultiSchrank.",
                ],
            },
            {
                title: "3. Prices and Payment",
                paragraphs: [
                    "All prices are stated in euros and include the applicable statutory value-added tax unless otherwise stated.",
                    "Payment shall be made in accordance with the payment terms agreed in the offer or contract.",
                ],
            },
            {
                title: "4. Delivery and Services",
                paragraphs: [
                    "Delivery times are agreed individually and may vary depending on the scope of the project. Delays due to force majeure remain reserved.",
                ],
            },
            {
                title: "5. Warranty",
                paragraphs: [
                    "The statutory warranty rights shall apply in accordance with the applicable legal provisions.",
                ],
            },
            {
                title: "6. Liability",
                paragraphs: [
                    "MultiSchrank shall only be liable for damages caused by intentional misconduct or gross negligence, to the extent permitted by law.",
                ],
            },
            {
                title: "7. Final Provisions",
                paragraphs: [
                    "The law of the Federal Republic of Germany shall apply. Should any individual provision of these Terms and Conditions be invalid, the validity of the remaining provisions shall remain unaffected.",
                ],
            },
        ],
    },
};

export default function Terms() {
    const { lang } = useLanguage();
    const t = content[lang];

    return (
        <main className="min-h-screen bg-neutral-950 text-white">
            <div className="relative overflow-hidden">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(249,115,22,0.16),transparent_32%)]" />
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[44px_44px]" />
                <div className="pointer-events-none absolute left-1/2 top-0 h-130 w-130 -translate-x-1/2 rounded-full bg-orange-500/10 blur-3xl" />

                <section className="relative mx-auto max-w-5xl px-6 pb-20 pt-32 sm:px-8 lg:px-12">
                    <div className="mb-8">
                        <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] uppercase tracking-[0.28em] text-orange-200 backdrop-blur-xl">
                            {t.label}
                        </span>
                    </div>

                    <div className="max-w-3xl">
                        <h1 className="text-4xl font-medium leading-[0.95] tracking-[-0.04em] sm:text-5xl md:text-6xl">
                            {t.title1}{" "}
                            <span className="bg-linear-to-r from-orange-200 via-orange-300 to-orange-500 bg-clip-text text-transparent">
                                {t.titleHighlight}
                            </span>
                        </h1>

                        <p className="mt-6 max-w-2xl text-sm leading-7 text-white/65 sm:text-base">
                            {t.intro}
                        </p>
                    </div>

                    <div className="mt-14 space-y-8">
                        {t.sections.map((section, index) => (
                            <div
                                key={index}
                                className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8 backdrop-blur-xl"
                            >
                                <h2 className="text-lg font-medium">
                                    {section.title}
                                </h2>

                                {section.paragraphs.map((paragraph, pIndex) => (
                                    <p
                                        key={pIndex}
                                        className="mt-4 text-sm leading-7 text-white/70"
                                    >
                                        {paragraph}
                                    </p>
                                ))}
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </main>
    );
}