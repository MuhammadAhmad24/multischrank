import React from "react";

export default function PrivacyPolicy() {
    return (
        <main className="min-h-screen bg-neutral-950 text-white">
            <div className="relative overflow-hidden">

                {/* background glow */}
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(249,115,22,0.16),transparent_32%)]" />
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[44px_44px]" />
                <div className="pointer-events-none absolute left-1/2 top-0 h-130 w-130 -translate-x-1/2 rounded-full bg-orange-500/10 blur-3xl" />

                <section className="relative mx-auto max-w-5xl px-6 pb-20 pt-32 sm:px-8 lg:px-12">

                    {/* top label */}
                    <div className="mb-8">
                        <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] uppercase tracking-[0.28em] text-orange-200 backdrop-blur-xl">
                            Datenschutz
                        </span>
                    </div>

                    {/* heading */}
                    <div className="max-w-3xl">
                        <h1 className="text-4xl font-medium leading-[0.95] tracking-[-0.04em] text-white sm:text-5xl md:text-6xl">
                            Datenschutz{" "}
                            <span className="bg-linear-to-r from-orange-200 via-orange-300 to-orange-500 bg-clip-text text-transparent">
                                Erklärung
                            </span>
                        </h1>

                        <p className="mt-6 max-w-2xl text-sm leading-7 text-white/65 sm:text-base">
                            Der Schutz Ihrer persönlichen Daten ist uns sehr wichtig.
                            In dieser Datenschutzerklärung informieren wir Sie darüber,
                            welche Daten auf unserer Website erhoben und wie diese verwendet werden.
                        </p>
                    </div>

                    {/* content */}
                    <div className="mt-14 space-y-8">

                        {/* section */}
                        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8 backdrop-blur-xl">
                            <h2 className="text-lg font-medium text-white">
                                Verantwortliche Stelle
                            </h2>

                            <p className="mt-4 text-sm leading-7 text-white/70">
                                Verantwortlich für die Datenverarbeitung auf dieser Website:
                            </p>

                            <p className="mt-4 text-sm leading-7 text-white/80">
                                MultiSchrank Inh. Oleg Morawski Gartenstr. 72 01445 Radebeul Deutschland<br /><br />
                                E-Mail: post@multischrank.de
                            </p>
                        </div>


                        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8 backdrop-blur-xl">
                            <h2 className="text-lg font-medium text-white">
                                Erhebung und Speicherung personenbezogener Daten
                            </h2>

                            <p className="mt-4 text-sm leading-7 text-white/70">
                                Beim Besuch dieser Website werden automatisch Informationen
                                durch den Server erfasst. Dazu gehören beispielsweise:
                            </p>

                            <ul className="mt-4 space-y-2 text-sm text-white/75">
                                <li>• IP-Adresse</li>
                                <li>• Browsertyp und Browserversion</li>
                                <li>• verwendetes Betriebssystem</li>
                                <li>• Referrer URL</li>
                                <li>• Uhrzeit der Serveranfrage</li>
                            </ul>

                            <p className="mt-4 text-sm leading-7 text-white/70">
                                Diese Daten dienen ausschließlich zur Sicherstellung eines
                                störungsfreien Betriebs der Website.
                            </p>
                        </div>


                        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8 backdrop-blur-xl">
                            <h2 className="text-lg font-medium text-white">
                                Kontaktformular / Kontaktaufnahme
                            </h2>

                            <p className="mt-4 text-sm leading-7 text-white/70">
                                Wenn Sie uns per E-Mail oder Kontaktformular kontaktieren,
                                werden Ihre Angaben inklusive der von Ihnen dort angegebenen
                                Kontaktdaten zum Zweck der Bearbeitung Ihrer Anfrage gespeichert.
                            </p>

                            <p className="mt-4 text-sm leading-7 text-white/70">
                                Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
                            </p>
                        </div>


                        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8 backdrop-blur-xl">
                            <h2 className="text-lg font-medium text-white">
                                Cookies
                            </h2>

                            <p className="mt-4 text-sm leading-7 text-white/70">
                                Unsere Website verwendet teilweise sogenannte Cookies.
                                Cookies richten auf Ihrem Rechner keinen Schaden an und
                                enthalten keine Viren.
                            </p>

                            <p className="mt-4 text-sm leading-7 text-white/70">
                                Cookies dienen dazu, unser Angebot nutzerfreundlicher,
                                effektiver und sicherer zu machen.
                            </p>
                        </div>


                        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8 backdrop-blur-xl">
                            <h2 className="text-lg font-medium text-white">
                                Ihre Rechte
                            </h2>

                            <p className="mt-4 text-sm leading-7 text-white/70">
                                Sie haben jederzeit das Recht auf Auskunft über Ihre gespeicherten
                                personenbezogenen Daten, deren Herkunft und Empfänger sowie den Zweck
                                der Datenverarbeitung.
                            </p>

                            <p className="mt-4 text-sm leading-7 text-white/70">
                                Außerdem haben Sie ein Recht auf Berichtigung, Sperrung oder Löschung
                                dieser Daten.
                            </p>
                        </div>

                    </div>
                </section>
            </div>
        </main>
    );
}