import GedeeImg from "../assets/gedee.png";
import cmkImg from "../assets/cmk.png";
import lmwImg from "../assets/lmw.png";
import coImg from "../assets/co.png";

export interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  year: string;
  url: string;
  description?: string;
  client?: string;
  services?: string[];
  challenge?: string;
  solution?: string;
  gallery?: string[];
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  tags: string[];
}

export interface SkillItem {
  name: string;
  tag?: string;
  level: string;
  hot?: boolean;
}

export interface SkillCategory {
  category: string;
  skills: SkillItem[];
}

export interface PortfolioData {
  name: string;
  role: string;
  location: string;
  bio: string;
  heroBio: string;
  philosophy: string;
  aboutStory?: {
    title: string;
    subtitle: string;
    intersections: string[];
    paragraphs: string[];
    industries: string[];
  };
  aboutText: string[];
  skills: {
    category: string;
    items: string[];
  }[];
  skillCategories: SkillCategory[];
  projects: Project[];
  services: ServiceItem[];
  experience: {
    company: string;
    role: string;
    period: string;
    description: string;
  }[];
  education: {
    institution: string;
    degree: string;
    period: string;
  }[];
  certificates?: {
    name: string;
    issuer: string;
  }[];
  testimonials: {
    quote: string;
    author: string;
    role: string;
    company: string;
  }[];
  socials: {
    name: string;
    url: string;
  }[];
}

export const portfolioData: PortfolioData = {
  name: "Prasanna",
  role: "Creative Director & Designer",
  location: "Porto, Portugal",
  bio: "I’m a creative who likes to build things. Never staying inside just one box, I bridge design, technology, creativity, and business to turn ideas into tangible, impactful experiences.",
  heroBio: "Multidisciplinary designer and builder specializing in visual design, web development, social media strategy, event organization, and sports management.",
  philosophy: "I care about how something looks, but I care just as much about why it exists, who it is for, how it works, and what it is meant to achieve.",
  aboutStory: {
    title: "I’m a Creative Who Likes to Build Things.",
    subtitle: "I’ve never been someone who wanted to stay inside just one box.",
    intersections: ["Design", "Technology", "Creativity", "Business"],
    paragraphs: [
      "I’m fascinated by the space where design, technology, creativity, and business come together. That curiosity has taken me from designing brands and visual identities to building websites, creating digital experiences, developing marketing campaigns, and figuring out how to turn an idea into something people can actually see, use, and connect with.",
      "What started with a love for design gradually became something much bigger.",
      "Today, I approach every project with both a creative eye and a problem-solving mindset. I care about how something looks, but I care just as much about why it exists, who it is for, how it works, and what it is meant to achieve.",
      "Over the years, I’ve had the opportunity to work across different spaces — from finance and healthcare to wellness, fashion, technology, and digital marketing. Working across such different industries has taught me to adapt, think differently, and understand that every project has its own story to tell."
    ],
    industries: [
      "Finance",
      "Healthcare",
      "Wellness",
      "Fashion",
      "Technology",
      "Digital Marketing"
    ]
  },
  aboutText: [
    "I’m fascinated by the space where design, technology, creativity, and business come together.",
    "Today, I approach every project with both a creative eye and a problem-solving mindset.",
    "Working across different industries has taught me to adapt, think differently, and understand that every project has its own story to tell."
  ],
  skills: [
    {
      category: "Graphic Design",
      items: ["Brand Identity", "Typography", "Visual Layouts", "Print & Digital Media", "Art Direction"]
    },
    {
      category: "Social Media Management",
      items: ["Content Strategy", "Campaign Direction", "Growth Analytics", "Audience Engagement", "Visual Storytelling"]
    },
    {
      category: "Website Development",
      items: ["Responsive Design", "React & Modern Web", "Tailwind CSS", "Interactive Motion", "Clean Code Architecture"]
    },
    {
      category: "Organising Events",
      items: ["Event Production", "Logistics & Planning", "Spatial Direction", "Vendor Coordination", "Live Show Choreography"]
    },
    {
      category: "Sports",
      items: ["Tournament Direction", "Athletic Programs", "Team Leadership", "Sports Operations", "Fitness Coordination"]
    }
  ],
  skillCategories: [
    {
      category: "Frontend Development",
      skills: [
        { name: "React.js", tag: "Frontend", level: "Expert", hot: true },
        { name: "TypeScript", tag: "Language", level: "Advanced", hot: true },
        { name: "JavaScript", tag: "Language", level: "Advanced" },
        { name: "Ant Design", tag: "UI Library", level: "Advanced" },
        { name: "Redux", tag: "State Management", level: "Advanced" },
        { name: "MUI", tag: "UI Library", level: "Advanced" }
      ]
    },
    {
      category: "Web & Backend",
      skills: [
        { name: "Node.js", tag: "Backend", level: "Advanced", hot: true },
        { name: "GraphQL", tag: "API", level: "Advanced" },
        { name: "Strapi", tag: "Backend", level: "Advanced" },
        { name: "MySQL", tag: "Database", level: "Advanced" },
        { name: "AWS", tag: "Cloud", level: "Advanced" },
        { name: "API Integration", tag: "Development", level: "Advanced", hot: true }
      ]
    },
    {
      category: "Design & Creative",
      skills: [
        { name: "Photoshop", tag: "Design", level: "Advanced", hot: true },
        { name: "Canva", tag: "Design", level: "Advanced" },
        { name: "CorelDraw", tag: "Graphic", level: "Advanced" },
        { name: "UI Design", tag: "Interface", level: "Advanced" },
        { name: "Visual Design", tag: "Creative", level: "Advanced" },
        { name: "Presentation Design", tag: "Visual", level: "Advanced" }
      ]
    },
    {
      category: "Digital & Growth",
      skills: [
        { name: "SEO", tag: "Digital", level: "Advanced", hot: true },
        { name: "Digital Marketing", tag: "Marketing", level: "Advanced" },
        { name: "Growth Initiatives", tag: "Growth", level: "Advanced", hot: true },
        { name: "Customer Lifecycle", tag: "Growth", level: "Advanced" },
        { name: "CRM Tools", tag: "Operations", level: "Advanced" },
        { name: "Community Building", tag: "Engagement", level: "Advanced" }
      ]
    },
    {
      category: "Operations & Management",
      skills: [
        { name: "Operations Management", tag: "Operations", level: "Expert", hot: true },
        { name: "Process Optimization", tag: "Strategy", level: "Expert" },
        { name: "Vendor Management", tag: "Management", level: "Advanced" },
        { name: "Stakeholder Management", tag: "Management", level: "Advanced" },
        { name: "Customer Experience", tag: "Experience", level: "Advanced" },
        { name: "Event Planning & Execution", tag: "Events", level: "Expert", hot: true }
      ]
    },
    {
      category: "Community & Events",
      skills: [
        { name: "Community Management", tag: "Community", level: "Expert", hot: true },
        { name: "Tournament Execution", tag: "Sports", level: "Expert", hot: true },
        { name: "Event Operations", tag: "Operations", level: "Expert" },
        { name: "Host & Partner Management", tag: "Partnerships", level: "Advanced" },
        { name: "Logistics & Planning", tag: "Planning", level: "Advanced" },
        { name: "Participant Experience", tag: "Experience", level: "Advanced" }
      ]
    }
  ],
  projects: [
    {
      id: "gedee-public-school",
      title: "Gedee Public School",
      category: "Web Development / Education",
      image: GedeeImg,
      year: "2024",
      url: "https://gedeepublicschool.edu.in",
      description:
        "Modern educational institution website designed to communicate academics, campus life, programs, and student resources through a clear digital experience.",
      client: "Gedee Public School",
      services: [
        "Web Development",
        "UI/UX Design",
        "Responsive Design",
        "Content Architecture"
      ],
      challenge:
        "Create a digital presence that communicates the school's academic environment and values while making important information easy for students and parents to discover.",
      solution:
        "Designed and developed a responsive institutional website with structured information architecture, modern visual hierarchy, and an approachable user experience.",
      gallery: [
        "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=1200"
      ]
    },

    {
      id: "cmk-projects",
      title: "CMK Projects",
      category: "Web Development / Construction",
      image: cmkImg,
      year: "2024",
      url: "https://www.cmkprojects.com",
      description:
        "Professional construction and project management platform showcasing completed projects, capabilities, and services through a strong corporate experience.",
      client: "CMK Projects",
      services: [
        "Web Development",
        "UI/UX Design",
        "Corporate Identity",
        "Project Showcase"
      ],
      challenge:
        "Translate a project-driven construction business into a digital experience that communicates scale, reliability, and execution capability.",
      solution:
        "Built a structured corporate platform that puts projects and capabilities at the forefront while using strong visual hierarchy to establish trust.",
      gallery: [
        "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=1200"
      ]
    },

    {
      id: "triniva",
      title: "Triniva",
      category: "Web Development / Business",
      image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=1200",
      year: "2024",
      url: "",
      description:
        "Modern business website focused on presenting the brand, its offerings, and value proposition through a clean digital experience.",
      client: "Triniva",
      services: [
        "Web Development",
        "UI/UX Design",
        "Responsive Design",
        "Digital Experience"
      ],
      challenge:
        "Turn a business offering into a digital experience that communicates value quickly while maintaining a strong visual identity.",
      solution:
        "Designed and developed a responsive platform with focused content hierarchy, modern layouts, and a streamlined user journey.",
      gallery: [
        "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=1200"
      ]
    },

    {
      id: "consolidated-one",
      title: "Consolidated One",
      category: "Web Development / Corporate",
      image: coImg,
      year: "2024",
      url: "",
      description:
        "Professional digital platform designed to consolidate business information into a structured, contemporary, and easy-to-navigate experience.",
      client: "Consolidated One",
      services: [
        "Web Development",
        "UI/UX Design",
        "Information Architecture",
        "Responsive Design"
      ],
      challenge:
        "Bring multiple business touchpoints together without compromising clarity or creating unnecessary complexity.",
      solution:
        "Created a structured platform with clear navigation and purposeful content organization, allowing visitors to understand and explore the business efficiently.",
      gallery: [
        "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200"
      ]
    },

    {
      id: "atlas-pain-care",
      title: "Atlas Pain Care",
      category: "Web Development / Healthcare",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1200",
      year: "2024",
      url: "https://atlaspaincare.in",
      description:
        "Patient-focused healthcare website for a pain management clinic featuring treatment information and appointment pathways.",
      client: "Atlas Pain Care",
      services: [
        "Web Development",
        "UI/UX Design",
        "Healthcare UX",
        "Appointment Experience"
      ],
      challenge:
        "Balance medical credibility with an approachable experience for patients searching for treatment and specialist care.",
      solution:
        "Created a clean, information-led healthcare experience that organizes treatments, clinical information, and appointment pathways into an intuitive journey.",
      gallery: [
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1200"
      ]
    },

    {
      id: "lmw-mtd",
      title: "LMW MTD",
      category: "Web Development / Industrial",
      image: lmwImg,
      year: "2024",
      url: "https://www.lmwcnc.com",
      description:
        "Industrial digital experience created to present LMW Machine Tool Division products, capabilities, and engineering expertise.",
      client: "LMW Machine Tool Division",
      services: [
        "Web Development",
        "UI/UX Design",
        "Corporate Experience",
        "Responsive Design"
      ],
      challenge:
        "Translate a technically oriented industrial business into a digital platform that remains accessible while retaining professional credibility.",
      solution:
        "Developed a structured corporate experience focused on product discovery, technical communication, and intuitive navigation.",
      gallery: [
        "https://images.unsplash.com/photo-1565439393378-6f4c7e0b0b8b?auto=format&fit=crop&q=80&w=1200"
      ]
    },

    {
      id: "lobein",
      title: "Lobein",
      category: "Web Development / Business",
      image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=1200",
      year: "2024",
      url: "https://lobein.com",
      description:
        "Modern business website with a sleek visual language, presenting services and company information through an elegant interactive experience.",
      client: "Lobein",
      services: [
        "Web Development",
        "UI/UX Design",
        "Motion",
        "Visual Direction"
      ],
      challenge:
        "Create a business website that feels distinctive and premium while keeping services and information immediately accessible.",
      solution:
        "Built a refined digital experience combining strong typography, clean layouts, subtle motion, and deliberate interactions.",
      gallery: [
        "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=1200"
      ]
    },

    {
      id: "ajk-nursing",
      title: "AJK Nursing",
      category: "Web Development / Education",
      image: "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&q=80&w=1200",
      year: "2024",
      url: "https://www.ajknursing.edu.in",
      description:
        "Focused educational platform designed to communicate nursing programs, admissions, facilities, and career opportunities.",
      client: "AJK College of Nursing",
      services: [
        "Web Development",
        "Landing Page",
        "UI/UX Design",
        "Conversion Design"
      ],
      challenge:
        "Create a focused digital experience that communicates nursing education opportunities clearly and encourages prospective students to take the next step.",
      solution:
        "Designed an information-rich yet conversion-focused experience with clear messaging, structured programs, admissions pathways, and strong calls to action.",
      gallery: [
        "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&q=80&w=1200"
      ]
    },

    {
      id: "fenzgard",
      title: "Fenzgard",
      category: "Web Development / Industrial",
      image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=1200",
      year: "2024",
      url: "https://www.fenzgard.com",
      description:
        "Industrial business website presenting security fencing solutions and capabilities through a modern corporate interface.",
      client: "Fenzgard India",
      services: [
        "Web Development",
        "UI/UX Design",
        "Brand Experience",
        "Responsive Design"
      ],
      challenge:
        "Create a digital presence that communicates an industrial product offering clearly while giving the brand a modern and credible appearance.",
      solution:
        "Built a responsive platform combining strong visual hierarchy, structured product information, and a clean interface for a professional brand experience.",
      gallery: [
        "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=1200"
      ]
    },

    {
      id: "ethnic-healthcare",
      title: "Ethnic Healthcare",
      category: "Web Development / Healthcare",
      image: "https://images.unsplash.com/photo-1516841273335-e39b37888115?auto=format&fit=crop&q=80&w=1200",
      year: "2024",
      url: "https://www.ethnichealthcare.com",
      description:
        "Comprehensive healthcare platform featuring medical specialties, doctor profiles, and patient care information.",
      client: "Ethnic Healthcare",
      services: [
        "Web Development",
        "UI/UX Design",
        "Healthcare UX",
        "Content Architecture"
      ],
      challenge:
        "Organize diverse healthcare information, specialties, and doctor profiles without creating a complicated experience for patients.",
      solution:
        "Engineered a clear information architecture with intuitive navigation and strong content hierarchy, making healthcare services and specialist information easier to discover.",
      gallery: [
        "https://images.unsplash.com/photo-1516841273335-e39b37888115?auto=format&fit=crop&q=80&w=1200"
      ]
    },

    {
      id: "mahasakti-bio-enercon",
      title: "Mahasakti Bio Enercon",
      category: "Web Development / Renewable Energy",
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=1200",
      year: "2024",
      url: "https://mahasakthibioenercon.com",
      description:
        "Sustainability-focused digital platform presenting renewable energy solutions and environmental initiatives through a contemporary corporate experience.",
      client: "Mahasakti Bio Enercon",
      services: [
        "Web Development",
        "UI/UX Design",
        "Corporate Website",
        "Visual Storytelling"
      ],
      challenge:
        "Communicate a technically driven renewable energy business in a way that feels modern, credible, and accessible.",
      solution:
        "Created a visual corporate platform combining sustainability-focused storytelling with structured business information and a contemporary digital identity.",
      gallery: [
        "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=1200"
      ]
    },

    {
      id: "suguna-groups",
      title: "Suguna Groups",
      category: "Web Development / Corporate",
      image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=1200",
      year: "2024",
      url: "https://suguna.net",
      description:
        "Comprehensive corporate platform bringing together business information, services, capabilities, and the group's wider digital presence.",
      client: "Suguna Groups",
      services: [
        "Web Development",
        "UI/UX Design",
        "Corporate Experience",
        "Content Architecture"
      ],
      challenge:
        "Represent a large and established business group online while maintaining clarity across multiple areas of information and services.",
      solution:
        "Developed a scalable corporate experience with clear navigation, structured content, and strong visual hierarchy across the group's digital presence.",
      gallery: [
        "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=1200"
      ]
    },

    {
      id: "sarvvam",
      title: "Sarvvam",
      category: "Web Development / Technology",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200",
      year: "2024",
      url: "https://sarvvam.com",
      description:
        "Technology-focused digital platform presenting innovative products, services, and capabilities through a contemporary user experience.",
      client: "Sarvvam",
      services: [
        "Web Development",
        "UI/UX Design",
        "Technology",
        "Interaction Design"
      ],
      challenge:
        "Build a digital experience that communicates innovation without relying on unnecessary visual complexity.",
      solution:
        "Designed a modern technology platform with clean interfaces, focused content hierarchy, and purposeful interactions that allow the company's solutions to take center stage.",
      gallery: [
        "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200"
      ]
    },
    {
      id: "bayt",
      title: "Bayt",
      category: "Web Development / Hospitality",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1200",
      year: "2026",
      url: "https://baytt.netlify.app/",
      description:
        "A rich digital experience for an authentic Lebanese restaurant, designed to showcase its cuisine, mezze culture, atmosphere, and dining experience.",
      client: "Bayt",
      services: [
        "Web Development",
        "UI/UX Design",
        "Brand Experience",
        "Responsive Design"
      ],
      challenge:
        "Create a restaurant website that communicates the authenticity and character of Lebanese cuisine while making the dining experience feel inviting before the first visit.",
      solution:
        "Designed an immersive restaurant platform that combines strong food imagery, elegant typography, structured menu presentation, and a warm visual experience.",
      gallery: [
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1200"
      ]
    },

    {
      id: "mass-medical",
      title: "MASS Medical",
      category: "Web Development / Healthcare",
      image: "https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&q=80&w=1200",
      year: "2026",
      url: "https://mass-medical.netlify.app/",
      description:
        "A modern healthcare platform presenting medical equipment and healthcare solutions through a clean, professional digital experience.",
      client: "MASS Medical",
      services: [
        "Web Development",
        "UI/UX Design",
        "Healthcare",
        "Product Presentation"
      ],
      challenge:
        "Present a broad range of healthcare equipment and solutions in a way that feels credible, organized, and easy for hospitals and healthcare professionals to explore.",
      solution:
        "Built a structured healthcare platform with clear product presentation, strong visual hierarchy, and an interface designed around professional discovery and trust.",
      gallery: [
        "https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&q=80&w=1200"
      ]
    },

    {
      id: "amirtha-matric-school",
      title: "Amirtha Matric School",
      category: "Web Development / Education",
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=1200",
      year: "2026",
      url: "https://www.amirthamatricschool.com/",
      description:
        "A modern school website created to communicate academics, campus life, facilities, admissions, and the institution's educational vision.",
      client: "Amirtha Matric School",
      services: [
        "Web Development",
        "UI/UX Design",
        "Education",
        "Content Architecture"
      ],
      challenge:
        "Create a digital presence that reflects the school's educational environment while making essential information accessible to students and parents.",
      solution:
        "Developed a responsive institutional platform with clear content organization, engaging visuals, and intuitive pathways for academics, admissions, facilities, and school information.",
      gallery: [
        "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=1200"
      ]
    },

    {
      id: "techsprint-solutions",
      title: "TechSprint Solutions",
      category: "Web Development / Technology",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200",
      year: "2026",
      url: "https://techsprintsolutions.in/",
      description:
        "A technology-focused business platform designed to communicate digital services, capabilities, and solutions through a modern corporate experience.",
      client: "TechSprint Solutions",
      services: [
        "Web Development",
        "UI/UX Design",
        "Technology",
        "Corporate Website"
      ],
      challenge:
        "Build a technology brand presence that communicates capability and innovation while keeping its services understandable to prospective clients.",
      solution:
        "Created a modern corporate platform with focused messaging, structured service presentation, responsive layouts, and a technology-driven visual language.",
      gallery: [
        "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200"
      ]
    },
    {
      id: "apex-academy",
      title: "Apex Academy",
      category: "Sports / Community & Events",
      image: "",
      year: "2024",
      url: "",
      description:
        "Sports and community initiative focused on creating engaging experiences around athletes, academies, events, and tournament participation.",
      client: "Apex Academy",
      services: [
        "Sports Operations",
        "Tournament Execution",
        "Community Management",
        "Event Planning",
        "Participant Experience",
        "Partnership Coordination"
      ],
      challenge:
        "Create and manage sports experiences that go beyond the game itself, bringing together participants, partners, and communities while keeping the operational side of events structured and seamless.",
      solution:
        "Worked across event planning, tournament execution, participant coordination, community engagement, partner management, and on-ground operations to create well-organized sporting experiences. The work involved balancing logistics and execution with the participant experience, ensuring that events remained engaging, coordinated, and professionally delivered.",
      gallery: [
        ""
      ]
    },
    {
      id: "shivafinz",
      title: "Shivafinz",
      category: "Social Media / Financial Services",
      image: "",
      year: "2025",
      url: "https://shivafinz.com/",
      description:
        "Social media and digital content work for a financial services brand helping customers navigate loans, credit, and financial solutions.",
      client: "Shivafinz",
      services: [
        "Social Media Strategy",
        "Content Creation",
        "Visual Design",
        "Financial Content",
        "Digital Marketing",
        "Brand Communication"
      ],
      challenge:
        "Make financial services easier to understand and communicate while building a consistent digital presence in a category that can often feel complex, technical, and impersonal.",
      solution:
        "Developed social content and visual communication designed to simplify financial topics and make the brand more approachable. Content focused on areas including personal loans, business loans, home loans, education loans, credit scores, and financial awareness, combining clear messaging with accessible visual storytelling.",
      gallery: [
        ""
      ]
    },
    {
      id: "robinson-financial-consultancy",
      title: "Robinson Financial Consultancy",
      category: "Social Media / Financial Services",
      image: "",
      year: "2025",
      url: "",
      description:
        "Digital communication and social media work for a financial consultancy, translating financial services and expertise into accessible content for a broader audience.",
      client: "Robinson Financial Consultancy",
      services: [
        "Social Media Management",
        "Content Strategy",
        "Creative Design",
        "Content Creation",
        "Digital Marketing",
        "Brand Communication"
      ],
      challenge:
        "Build a stronger digital presence for a finance-focused business while communicating professional expertise in a way that feels clear, relevant, and engaging to everyday customers.",
      solution:
        "Created a structured approach to social media communication combining educational content, financial insights, promotional messaging, and visual storytelling. The focus was on turning complex financial subjects into digestible content while maintaining a credible and consistent brand presence.",
      gallery: [
        ""
      ]
    },
    {
      id: "kadubu-canteen",
      title: "The Kadubu Canteen",
      category: "Social Media / Food & Hospitality",
      image: "",
      year: "2025",
      url: "https://kadubucanteen.in/",
      description:
        "Social media and creative content for a food brand built around traditional flavours, cultural identity, and a modern dining experience.",
      client: "The Kadubu Canteen",
      services: [
        "Social Media Strategy",
        "Content Creation",
        "Creative Direction",
        "Visual Design",
        "Brand Storytelling",
        "Digital Marketing"
      ],
      challenge:
        "Translate the character of a traditional food brand into engaging digital content that could connect with a contemporary audience without losing its cultural identity.",
      solution:
        "Developed social-first creative communication around the brand's food, identity, and experience. The work focused on creating visually engaging content, establishing a recognizable social presence, and using storytelling to make the brand and its traditional positioning more memorable.",
      gallery: [
        ""
      ]
    },
  ],
  services: [
    {
      id: "graphic-design",
      number: "01",
      title: "Graphic Design",
      description: "Crafting memorable visual identities, bespoke brand collateral, typography systems, and print & digital assets with aesthetic precision.",
      tags: ["Brand Identity", "Typography", "Visual Systems", "Print & Digital Media"]
    },
    {
      id: "social-media",
      number: "02",
      title: "Social Media Management",
      description: "Strategic content curation, visual storytelling, campaign rollouts, and community growth designed to expand brand reach and engagement.",
      tags: ["Content Strategy", "Campaign Direction", "Growth Analytics", "Visual Storytelling"]
    },
    {
      id: "web-development",
      number: "03",
      title: "Website Development",
      description: "Building fast, responsive, and aesthetically refined modern websites with clean code, smooth animations, and seamless user experiences.",
      tags: ["Responsive Design", "Modern Frameworks", "Interactive Motion", "Clean Code"]
    },
    {
      id: "organising-events",
      number: "04",
      title: "Organising Events",
      description: "End-to-end planning and seamless execution of conferences, creative showcases, cultural gatherings, and community experiences.",
      tags: ["Event Production", "Logistics & Planning", "Spatial Direction", "Vendor Coordination"]
    },
    {
      id: "sports",
      number: "05",
      title: "Sports",
      description: "Athletic coordination, tournament organization, team leadership, and sports programs delivered with energy, discipline, and passion.",
      tags: ["Tournament Direction", "Athletic Programs", "Team Leadership", "Sports Operations"]
    }
  ],
  experience: [
    {
      company: "Flowstate",
      role: "Community Building",
      period: "Dec 2025 — May 2026",
      description: "Led community running sessions, managed host relationships, owned on-ground execution, and improved participant retention, engagement, and event operations."
    },
    {
      company: "Apex Pickleball Company",
      role: "Operations & Growth Manager",
      period: "Jan 2025 — Apr 2026",
      description: "Managed end-to-end operations, coaching schedules, court bookings, customer lifecycle, pricing, payments, tournaments, partnerships, and growth initiatives while improving session utilization by 92%."
    },
    {
      company: "Optisol Business Solutions",
      role: "Software Engineer",
      period: "Jul 2024 — Mar 2025",
      description: "Built frontend applications using React and TypeScript, integrated APIs with Zod schema validation, developed interfaces with Ant Design, and contributed to a crypto-coin management application using custom React components."
    },
    {
      company: "Ideassion Technology Solutions",
      role: "Digital Transformation Engineer",
      period: "Nov 2023 — Jun 2024",
      description: "Built React applications, developed data tracking and filtering features, contributed to an internal Lead Management Tool using React, Redux, Ant Design and MUI, and developed an entrepreneur networking platform using React, GraphQL and Strapi."
    },
    {
      company: "Justo Global",
      role: "Software Engineer — User Interface & Product Team",
      period: "Jul 2022 — Oct 2023",
      description: "Built scalable React applications with Node.js and MySQL, contributed to customer-facing ticketing and user management systems, developed analytics dashboards, and implemented custom media upload, thumbnail selection, and image cropping functionality."
    },
    {
      company: "Signatures1",
      role: "Web Developer — Service Development Team",
      period: "Jan 2021 — Jul 2022",
      description: "Built websites and e-commerce solutions based on client requirements, optimized heavy-load websites to reduce loading time by 17%, and developed WooCommerce-based e-commerce experiences."
    }
  ],
  education: [
    {
      institution: "UIT Engineering College — Affiliated to Anna University",
      degree: "Bachelor of Engineering in Computer Science",
      period: "Sep 2016 — May 2020"
    }
  ],
  certificates: [
    {
      name: "JavaScript and ReactJS Bootcamp",
      issuer: "Shape AI"
    },
    {
      name: "HTML Essential Training",
      issuer: "Udemy Learning"
    },
    {
      name: "Git & GitHub Essentials",
      issuer: "Coursera"
    }
  ],
  testimonials: [
    {
      quote: "“Prasanna understood that our brand needed more than just good-looking social media. He helped translate the personality and story behind our food into content that felt authentic, approachable, and relevant to a modern audience. His creative approach helped us present our traditional identity in a much more engaging way.”",
      author: "Prasanth",
      role: "CEO & Founder",
      company: "The Kadubu Canteen"
    },
    {
      quote: "“Working with Prasanna helped us bring a much clearer and more engaging voice to our digital presence. He understood how to take financial topics that can feel complicated and turn them into content that people can actually understand and connect with. His combination of creative thinking, consistency, and understanding of digital communication made him a valuable part of our marketing efforts.”",
      author: "Swastika",
      role: "Director",
      company: "Shivafinz"
    }
  ],
  socials: [
    { name: "Twitter / X", url: "https://twitter.com" },
    { name: "Instagram", url: "https://instagram.com" },
    { name: "LinkedIn", url: "https://linkedin.com" },
    { name: "GitHub", url: "https://github.com" }
  ]
};
