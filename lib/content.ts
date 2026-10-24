export const company = {
  name: "Skylark Innovations",
  legalName: "Skylark Innovations LTD",
  email: "info@skylarkinnovations.co",
  phone: "+94 74 358 8220",
  phoneHref: "tel:+94743588220",
  address: "52/7 B2 Madinnagoda, Rajagiriya, Colombo, Sri Lanka",
  calendly: "https://calendly.com/a-sameeratennakoon/30min",
  blurb:
    "We at Skylark are ready to bring the latest technologies to your specific business needs. Whether it is a small scale business or a large scale business, our intention is to deliver you fast and efficient solutions for an affordable price.",
  social: {
    facebook: "https://www.facebook.com/skylarkinco",
    twitter: "https://twitter.com/Skylarkinnv",
    linkedin: "https://www.linkedin.com/company/skylarkincit/",
  },
  regions: ["United Kingdom", "Australia", "USA", "Canada"],
};

export const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
];

export const about = {
  title: "At Skylark we are fully loaded to deliver your expectations above and beyond",
  body: "We take great pride in curating an exceptional team of Software Engineers, Quality Assurance Engineers, Business Analysts, and other highly skilled resources to fulfill your specific requirements. Each member of our team undergoes rigorous evaluation, including comprehensive interviews and assessments, ensuring that we select only the most accomplished professionals in their respective fields. We are committed to delivering top-tier talent for your projects and surpassing your expectations.",
  roles: [
    "Business Analyst",
    "Project Management",
    "UI/UX Engineering",
    "Front-End Development",
    "Back-End Development",
    "DevOps",
  ],
};

export type ServiceKey =
  | "product"
  | "talent"
  | "training"
  | "marketing"
  | "bpo"
  | "security";

export const services: { key: ServiceKey; title: string; body: string }[] = [
  {
    key: "product",
    title: "Product Engineering",
    body: "At Skylark, we specialize in providing top-notch software product engineering services. Our dedicated team excels in delivering end-to-end solutions, leveraging cutting-edge technologies, industry best practices, and a client-centric approach.",
  },
  {
    key: "talent",
    title: "Remote Talent Outsourcing",
    body: "Scale up your team with the world's top remote talent. Skylark provides flexible teams, advice, and support to take you from launching your MVP and sprint planning to handling large-scale enterprise projects. Resources available as Part-Time & Full-Time.",
  },
  {
    key: "training",
    title: "Industrial Training",
    body: "Skylark offers comprehensive industrial training programs to empower your employees with valuable skills and knowledge. Our industry expert trainers deliver hands-on sessions, covering the latest technologies and industry trends, equipping participants with practical expertise.",
  },
  {
    key: "marketing",
    title: "Digital Marketing",
    body: "From Social Media Marketing to SEO, design services, and content creation, we have got you covered. Our expert team leverages cutting-edge strategies and innovative techniques to enhance your online presence, drive traffic, engage audiences, and boost conversions.",
  },
  {
    key: "bpo",
    title: "Business Process Outsourcing",
    body: "Skylark provides comprehensive BPO services, including call center solutions and product support, to meet your business needs. Our expert team delivers exceptional customer service, handling inbound and outbound calls with professionalism and efficiency.",
  },
  {
    key: "security",
    title: "Cyber Security",
    body: "Our expert cyber security resources possess knowledge and experience in safeguarding digital environments. With their deep understanding of emerging threats and vulnerabilities, they employ cutting-edge techniques and advanced tools to protect your systems, networks, and sensitive data.",
  },
];

export const homeReasons = {
  title: "Our platform takes away the hard process of scaling your business",
  items: [
    {
      title: "Top Talent of The Country",
      body: "We help IT Companies scale engineering capacity, accelerating the growth of your company by leveraging the skills and expertise of our experienced engineers.",
    },
    {
      title: "Fast and Seamless Onboarding Experience",
      body: "Skylark provides flexible teams, advice, and support to take you from launching your MVP to handling large-scale enterprise projects. Whether you're hiring your first employee or expanding to a workforce of a thousand, we stand ready to fulfill your every need with unmatched dedication and expertise.",
    },
    {
      title: "Remote Teams that Scale with You",
      body: "Our teams are built on your requirements, whether that includes dedicated teams or sharing teams across projects.",
    },
  ],
};

export const aboutReasons = {
  title: "Our team takes away the hard process of developing your business solution",
  body: "Get your Software projects done in record time. We build Software to solve your problems. Skylark offers product companies the flexibility, speed and efficiency that comes with Agile product delivery.",
  items: [
    {
      title: "Up to date Technology",
      body: "We use the latest, efficient and secure technologies for all our development and deployments.",
    },
    {
      title: "Agile Methodology",
      body: "At Skylark we seek client satisfaction through the continuous delivery of value-adding software, by staying in constant communication with the client, and also by focusing on communication between team members.",
    },
    {
      title: "Superior Customer Service",
      body: "We're committed to providing you with exceptional service every time you do business with us.",
    },
    {
      title: "Collaborative Workplace",
      body: "Skylark is a great place to work which brings out the best of everyone and results in better outcomes.",
    },
    {
      title: "Competitive Pricing",
      body: "We offer the best price in the market. Our goal is to deliver robust systems at an affordable price.",
    },
    {
      title: "Exceptional Design Language",
      body: "We are committed to creating products that are elegant, functional, and affordable.",
    },
  ],
};

export const stats = [
  { value: "10+", label: "Completed Projects" },
  { value: "3+", label: "Years in the Industry" },
  { value: "10+", label: "Happy Clients" },
  { value: "100%", label: "Customer Satisfaction" },
];

export const business = {
  title: "Make your business more competitive and enduring",
  points: [
    {
      title: "Smarter, Faster, Better",
      body: "We understand Business! We develop easy to use robust systems at a fast delivery pace.",
    },
    {
      title: "A Company With A Unique Vision",
      body: "Our goal is simple – to create products that make life better and to provide services that exceed expectations.",
    },
  ],
};

export const industries = [
  {
    name: "Health Care",
    country: "Australia",
    body: "Delivered a Workers Management System for a leading Home Health Care service based in Melbourne, Australia. They are successfully using the system for managing workers and tracking their work hours in real time.",
    scope: ["Admin Panel", "Mobile App", "Back-End", "Database", "Cloud Server", "Maintenance"],
  },
  {
    name: "Real Estate",
    country: "Canada",
    body: "Development partner in a Real Estate Startup in Canada. Outsourcing our .NET development team for a major Real Estate Startup company in Toronto, Canada.",
    scope: [
      "Recruitment",
      "Onboarding",
      "Outsourcing",
      "Business Analyst",
      "Project Management",
      "Resource Management",
    ],
  },
  {
    name: "Utility Service",
    country: "Australia",
    body: "Delivered a Labor management system for a Leading Facility Services Company in Melbourne, Australia. Now workers can easily find the job location and track their work time with our Mobile app solution.",
    scope: ["Admin Panel", "Mobile App", "Cloud Server", "Database", "Back-End", "Maintenance"],
  },
  {
    name: "Agriculture",
    country: "United Kingdom",
    body: "Developing software products for a Farmer's Market E-Commerce platform in the United Kingdom. Brand new platform for farmers as well as customers to carry out business in a single web solution.",
    scope: ["Admin Panel", "Mobile App", "Back-End", "Cyber Secure", "Cloud Server", "Maintenance"],
  },
];

const faqAgile = {
  q: "Why is Agile Methodology important?",
  a: "Agile processes defer decisions, shorten development cycles, and support just-in-time analysis of requests. This allows agile teams to change quickly and at a low cost. That provides a competitive advantage and is one of the keys to agile ways of working.",
};

const faqMarketing = {
  q: "Why is Digital Marketing important?",
  a: "Digital marketing is crucial in today's highly connected world. It allows businesses to reach and engage with a vast online audience, build brand awareness, generate leads, and drive sales. It offers measurable results, targeting capabilities, and the ability to adapt strategies for optimal outcomes.",
};

export const homeFaq = [
  {
    q: "What is Skylark's Remote Talent Outsourcing?",
    a: "We offer the best resources for your business, providing flexible teams that are available on a Part-Time or Full-Time basis, tailored to your specific time zones. With Skylark, you can easily access top-notch professionals to enhance your workforce and achieve your business goals.",
  },
  {
    q: "What are the services provided under Product Engineering?",
    a: "At Skylark, we specialize in providing top-notch software product engineering services from designing, to developing, and maintaining software products. These services encompass the entire product lifecycle, from conceptualization and architecture design to development, testing, deployment, and ongoing support.",
  },
  faqAgile,
  faqMarketing,
  {
    q: "How good is Skylark's Industrial Training program?",
    a: "Skylark's Industrial Training program stands out for its commitment to excellence, as it is conducted by industry-recognized experts who possess deep expertise in their respective fields. This program consistently delivers comprehensive and practical training, ensuring participants acquire the essential skills and knowledge to excel in their industries.",
  },
];

export const generalFaq = [
  {
    q: "How do I contact Skylark customer service?",
    a: "You can contact Skylark Customer service via email at info@skylarkinnovations.co or via phone and WhatsApp at +94 74 358 8220. A representative from our business development team will be available to cater to your needs.",
  },
  {
    q: "How do I master a development plan?",
    a: "The development plan lays the foundation for your success. At Skylark we have adopted a fully Agile methodology. We will provide a roadmap for how to structure, run, and grow your new business solution.",
  },
  {
    q: "How do I get a project estimation?",
    a: "Contact our business development team at Skylark and we will help you identify your Scope of Work and provide an Efforts Estimation to deliver your product from scratch.",
  },
];

export const jobs = [
  "Solution Architect",
  "Full Stack Developer — Golang + ReactJS",
  "Backend Developer — Golang",
  "Flutter Developer",
  "iOS Developer",
  "Full Stack Developer — NodeJS + ReactJS",
  "QA / Test Automation Engineer",
  "SAP RPA Engineer",
  "Front End Developer — JS, React Native",
].map((title) => ({ title, type: "Remote · Full Time" }));
