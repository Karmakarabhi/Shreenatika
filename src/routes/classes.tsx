import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Clock, Users, Calendar, CheckCircle2, ChevronDown } from "lucide-react";
import { academyData } from "@/data/academy";

export const Route = createFileRoute("/classes")({
  component: ClassesPage,
});

function ClassesPage() {
  const { curriculum } = academyData;
  const [expandedId, setExpandedId] = useState<string | null>("foundation");

  return (
    <main className="pt-20">
      {/* HEADER HERO */}
      <section className="relative w-full bg-secondary/30 py-20 px-gutter border-b border-border">
        <div className="mx-auto max-w-6xl">
          <span className="label-caps text-primary tracking-widest uppercase">The Academy</span>
          <h1 className="display-serif mt-3 text-4xl sm:text-6xl text-primary font-normal">
            Curriculum & Classes
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            Structured classical dance training engineered with patience, technique, rhythm, and
            expressive storytelling for all age groups.
          </p>
        </div>
      </section>

      {/* CURRICULUM ACCORDION & CARDS SECTION */}
      <section className="mx-auto max-w-6xl px-gutter py-section md:py-section-lg">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Summary & Overview */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <span className="label-caps text-muted-foreground uppercase tracking-widest">
              Training Methodology
            </span>
            <h2 className="display-serif text-3xl text-foreground">
              From foundational steps to solo performance.
            </h2>
            <p className="text-muted-foreground leading-relaxed text-sm">
              Shreenatika offers progressive learning tracks tailored for children, adult beginners,
              and advanced dancers. Each module integrates physical conditioning, rhythmic counting
              (Tala), hand mudras, and expressive Abhinaya.
            </p>

            <div className="rounded border border-border bg-card p-6 flex flex-col gap-4">
              <h3 className="font-serif text-lg text-primary">Class Highlights</h3>
              <ul className="space-y-3 text-xs text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                  <span>Small batch sizes for personalized attention</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                  <span>Bi-annual stage showcases and dance dramas</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                  <span>Dual in-person studio and hybrid masterclasses</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                  <span>Certification pathways in classical dance</span>
                </li>
              </ul>
            </div>

            <Link
              to="/contact"
              className="btn-label rounded-sm bg-primary px-6 py-4 text-center text-xs uppercase tracking-wider text-primary-foreground transition-opacity hover:opacity-90 shadow-md"
            >
              Enquire For Cohort Admission
            </Link>
          </div>

          {/* Right Interactive Accordion List */}
          <div className="lg:col-span-8 flex flex-col gap-4">
            {curriculum.map((item, idx) => {
              const isExpanded = expandedId === item.id;
              return (
                <div
                  key={item.id}
                  className={`rounded border transition-all duration-200 ${
                    isExpanded
                      ? "border-primary bg-card shadow-md"
                      : "border-border bg-background hover:border-primary/50"
                  }`}
                >
                  <button
                    onClick={() => setExpandedId(isExpanded ? null : item.id)}
                    className="w-full flex items-center justify-between p-6 text-left"
                  >
                    <div className="flex items-center gap-4">
                      <span className="font-serif text-2xl text-primary/40 font-semibold">
                        0{idx + 1}
                      </span>
                      <div>
                        <h3 className="text-xl font-medium text-foreground">{item.title}</h3>
                        <span className="label-caps text-xs text-rose-gold font-semibold uppercase tracking-wider">
                          {item.level} · {item.ageGroup}
                        </span>
                      </div>
                    </div>
                    <ChevronDown
                      className={`h-5 w-5 text-muted-foreground transition-transform duration-200 ${
                        isExpanded ? "rotate-180 text-primary" : ""
                      }`}
                    />
                  </button>

                  {isExpanded && (
                    <div className="px-6 pb-6 pt-2 border-t border-border/60 flex flex-col gap-6 animate-in fade-in-50 duration-150">
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {item.description}
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                        <div className="flex items-center gap-2 text-foreground">
                          <Calendar className="h-4 w-4 text-primary" />
                          <span>
                            Duration: <strong>{item.duration}</strong>
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-foreground">
                          <Clock className="h-4 w-4 text-primary" />
                          <span>
                            Schedule: <strong>{item.schedule}</strong>
                          </span>
                        </div>
                      </div>

                      <div className="bg-secondary/40 rounded p-4">
                        <h4 className="font-serif text-sm font-semibold text-primary mb-2">
                          Key Learning Topics
                        </h4>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-muted-foreground">
                          {item.topics.map((topic, i) => (
                            <li key={i} className="flex items-center gap-2">
                              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                              <span>{topic}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex justify-end pt-2">
                        <Link
                          to="/contact"
                          className="btn-label inline-flex items-center gap-2 text-xs text-primary font-semibold hover:underline"
                        >
                          <span>Enquire for {item.title}</span>
                          <ArrowRight className="h-3.5 w-3.5" />
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SCHEDULE & FAQ BANNER */}
      <section className="bg-primary py-16 px-gutter text-primary-foreground">
        <div className="mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col gap-2 text-center md:text-left">
            <h2 className="display-serif text-3xl sm:text-4xl">
              Have questions about class timings or levels?
            </h2>
            <p className="text-primary-foreground/80 max-w-xl text-sm">
              We conduct direct diagnostic trials to help place new students into the appropriate
              learning cohort.
            </p>
          </div>
          <Link
            to="/contact"
            className="btn-label shrink-0 rounded-sm border border-primary-foreground px-8 py-4 text-primary-foreground hover:bg-primary-foreground hover:text-primary transition-colors text-sm font-semibold uppercase tracking-wider"
          >
            Schedule Trial Session
          </Link>
        </div>
      </section>
    </main>
  );
}
