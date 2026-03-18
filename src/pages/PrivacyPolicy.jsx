import React from "react";
import { useLanguage } from "../LanguageContext";

const content = {
    de: {
        label: "Datenschutz",
        title1: "Datenschutz",
        titleHighlight: "Erklärung",
        intro:
            "Der Schutz Ihrer persönlichen Daten ist uns sehr wichtig. In dieser Datenschutzerklärung informieren wir Sie darüber, welche Daten auf unserer Website erhoben und wie diese verwendet werden.",
        sections: [
            {
                title: "Verantwortliche Stelle",
                paragraphs: [
                    "Verantwortlich für die Datenverarbeitung auf dieser Website:",
                    "MultiSchrank Inh. Oleg Morawski Gartenstr. 72 01445 Radebeul Deutschland",
                    "E-Mail: post@multischrank.de",
                ],
            },
            {
                title: "Erhebung und Speicherung personenbezogener Daten",
                paragraphs: [
                    "Beim Besuch dieser Website werden automatisch Informationen durch den Server erfasst. Dazu gehören beispielsweise:",
                ],
                list: [
                    "IP-Adresse",
                    "Browsertyp und Browserversion",
                    "verwendetes Betriebssystem",
                    "Referrer URL",
                    "Uhrzeit der Serveranfrage",
                ],
                afterList:
                    "Diese Daten dienen ausschließlich zur Sicherstellung eines störungsfreien Betriebs der Website.",
            },
            {
                title: "Kontaktformular / Kontaktaufnahme",
                paragraphs: [
                    "Wenn Sie uns per E-Mail oder Kontaktformular kontaktieren, werden Ihre Angaben inklusive der von Ihnen dort angegebenen Kontaktdaten zum Zweck der Bearbeitung Ihrer Anfrage gespeichert.",
                    "Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.",
                ],
            },
            {
                title: "Cookies",
                paragraphs: [
                    "Unsere Website verwendet teilweise sogenannte Cookies. Cookies richten auf Ihrem Rechner keinen Schaden an und enthalten keine Viren.",
                    "Cookies dienen dazu, unser Angebot nutzerfreundlicher, effektiver und sicherer zu machen.",
                ],
            },
            {
                title: "Ihre Rechte",
                paragraphs: [
                    "Sie haben jederzeit das Recht auf Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger sowie den Zweck der Datenverarbeitung.",
                    "Außerdem haben Sie ein Recht auf Berichtigung, Sperrung oder Löschung dieser Daten.",
                ],
            },
        ],
    },
    en: {
        label: "Privacy Policy",
        title1: "Privacy",
        titleHighlight: "Policy",
        intro:
            "Protecting your personal data is very important to us. In this privacy policy, we inform you about which data is collected on our website and how it is used.",
        sections: [
            {
                title: "Responsible Party",
                paragraphs: [
                    "The party responsible for data processing on this website is:",
                    "MultiSchrank Owner: Oleg Morawski Gartenstr. 72 01445 Radebeul Germany",
                    "Email: post@multischrank.de",
                ],
            },
            {
                title: "Collection and Storage of Personal Data",
                paragraphs: [
                    "When you visit this website, information is automatically collected by the server. This may include, for example:",
                ],
                list: [
                    "IP address",
                    "Browser type and browser version",
                    "Operating system used",
                    "Referrer URL",
                    "Time of the server request",
                ],
                afterList:
                    "This data is used exclusively to ensure the smooth operation of the website.",
            },
            {
                title: "Contact Form / Contact Requests",
                paragraphs: [
                    "If you contact us by email or via the contact form, the information you provide, including your contact details, will be stored for the purpose of processing your request.",
                    "We do not share this data without your consent.",
                ],
            },
            {
                title: "Cookies",
                paragraphs: [
                    "Our website may use so-called cookies in some cases. Cookies do not cause any damage to your device and do not contain viruses.",
                    "Cookies help make our website more user-friendly, effective, and secure.",
                ],
            },
            {
                title: "Your Rights",
                paragraphs: [
                    "You have the right at any time to receive information about your stored personal data, its origin and recipients, and the purpose of the data processing.",
                    "You also have the right to correction, restriction, or deletion of this data.",
                ],
            },
        ],
    },
};

export default function PrivacyPolicy() {
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
                        <h1 className="text-4xl font-medium leading-[0.95] tracking-[-0.04em] text-white sm:text-5xl md:text-6xl">
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
                                <h2 className="text-lg font-medium text-white">
                                    {section.title}
                                </h2>

                                {section.paragraphs?.map((paragraph, pIndex) => (
                                    <p
                                        key={pIndex}
                                        className="mt-4 text-sm leading-7 text-white/70"
                                    >
                                        {paragraph}
                                    </p>
                                ))}

                                {section.list && (
                                    <ul className="mt-4 space-y-2 text-sm text-white/75">
                                        {section.list.map((item, itemIndex) => (
                                            <li key={itemIndex}>• {item}</li>
                                        ))}
                                    </ul>
                                )}

                                {section.afterList && (
                                    <p className="mt-4 text-sm leading-7 text-white/70">
                                        {section.afterList}
                                    </p>
                                )}
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </main>
    );
}