import { Link, useLocation } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import shreenatikaVector from "@/assets/ShreenatikaVector.svg";
import { MenuToggle } from "@/components/ui/menu-toggle";

const navItems = [
  { number: "01", label: "Home", href: "/" },
  { number: "02", label: "The Artist", href: "/about" },
  { number: "03", label: "The Forms", href: "/forms" },
  { number: "04", label: "Learn", href: "/classes" },
  { number: "05", label: "Gallery", href: "/gallery" },
  { number: "06", label: "Contact", href: "/contact" },
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
          <div className="relative h-10 w-auto min-w-[122px] overflow-hidden rounded-sm transition-all group-hover:shadow-md">
            <img
              src={shreenatikaVector}
              alt="Shreenatika Logo"
              className="h-full w-full object-contain"
            />
          </div>
          <div className="hidden">
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
        <div className="flex items-center justify-center p-2.5 text-foreground md:hidden">
          <MenuToggle
            open={menuOpen}
            onOpenChange={setMenuOpen}
            className="size-6 text-foreground"
          />
        </div>
      </div>

      {/* Mobile Navigation Drawer / Overlay */}
      {menuOpen && (
        <div className="fixed inset-x-0 top-[60px] z-40 flex min-h-[calc(100vh-60px)] flex-col bg-background/95 backdrop-blur-md px-8 py-8 animate-in slide-in-from-top-2 duration-200 md:hidden">
          {/* Navigation Items */}
          <nav className="flex flex-col">
            {navItems.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <Link
                  key={item.label}
                  to={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="group border-b border-border/40 py-5"
                >
                  <div className="flex items-baseline gap-4">
                    <span className="font-serif text-[14px] text-muted-foreground/50 transition-colors group-hover:text-primary/70">
                      {item.number}
                    </span>
                    <span
                      className={`font-serif text-[28px] leading-tight transition-colors ${
                        isActive ? "text-primary" : "text-foreground group-hover:text-primary"
                      }`}
                    >
                      {item.label}
                    </span>
                  </div>
                </Link>
              );
            })}
          </nav>

          {/* Brand Statement */}
          <div className="mt-auto pt-12 pb-8">
            <p className="font-serif text-[26px] italic leading-snug text-foreground/80">
              The language of movement.
            </p>
            <p className="mt-4 label-caps text-[11px] text-muted-foreground">
              Manipuri · Bharatanatyam · Rabindra Nritya
            </p>
          </div>

          {/* CTA Button */}
          <Link
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className="w-full rounded-sm border border-primary bg-primary py-4 text-center text-sm font-semibold uppercase tracking-wider text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Enquire About Classes
          </Link>
        </div>
      )}
    </header>
  );
}
