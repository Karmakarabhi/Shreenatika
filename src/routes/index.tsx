import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";

import heroDancer from "@/assets/hero-dancer.jpg";
import founder from "@/assets/founder.jpg";
import formManipuri from "@/assets/form-manipuri.jpg";
import formBharatanatyam from "@/assets/form-bharatanatyam.jpg";
import formRabindra from "@/assets/form-rabindra.jpg";
import galleryGroup from "@/assets/gallery-group.jpg";
import galleryFace from "@/assets/gallery-face.jpg";
import gallerySilk from "@/assets/gallery-silk.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

const forms = [
  {
    n: "01",
    name: "Manipuri",
    line: "Grace, Devotion, Fluidity.",
    img: formManipuri,
    alt: "Manipuri dancer in traditional costume caught in motion",
    offset: false,
    align: "text-left",
  },
  {
    n: "02",
    name: "Bharatanatyam",
    line: "Rhythm, Geometry, Precision.",
    img: formBharatanatyam,
    alt: "Close-up of a Bharatanatyam dancer's hands performing a mudra",
    offset: true,
    align: "text-right",
  },
  {
    n: "03",
    name: "Rabindra Nritya",
    line: "Poetry, Freedom, Emotion.",
    img: formRabindra,
    alt: "Dancer performing Rabindra Nritya in a flowing cotton saree",
    offset: false,
    align: "text-left",
  },
];

const curriculum = [
  { title: "Foundation Training", level: "Beginner" },
  { title: "Repertoire & Technique", level: "Intermediate" },
  { title: "Artistic Expression", level: "Advanced" },
];

const timeline = [
  { year: "2008", text: "Began formal training under renowned Gurus in Kolkata." },
  { year: "2014", text: "First solo classical performance, marking the transition from student to artist." },
  { year: "2018", text: "Founded Shreenatika as a small workshop series for dedicated learners." },
  { year: "2022", text: "Expanded to a full-time academy, integrating multiple classical disciplines." },
];

const navLinks = [
  { label: "The Artist", href: "#artist" },
  { label: "Forms", href: "#forms" },
  { label: "Curriculum", href: "#curriculum" },
  { label: "Gallery", href: "#gallery" },
];

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="fixed top-0 z-50 w-full border-b border-border bg-background/85 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-gutter">
          <span className="font-serif text-lg uppercase tracking-[0.3em] text-primary">
            Shreenatika
          </span>
          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <button
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((o) => !o)}
            className="p-2 md:hidden"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
        {menuOpen && (
          <nav className="flex flex-col border-t border-border bg-background px-gutter py-4 md:hidden">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="label-caps border-b border-border/60 py-4 text-foreground last:border-0"
              >
                {item.label}
              </a>
            ))}
          </nav>
        )}
      </header>

      <main className="pt-16">
        {/* HERO */}
        <section className="relative flex min-h-[620px] w-full flex-col justify-end px-gutter pb-14 md:h-[88vh]">
          <img
            src={heroDancer}
            alt="Manipuri dancer mid-twirl in traditional Potloi costume"
            width={1024}
            height={1536}
            className="absolute inset-0 h-full w-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/35 to-charcoal/10" />
          <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-6">
            <div className="flex flex-col gap-3">
              <h1 className="display-serif max-w-[8ch] text-[48px] text-ivory md:text-[80px]">
                The language of movement.
              </h1>
              <p className="label-caps text-rose-gold">
                Manipuri · Bharatanatyam · Rabindra Nritya
              </p>
            </div>
            <p className="max-w-[36ch] text-ivory/85">
              Classical dance, reimagined through contemporary artistic expression.
            </p>
            <div className="mt-2 flex flex-col gap-3 sm:flex-row">
              <a
                href="#forms"
                className="btn-label rounded-sm bg-primary px-8 py-4 text-center text-primary-foreground transition-opacity hover:opacity-90"
              >
                Explore Shreenatika
              </a>
              <a
                href="#artist"
                className="btn-label rounded-sm border border-ivory/70 px-8 py-4 text-center text-ivory transition-colors hover:bg-ivory hover:text-charcoal"
              >
                Meet Muktashree
              </a>
            </div>
          </div>
        </section>

        {/* FOUNDER */}
        <section id="artist" className="mx-auto max-w-6xl px-gutter py-section md:py-section-lg">
          <div className="grid gap-10 md:grid-cols-12 md:gap-16">
            <div className="md:col-span-5 md:pt-12">
              <span className="label-caps text-muted-foreground">The Artist</span>
              <h2 className="display-serif mt-2 text-[32px] text-primary md:text-[48px]">
                Muktashree Sinha
              </h2>
              <p className="mt-8 text-muted-foreground">
                Muktashree Sinha is a professionally trained dancer whose artistic practice is
                rooted in Manipuri, Bharatanatyam, and Rabindra Nritya. Through Shreenatika, she
                creates a space where discipline, tradition, and individual expression meet.
              </p>
              <blockquote className="mt-8 border-l border-primary pl-5 font-serif text-[26px] italic leading-snug text-foreground/80 md:text-[32px]">
                “Dance is not only a form of movement. It is a way of remembering, feeling, and
                telling a story.”
              </blockquote>
              <a
                href="#journey"
                className="btn-label group mt-8 inline-flex items-center gap-2 text-primary"
              >
                Her journey
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
            <div className="relative md:col-span-6 md:col-start-7">
              <img
                src={founder}
                alt="Portrait of Muktashree Sinha"
                width={912}
                height={1200}
                loading="lazy"
                className="ml-auto aspect-[3/4] w-[90%] object-cover md:w-full"
              />
              <div className="absolute -bottom-6 left-0 h-24 w-24 border-b border-l border-primary/30" />
            </div>
          </div>
        </section>

        {/* FORMS */}
        <section
          id="forms"
          className="w-full border-y border-border bg-secondary/25 py-section md:py-section-lg"
        >
          <div className="mx-auto max-w-6xl px-gutter">
            <h2 className="display-serif text-center text-[32px] text-primary md:text-[48px]">
              Forms of Expression
            </h2>
            <div className="mt-16 flex flex-col gap-20">
              {forms.map((f, i) => (
                <article key={f.n} className="flex flex-col gap-4">
                  <div className="flex items-baseline gap-4">
                    <span className="font-serif text-[32px] text-primary/30 md:text-[48px]">
                      {f.n}
                    </span>
                    <h3 className="label-caps text-foreground">{f.name}</h3>
                  </div>
                  <div className={f.offset ? "ml-auto w-[85%]" : "w-full"}>
                    <img
                      src={f.img}
                      alt={f.alt}
                      width={1024}
                      height={768}
                      loading="lazy"
                      className="h-64 w-full object-cover md:h-[420px]"
                    />
                  </div>
                  <p
                    className={`mt-2 font-serif text-[26px] italic text-foreground md:text-[32px] ${f.align}`}
                  >
                    {f.line}
                  </p>
                  {i < forms.length - 1 && <div className="mt-4 h-px w-full bg-border" />}
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* PHILOSOPHY */}
        <section className="w-full bg-primary px-gutter py-24 text-center text-primary-foreground">
          <p className="display-serif mx-auto max-w-3xl text-[32px] md:text-[48px]">
            “Tradition is not something we preserve by standing still.”
          </p>
        </section>

        {/* CURRICULUM */}
        <section className="mx-auto max-w-6xl px-gutter py-section md:py-section-lg">
          <span className="label-caps text-muted-foreground">The Academy</span>
          <h2 className="display-serif mt-2 text-[32px] text-primary md:text-[48px]">Curriculum</h2>
          <div className="mt-10 flex flex-col">
            {curriculum.map((c) => (
              <a
                key={c.title}
                href="#"
                className="group flex items-center justify-between border-b border-border py-6"
              >
                <div className="flex flex-col gap-1">
                  <h3 className="text-lg text-foreground">{c.title}</h3>
                  <span className="label-caps text-muted-foreground">{c.level}</span>
                </div>
                <ArrowRight className="h-5 w-5 text-muted-foreground transition-all group-hover:translate-x-1 group-hover:text-primary" />
              </a>
            ))}
          </div>
        </section>

        {/* GALLERY */}
        <section className="w-full border-t border-border bg-card py-section md:py-section-lg">
          <div className="mx-auto max-w-6xl px-gutter">
            <div className="flex items-end justify-between">
              <h2 className="display-serif text-[32px] text-primary md:text-[48px]">In Motion</h2>
              <a href="#" className="label-caps border-b border-foreground pb-1 text-foreground">
                View All
              </a>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-4 md:gap-6">
              <img
                src={galleryGroup}
                alt="Group of classical dancers in silhouette against a warm backdrop"
                width={1280}
                height={720}
                loading="lazy"
                className="col-span-2 aspect-video w-full object-cover"
              />
              <img
                src={galleryFace}
                alt="Close-up of a dancer's expressive face"
                width={1024}
                height={1024}
                loading="lazy"
                className="mt-6 aspect-square w-full object-cover"
              />
              <img
                src={gallerySilk}
                alt="Flowing red and gold silk in mid-air"
                width={900}
                height={1200}
                loading="lazy"
                className="-mt-8 aspect-[3/4] w-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* TIMELINE */}
        <section id="journey" className="mx-auto max-w-6xl px-gutter py-section md:py-section-lg">
          <h2 className="display-serif text-[32px] text-primary md:text-[48px]">The Journey</h2>
          <div className="mt-12 flex flex-col gap-12 border-l border-primary/20 pl-6">
            {timeline.map((t) => (
              <div key={t.year} className="relative">
                <span className="absolute -left-[27px] top-3 h-[9px] w-[9px] rounded-full border-2 border-primary bg-background" />
                <h3 className="display-serif text-[48px] leading-none text-primary/30 md:text-[80px]">
                  {t.year}
                </h3>
                <p className="mt-3 max-w-md pl-1 text-muted-foreground">{t.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="flex w-full flex-col items-center gap-6 bg-primary px-gutter py-20 text-center text-primary-foreground">
          <h2 className="display-serif max-w-[20ch] text-[32px] md:text-[48px]">
            Begin your journey through movement.
          </h2>
          <p className="max-w-[34ch] text-primary-foreground/80">
            Join our upcoming cohort of foundational classes.
          </p>
          <a
            href="#"
            className="btn-label mt-2 rounded-sm border border-primary-foreground px-10 py-4 transition-colors hover:bg-primary-foreground hover:text-primary"
          >
            View Schedule
          </a>
        </section>
      </main>

      <footer className="border-t border-border bg-secondary/25 px-gutter py-16">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 text-center">
          <span className="font-serif text-xl uppercase tracking-[0.3em] text-primary">
            Shreenatika
          </span>
          <div className="grid w-full max-w-md grid-cols-2 gap-8 text-left">
            <div className="flex flex-col gap-2">
              <span className="label-caps text-muted-foreground">Navigation</span>
              {["About", "Classes", "Contact"].map((l) => (
                <a key={l} href="#" className="text-foreground hover:text-primary">
                  {l}
                </a>
              ))}
            </div>
            <div className="flex flex-col gap-2">
              <span className="label-caps text-muted-foreground">Connect</span>
              <a href="#" className="text-foreground hover:text-primary">
                Instagram
              </a>
              <a href="#" className="text-foreground hover:text-primary">
                Email
              </a>
            </div>
          </div>
          <p className="label-caps text-muted-foreground/60">© Shreenatika 2026</p>
        </div>
      </footer>
    </div>
  );
}
