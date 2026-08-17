export const siteConfig = {
  name: "Phakamani",
  tagline: "BE MORE.",
  description:
    "Phakamani is an African human-performance company helping individuals, organisations and communities become more capable, elevate performance and live fully.",
  nav: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" },
  ],
  email: "hello@phakamani.co.za",
  phone: "+27 (0) 21 000 0000",
  location: "Cape Town, South Africa",
  social: [
    { label: "Instagram", href: "https://instagram.com" },
    { label: "LinkedIn", href: "https://linkedin.com" },
    { label: "YouTube", href: "https://youtube.com" },
  ],
} as const;

export const journeyStages = [
  {
    step: "01",
    name: "Discover",
    description:
      "Recognise possibility. Curiosity, awareness, purpose and self-belief begin here — what might I be capable of?",
  },
  {
    step: "02",
    name: "Develop",
    description:
      "Build capability across health, fitness, mental resilience, emotional wellbeing, skills, habits and leadership.",
  },
  {
    step: "03",
    name: "Perform",
    description:
      "Turn potential into action. Individuals perform. Teams perform. Organisations and communities perform.",
  },
  {
    step: "04",
    name: "Live",
    description:
      "Performance in service of life — adventure, contribution, connection, meaning and joy. It should expand life, not consume it.",
  },
] as const;

export const territories = [
  {
    code: "MOVE",
    title: "Move",
    description: "Physical performance, movement, sport, health and adventure.",
    expanded:
      "From endurance training to everyday movement, we help people rebuild their relationship with their bodies. Programmes draw on real athletic experience — not generic fitness advice — to build strength, stamina and the discipline that carries into every other part of life.",
  },
  {
    code: "MIND",
    title: "Mind",
    description: "Psychology, resilience, mindset and emotional wellbeing.",
    expanded:
      "Coaching rooted in psychology helps people question the limits they've placed on themselves. We build focus, resilience and the emotional tools to process setbacks — because a capable mind is the foundation every other kind of performance is built on.",
  },
  {
    code: "WORK",
    title: "Work",
    description: "Leadership, workplace performance, culture and teams.",
    expanded:
      "Teams perform when their people are led well and supported properly. We work with leaders and organisations to build cultures where performance doesn't come at the cost of wellbeing — through workshops, coaching and long-term partnership.",
  },
  {
    code: "LIVE",
    title: "Live",
    description: "Purpose, relationships, lifestyle, travel and meaningful experience.",
    expanded:
      "Performance should expand life, not consume it. This territory is about what all the capability-building is for — deeper relationships, real adventure, and a life with more meaning and joy in it, not just more achievement.",
  },
  {
    code: "YOUTH",
    title: "Youth",
    description: "Education, opportunity, confidence and future potential.",
    expanded:
      "The earlier someone discovers there's more in them, the further they can go. We work with students and educators to build confidence, resilience and leadership before life's pressures set in — laying a foundation for the rest of their journey.",
  },
  {
    code: "STORIES",
    title: "Stories",
    description: "Transformation, human achievement and remarkable journeys.",
    expanded:
      "Every programme produces a story worth telling. Through Phakamani Media — documentaries, interviews and digital content — we share real transformation journeys that show what's possible when someone chooses to rise up.",
  },
] as const;

export type TerritoryCode = (typeof territories)[number]["code"];

export const wellnessPillars = [
  {
    title: "Mental Wellness",
    description:
      "Psychology-informed coaching that builds focus, resilience and a mindset capable of questioning its own limits.",
  },
  {
    title: "Emotional Wellness",
    description:
      "Space to process, connect and grow — because performance is human before it is productive.",
  },
  {
    title: "Physical Wellness",
    description:
      "Movement, recovery and habit-building drawn from real endurance-sport experience, not generic fitness advice.",
  },
] as const;

export const audiences = [
  {
    title: "Individuals",
    description:
      "One-on-one performance coaching for people ready to discover what more looks like — in health, career or life.",
    bullets: ["Personal performance coaching", "Mental & emotional resilience", "Habit & recovery design"],
  },
  {
    title: "Corporates & Teams",
    description:
      "Human-performance programmes for organisations that want their people to lead, collaborate and perform better.",
    bullets: ["Leadership development", "Team performance workshops", "Culture & wellbeing programmes"],
  },
  {
    title: "Schools & Academic Institutions",
    description:
      "Youth-focused development that builds confidence, resilience and future potential from an early stage.",
    bullets: ["Student resilience programmes", "Confidence & leadership workshops", "Educator support sessions"],
  },
] as const;

export const services = [
  {
    title: "Performance Coaching",
    description:
      "1:1 coaching that turns perceived limits into real capability — built on the belief that there is more in you.",
  },
  {
    title: "Corporate Human Performance",
    description:
      "Team and leadership programmes that help organisations perform without burning their people out.",
  },
  {
    title: "Wellness Programmes",
    description:
      "Mental, emotional and physical wellness work tailored to the people and pace of your organisation.",
  },
  {
    title: "Youth & School Development",
    description:
      "Programmes for students and educators focused on confidence, resilience and future potential.",
  },
  {
    title: "Speaking & Workshops",
    description:
      "Talks and workshops on human performance, resilience and the Be More. philosophy for teams and events.",
  },
  {
    title: "Retreats & Experiences",
    description:
      "Immersive experiences that create the same discovery Phakamani was built on — that more is possible.",
  },
] as const;

export const faqs = [
  {
    id: "faq-1",
    question: "Who is Phakamani for?",
    answer:
      "Individuals, professionals, corporate teams, schools and communities — anyone who believes there is more possible in how they perform and live.",
  },
  {
    id: "faq-2",
    question: "What does a typical programme look like?",
    answer:
      "Every programme moves through the same journey: Discover, Develop, Perform, Live. The format — coaching, workshops, retreats or team sessions — is shaped around your goals.",
  },
  {
    id: "faq-3",
    question: "Do you only work with athletes?",
    answer:
      "No. Phakamani's philosophy started with endurance sport, but human performance shows up everywhere — in classrooms, boardrooms, and everyday life.",
  },
  {
    id: "faq-4",
    question: "Can Phakamani work with our organisation long-term?",
    answer:
      "Yes. Many of our corporate and school partnerships run as ongoing programmes rather than once-off sessions, so growth compounds over time.",
  },
  {
    id: "faq-5",
    question: "How do we get started?",
    answer:
      "Reach out through the contact page with a little about your goals, and we'll set up a conversation to shape the right programme for you.",
  },
] as const;

// Placeholder tiles until real partner names/logos are supplied.
export const partnerPlaceholders = [
  "Partner 01",
  "Partner 02",
  "Partner 03",
  "Partner 04",
  "Partner 05",
  "Partner 06",
  "Partner 07",
  "Partner 08",
] as const;
