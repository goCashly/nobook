// ─────────────────────────────────────────────────────────────
//  Your catalogue. Edit prices, titles and files here.
//  Prices are in CAD cents (e.g. 4900 = $49.00).
//  `file` is the PDF name inside the /private-notes folder.
// ─────────────────────────────────────────────────────────────

export type CourseSlug = "real-estate" | "mortgage" | "omvic" | "auto-insurance" | "llqp";

export type Course = {
  slug: CourseSlug;
  name: string;
  short: string;
  regulator: string;
  icon: "home" | "mortgage" | "car" | "shield" | "heart";
  summary: string;
  highlights: string[];
};

export type Product = {
  id: string;
  course: CourseSlug;
  /** Where this fits in the program, e.g. "Course 1" or "Simulation 1" (shown as a program path) */
  step?: string;
  kind?: "course" | "simulation";
  title: string;
  description: string;
  price: number;
  compareAt?: number;
  pages: number;
  questions?: number;
  file: string;
  includes: string[];
  bestValue?: boolean;
};

export const courses: Course[] = [
  {
    slug: "real-estate",
    name: "Real Estate Salesperson",
    short: "Real Estate",
    regulator: "RECO · Ontario",
    icon: "home",
    summary:
      "Notes for all 4 courses and both simulation sessions of the salesperson program — buy one course at a time or get the complete bundle.",
    highlights: ["4 courses + 2 simulations", "Exam-style practice questions", "Buy per course or full bundle"],
  },
  {
    slug: "mortgage",
    name: "Mortgage Agent / Broker",
    short: "Mortgage",
    regulator: "FSRA · Ontario",
    icon: "mortgage",
    summary:
      "Everything you need for the Mortgage Agent Level 1 and Broker exams — lending, underwriting, regulations and the maths, made simple.",
    highlights: ["GDS / TDS & LTV formulas", "Regulations summarised", "Practice exams with answers"],
  },
  {
    slug: "omvic",
    name: "OMVIC Certification",
    short: "OMVIC",
    regulator: "OMVIC · Ontario",
    icon: "car",
    summary:
      "Pass the Automotive Certification Course exam for car sales in Ontario. Focused notes on MVDA, CPA and disclosure rules.",
    highlights: ["MVDA & CPA explained", "Disclosure checklists", "Mock exam questions"],
  },
  {
    slug: "auto-insurance",
    name: "Auto Insurance (RIBO)",
    short: "Auto Insurance",
    regulator: "RIBO · Ontario",
    icon: "shield",
    summary:
      "Registered Insurance Brokers of Ontario Level 1 prep — auto, habitational and commercial lines with a strong focus on the OAP 1.",
    highlights: ["OAP 1 section-by-section", "Habitational & commercial basics", "Timed practice tests"],
  },
  {
    slug: "llqp",
    name: "LLQP",
    short: "LLQP",
    regulator: "Life Licence · Canada",
    icon: "heart",
    summary:
      "Life Licence Qualification Program notes for all four modules: Life, Accident & Sickness, Segregated Funds and Ethics.",
    highlights: ["All 4 modules covered", "Tax & annuity summaries", "Module practice exams"],
  },
];

export const products: Product[] = [
  // Real Estate — one package per course / simulation, plus the full program bundle
  {
    id: "re-bundle",
    course: "real-estate",
    title: "Complete Real Estate Program Bundle",
    description: "All 4 courses and both simulation sessions — everything from Course 1 to licence-ready.",
    price: 9900,
    compareAt: 29400,
    pages: 420,
    questions: 900,
    file: "real-estate-bundle.pdf",
    includes: [
      "Courses 1, 2, 3 & 4 notes",
      "Simulation Sessions 1 & 2 prep",
      "900+ practice questions",
      "Formula & key-term cheat sheet",
    ],
    bestValue: true,
  },
  {
    id: "re-course-1",
    course: "real-estate",
    step: "Course 1",
    kind: "course",
    title: "Real Estate Essentials",
    description: "The foundations: the real estate industry, law, ethics, property basics and the role of a salesperson.",
    price: 4900,
    pages: 80,
    questions: 200,
    file: "re-course-1-real-estate-essentials.pdf",
    includes: ["Chapter-by-chapter summaries", "Key terms & definitions", "200+ practice questions"],
  },
  {
    id: "re-course-2",
    course: "real-estate",
    step: "Course 2",
    kind: "course",
    title: "Residential Real Estate Transactions",
    description: "Listing and selling residential property: agreements, disclosures, financing and closing.",
    price: 4900,
    pages: 85,
    questions: 200,
    file: "re-course-2-residential-transactions.pdf",
    includes: ["Agreement of Purchase & Sale walkthrough", "Residential calculations", "200+ practice questions"],
  },
  {
    id: "re-course-3",
    course: "real-estate",
    step: "Course 3",
    kind: "course",
    title: "Additional Residential Real Estate Transactions",
    description: "Condos, new homes, rural and recreational property, leasing and other specialised residential deals.",
    price: 4900,
    pages: 80,
    questions: 200,
    file: "re-course-3-additional-residential.pdf",
    includes: ["Condo & new-build essentials", "Rural / recreational property", "200+ practice questions"],
  },
  {
    id: "re-sim-1",
    course: "real-estate",
    step: "Simulation 1",
    kind: "simulation",
    title: "Simulation Session 1: Residential Real Estate Transactions",
    description: "Prepare for the residential simulation with realistic scenarios, forms and step-by-step answers.",
    price: 4900,
    pages: 45,
    file: "re-sim-1-residential.pdf",
    includes: ["Scenario walkthroughs", "Form-filling guide", "Common mistakes to avoid"],
  },
  {
    id: "re-course-4",
    course: "real-estate",
    step: "Course 4",
    kind: "course",
    title: "Commercial Real Estate Transactions",
    description: "Commercial leasing, investment property, business brokerage and commercial valuation.",
    price: 4900,
    pages: 85,
    questions: 200,
    file: "re-course-4-commercial-transactions.pdf",
    includes: ["Commercial leases explained", "Investment & valuation maths", "200+ practice questions"],
  },
  {
    id: "re-sim-2",
    course: "real-estate",
    step: "Simulation 2",
    kind: "simulation",
    title: "Simulation Session 2: Commercial Real Estate Transactions",
    description: "Prepare for the commercial simulation with realistic scenarios, forms and step-by-step answers.",
    price: 4900,
    pages: 45,
    file: "re-sim-2-commercial.pdf",
    includes: ["Commercial scenario walkthroughs", "Form-filling guide", "Common mistakes to avoid"],
  },
  // Mortgage
  {
    id: "mtg-notes",
    course: "mortgage",
    title: "Mortgage Agent Study Notes",
    description: "Level 1 notes: lending process, products, underwriting and regulation.",
    price: 4900,
    pages: 120,
    file: "mortgage-notes.pdf",
    includes: ["Full course summary", "Mortgage maths formulas", "Regulation summary"],
  },
  {
    id: "mtg-bundle",
    course: "mortgage",
    title: "Mortgage Pass Bundle",
    description: "Study notes plus 400+ exam-style practice questions.",
    price: 9900,
    compareAt: 14900,
    pages: 190,
    questions: 400,
    file: "mortgage-bundle.pdf",
    includes: ["Mortgage agent notes", "400+ practice questions", "GDS/TDS worked examples"],
    bestValue: true,
  },
  // OMVIC
  {
    id: "omvic-notes",
    course: "omvic",
    title: "OMVIC Study Notes",
    description: "Everything you need for the OMVIC certification exam in one focused guide.",
    price: 4900,
    pages: 60,
    file: "omvic-notes.pdf",
    includes: ["MVDA summary", "Consumer Protection Act", "Disclosure rules"],
  },
  {
    id: "omvic-bundle",
    course: "omvic",
    title: "OMVIC Pass Bundle",
    description: "Notes plus a full set of mock exam questions with answers.",
    price: 9900,
    compareAt: 14900,
    pages: 100,
    questions: 250,
    file: "omvic-bundle.pdf",
    includes: ["OMVIC study notes", "250+ mock questions", "Quick-review sheet"],
    bestValue: true,
  },
  // Auto insurance / RIBO
  {
    id: "ribo-notes",
    course: "auto-insurance",
    title: "RIBO Level 1 Study Notes",
    description: "Auto, habitational and commercial lines explained clearly.",
    price: 4900,
    pages: 140,
    file: "ribo-notes.pdf",
    includes: ["OAP 1 breakdown", "Habitational policies", "RIBO Act & regulations"],
  },
  {
    id: "ribo-bundle",
    course: "auto-insurance",
    title: "RIBO Pass Bundle",
    description: "Study notes plus timed practice tests and answer keys.",
    price: 9900,
    compareAt: 14900,
    pages: 210,
    questions: 450,
    file: "ribo-bundle.pdf",
    includes: ["RIBO study notes", "450+ practice questions", "OAP 1 quick-reference"],
    bestValue: true,
  },
  // LLQP
  {
    id: "llqp-notes",
    course: "llqp",
    title: "LLQP Study Notes – All Modules",
    description: "Life, A&S, Segregated Funds and Ethics in one easy-to-read guide.",
    price: 4900,
    pages: 200,
    file: "llqp-notes.pdf",
    includes: ["All 4 modules", "Tax summary tables", "Ethics case examples"],
  },
  {
    id: "llqp-bundle",
    course: "llqp",
    title: "LLQP Pass Bundle",
    description: "All-module notes plus module-by-module practice exams.",
    price: 9900,
    compareAt: 14900,
    pages: 320,
    questions: 800,
    file: "llqp-bundle.pdf",
    includes: ["LLQP study notes", "800+ practice questions", "Formula & tax cheat sheet"],
    bestValue: true,
  },
];

export const getCourse = (slug: string) => courses.find((c) => c.slug === slug);
export const getProduct = (id: string) => products.find((p) => p.id === id);
export const productsFor = (slug: CourseSlug) => products.filter((p) => p.course === slug);
export const startingPrice = (slug: CourseSlug) => Math.min(...productsFor(slug).map((p) => p.price));

export const formatPrice = (cents: number) =>
  new Intl.NumberFormat("en-CA", { style: "currency", currency: "CAD" }).format(cents / 100);
