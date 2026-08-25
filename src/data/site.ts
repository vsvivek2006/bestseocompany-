import {
  Search, MapPin, FileText, ShoppingCart, Building2, PenLine,
  Link2, ClipboardCheck, Globe, BarChart3, Users, Target,
  TrendingUp, ShieldCheck, Zap, LineChart, Settings, Network,
  Home as HomeIcon, ShoppingBag, Stethoscope, Cloud, Factory,
  GraduationCap, Truck, Hotel, Car, Scale, Wallet, Store, Rocket,
  Phone, MessageCircle, ArrowRight, CheckCircle2, Activity,
  Gauge, Search as SearchIcon, FileSearch, Map as MapIcon,
  Workflow, Eye, Cpu, Lightbulb, Building, Briefcase,
} from 'lucide-react';

export const SITE = {
  name: 'Best SEO Company',
  domain: 'bestseocampany.in',
  parentCompany: 'Growth Service Digital Solution Pvt. Ltd.',
  parentWebsite: 'https://growthservice.in/',
  phone: '6207300553',
  phoneIntl: '+916207300553',
  whatsapp: '7654928455',
  whatsappLink: 'https://wa.me/917654928455',
  address: {
    line1: 'LG-44, JTM Mall, Jagatpura',
    city: 'Jaipur',
    state: 'Rajasthan',
    pincode: '303017',
    full: 'LG-44, JTM Mall, Jagatpura, Jaipur, Rajasthan – 303017',
  },
  email: 'contact@bestseocampany.in',
};

export interface ServiceItem {
  slug: string;
  title: string;
  shortTitle: string;
  icon: typeof Search;
  description: string;
  longDescription: string;
  problem: string;
  solution: string;
  benefits: string[];
  included: string[];
  faqs: { q: string; a: string }[];
}

export const SERVICES: ServiceItem[] = [
  {
    slug: 'seo-services',
    title: 'SEO Services',
    shortTitle: 'SEO Services',
    icon: Search,
    description: 'Complete, end-to-end search engine optimization covering technical, on-page, content, local and authority building.',
    longDescription: 'Our comprehensive SEO services cover every layer of search engine optimization — from deep technical audits and architecture fixes to on-page optimization, content strategy, local SEO, and authority building. We build organic growth systems that compound over time.',
    problem: 'Many businesses struggle with inconsistent organic traffic, poor keyword visibility, and websites that do not rank for commercially valuable searches despite having good products or services.',
    solution: 'We take a holistic, data-driven approach to SEO that addresses technical foundations, content quality, search intent alignment, and authority signals — all tied to measurable business outcomes.',
    benefits: [
      'Higher organic search visibility for high-intent keywords',
      'More qualified organic traffic that converts',
      'Improved crawlability and indexation',
      'Stronger topical authority in your industry',
      'Sustainable, compounding organic growth',
    ],
    included: [
      'Full technical SEO audit',
      'Keyword research and intent mapping',
      'On-page optimization (titles, headings, content, internal links)',
      'Content strategy and recommendations',
      'Local SEO and Google Business Profile optimization',
      'Authority and link-building strategy',
      'Monthly reporting and performance tracking',
    ],
    faqs: [
      { q: 'What is included in your SEO services?', a: 'Our SEO services include a full technical audit, keyword research, on-page optimization, content strategy, local SEO, authority building, and monthly performance reporting.' },
      { q: 'How are your SEO services priced?', a: 'Pricing depends on the scope of work, competitiveness of your industry, number of pages, and target locations. Contact us for a custom proposal.' },
      { q: 'Do you offer SEO services outside Jaipur?', a: 'Yes, we work with businesses across India and can serve clients remotely from our Jaipur office.' },
    ],
  },
  {
    slug: 'local-seo',
    title: 'Local SEO',
    shortTitle: 'Local SEO',
    icon: MapPin,
    description: 'Improve local visibility, Google Business Profile optimization, citations and local landing pages.',
    longDescription: 'Local SEO helps your business appear in local search results and Google Maps when customers search for services near them. We optimize your Google Business Profile, build local citations, and create location-specific landing pages that convert.',
    problem: 'Your business is not showing up in local search results or Google Maps when potential customers search for your services in your area.',
    solution: 'We optimize your Google Business Profile, build consistent local citations, create location landing pages, and implement local schema markup to improve your visibility in local searches.',
    benefits: [
      'Appear in the Google Local Pack (top 3 map results)',
      'More calls, directions, and website visits from local searches',
      'Stronger presence in Google Maps',
      'Better visibility for "near me" searches',
      'Increased foot traffic for physical locations',
    ],
    included: [
      'Google Business Profile setup and optimization',
      'Local citation building and cleanup',
      'Location landing page creation',
      'Local schema markup (LocalBusiness)',
      'Review management strategy',
      'Local rank tracking and reporting',
    ],
    faqs: [
      { q: 'How long does local SEO take?', a: 'Local SEO typically shows initial improvements within 4-8 weeks, with more significant results in 3-6 months depending on competition and your starting position.' },
      { q: 'Do you manage Google Business Profile?', a: 'Yes, we set up, optimize, and manage Google Business Profiles including posts, photos, services, and review responses.' },
    ],
  },
  {
    slug: 'technical-seo',
    title: 'Technical SEO',
    shortTitle: 'Technical SEO',
    icon: Settings,
    description: 'Improve crawlability, indexing, website architecture, Core Web Vitals and technical health.',
    longDescription: 'Technical SEO is the foundation of organic search performance. We fix crawlability issues, improve site architecture, optimize Core Web Vitals, manage indexation, and ensure search engines can efficiently crawl and understand your website.',
    problem: 'Search engines struggle to crawl, index, or understand your website. Pages are not being indexed, Core Web Vitals are poor, and technical issues are holding back your rankings.',
    solution: 'We perform a comprehensive technical SEO audit and fix crawlability, indexation, architecture, speed, and structured data issues to give your content the best chance to rank.',
    benefits: [
      'Improved crawl efficiency and indexation',
      'Better Core Web Vitals scores',
      'Faster page load times',
      'Cleaner website architecture',
      'Proper structured data implementation',
    ],
    included: [
      'Crawl and indexation audit',
      'Core Web Vitals optimization',
      'Site architecture and URL structure review',
      'XML sitemap and robots.txt optimization',
      'Canonical tag strategy',
      'Structured data implementation',
      'JavaScript SEO review',
      'Mobile usability audit',
    ],
    faqs: [
      { q: 'What is technical SEO?', a: 'Technical SEO involves optimizing your website infrastructure so search engines can crawl, index, and understand your content efficiently. This includes site speed, architecture, structured data, and Core Web Vitals.' },
      { q: 'How often should I do a technical SEO audit?', a: 'A technical SEO audit should be done at least quarterly, and immediately after any major website change or platform migration.' },
    ],
  },
  {
    slug: 'on-page-seo',
    title: 'On-Page SEO',
    shortTitle: 'On-Page SEO',
    icon: FileText,
    description: 'Optimize titles, headings, content, URLs, internal links, images and search intent.',
    longDescription: 'On-page SEO ensures every page on your website is optimized for the right search intent. We optimize titles, meta descriptions, headings, content structure, internal linking, images, and URL structure to maximize relevance and rankings.',
    problem: 'Your pages are not ranking for their target keywords despite having content. Titles, headings, and internal links are not optimized for search intent.',
    solution: 'We systematically optimize every on-page element — from title tags and meta descriptions to content structure, internal linking, and image SEO — aligned with search intent.',
    benefits: [
      'Higher relevance for target keywords',
      'Better click-through rates from search results',
      'Improved content structure and readability',
      'Stronger internal linking for SEO equity flow',
      'Aligned search intent matching',
    ],
    included: [
      'Title tag and meta description optimization',
      'Heading structure (H1-H6) optimization',
      'Content optimization for search intent',
      'Internal linking strategy and implementation',
      'Image alt text and filename optimization',
      'URL structure optimization',
      'Schema markup for content types',
    ],
    faqs: [
      { q: 'What is on-page SEO?', a: 'On-page SEO is the process of optimizing individual web pages — including content, titles, headings, internal links, and images — to rank higher and earn more relevant traffic from search engines.' },
      { q: 'How is on-page SEO different from technical SEO?', a: 'On-page SEO focuses on content and elements on each page, while technical SEO focuses on the underlying infrastructure that helps search engines crawl and index those pages.' },
    ],
  },
  {
    slug: 'off-page-seo',
    title: 'Off-Page SEO',
    shortTitle: 'Off-Page SEO',
    icon: Network,
    description: 'Build relevant authority signals, digital PR, and brand mentions that strengthen your search presence.',
    longDescription: 'Off-page SEO builds your website authority through quality link building, digital PR, brand mentions, and other external signals. We focus on relevant, high-quality authority building — never spam or low-quality links.',
    problem: 'Your website lacks the authority signals needed to compete for competitive keywords. Your link profile is weak or low-quality.',
    solution: 'We develop a quality-focused authority building strategy that includes relevant link acquisition, digital PR, and brand mention building — all aligned with Google guidelines.',
    benefits: [
      'Stronger domain authority',
      'More relevant referring domains',
      'Improved trust and credibility signals',
      'Better rankings for competitive keywords',
      'Brand visibility across relevant publications',
    ],
    included: [
      'Link profile audit and analysis',
      'Competitor backlink research',
      'Quality link acquisition strategy',
      'Digital PR and outreach',
      'Brand mention monitoring',
      'Disavow and toxic link cleanup',
    ],
    faqs: [
      { q: 'Do you buy backlinks?', a: 'No. We do not buy backlinks or engage in any link schemes that violate Google guidelines. We focus on earning quality links through relevant content and outreach.' },
      { q: 'How long does link building take?', a: 'Quality link building is an ongoing process. Initial links typically start appearing within 4-8 weeks, with a meaningful profile built over 3-6 months.' },
    ],
  },
  {
    slug: 'ecommerce-seo',
    title: 'Ecommerce SEO',
    shortTitle: 'Ecommerce SEO',
    icon: ShoppingCart,
    description: 'Optimize category pages, product architecture, technical SEO and ecommerce search visibility.',
    longDescription: 'Ecommerce SEO optimizes your online store for search engines and shoppers. We improve category page architecture, product page optimization, faceted navigation handling, and technical performance to drive organic revenue.',
    problem: 'Your ecommerce store is not ranking for product and category keywords. Category pages are thin, product pages lack optimization, and faceted navigation creates duplicate content.',
    solution: 'We implement ecommerce-specific SEO strategies including category page optimization, product schema, faceted navigation control, and content strategies that drive organic product discovery.',
    benefits: [
      'More organic traffic to product and category pages',
      'Higher conversion rates from targeted search traffic',
      'Improved product page indexation',
      'Better handling of faceted navigation',
      'Increased organic revenue',
    ],
    included: [
      'Category page optimization',
      'Product page SEO and schema',
      'Faceted navigation and filter management',
      'Product review schema implementation',
      'Internal linking for product discovery',
      'Ecommerce technical SEO audit',
      'Content strategy for category pages',
    ],
    faqs: [
      { q: 'Can you optimize any ecommerce platform?', a: 'We work with major ecommerce platforms including Shopify, WooCommerce, Magento, BigCommerce, and custom platforms.' },
      { q: 'How long does ecommerce SEO take?', a: 'Ecommerce SEO typically shows initial improvements in 2-3 months with significant results in 4-6 months, depending on catalog size and competition.' },
    ],
  },
  {
    slug: 'enterprise-seo',
    title: 'Enterprise SEO',
    shortTitle: 'Enterprise SEO',
    icon: Building2,
    description: 'Large-scale technical optimization, international structures, templates and SEO governance.',
    longDescription: 'Enterprise SEO handles the unique challenges of large websites with thousands or millions of pages. We implement scalable technical architecture, international structures, template-based optimization, and SEO governance processes.',
    problem: 'Your enterprise website has thousands of pages with inconsistent optimization, international URL conflicts, template limitations, and no SEO governance process.',
    solution: 'We build scalable SEO systems including template-based optimization, international hreflang implementation, automated monitoring, and governance processes for large teams.',
    benefits: [
      'Scalable SEO across thousands of pages',
      'Proper international site structure',
      'Consistent template-based optimization',
      'Automated monitoring and alerts',
      'SEO governance for large teams',
    ],
    included: [
      'Enterprise technical SEO audit',
      'International SEO and hreflang strategy',
      'Template-based optimization',
      'Crawl budget optimization',
      'Automated SEO monitoring',
      'SEO governance and workflow processes',
      'Stakeholder training and documentation',
    ],
    faqs: [
      { q: 'What size website needs enterprise SEO?', a: 'Enterprise SEO is typically for websites with thousands to millions of pages, multiple international versions, or complex organizational structures.' },
      { q: 'Do you work with in-house SEO teams?', a: 'Yes, we collaborate with in-house teams, providing strategy, technical implementation, and governance support.' },
    ],
  },
  {
    slug: 'content-seo',
    title: 'Content SEO',
    shortTitle: 'Content SEO',
    icon: PenLine,
    description: 'Build topical authority using helpful, search-intent focused content.',
    longDescription: 'Content SEO builds topical authority through strategic content creation aligned with search intent. We develop content clusters, optimize existing content, and create new content that ranks, informs, and converts.',
    problem: 'Your content is not ranking because it lacks topical depth, search intent alignment, and internal linking structure. You have content gaps competitors are exploiting.',
    solution: 'We build content strategies around topical clusters, search intent, and internal linking — creating content that establishes authority and drives organic traffic.',
    benefits: [
      'Established topical authority',
      'More keywords ranking in search results',
      'Higher content engagement and time on page',
      'Better search intent matching',
      'Compounding organic traffic growth',
    ],
    included: [
      'Content gap analysis',
      'Topical cluster strategy',
      'Search intent mapping',
      'Content briefs and optimization guidelines',
      'Internal linking structure',
      'Content performance tracking',
    ],
    faqs: [
      { q: 'Do you write the content?', a: 'We provide content strategy, briefs, and optimization guidelines. We can also work with your content team or recommend professional content creators.' },
      { q: 'How much content do I need?', a: 'Content quantity depends on your industry, competition, and goals. We recommend starting with a focused topical cluster and expanding based on performance.' },
    ],
  },
  {
    slug: 'link-building',
    title: 'Link Building',
    shortTitle: 'Link Building',
    icon: Link2,
    description: 'Develop relevant, quality-focused authority signals and digital PR strategies.',
    longDescription: 'Link building is the process of acquiring high-quality, relevant backlinks to your website. We focus on quality over quantity — building authority through relevant outreach, digital PR, and content-driven link acquisition.',
    problem: 'Your website lacks the backlink authority needed to compete for competitive keywords. Your link profile is weak or includes low-quality links.',
    solution: 'We develop a quality-focused link building strategy that acquires relevant, authoritative backlinks through outreach, content, and digital PR.',
    benefits: [
      'Stronger domain authority',
      'More relevant referring domains',
      'Improved rankings for competitive keywords',
      'Better brand visibility online',
      'Protection against algorithm updates',
    ],
    included: [
      'Link profile audit',
      'Competitor backlink analysis',
      'Outreach strategy and execution',
      'Digital PR campaigns',
      'Resource and content link building',
      'Link velocity monitoring',
    ],
    faqs: [
      { q: 'Do you guarantee a specific number of links?', a: 'We do not guarantee specific link counts because quality links cannot be mass-produced. We focus on acquiring relevant, authoritative links through legitimate outreach.' },
      { q: 'Are all backlinks good?', a: 'No. Low-quality, irrelevant, or spammy links can harm your rankings. We focus on quality, relevant links from authoritative sources.' },
    ],
  },
  {
    slug: 'seo-audit',
    title: 'SEO Audit',
    shortTitle: 'SEO Audit',
    icon: ClipboardCheck,
    description: 'Technical, content, on-page, off-page and competitive SEO auditing.',
    longDescription: 'Our SEO audit is a comprehensive analysis of your website search performance. We examine technical SEO, on-page elements, content quality, backlink profile, and competitive landscape to identify exactly what is holding back your rankings.',
    problem: 'You do not know why your website is not ranking. You need a clear, prioritized list of SEO issues and opportunities.',
    solution: 'We perform a deep, multi-layered SEO audit covering technical, on-page, content, off-page, and competitive factors — delivered as a prioritized, actionable report.',
    benefits: [
      'Clear understanding of your SEO issues',
      'Prioritized action plan',
      'Competitive benchmarking',
      'Quick-win opportunities identified',
      'Technical issues catalogued',
    ],
    included: [
      'Technical SEO crawl and analysis',
      'On-page SEO review',
      'Content quality assessment',
      'Backlink profile analysis',
      'Competitive SEO analysis',
      'Core Web Vitals assessment',
      'Local SEO audit (if applicable)',
      'Prioritized action plan',
    ],
    faqs: [
      { q: 'Is the SEO audit free?', a: 'We offer a free initial SEO audit that covers the key issues. A comprehensive deep-dive audit is available as part of our SEO services.' },
      { q: 'How long does an SEO audit take?', a: 'A comprehensive SEO audit typically takes 5-10 business days depending on the size and complexity of your website.' },
    ],
  },
  {
    slug: 'international-seo',
    title: 'International SEO',
    shortTitle: 'International SEO',
    icon: Globe,
    description: 'Expand your search presence across multiple countries and languages with proper hreflang and site architecture.',
    longDescription: 'International SEO ensures your website ranks in the right countries and languages. We implement hreflang tags, international URL structures, and localized content strategies so search engines serve the right version to the right audience.',
    problem: 'Your website is showing the wrong language or country version in search results, or you are not ranking in target international markets.',
    solution: 'We implement proper hreflang annotations, international URL structures, and localized content strategies to ensure each market gets the right content.',
    benefits: [
      'Correct language and country targeting',
      'Proper hreflang implementation',
      'Localized content strategy',
      'Improved international search visibility',
      'Better user experience for global visitors',
    ],
    included: [
      'International URL structure strategy',
      'Hreflang implementation and validation',
      'Localized content recommendations',
      'International keyword research',
      'Google Search Console international reporting',
    ],
    faqs: [
      { q: 'What is hreflang?', a: 'Hreflang is an HTML attribute that tells search engines which language and region a page is intended for, ensuring the correct version appears in search results.' },
      { q: 'Do I need separate domains for each country?', a: 'Not necessarily. We help you choose the right international URL structure — ccTLDs, subdirectories, or subdomains — based on your needs.' },
    ],
  },
  {
    slug: 'keyword-research',
    title: 'Keyword Research',
    shortTitle: 'Keyword Research',
    icon: Search,
    description: 'Map keywords according to intent, location and business value.',
    longDescription: 'Keyword research is the foundation of every SEO campaign. We identify the keywords your customers use, map them by search intent, and prioritize them by business value and opportunity.',
    problem: 'You do not know which keywords to target, or you are targeting keywords that do not drive business results.',
    solution: 'We perform deep keyword research using multiple data sources, mapping keywords by intent, volume, difficulty, and business value to build a prioritized targeting plan.',
    benefits: [
      'Data-driven keyword targeting',
      'Search intent alignment',
      'Prioritized by business value',
      'Content gap identification',
      'Better ROI from SEO efforts',
    ],
    included: [
      'Seed keyword expansion',
      'Search volume and difficulty analysis',
      'Search intent categorization',
      'Competitor keyword analysis',
      'Keyword clustering and mapping',
      'Prioritized keyword strategy',
    ],
    faqs: [
      { q: 'How many keywords should I target?', a: 'Quality over quantity. We focus on the keywords that drive business results — typically 50-200 primary keywords depending on your business and competition level.' },
      { q: 'Do you use keyword research tools?', a: 'Yes, we use professional keyword research tools combined with Google Search Console data and competitor analysis for comprehensive results.' },
    ],
  },
  {
    slug: 'website-optimization',
    title: 'Website Optimization',
    shortTitle: 'Website Optimization',
    icon: Gauge,
    description: 'Improve page speed, Core Web Vitals, user experience and conversion rates.',
    longDescription: 'Website optimization improves your site speed, Core Web Vitals, user experience, and conversion rates. We combine technical performance tuning with UX improvements to create faster, better-converting pages.',
    problem: 'Your website is slow, Core Web Vitals are poor, and visitors are leaving before converting.',
    solution: 'We optimize page speed, Core Web Vitals, rendering, and user experience to create fast, smooth, high-converting pages.',
    benefits: [
      'Faster page load times',
      'Passing Core Web Vitals',
      'Better user experience',
      'Higher conversion rates',
      'Improved search rankings',
    ],
    included: [
      'Page speed audit and optimization',
      'Core Web Vitals improvement',
      'Image and asset optimization',
      'Render-blocking resource elimination',
      'Mobile performance optimization',
      'Conversion rate optimization recommendations',
    ],
    faqs: [
      { q: 'What are Core Web Vitals?', a: 'Core Web Vitals are Google metrics that measure real-world user experience: Largest Contentful Paint (loading), Interaction to Next Paint (interactivity), and Cumulative Layout Shift (visual stability).' },
      { q: 'Will speed improvements help my rankings?', a: 'Page speed is a ranking factor. While improvements alone may not dramatically change rankings, they contribute to better user experience and can improve conversion rates.' },
    ],
  },
  {
    slug: 'google-business-profile-seo',
    title: 'Google Business Profile SEO',
    shortTitle: 'GBP SEO',
    icon: MapPin,
    description: 'Optimize your Google Business Profile for maximum local search visibility and customer engagement.',
    longDescription: 'Google Business Profile SEO optimizes your profile to rank higher in local searches and Google Maps. We optimize every element — from business categories and descriptions to posts, photos, services, and reviews.',
    problem: 'Your Google Business Profile is incomplete, unoptimized, or not appearing in the Google Local Pack for relevant searches.',
    solution: 'We fully optimize your Google Business Profile — categories, description, services, posts, photos, Q&A, and review strategy — to maximize local visibility and engagement.',
    benefits: [
      'Higher ranking in Google Local Pack',
      'More profile views, calls, and direction requests',
      'Better review management',
      'Increased local brand visibility',
      'More customer actions from Google Maps',
    ],
    included: [
      'Profile setup and category optimization',
      'Description and services optimization',
      'Regular post creation',
      'Photo and video management',
      'Review monitoring and response strategy',
      'Q&A management',
      'Profile performance reporting',
    ],
    faqs: [
      { q: 'Is Google Business Profile free?', a: 'Yes, Google Business Profile is free to create. We help you optimize it for maximum visibility as part of our local SEO services.' },
      { q: 'How often should I post on my Google Business Profile?', a: 'We recommend posting at least once per week to keep your profile active and signal relevance to Google.' },
    ],
  },
];

export interface LocationItem {
  slug: string;
  city: string;
  state: string;
  priority: 'jaipur' | 'gujarat' | 'tier1';
  description: string;
}

export const LOCATIONS: LocationItem[] = [
  { slug: 'jaipur', city: 'Jaipur', state: 'Rajasthan', priority: 'jaipur', description: 'Our home city and primary market. We provide full SEO services to businesses across Jaipur from our JTM Mall office in Jagatpura.' },
  { slug: 'delhi', city: 'Delhi', state: 'Delhi', priority: 'tier1', description: 'Serving businesses in Delhi NCR with comprehensive SEO services covering local, national, and competitive search markets.' },
  { slug: 'mumbai', city: 'Mumbai', state: 'Maharashtra', priority: 'tier1', description: 'Helping Mumbai businesses dominate organic search in India financial and commercial capital.' },
  { slug: 'pune', city: 'Pune', state: 'Maharashtra', priority: 'tier1', description: 'SEO services for Pune growing business ecosystem, from startups to enterprise companies.' },
  { slug: 'bengaluru', city: 'Bengaluru', state: 'Karnataka', priority: 'tier1', description: 'Supporting Bengaluru tech and startup ecosystem with data-driven SEO strategies.' },
  { slug: 'hyderabad', city: 'Hyderabad', state: 'Telangana', priority: 'tier1', description: 'SEO services for Hyderabad businesses across tech, pharma, and retail sectors.' },
  { slug: 'chennai', city: 'Chennai', state: 'Tamil Nadu', priority: 'tier1', description: 'Helping Chennai businesses improve organic visibility and drive qualified traffic.' },
  { slug: 'kolkata', city: 'Kolkata', state: 'West Bengal', priority: 'tier1', description: 'SEO services for Kolkata businesses across manufacturing, retail, and services.' },
  { slug: 'ahmedabad', city: 'Ahmedabad', state: 'Gujarat', priority: 'gujarat', description: 'Serving Ahmedabad businesses with SEO services tailored to Gujarat commercial capital.' },
  { slug: 'surat', city: 'Surat', state: 'Gujarat', priority: 'gujarat', description: 'SEO services for Surat diamond, textile, and emerging tech businesses.' },
  { slug: 'vadodara', city: 'Vadodara', state: 'Gujarat', priority: 'gujarat', description: 'Helping Vadodara businesses grow organic search visibility and qualified leads.' },
  { slug: 'rajkot', city: 'Rajkot', state: 'Gujarat', priority: 'gujarat', description: 'SEO services for Rajkot manufacturing and trading businesses.' },
  { slug: 'gandhinagar', city: 'Gandhinagar', state: 'Gujarat', priority: 'gujarat', description: 'Supporting Gandhinagar businesses with comprehensive SEO strategies.' },
  { slug: 'gurgaon', city: 'Gurgaon', state: 'Haryana', priority: 'tier1', description: 'SEO services for Gurgaon corporate and startup businesses.' },
  { slug: 'noida', city: 'Noida', state: 'Uttar Pradesh', priority: 'tier1', description: 'Helping Noida tech and services businesses dominate organic search.' },
  { slug: 'chandigarh', city: 'Chandigarh', state: 'Chandigarh', priority: 'tier1', description: 'SEO services for Chandigarh businesses across the Tricity area.' },
  { slug: 'indore', city: 'Indore', state: 'Madhya Pradesh', priority: 'tier1', description: 'Serving Indore businesses with data-driven SEO services.' },
  { slug: 'lucknow', city: 'Lucknow', state: 'Uttar Pradesh', priority: 'tier1', description: 'SEO services for Lucknow businesses across retail, services, and healthcare.' },
  { slug: 'nagpur', city: 'Nagpur', state: 'Maharashtra', priority: 'tier1', description: 'Helping Nagpur businesses improve organic search visibility.' },
  { slug: 'bhopal', city: 'Bhopal', state: 'Madhya Pradesh', priority: 'tier1', description: 'SEO services for Bhopal businesses across government, education, and private sectors.' },
  { slug: 'patna', city: 'Patna', state: 'Bihar', priority: 'tier1', description: 'Serving Patna businesses with comprehensive SEO strategies.' },
  { slug: 'kochi', city: 'Kochi', state: 'Kerala', priority: 'tier1', description: 'SEO services for Kochi businesses across tourism, tech, and trade.' },
];

export interface IndustryItem {
  slug: string;
  name: string;
  icon: typeof HomeIcon;
  description: string;
}

export const INDUSTRIES: IndustryItem[] = [
  { slug: 'real-estate-seo', name: 'Real Estate SEO', icon: HomeIcon, description: 'SEO for real estate developers, agents, and property platforms targeting location-based property searches.' },
  { slug: 'ecommerce-seo', name: 'Ecommerce SEO', icon: ShoppingBag, description: 'SEO for online stores optimizing category pages, product pages, and ecommerce architecture.' },
  { slug: 'healthcare-seo', name: 'Healthcare SEO', icon: Stethoscope, description: 'SEO for hospitals, clinics, and healthcare providers targeting patient search intent.' },
  { slug: 'saas-seo', name: 'SaaS SEO', icon: Cloud, description: 'SEO for SaaS companies building topical authority and capturing software search intent.' },
  { slug: 'manufacturing-seo', name: 'Manufacturing SEO', icon: Factory, description: 'SEO for manufacturers targeting B2B industrial and product searches.' },
  { slug: 'education-seo', name: 'Education SEO', icon: GraduationCap, description: 'SEO for educational institutions, coaching centers, and EdTech platforms.' },
  { slug: 'logistics-seo', name: 'Logistics SEO', icon: Truck, description: 'SEO for logistics and supply chain companies targeting freight and shipping searches.' },
  { slug: 'hospitality-seo', name: 'Hospitality SEO', icon: Hotel, description: 'SEO for hotels, resorts, and hospitality businesses targeting travel searches.' },
  { slug: 'automotive-seo', name: 'Automotive SEO', icon: Car, description: 'SEO for automotive dealers, service centers, and auto businesses.' },
  { slug: 'legal-seo', name: 'Legal SEO', icon: Scale, description: 'SEO for law firms and legal professionals targeting practice-area searches.' },
  { slug: 'finance-seo', name: 'Finance SEO', icon: Wallet, description: 'SEO for financial services, fintech, and insurance companies.' },
  { slug: 'local-business-seo', name: 'Local Business SEO', icon: Store, description: 'SEO for local businesses targeting nearby customers and map searches.' },
  { slug: 'b2b-seo', name: 'B2B SEO', icon: Briefcase, description: 'SEO for B2B companies targeting decision-maker search intent and long sales cycles.' },
  { slug: 'startup-seo', name: 'Startup SEO', icon: Rocket, description: 'SEO for startups building early organic traction and domain authority.' },
];

export interface FaqItem {
  q: string;
  a: string;
}

export const HOME_FAQS: FaqItem[] = [
  { q: 'What does an SEO company do?', a: 'An SEO company improves your website visibility in search engines through technical optimization, on-page SEO, content strategy, local SEO, and authority building. The goal is to increase organic traffic and qualified leads from search.' },
  { q: 'How does SEO help a business?', a: 'SEO helps businesses by increasing organic search visibility, driving qualified traffic, building brand credibility, and generating leads or sales without paying for each click. It is one of the most cost-effective long-term marketing channels.' },
  { q: 'How long does SEO take?', a: 'SEO is a long-term strategy. Most businesses see initial improvements within 3-4 months, with significant results in 6-12 months. The timeline depends on your industry, competition, current website state, and the scope of work.' },
  { q: 'What is technical SEO?', a: 'Technical SEO involves optimizing your website infrastructure — crawlability, indexation, site speed, Core Web Vitals, structured data, and architecture — so search engines can efficiently crawl, understand, and rank your content.' },
  { q: 'What is local SEO?', a: 'Local SEO optimizes your online presence to attract customers from local searches. It includes Google Business Profile optimization, local citations, location landing pages, and local schema markup to appear in local search results and Google Maps.' },
  { q: 'Do you provide SEO services in Jaipur?', a: 'Yes, we are based in Jaipur at LG-44, JTM Mall, Jagatpura. We provide SEO services to businesses across Jaipur and the surrounding areas, including Malviya Nagar, Mansarovar, Vaishali Nagar, C-Scheme, and more.' },
  { q: 'Do you work with businesses outside Jaipur?', a: 'Yes, we work with businesses across India. Our Jaipur office serves as our base, but we remotely serve clients in Delhi, Mumbai, Pune, Bengaluru, Hyderabad, Ahmedabad, Surat, and other major Indian cities.' },
  { q: 'How do you measure SEO performance?', a: 'We measure SEO performance using organic traffic, keyword rankings, search visibility, lead generation, conversion rates, Core Web Vitals, and Google Search Console data. We provide transparent monthly reporting with clear metrics.' },
  { q: 'What is included in an SEO audit?', a: 'Our SEO audit covers technical SEO, on-page SEO, content quality, keyword analysis, internal linking, backlink profile, competitors, local SEO, and Core Web Vitals. You receive a prioritized action plan.' },
  { q: 'How much does SEO cost?', a: 'SEO costs vary based on the scope of work, industry competitiveness, number of pages, and target locations. We provide custom proposals after understanding your requirements. Contact us for a quote.' },
  { q: 'Can you guarantee Google #1 rankings?', a: 'No. No legitimate SEO company can guarantee #1 rankings on Google. Search algorithms consider hundreds of factors and are constantly updated. We focus on sustainable, data-driven strategies that improve rankings, traffic, and leads — but we never make false ranking guarantees.' },
];

export interface CaseStudy {
  slug: string;
  industry: string;
  title: string;
  challenge: string;
  initial: string;
  strategy: string;
  technical: string[];
  content: string;
  authority: string;
  results: { label: string; value: string }[];
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: 'ecommerce-retail-growth',
    industry: 'Ecommerce / Retail',
    title: 'Organic Traffic Growth for a Retail Ecommerce Store',
    challenge: 'A retail ecommerce store with 2,000+ products was struggling with poor organic visibility. Category pages were not ranking, product pages were not indexed efficiently, and organic traffic was flat.',
    initial: 'The website had thin category pages, duplicate content from faceted navigation, missing structured data, and no internal linking strategy. Organic traffic was under 3,000 monthly visits.',
    strategy: 'We implemented a comprehensive ecommerce SEO strategy focusing on category page optimization, technical fixes, content clusters, and authority building.',
    technical: [
      'Fixed faceted navigation duplicate content with canonical tags',
      'Implemented product and review schema markup',
      'Improved Core Web Vitals from poor to good',
      'Optimized crawl budget for 2,000+ product pages',
    ],
    content: 'Created category page content, buying guides, and product comparison pages to build topical authority around key product categories.',
    authority: 'Acquired relevant backlinks from industry publications and product review sites through digital PR outreach.',
    results: [
      { label: 'Organic Traffic', value: '+340%' },
      { label: 'Keywords Ranking', value: '+180%' },
      { label: 'Top 10 Keywords', value: '+220%' },
      { label: 'Organic Revenue', value: '+210%' },
    ],
  },
  {
    slug: 'local-business-visibility',
    industry: 'Local Business / Services',
    title: 'Local Search Visibility for a Service Business in Jaipur',
    challenge: 'A Jaipur-based service business was not appearing in local search results or the Google Local Pack despite having a good reputation offline.',
    initial: 'No Google Business Profile, inconsistent NAP citations, no local landing pages, and no local schema markup. The business was invisible in local searches.',
    strategy: 'We implemented a local SEO strategy focused on Google Business Profile optimization, local citations, location landing pages, and review generation.',
    technical: [
      'Set up and fully optimized Google Business Profile',
      'Implemented LocalBusiness schema markup',
      'Built 40+ local citations with consistent NAP',
      'Created location and service-area landing pages',
    ],
    content: 'Created service pages targeting local search intent with location-specific content for Jaipur neighborhoods.',
    authority: 'Built local relevance through community engagement, local directory listings, and local press mentions.',
    results: [
      { label: 'Local Pack Rankings', value: 'Top 3' },
      { label: 'Profile Views', value: '+450%' },
      { label: 'Calls from Google', value: '+280%' },
      { label: 'Website Clicks', value: '+190%' },
    ],
  },
  {
    slug: 'saas-platform-growth',
    industry: 'SaaS / Technology',
    title: 'Topical Authority Building for a SaaS Platform',
    challenge: 'A SaaS platform was competing against established brands with strong domain authority. Organic traffic was stagnant and the blog was not ranking.',
    initial: 'The blog had 50+ articles with no topical structure, no internal linking, and no search intent alignment. Domain authority was low compared to competitors.',
    strategy: 'We built a content-driven SEO strategy focused on topical clusters, search intent mapping, and strategic internal linking.',
    technical: [
      'Restructured content into topical clusters',
      'Implemented comprehensive internal linking',
      'Optimized Core Web Vitals for blog pages',
      'Added FAQ and HowTo schema markup',
    ],
    content: 'Created 40+ new articles in topical clusters, optimized 50+ existing articles, and built content hubs around key SaaS topics.',
    authority: 'Acquired backlinks from tech publications, SaaS directories, and industry blogs through content-driven outreach.',
    results: [
      { label: 'Organic Traffic', value: '+520%' },
      { label: 'Top 3 Keywords', value: '+340%' },
      { label: 'Domain Authority', value: '+18 points' },
      { label: 'Organic Signups', value: '+290%' },
    ],
  },
];

export interface BlogPost {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  date: string;
  readTime: string;
}

export const BLOG_POSTS: BlogPost[] = [
  { slug: 'how-seo-works-for-small-businesses', title: 'How SEO Works for Small Businesses', category: 'SEO', excerpt: 'A practical guide to how small businesses can use SEO to compete with larger competitors and grow organic traffic.', date: '2026-07-15', readTime: '8 min' },
  { slug: 'seo-company-vs-seo-freelancer', title: 'SEO Company vs SEO Freelancer: Which Is Right for You?', category: 'SEO', excerpt: 'Comparing the benefits and trade-offs of hiring an SEO company versus a freelance SEO professional.', date: '2026-07-10', readTime: '6 min' },
  { slug: 'how-local-seo-helps-jaipur-businesses', title: 'How Local SEO Helps Jaipur Businesses Grow', category: 'Local SEO', excerpt: 'Why local SEO matters for businesses in Jaipur and how to get started with local search optimization.', date: '2026-07-05', readTime: '7 min' },
  { slug: 'technical-seo-checklist', title: 'Technical SEO Checklist for 2026', category: 'Technical SEO', excerpt: 'A comprehensive technical SEO checklist covering crawlability, indexation, Core Web Vitals, and structured data.', date: '2026-06-28', readTime: '12 min' },
  { slug: 'how-to-improve-google-search-visibility', title: 'How to Improve Google Search Visibility', category: 'SEO', excerpt: 'Actionable strategies to improve your website visibility in Google search results.', date: '2026-06-20', readTime: '9 min' },
  { slug: 'seo-audit-guide', title: 'The Complete SEO Audit Guide', category: 'SEO', excerpt: 'Learn how to perform a comprehensive SEO audit covering technical, on-page, content, and off-page factors.', date: '2026-06-15', readTime: '15 min' },
  { slug: 'internal-linking-best-practices', title: 'Internal Linking Best Practices for SEO', category: 'Content SEO', excerpt: 'How to build an effective internal linking structure that improves SEO and user experience.', date: '2026-06-08', readTime: '8 min' },
  { slug: 'ecommerce-seo-guide', title: 'Ecommerce SEO Guide: From Basics to Advanced', category: 'Ecommerce SEO', excerpt: 'A complete guide to ecommerce SEO covering category pages, product optimization, and technical architecture.', date: '2026-06-01', readTime: '14 min' },
  { slug: 'local-seo-guide-for-indian-businesses', title: 'Local SEO Guide for Indian Businesses', category: 'Local SEO', excerpt: 'A localized guide to local SEO specifically for Indian businesses targeting local search markets.', date: '2026-05-25', readTime: '10 min' },
  { slug: 'how-to-choose-an-seo-agency', title: 'How to Choose an SEO Agency in India', category: 'Digital Marketing', excerpt: 'Key factors to consider when choosing an SEO agency, including what to avoid and what questions to ask.', date: '2026-05-18', readTime: '7 min' },
];

export const BLOG_CATEGORIES = [
  'SEO', 'Local SEO', 'Technical SEO', 'Content SEO', 'Ecommerce SEO',
  'Google Business Profile', 'Link Building', 'SEO Case Studies', 'Digital Marketing',
];

export const JAIPUR_AREAS = [
  'Jagatpura', 'Malviya Nagar', 'Mansarovar', 'Vaishali Nagar', 'C-Scheme',
  'Raja Park', 'Tonk Road', 'Pratap Nagar', 'Sitapura', 'Ajmer Road',
];

export const WHY_CHOOSE_US = [
  { icon: BarChart3, title: 'Data-Driven SEO', description: 'Every decision is backed by data — from keyword research to technical audits. We use Google Search Console, analytics, and professional tools to guide strategy.' },
  { icon: Cpu, title: 'Technical Expertise', description: 'Deep technical SEO knowledge covering crawlability, indexation, Core Web Vitals, structured data, JavaScript SEO, and site architecture.' },
  { icon: Target, title: 'Search Intent Strategy', description: 'We optimize for what searchers actually want, not just keywords. Search intent alignment drives better rankings and higher conversions.' },
  { icon: Eye, title: 'Transparent Reporting', description: 'Clear, honest monthly reports showing traffic, rankings, leads, and work completed. No hidden metrics or vanity numbers.' },
  { icon: MapIcon, title: 'Local & National SEO', description: 'From local Jaipur searches to national campaigns across India, we scale SEO to match your business goals and target markets.' },
  { icon: TrendingUp, title: 'Long-Term Organic Growth', description: 'We build sustainable organic growth systems that compound over time — not quick fixes that fade with the next algorithm update.' },
];

export const PROCESS_STEPS = [
  { icon: ClipboardCheck, title: 'SEO Audit', description: 'Understand technical issues, current rankings, competitors, and opportunities through a comprehensive audit.' },
  { icon: SearchIcon, title: 'Keyword Research', description: 'Map keywords according to search intent, location relevance, and business value to build a targeting plan.' },
  { icon: Workflow, title: 'Strategy', description: 'Create a roadmap covering technical, content, local, and authority building tailored to your business goals.' },
  { icon: Settings, title: 'Optimization', description: 'Improve website architecture, pages, content, and technical performance based on the strategy.' },
  { icon: Network, title: 'Authority', description: 'Build relevant authority and brand signals through quality link building and digital PR.' },
  { icon: LineChart, title: 'Measure & Improve', description: 'Monitor Search Console, analytics, rankings, conversions, and technical health — then iterate and improve.' },
];

export const TRUST_INDICATORS = [
  { icon: Settings, label: 'Technical SEO' },
  { icon: MapPin, label: 'Local SEO' },
  { icon: FileText, label: 'On-Page SEO' },
  { icon: PenLine, label: 'Content Strategy' },
  { icon: Network, label: 'Authority Building' },
  { icon: BarChart3, label: 'Analytics & Reporting' },
];

export const AUDIT_FEATURES = [
  'Technical SEO', 'On-page SEO', 'Content', 'Keywords',
  'Internal linking', 'Backlinks', 'Competitors', 'Local SEO', 'Core Web Vitals',
];

export { Phone, MessageCircle, ArrowRight, CheckCircle2, Activity, ShieldCheck, Zap, Lightbulb, Building };
