import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { X, ZoomIn, Eye, Sparkles } from "lucide-react";
import { academyData, GalleryItem } from "@/data/academy";

export const Route = createFileRoute("/gallery")({
  component: GalleryPage,
});

const categories = ["All", "Manipuri", "Bharatanatyam", "Rabindra", "Stage", "Mudras"] as const;

function GalleryPage() {
  const { gallery } = academyData;
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const filteredItems =
    activeCategory === "All" ? gallery : gallery.filter((item) => item.category === activeCategory);

  return (
    <main className="pt-20">
      {/* HERO HEADER */}
      <section className="relative w-full bg-secondary/30 py-20 px-gutter border-b border-border">
        <div className="mx-auto max-w-6xl">
          <span className="label-caps text-primary tracking-widest uppercase">
            Visual Storytelling
          </span>
          <h1 className="display-serif mt-3 text-4xl sm:text-6xl text-primary font-normal">
            In Motion Gallery
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            Moments of posture, mudras, stagecraft, and expressive emotion captured across
            rehearsals and performances.
          </p>
        </div>
      </section>

      {/* FILTERABLE GALLERY GRID */}
      <section className="mx-auto max-w-6xl px-gutter py-section md:py-section-lg">
        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full px-5 py-2 text-xs font-semibold uppercase tracking-wider transition-all ${
                activeCategory === cat
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-secondary/60 text-muted-foreground hover:bg-secondary hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className="group relative cursor-pointer overflow-hidden rounded-sm border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-muted">
                <img
                  src={item.img}
                  alt={item.alt}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-charcoal/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center">
                  <div className="rounded-full bg-background/90 p-3 text-primary shadow-md transform translate-y-2 transition-transform duration-300 group-hover:translate-y-0">
                    <ZoomIn className="h-6 w-6" />
                  </div>
                </div>
              </div>
              <div className="p-4 flex items-center justify-between">
                <div>
                  <h3 className="font-serif text-base text-foreground font-medium">{item.title}</h3>
                  <span className="text-[11px] uppercase tracking-wider text-rose-gold font-semibold">
                    {item.category}
                  </span>
                </div>
                <Eye className="h-4 w-4 text-muted-foreground/60 group-hover:text-primary transition-colors" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* LIGHTBOX MODAL */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-charcoal/90 p-4 backdrop-blur-md animate-in fade-in-50 duration-200"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full overflow-hidden rounded-sm bg-background border border-rose-gold/40 shadow-2xl animate-in zoom-in-95 duration-200"
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 rounded-full bg-charcoal/80 p-2 text-ivory hover:bg-charcoal transition-colors"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="relative max-h-[75vh] w-full overflow-hidden bg-black flex items-center justify-center">
              <img
                src={selectedImage.img}
                alt={selectedImage.alt}
                className="max-h-[75vh] w-auto object-contain"
              />
            </div>

            <div className="p-6 bg-card flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-border">
              <div>
                <span className="label-caps text-xs text-rose-gold font-semibold uppercase tracking-wider">
                  {selectedImage.category}
                </span>
                <h3 className="display-serif text-2xl text-foreground mt-0.5">
                  {selectedImage.title}
                </h3>
                <p className="text-xs text-muted-foreground mt-1">{selectedImage.alt}</p>
              </div>
              <div className="flex items-center gap-2 text-xs text-primary font-serif">
                <Sparkles className="h-4 w-4" />
                <span>Shreenatika Archives</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
