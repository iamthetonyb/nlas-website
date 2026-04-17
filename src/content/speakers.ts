// Speaker data. Verbatim bios from the NLAS brochure (pages 3 to 5).
// To add a new speaker: copy a block, fill in fields, commit.
// `featured: true`  → appears on the homepage "Featured speakers" section (cap at 3).
// `status: 'current' | 'past'` → grouping on the full /speakers page.

export interface Speaker {
  slug: string;
  name: string;
  title: string;
  role: string;
  shortRole: string;
  /** Image path. Place file at `/public/images/speakers/<slug>.jpg` and reference here. */
  image: string;
  teaser: string;
  bio: string[];
  topics: string[];
  accent: 'gold' | 'blue';
  featured?: boolean;
  status?: 'current' | 'past';
  /** Optional social links */
  links?: { label: string; href: string }[];
}

export const speakers: Speaker[] = [
  {
    slug: 'joey-charafi',
    name: 'Joey Charafi',
    title: 'Joseph "Joey" Charafi',
    role: 'Founder of NLAS · President, Stop The Traffic Foundation · Filmmaker',
    shortRole: 'Founder, NLAS · Stop The Traffic Foundation',
    image: '/images/speakers/joey-charafi.jpg',
    teaser:
      'Nevada-based nonprofit leader, entrepreneur, and founder of NLAS. President of Stop The Traffic Foundation and director of the feature film Vegas Traffic.',
    bio: [
      "Joseph Charafi is a Nevada based nonprofit leader, entrepreneur, and speaker dedicated to developing the next generation of principled, confident leaders.",
      "As the President of Stop The Traffic Foundation, Joseph works at the forefront of combating child trafficking through storytelling, advocacy, and technology initiatives. His feature film Vegas Traffic helped spark statewide conversations about protecting vulnerable youth and strengthening community accountability.",
      "For more than 16 years, Joseph has also led Charafi Entertainment, a full service production and media company headquartered in Southern Nevada. Through his work in film, digital media, and marketing, he has collaborated with businesses, schools, and organizations to craft powerful stories that inspire action.",
      "Joseph founded the Nevada Leadership & Accountability Series to address a growing need in schools: real world leadership training, digital responsibility education, and conversations around cyberbullying, entrepreneurship, and personal ownership.",
      "His presentations are engaging, honest, and practical. Students walk away not just motivated, but equipped. Administrators value his ability to connect with middle school, high school, and college audiences in a way that is relatable, forward thinking, and grounded in responsibility.",
      "Through the Nevada Leadership & Accountability Series, Joseph and his roster of speakers challenge students to think critically about their digital footprint, their influence, and their potential to lead with integrity in a rapidly changing world.",
      "Joseph lives and works in Southern Nevada and remains committed to strengthening communities by investing in the next generation.",
    ],
    topics: [
      'Digital footprint and cyberbullying',
      'Real-world leadership training',
      'Storytelling, advocacy, and entrepreneurship',
      'Personal ownership and community accountability',
      'Protecting vulnerable youth',
    ],
    accent: 'blue',
    featured: true,
    status: 'current',
  },
  {
    slug: 'cody-whipple',
    name: 'Cody Whipple',
    title: 'Cody Whipple',
    role: 'Rancher · Communications Network Operator · Former D1 Athlete',
    shortRole: 'Ranch + Communications · Hiko, NV',
    image: '/images/speakers/cody-whipple.jpg',
    teaser:
      "Raised in rural Hiko, Nevada. 25+ years operating the state's first digital two-way communications network. Former Virginia Tech D1 football athlete preserving Nevada's ranching heritage.",
    bio: [
      "Raised in rural Hiko, Nevada, Cody Whipple grew up working on his family's ranch, where he learned the values of hard work, resilience, and responsibility at a young age. After losing his father to cancer, one of many affected by Nevada's above ground nuclear testing era, Cody developed a deep understanding of perseverance and the importance of community.",
      "For more than 25 years, Cody has operated Nevada's first digital two way communication network, serving first responders, school districts, construction teams, and businesses across Southern Nevada, Southern Utah, Northern Arizona, and California. His work has supported the infrastructure that keeps communities connected and safe.",
      "In addition to leading a successful communications business, Cody manages his family ranch, preserving Nevada's ranching heritage while mentoring young people in agriculture, outdoor skills, and work ethic.",
      "A graduate of Virginia Tech and former Division I football athlete, Cody understands discipline, teamwork, and leadership under pressure. He and his wife Dana returned to Nevada to raise their three daughters with the same values that shaped him.",
    ],
    topics: [
      'Leadership through adversity',
      'Entrepreneurship in rural and suburban communities',
      'Career and technical education pathways',
      'Accountability and discipline in athletics and business',
      'Preserving heritage while building the future',
    ],
    accent: 'gold',
    featured: true,
    status: 'current',
  },
  {
    slug: 'tony-benton',
    name: 'Tony Benton',
    title: 'Tony Benton',
    role: 'Builder · Technologist · Digital Operator',
    shortRole: 'Builder · Technologist',
    image: '/images/speakers/tony-benton.jpg',
    teaser:
      'Nevada based builder and technologist working at the intersection of emerging technology, brand, and accountability in an AI driven world.',
    // EDIT ME. First-draft template in the NLAS voice.
    // Swap any paragraph with your own voice; the layout auto-adapts.
    bio: [
      "Tony Benton is a Nevada based builder, technologist, and digital operator focused on the intersection of emerging technology, brand, and personal accountability in an AI driven world.",
      "Through the thetonyb brand, Tony has built, shipped, and operated digital products across automation, AI tooling, and web infrastructure, working directly with founders and operators to turn ideas into systems that actually run in production.",
      "His work behind the scenes on the Nevada Leadership & Accountability Series reflects the same philosophy he brings to the stage: use modern tools, move with speed without cutting corners, and stay accountable for what you ship.",
      "For students, Tony translates the realities of the modern digital economy. How platforms actually work. What a digital footprint means in an AI indexed world. And why a personal operating system beats motivation every time.",
      "He believes the next generation of Nevada leaders will not be the loudest voices online. They will be the ones who build, ship, and take ownership of the systems around them.",
    ],
    topics: [
      'Building in the age of AI and automation',
      'Personal operating systems over motivation',
      'Digital footprint in an AI indexed world',
      'Shipping real products vs chasing attention',
      'Ownership and accountability for what you build',
    ],
    accent: 'blue',
    featured: true,
    status: 'current',
    links: [
      { label: 'thetonyb.com', href: 'https://thetonyb.com' },
    ],
  },
  {
    slug: 'marlon-medina',
    name: 'Marlon Medina',
    title: 'Marlon Medina',
    role: 'Founder & CMO, Golden Medina Services · Author of Behind Closed Doors',
    shortRole: 'Founder & CMO, Golden Medina Services',
    image: '/images/speakers/marlon-medina.jpg',
    teaser:
      'Strategist, storyteller, and operator at the intersection of media, business, and measurable impact. Author of Behind Closed Doors.',
    bio: [
      "Marlon Medina is a strategist, storyteller, and operator who works at the intersection of media, business, and measurable impact.",
      "As the Founder and Chief Marketing Officer of Golden Medina Services, Marlon helps business owners and executives clarify their message, build trust, and execute strategies that produce real results. His work spans brand positioning, content development, and campaign execution, including collaborations connected to major athletes and international events.",
      "Beyond marketing, Marlon has built and supported multiple startups, creative ventures, and workforce development partnerships. He understands what it takes to launch initiatives, grow teams, and adapt through change. His experience is grounded in real execution, not theory.",
      "Through GMS Partners, he connects vetted talent and strategic collaborators to support large scale initiatives, campaigns, and contracts, emphasizing credibility, accountability, and long term value.",
      "Marlon is also a contributor to the Stop The Traffic Foundation, supporting efforts to educate communities and drive awareness around human trafficking and exploitation through strategic communication and outreach.",
      "He is the author of Behind Closed Doors, a book focused on truth, accountability, and the systems that allow harm to persist when people stay silent. The work has expanded his platform into speaking engagements centered on responsibility, leadership, and critical thinking.",
      "His message is direct, practical, and rooted in real world experience. Students leave understanding that leadership is not a title. It is a standard you hold yourself to.",
    ],
    topics: [
      'Personal accountability in the digital age',
      'Building credibility before chasing attention',
      'Leadership rooted in clarity and discipline',
      'Entrepreneurship and scalable systems',
      'Speaking truth with integrity',
    ],
    accent: 'gold',
    featured: false,
    status: 'current',
  },
];

// Convenience selectors
export const featuredSpeakers = () => speakers.filter((s) => s.featured !== false).slice(0, 3);
export const currentSpeakers = () => speakers.filter((s) => (s.status ?? 'current') === 'current');
export const pastSpeakers = () => speakers.filter((s) => s.status === 'past');
