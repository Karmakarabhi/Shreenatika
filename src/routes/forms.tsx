import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles, Feather, Compass, Layers } from "lucide-react";
import { academyData } from "@/data/academy";

export const Route = createFileRoute("/forms")({
  component: DanceFormsPage,
});

function DanceFormsPage() {
  const { forms } = academyData;

  return (
    <main className="pt-20">
      {/* HERO HEADER */}
      <section className="relative w-full bg-secondary/30 py-20 px-gutter border-b border-border">
        <div className="mx-auto max-w-6xl">
          <span className="label-caps text-primary tracking-widest uppercase">
            Classical Traditions
          </span>
          <h1 className="display-serif mt-3 text-4xl sm:text-6xl text-primary font-normal">
            Forms of Expression
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            Three distinctive classical Indian dance traditions taught under one unified artistic
            vision at Shreenatika.
          </p>
        </div>
      </section>

      {/* DISCIPLINE CHAPTERS */}
      <section className="mx-auto max-w-6xl px-gutter py-section md:py-section-lg">
        <div className="flex flex-col gap-24">
          {forms.map((form) => (
            <article
              key={form.id}
              id={form.id}
              className="grid gap-10 lg:grid-cols-12 lg:gap-16 items-center scroll-mt-24"
            >
              {/* Form Visual Image */}
              <div className={`lg:col-span-5 ${form.offset ? "lg:order-2" : "lg:order-1"}`}>
                <div className="relative overflow-hidden rounded-sm border border-rose-gold/30 shadow-xl group">
                  <img
                    src={form.img}
                    alt={form.alt}
                    className="aspect-[3/4] max-h-[520px] w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-charcoal/80 text-rose-gold px-4 py-1 font-serif text-xl border border-rose-gold/30 backdrop-blur-md rounded-sm">
                    {form.n}
                  </div>
                  <div className="absolute bottom-4 right-4 bg-background/85 backdrop-blur-md px-4 py-2 text-xs font-semibold text-primary uppercase tracking-widest rounded-sm">
                    {form.name}
                  </div>
                </div>
              </div>

              {/* Form Content & Details */}
              <div
                className={`lg:col-span-7 ${form.offset ? "lg:order-1" : "lg:order-2"} flex flex-col gap-6`}
              >
                <div>
                  <span className="label-caps text-rose-gold font-semibold uppercase tracking-widest">
                    {form.tagline}
                  </span>
                  <h2 className="display-serif text-3xl sm:text-5xl text-primary mt-1">
                    {form.name}
                  </h2>
                </div>

                <p className="font-serif italic text-2xl text-foreground/90 border-l-2 border-primary pl-4">
                  “{form.line}”
                </p>

                <p className="text-muted-foreground leading-relaxed text-sm">{form.description}</p>

                <div className="bg-card rounded border border-border p-6 space-y-4">
                  <h4 className="font-serif text-lg text-foreground flex items-center gap-2">
                    <Feather className="h-4 w-4 text-primary" />
                    <span>Heritage & Characteristics</span>
                  </h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {form.details.history}
                  </p>
                  <div className="border-t border-border/60 pt-3 space-y-2">
                    <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                      Key Elements
                    </span>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-muted-foreground">
                      {form.details.characteristics.map((char, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                          <span>{char}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  {form.keywords.map((kw) => (
                    <span
                      key={kw}
                      className="rounded-full border border-border bg-secondary/50 px-4 py-1 text-xs uppercase tracking-widest text-foreground font-medium"
                    >
                      {kw}
                    </span>
                  ))}
                </div>

                <div className="pt-2">
                  <Link
                    to="/classes"
                    className="btn-label inline-flex items-center gap-2 rounded-sm bg-primary px-6 py-3 text-xs uppercase tracking-wider text-primary-foreground hover:opacity-90 transition-opacity"
                  >
                    <span>Learn {form.name} at Shreenatika</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* SYNTHESIS & CALLOUT */}
      <section className="bg-charcoal py-20 px-gutter text-ivory text-center">
        <div className="mx-auto max-w-3xl flex flex-col items-center gap-6">
          <Sparkles className="h-8 w-8 text-rose-gold" />
          <h2 className="display-serif text-3xl sm:text-4xl text-rose-gold">
            Harmonious Synthesis of Indian Classical Heritage
          </h2>
          <p className="text-ivory/80 text-base leading-relaxed">
            At Shreenatika, students develop versatility across graceful fluid movements (Manipuri),
            crisp mathematical geometry (Bharatanatyam), and poetic Tagorean lyricism (Rabindra
            Nritya).
          </p>
          <Link
            to="/contact"
            className="btn-label mt-4 rounded-sm border border-rose-gold/60 px-8 py-4 text-rose-gold hover:bg-rose-gold hover:text-charcoal transition-colors text-sm font-semibold uppercase tracking-wider"
          >
            Enquire About Disciplines
          </Link>
        </div>
      </section>
    </main>
  );
}
