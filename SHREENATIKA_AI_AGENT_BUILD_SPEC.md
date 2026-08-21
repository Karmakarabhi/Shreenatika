# Shreenatika — AI Agent Website Build Specification

> **Purpose:** This document is the single source of truth for an AI coding agent building the Shreenatika dance academy website.
>
> **Important:** Do not start by generating random UI components. Follow the phases and constraints in this document in order. The goal is a premium, editorial, mobile-first dance academy website—not a generic Indian dance-school template.

---

## 1. Project Overview

### Brand

**Shreenatika**

### Founder

**Muktashree Sinha**

### Disciplines

- Manipuri
- Bharatanatyam
- Rabindra Nritya / Rabindra dance

### Positioning

> Shreenatika is a contemporary expression of India's classical dance heritage, shaped by tradition, discipline, and artistic storytelling.

### Brand principle

> **Traditional soul, contemporary presentation.**

The website should communicate that Shreenatika is more than a dance class. It is an artistic practice and cultural space led by an experienced dancer and teacher.

---

# 2. Primary Goal

Build a **modern, aesthetic, premium, mobile-first website** that presents:

1. Shreenatika as a distinctive dance academy and cultural brand.
2. Muktashree Sinha as the artistic founder.
3. Manipuri, Bharatanatyam, and Rabindra dance as the academy's core disciplines.
4. The philosophy and cultural depth behind the academy.
5. Classes, student experience, performances, and future enquiry options.

The website should make a visitor think:

> “This feels like an artist-led cultural institution.”

Not:

> “This looks like a generic local coaching website.”

---

# 3. Non-Goals

Do **not** build the following in V1 unless explicitly requested later:

- Complex student management system
- Login/authentication
- Online payments
- Full learning management system
- Admin CMS
- Booking engine
- Heavy backend infrastructure
- E-commerce
- Generic dashboard UI

The initial website is a **marketing / brand / portfolio / academy landing site**.

---

# 4. Design Direction

## 4.1 Core adjectives

Use these three primary adjectives as the design filter:

- **Elegant**
- **Classical**
- **Contemporary**

Secondary qualities:

- Warm
- Artistic
- Cinematic
- Human
- Cultural
- Premium
- Authentic

If a design choice conflicts with these qualities, reject it.

---

# 5. Brand Identity

## 5.1 Existing logo

A final logo has already been selected.

The logo currently has:

- Deep burgundy background
- Rose-gold / peach typography
- Classical serif wordmark
- Floral / movement-inspired symbol around the initial S
- Decorative double-line border

### Important interpretation

The logo represents **heritage and ornament**.

The website should represent **modern interpretation of that heritage**.

Therefore, do NOT copy the full decorative logo treatment into every section.

### Logo variants expected

The agent should prepare the structure to support these variants:

1. `logo-primary` — full bordered logo
2. `logo-transparent` — wordmark + symbol on transparent background
3. `logo-light` — light/peach version for dark backgrounds
4. `logo-symbol` — standalone floral/S symbol for small usage

If only the supplied logo exists initially, use it as the reference and create the UI architecture so transparent/light variants can be substituted later.

### Placement rules

- Do not use the bordered primary logo as a tiny navbar logo.
- Prefer transparent/light wordmark variants inside the website UI.
- The full bordered logo is better suited for footer, splash/loading treatment, printed assets, or dedicated brand sections.
- Never stretch or distort the logo.
- Maintain generous clear space around the logo.

---

# 6. Visual System

## 6.1 Color palette

Use the following starting palette.

```css
--color-burgundy: #650d1b;
--color-ivory: #f7f2ea;
--color-charcoal: #1a1715;
--color-rose-gold: #eba08d;
--color-beige: #d8c9b8;
```

### Color usage ratio

Aim approximately for:

- 80–85% Ivory / neutral surfaces
- 10–15% Burgundy
- 5% Rose Gold / Beige details

Charcoal is the primary text color.

### Rules

- Burgundy is an emotional anchor, not the background of the entire site.
- Rose gold is an accent, not a primary UI color.
- Gold/rose-gold should never become visually excessive.
- Avoid loud gradients.
- Avoid rainbow palettes.
- Avoid metallic CSS effects that look fake.

---

# 7. Typography

## Primary display font

**Cormorant Garamond**

Use for:

- Hero statements
- Large section headings
- Editorial quotes
- Artistic statements
- Large numbers / chapter markers when appropriate

## Interface/body font

**DM Sans**

Use for:

- Navigation
- Body copy
- Buttons
- Captions
- Labels
- Metadata
- Form fields

### Typography principle

Use serif typography for **emotion and identity**.

Use sans-serif typography for **clarity and usability**.

Do not use multiple unrelated display fonts.

---

# 8. Typography Scale

These are starting values. Tune them after visual inspection.

```css
/* Mobile */
--text-xs: 0.6875rem;
--text-sm: 0.8125rem;
--text-md: 1rem;
--text-lg: 1.25rem;
--text-xl: 1.75rem;
--text-2xl: 2.5rem;
--text-3xl: 3.5rem;
--text-display: clamp(3.5rem, 16vw, 6rem);

/* Desktop */
--text-display-desktop: clamp(5rem, 10vw, 10rem);
```

Do not blindly apply a scale. Headings should feel editorial and composition-driven.

---

# 9. Layout Principles

## The website should feel spacious.

Use:

- Large whitespace
- Strong vertical rhythm
- Thin separators
- Large image areas
- Intentional asymmetry
- Editorial cropping
- Large typography

Avoid:

- Dense card grids
- Constant rounded rectangles
- Excessive shadows
- Excessive borders
- Tiny text everywhere
- Repetitive three-card layouts

### Border style

Use thin 1px borders sparingly, mainly with low-contrast neutral or burgundy tones.

### Radius

Do not over-round everything.

Preferred:

- Images: small/no radius depending on composition
- Buttons: subtle radius or pill only when appropriate
- Large containers: square or lightly rounded

The brand should not look like a SaaS dashboard.

---

# 10. Mobile-First Strategy

This is mandatory.

Design for a phone first, then progressively enhance for tablet and desktop.

Assume many visitors will arrive from:

- Instagram
- WhatsApp
- Shared links
- Mobile search

### Mobile priorities

1. Fast visual recognition
2. Strong hero
3. Easy navigation
4. Large touch targets
5. Readable typography
6. Large photography
7. Minimal cognitive load
8. Clear enquiry CTA

### Do not simply shrink the desktop UI.

Mobile is the primary art direction.

---

# 11. Website Information Architecture

Use this initial structure:

```text
Home
│
├── Hero
├── Founder / Muktashree
├── Dance Forms
├── Philosophy
├── Academy / Classes
├── Gallery
├── Journey / Achievements
├── Testimonials
└── Contact / Join
```

Optional later:

```text
About
Classes
Gallery
Performances
Contact
```

For V1, a single long-form homepage is acceptable and preferred if the content remains readable.

---

# 12. Homepage Detailed Specification

## 12.1 Hero

### Objective

Immediately establish Shreenatika's artistic identity.

### Composition

Mobile-first concept:

```text
[small logo]                         [menu]


          FULL-BLEED DANCER IMAGE


THE LANGUAGE
OF MOVEMENT.

Manipuri · Bharatanatyam · Rabindra Nritya

                   ↓ Discover
```

### Hero requirements

- Full-height or near-full-height hero
- One dominant photograph/video
- Strong contrast between subject and background
- Editorial headline
- Small discipline metadata
- Minimal CTA
- Subtle scroll indicator

### Hero copy placeholder

**Eyebrow:**

`SHREENATIKA`

**Headline:**

> The language of movement.

**Subheading:**

> Classical dance shaped by tradition, discipline, and artistic expression.

**Disciplines:**

`MANIPURI  ·  BHARATANATYAM  ·  RABINDRA NRITYA`

**CTA:**

`Discover Shreenatika`

### Hero visual behavior

Potential motion:

- Image scale from ~1.04 to 1 during initial load
- Headline fade/translate in
- Metadata reveals with slight delay
- Scroll indicator gently moves

Keep animation slow and elegant.

---

# 13. Founder Section

## Heading

`THE ARTIST`

## Main title

`Muktashree Sinha`

## Role

`Founder & Artistic Director`

### Content

Use dummy content initially:

> Muktashree Sinha is a professionally trained dancer and teacher whose practice spans Manipuri, Bharatanatyam, and Rabindra dance. Through Shreenatika, she brings together disciplined classical training, expressive movement, and a deep connection to Indian cultural traditions.

### Layout

Mobile:

1. Eyebrow
2. Name
3. Portrait
4. Short paragraph
5. “Her Journey” CTA

Desktop:

Use an editorial split composition with asymmetric image and text.

Avoid a standard “image left, text right, rounded card” pattern.

---

# 14. Dance Forms Section

## Intro

Eyebrow:

`THREE TRADITIONS`

Heading:

> Three forms. One language of expression.

Create three visual chapters.

---

## 14.1 Manipuri

Title:

`01 — Manipuri`

Dummy description:

> Known for its grace, devotional character, soft movement, and flowing quality, Manipuri brings an understated sense of rhythm and storytelling to the stage.

Keywords:

`GRACE · DEVOTION · FLOW`

Use a large image.

---

## 14.2 Bharatanatyam

Title:

`02 — Bharatanatyam`

Dummy description:

> A disciplined classical form defined by rhythmic precision, sculptural geometry, expressive storytelling, and a powerful vocabulary of gesture.

Keywords:

`RHYTHM · GEOMETRY · EXPRESSION`

Use a large image.

---

## 14.3 Rabindra Nritya

Title:

`03 — Rabindra Nritya`

Dummy description:

> A poetic movement language shaped by the musical and literary world of Rabindranath Tagore, balancing freedom, expression, rhythm, and emotion.

Keywords:

`POETRY · EMOTION · FREEDOM`

Use a large image.

### Critical design rule

Do not turn these into three identical cards.

Each should feel like a chapter in a visual story.

---

# 15. Philosophy Section

This is an important brand-differentiation section.

### Large statement

> **Tradition is not something we preserve by standing still. We preserve it by continuing to interpret it.**

Then a short supporting paragraph:

> Shreenatika approaches classical dance as both discipline and living expression—honouring lineage while giving students the space to understand, embody, and communicate the art in their own time.

### Visual treatment

Mostly typography.

Potentially burgundy background.

Minimal decoration.

No cards.

---

# 16. Academy / Classes

### Heading

`THE ACADEMY`

### Description

> Shreenatika offers structured dance training for students who want to learn classical form, movement vocabulary, rhythm, expression, and performance with patience and discipline.

### Dummy class offerings

- Beginner Training
- Intermediate Training
- Advanced Classical Training
- Children's Classes
- Adult Classes
- Performance & Workshop Programs

### Layout

Prefer a clean list or editorial accordion over a grid of six colorful cards.

Example:

```text
01  Beginner Training                    +
02  Intermediate Training                +
03  Advanced Classical Training          +
04  Children's Classes                   +
05  Adult Classes                        +
06  Workshops & Performance Preparation  +
```

---

# 17. Gallery

## Objective

Make the photography feel like an editorial story.

### Do not use

A basic 3-column masonry grid as the only design.

### Prefer

- Full-width hero image
- Tall portrait image
- Small detail image
- Horizontal scroll on mobile
- Asymmetric desktop grid
- Overlapping or offset compositions when useful

### Image themes

Use placeholders for:

- Founder portrait
- Dance pose
- Mudra close-up
- Ghungroo
- Costume detail
- Stage performance
- Students practicing
- Teacher-student interaction

---

# 18. Journey / Achievements

Use a clean editorial timeline.

Dummy timeline:

```text
2008
Beginning of formal classical dance training

2014
First major stage performance

2018
Advanced artistic and performance training

2022
Independent teaching and performance practice

2026
Shreenatika is established
```

### Important

These are placeholders only.

Never present them as factual final biography information. Structure the code so the content can easily be replaced.

---

# 19. Testimonials

Use 3 placeholder testimonials.

Example:

> “The training has given me a deeper understanding of movement, rhythm, and expression. Every class feels intentional.”

— Student Name

> “What I value most is the balance between discipline and encouragement.”

— Parent Name

> “Shreenatika creates an environment where classical dance feels both rooted and alive.”

— Student Name

### Design

Keep it minimal.

Large quote typography + small attribution.

Do not make giant testimonial cards with avatars and star ratings.

---

# 20. Contact / Final CTA

This should be emotionally strong and visually simple.

### Heading

> Begin your journey through movement.

### Supporting text

> Enquire about classes, workshops, performances, or learning with Shreenatika.

### CTA

`Enquire About Classes`

### Contact placeholders

```text
Location: [City, State]
Phone: +91 XXXXX XXXXX
Email: hello@shreenatika.example
Instagram: @shreenatika
```

Do not invent real contact details.

---

# 21. Navigation

## Mobile

Use a minimal top bar.

Recommended structure:

```text
[Shreenatika logo]                     [Menu]
```

On menu open:

```text
HOME
THE ARTIST
DANCE FORMS
THE ACADEMY
GALLERY
CONTACT
```

Use a full-screen or large overlay menu.

### Menu behavior

- Smooth open/close animation
- Large typography
- Clear active/hover states
- Body scroll lock while open
- Escape key closes on desktop
- Keyboard accessible

### Desktop

A restrained horizontal navigation can appear:

```text
SHREENATIKA      ABOUT   FORMS   ACADEMY   GALLERY   CONTACT
```

Do not make the desktop navbar oversized.

---

# 22. Buttons / CTA Language

Use text-led buttons.

Examples:

- `Discover Shreenatika`
- `Meet Muktashree`
- `Explore the Forms`
- `View the Gallery`
- `Enquire About Classes`

Avoid generic:

- Buy Now
- Learn More everywhere
- Click Here
- Get Started

### Button appearance

Minimal border / subtle burgundy fill.

Use arrow or movement cues sparingly.

---

# 23. Motion Design

Motion should feel like **dance**, not a technology demo.

## Use

- Fade/reveal
- Soft vertical movement
- Image scale transitions
- Mask reveals
- Slow parallax
- Horizontal image movement
- Elegant page transition

## Avoid

- Bouncy animations
- Excessive spring effects
- Spinning text everywhere
- Huge text explosions
- Constant scroll hijacking
- Heavy WebGL scenes unless there is a real reason

### Recommended libraries

- **GSAP** for advanced choreography
- **Lenis** for optional smooth scrolling

Use animation progressively. Reduced-motion users must still get a complete experience.

---

# 24. Interaction Language

Every interaction should reinforce refinement.

Examples:

### Image hover

Slight image scale: `1.00 → 1.03`

### Links

A thin line may extend beneath the text.

### Buttons

Background/text transition with very short movement.

### Section reveals

Text enters with a subtle opacity + y offset.

No exaggerated movement.

---

# 25. Technical Stack

Recommended stack:

```text
Next.js
TypeScript
Tailwind CSS
GSAP
Lenis
Vercel
```

### Suggested project structure

```text
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   ├── MobileMenu.tsx
│   │   └── Footer.tsx
│   │
│   ├── hero/
│   │   └── Hero.tsx
│   │
│   ├── founder/
│   │   └── FounderSection.tsx
│   │
│   ├── dance-forms/
│   │   └── DanceForms.tsx
│   │
│   ├── philosophy/
│   │   └── Philosophy.tsx
│   │
│   ├── academy/
│   │   └── AcademySection.tsx
│   │
│   ├── gallery/
│   │   └── Gallery.tsx
│   │
│   ├── journey/
│   │   └── Journey.tsx
│   │
│   ├── testimonials/
│   │   └── Testimonials.tsx
│   │
│   └── contact/
│       └── ContactSection.tsx
│
├── data/
│   └── academy.ts
│
├── lib/
│   ├── animations.ts
│   └── utils.ts
│
└── styles/
    └── tokens.css

public/
├── assets/
│   ├── brand/
│   ├── founder/
│   ├── dance/
│   ├── academy/
│   └── gallery/
└── fonts/
```

The exact structure may differ, but responsibilities must remain separated.

---

# 26. Content Architecture

Do not hard-code all text directly into visual components.

Create a structured content object.

Example:

```ts
export const academy = {
  brand: {
    name: "Shreenatika",
    tagline: "The language of movement.",
  },

  founder: {
    name: "Muktashree Sinha",
    role: "Founder & Artistic Director",
    bio: "Dummy biography...",
    image: "/assets/founder/muktashree.jpg",
  },

  danceForms: [
    {
      id: "manipuri",
      number: "01",
      name: "Manipuri",
      description: "Dummy description...",
      keywords: ["Grace", "Devotion", "Flow"],
      image: "/assets/dance/manipuri.jpg",
    },
    // ...
  ],
};
```

This allows the final real content to be inserted later without rewriting components.

---

# 27. Image Strategy

## Placeholder phase

Until real photographs arrive, use high-quality temporary images.

Do not make placeholder images part of the final content model.

Use clear file paths so replacements are simple.

### Final image requirements

Whenever possible, obtain:

- High-resolution portrait photographs
- Full-body dance photographs
- Horizontal stage photographs
- Vertical mobile-friendly photographs
- Detail photographs
- Teaching photographs
- Student/group photographs

### Image treatment

Prefer:

- Natural skin tones
- Cinematic contrast
- Real stage lighting
- Texture
- Negative space

Avoid:

- Excessive filters
- Oversaturated colors
- Generic stock photography
- Fake AI-generated “Indian dance academy” imagery in the final site

---

# 28. Responsive Breakpoints

Start with:

```text
mobile: < 640px
small tablet: 640–767px
large tablet: 768–1023px
desktop: 1024–1279px
large desktop: 1280px+
```

Do not design around device-specific hardcoded widths.

Use fluid spacing and typography where appropriate.

---

# 29. Accessibility Requirements

Mandatory:

- Semantic HTML
- Proper heading hierarchy
- Keyboard navigable menu
- Visible focus styles
- Descriptive image alt text
- Sufficient contrast
- Reduced-motion support
- Buttons should be real `<button>` elements
- Navigation should use semantic `<nav>`
- Do not rely on animation to communicate meaning

---

# 30. Performance Requirements

The website is image-heavy, so performance matters.

### Required

- Next.js image optimization
- Correct image dimensions
- Lazy loading below-the-fold imagery
- Responsive image sizes
- Avoid serving desktop-sized images to small screens
- Compress images
- Avoid giant background videos as default
- Load fonts efficiently
- Minimize third-party scripts

### Target

The first screen should feel fast even on a normal mobile connection.

Do not sacrifice performance for decorative effects.

---

# 31. SEO Basics

Implement:

- Proper `<title>`
- Meta description
- Open Graph metadata
- Twitter/X card metadata where appropriate
- Semantic headings
- Descriptive image alt text
- Canonical URL when domain is finalized
- Structured data where useful

Potential title:

`Shreenatika — Classical Dance Academy by Muktashree Sinha`

Potential description:

`Shreenatika is a classical dance academy founded by Muktashree Sinha, offering training in Manipuri, Bharatanatyam, and Rabindra Nritya.`

Replace with final approved copy later.

---

# 32. SEO / Content Safety Around Placeholder Data

Dummy biography, achievements, dates, testimonials, and contact information must be clearly treated as temporary development data.

Do not accidentally publish fictional achievements as real facts.

Use `TODO` or `PLACEHOLDER` comments in the code/data where appropriate.

Example:

```ts
// TODO: Replace placeholder timeline with verified founder history.
```

---

# 33. Recommended Implementation Phases

## Phase 0 — Setup

- Create Next.js app
- Configure TypeScript
- Configure Tailwind
- Install animation dependencies only if needed
- Set up image folders
- Add logo asset
- Create content data model

### Deliverable

Clean project foundation.

---

## Phase 1 — Design tokens

Implement:

- Colors
- Typography
- Container widths
- Spacing
- Border styles
- Breakpoints
- Motion constants

### Deliverable

Reusable visual system.

---

## Phase 2 — Hero

Build only the hero.

Test it on:

- 360px
- 390px
- 430px
- 768px
- 1024px
- 1440px

### Deliverable

A polished responsive hero.

Do not proceed until this section feels premium.

---

## Phase 3 — Founder

Build the artist section.

### Deliverable

Hero + founder working together as one narrative.

---

## Phase 4 — Dance Forms

Build the three visual chapters.

### Deliverable

Hero + founder + dance forms.

These first three sections are the visual benchmark for the whole site.

---

## Phase 5 — Remaining sections

Build:

- Philosophy
- Academy
- Gallery
- Journey
- Testimonials
- Contact
- Footer

---

## Phase 6 — Motion

Only after static design is correct:

- Section reveals
- Image transitions
- Menu animation
- CTA interactions
- Page transitions if useful

---

## Phase 7 — Polish

Audit:

- spacing
- typography
- mobile overflow
- image crops
- contrast
- animation timing
- accessibility
- performance
- SEO

---

## Phase 8 — Deployment

Deploy to Vercel.

Verify:

- mobile
- desktop
- social previews
- metadata
- image loading
- route behavior
- production build

---

# 34. AI Agent Working Rules

These rules are mandatory for any AI coding agent working on the project.

## Rule 1 — Do not redesign the brand arbitrarily

Use the defined colors, typography, logo, and visual principles.

Do not introduce random purple/blue/green gradients or unrelated aesthetics.

## Rule 2 — Do not generate generic templates

Do not use generic “three cards + heading + CTA” layouts repeatedly.

## Rule 3 — Build mobile first

Every component must be usable and visually intentional on small screens before desktop enhancements.

## Rule 4 — Keep content editable

Use the data model rather than burying content inside JSX.

## Rule 5 — Prefer composition over decoration

A strong image crop + typography + spacing is better than adding another animation or decorative SVG.

## Rule 6 — Avoid overengineering

A simple component with clean CSS is better than introducing unnecessary abstractions.

## Rule 7 — Keep animation subtle

No animation should slow down understanding or make the page feel like a tech demo.

## Rule 8 — Preserve accessibility

Do not sacrifice semantics for visual effects.

## Rule 9 — Validate visually

After implementing each major section:

1. Run the app.
2. Inspect at mobile widths.
3. Inspect desktop.
4. Check image crops.
5. Check overflow.
6. Check text wrapping.
7. Check animation.

## Rule 10 — Do not mark fake content as final

All dummy biographies, achievements, testimonials, dates, and contact information must remain clearly replaceable.

---

# 35. Visual Quality Checklist

Before calling a section complete, verify:

### Typography

- Does the serif headline feel intentional?
- Is body text easy to read?
- Are line lengths controlled?
- Is hierarchy obvious?

### Layout

- Is there enough whitespace?
- Does the section have a visual focal point?
- Does it feel editorial rather than templated?

### Imagery

- Is the crop attractive?
- Does the image have sufficient resolution?
- Does the content have breathing room for typography?

### Brand

- Does it feel like Shreenatika?
- Is burgundy being used intentionally?
- Is the logo treated respectfully?

### Interaction

- Are animations subtle?
- Does everything remain usable without animation?
- Are touch targets large enough?

---

# 36. Definition of Done — V1

The website is considered V1 complete when:

- [ ] Homepage is fully responsive
- [ ] Mobile experience is the primary design quality benchmark
- [ ] Logo is integrated correctly
- [ ] Color system is consistent
- [ ] Typography is consistent
- [ ] Hero is visually strong
- [ ] Founder section is complete
- [ ] Three dance forms are presented as visual chapters
- [ ] Philosophy section communicates the brand clearly
- [ ] Academy/classes section is understandable
- [ ] Gallery is visually distinctive
- [ ] Journey section exists with placeholder data clearly marked
- [ ] Testimonials are replaceable
- [ ] Contact CTA works
- [ ] Navigation works on mobile and desktop
- [ ] Keyboard navigation works
- [ ] Reduced-motion support exists
- [ ] Images are optimized
- [ ] Basic SEO metadata exists
- [ ] Production build succeeds
- [ ] Site is ready for deployment to Vercel

---

# 37. Immediate First Task for the AI Agent

Do **not** build the entire website immediately.

Start with these steps only:

### Task A — Create the project foundation

Set up the Next.js + TypeScript project and the folder structure.

### Task B — Add design tokens

Implement the defined palette, typography, spacing, and basic global styles.

### Task C — Build the mobile hero

Use placeholder dance photography.

The hero must contain:

- Shreenatika logo
- Navigation/menu control
- Main artistic statement
- Dance discipline metadata
- Scroll cue

### Task D — Build founder section

Create the first narrative transition from “Shreenatika” to “Muktashree Sinha”.

### Task E — Build dance-form section

Create the three visual chapters.

### Task F — Stop and visually evaluate

Do not continue to the rest of the homepage until the first three sections feel coherent and premium.

---

# 38. Final Creative Direction

The entire website should feel like:

> **An editorial portrait of Indian classical dance.**

Not a template.

Not a cultural-event poster.

Not a startup landing page.

Not an overly decorative traditional website.

The final design language should combine:

```text
Indian classical heritage
            +
modern editorial design
            +
cinematic human photography
            +
restrained luxury
            +
subtle movement
```

The emotional experience should progress like this:

```text
SEE
↓
“This is beautiful.”

MEET
↓
“Who is Muktashree?”

UNDERSTAND
↓
“This is serious classical training.”

CONNECT
↓
“I understand what Shreenatika stands for.”

ACT
↓
“I want to enquire / learn / follow.”
```

That is the core experience the implementation must preserve.

---

# Appendix — Placeholder Content Policy

All placeholder content can be edited later.

When real content arrives, prioritize replacement in this order:

1. Founder biography
2. Founder achievements/training history
3. Dance-form descriptions
4. Classes and schedule
5. Real photography
6. Student testimonials
7. Contact information
8. Social links

The visual architecture should not need to change when these values are replaced.

---

# Appendix — Suggested Future Enhancements

Only after V1 is stable:

- Dedicated About page
- Dedicated Classes page
- Performance archive
- Blog / journal
- Events/workshops
- Instagram integration
- Enquiry form backend
- Google Maps/location section
- Structured data for local business/arts organization
- CMS for content updates
- Light/dark photographic section variants
- Advanced scroll choreography

These are future enhancements, not requirements for V1.
