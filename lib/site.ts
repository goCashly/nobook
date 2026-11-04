// Business details shown across the site. Edit these in one place.
export const site = {
  name: "No Books",
  tagline: "Pass your licensing exam. No books required.",
  description:
    "Exam-focused study notes and practice questions for Ontario & Canadian licensing exams: Real Estate, Mortgage, OMVIC, Auto Insurance (RIBO) and LLQP.",
  contactName: "Pravin Pirati",
  phones: ["647-406-6309"],
  whatsapp: "16474066309",
  // Add your public contact email here (leave empty to hide it)
  email: "",
  location: "Toronto, Ontario",
  yearsExperience: 20,
};

export const telLink = (phone: string) => `tel:+1${phone.replace(/\D/g, "")}`;
export const whatsappLink = (text = "Hi, I'd like help with my licensing exam notes.") =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;
