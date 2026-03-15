import React from "react";

export default function Impressum() {
    return (
        <main className="min-h-screen bg-neutral-950 text-white">
            <div className="relative overflow-hidden">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(249,115,22,0.16),transparent_32%)]" />
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[44px_44px]" />
                <div className="pointer-events-none absolute left-1/2 top-0 h-130 w-130 -translate-x-1/2 rounded-full bg-orange-500/10 blur-3xl" />

                <section className="relative mx-auto max-w-5xl px-6 pb-20 pt-32 sm:px-8 lg:px-12">
                    <div className="mb-8">
                        <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] uppercase tracking-[0.28em] text-orange-200 backdrop-blur-xl">
                            Impressum
                        </span>
                    </div>

                    <div className="max-w-3xl">
                        <h1 className="text-4xl font-medium leading-[0.95] tracking-[-0.04em] text-white sm:text-5xl md:text-6xl">
                            Rechtliche{" "}
                            <span className="bg-linear-to-r from-orange-200 via-orange-300 to-orange-500 bg-clip-text text-transparent">
                                Informationen
                            </span>
                        </h1>

                        <p className="mt-6 max-w-2xl text-sm leading-7 text-white/65 sm:text-base">
                            Angaben gemäß § 5 TMG.
                        </p>
                    </div>

                    <div className="mt-14 grid gap-6 md:grid-cols-2">
                        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_10px_40px_rgba(0,0,0,0.28)] backdrop-blur-xl sm:p-8">
                            <h2 className="text-lg font-medium text-white">
                                Angaben zum Unternehmen
                            </h2>

                            <div className="mt-6 space-y-5 text-sm leading-7 text-white/75 sm:text-[15px]">
                                <div>
                                    <p className="text-white/45">Unternehmen</p>
                                    <p className="mt-1 text-white">MultiSchrank</p>
                                </div>

                                <div>
                                    <p className="text-white/45">Inhaber</p>
                                    <p className="mt-1 text-white">Oleg Morawski</p>
                                </div>

                                <div>
                                    <p className="text-white/45">Adresse</p>
                                    <p className="mt-1 text-white">
                                        Gartenstr. 72
                                        <br />
                                        01445 Radebeul
                                        <br />
                                        Deutschland
                                    </p>
                                </div>

                                <div>
                                    <p className="text-white/45">Kontakt</p>
                                    <p className="mt-1 text-white">
                                        Telefon: +49 155 63440433
                                        <br />
                                        E-Mail: post@multischrank.de
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_10px_40px_rgba(0,0,0,0.28)] backdrop-blur-xl sm:p-8">
                            <h2 className="text-lg font-medium text-white">
                                Weitere Pflichtangaben
                            </h2>

                            <div className="mt-6 space-y-5 text-sm leading-7 text-white/75 sm:text-[15px]">
                                <div>
                                    <p className="text-white/45">Unternehmensform</p>
                                    <p className="mt-1 text-white">
                                        MultiSchrank Inh. Oleg Morawski
                                    </p>
                                </div>

                                <div>
                                    <p className="text-white/45">
                                        Verantwortlich für den Inhalt
                                    </p>
                                    <p className="mt-1 text-white">
                                        Oleg Morawski
                                        <br />
                                        Gartenstr. 72
                                        <br />
                                        01445 Radebeul
                                        <br />
                                        Deutschland
                                    </p>
                                </div>

                                <div>
                                    <p className="text-white/45">E-Mail</p>
                                    <p className="mt-1 text-white">
                                        post@multischrank.de
                                    </p>
                                </div>

                                <div>
                                    <p className="text-white/45">Telefon</p>
                                    <p className="mt-1 text-white">
                                        +49 155 63440433
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 grid gap-6">
                        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl sm:p-8">
                            <h2 className="text-lg font-medium text-white">
                                Haftung für Inhalte
                            </h2>
                            <p className="mt-4 text-sm leading-7 text-white/70 sm:text-[15px]">
                                Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene
                                Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
                                verantwortlich. Nach §§ 8 bis 10 TMG sind wir als
                                Diensteanbieter jedoch nicht verpflichtet, übermittelte oder
                                gespeicherte fremde Informationen zu überwachen oder nach
                                Umständen zu forschen, die auf eine rechtswidrige Tätigkeit
                                hinweisen.
                            </p>
                        </div>

                        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl sm:p-8">
                            <h2 className="text-lg font-medium text-white">
                                Haftung für Links
                            </h2>
                            <p className="mt-4 text-sm leading-7 text-white/70 sm:text-[15px]">
                                Unser Angebot enthält Links zu externen Websites Dritter, auf
                                deren Inhalte wir keinen Einfluss haben. Deshalb können wir für
                                diese fremden Inhalte auch keine Gewähr übernehmen. Für die
                                Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter
                                oder Betreiber der Seiten verantwortlich.
                            </p>
                        </div>

                        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl sm:p-8">
                            <h2 className="text-lg font-medium text-white">
                                Urheberrecht
                            </h2>
                            <p className="mt-4 text-sm leading-7 text-white/70 sm:text-[15px]">
                                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
                                diesen Seiten unterliegen dem deutschen Urheberrecht. Die
                                Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
                                Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
                                schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}