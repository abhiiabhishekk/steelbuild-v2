import type { Blog, BlogCategory } from "@/types/blog";
import { blog001Content } from "./blog-content/blog-001";

export type BlogInput = {
  id: string;
  folder: string;
  thumbnailFilename: string;

  slug: string;
  title: string;

  category: BlogCategory;

  publishedAt: string;
  readingTime: string;

  excerpt: string;

  content?: string;

  featured: boolean;

  tags: string;

  seoTitle: string;
  seoDescription: string;
  seoKeywords: string;
};

const splitList = (value: string) =>
  value
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);

export const blogData: BlogInput[] = [
  {
    id: "001",
    folder: "blog-001",
    thumbnailFilename: "Top-PEB-Companies-In-India.jpg",
    content: blog001Content,

    slug: "top-peb-companies-in-india-2026",
    title:
      "Top PEB Companies in India (2026 Updated List): Leading Pre-Engineered Building Experts",
    category: "PEB Knowledge",
    publishedAt: "2026-04-20",
    readingTime: "6 min read",
    excerpt:
      "Top PEB Companies in India. If you look at how industrial and commercial construction is evolving in India, one thing becomes very clear—speed and efficiency.",
    featured: true,
    tags:
      "best PEB company India, best pre engineered building company, best steel structure company, industrial building companies India, industrial construction companies India, industrial PEB companies, industrial shed manufacturers India, leading PEB companies India, modern construction companies India, PEB building contractors, PEB building solutions India, PEB companies 2026, PEB companies in Delhi, PEB companies in Mumbai, PEB companies in NCR, PEB companies India, PEB companies list India, PEB construction companies, PEB contractors India, PEB design companies India, PEB engineering companies, PEB industry India, PEB manufacturers India, PEB project companies India, PEB suppliers India, PEB turnkey companies India, pre engineered building companies, pre engineered buildings India, prefabricated building companies India, steel building companies India, steel building contractors India, steel building experts India, steel fabrication companies India, steel infrastructure companies India, steel structure companies India, steel warehouse construction India, top construction companies India steel, top PEB companies India, top steel building manufacturers, warehouse construction companies India",
    seoTitle: "Top PEB Companies in India (2026 Updated List)",
    seoDescription:
      "Explore the top PEB companies in India and learn how leading Pre-Engineered Building experts deliver faster, efficient and high-performance industrial construction.",
    seoKeywords:
      "best PEB company India, best pre engineered building company, best steel structure company, industrial building companies India, industrial construction companies India, industrial PEB companies, industrial shed manufacturers India, leading PEB companies India, modern construction companies India, PEB building contractors, PEB building solutions India, PEB companies 2026, PEB companies in Delhi, PEB companies in Mumbai, PEB companies in NCR, PEB companies India, PEB companies list India, PEB construction companies, PEB contractors India, PEB design companies India, PEB engineering companies, PEB industry India, PEB manufacturers India, PEB project companies India, PEB suppliers India, PEB turnkey companies India, pre engineered building companies, pre engineered buildings India, prefabricated building companies India, steel building companies India, steel building contractors India, steel building experts India, steel fabrication companies India, steel infrastructure companies India, steel structure companies India, steel warehouse construction India, top construction companies India steel, top PEB companies India, top steel building manufacturers, warehouse construction companies India",
  },
  {
    id: "002",
    folder: "blog-002",
    thumbnailFilename: "Future-of-PEB.jpg",
    slug: "future-of-pre-engineered-buildings",
    title:
      "Future of Pre-Engineered Buildings in India: Why Steel Construction is Redefining the Next Decade",
    category: "Industry Insights",
    publishedAt: "2026-04-20",
    readingTime: "7 min read",
    excerpt:
      "Future of PEB. The Indian construction industry is quietly undergoing a shift that is far more significant than it appears on the surface. For decades, concrete dominated construction.",
    featured: true,
    tags:
      "advantages of PEB buildings, building technology India, commercial construction India, construction industry trends India, construction innovation India, cost effective construction India, eco friendly steel buildings, fast track construction India, future of construction India, future of pre engineered buildings India, green building materials India, high rise steel structures India, industrial construction India, industrial development India, industrial expansion India, industrial infrastructure development, industrial shed construction India, industrial warehouse design India, infrastructure growth India, logistics infrastructure India, Make in India construction, modern construction India, modular construction India, next generation construction India, PEB building advantages India, PEB building applications, PEB buildings India, PEB contractors India, PEB industry trends, PEB manufacturing India, PEB vs RCC buildings, pre engineered buildings growth, pre engineered steel structures, prefabricated buildings India, rapid construction methods, smart construction technology, steel building benefits, steel building contractors India, steel building durability, steel building future, steel building lifecycle, steel building solutions India, steel construction India, steel fabrication India, steel infrastructure India, steel structure design India, sustainable construction India, turnkey PEB projects, warehouse construction India",
    seoTitle:
      "Future of PEB in India | Growth, Trends & Opportunities",
    seoDescription:
      "Explore the future of Pre-Engineered Buildings in India, including industry growth, steel construction trends, sustainability and emerging opportunities.",
    seoKeywords:
      "advantages of PEB buildings, building technology India, commercial construction India, construction industry trends India, construction innovation India, cost effective construction India, eco friendly steel buildings, fast track construction India, future of construction India, future of pre engineered buildings India, green building materials India, high rise steel structures India, industrial construction India, industrial development India, industrial expansion India, industrial infrastructure development, industrial shed construction India, industrial warehouse design India, infrastructure growth India, logistics infrastructure India, Make in India construction, modern construction India, modular construction India, next generation construction India, PEB building advantages India, PEB building applications, PEB buildings India, PEB contractors India, PEB industry trends, PEB manufacturing India, PEB vs RCC buildings, pre engineered buildings growth, pre engineered steel structures, prefabricated buildings India, rapid construction methods, smart construction technology, steel building benefits, steel building contractors India, steel building durability, steel building future, steel building lifecycle, steel building solutions India, steel construction India, steel fabrication India, steel infrastructure India, steel structure design India, sustainable construction India, turnkey PEB projects, warehouse construction India",
  },
  {
    id: "003",
    folder: "blog-003",
    thumbnailFilename: "Site-Offices.jpg",
    slug:
      "the-time-and-cost-benefits-of-prefabricated-site-offices-in-peb",
    title:
      "The Time and Cost Benefits of Prefabricated Site Offices in PEB",
    category: "Construction & Engineering",
    publishedAt: "2025-07-08",
    readingTime: "5 min read",
    excerpt:
      "The Time and Cost Benefits of Prefabricated Site Offices in PEB. In the rapidly evolving world of construction, staying ahead of the curve means adopting faster and more efficient solutions.",
    featured: false,
    tags:
      "Accessories for PEB, Construction, Fabrication, Industry, offices in peb, Pre Engineered buildings, Sheeting Accessories, The Time and Cost Benefits of Prefabricated Site Offices in PEB",
    seoTitle:
      "The Time and Cost Benefits of Prefabricated Site Offices",
    seoDescription:
      "Discover the time and cost benefits of prefabricated site offices in PEB construction and how they support faster, flexible project operations.",
    seoKeywords:
      "Accessories for PEB, Construction, Fabrication, Industry, offices in peb, Pre Engineered buildings, Sheeting Accessories, The Time and Cost Benefits of Prefabricated Site Offices in PEB",
  },
  {
    id: "004",
    folder: "blog-004",
    thumbnailFilename: "Healthcare-Infrastructure-with-PEB.jpg",
    slug:
      "modular-steel-buildings-revolutionizing-healthcare-infrastructure",
    title:
      "Modular Steel Buildings: Revolutionizing Healthcare Infrastructure",
    category: "Industry Insights",
    publishedAt: "2025-07-08",
    readingTime: "5 min read",
    excerpt:
      "Revolutionizing Healthcare Infrastructure with PEB. Healthcare infrastructure is the backbone of any thriving society and plays a pivotal role in ensuring accessible and reliable medical facilities.",
    featured: false,
    tags:
      "Cladding Sheets, Construction, Fabrication, Industry, Modular Steel Buildings: Revolutionizing Healthcare Infrastructure, PEB, Pre Engineered buildings, Revolutionizing Healthcare Infrastructure with PEB, Sheeting Accessories, Standing Seam Roofing",
    seoTitle:
      "Revolutionizing Healthcare Infrastructure with PEB",
    seoDescription:
      "Learn how modular steel and Pre-Engineered Buildings are transforming healthcare infrastructure through speed, flexibility and efficient construction.",
    seoKeywords:
      "Cladding Sheets, Construction, Fabrication, Industry, Modular Steel Buildings: Revolutionizing Healthcare Infrastructure, PEB, Pre Engineered buildings, Revolutionizing Healthcare Infrastructure with PEB, Sheeting Accessories, Standing Seam Roofing",
  },
  {
    id: "005",
    folder: "blog-005",
    thumbnailFilename: "Extreme-Weather.jpg",
    slug: "why-metal-buildings-withstand-extreme-weather-better",
    title: "Why Metal Buildings Withstand Extreme Weather Better?",
    category: "Industrial Buildings",
    publishedAt: "2025-07-05",
    readingTime: "5 min read",
    excerpt:
      "Metal Buildings Withstand Extreme Weather. Climate uncertainty is real. Around the world—and especially in India—extreme heatwaves, aggressive monsoons and severe weather events are increasing.",
    featured: false,
    tags:
      "Accessories for PEB, Cladding Sheets, Construction, Fabrication, Industry, Metal Buildings Withstand Extreme Weather, PEB, Pre Engineered buildings, Roofing Sheets, Sheeting Accessories, Standing Seam Roofing, Why Metal Buildings are Resilient to Extreme Weather?, Why Metal Buildings Withstand Extreme Weather Better?",
    seoTitle:
      "Why Metal Buildings Withstand Extreme Weather Better?",
    seoDescription:
      "Discover why metal and Pre-Engineered Buildings offer better structural resilience, durability and protection against extreme weather conditions.",
    seoKeywords:
      "Accessories for PEB, Cladding Sheets, Construction, Fabrication, Industry, Metal Buildings Withstand Extreme Weather, PEB, Pre Engineered buildings, Roofing Sheets, Sheeting Accessories, Standing Seam Roofing, Why Metal Buildings are Resilient to Extreme Weather?, Why Metal Buildings Withstand Extreme Weather Better?",
  },
  {
    id: "006",
    folder: "blog-006",
    thumbnailFilename: "PEB-Multi-Storey.jpg",
    slug: "top-benefits-of-prefab-multi-storey-buildings",
    title: "Top Benefits of Prefab Multi Storey Buildings",
    category: "Industrial Buildings",
    publishedAt: "2025-07-05",
    readingTime: "5 min read",
    excerpt:
      "Prefab Multi Storey Buildings. In the ever-evolving world of modern construction, pre-engineered multi-storey offices have emerged as a rational, fast and efficient building solution.",
    featured: false,
    tags:
      "Accessories for PEB, Cladding Sheets, Construction, Fabrication, Industry, PEB, Prefab Multi Storey Buildings, Roofing Sheets, Sheeting Accessories, Standing Seam Roofing",
    seoTitle:
      "Top Benefits of Prefab Multi Storey Pre Engineered Buildings",
    seoDescription:
      "Explore the major benefits of prefab multi-storey Pre-Engineered Buildings, including faster construction, flexibility and efficient use of space.",
    seoKeywords:
      "Accessories for PEB, Cladding Sheets, Construction, Fabrication, Industry, PEB, Prefab Multi Storey Buildings, Roofing Sheets, Sheeting Accessories, Standing Seam Roofing",
  },
  {
    id: "007",
    folder: "blog-007",
    thumbnailFilename: "PEB-Components-Advantages.jpg",
    slug: "pre-engineered-buildings-components-and-advantages",
    title: "Pre-Engineered Buildings: Components and Advantages",
    category: "PEB Knowledge",
    publishedAt: "2025-07-04",
    readingTime: "4 min read",
    excerpt:
      "Pre-Engineered Buildings: Components and Advantages. In the fast-evolving landscape of construction, Pre-Engineered Buildings have emerged as a highly efficient and versatile building solution.",
    featured: false,
    tags:
      "Accessories for PEB, Cladding Sheets, Components and Advantages, Construction, Fabrication, Industry, PEB, Pre Engineered buildings, Pre-Engineered Buildings: Components and Advantages, Sheeting Accessories, Standing Seam Roofing",
    seoTitle:
      "Pre Engineered Buildings - Components & Advantages",
    seoDescription:
      "Understand the main components and advantages of Pre-Engineered Buildings, including structural framing, roofing, cladding and accessories.",
    seoKeywords:
      "Accessories for PEB, Cladding Sheets, Components and Advantages, Construction, Fabrication, Industry, PEB, Pre Engineered buildings, Pre-Engineered Buildings: Components and Advantages, Sheeting Accessories, Standing Seam Roofing",
  },
  {
    id: "008",
    folder: "blog-008",
    thumbnailFilename: "Monsoon-Ready-PEB-Structures.jpg",
    slug:
      "making-structures-monsoon-ready-how-peb-buildings-outperform-traditional-indian-solutions",
    title:
      "Monsoon-Ready PEB Structures Outperform Traditional Indian Solutions",
    category: "PEB Knowledge",
    publishedAt: "2025-07-03",
    readingTime: "5 min read",
    excerpt:
      "Making Structures Monsoon-Ready: How PEB Buildings Outperform Traditional Indian Solutions. Every year, the monsoon season creates significant challenges for buildings across India.",
    featured: false,
    tags:
      "Accessories for PEB, Cladding Sheets, Construction, Fabrication, Industry, Making Structures Monsoon-Ready: How PEB Buildings Outperform Traditional Indian Solutions, Monsoon ready peb, PEB, Pre Engineered buildings, Prefab structure, Roofing Sheets, Sheeting Accessories, Standing Seam Roofing",
    seoTitle:
      "Making PEB Structures Monsoon-Ready with Traditional Solutions",
    seoDescription:
      "Learn how monsoon-ready PEB structures can provide better drainage, weather protection and durability than many traditional construction solutions.",
    seoKeywords:
      "Accessories for PEB, Cladding Sheets, Construction, Fabrication, Industry, Making Structures Monsoon-Ready: How PEB Buildings Outperform Traditional Indian Solutions, Monsoon ready peb, PEB, Pre Engineered buildings, Prefab structure, Roofing Sheets, Sheeting Accessories, Standing Seam Roofing",
  },
  {
    id: "009",
    folder: "blog-009",
    thumbnailFilename: "Durable-PEB-Buildings.jpg",
    slug: "durable-peb-buildings-prioritizing-design-from-inception",
    title:
      "Steelbuild Infra Projects Ltd’s Secret to Durable PEB Buildings",
    category: "PEB Knowledge",
    publishedAt: "2025-02-12",
    readingTime: "4 min read",
    excerpt:
      "Durable PEB Buildings. Design plays a crucial role in Pre-Engineered Building construction, supporting cost-effective solutions, structural efficiency and long-term performance.",
    featured: false,
    tags:
      "Durable PEB Buildings, Pre Engineered buildings, Prioritizing Design from Inception, Secret to Durable PEB Buildings, Steelbuild Infra Projects Ltd’s Secret to Durable PEB Buildings",
    seoTitle:
      "Steelbuild Infra Projects Ltd’s Secret to Durable PEB Buildings",
    seoDescription:
      "Discover how design planning, engineering precision and quality manufacturing contribute to durable and high-performance PEB buildings.",
    seoKeywords:
      "Durable PEB Buildings, Pre Engineered buildings, Prioritizing Design from Inception, Secret to Durable PEB Buildings, Steelbuild Infra Projects Ltd’s Secret to Durable PEB Buildings",
  },
  {
    id: "010",
    folder: "blog-010",
    thumbnailFilename: "Rockwool-Sandwich-Panels.jpg",
    slug:
      "soundproof-your-peb-or-prefab-with-rockwool-sandwich-panels",
    title:
      "How Can You Soundproof Your PEB or Prefab with Rockwool Sandwich Panels?",
    category: "Panels & Insulation",
    publishedAt: "2025-02-11",
    readingTime: "6 min read",
    excerpt:
      "Rockwool Sandwich Panels. As industries and businesses adopt modern construction solutions, soundproofing has become an essential consideration for industrial and commercial buildings.",
    featured: false,
    tags:
      "Panels, Pre Engineered buildings, Rockwool Sandwich Panels, Soundproof Your PEB",
    seoTitle:
      "How Can You Soundproof Your PEB or Prefab with Rockwool Sandwich Panels?",
    seoDescription:
      "Learn how Rockwool sandwich panels improve acoustic insulation, fire resistance and thermal performance in PEB and prefab buildings.",
    seoKeywords:
      "Panels, Pre Engineered buildings, Rockwool Sandwich Panels, Soundproof Your PEB",
  },
    {
    id: "011",
    folder: "blog-011",
    thumbnailFilename:
      "Promising-Future-For-Indian-Construction.jpg",
    slug: "pre-engineered-building-systems",
    title:
      "Pre-Engineered Building Systems: A Promising Future for Indian Construction",
    category: "PEB Knowledge",
    publishedAt: "2025-02-08",
    readingTime: "4 min read",
    excerpt:
      "Pre-Engineered Building Systems. India’s construction landscape is undergoing a remarkable transformation. With initiatives like Make in India and growing industrial development, efficient steel construction systems are gaining importance.",
    featured: true,
    tags:
      "Pre Engineered buildings, Pre-Engineered Building Systems",
    seoTitle:
      "Pre-Engineered Building Systems: A Promising Future for Indian Construction",
    seoDescription:
      "Explore how Pre-Engineered Building systems are supporting the future of Indian construction through speed, efficiency, flexibility and industrial growth.",
    seoKeywords:
      "Pre Engineered buildings, Pre-Engineered Building Systems",
  },
  {
    id: "012",
    folder: "blog-012",
    thumbnailFilename:
      "Indias-Commercial-Construction.jpg",
    slug:
      "pre-engineered-buildings-pebs-shape-indias-commercial-construction",
    title:
      "How Can Pre-Engineered Buildings (PEBs) Shape India’s Commercial Construction?",
    category: "Construction & Engineering",
    publishedAt: "2025-02-08",
    readingTime: "5 min read",
    excerpt:
      "Pre-Engineered Buildings. Commercial construction in India is undergoing a rapid transformation. The need for cost-effective, durable and scalable infrastructure is encouraging businesses to adopt modern steel building solutions.",
    featured: true,
    tags:
      "Construction, Pre Engineered buildings",
    seoTitle:
      "How Can Pre-Engineered Buildings (PEBs) Shape India’s Commercial Construction?",
    seoDescription:
      "Discover how Pre-Engineered Buildings can shape India’s commercial construction through faster delivery, scalability, durability and cost efficiency.",
    seoKeywords:
      "Construction, Pre Engineered buildings",
  },
  {
    id: "013",
    folder: "blog-013",
    thumbnailFilename: "Future-of-Construction-PEB.jpg",
    slug: "the-future-of-construction-peb",
    title:
      "The Future of Construction: Why PEB Buildings are Becoming Popular?",
    category: "Industry Insights",
    publishedAt: "2025-02-06",
    readingTime: "5 min read",
    excerpt:
      "Future of Construction – PEB. The construction industry is undergoing a major transformation. In India, the demand for faster, cost-effective and sustainable building solutions is increasing the popularity of Pre-Engineered Buildings.",
    featured: true,
    tags:
      "advanced construction techniques, benefits of PEB buildings, building efficiency, building innovation, commercial construction, construction automation, construction technology, construction trends, cost effective construction, durable construction materials, eco friendly buildings, energy efficient buildings, fast construction methods, future building materials, future of construction, global construction trends, green construction, high rise steel buildings, India construction industry, industrial construction, industrial shed construction, industrial warehouse design, infrastructure development, logistics infrastructure, low maintenance buildings, modern architecture, modern construction methods, modular construction, next generation buildings, offsite construction, PEB advantages, PEB buildings, PEB contractors, PEB popularity, PEB vs RCC, Pre Engineered buildings, pre engineered steel structures, prefabricated buildings, rapid building solutions, smart construction, steel building solutions, steel building systems, steel construction, steel fabrication, steel infrastructure, steel structure buildings, sustainable construction, turnkey construction, warehouse construction",
    seoTitle:
      "The Future of Construction: Why PEB Buildings are Becoming Popular?",
    seoDescription:
      "Explore why PEB buildings are becoming popular in modern construction through speed, cost efficiency, sustainability, durability and flexible engineering.",
    seoKeywords:
      "advanced construction techniques, benefits of PEB buildings, building efficiency, building innovation, commercial construction, construction automation, construction technology, construction trends, cost effective construction, durable construction materials, eco friendly buildings, energy efficient buildings, fast construction methods, future building materials, future of construction, global construction trends, green construction, high rise steel buildings, India construction industry, industrial construction, industrial shed construction, industrial warehouse design, infrastructure development, logistics infrastructure, low maintenance buildings, modern architecture, modern construction methods, modular construction, next generation buildings, offsite construction, PEB advantages, PEB buildings, PEB contractors, PEB popularity, PEB vs RCC, Pre Engineered buildings, pre engineered steel structures, prefabricated buildings, rapid building solutions, smart construction, steel building solutions, steel building systems, steel construction, steel fabrication, steel infrastructure, steel structure buildings, sustainable construction, turnkey construction, warehouse construction",
  },
  {
    id: "014",
    folder: "blog-014",
    thumbnailFilename: "PEB-For-Your-Business.jpg",
    slug:
      "top-8-benefits-of-peb-buildings-for-your-business",
    title:
      "Top 8 Benefits of PEB Buildings for Your Business",
    category: "PEB Knowledge",
    publishedAt: "2025-02-04",
    readingTime: "4 min read",
    excerpt:
      "Benefits of PEB. Competition among businesses is intense. Companies need efficient, cost-effective and scalable infrastructure, making Pre-Engineered Buildings a practical solution for modern industrial growth.",
    featured: true,
    tags:
      "Cost-Effectiveness, Customization and Flexibility, Durability and Strength, Energy Efficiency, PEB, PEB Benefits, Pre Engineered buildings, Speedy Construction, Sustainability, Top 8 Benefits of PEB Buildings for Your Business",
    seoTitle:
      "Top 8 Benefits of PEB Buildings for Your Business",
    seoDescription:
      "Explore the top benefits of PEB buildings for businesses, including fast construction, cost efficiency, durability, flexibility, energy performance and sustainability.",
    seoKeywords:
      "Cost-Effectiveness, Customization and Flexibility, Durability and Strength, Energy Efficiency, PEB, PEB Benefits, Pre Engineered buildings, Speedy Construction, Sustainability, Top 8 Benefits of PEB Buildings for Your Business",
  },
  {
    id: "015",
    folder: "blog-015",
    thumbnailFilename: "Right-PEB-Suppliers.jpg",
    slug: "how-to-choose-the-right-peb-suppliers",
    title:
      "How to Choose the Right PEB Suppliers for Your Construction Project",
    category: "Construction & Engineering",
    publishedAt: "2025-02-03",
    readingTime: "7 min read",
    excerpt:
      "PEB Suppliers. The world of construction is evolving at a rapid pace. India is witnessing a significant transformation in how buildings are designed, manufactured and delivered.",
    featured: false,
    tags:
      "Construction, Pre Engineered buildings",
    seoTitle:
      "How to Choose the Right PEB Suppliers for Your Construction Project",
    seoDescription:
      "Learn how to evaluate and select the right PEB supplier based on engineering expertise, manufacturing capacity, quality systems, project experience and execution support.",
    seoKeywords:
      "Construction, Pre Engineered buildings",
  },
  {
    id: "016",
    folder: "blog-016",
    thumbnailFilename: "Top-7-Use-Cases.jpg",
    slug:
      "top-7-use-cases-of-pre-engineered-buildings-peb-for-efficiency-and-sustainability",
    title:
      "Top 7 Use Cases of Pre-Engineered Buildings (PEB) for Efficiency and Sustainability",
    category: "PEB Knowledge",
    publishedAt: "2025-01-30",
    readingTime: "5 min read",
    excerpt:
      "Use Cases of Pre-Engineered Buildings. PEB systems have transformed the construction industry by making buildings faster, more efficient, flexible and suitable for a wide range of industrial applications.",
    featured: false,
    tags:
      "Pre Engineered buildings, Top 7 Use Cases of PEB Buildings Explained, Top 7 Use Cases of PEB Buildings Explained for Steelbuild Infra Projects Ltd",
    seoTitle:
      "Top 7 Use Cases of Pre-Engineered Buildings (PEB) for Efficiency and Sustainability",
    seoDescription:
      "Explore seven important applications of Pre-Engineered Buildings across industrial, commercial, warehouse and infrastructure projects.",
    seoKeywords:
      "Pre Engineered buildings, Top 7 Use Cases of PEB Buildings Explained, Top 7 Use Cases of PEB Buildings Explained for Steelbuild Infra Projects Ltd",
  },
    {
    id: "017",
    folder: "blog-017",
    thumbnailFilename: "Sandwich-PUF-Panels.jpg",
    slug:
      "top-5-reasons-to-choose-puf-sandwich-panels-for-your-industrial-building",
    title:
      "Top 5 Reasons to Choose PUF Sandwich Panels for Your Industrial Building",
    category: "Panels & Insulation",
    publishedAt: "2025-01-30",
    readingTime: "4 min read",
    excerpt:
      "PUF sandwich panels, a major component in PEB structures, are widely used in industrial applications because they provide insulation, durability, faster installation and efficient building performance.",
    featured: false,
    tags:
      "Construction, Pre Engineered buildings, PUF Sandwich Panels, Top 5 Reasons to Choose PUF Sandwich Panels for Your Industrial Building",
    seoTitle:
      "Top 5 Reasons to Choose PUF Sandwich Panels for Your Industrial Building",
    seoDescription:
      "Discover why PUF sandwich panels are widely used in industrial buildings for insulation, durability, energy efficiency and faster construction.",
    seoKeywords:
      "Construction, Pre Engineered buildings, PUF Sandwich Panels, Top 5 Reasons to Choose PUF Sandwich Panels for Your Industrial Building",
  },
  {
    id: "018",
    folder: "blog-018",
    thumbnailFilename: "Industrial-Sheds.jpg",
    slug:
      "peb-industrial-sheds-why-is-it-the-backbone-of-modern-manufacturing",
    title:
      "PEB Industrial Sheds: Why is it the Backbone of Modern Manufacturing?",
    category: "Industrial Buildings",
    publishedAt: "2025-01-29",
    readingTime: "5 min read",
    excerpt:
      "PEB industrial sheds are not just structures; they are the backbone of efficient manufacturing processes, supporting production layouts, machinery, storage and future expansion.",
    featured: false,
    tags:
      "PEB Industrial Sheds, PEB Industrial Sheds: Why is it the Backbone of Modern Manufacturing?",
    seoTitle:
      "PEB Industrial Sheds: Why is it the Backbone of Modern Manufacturing?",
    seoDescription:
      "Learn why PEB industrial sheds support modern manufacturing through efficient layouts, faster construction, durability and expansion flexibility.",
    seoKeywords:
      "PEB Industrial Sheds, PEB Industrial Sheds: Why is it the Backbone of Modern Manufacturing?",
  },
  {
    id: "019",
    folder: "blog-019",
    thumbnailFilename: "Commercial-PEB.jpg",
    slug:
      "why-pre-engineered-commercial-buildings-are-a-smart-choice-for-modern-construction",
    title:
      "Why Pre-Engineered Commercial Buildings are a Smart Choice for Modern Construction",
    category: "Construction & Engineering",
    publishedAt: "2025-01-29",
    readingTime: "5 min read",
    excerpt:
      "Pre-engineered commercial buildings offer speed, strength, adaptability and sustainability, making them a practical choice for modern commercial construction.",
    featured: false,
    tags:
      "Pre-Engineered Commercial Buildings, Why Pre-Engineered Commercial Buildings are a Smart Choice for Modern Construction",
    seoTitle:
      "Why Pre-Engineered Commercial Buildings are a Smart Choice for Modern Construction",
    seoDescription:
      "Explore why pre-engineered commercial buildings offer faster construction, flexibility, structural strength and sustainable performance.",
    seoKeywords:
      "Pre-Engineered Commercial Buildings, Why Pre-Engineered Commercial Buildings are a Smart Choice for Modern Construction",
  },
  {
    id: "020",
    folder: "blog-020",
    thumbnailFilename:
      "Prefab-Factory-vs-Tradition-Construction.jpg",
    slug:
      "prefab-factory-vs-traditional-construction-a-cost-benefit-analysis-of-an-industrial-factory-building",
    title:
      "Prefab Factory vs. Traditional Construction: A Cost-Benefit Analysis of an Industrial Factory Building",
    category: "Construction & Engineering",
    publishedAt: "2025-01-28",
    readingTime: "5 min read",
    excerpt:
      "When a business plans an industrial factory building, comparing prefab construction with traditional methods helps evaluate cost, speed, flexibility and long-term operational value.",
    featured: false,
    tags:
      "Construction, Pre Engineered buildings, Prefab Factory, Prefab Factory vs. Traditional Construction, Traditional Construction",
    seoTitle:
      "Prefab Factory vs. Traditional Construction: A Cost-Benefit Analysis of an Industrial Factory Building",
    seoDescription:
      "Compare prefab factories and traditional construction based on cost, project duration, flexibility, quality and industrial building performance.",
    seoKeywords:
      "Construction, Pre Engineered buildings, Prefab Factory, Prefab Factory vs. Traditional Construction, Traditional Construction",
  },
  {
    id: "021",
    folder: "blog-021",
    thumbnailFilename: "Prefab-Commercial-Buildings.jpg",
    slug:
      "future-trends-and-innovations-in-prefab-commercial-buildings",
    title:
      "Future Trends and Innovations in Prefab Commercial Buildings",
    category: "Industry Insights",
    publishedAt: "2025-01-27",
    readingTime: "6 min read",
    excerpt:
      "Prefab commercial buildings have gained popularity as businesses increasingly recognize their cost efficiency, design flexibility, speed and sustainable construction advantages.",
    featured: false,
    tags:
      "Future Trends and Innovations in Prefab Commercial Buildings, Pre Engineered buildings, Prefab Commercial Buildings",
    seoTitle:
      "Future Trends and Innovations in Prefab Commercial Buildings",
    seoDescription:
      "Explore emerging trends and innovations shaping prefab commercial buildings, including modular design, sustainability and smart construction.",
    seoKeywords:
      "Future Trends and Innovations in Prefab Commercial Buildings, Pre Engineered buildings, Prefab Commercial Buildings",
  },
  {
    id: "022",
    folder: "blog-022",
    thumbnailFilename: "Perfect-Prefab-Partner.jpg",
    slug:
      "how-to-choose-the-right-prefab-commercial-building-partner",
    title:
      "How to Choose the Right Prefab Commercial Building Partner?",
    category: "Construction & Engineering",
    publishedAt: "2025-01-27",
    readingTime: "5 min read",
    excerpt:
      "Choosing the right prefab commercial building partner requires evaluating engineering capability, manufacturing quality, project experience, communication and execution support.",
    featured: false,
    tags:
      "How to Choose the Right Prefab Commercial Building Partner?, Steps to Evaluate Potential Prefab Partners, Understanding the Role of a Prefab Commercial Building Partner",
    seoTitle:
      "How to Choose the Right Prefab Commercial Building Partner?",
    seoDescription:
      "Learn how to select a reliable prefab commercial building partner based on design, manufacturing, quality, experience and execution capability.",
    seoKeywords:
      "How to Choose the Right Prefab Commercial Building Partner?, Steps to Evaluate Potential Prefab Partners, Understanding the Role of a Prefab Commercial Building Partner",
  },
  {
    id: "023",
    folder: "blog-023",
    thumbnailFilename:
      "Common-Parameters-For-Roofing-Sheets.jpg",
    slug: "common-parameters-for-selecting-the-right-roofing-sheets",
    title:
      "Common Parameters for Selecting the Right Roofing Sheets",
    category: "Roofing & Cladding",
    publishedAt: "2025-01-27",
    readingTime: "5 min read",
    excerpt:
      "Selecting the right roofing sheets requires evaluating material type, durability, weather resistance, insulation, maintenance and compatibility with the building system.",
    featured: false,
    tags:
      "Common Parameters for Selecting the Right Roofing Sheet, Durability and Lifespan, Material Type: The Foundation of Roofing Sheets, Roofing Sheets, Roofing Sheets for PEB",
    seoTitle:
      "Common Parameters for Selecting the Right Roofing Sheets",
    seoDescription:
      "Understand the important parameters for choosing roofing sheets, including material, durability, weather resistance, maintenance and building application.",
    seoKeywords:
      "Common Parameters for Selecting the Right Roofing Sheet, Durability and Lifespan, Material Type: The Foundation of Roofing Sheets, Roofing Sheets, Roofing Sheets for PEB",
  },
  {
    id: "024",
    folder: "blog-024",
    thumbnailFilename: "Purlin-Or-Structural-Steel.jpg",
    slug:
      "purlin-or-structural-steel-which-is-better-for-your-shed-in-pre-engineered-buildings",
    title:
      "Purlin or Structural Steel? Which is Better for Your Shed in Pre-Engineered Buildings?",
    category: "Construction & Engineering",
    publishedAt: "2025-01-25",
    readingTime: "5 min read",
    excerpt:
      "When designing a shed or warehouse, the choice between purlins and structural steel depends on loading, span, application, building configuration and engineering requirements.",
    featured: false,
    tags:
      "Purlin or Structural Steel, Purlin or Structural Steel? Which is Better for Your Shed in Pre-Engineered Buildings?, Purlin or Structural Steel? Which is Better?",
    seoTitle:
      "Purlin or Structural Steel? Which is Better for Your Shed in Pre-Engineered Buildings?",
    seoDescription:
      "Compare purlins and structural steel for PEB sheds based on strength, application, span, loading and construction requirements.",
    seoKeywords:
      "Purlin or Structural Steel, Purlin or Structural Steel? Which is Better for Your Shed in Pre-Engineered Buildings?, Purlin or Structural Steel? Which is Better?",
  },
  {
    id: "025",
    folder: "blog-025",
    thumbnailFilename: "Know-When-To-Replace-Roof-Deck.jpg",
    slug: "know-when-to-replace-roof-deck",
    title: "Deck Sheets: Know When to Replace Your Roof Deck",
    category: "Roofing & Cladding",
    publishedAt: "2025-01-24",
    readingTime: "6 min read",
    excerpt:
      "Roof decks are essential to structural integrity. Identifying corrosion, deformation, leakage and deterioration early helps determine when deck sheets require replacement.",
    featured: false,
    tags:
      "Choosing the Right Deck Sheets for Replacement, Know when to replace roof deck, Signs Your Roof Deck Sheets Need Replacement, Steps to Replace Roof Deck Sheets, The Importance of Timely Replacement, Tips for Maintaining Roof Deck Sheets, Understanding Roof Deck Sheets",
    seoTitle: "Deck Sheets: Know When to Replace Your Roof Deck",
    seoDescription:
      "Learn the signs that indicate your roof deck or deck sheets require repair or replacement to maintain structural safety and performance.",
    seoKeywords:
      "Choosing the Right Deck Sheets for Replacement, Know when to replace roof deck, Signs Your Roof Deck Sheets Need Replacement, Steps to Replace Roof Deck Sheets, The Importance of Timely Replacement, Tips for Maintaining Roof Deck Sheets, Understanding Roof Deck Sheets",
  },
  {
    id: "026",
    folder: "blog-026",
    thumbnailFilename: "Prepare-Roof-For-Winter.jpg",
    slug: "how-to-prepare-your-roof-for-winter",
    title: "How to Prepare Your Roof for Winter",
    category: "Roofing & Cladding",
    publishedAt: "2025-01-24",
    readingTime: "7 min read",
    excerpt:
      "Preparing a roof for winter includes inspection, leak repairs, drainage checks, insulation review, ventilation improvement and planning for severe weather conditions.",
    featured: false,
    tags:
      "Check Attic Insulation and Ventilation, Dealing with Heavy Snow Accumulation, Essential Tips to Prep Your Roof for Winter, How to Prepare Your Roof for Winter, Install Snow Guards and Roof Coatings, Repair Leaks and Damages Promptly, Understanding the Importance of Roof Preparation",
    seoTitle: "How to Prepare Your Roof for Winter",
    seoDescription:
      "Learn how to prepare industrial and commercial roofs for winter through inspections, repairs, insulation, ventilation and preventive maintenance.",
    seoKeywords:
      "Check Attic Insulation and Ventilation, Dealing with Heavy Snow Accumulation, Essential Tips to Prep Your Roof for Winter, How to Prepare Your Roof for Winter, Install Snow Guards and Roof Coatings, Repair Leaks and Damages Promptly, Understanding the Importance of Roof Preparation",
  },
  {
    id: "027",
    folder: "blog-027",
    thumbnailFilename: "Evolution-Of-PEB.jpg",
    slug:
      "the-evolution-of-pre-engineered-buildings-benefits-and-key-features",
    title:
      "The Evolution of Pre-Engineered Buildings: Benefits and Key Features",
    category: "PEB Knowledge",
    publishedAt: "2025-01-21",
    readingTime: "6 min read",
    excerpt:
      "Pre-Engineered Buildings have emerged as a transformative construction solution, offering speed, cost efficiency, engineering precision, flexibility and sustainable performance.",
    featured: true,
    tags:
      "A Brief History of Pre engineered Buildings, Applications of Pre-Engineered Buildings, Benefits of Pre-Engineered Buildings, Future Prospects of Pre-Engineered Buildings, Highlighting Key Manufacturers and Technological Advancements, How did the pre-engineered buildings evolve from metal buildings, Key Features of Pre-Engineered Buildings, Key Manufacturers Leading the Way, Major Benefits of Pre Engineered Metal Buildings, Steelbuild Infra Projects Ltd: Leading the PEB Revolution, The Evolution of PEB: A Historical Perspective, The Evolution of Pre-Engineered Buildings, The Evolution of Pre-Engineered Buildings (PEB) in India, The Evolution of Pre-Engineered Buildings: Benefits and Key Features, The Evolution of Pre-Engineered Buildings: Trends and Future Prospects, The Genesis and Growth of Pre-Engineered Buildings in India",
    seoTitle:
      "The Evolution of Pre-Engineered Buildings: Benefits and Key Features",
    seoDescription:
      "Explore the evolution of Pre-Engineered Buildings, their major benefits, structural features, applications and future growth.",
    seoKeywords:
      "A Brief History of Pre engineered Buildings, Applications of Pre-Engineered Buildings, Benefits of Pre-Engineered Buildings, Future Prospects of Pre-Engineered Buildings, Highlighting Key Manufacturers and Technological Advancements, How did the pre-engineered buildings evolve from metal buildings, Key Features of Pre-Engineered Buildings, Key Manufacturers Leading the Way, Major Benefits of Pre Engineered Metal Buildings, Steelbuild Infra Projects Ltd: Leading the PEB Revolution, The Evolution of PEB: A Historical Perspective, The Evolution of Pre-Engineered Buildings, The Evolution of Pre-Engineered Buildings (PEB) in India, The Evolution of Pre-Engineered Buildings: Benefits and Key Features, The Evolution of Pre-Engineered Buildings: Trends and Future Prospects, The Genesis and Growth of Pre-Engineered Buildings in India",
  },
  {
    id: "028",
    folder: "blog-028",
    thumbnailFilename: "Metal-Louvers.jpg",
    slug: "everything-you-need-to-know-about-metal-louvers",
    title: "Everything You Need to Know About Metal Louvers",
    category: "Roofing & Cladding",
    publishedAt: "2025-01-15",
    readingTime: "7 min read",
    excerpt:
      "Metal louvers combine ventilation, weather protection and architectural appearance, making them valuable components in modern industrial and commercial buildings.",
    featured: false,
    tags:
      "Advantages of Metal Louvers by Steelbuild Infra Projects Ltd, Design and Manufacturing Process for Metal Louvers, Emerging Trends in Metal Louvers, Everything You Need to Know About Metal Louvers, Installation and Maintenance for Metal Louvers, Materials Used in Metal Louvers, Metal Louvers, Metal Louvers in PEB, Metal Louvers Steelbuild, Metal Louvers Steelbuild Infra Projects Ltd, PEB Metal Louvers, Types of Metal Louvers, Why Choose Steelbuild Infra Projects Ltd for Metal Louvers?",
    seoTitle: "Everything You Need to Know About Metal Louvers",
    seoDescription:
      "Learn about metal louvers, their types, materials, applications, manufacturing, ventilation benefits and maintenance requirements.",
    seoKeywords:
      "Advantages of Metal Louvers by Steelbuild Infra Projects Ltd, Design and Manufacturing Process for Metal Louvers, Emerging Trends in Metal Louvers, Everything You Need to Know About Metal Louvers, Installation and Maintenance for Metal Louvers, Materials Used in Metal Louvers, Metal Louvers, Metal Louvers in PEB, Metal Louvers Steelbuild, Metal Louvers Steelbuild Infra Projects Ltd, PEB Metal Louvers, Types of Metal Louvers, Why Choose Steelbuild Infra Projects Ltd for Metal Louvers?",
  },
  {
    id: "029",
    folder: "blog-029",
    thumbnailFilename: "Top-10-PEB-Companies-In-India.jpg",
    slug:
      "top-10-peb-companies-in-india-leading-the-way-in-pre-engineered-building-solutions",
    title:
      "Top 10 PEB Companies in India: Leading the Way in Pre-Engineered Building Solutions",
    category: "PEB Knowledge",
    publishedAt: "2025-01-03",
    readingTime: "7 min read",
    excerpt:
      "The Pre-Engineered Building sector in India has transformed industrial construction through faster delivery, efficient design and scalable steel building solutions.",
    featured: true,
    tags:
      "10 Top PEB Comapnies in Punjab, 10 Top PEB companies in Bhutan, 10 Top PEB Companies in Delhi, 10 Top PEB Companies in Delhi NCR, 10 TOp PEB companies in Haryana, 10 top PEB companies in india, 10 Top PEB companies in NCR, 10 Top PEB companies in Nepal, 10 Top PEB companies in Rajasthan, Pre Engineered buildings, Top 10 PEB companies, Top PEB companies in India, Top PEB Company",
    seoTitle:
      "Top 10 PEB Companies in India: Leading the Way in Pre-Engineered Building Solutions",
    seoDescription:
      "Explore leading PEB companies in India and understand how they support industrial construction through engineering, manufacturing and project execution.",
    seoKeywords:
      "Top 10 PEB companies in India, Top PEB Companies in India, PEB companies India, Pre Engineered buildings, Top PEB Company",
  },
  {
    id: "030",
    folder: "blog-030",
    thumbnailFilename: "Plant-Facility.jpg",
    slug:
      "revolutionizing-construction-with-steelbuild-infras-advanced-plant-facility",
    title:
      "Advanced Plant Facility - Revolutionizing Construction with Steelbuild Infra",
    category: "Manufacturing",
    publishedAt: "2024-12-18",
    readingTime: "4 min read",
    excerpt:
      "Steelbuild Infra focuses on innovation, precision and efficiency through advanced plant facilities supporting Pre-Engineered Building manufacturing.",
    featured: false,
    tags:
      "Plant Facility, Plant Facility in PEB, Plant Facility in Pre Engineered Buildings, Plant Facility PEB, Plant Facility Pre Engineered Buildings, Pre Engineered buildings",
    seoTitle:
      "Advanced Plant Facility - Revolutionizing Construction with Steelbuild Infra",
    seoDescription:
      "Explore how Steelbuild’s advanced manufacturing facilities support precision, efficiency and quality in Pre-Engineered Building production.",
    seoKeywords:
      "Plant Facility, Plant Facility in PEB, Plant Facility in Pre Engineered Buildings, Plant Facility PEB, Plant Facility Pre Engineered Buildings, Pre Engineered buildings",
  },
  {
    id: "031",
    folder: "blog-031",
    thumbnailFilename: "Project-Management-Consultancy.jpg",
    slug:
      "unleashing-excellence-in-construction-steelbuilds-project-management-consultancy",
    title:
      "Steelbuild's Project Management Consultancy: Unleashing Excellence in Construction",
    category: "Construction & Engineering",
    publishedAt: "2024-12-17",
    readingTime: "4 min read",
    excerpt:
      "Steelbuild’s project management consultancy supports coordination, planning, quality, execution control and successful delivery of Pre-Engineered Building projects.",
    featured: false,
    tags:
      "Pre Engineered buildings, Project Management Consultancy, Project Management Consultancy for PEB, Project Management Consultancy for Pre Engineered Buildings, Project Management Consultancy in PEB, Project Management Consultancy in Pre Engineered Buildings",
    seoTitle:
      "Steelbuild's Project Management Consultancy: Unleashing Excellence in Construction",
    seoDescription:
      "Learn how Steelbuild’s project management consultancy supports planning, coordination, quality control and execution of PEB projects.",
    seoKeywords:
      "Pre Engineered buildings, Project Management Consultancy, Project Management Consultancy for PEB, Project Management Consultancy for Pre Engineered Buildings, Project Management Consultancy in PEB, Project Management Consultancy in Pre Engineered Buildings",
  },
  {
    id: "032",
    folder: "blog-032",
    thumbnailFilename: "Industrial-Coating.jpg",
    slug: "industrial-coating-building-the-dream-project-with-care",
    title: "Industrial Coating: Building the Dream Project with Care",
    category: "Manufacturing",
    publishedAt: "2024-12-16",
    readingTime: "4 min read",
    excerpt:
      "Industrial coatings protect structural steel against corrosion, environmental exposure and premature deterioration while supporting long-term building performance.",
    featured: false,
    tags:
      "Industrial Coating, Industrial Coating for PEB, Industrial Coating for Pre Engineered Buildings, Industrial Coating in PEB, Industrial Coating in Pre Engineered Buildings, Pre Engineered buildings",
    seoTitle:
      "Industrial Coating: Building the Dream Project with Care",
    seoDescription:
      "Understand the importance of industrial coatings in protecting PEB structures from corrosion and improving long-term durability.",
    seoKeywords:
      "Industrial Coating, Industrial Coating for PEB, Industrial Coating for Pre Engineered Buildings, Industrial Coating in PEB, Industrial Coating in Pre Engineered Buildings, Pre Engineered buildings",
  },
  {
    id: "033",
    folder: "blog-033",
    thumbnailFilename: "Accessories.jpg",
    slug: "a-comprehensive-guide-to-accessories",
    title:
      "Accessories in PEB Enhancing Pre-Engineered Building Construction",
    category: "Roofing & Cladding",
    publishedAt: "2024-12-07",
    readingTime: "4 min read",
    excerpt:
      "PEB accessories improve functionality, weather protection, ventilation, safety, appearance and overall performance of Pre-Engineered Building systems.",
    featured: false,
    tags:
      "Accessories, Accessories for PEB, Accessories for Pre Engineered Buildings, Accessories in PEB, Accessories in Pre Engineered Buildings, Construction, Pre Engineered buildings",
    seoTitle:
      "Accessories in PEB Enhancing Pre-Engineered Building Construction",
    seoDescription:
      "Explore important PEB accessories and how they improve weather protection, ventilation, safety and building performance.",
    seoKeywords:
      "Accessories, Accessories for PEB, Accessories for Pre Engineered Buildings, Accessories in PEB, Accessories in Pre Engineered Buildings, Construction, Pre Engineered buildings",
  },
  {
    id: "034",
    folder: "blog-034",
    thumbnailFilename: "Insulation.jpg",
    slug: "role-of-insulation-in-modern-infrastructure",
    title:
      "Role of Insulation in Modern Infrastructure: A Comprehensive Guide",
    category: "Panels & Insulation",
    publishedAt: "2024-08-11",
    readingTime: "5 min read",
    excerpt:
      "Insulation plays an important role in modern infrastructure by improving thermal comfort, energy efficiency, acoustic performance and environmental control.",
    featured: false,
    tags:
      "Construction, Insulation, Insulation for PEB, Insulation for Pre Engineered Buildings, Insulation in PEB, Insulation in Pre Engineered Buildings, Pre Engineered buildings",
    seoTitle:
      "Role of Insulation in Modern Infrastructure: A Comprehensive Guide",
    seoDescription:
      "Learn how insulation improves energy efficiency, thermal comfort, acoustic performance and environmental control in modern buildings.",
    seoKeywords:
      "Construction, Insulation, Insulation for PEB, Insulation for Pre Engineered Buildings, Insulation in PEB, Insulation in Pre Engineered Buildings, Pre Engineered buildings",
  },
  {
    id: "035",
    folder: "blog-035",
    thumbnailFilename: "Sheeting-Accessories.jpg",
    slug:
      "steelbuild-sheeting-accessories-a-comprehensive-guide",
    title:
      "Steelbuild Sheeting Accessories - Enhancing Building Performance",
    category: "Roofing & Cladding",
    publishedAt: "2024-08-11",
    readingTime: "4 min read",
    excerpt:
      "Sheeting accessories support weather sealing, drainage, ventilation, finishing and long-term performance in Pre-Engineered Building roofing and cladding systems.",
    featured: false,
    tags:
      "Pre Engineered buildings, Sheeting Accessories, Sheeting Accessories for PEB, Sheeting Accessories for Pre Engineered Buildings, Sheeting Accessories in PEB, Sheeting Accessories in Pre Engineered Buildings",
    seoTitle:
      "Steelbuild Sheeting Accessories - Enhancing Building Performance",
    seoDescription:
      "Explore sheeting accessories used in PEB roofing and cladding systems for sealing, drainage, ventilation and finishing.",
    seoKeywords:
      "Pre Engineered buildings, Sheeting Accessories, Sheeting Accessories for PEB, Sheeting Accessories for Pre Engineered Buildings, Sheeting Accessories in PEB, Sheeting Accessories in Pre Engineered Buildings",
  },
  {
    id: "036",
    folder: "blog-036",
    thumbnailFilename: "Deck-Sheet.jpg",
    slug:
      "steelbuild-deck-sheets-solution-for-durable-and-efficient-flooring-systems",
    title:
      "Steelbuild Deck Sheets: The Ultimate Solution for Durable and Efficient Flooring Systems",
    category: "Roofing & Cladding",
    publishedAt: "2024-08-11",
    readingTime: "4 min read",
    excerpt:
      "Steelbuild deck sheets are designed for composite flooring systems, supporting concrete slabs through ribs, embossments and efficient structural integration.",
    featured: false,
    tags:
      "Deck Sheet, Deck Sheet for PEB, Deck Sheet for Pre Engineered Buildings, Deck Sheet in PEB, Deck Sheet in Pre Engineered Buildings, Pre Engineered buildings",
    seoTitle:
      "Steelbuild Deck Sheets: The Ultimate Solution for Durable and Efficient Flooring Systems",
    seoDescription:
      "Learn how Steelbuild deck sheets support durable composite flooring systems, faster installation and efficient slab construction.",
    seoKeywords:
      "Deck Sheet, Deck Sheet for PEB, Deck Sheet for Pre Engineered Buildings, Deck Sheet in PEB, Deck Sheet in Pre Engineered Buildings, Pre Engineered buildings",
  },
  {
    id: "037",
    folder: "blog-037",
    thumbnailFilename: "Standing-Seam-Roofing-Sheet.jpg",
    slug:
      "steelbuild-standing-seam-roofing-sheets-revolutionizing-modern-architecture",
    title:
      "Steelbuild Standing Seam Roofing Sheets: Revolutionizing Modern Architecture with Durability and Style",
    category: "Roofing & Cladding",
    publishedAt: "2024-08-11",
    readingTime: "5 min read",
    excerpt:
      "Standing seam roofing is a concealed-fastener system offering weather protection, reduced leakage risk, durability and a refined architectural appearance.",
    featured: false,
    tags:
      "Construction, Industry, Pre Engineered buildings, Standing Seam Roofing, Standing Seam Roofing for PEB, Standing Seam Roofing for Pre Engineered Buildings, Standing Seam Roofing in PEB, Standing Seam Roofing in Pre Engineered Buildings",
    seoTitle:
      "Steelbuild Standing Seam Roofing Sheets: Revolutionizing Modern Architecture with Durability and Style",
    seoDescription:
      "Explore the durability, concealed fastening, weather protection and architectural benefits of standing seam roofing systems.",
    seoKeywords:
      "Construction, Industry, Pre Engineered buildings, Standing Seam Roofing, Standing Seam Roofing for PEB, Standing Seam Roofing for Pre Engineered Buildings, Standing Seam Roofing in PEB, Standing Seam Roofing in Pre Engineered Buildings",
  },
  {
    id: "038",
    folder: "blog-038",
    thumbnailFilename: "Cladding-Sheet.jpg",
    slug: "steelbuild-cladding-sheets-transforming-modern-architecture",
    title:
      "Steelbuild Cladding Sheets: Transforming Modern Architecture with Strength and Style",
    category: "Roofing & Cladding",
    publishedAt: "2024-08-09",
    readingTime: "4 min read",
    excerpt:
      "Steelbuild cladding sheets provide external wall protection, structural durability, improved coverage and a refined architectural finish.",
    featured: false,
    tags:
      "Cladding Sheets, Cladding Sheets for PEB, Cladding Sheets for Pre Engineered Buildings, Cladding Sheets in PEB, Cladding Sheets in Pre Engineered Buildings, Construction, Fabrication, Pre Engineered buildings",
    seoTitle:
      "Steelbuild Cladding Sheets: Transforming Modern Architecture with Strength and Style",
    seoDescription:
      "Discover how Steelbuild cladding sheets improve durability, protection, coverage and architectural appearance in industrial buildings.",
    seoKeywords:
      "Cladding Sheets, Cladding Sheets for PEB, Cladding Sheets for Pre Engineered Buildings, Cladding Sheets in PEB, Cladding Sheets in Pre Engineered Buildings, Construction, Fabrication, Pre Engineered buildings",
  },
  {
    id: "039",
    folder: "blog-039",
    thumbnailFilename: "Roofing-Sheet.jpg",
    slug: "steelbuild-roofing-sheets-comprehensive-overview",
    title:
      "Steelbuild Roofing Sheets by Steelbuild Infra Projects Ltd.: A Comprehensive Overview",
    category: "Roofing & Cladding",
    publishedAt: "2024-08-09",
    readingTime: "8 min read",
    excerpt:
      "Steelbuild roofing sheets are important components in modern industrial and commercial construction, providing weather protection, durability and efficient building coverage.",
    featured: false,
    tags:
      "Design, Fabrication, Industry, Pre Engineered buildings, Roofing Sheets, Roofing Sheets for PEB, Roofing Sheets for Pre Engineered Buildings, Roofing Sheets in PEB, Roofing Sheets in Pre Engineered Buildings",
    seoTitle:
      "Steelbuild Roofing Sheets by Steelbuild Infra Projects Ltd.: A Comprehensive Overview",
    seoDescription:
      "Explore Steelbuild roofing sheets, their applications, performance, durability and role in modern industrial and commercial construction.",
    seoKeywords:
      "Design, Fabrication, Industry, Pre Engineered buildings, Roofing Sheets, Roofing Sheets for PEB, Roofing Sheets for Pre Engineered Buildings, Roofing Sheets in PEB, Roofing Sheets in Pre Engineered Buildings",
  },
  {
    id: "040",
    folder: "blog-040",
    thumbnailFilename: "Pre-Engineered-Buildings.jpg",
    slug: "pre-engineered-buildings-introductions-and-features",
    title: "Pre Engineered Buildings Introduction and Features",
    category: "PEB Knowledge",
    publishedAt: "2024-08-09",
    readingTime: "3 min read",
    excerpt:
      "Pre-Engineered Buildings are steel structures designed and fabricated in controlled factory environments before being delivered to the construction site for assembly.",
    featured: true,
    tags:
      "Accessories for PEB, Cladding Sheets, Deck Sheets, Insulations, PEB, PEB Erection, PEB Fabrication, Pre Engineered buildings, Roofing Sheets, Sheeting Accessories, Standing Seam Roof System, Standing Seam Roofing, Steel Structure",
    seoTitle: "Pre Engineered Buildings Introduction and Features",
    seoDescription:
      "Understand the introduction, components, manufacturing process and main features of Pre-Engineered Buildings.",
    seoKeywords:
      "Accessories for PEB, Cladding Sheets, Deck Sheets, Insulations, PEB, PEB Erection, PEB Fabrication, Pre Engineered buildings, Roofing Sheets, Sheeting Accessories, Standing Seam Roof System, Standing Seam Roofing, Steel Structure",
  },
];



export const blogs: Blog[] =
  blogData.map((blog) => ({
    id: blog.id,

    folder: blog.folder,

    slug: blog.slug,

    title: blog.title,

    excerpt: blog.excerpt,

    content:
      blog.content ?? "",

    category:
      blog.category,

    author:
      "Steelbuild Editorial Team",

    publishedAt:
      blog.publishedAt,

    readingTime:
      blog.readingTime,

    thumbnail:
      `/images/blogs/${blog.folder}/${blog.thumbnailFilename}`,

    featured:
      blog.featured,

    tags:
      splitList(blog.tags),

    seoTitle:
      blog.seoTitle,

    seoDescription:
      blog.seoDescription,

    seoKeywords:
      splitList(
        blog.seoKeywords,
      ),
  }));