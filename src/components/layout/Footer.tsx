import { Link } from "@tanstack/react-router";
import logoImg from "@/assets/logo.png";
import { academyData } from "@/data/academy";

export function Footer() {
  return (
    <footer className="border-t border-border bg-charcoal text-ivory px-gutter py-16">
      <div className="mx-auto flex max-w-6xl flex-col gap-12">
        {/* Top Footer Section */}
        <div className="grid gap-10 md:grid-cols-12 md:gap-8">
          {/* Brand Info & Logo */}
          <div className="flex flex-col gap-4 md:col-span-5">
            <Link to="/" className="flex items-center gap-4 group w-fit">
              <div className="h-14 w-auto min-w-[120px] overflow-hidden rounded border border-rose-gold/40 shadow-md transition-transform group-hover:scale-105">
                <img
                  src={logoImg}
                  alt="Shreenatika Logo"
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-2xl font-normal uppercase tracking-[0.25em] text-rose-gold">
                  Shreenatika
                </span>
                <span className="text-xs tracking-widest text-ivory/60 uppercase">
                  Indian Classical Dance Academy
                </span>
              </div>
            </Link>
            <p className="mt-2 max-w-sm text-sm text-ivory/70 leading-relaxed">
              {academyData.brand.positioning}
            </p>
            <div className="mt-2 flex items-center gap-2 text-xs text-rose-gold/80">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-rose-gold" />
              <span>{academyData.brand.principle}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="grid grid-cols-2 gap-8 md:col-span-4">
            <div className="flex flex-col gap-3">
              <span className="label-caps text-xs text-rose-gold/90 uppercase tracking-widest">
                Navigation
              </span>
              <Link to="/" className="text-sm text-ivory/80 hover:text-rose-gold transition-colors">
                Home
              </Link>
              <Link
                to="/about"
                className="text-sm text-ivory/80 hover:text-rose-gold transition-colors"
              >
                The Artist
              </Link>
              <Link
                to="/forms"
                className="text-sm text-ivory/80 hover:text-rose-gold transition-colors"
              >
                Dance Forms
              </Link>
              <Link
                to="/classes"
                className="text-sm text-ivory/80 hover:text-rose-gold transition-colors"
              >
                The Academy
              </Link>
              <Link
                to="/gallery"
                className="text-sm text-ivory/80 hover:text-rose-gold transition-colors"
              >
                In Motion Gallery
              </Link>
              <Link
                to="/contact"
                className="text-sm text-ivory/80 hover:text-rose-gold transition-colors"
              >
                Contact & Enquiry
              </Link>
            </div>

            <div className="flex flex-col gap-3">
              <span className="label-caps text-xs text-rose-gold/90 uppercase tracking-widest">
                Disciplines
              </span>
              <Link
                to="/forms"
                hash="manipuri"
                className="text-sm text-ivory/80 hover:text-rose-gold transition-colors"
              >
                Manipuri
              </Link>
              <Link
                to="/forms"
                hash="bharatanatyam"
                className="text-sm text-ivory/80 hover:text-rose-gold transition-colors"
              >
                Bharatanatyam
              </Link>
              <Link
                to="/forms"
                hash="rabindra-nritya"
                className="text-sm text-ivory/80 hover:text-rose-gold transition-colors"
              >
                Rabindra Nritya
              </Link>
              <span className="mt-3 label-caps text-xs text-rose-gold/90 uppercase tracking-widest">
                Classes
              </span>
              <Link
                to="/classes"
                className="text-sm text-ivory/80 hover:text-rose-gold transition-colors"
              >
                Beginner to Advanced
              </Link>
            </div>
          </div>

          {/* Contact Details */}
          <div className="flex flex-col gap-3 md:col-span-3">
            <span className="label-caps text-xs text-rose-gold/90 uppercase tracking-widest">
              Academy Contact
            </span>
            <p className="text-sm text-ivory/80">{academyData.contact.location}</p>
            <a
              href={`mailto:${academyData.contact.email}`}
              className="text-sm text-ivory/80 hover:text-rose-gold transition-colors"
            >
              {academyData.contact.email}
            </a>
            <a
              href={`tel:${academyData.contact.phone}`}
              className="text-sm text-ivory/80 hover:text-rose-gold transition-colors"
            >
              {academyData.contact.phone}
            </a>

            <div className="mt-4 flex items-center gap-4">
              <a
                href={academyData.contact.socials.instagram}
                target="_blank"
                rel="noreferrer"
                className="text-xs uppercase tracking-wider text-rose-gold hover:underline"
              >
                Instagram
              </a>
              <a
                href={academyData.contact.socials.facebook}
                target="_blank"
                rel="noreferrer"
                className="text-xs uppercase tracking-wider text-rose-gold hover:underline"
              >
                Facebook
              </a>
              <a
                href={academyData.contact.socials.youtube}
                target="_blank"
                rel="noreferrer"
                className="text-xs uppercase tracking-wider text-rose-gold hover:underline"
              >
                YouTube
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-ivory/15 pt-8 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-ivory/60">
            © {new Date().getFullYear()} Shreenatika Dance Academy. All rights reserved.
          </p>
          <p className="text-xs text-ivory/60">
            Artistic Leadership by{" "}
            <span className="text-rose-gold">{academyData.brand.founderName}</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
