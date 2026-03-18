import React from "react";
import { useLanguage } from "../LanguageContext";

const content = {
    de: {
        label: "Impressum",
        title1: "Rechtliche",
        titleHighlight: "Informationen",
        intro: "Angaben gemäß § 5 TMG.",
        companyCardTitle: "Angaben zum Unternehmen",
        companyInfo: [
            {
                label: "Unternehmen",
                value: (
                    <>
                        MultiSchrank
                    </>
                ),
            },
            {
                label: "Inhaber",
                value: (
                    <>
                        Oleg Morawski
                    </>
                ),
            },
            {
                label: "Adresse",
                value: (
                    <>
                        Gartenstr. 72
                        <br />
                        01445 Radebeul
                        <br />
                        Deutschland
                    </>
                ),
            },
            {
                label: "Kontakt",
                value: (
                    <>
                        Telefon: +49 155 63440433
                        <br />
                        E-Mail: post@multischrank.de
                    </>
                ),
            },
        ],
        extraCardTitle: "Weitere Pflichtangaben",
        extraInfo: [
            {
                label: "Unternehmensform",
                value: (
                    <>
                        MultiSchrank Inh. Oleg Morawski
                    </>
                ),
            },
            {
                label: "Verantwortlich für den Inhalt",
                value: (
                    <>
                        Oleg Morawski
                        <br />
                        Gartenstr. 72
                        <br />
                        01445 Radebeul
                        <br />
                        Deutschland
                    </>
                ),
            },
            {
                label: "E-Mail",
                value: (
                    <>
                        post@multischrank.de
                    </>
                ),
            },
            {
                label: "Telefon",
                value: (
                    <>
                        +49 155 63440433
                    </>
                ),
            },
        ],
        sections: [
            {
                title: "Haftung für Inhalte",
                text: "Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.",
            },
            {
                title: "Haftung für Links",
                text: "Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.",
            },
            {
                title: "Urheberrecht",
                text: "Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.",
            },
        ],
    },
    en: {
        label: "Legal Notice",
        title1: "Legal",
        titleHighlight: "Information",
        intro: "Information according to Section 5 TMG.",
        companyCardTitle: "Company Information",
        companyInfo: [
            {
                label: "Company",
                value: (
                    <>
                        MultiSchrank
                    </>
                ),
            },
            {
                label: "Owner",
                value: (
                    <>
                        Oleg Morawski
                    </>
                ),
            },
            {
                label: "Address",
                value: (
                    <>
                        Gartenstr. 72
                        <br />
                        01445 Radebeul
                        <br />
                        Germany
                    </>
                ),
            },
            {
                label: "Contact",
                value: (
                    <>
                        Phone: +49 155 63440433
                        <br />
                        Email: post@multischrank.de
                    </>
                ),
            },
        ],
        extraCardTitle: "Additional Mandatory Information",
        extraInfo: [
            {
                label: "Business name",
                value: (
                    <>
                        MultiSchrank Owner: Oleg Morawski
                    </>
                ),
            },
            {
                label: "Responsible for content",
                value: (
                    <>
                        Oleg Morawski
                        <br />
                        Gartenstr. 72
                        <br />
                        01445 Radebeul
                        <br />
                        Germany
                    </>
                ),
            },
            {
                label: "Email",
                value: (
                    <>
                        post@multischrank.de
                    </>
                ),
            },
            {
                label: "Phone",
                value: (
                    <>
                        +49 155 63440433
                    </>
                ),
            },
        ],
        sections: [
            {
                title: "Liability for Content",
                text: "As a service provider, we are responsible for our own content on these pages in accordance with Section 7 (1) TMG and general law. However, according to Sections 8 to 10 TMG, as a service provider we are not obligated to monitor transmitted or stored third-party information or to investigate circumstances indicating illegal activity.",
            },
            {
                title: "Liability for Links",
                text: "Our website contains links to external third-party websites over whose content we have no control. Therefore, we cannot accept any liability for this external content. The respective provider or operator of the linked pages is always responsible for their content.",
            },
            {
                title: "Copyright",
                text: "The content and works created by the website operators on these pages are subject to German copyright law. Reproduction, editing, distribution, and any kind of use outside the limits of copyright law require the written consent of the respective author or creator.",
            },
        ],
    },
};

export default function Impressum() {
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

                    <div className="mt-14 grid gap-6 md:grid-cols-2">
                        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_10px_40px_rgba(0,0,0,0.28)] backdrop-blur-xl sm:p-8">
                            <h2 className="text-lg font-medium text-white">
                                {t.companyCardTitle}
                            </h2>

                            <div className="mt-6 space-y-5 text-sm leading-7 text-white/75 sm:text-[15px]">
                                {t.companyInfo.map((item, index) => (
                                    <div key={index}>
                                        <p className="text-white/45">{item.label}</p>
                                        <p className="mt-1 text-white">{item.value}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_10px_40px_rgba(0,0,0,0.28)] backdrop-blur-xl sm:p-8">
                            <h2 className="text-lg font-medium text-white">
                                {t.extraCardTitle}
                            </h2>

                            <div className="mt-6 space-y-5 text-sm leading-7 text-white/75 sm:text-[15px]">
                                {t.extraInfo.map((item, index) => (
                                    <div key={index}>
                                        <p className="text-white/45">{item.label}</p>
                                        <p className="mt-1 text-white">{item.value}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 grid gap-6">
                        {t.sections.map((section, index) => (
                            <div
                                key={index}
                                className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl sm:p-8"
                            >
                                <h2 className="text-lg font-medium text-white">
                                    {section.title}
                                </h2>
                                <p className="mt-4 text-sm leading-7 text-white/70 sm:text-[15px]">
                                    {section.text}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </main>
    );
}