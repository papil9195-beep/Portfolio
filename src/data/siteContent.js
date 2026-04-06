import fencingPreview from "../assets/projects/fencing-club-preview.png";
import realEstatePreview from "../assets/projects/real-estate-preview.png";

export const profile = {
  shortName: "Muheez",
  fullName: "Muheez Onileyan",
  role: "AI-first frontend developer",
  headline: "I turn AI-generated websites into polished, client-ready builds.",
  intro:
    "I help founders and small teams take rough AI website output and turn it into responsive, conversion-minded pages with better hierarchy, cleaner UI, and a frontend finish clients can trust.",
  email: "papil9195@gmail.com",
  phone: "+2347039195783",
  whatsappNumber: "2347039195783",
  github: "https://github.com/papil9195-beep/Portfolio",
  linkedin: "",
  resume: "/Onileyan-Muheez-Resume.pdf",
  portfolioUrl: "https://portfolio-ten-gules-78.vercel.app/",
  availability: "Freelance | Remote",
  heroPills: [
    "AI site refinement",
    "Landing pages",
    "Business websites",
    "Frontend fixes",
  ],
  tools: ["React", "Tailwind CSS", "HTML", "CSS", "JavaScript"],
};

export const aboutCards = [
  {
    title: "AI Output, Refined",
    desc: "I clean up the weak spots AI site builders usually miss: spacing, hierarchy, responsiveness, and trust-building details.",
  },
  {
    title: "Frontend That Ships",
    desc: "I build polished pages with React, Tailwind, HTML, CSS, and JavaScript so the final result feels intentional on every screen size.",
  },
  {
    title: "Client-Ready Handoff",
    desc: "You get clearer sections, stronger CTA flow, and a finished frontend pass instead of a prototype that still needs rescue work.",
  },
];

export const services = [
  {
    title: "Landing Pages",
    desc: "Marketing pages built to explain the offer fast, guide attention well, and turn visitors into enquiries.",
    fit: "Best for launches, offers, and lead generation campaigns.",
  },
  {
    title: "Business Websites",
    desc: "Clean multi-section websites that make a business feel trustworthy, modern, and easy to contact.",
    fit: "Best for service brands, clubs, and local businesses.",
  },
  {
    title: "AI Site Refinement",
    desc: "I take AI-generated layouts and improve the copy structure, spacing, responsive behavior, and visual polish.",
    fit: "Best when the draft exists but still looks unfinished.",
  },
  {
    title: "Frontend Fixes",
    desc: "Quick improvement passes for broken layouts, weak mobile views, inconsistent styling, and missing polish.",
    fit: "Best for teams that need fast cleanup without a full rebuild.",
  },
];

export const projects = [
  {
    name: "Real Estate Landing",
    eyebrow: "Lead generation landing page",
    summary:
      "A real estate landing page for Abuja land sales that makes the offer, pricing, and site inspection flow easy to understand.",
    live: "https://landing-page-for-real-estate.vercel.app/",
    code: "https://github.com/papil9195-beep/Landing-Page-For-Real-Estate",
    image: realEstatePreview,
    imageAlt: "Real estate landing page preview",
    stack: ["HTML", "CSS", "JavaScript", "Responsive UI"],
    role: "Planned the page structure, built the frontend, and refined the CTA flow for both desktop and mobile visitors.",
    outcome:
      "The page sells trust faster with featured plots, pricing details, inspection prompts, and a direct WhatsApp consultation path.",
  },
  {
    name: "Fencing Club",
    eyebrow: "Sports club website",
    summary:
      "A bold club website for Lagos Fencing Club that introduces coaching, programs, schedule details, and membership action points in a clearer story.",
    live: "https://fencing-club-taupe.vercel.app/",
    code: "https://github.com/papil9195-beep/Fencing-Club",
    image: fencingPreview,
    imageAlt: "Fencing club website preview",
    stack: ["HTML", "CSS", "JavaScript", "Responsive UI"],
    role: "Built the visual direction, responsive frontend, and information hierarchy to make the club feel credible and easy to engage.",
    outcome:
      "The homepage backs up the club with coach credentials, member stats, class options, and a fast enquiry promise that reduces hesitation.",
  },
];
