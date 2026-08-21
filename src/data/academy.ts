import heroDancer from "@/assets/hero-dancer.jpg";
import founder from "@/assets/founder.jpg";
import formManipuri from "@/assets/form-manipuri.jpg";
import formBharatanatyam from "@/assets/form-bharatanatyam.jpg";
import formRabindra from "@/assets/form-rabindra.jpg";
import galleryGroup from "@/assets/gallery-group.jpg";
import galleryFace from "@/assets/gallery-face.jpg";
import gallerySilk from "@/assets/gallery-silk.jpg";
import logo from "@/assets/logo.png";

export interface DanceForm {
  id: string;
  n: string;
  name: string;
  tagline: string;
  line: string;
  description: string;
  keywords: string[];
  img: string;
  alt: string;
  offset?: boolean;
  align?: string;
  details: {
    history: string;
    characteristics: string[];
    elements: string[];
  };
}

export interface ClassOffering {
  id: string;
  title: string;
  level: string;
  ageGroup: string;
  duration: string;
  description: string;
  topics: string[];
  schedule: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: "Manipuri" | "Bharatanatyam" | "Rabindra" | "Stage" | "Mudras";
  img: string;
  alt: string;
  aspect?: string;
}

export const academyData = {
  brand: {
    name: "Shreenatika",
    founderName: "Muktashree Sinha",
    founderTitle: "Founder & Artistic Director",
    tagline: "The language of movement.",
    subheading: "Classical dance, reimagined through contemporary artistic expression.",
    positioning:
      "Shreenatika is a contemporary expression of India's classical dance heritage, shaped by tradition, discipline, and artistic storytelling.",
    principle: "Traditional soul, contemporary presentation.",
    logo: logo,
    disciplines: ["Manipuri", "Bharatanatyam", "Rabindra Nritya"],
  },

  founder: {
    name: "Muktashree Sinha",
    role: "Founder & Artistic Director",
    quote:
      "Dance is not only a form of movement. It is a way of remembering, feeling, and telling a story.",
    bio: [
      "Muktashree Sinha is a professionally trained classical dancer, choreographer, and educator whose artistic journey spans Manipuri, Bharatanatyam, and Rabindra Nritya.",
      "Trained under celebrated Gurus in Kolkata and traditional dance hubs, Muktashree brings a nuanced aesthetic balance to her teaching—respecting ancient movement geometry while making classical forms resonant for contemporary learners.",
      "Through Shreenatika, she nurtures students not just in physical technique, but in body awareness, musicality, emotional expression (Abhinaya), and artistic confidence.",
    ],
    img: founder,
    alt: "Portrait of Muktashree Sinha, Founder of Shreenatika",
  },

  forms: [
    {
      id: "manipuri",
      n: "01",
      name: "Manipuri",
      tagline: "Grace · Devotion · Flow",
      line: "Grace, Devotion, Fluidity.",
      description:
        "Originating from the northeastern state of Manipur, Manipuri is defined by soft, undulating movement, delicate hand gestures, and a deeply devotional character. It captures effortless fluid poise without harsh body angles.",
      keywords: ["GRACE", "DEVOTION", "FLOW"],
      img: formManipuri,
      alt: "Manipuri dancer in traditional costume caught in fluid motion",
      offset: false,
      align: "text-left",
      details: {
        history:
          "Rooted in the mythic Rasleela and traditional Lai Haraoba rituals of Manipur, this dance form invokes spiritual ecstasy through gentle body sways (Chali) and serpentine wrist movements.",
        characteristics: [
          "Curvilinear body movements (Komalgati)",
          "Devotional Rasa without exaggerated facial strain",
          "Distinctive costume featuring the cylindrical stiff skirt (Kumil/Potloi)",
        ],
        elements: ["Chali", "Pareng", "Rasleela repertoire", "Pung Cholom rhythm patterns"],
      },
    },
    {
      id: "bharatanatyam",
      n: "02",
      name: "Bharatanatyam",
      tagline: "Rhythm · Geometry · Precision",
      line: "Rhythm, Geometry, Precision.",
      description:
        "One of India's oldest classical dance traditions from Tamil Nadu, Bharatanatyam is celebrated for crisp geometrical lines, dynamic footwork (Adavus), and elaborate mudras for expressive storytelling.",
      keywords: ["RHYTHM", "GEOMETRY", "EXPRESSION"],
      img: formBharatanatyam,
      alt: "Close-up of a Bharatanatyam dancer's hands performing a Mudra",
      offset: true,
      align: "text-right",
      details: {
        history:
          "Preserved across centuries in temples and royal courts, Bharatanatyam synthesizes Nritta (pure rhythm), Nritya (solo expressive piece), and Natya (dramatic storytelling).",
        characteristics: [
          "Half-seated knees-out stance (Araimandi)",
          "Crisp linear geometry of hands and torso",
          "Complex rhythmic footwork synced to Carnatic Talam",
        ],
        elements: ["Alarippu", "Jatiswaram", "Shabdam", "Varnam", "Padam", "Tillana"],
      },
    },
    {
      id: "rabindra-nritya",
      n: "03",
      name: "Rabindra Nritya",
      tagline: "Poetry · Freedom · Emotion",
      line: "Poetry, Freedom, Emotion.",
      description:
        "Conceived by Nobel Laureate Rabindranath Tagore at Visva-Bharati, Santiniketan. Rabindra Nritya integrates classical technique with lyrical freedom to translate Tagorean songs and dance-dramas into emotive movement.",
      keywords: ["POETRY", "EMOTION", "FREEDOM"],
      img: formRabindra,
      alt: "Dancer performing Rabindra Nritya in a flowing traditional saree",
      offset: false,
      align: "text-left",
      details: {
        history:
          "Tagore envisioned a modern Indian dance form free from rigid orthodoxy, drawing harmonious elements from Manipuri, Kathakali, and folk dances to accompany Rabindra Sangeet.",
        characteristics: [
          "Lyrical synchronization with musical lyrics and rhythm",
          "Seamless blending of classical Mudras with natural gesture",
          "Focus on emotional authenticity (Bhava) over acrobatic display",
        ],
        elements: [
          "Tagore Dance Dramas (Chitrangada, Chandalika, Shyama)",
          "Seasonal Song Choreographies",
        ],
      },
    },
  ] as DanceForm[],

  curriculum: [
    {
      id: "foundation",
      title: "Foundation Training",
      level: "Beginner",
      ageGroup: "Ages 6+ & Adults",
      duration: "1 Year Program",
      description:
        "Introduces core body posture, balance, fundamental rhythm patterns (Tala), basic feet placement, and foundational mudras.",
      topics: [
        "Body alignment & Araimandi / Chali postures",
        "Basic hand gestures (Asamyutta Hastas)",
        "Rhythm understanding (Tala & Laya counting)",
        "Introductory dance compositions",
      ],
      schedule: "Saturdays & Sundays | 9:00 AM - 10:30 AM",
    },
    {
      id: "repertoire",
      title: "Repertoire & Technique",
      level: "Intermediate",
      ageGroup: "Continuing Students",
      duration: "2 Year Program",
      description:
        "Builds speed, stamina, intricate footwork patterns, speed variations, and narrative storytelling (Abhinaya).",
      topics: [
        "Speed variations in Adavus / Parengs",
        "Combined hand and eye coordination (Drishti Bheda)",
        "Expressions for songs (Abhinaya basics)",
        "Full item choreography execution",
      ],
      schedule: "Wednesdays & Fridays | 5:00 PM - 7:00 PM",
    },
    {
      id: "expression",
      title: "Artistic Expression",
      level: "Advanced",
      ageGroup: "Advanced Dancers",
      duration: "Ongoing Practice",
      description:
        "Mastery over solo stage performance, complex compositions, improvisation (Manodharma), and stage presence.",
      topics: [
        "Full recital preparation (Varnam & Rasleela suites)",
        "Nuanced emotional portrayals (Navarasa)",
        "Stagecraft, light alignment, and costume aesthetic",
        "Choreographic exploration & ensemble leadership",
      ],
      schedule: "Tuesdays & Thursdays | 6:00 PM - 8:30 PM",
    },
    {
      id: "children",
      title: "Children's Creative Movement",
      level: "Junior",
      ageGroup: "Ages 5 - 10",
      duration: "Weekly Batches",
      description:
        "A playful, structured introduction to Indian classical rhythm, storytelling, grace, and body posture.",
      topics: [
        "Storytelling through animal hand gestures",
        "Rhythm games and musical appreciation",
        "Basic stamina, posture, and coordination",
      ],
      schedule: "Saturdays | 4:00 PM - 5:30 PM",
    },
    {
      id: "adults",
      title: "Adult Classical Beginners",
      level: "Open Level",
      ageGroup: "Adults (18+)",
      duration: "Flexible Batches",
      description:
        "Designed for adults discovering classical dance for the first time or returning after a hiatus. Focus on posture, fitness, and artistic immersion.",
      topics: [
        "Gentle conditioning & joint mobility",
        "Classical stance and stress-relieving movement",
        "Short graceful choreography pieces",
      ],
      schedule: "Sundays | 11:00 AM - 12:30 PM",
    },
    {
      id: "workshops",
      title: "Workshops & Performance Preparation",
      level: "Specialized",
      ageGroup: "All Levels",
      duration: "Intensive Sessions",
      description:
        "Masterclasses focusing on specific Tagore dance-dramas, guest guru workshops, and production rehearsals for stage showcases.",
      topics: [
        "Stage performance practice & rehearsal suites",
        "Guest artist lecture-demonstrations",
        "Costume fitting, makeup, and stage readiness",
      ],
      schedule: "Monthly Intensives | Announced per season",
    },
  ] as ClassOffering[],

  timeline: [
    {
      year: "2008",
      text: "Began formal classical dance training under renowned Gurus in Kolkata.",
    },
    {
      year: "2014",
      text: "First solo classical performance, marking the transition from student to performing artist.",
    },
    {
      year: "2018",
      text: "Founded Shreenatika as an artistic series dedicated to preserving traditional Indian dance forms.",
    },
    {
      year: "2022",
      text: "Expanded into a full academy, synthesizing Manipuri, Bharatanatyam, and Rabindra Nritya.",
    },
    {
      year: "2026",
      text: "Establishment of the contemporary academy studio space and student recital series.",
    },
  ],

  gallery: [
    {
      id: "g1",
      title: "Ensemble Performance in Motion",
      category: "Stage",
      img: galleryGroup,
      alt: "Group of classical dancers in silhouette against a warm stage backdrop",
      aspect: "col-span-2 aspect-video",
    },
    {
      id: "g2",
      title: "Expressions of Abhinaya",
      category: "Mudras",
      img: galleryFace,
      alt: "Close-up portrait of dancer depicting emotive facial expression",
      aspect: "aspect-square",
    },
    {
      id: "g3",
      title: "Flowing Drapes & Rhythm",
      category: "Manipuri",
      img: gallerySilk,
      alt: "Flowing red and gold silk drapery in mid-air motion",
      aspect: "aspect-[3/4]",
    },
    {
      id: "g4",
      title: "Devotional Manipuri Stance",
      category: "Manipuri",
      img: formManipuri,
      alt: "Manipuri dancer performing graceful hand posture",
      aspect: "aspect-square",
    },
    {
      id: "g5",
      title: "Geometrical Mudra Precision",
      category: "Bharatanatyam",
      img: formBharatanatyam,
      alt: "Bharatanatyam hand gesture mudra detail",
      aspect: "aspect-[4/3]",
    },
    {
      id: "g6",
      title: "Tagorean Lyricism in Motion",
      category: "Rabindra",
      img: formRabindra,
      alt: "Dancer in red bordered saree performing Rabindra dance",
      aspect: "aspect-square",
    },
  ] as GalleryItem[],

  testimonials: [
    {
      quote:
        "Training at Shreenatika has given me a deep appreciation for classical structure and movement grace. Every session feels intentional and restorative.",
      author: "Ananya Roy",
      role: "Intermediate Bharatanatyam Student",
    },
    {
      quote:
        "Muktashree Ma'am balances strict classical discipline with warmth. My daughter has gained immense poise and confidence.",
      author: "Sunita Mukhopadhyay",
      role: "Parent of Junior Cohort Student",
    },
    {
      quote:
        "Learning Rabindra Nritya here felt like connecting with literature through my body. It is truly an artist-led institution.",
      author: "Priya Banerjee",
      role: "Adult Beginner Learner",
    },
  ],

  contact: {
    email: "enquiry@shreenatika.org",
    phone: "+91 98300 00000",
    whatsapp: "+91 98300 00000",
    location: "Kolkata, West Bengal, India",
    address: "Shreenatika Arts Academy, Salt Lake / Southern Avenue Studios, Kolkata",
    hours: "Tuesday - Sunday: 9:00 AM - 7:30 PM",
    socials: {
      instagram: "https://instagram.com/shreenatika_dance",
      facebook: "https://facebook.com/shreenatika.academy",
      youtube: "https://youtube.com/@shreenatikadance",
    },
  },
};
