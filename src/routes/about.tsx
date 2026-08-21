import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles, Award, Heart, Scroll } from "lucide-react";
import { academyData } from "@/data/academy";

export const Route = createFileRoute("/about")({
  component: AboutPage,
});

function AboutPage() {
  const { founder, brand, timeline } = academyData;

  return (
    <main className="pt-20">
      {/* PAGE HERO HEADER */}
      <section className="relative w-full bg-secondary/30 py-20 px-gutter border-b border-border">
        <div className="mx-auto max-w-6xl">
          <span className="label-caps text-primary tracking-widest uppercase">
            The Artist & Founder
          </span>
          <h1 className="display-serif mt-3 text-4xl sm:text-6xl text-primary font-normal">
            {founder.name}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            {founder.role} — shaping traditional Indian dance forms into resonant contemporary
            storytelling.
          </p>
        </div>
      </section>

      {/* FOUNDER DETAILED SPOTLIGHT */}
      <section className="mx-auto max-w-6xl px-gutter py-section md:py-section-lg">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 items-center">
          <div className="relative lg:col-span-6">
            <div className="relative overflow-hidden rounded-sm border border-rose-gold/30 shadow-xl">
              <img
                src={founder.img}
                alt={founder.alt}
                className="aspect-[3/4] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-ivory">
                <p className="font-serif italic text-xl">“{founder.quote}”</p>
                <p className="mt-2 text-xs uppercase tracking-widest text-rose-gold">
                  — {founder.name}
                </p>
              </div>
            </div>
            {/* Decorative Gold Accent Frame */}
            <div className="absolute -bottom-4 -left-4 -z-10 h-full w-full rounded border-2 border-primary/20" />
          </div>

          <div className="flex flex-col gap-6 lg:col-span-6">
            <span className="label-caps text-muted-foreground uppercase tracking-widest">
              Artistic Heritage
            </span>
            <h2 className="display-serif text-3xl sm:text-4xl text-foreground">
              A discipline rooted in tradition, presented for today.
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              {founder.bio.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-4 grid grid-cols-2 gap-4 border-t border-border pt-6">
              <div className="flex items-start gap-3">
                <div className="rounded bg-primary/10 p-2 text-primary">
                  <Award className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground text-sm">Gurukul Pedagogy</h4>
                  <p className="text-xs text-muted-foreground">
                    Traditional guru-shishya discipline
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="rounded bg-primary/10 p-2 text-primary">
                  <Sparkles className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground text-sm">3 Classical Forms</h4>
                  <p className="text-xs text-muted-foreground">Manipuri, Bharatanatyam, Rabindra</p>
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-4">
              <Link
                to="/classes"
                className="btn-label rounded-sm bg-primary px-8 py-4 text-center text-primary-foreground transition-opacity hover:opacity-90"
              >
                Explore Classes
              </Link>
              <Link
                to="/contact"
                className="btn-label rounded-sm border border-border px-8 py-4 text-center text-foreground transition-colors hover:bg-secondary"
              >
                Enquire for Mentorship
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* PHILOSOPHY & VISION */}
      <section className="w-full bg-primary py-24 text-primary-foreground px-gutter text-center">
        <div className="mx-auto max-w-4xl flex flex-col items-center gap-6">
          <Scroll className="h-10 w-10 text-rose-gold" />
          <h2 className="display-serif text-3xl sm:text-5xl leading-tight">
            “Tradition is not something we preserve by standing still. We preserve it by continuing
            to interpret it.”
          </h2>
          <p className="max-w-2xl text-primary-foreground/80 text-base leading-relaxed">
            {brand.positioning}
          </p>
          <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-rose-gold/40 px-6 py-2 text-xs uppercase tracking-widest text-rose-gold">
            <Heart className="h-3.5 w-3.5" />
            <span>{brand.principle}</span>
          </div>
        </div>
      </section>

      {/* TIMELINE / JOURNEY */}
      <section className="mx-auto max-w-6xl px-gutter py-section md:py-section-lg">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="label-caps text-muted-foreground uppercase tracking-widest">
            Chronicle
          </span>
          <h2 className="display-serif text-3xl sm:text-4xl text-primary mt-2">
            The Artistic Journey
          </h2>
          <p className="mt-3 text-muted-foreground text-sm">
            Milestones that shaped Muktashree's transition from an earnest learner to a revered
            teacher.
          </p>
        </div>

        <div className="relative mx-auto max-w-3xl border-l border-primary/20 pl-8 space-y-12">
          {timeline.map((item) => (
            <div key={item.year} className="relative group">
              <span className="absolute -left-[41px] top-1.5 h-4 w-4 rounded-full border-2 border-primary bg-background transition-transform group-hover:scale-125 group-hover:bg-primary" />
              <span className="display-serif text-4xl sm:text-6xl text-primary/40 font-normal leading-none">
                {item.year}
              </span>
              <p className="mt-2 text-base text-foreground font-medium">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* NEXT STEP CTA */}
      <section className="bg-secondary/40 border-t border-border py-20 px-gutter text-center">
        <div className="mx-auto max-w-3xl flex flex-col items-center gap-6">
          <h2 className="display-serif text-3xl sm:text-4xl text-foreground">
            Experience the art of movement firsthand.
          </h2>
          <p className="text-muted-foreground max-w-md">
            Join Shreenatika Dance Academy and begin your formal classical training under Muktashree
            Sinha.
          </p>
          <Link
            to="/classes"
            className="btn-label inline-flex items-center gap-2 rounded-sm bg-primary px-8 py-4 text-primary-foreground hover:opacity-90 transition-opacity"
          >
            <span>View Academy Curriculum</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
