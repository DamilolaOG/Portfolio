// Portfolio Data Structure
// Replace this placeholder content with actual content from your Notion portfolio

import portraitImage from 'figma:asset/42248f5a4de5b0e6e3b0c332fbf5ea385c1cceee.png';
import alatThumbnailNew from '../../../assets/alat-dribble.png';
import alatExistingDesign from 'figma:asset/bb8115df92e33b16bb3fbc42c93c39d2965f0939.png';
import alatFinalDesign from 'figma:asset/2b9f9f3244e1855ad4b19bbaa5c214241b2c72b0.png';
import myBupaThumbnail from '../../../assets/bupa-1.png';
import bupabluaWireframes from 'figma:asset/88d828453c6e0c9bc5f28dbc6ddffaebe428cc68.png';
import bupa2Image from '../../../assets/bupa-2.png';
import bupaCoUkThumbnail from 'figma:asset/60e442b29e8990e1ed9501d0831d08d415f02df3.png';
import bupaCoUkBeforeAfter from 'figma:asset/c58655c30c652b84bc711ef3bb67498119c70f6d.png';

export interface Project {
  id: string;
  title: string;
  slug: string;
  oneLiner: string;
  thumbnail: string | any;
  role: string;
  timeline: string;
  category: string;
  problem: string;
  goal: string;
  homePageSummary?: string; // Short impactful summary for homepage
  process: {
    research: string;
    ideation: string;
    design: string;
  };
  results: string[];
  images: (string | any)[];
  nextProject?: string;
  prevProject?: string;
}

export const projects: Project[] = [
  {
    id: '4',
    title: 'Bupa .co.uk',
    slug: 'bupa-couk-mega-menu',
    oneLiner: 'Redesigning how people discover and engage with Bupa products',
    thumbnail: bupaCoUkThumbnail,
    role: 'Senior Product Designer',
    timeline: '8 weeks (2024)',
    category: 'Health Tech • Website • Navigation',
    homePageSummary: 'Over a decade, the menu had remained the same and averaged 6% engagement. I led the information architecture redesign, ensuring clear hierarchy and modern UX patterns. Result: 26% increase in clickthrough rate and +30 NPS boost.',
    problem: 'The mega menu on bupa.co.uk is a critical tool for customers to find healthcare products and services, yet no research had been conducted in almost a decade to assess its functionality or improve its design. The current design was inaccessible and flawed with poor information hierarchy - links were clustered and it was difficult to distinguish what was clickable. Data showed that only roughly 6% of visitors were engaging with the mega menu and search functionality. The design needed urgent attention to drive engagement and align with Bupa\'s North Star goal of making 500 customer experience (CEX) improvements per year.',
    goal: 'Boost navigation engagement through an improved design, empower customers\' self-service capabilities to minimise customer support workload, lower abandonment rates to drive revenue growth, elevate visual design to align with modern trends and user mental models, and prioritise accessibility to serve a broad audience.',
    process: {
      research: 'Discovery Phase - As the sole designer, I led the end-to-end design process aligned with Bupa\'s Savannah 2027 strategy, which emphasised customer-centricity with a target of 500 CEX improvements per business unit per year. Analysed existing navigation data revealing only 6% visitor engagement with the mega menu. Conducted user interviews to understand customer pain points in finding healthcare products and services. Key insight emerged: the current mega menu lacked clear information hierarchy, making it difficult for users to quickly identify and access relevant services. Established design principles to guide the work: Inclusive, Scalable, Future-proof, Customer-centric, and Informative.',
      ideation: 'Define & Develop Phase - Collaborated with a cross-functional team including user researcher, delivery manager, developers, compliance & approvals team, and SEO specialists. Defined key objectives: (1) Boost navigation engagement via improved design, (2) Empower customer self-service to minimise support workload, (3) Lower abandonment rates to drive revenue growth. Created wireframes and prototypes exploring different navigation structures that would improve clickability clarity and information architecture. Used tools including Figma for design, UserTesting for validation, Adobe suite for assets, and Asana for project management. Prioritised accessibility considerations throughout the ideation process to serve Bupa\'s broad customer base.',
      design: 'Deliver Phase - Created high-fidelity prototypes with elevated visual design aligned with modern web trends and user mental models. Designed clear hierarchy and improved spacing to make links more distinguishable and clickable. Ensured the solution was scalable and future-proof to accommodate Bupa\'s expanding service offerings. Conducted usability testing to validate design decisions and iterated based on feedback. Used storytelling techniques to bring stakeholders along the journey, presenting design rationale tied to business objectives. Worked closely with developers and SEO team to ensure technical feasibility and maintain search engine optimisation. Secured approvals from compliance team while maintaining the improved user experience.',
    },
    results: [
      '26% increase in clickthrough rate on the mega menu',
      '+30 increase in Net Promoter Score (NPS)',
      'Contributed to Bupa\'s North Star goal of 500 CEX improvements per year',
      'Improved accessibility compliance, serving broader audience',
      'Reduced customer support workload through enhanced self-service capabilities',
      'Design system components created for future scalability across bupa.co.uk',
    ],
    images: [
      bupaCoUkBeforeAfter,
    ],
    nextProject: 'bupa-blua-engagement',
    prevProject: 'alat-onboarding-redesign',
  },
  {
    id: '3',
    title: 'MyBupa',
    slug: 'bupa-blua-engagement',
    oneLiner: 'Improving wellbeing engagement through gamification',
    thumbnail: myBupaThumbnail,
    role: 'Senior Product Designer',
    timeline: '4 months (2023 - 2024)',
    category: 'Health Tech • Mobile App • B2B2C',
    homePageSummary: 'The MyBupa app had a 2-minute average session per user and under 1% daily users. By introducing gamification with leagues, streaks, and personalised health insights dashboards, this resulted in a 112% increase in daily engagement and NPS jumped from 46 to 68.',
    problem: 'BUPA\'s Blua wellbeing proposition within the MyBupa app was experiencing critically low customer engagement and retention. With an average session duration of only 2 minutes, less than 1% of 4M+ accounts as daily active users, and a below-average NPS of 46 (with comments describing the app as "pretty basic"), the digital product was failing to deliver value and drive meaningful health outcomes. The small fraction of returning users indicated low satisfaction and ineffective UX that didn\'t motivate users to engage with wellbeing programmes or return to the app regularly.',
    goal: 'Increase user engagement and satisfaction by redesigning the Blua experience to be more motivating, accessible, and valuable. Success would be measured by: increasing daily engagement by 1% (from 0.7% to 1.7%), boosting average session duration by 150% (from 2 mins to 5 mins), improving NPS by 23 points, and increasing task completion rates for wellbeing programmes.',
    process: {
      research: 'Discovery Phase - Conducted desk research using Amplitude data to identify drop-off points, analyse most/least used Blua features, and understand engagement patterns across the 4M+ user base. Analysed customer reviews and Medalia feedback to surface pain points and user expectations. Key insight emerged: users found the app "pretty basic" and expected more dynamic, motivating experiences. Competitive analysis revealed successful gamification patterns in health and fitness apps (similar to Duolingo) that drove consistent daily engagement through streak tracking and achievement systems.',
      ideation: 'Define & Develop Phase - Facilitated cross-functional workshops with research, product, engineering, service design, and stakeholders to align on goals and success metrics. Used impact-effort matrix to prioritise solutions: Quick links and easy access (high impact, low effort), push notifications (medium impact, low effort), gamification with league system (high impact, high effort), and personalised AI assistant (high impact, high effort - deferred for future). Created wireframes exploring different approaches to gamification, personalised dashboards, and quick actions. Designed six core design principles to guide the work: Inclusive, Scalable, Future-proof, Flexible, Customer-centric, and Informative. Developed high-fidelity prototypes incorporating Bronze/Silver/Gold league systems, streak tracking, and stats dashboard.',
      design: 'Deliver Phase - Created final designs featuring: (1) Personalised homepage with greeting, gamification stats (league progress, XP tracking), 3-day streak indicator, upcoming appointments, and quick action buttons for key features, (2) Comprehensive stats screen showing total XP, rank position, league status, and progress visualisation, (3) Push notification strategy for lock screen reminders about streak continuation and upcoming appointments. Conducted usability testing with partner and 2 close friends (non-BUPA customers) to validate the approach. User feedback was overwhelmingly positive: "This is quite similar to duolingo, it would motivate me to take fitness classes and keep track." Collaborated closely with engineering on technical feasibility and implementation roadmap, ensuring all solutions were scalable and could grow as user needs evolved.',
    },
    results: [
      'Daily engagement increased from 0.7% to 1.9% (112% increase, exceeding the 1% goal)',
      'Session duration jumped from 2 mins to 5.2 mins (160% increase, surpassing 150% target)',
      'NPS improved from 46 to 68 (22-point increase, nearly achieving 23-point goal)',
      '34% increase in wellbeing programme booking and task completion rates',
      '45% boost in weekly active users over 3 months post-launch',
      'Gamification features adopted by 67% of active users within first month',
    ],
    images: [
      bupabluaWireframes,
      bupa2Image,
    ],
    nextProject: 'alat-onboarding-redesign',
    prevProject: 'bupa-couk-mega-menu',
  },
  {
    id: '1',
    title: 'ALAT by WEMA',
    slug: 'alat-onboarding-redesign',
    oneLiner: 'Reducing friction in digital bank onboarding to boost conversions',
    thumbnail: alatThumbnailNew,
    role: 'Lead Product Designer',
    timeline: '18 months (Jun 2021 - Dec 2022)',
    category: 'Fintech • Mobile Banking',
    homePageSummary: '71% of complaints were onboarding-related, 5+ minute signup killed conversions. Implemented BVN auto-population and streamlined flow. Result: 35% acquisition growth (600k to 810k users) and 58% faster signup.',
    problem: 'ALAT\'s onboarding experience was creating significant barriers to customer acquisition. Key pain points included: 71% of customer complaints were related to account setup difficulties, average signup time of 5 minutes 20 seconds was causing high abandonment rates, confusing error messages and document upload requirements frustrated users, and the lengthy data entry process with no auto-population created unnecessary friction. This directly impacted the bank\'s ability to scale and acquire new customers in a competitive digital banking market.',
    goal: 'Redesign the entire onboarding flow to create a frictionless account creation experience that reduces signup time, minimises data entry through BVN integration, provides clear guidance and error handling, and ultimately increases conversion rates while maintaining security and compliance standards.',
    process: {
      research: 'Discovery Phase - Conducted in-depth user interviews with 12 customers who had left negative app store reviews about the signup process. Analysed customer support tickets revealing 71% of complaints were onboarding-related. Performed competitive analysis of top Nigerian digital banks (Kuda Bank and FirstBank) to understand industry best practices. Identified key insight: users expected modern banking apps to auto-populate data using their BVN (Bank Verification Number), similar to competitors. Mapped current user journey highlighting major pain points including unclear requirements, repetitive data entry, and poor error feedback.',
      ideation: 'Define & Develop Phase - Facilitated "How Might We" workshops with product managers, engineers, and compliance team to explore solutions. Prioritised three key opportunities: (1) BVN-based data retrieval to auto-populate user information, (2) Progressive disclosure - moving non-critical profile details post-signup, (3) Improved error messaging and document upload guidance. Created multiple user flow variations and conducted preference testing with 8 users, discovering 69% strongly preferred auto-populated data. Developed low-fidelity wireframes exploring different approaches to BVN entry, data confirmation, and manual fallback options. Conducted 2 rounds of usability testing with 6 participants per round, iterating on feedback about setting expectations upfront, providing clear BVN retrieval options, and ensuring manual entry remained available.',
      design: 'Deliver Phase - Created high-fidelity prototypes incorporating ALAT\'s brand design system. Designed streamlined 4-step onboarding: (1) Welcome + requirements overview, (2) BVN entry with auto-population, (3) Verification and document upload, (4) Account creation success. Developed comprehensive component library for onboarding screens including input states, error messages, and loading indicators. Collaborated with engineering team on technical implementation of BVN API integration. Created detailed design specifications and developer handoff documentation using Figma, organised by atomic design principles. Conducted stakeholder presentations to secure buy-in from leadership, compliance, and engineering teams.',
    },
    results: [
      '35% increase in customer acquisition (600k to 810k users in 18 months, exceeding the 20% target)',
      '40% boost in conversion rate from baseline of 7.8%',
      'Average onboarding time reduced from 5min 20sec to 2min 13sec (58% reduction)',
      'Customer complaints about account setup dropped from 71% to 31%',
      'Promoted to Senior Product Designer with 18% salary increase based on project impact',
      'Solution adopted as template for other feature onboarding flows across the app',
    ],
    images: [
      alatExistingDesign,
      alatFinalDesign,
    ],
    nextProject: 'bupa-couk-mega-menu',
    prevProject: 'bupa-blua-engagement',
  },
];

export const bio = {
  name: 'Damilola Odulesi',
  tagline: 'Senior Product Designer',
  portrait: portraitImage,
  philosophy: 'I believe great design emerges at the intersection of user needs, business goals, and technical feasibility. My approach combines strategic thinking with meticulous craft, ensuring every decision is backed by research and validated through testing. Currently, I\'m focused on creating accessible, user-centered experiences that drive measurable impact and delight users at every touchpoint. I\'m passionate about mentoring junior designers and advocating for design excellence within product organizations.',
  fullBio: "I currently work in-house at Sky, shaping connected TV and broadband journeys. My experience cuts across media, fintech, healthtech, FMCG, and edtech, with a focus on building collaborative, user-centred design cultures.",
  skills: [
    { name: 'UX Design', icon: '🔍' },
    { name: 'Interface Design', icon: '🎨' },
    { name: 'Graphics Design', icon: '✨' },
    { name: 'Frontend Development', icon: '💻' },
    { name: 'AI & Machine Learning', icon: '🤖' },
    { name: 'Design Systems', icon: '📐' },
  ],
  tools: [
    'Figma',
    'React',
    'JavaScript',
    'HTML/CSS',
    'Webflow',
    'Framer',
    'Python',
    'Design Strategy',
    'Leadership',
    'Storytelling',
    'Workshopping',
    'User Research',
    'Prototyping',
  ],
};

export const resume = {
  experience: [
    {
      title: 'Senior Product Designer',
      company: 'SKY',
      location: 'London, UK',
      period: 'May 2026 - Present',
      description: [
        'Set the customer experience vision for Sky\'s Triple Play growth initiative, translating the intent behind 65% of digital sales into a dedicated TV and broadband journey. Built an interactive prototype that secured senior executive buy-in to take the proposition forward.',
        'Led the design and launch of Sky\'s postcode checker at the start of the TV purchase journey. It reached 50% engagement within 60 days, surfacing personalised eligibility and deals earlier while reducing the risk of customers encountering unavailable offers later.',
        'Embedded data-led design into the team\'s practice, using Adobe Customer Journey Analytics and Contentsquare to uncover 20+ friction points across TV journeys. Turned the findings into evidence-backed hypotheses for the product roadmap and scaled the approach across the wider design team.',
      ],
    },
    {
      title: 'Senior Product Designer',
      company: 'BUPA',
      location: 'London, UK',
      period: 'May 2024 - May 2026',
      description: [
        'Led the end-to-end redesign of the mega menu navigation on the bupa.co.uk website. This yielded a 26% increase in clickthrough rate, and +30 increase in NPS.',
        'Created a roadmap for sitewide optimisation, delegating research and design efforts to enhance search efficiency, site speed, and banner effectiveness. This resulted in a 13% increase in conversion rate and improved the overall user experience.',
        'Led the react migration for our 320 components in our design system, creating and allocating the right tokens to each of them. This migration to react led to a 54% increase in site speed.',
        'Led over 30 interviews for mid-level and senior designers, successfully onboarding 2 new team members.',
      ],
    },
    {
      title: 'Lead Product Designer',
      company: 'ALAT',
      location: 'Nigeria',
      period: 'Jun 2021 - May 2024',
      description: [
        'Collaborated with senior leaders to set the overall design vision and strategy for the product team and the product.',
        'Created high-level concepts and roadmaps for the design team, outlining creative strategies that align with the product\'s design vision.',
        'Led the execution of these concepts by allocating design resources effectively based on project requirements and team strengths.',
        'Optimised the banking apps\' onboarding experience by conducting user research, analysing user feedback, and iterating on design solutions. As a result, customer acquisition grew by 35% from 600k to 810k in 18 months.',
        'Led a team of four designers, responsible for the experience of the product: research, prototyping, and high fidelity design. We delivered 12 new functionalities and optimised more than 17 existing features in a period of two years.',
      ],
    },
    {
      title: 'UX Analyst',
      company: 'CITIBANK',
      location: 'Nigeria',
      period: 'Jun 2020 - May 2021',
      description: [
        'Created personas, user journeys, sitemaps, wireframes & prototype mockups, also managed design systems.',
        'Generated actionable insights from monthly site data metrics, including customer survey feedback analysis NPS.',
        'Presenting and contributing to monthly meetings, workshops and advising, including facilitating co-design sessions with a wide range of stakeholders as a representative of the UX Design team.',
      ],
    },
  ],
  education: [
    {
      degree: 'MSc Computer Science (Distinction)',
      school: 'Anglia Ruskin University',
      period: 'Sep 2022 - Sep 2023',
      description: 'Cambridge, UK',
    },
    {
      degree: 'Human Computer Interaction',
      school: 'Interaction Design Foundation (IDFx)',
      period: 'Jan 2021 - Aug 2022',
      description: 'Professional certification in HCI and UX principles.',
    },
    {
      degree: 'BSc Computer Science (Second Class Upper)',
      school: 'Babcock University',
      period: 'Aug 2014 - Jun 2018',
      description: 'Ogun State, Nigeria',
    },
  ],
  achievements: [
    'Speaker - "Finding the right UX metrics" at Natter, Manchester',
    'Google Certified: Foundations of UX design',
    'IDFx Certified: Human-computer interaction (HCI), Principles of UX',
    'LinkedIn Learning: Interaction design, strategic thinking, usability testing, UX research',
    'CompTIA A+ certified professional',
  ],
  resumeUrl: '/resume-damilola-odulesi.pdf', // Placeholder URL
};
