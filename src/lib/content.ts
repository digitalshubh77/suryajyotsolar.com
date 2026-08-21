export const site = {
  name: "Suryajyot Solar",
  tagline: "Power Your Life With Sun",
  phone: "9156657115",
  phoneHref: "tel:+919156657115",
  whatsappOffice: "9371579351",
  whatsappHref: "https://wa.me/919156657115",
  whatsappOfficeHref: "https://wa.me/919371579351",
  email: "suryajyotsolar@gmail.com",
  address: "Milkat No. 1216, Laxmipuri, Pimpalgaon, Tal. Bhudargad, Dist. Kolhapur",
  serviceArea: "Kolhapur District",
  instagram: "https://instagram.com/suryajyotsolar2025",
  facebook: "https://facebook.com/suryajyotsolar2025",
  founder: "Shubham Chandrakant Bhosale",
  yearStarted: 2024,
  experienceYears: 3,
  installations: "50+",
};

/** Set to true when inner pages (About, Services, Contact, etc.) should be live. */
export const enableInnerPages = false;

export function canNavigate(href: string) {
  if (enableInnerPages) return true;
  if (href === "/") return true;
  if (
    href.startsWith("tel:") ||
    href.startsWith("mailto:") ||
    href.startsWith("http")
  ) {
    return true;
  }
  return false;
}

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/products", label: "Products" },
  { href: "/process", label: "Process" },
  { href: "/projects", label: "Projects" },
  { href: "/why-choose-us", label: "Why Us" },
  { href: "/finance", label: "Finance" },
  { href: "/contact", label: "Contact" },
];

export const stats = [
  { value: "50+", label: "Installations Completed" },
  { value: "3+", label: "Years of Experience" },
  { value: "30", label: "Yr Panel Warranty" },
  { value: "5", label: "Day Installation" },
];

export const warranties = [
  { label: "Solar Panels (Performance)", value: "30 Years" },
  { label: "Panel Product Warranty", value: "12 Years" },
  { label: "Inverter Warranty", value: "10 Years" },
  { label: "Other Materials", value: "5 Years" },
];

export type Service = {
  slug: string;
  title: string;
  description: string;
  image: string;
  icon: "home" | "building" | "factory" | "wrench" | "meter";
};

export const services: Service[] = [
  {
    slug: "residential-solar",
    title: "Residential Solar Installation",
    description:
      "Reduce your monthly electricity bill with a rooftop solar system designed for your home's energy needs. We handle site assessment, system design, installation, and net metering — all completed within 5 days of project start.",
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1200&q=80",
    icon: "home",
  },
  {
    slug: "commercial-solar",
    title: "Commercial Solar",
    description:
      "Cut operational power costs for your shop, office, or commercial establishment with a solar system sized to your business's daily consumption, backed by professional installation and after-sales support.",
    image:
      "https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=1200&q=80",
    icon: "building",
  },
  {
    slug: "industrial-solar",
    title: "Industrial Solar",
    description:
      "High-capacity solar solutions for factories and industrial units, engineered to handle heavier loads while lowering long-term energy expenses.",
    image:
      "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1200&q=80",
    icon: "factory",
  },
  {
    slug: "maintenance-repair",
    title: "Solar Maintenance / Repair",
    description:
      "Keep your existing solar system performing at its best with routine maintenance, panel cleaning, and prompt repair support from our technical team.",
    image:
      "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=1200&q=80",
    icon: "wrench",
  },
  {
    slug: "net-metering",
    title: "Net Metering Support",
    description:
      "We manage the complete net metering documentation and DISCOM coordination on your behalf, so you can start exporting surplus power and earning credits without the paperwork hassle.",
    image:
      "https://images.unsplash.com/photo-1624397640148-949b1732bb0a?auto=format&fit=crop&w=1200&q=80",
    icon: "meter",
  },
];

export const panelBrands = [
  "Tata Power Solar",
  "Adani Solar",
  "Waaree Energies",
  "Premier Energies",
];
export const inverterBrands = ["Solex", "Waaree", "Deye", "Polycab"];
export const batteryBrands = ["Tata", "Deye"];

export const partnerBrands: { name: string; logo: string }[] = [
  { name: "Tata Power Solar", logo: "/partners/tata-power-solar.svg" },
  { name: "Adani Solar", logo: "/partners/adani-solar.svg" },
  { name: "Waaree Energies", logo: "/partners/waaree.svg" },
  { name: "Premier Energies", logo: "/partners/premier-energies.svg" },
  { name: "Solex", logo: "/partners/solex.svg" },
  { name: "Deye", logo: "/partners/deye.svg" },
  { name: "Polycab", logo: "/partners/polycab.svg" },
];

export const processSteps = [
  {
    step: "01",
    title: "Site Visit",
    description:
      "Our team visits your property to assess roof space, sunlight exposure, and your household or business electricity usage to recommend the right system size.",
  },
  {
    step: "02",
    title: "Quotation",
    description:
      "Based on the site visit, we prepare a clear, itemised quotation covering equipment, installation, and available finance options.",
  },
  {
    step: "03",
    title: "Documentation",
    description:
      "We assist with all necessary paperwork, including subsidy and net metering applications, so the process stays hassle-free for you.",
  },
  {
    step: "04",
    title: "Installation",
    description:
      "Our certified technicians install your solar panels, inverter, and wiring following safety standards, typically completed within 5 days.",
  },
  {
    step: "05",
    title: "Net Metering",
    description:
      "We coordinate with the local DISCOM to get your net meter installed and activated, enabling you to export surplus power and start saving.",
  },
];

export const whyChooseUs = [
  "50+ Successful Solar Installations",
  "3 Years of Dedicated Solar Experience",
  "End-to-End Service — Site Visit to Net Metering",
  "Trusted Brands: Tata Power Solar, Adani Solar, Waaree, and more",
  "Up to 30 Years Panel Performance Warranty",
  "Finance Support Through Nationalised Banks",
  "Local Kolhapur-Based Team with Fast Response Time",
];

export const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1200&q=80",
    alt: "Residential rooftop solar panel installation",
    caption: "Residential Rooftop Installation",
  },
  {
    src: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&w=1200&q=80",
    alt: "Large scale commercial solar array",
    caption: "Commercial Solar Array",
  },
  {
    src: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1200&q=80",
    alt: "Industrial solar panel field",
    caption: "Industrial Solar Field",
  },
  {
    src: "https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?auto=format&fit=crop&w=1200&q=80",
    alt: "Technician installing solar panel",
    caption: "Installation In Progress",
  },
  {
    src: "https://images.unsplash.com/photo-1524397057410-1e775ed476f3?auto=format&fit=crop&w=1200&q=80",
    alt: "Rooftop solar panels closeup",
    caption: "Close-up Panel Detailing",
  },
  {
    src: "https://images.unsplash.com/photo-1595437193398-f24279553f4f?auto=format&fit=crop&w=1200&q=80",
    alt: "Solar panels under blue sky",
    caption: "Completed Project Handover",
  },
];
