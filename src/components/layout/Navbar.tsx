import { Link, useLocation } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import logoImg from "@/assets/logo.png";

const navItems = [
  { label: "Home", href: "/" },
  { label: "The Artist", href: "/about" },
  { label: "Forms", href: "/forms" },
  { label: "Academy", href: "/classes" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-border/80 bg-background/90 backdrop-blur-md shadow-sm py-2"
          : "bg-background/70 backdrop-blur-sm py-3"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-gutter">
        {/* Brand Logo & Title */}
        <Link to="/" className="group flex items-center gap-3">
          <div className="relative h-10 w-auto min-w-[90px] overflow-hidden rounded-sm border border-rose-gold/40 shadow-sm transition-all group-hover:border-rose-gold group-hover:shadow-md">
            <img
              src={logoImg}
              alt="Shreenatika Logo"
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="hidden flex-col sm:flex">
            <span className="font-serif text-lg font-medium uppercase tracking-[0.25em] text-primary transition-colors group-hover:text-primary/80">
              Shreenatika
            </span>
            <span className="text-[10px] tracking-widest uppercase text-muted-foreground">
              Dance Academy
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <Link
                key={item.label}
                to={item.href}
                className={`relative py-1 text-sm font-medium transition-colors hover:text-primary ${
                  isActive ? "text-primary font-semibold" : "text-muted-foreground"
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 h-[2px] w-full rounded-full bg-primary" />
                )}
              </Link>
            );
          })}
          <Link
            to="/contact"
            className="btn-label rounded-sm bg-primary px-5 py-2 text-xs font-semibold uppercase tracking-wider text-primary-foreground shadow-sm transition-all hover:bg-primary/90 hover:shadow"
          >
            Enquire Now
          </Link>
        </nav>

        {/* Mobile Menu Toggle Button */}
        <button
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((o) => !o)}
          className="flex items-center justify-center rounded-md border border-border/80 bg-background/80 p-2 text-foreground transition-colors hover:bg-muted md:hidden"
        >
          {menuOpen ? <X className="h-6 w-6 text-primary" /> : <Menu className="h-6 w-6 text-foreground" />}
        </button>
      </div>

      {/* Mobile Navigation Drawer / Overlay */}
      {menuOpen && (
        <div className="fixed inset-x-0 top-[60px] z-40 flex flex-col border-b border-border bg-background px-gutter py-6 shadow-2xl animate-in slide-in-from-top-2 duration-200 md:hidden">
          <nav className="flex flex-col gap-1">
            {navItems.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <Link
                  key={item.label}
                  to={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={`flex items-center justify-between border-b border-border/40 py-3.5 px-2 text-base font-serif transition-colors ${
                    isActive
                      ? "text-primary font-semibold bg-primary/5 rounded-sm"
                      : "text-foreground hover:text-primary"
                  }`}
                >
                  <span>{item.label}</span>
                  <ArrowUpRight
                    className={`h-4 w-4 ${isActive ? "text-primary" : "text-muted-foreground/50"}`}
                  />
                </Link>
              );
            })}
          </nav>
          <div className="mt-6 pt-4 border-t border-border/60 flex flex-col gap-3">
            <Link
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className="btn-label w-full rounded-sm bg-primary py-3 text-center text-sm font-semibold uppercase tracking-wider text-primary-foreground shadow"
            >
              Enquire About Classes
            </Link>
            <p className="text-center text-xs text-muted-foreground pt-2">
              Manipuri · Bharatanatyam · Rabindra Nritya
            </p>
          </div>
        </div>
      )}
    </header>
  );
}
