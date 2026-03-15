import React from "react";

export default function Terms() {
    return (
        <main className="min-h-screen bg-neutral-950 text-white">
            <div className="relative overflow-hidden">

                {/* background */}
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(249,115,22,0.16),transparent_32%)]" />
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[44px_44px]" />
                <div className="pointer-events-none absolute left-1/2 top-0 h-130 w-130-translate-x-1/2 rounded-full bg-orange-500/10 blur-3xl" />

                <section className="relative mx-auto max-w-5xl px-6 pb-20 pt-32 sm:px-8 lg:px-12">

                    {/* label */}
                    <div className="mb-8">
                        <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] uppercase tracking-[0.28em] text-orange-200 backdrop-blur-xl">
                            AGB
                        </span>
                    </div>

                    {/* heading */}
                    <div className="max-w-3xl">
                        <h1 className="text-4xl font-medium leading-[0.95] tracking-[-0.04em] sm:text-5xl md:text-6xl">
                            Allgemeine{" "}
                            <span className="bg-linear-to-r from-orange-200 via-orange-300 to-orange-500 bg-clip-text text-transparent">
                                Geschäftsbedingungen
                            </span>
                        </h1>

                        <p className="mt-6 max-w-2xl text-sm leading-7 text-white/65 sm:text-base">
                            Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle 
                            Verträge, Lieferungen und Leistungen zwischen MultiSchrank 
                            und seinen Kunden.
                        </p>
                    </div>

                    {/* content */}
                    <div className="mt-14 space-y-8">

                        {/* section */}
                        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8 backdrop-blur-xl">
                            <h2 className="text-lg font-medium">
                                1. Geltungsbereich
                            </h2>

                            <p className="mt-4 text-sm leading-7 text-white/70">
                                Diese Allgemeinen Geschäftsbedingungen gelten für alle 
                                Geschäftsbeziehungen zwischen MultiSchrank und seinen 
                                Kunden in der jeweils zum Zeitpunkt des Vertragsschlusses 
                                gültigen Fassung.
                            </p>
                        </div>


                        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8 backdrop-blur-xl">
                            <h2 className="text-lg font-medium">
                                2. Vertragsabschluss
                            </h2>

                            <p className="mt-4 text-sm leading-7 text-white/70">
                                Die Darstellung unserer Produkte auf der Website stellt 
                                kein rechtlich bindendes Angebot dar, sondern eine 
                                unverbindliche Präsentation unseres Sortiments.
                            </p>

                            <p className="mt-4 text-sm leading-7 text-white/70">
                                Ein Vertrag kommt erst zustande, wenn eine Bestellung 
                                oder ein Auftrag durch MultiSchrank bestätigt wird.
                            </p>
                        </div>


                        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8 backdrop-blur-xl">
                            <h2 className="text-lg font-medium">
                                3. Preise und Zahlung
                            </h2>

                            <p className="mt-4 text-sm leading-7 text-white/70">
                                Alle Preise verstehen sich in Euro inklusive der jeweils 
                                gültigen gesetzlichen Mehrwertsteuer, sofern nicht anders 
                                angegeben.
                            </p>

                            <p className="mt-4 text-sm leading-7 text-white/70">
                                Die Zahlung erfolgt gemäß den im Angebot oder Vertrag 
                                vereinbarten Zahlungsbedingungen.
                            </p>
                        </div>


                        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8 backdrop-blur-xl">
                            <h2 className="text-lg font-medium">
                                4. Lieferung und Leistung
                            </h2>

                            <p className="mt-4 text-sm leading-7 text-white/70">
                                Lieferzeiten werden individuell vereinbart und können 
                                je nach Projektumfang variieren. Verzögerungen aufgrund 
                                höherer Gewalt bleiben vorbehalten.
                            </p>
                        </div>


                        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8 backdrop-blur-xl">
                            <h2 className="text-lg font-medium">
                                5. Gewährleistung
                            </h2>

                            <p className="mt-4 text-sm leading-7 text-white/70">
                                Es gelten die gesetzlichen Gewährleistungsrechte gemäß 
                                den geltenden gesetzlichen Bestimmungen.
                            </p>
                        </div>


                        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8 backdrop-blur-xl">
                            <h2 className="text-lg font-medium">
                                6. Haftung
                            </h2>

                            <p className="mt-4 text-sm leading-7 text-white/70">
                                MultiSchrank haftet nur für Schäden, die auf vorsätzlichem 
                                oder grob fahrlässigem Verhalten beruhen, soweit gesetzlich 
                                zulässig.
                            </p>
                        </div>


                        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8 backdrop-blur-xl">
                            <h2 className="text-lg font-medium">
                                7. Schlussbestimmungen
                            </h2>

                            <p className="mt-4 text-sm leading-7 text-white/70">
                                Es gilt das Recht der Bundesrepublik Deutschland. 
                                Sollten einzelne Bestimmungen dieser AGB unwirksam sein, 
                                bleibt die Wirksamkeit der übrigen Bestimmungen unberührt.
                            </p>
                        </div>

                    </div>
                </section>
            </div>
        </main>
    );
}