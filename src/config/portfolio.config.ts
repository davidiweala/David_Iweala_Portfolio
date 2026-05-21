import { link } from "fs";

export const portfolioConfig = {
  // Basic Information
  name: "David K. Iweala",
  title: "Infrastructure / DevOps Engineer",
  description: "Aspiring founder in agriculture technology, passionate about leveraging technology to revolutionize farming practices and enhance sustainability in the agricultural sector. Also ",
  location: "Louisville, KY, USA",

  // Contact Information
  email: "iwealadavid@gmail.com", // Replace with actual email if available

  // Social Media Links
  socialLinks: {
    facebook: "https://www.facebook.com/david.iweala/",
    twitter: "https://x.com/iwealadavidd",
    linkedin: "https://www.linkedin.com/in/david-iweala",
    external: "https://davidiweala.substack.com/",
    github: "https://github.com/davidiweala", // Assuming this is the GitHub link
  },

  // SEO Information
  seo: {
    ogImage: "https://iwealadavid.netlify.app/og-image.png",
    url: "https://iwealadavid.netlify.app",
    instagramHandle: "@davidiweala_",
    linkedinHandle: "david-iweala",
    substackHandle: "davidiweala",
    google: "7eX_PguUotnmmDfqfJVQIVpiB6b6DVUhhPpgb-JOyzE",
    researchgateHandle: "david-iweala",
    keywords: [
      "David",
      "Iweala",
      "Kelechi",
      "DevOps",
      "Engineer",
      "DAVID IWEALA",
      "David K. Iweala",
      "Iweala",
      "Okonjo",
      "Nigerian",
      "Nigerian DevOps Engineer",
      "Infrastructure Engineer",
      "Agriculture Technology",
      "Agritech",
      "TikTok",
      "Instagram",
      "X",
      "Software Engineer",
      "David Kelechi",
      "Smart Farming",
      "Smart Agriculture",
      "Sustainable Agriculture",
      "Precision Farming",
      "AgriTech Innovator",
      "Founder",
      "@davidiweala",
      "davidiweala",
      "smart",
      "farming",
      "sustainable",
      "agriculture",
      "precision",
      "agritech",
      "innovator",
      "founder",
      "Da",
      "University of Louisville",
      "Kentucky",
      "USA",
      "Louisville",
      "United states of America",
      "Aspiring founder",
      "Agriculture technology",
      "Revolutionize farming practices",
      "Enhance sustainability in agriculture",
      "Agricultural sector",
      "USA"
    ],
    authors: [
      {
        name: "David K. Iweala",
        url: "https://github.com/davidiweala",
      },
    ],
  },

  // About Information
  about: {
    bio: "Aspiring founder in agriculture technology, passionate about leveraging technology to revolutionize farming practices and enhance sustainability in the agricultural sector. Also I’m a graduate student in Computer Science at the University of Louisville (class of 2027) with 3+ years of professional experience in IT infrastructure, DevOps, and enterprise systems, primarily in the banking and financial technology sectors. I specialize in Linux and Windows server administration, cloud platforms (AWS, Azure), monitoring and reliability (Dynatrace, Grafana), CI/CD automation, and enterprise tools such as Office 365, Active Directory, and Microsoft Exchange. ",

    hobbies: [
      "Coding",
      "Playing Games",
      "Brainstorming New Ideas",
      "Tech Blog Writing",
      "Creating Cool Projects",
      "Reading"
    ],
    personalInfo: {
      language: "English (Fluent), Igbo (Native)",
      nationality: "Nigerian",
      gender: "Male",
      nation: "USA",
    },
  },

  // Skills and Roles
  skills: {
    roles: [
      "Founder",
      "Creator",
      "Student",
    ],
    // Technical Skills
    programmingLanguages: [
      {
        name: "Python",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      },
      {
        name: "Bash",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg",
      },
      
    ],
    cloudDevOps: [
      {
        name: "AWS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
      },
      {
        name: "Azure",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
      },
      {
        name: "Docker",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
      },
      {
        name: "Kubernetes",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-original.svg",
      },
      
      {
        name: "Terraform",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg",
      },
      {
        name: "Netlify",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netlify/netlify-original.svg",
      },
     
    ],
    systemsoftwares: [
      {
        name: "Linux",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
      },
      {
        name: "Windows Server",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg",
      },
  
      {
        name: "Dynatrace",
        icon: "https://cdn.simpleicons.org/dynatrace",
      },
      {
        name: "Grafana",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg",
      },
  
    ],
  },

  // Education Information
  education: [
    {
      degree: "M.Sc Computer Science",
      institution: "University of Louisville",
      location: "louisville, KY, USA",
      period: "Jan 2026 - Dec 2027",
      description:
        "CGPA: 3.43/4.0"},
    {
      degree: "B.Eng Computer Engineering",
      institution: "Covenant University",
      location: "Ota, Ogun State, Nigeria",
      period: "Aug 2016 - Sep 2021",
      description:
        "CGPA: 3.20/5.0"},
  ],

  // Projects Information
  projects: [
    {
      title: "SmartFarm, An IoT-based Smart Agriculture System",
      description:
        "A comprehensive IoT-based smart agriculture system designed to optimize farming practices through real-time monitoring and automation. Key features include automated irrigation control, remote monitoring via a mobile app, and data analytics for informed decision-making. This project aims to revolutionize traditional farming methods by leveraging technology to promote sustainable agriculture and improve food security.",
      tags: ["Smart Farming", "IoT", "Agriculture Technology", "Sustainability"],
      link: "https://github.com/davidiweala/Precision_Agriculture",
    },
    
  ],

  // More Links Information
  moreLinks: [
    {
      title: "What I've Learned Researching Agriculture",
      description:
        "Three years of studying the gap between the technology we have and the farmers who need it most, and why that gap matters more than anything else.",
      link: "https://open.substack.com/pub/davidiweala/p/what-ive-learned-researching-agriculture?r=2zpkax&utm_campaign=post&utm_medium=web&showWelcomeOnShare=true",
    },
     {
      title: "Why I Started Thinking About Agri-Tech",
      description:
        "Technology has transformed industries across the world, yet agriculture, one of the most important sectors for human survival, still faces major inefficiencies, especially in emerging markets.",
      link: "https://open.substack.com/pub/davidiweala/p/why-i-started-thinking-about-agri?r=2zpkax&utm_campaign=post&utm_medium=web",
    },
    
    {
      title: "Buy Me a coffee",
      description:
        "Support my content quality, new topics, and project creation.",
      link: "https://buy.stripe.com/dRm28ka4U9NW6o4aaN2sM00",
    },
  ],

  // API Keys (should be in .env but referenced here)
  apiKeys: {
    resendApiKey: "YOUR_RESEND_API_KEY", // This should be loaded from environment variables in a real app
  },
};
