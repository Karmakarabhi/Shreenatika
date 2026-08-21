import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles, CheckCircle2, ChevronRight } from "lucide-react";
import heroDancer from "@/assets/hero-dancer.jpg";
import { academyData } from "@/data/academy";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const { founder, forms, curriculum, timeline, gallery, testimonials, brand } = academyData;

  return (
    <main className="pt-16">
      {/* HERO SECTION */}
      <section className="relative flex min-h-[620px] w-full flex-col justify-end px-gutter pb-12 pt-28 md:min-h-[85vh] md:pb-20 lg:justify-center overflow-hidden bg-charcoal">
        <img
          src={heroDancer}
          alt="Classical dancer performing mudra pose in white and gold saree"
          width={1024}
          height={1536}
          className="absolute inset-0 h-full w-full object-cover object-[center_35%] lg:object-[75%_28%] brightness-90 transition-all duration-700"
        />
        {/* Mobile gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/60 to-charcoal/20 lg:hidden" />
        {/* Desktop left-to-right gradient overlay */}
        <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/85 to-transparent w-2/3" />
        <div className="hidden lg:block absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-charcoal/40" />

        <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-6">
          <div className="flex flex-col gap-4 max-w-2xl">
            <p className="label-caps text-rose-gold tracking-[0.2em] text-xs sm:text-sm font-semibold uppercase">
              {brand.disciplines.join("  ·  ")}
            </p>
            <h1 className="display-serif text-[42px] text-ivory sm:text-[64px] lg:text-[76px] leading-[1.05] font-normal">
              {brand.tagline}
            </h1>
            <p className="text-ivory/90 text-base sm:text-lg leading-relaxed max-w-lg mt-1">
              {brand.subheading}
            </p>
          </div>

          <div className="mt-3 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              to="/forms"
              className="btn-label rounded-sm bg-primary px-8 py-4 text-center text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-xl text-sm font-semibold uppercase tracking-wider"
            >
              Explore Dance Forms
            </Link>
            <Link
              to="/about"
              className="btn-label rounded-sm border border-rose-gold/60 backdrop-blur-md px-8 py-4 text-center text-ivory transition-colors hover:bg-rose-gold hover:text-charcoal text-sm font-semibold uppercase tracking-wider"
            >
              Meet Muktashree
            </Link>
          </div>
        </div>
      </section>

      {/* FOUNDER SPOTLIGHT */}
      <section id="artist" className="mx-auto max-w-6xl px-gutter py-section md:py-section-lg">
        <div className="grid gap-10 md:grid-cols-12 md:gap-16 items-center">
          <div className="md:col-span-6">
            <span className="label-caps text-muted-foreground uppercase tracking-widest">
              The Artist
            </span>
            <h2 className="display-serif mt-2 text-[36px] text-primary sm:text-[48px] font-normal">
              {founder.name}
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed text-base">{founder.bio[0]}</p>
            <p className="mt-4 text-muted-foreground leading-relaxed text-sm">{founder.bio[1]}</p>
            <blockquote className="mt-8 border-l-2 border-primary pl-5 font-serif text-[24px] italic leading-snug text-foreground/90 md:text-[30px]">
              “{founder.quote}”
            </blockquote>
            <div className="mt-8">
              <Link
                to="/about"
                className="btn-label group inline-flex items-center gap-2 text-primary font-semibold hover:underline"
              >
                <span>Read Muktashree's Full Journey</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
          <div className="relative md:col-span-6">
            <div className="relative overflow-hidden rounded-sm border border-rose-gold/30 shadow-xl">
              <img
                src={founder.img}
                alt={founder.alt}
                width={912}
                height={1200}
                loading="lazy"
                className="aspect-[3/4] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-4 -left-4 h-24 w-24 border-b-2 border-l-2 border-primary/40 rounded-bl" />
          </div>
        </div>
      </section>

      {/* DANCE FORMS PREVIEW */}
      <section
        id="forms"
        className="w-full border-y border-border bg-secondary/30 py-section md:py-section-lg"
      >
        <div className="mx-auto max-w-6xl px-gutter">
          <div className="flex flex-col items-center text-center gap-3 mb-16">
            <span className="label-caps text-muted-foreground uppercase tracking-widest">
              Three Traditions
            </span>
            <h2 className="display-serif text-[36px] text-primary sm:text-[48px]">
              Three forms. One language of expression.
            </h2>
          </div>

          <div className="flex flex-col gap-20">
            {forms.map((form, i) => (
              <article key={form.n} className="flex flex-col gap-6">
                <div className="flex items-baseline justify-between border-b border-border/60 pb-3">
                  <div className="flex items-baseline gap-4">
                    <span className="font-serif text-[32px] text-primary/40 font-semibold md:text-[48px]">
                      {form.n}
                    </span>
                    <h3 className="display-serif text-2xl sm:text-3xl text-foreground font-medium">
                      {form.name}
                    </h3>
                  </div>
                  {/* <span className="label-caps text-xs text-rose-gold font-semibold uppercase tracking-wider">
                    {form.tagline}
                  </span> */}
                </div>

                <div className="grid gap-6 md:grid-cols-12 items-center">
                  <div className="md:col-span-7">
                    <div className="overflow-hidden rounded-sm border border-border shadow-md">
                      <img
                        src={form.img}
                        alt={form.alt}
                        width={1024}
                        height={768}
                        loading="lazy"
                        className="h-64 w-full object-cover transition-transform duration-500 hover:scale-105 md:h-[380px]"
                      />
                    </div>
                  </div>
                  <div className="md:col-span-5 flex flex-col gap-4">
                    <p className="font-serif text-[24px] italic text-primary md:text-[28px]">
                      “{form.line}”
                    </p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {form.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {form.keywords.map((kw) => (
                        <span
                          key={kw}
                          className="rounded-full bg-background border border-border px-3 py-1 text-[11px] font-semibold text-muted-foreground uppercase tracking-wider"
                        >
                          {kw}
                        </span>
                      ))}
                    </div>
                    <Link
                      to="/forms"
                      className="btn-label group inline-flex items-center gap-2 text-xs font-semibold text-primary uppercase tracking-wider hover:underline mt-2"
                    >
                      <span>Explore {form.name} Details</span>
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PHILOSOPHY QUOTE BANNER */}
      <section className="w-full bg-primary px-gutter py-24 text-center text-primary-foreground shadow-inner">
        <div className="mx-auto max-w-4xl flex flex-col items-center gap-6">
          {/* <Sparkles className="h-8 w-8 text-rose-gold" /> */}
          <p className="display-serif text-[30px] sm:text-[42px] leading-tight font-normal">
            “Tradition is not something we preserve by standing still. We preserve it by continuing
            to interpret it.”
          </p>
          <p className="max-w-xl text-primary-foreground/80 text-sm">{brand.positioning}</p>
        </div>
      </section>

      {/* CURRICULUM HIGHLIGHTS */}
      <section id="curriculum" className="mx-auto max-w-6xl px-gutter py-section md:py-section-lg">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <span className="label-caps text-muted-foreground uppercase tracking-widest">
              The Academy
            </span>
            <h2 className="display-serif mt-1 text-[36px] text-primary sm:text-[48px]">
              Curriculum & Batches
            </h2>
          </div>
          <Link
            to="/classes"
            className="btn-label inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
          >
            <span>View All 6 Class Programs</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {curriculum.slice(0, 3).map((c) => (
            <Link
              key={c.id}
              to="/classes"
              className="group flex flex-col justify-between rounded-sm border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-primary hover:shadow-md"
            >
              <div>
                <span className="label-caps text-xs text-rose-gold font-semibold uppercase tracking-wider">
                  {c.level}
                </span>
                <h3 className="display-serif text-2xl text-foreground mt-1 group-hover:text-primary transition-colors">
                  {c.title}
                </h3>
                <p className="mt-3 text-xs text-muted-foreground leading-relaxed line-clamp-3">
                  {c.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-border/60 flex items-center justify-between text-xs text-primary font-medium">
                <span>{c.schedule}</span>
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* GALLERY PREVIEW */}
      <section
        id="gallery"
        className="w-full border-t border-border bg-card py-section md:py-section-lg"
      >
        <div className="mx-auto max-w-6xl px-gutter">
          <div className="flex items-end justify-between mb-10">
            <div>
              <span className="label-caps text-muted-foreground uppercase tracking-widest">
                In Motion
              </span>
              <h2 className="display-serif text-[36px] text-primary sm:text-[48px]">
                Visual Archive
              </h2>
            </div>
            <Link
              to="/gallery"
              className="label-caps border-b border-foreground pb-1 text-xs font-semibold uppercase tracking-wider text-foreground hover:text-primary hover:border-primary transition-colors"
            >
              View Full Gallery
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4 md:gap-6">
            {gallery[0] && (
              <img
                src={gallery[0].img}
                alt={gallery[0].alt}
                width={1280}
                height={720}
                loading="lazy"
                className="col-span-2 aspect-video w-full rounded-sm object-cover border border-border shadow-md"
              />
            )}
            {gallery[1] && (
              <img
                src={gallery[1].img}
                alt={gallery[1].alt}
                width={1024}
                height={1024}
                loading="lazy"
                className="aspect-square w-full rounded-sm object-cover border border-border shadow-sm"
              />
            )}
            {gallery[2] && (
              <img
                src={gallery[2].img}
                alt={gallery[2].alt}
                width={900}
                height={1200}
                loading="lazy"
                className="aspect-[3/4] w-full rounded-sm object-cover border border-border shadow-sm"
              />
            )}
          </div>
        </div>
      </section>

      {/* TIMELINE JOURNEY */}
      <section id="journey" className="mx-auto max-w-6xl px-gutter py-section md:py-section-lg">
        <h2 className="display-serif text-[36px] text-primary sm:text-[48px]">The Journey</h2>
        <div className="mt-12 flex flex-col gap-10 border-l border-primary/20 pl-6">
          {timeline.map((t) => (
            <div key={t.year} className="relative">
              <span className="absolute -left-[31px] top-2 h-3 w-3 rounded-full border-2 border-primary bg-background" />
              <h3 className="display-serif text-[42px] leading-none text-primary/30 sm:text-[64px]">
                {t.year}
              </h3>
              <p className="mt-2 max-w-md text-muted-foreground text-sm">{t.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS - COMMENTED OUT
      <section className="w-full bg-secondary/40 border-y border-border py-20 px-gutter">
        <div className="mx-auto max-w-5xl text-center">
          <span className="label-caps text-muted-foreground uppercase tracking-widest">
            Student Voice
          </span>
          <h2 className="display-serif text-3xl sm:text-4xl text-primary mt-2 mb-12">
            Reflections from the Studio
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col justify-between rounded-sm border border-border bg-card p-6 text-left shadow-sm"
              >
                <p className="font-serif italic text-base text-foreground/90 leading-relaxed">
                  "{item.quote}"
                </p>
                <div className="mt-6 pt-4 border-t border-border/60">
                  <p className="text-xs font-semibold text-primary uppercase tracking-wider">
                    {item.author}
                  </p>
                  <p className="text-[11px] text-muted-foreground">{item.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      */}

      {/* FINAL CTA */}
      <section className="flex w-full flex-col items-center gap-6 bg-primary px-gutter py-24 text-center text-primary-foreground">
        <h2 className="display-serif max-w-[22ch] text-[32px] sm:text-[48px] leading-tight">
          Begin your journey through movement.
        </h2>
        <p className="max-w-[36ch] text-primary-foreground/85 text-base">
          Enquire about upcoming class cohorts, workshops, or artistic performances with
          Shreenatika.
        </p>
        <Link
          to="/contact"
          className="btn-label mt-2 rounded-sm border border-primary-foreground px-10 py-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground transition-colors hover:bg-primary-foreground hover:text-primary shadow-lg"
        >
          Enquire About Classes
        </Link>
      </section>
    </main>
  );
}
