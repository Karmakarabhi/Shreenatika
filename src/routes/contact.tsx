import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { MapPin, Mail, Phone, Clock, Send, CheckCircle2, MessageSquare } from "lucide-react";
import { academyData } from "@/data/academy";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
});

function ContactPage() {
  const { contact, brand } = academyData;

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    discipline: "All / Undecided",
    experience: "Beginner",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      toast.success("Enquiry received! Muktashree & team will get back to you shortly.");
    }, 800);
  };

  return (
    <main className="pt-20">
      {/* HERO HEADER */}
      <section className="relative w-full bg-secondary/30 py-20 px-gutter border-b border-border">
        <div className="mx-auto max-w-6xl">
          <span className="label-caps text-primary tracking-widest uppercase">
            Academy Admissions
          </span>
          <h1 className="display-serif mt-3 text-4xl sm:text-6xl text-primary font-normal">
            Begin Your Journey
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            Enquire about classical dance classes, workshop admissions, solo performances, or
            artistic collaborations with Shreenatika.
          </p>
        </div>
      </section>

      {/* FORM & DETAILS CONTAINER */}
      <section className="mx-auto max-w-6xl px-gutter py-section md:py-section-lg">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Contact Details & Location */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <div>
              <span className="label-caps text-muted-foreground uppercase tracking-widest">
                Connect Directly
              </span>
              <h2 className="display-serif text-3xl text-foreground mt-1">Studio & Academy Info</h2>
              <p className="text-muted-foreground text-sm mt-2 leading-relaxed">
                We welcome prospective students, parents, and classical art enthusiasts to visit our
                Kolkata studios by prior appointment.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4 p-4 rounded border border-border bg-card">
                <div className="rounded bg-primary/10 p-2.5 text-primary shrink-0">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-serif font-medium text-foreground text-base">
                    Studio Address
                  </h4>
                  <p className="text-xs text-muted-foreground mt-0.5">{contact.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded border border-border bg-card">
                <div className="rounded bg-primary/10 p-2.5 text-primary shrink-0">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-serif font-medium text-foreground text-base">
                    Email Enquiries
                  </h4>
                  <a
                    href={`mailto:${contact.email}`}
                    className="text-xs text-primary hover:underline"
                  >
                    {contact.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded border border-border bg-card">
                <div className="rounded bg-primary/10 p-2.5 text-primary shrink-0">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-serif font-medium text-foreground text-base">
                    Phone & WhatsApp
                  </h4>
                  <a
                    href={`tel:${contact.phone}`}
                    className="text-xs text-primary hover:underline block"
                  >
                    {contact.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded border border-border bg-card">
                <div className="rounded bg-primary/10 p-2.5 text-primary shrink-0">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-serif font-medium text-foreground text-base">
                    Studio Timings
                  </h4>
                  <p className="text-xs text-muted-foreground mt-0.5">{contact.hours}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Interactive Form */}
          <div className="lg:col-span-7">
            <div className="rounded-sm border border-rose-gold/30 bg-card p-8 shadow-xl">
              {submitted ? (
                <div className="flex flex-col items-center justify-center text-center py-12 gap-4 animate-in fade-in-50">
                  <div className="rounded-full bg-primary/10 p-4 text-primary">
                    <CheckCircle2 className="h-12 w-12" />
                  </div>
                  <h3 className="display-serif text-3xl text-primary">
                    Thank You for Your Enquiry!
                  </h3>
                  <p className="text-muted-foreground text-sm max-w-md">
                    Your request has been received. Muktashree Sinha & team will reach out to you
                    via email or phone within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="btn-label mt-4 rounded-sm border border-primary px-6 py-2 text-xs uppercase tracking-wider text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  <div>
                    <h3 className="display-serif text-2xl text-primary">Academy Class Enquiry</h3>
                    <p className="text-xs text-muted-foreground mt-1">
                      Fill in your details below to request cohort placement or scheduling
                      information.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-semibold uppercase tracking-wider text-foreground">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Ananya Roy"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="rounded border border-input bg-background px-3.5 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-semibold uppercase tracking-wider text-foreground">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="ananya@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="rounded border border-input bg-background px-3.5 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-semibold uppercase tracking-wider text-foreground">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98300 00000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="rounded border border-input bg-background px-3.5 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-semibold uppercase tracking-wider text-foreground">
                        Preferred Discipline
                      </label>
                      <select
                        value={formData.discipline}
                        onChange={(e) => setFormData({ ...formData, discipline: e.target.value })}
                        className="rounded border border-input bg-background px-3.5 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none"
                      >
                        <option value="All / Undecided">All / Undecided</option>
                        <option value="Manipuri">Manipuri</option>
                        <option value="Bharatanatyam">Bharatanatyam</option>
                        <option value="Rabindra Nritya">Rabindra Nritya</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold uppercase tracking-wider text-foreground">
                      Experience Level
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {["Beginner", "Intermediate", "Advanced"].map((lvl) => (
                        <button
                          type="button"
                          key={lvl}
                          onClick={() => setFormData({ ...formData, experience: lvl })}
                          className={`rounded border py-2 text-xs font-medium transition-colors ${
                            formData.experience === lvl
                              ? "border-primary bg-primary text-primary-foreground font-semibold"
                              : "border-input bg-background text-muted-foreground hover:border-primary/50"
                          }`}
                        >
                          {lvl}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold uppercase tracking-wider text-foreground">
                      Your Message / Specific Questions
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Tell us about your background or timing preferences..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="rounded border border-input bg-background px-3.5 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-label w-full rounded-sm bg-primary py-4 text-center text-xs font-semibold uppercase tracking-wider text-primary-foreground shadow-md transition-opacity hover:opacity-90 disabled:opacity-50 flex items-center justify-center gap-2"
                  >
                    <Send className="h-4 w-4" />
                    <span>{isSubmitting ? "Sending Enquiry..." : "Submit Enquiry"}</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
