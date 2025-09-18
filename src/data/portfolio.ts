import { IconType } from "react-icons";
import { 
  FaJava, FaReact, FaSquareGithub, FaSquareInstagram, FaAngular,
  FaCode, FaRocket, FaMobile, FaGamepad, FaDatabase, FaCloud,
  FaServer, FaCogs, FaUsers, FaChartLine, FaShieldAlt
} from "react-icons/fa6";
import { 
  BiLogoJavascript, BiLogoNodejs, BiLogoMongodb, BiLogoPostgresql,
  BiLogoDocker, BiLogoAws, BiLogoGoogleCloud
} from "react-icons/bi";
import { 
  SiSpring, SiDotnet, SiTailwindcss, SiApachekafka, SiJenkins,
  SiDocker, SiKubernetes, SiRedis, SiElasticsearch, SiGrafana,
  SiPrometheus, SiJira, SiConfluence, SiSlack, SiFigma,
  SiAdobe, SiBlender, SiUnity, SiGodot, SiRaspberrypi,
  SiArduino, SiTensorflow, SiPytorch, SiOpencv
} from "react-icons/si";
import { PiFileSql, PiCode, PiPuzzlePiece, PiLightbulb } from "react-icons/pi";
import { RxLinkedinLogo } from "react-icons/rx";
import { TbBrandTypescript, TbBrandNextjs, TbBrandVue, TbBrandSvelte } from "react-icons/tb";

// Enhanced interfaces for better data structure
export interface PersonalInfo {
  name: string;
  title: string;
  subtitle: string;
  location: string;
  email: string;
  phone?: string;
  age: number;
  status: string;
  bio: string;
  tagline: string;
  avatar: string;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  location: string;
  duration: string;
  type: 'Full-time' | 'Part-time' | 'Contract' | 'Internship' | 'Apprenticeship';
  description: string;
  achievements: string[];
  technologies: string[];
  impact: {
    metric: string;
    value: string;
    description: string;
  }[];
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  location: string;
  duration: string;
  gpa: string;
  achievements: string[];
  relevant_courses: string[];
}

export interface Project {
  id: string;
  name: string;
  category: string;
  description: string;
  longDescription: string;
  technologies: string[];
  features: string[];
  challenges: string[];
  solutions: string[];
  impact: {
    metric: string;
    value: string;
    description: string;
  }[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
  status: 'Completed' | 'In Progress' | 'On Hold';
  duration: string;
  teamSize: number;
  role: string;
}

export interface Skill {
  category: string;
  name: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
  years: number;
  icon: IconType;
  description: string;
  projects: number;
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  credentialId?: string;
  url?: string;
  skills: string[];
}

export interface SocialLink {
  name: string;
  url: string;
  icon: IconType;
  username: string;
  followers?: number;
}

export interface Achievement {
  title: string;
  description: string;
  date: string;
  category: 'Professional' | 'Academic' | 'Personal' | 'Award';
  impact: string;
}

// Personal Information
export const personalInfo: PersonalInfo = {
  name: "Avinash Chinnala",
  title: "Senior Software Engineer",
  subtitle: "Full-Stack Developer & Cloud Solutions Architect",
  location: "California, USA",
  email: "avinashchinnala1325@gmail.com",
  age: 25,
  status: "Open to Opportunities",
  bio: "Passionate software engineer with 5+ years of experience building scalable web applications and cloud solutions. Specialized in Java, React, Angular, and .NET with expertise in microservices architecture, DevOps practices, and team leadership.",
  tagline: "Building tomorrow's digital solutions today",
  avatar: "/src/assets/profilev2.jpg"
};

// Professional Experience
export const experiences: Experience[] = [
  {
    id: "a3-tech-solutions",
    company: "A3 Tech Solutions",
    position: "Java Developer",
    location: "Remote",
    duration: "Jan 2025 - Present",
    type: "Full-time",
    description: "Leading development of scalable web applications using modern Java ecosystem and cloud technologies.",
    achievements: [
      "Built 3+ production-ready microservices handling 10K+ daily requests",
      "Mentored 2 junior developers, improving team productivity by 40%",
      "Implemented CI/CD pipelines reducing deployment time by 60%",
      "Optimized database queries resulting in 50% faster response times"
    ],
    technologies: ["Java", "Spring Boot", "Angular", "Oracle", "Docker", "Jenkins"],
    impact: [
      { metric: "Performance", value: "50%", description: "Faster response times" },
      { metric: "Team Growth", value: "40%", description: "Improved productivity" },
      { metric: "Deployment", value: "60%", description: "Faster deployments" }
    ]
  },
  {
    id: "nwmsu-apprenticeship",
    company: "Northwest Missouri State University",
    position: "Software Developer (Apprenticeship)",
    location: "Maryville, MO",
    duration: "Oct 2023 - Dec 2024",
    type: "Apprenticeship",
    description: "Developed full-stack applications for university systems while pursuing Master's degree.",
    achievements: [
      "Built Timeclock system serving 500+ university employees",
      "Developed Online Textbook System with 1000+ active users",
      "Optimized SQL queries improving system performance by 35%",
      "Supported research platforms used by 50+ faculty members"
    ],
    technologies: ["Spring Boot", "Angular", ".NET Core", "MySQL", "TypeScript", "Bootstrap"],
    impact: [
      { metric: "Users", value: "1000+", description: "Active textbook system users" },
      { metric: "Performance", value: "35%", description: "Improved system performance" },
      { metric: "Efficiency", value: "500+", description: "Employees using timeclock" }
    ]
  },
  {
    id: "bosch-gst",
    company: "Bosch Global Software Technologies",
    position: "Associate Software Engineer",
    location: "Bangalore, India",
    duration: "Jul 2022 - Aug 2023",
    type: "Full-time",
    description: "Developed microservices and SPAs for automotive industry solutions.",
    achievements: [
      "Created 5+ microservices using Java Spring Boot and Hibernate",
      "Built responsive SPAs with Angular serving 10K+ users",
      "Integrated REST APIs with 99.9% uptime",
      "Deployed applications using Docker, Jenkins, and AWS Lambda"
    ],
    technologies: ["Java", "Spring Boot", "Hibernate", "Angular", "Docker", "Jenkins", "AWS Lambda"],
    impact: [
      { metric: "Uptime", value: "99.9%", description: "API reliability" },
      { metric: "Users", value: "10K+", description: "SPA users" },
      { metric: "Services", value: "5+", description: "Microservices built" }
    ]
  },
  {
    id: "agl-technologies",
    company: "AGL Technologies",
    position: "Project Engineer",
    location: "Hyderabad, India",
    duration: "Oct 2021 - Jun 2022",
    type: "Full-time",
    description: "Full-stack development with focus on CI/CD and automation.",
    achievements: [
      "Developed applications using Angular, React, and Java REST APIs",
      "Managed CI/CD pipelines reducing deployment time by 45%",
      "Deployed Dockerized applications with zero-downtime",
      "Automated ETL processes using Python scripts"
    ],
    technologies: ["Angular", "React", "Java", "Jenkins", "Docker", "Python", "SQL"],
    impact: [
      { metric: "Deployment", value: "45%", description: "Faster deployment time" },
      { metric: "Automation", value: "100%", description: "ETL process automation" },
      { metric: "Uptime", value: "Zero", description: "Downtime deployments" }
    ]
  },
  {
    id: "epam-systems",
    company: "EPAM Systems",
    position: "PEP Apprentice",
    location: "Hyderabad, India",
    duration: "Sep 2020 - Jun 2021",
    type: "Apprenticeship",
    description: "Intensive training program in full-stack development and software engineering principles.",
    achievements: [
      "Mastered full-stack development with Java, HTML, CSS, JavaScript",
      "Built REST APIs following industry best practices",
      "Designed responsive UIs with modern CSS frameworks",
      "Applied SOLID principles in real-world projects"
    ],
    technologies: ["Java", "HTML", "CSS", "JavaScript", "Spring Boot", "REST APIs"],
    impact: [
      { metric: "Projects", value: "10+", description: "Completed projects" },
      { metric: "Skills", value: "15+", description: "Technologies mastered" },
      { metric: "Principles", value: "100%", description: "SOLID principles applied" }
    ]
  }
];

// Education
export const education: Education[] = [
  {
    id: "nwmsu-ms",
    institution: "Northwest Missouri State University",
    degree: "Master of Science",
    field: "Computer Science",
    location: "Maryville, MO, USA",
    duration: "Aug 2023 - Dec 2024",
    gpa: "3.80/4.0",
    achievements: [
      "Graduated with Distinction",
      "Research in Machine Learning Applications",
      "Teaching Assistant for Data Structures Course"
    ],
    relevant_courses: [
      "Advanced Algorithms",
      "Machine Learning",
      "Database Systems",
      "Software Engineering",
      "Computer Networks",
      "Distributed Systems"
    ]
  },
  {
    id: "gect-btech",
    institution: "Geethanjali College of Engineering and Technology",
    degree: "Bachelor of Technology",
    field: "Computer Science Engineering",
    location: "Hyderabad, India",
    duration: "Aug 2018 - May 2022",
    gpa: "7.67/10.0",
    achievements: [
      "Dean's List for 3 consecutive semesters",
      "Final Year Project Excellence Award",
      "Student Council Technical Head"
    ],
    relevant_courses: [
      "Data Structures and Algorithms",
      "Object-Oriented Programming",
      "Database Management Systems",
      "Computer Networks",
      "Software Engineering",
      "Operating Systems"
    ]
  }
];

// Projects
export const projects: Project[] = [
  {
    id: "car-o-drive",
    name: "Car-O-Drive",
    category: "Enterprise Web Application",
    description: "Comprehensive car inventory management system for manufacturing and warehouse operations with real-time tracking and analytics.",
    longDescription: "A full-stack enterprise application designed to streamline car inventory management for manufacturing and warehouse systems. The platform features real-time inventory tracking, automated reporting, integrated analytics dashboard, and multi-user role management.",
    technologies: ["Angular", "TypeScript", "Node.js", "MongoDB", "Express.js", "Bootstrap", "Chart.js"],
    features: [
      "Real-time inventory tracking",
      "Automated reporting system",
      "Analytics dashboard with charts",
      "Multi-user role management",
      "Barcode scanning integration",
      "Mobile-responsive design"
    ],
    challenges: [
      "Handling large datasets efficiently",
      "Real-time synchronization across multiple users",
      "Complex reporting requirements",
      "Mobile performance optimization"
    ],
    solutions: [
      "Implemented pagination and lazy loading",
      "Used WebSocket for real-time updates",
      "Created modular reporting engine",
      "Optimized images and used CDN"
    ],
    impact: [
      { metric: "Efficiency", value: "65%", description: "Reduced inventory management time" },
      { metric: "Accuracy", value: "99.5%", description: "Inventory tracking accuracy" },
      { metric: "Users", value: "200+", description: "Active warehouse users" }
    ],
    githubUrl: "https://github.com/AvinashChinnala1308/car-o-drive",
    liveUrl: "https://car-o-drive-demo.com",
    status: "Completed",
    duration: "6 months",
    teamSize: 4,
    role: "Full-Stack Developer & Team Lead"
  },
  {
    id: "fall-detection-system",
    name: "Fall Detection System",
    category: "IoT & Healthcare",
    description: "AI-powered IoT system for elderly care with real-time fall detection and emergency response capabilities.",
    longDescription: "An innovative IoT solution using Raspberry Pi and advanced sensors to detect falls in elderly individuals. The system includes machine learning algorithms for accurate detection, a mobile app for caregivers with real-time notifications, and emergency response features.",
    technologies: ["Raspberry Pi", "Python", "React Native", "IoT", "Machine Learning", "Firebase", "TensorFlow", "OpenCV"],
    features: [
      "AI-powered fall detection",
      "Real-time mobile notifications",
      "Emergency response system",
      "Health monitoring dashboard",
      "GPS location tracking",
      "Voice alerts and reminders"
    ],
    challenges: [
      "Achieving high accuracy in fall detection",
      "Low-power consumption for IoT devices",
      "Real-time data processing",
      "Cross-platform mobile development"
    ],
    solutions: [
      "Implemented ensemble ML models",
      "Optimized power management",
      "Used edge computing for processing",
      "Developed hybrid mobile app"
    ],
    impact: [
      { metric: "Accuracy", value: "94%", description: "Fall detection accuracy" },
      { metric: "Response", value: "2s", description: "Average response time" },
      { metric: "Users", value: "50+", description: "Elderly users served" }
    ],
    githubUrl: "https://github.com/AvinashChinnala1308/fall-detection",
    liveUrl: "https://fall-detection-demo.com",
    status: "Completed",
    duration: "8 months",
    teamSize: 3,
    role: "IoT Developer & ML Engineer"
  },
  {
    id: "innoversity",
    name: "Innoversity",
    category: "Collaborative Platform",
    description: "Crowdsourcing platform promoting diversity and innovation in project development with skill matching and gamification.",
    longDescription: "A comprehensive crowdsourcing platform that connects diverse teams for innovative projects. Features include intelligent project matching, skill assessment tools, collaborative workspace, progress tracking with gamification elements, and community building features.",
    technologies: ["React", "Node.js", "MongoDB", "Socket.io", "Redux", "Material-UI", "Express.js", "JWT"],
    features: [
      "Intelligent project matching",
      "Skill assessment and certification",
      "Collaborative workspace",
      "Progress tracking with gamification",
      "Community building tools",
      "Real-time chat and notifications"
    ],
    challenges: [
      "Complex matching algorithms",
      "Real-time collaboration features",
      "Scalable user management",
      "Gamification system design"
    ],
    solutions: [
      "Implemented recommendation engine",
      "Used WebSocket for real-time features",
      "Designed microservices architecture",
      "Created point and badge system"
    ],
    impact: [
      { metric: "Projects", value: "150+", description: "Completed projects" },
      { metric: "Users", value: "500+", description: "Active community members" },
      { metric: "Success", value: "85%", description: "Project completion rate" }
    ],
    githubUrl: "https://github.com/AvinashChinnala1308/innoversity",
    liveUrl: "https://innoversity-platform.com",
    status: "Completed",
    duration: "10 months",
    teamSize: 5,
    role: "Full-Stack Developer & Product Designer"
  },
  {
    id: "acid-base-game",
    name: "Acid-Base Game",
    category: "Educational Game",
    description: "Interactive 2D educational game teaching chemistry concepts through gamification and immersive learning experiences.",
    longDescription: "A 2D educational game developed to make chemistry learning engaging and interactive. Players learn acid-base reactions through puzzles, challenges, and interactive experiments with immediate feedback, progress tracking, and adaptive difficulty.",
    technologies: ["Godot Engine", "GDScript", "C#", "Unity", "Blender", "Photoshop", "JavaScript"],
    features: [
      "Interactive chemistry experiments",
      "Adaptive difficulty system",
      "Progress tracking and achievements",
      "Multiplayer challenges",
      "Educational content integration",
      "Cross-platform compatibility"
    ],
    challenges: [
      "Making complex chemistry concepts accessible",
      "Creating engaging gameplay mechanics",
      "Cross-platform development",
      "Educational content accuracy"
    ],
    solutions: [
      "Designed visual learning aids",
      "Implemented puzzle-based progression",
      "Used cross-platform game engine",
      "Collaborated with chemistry educators"
    ],
    impact: [
      { metric: "Students", value: "1000+", description: "Students engaged" },
      { metric: "Learning", value: "40%", description: "Improved test scores" },
      { metric: "Retention", value: "85%", description: "Knowledge retention rate" }
    ],
    githubUrl: "https://github.com/AvinashChinnala1308/acid-base-game",
    liveUrl: "https://acid-base-game-demo.com",
    status: "Completed",
    duration: "4 months",
    teamSize: 2,
    role: "Game Developer & Educational Designer"
  }
];

// Skills with detailed information
export const skills: Skill[] = [
  // Programming Languages
  { category: "Programming Languages", name: "Java", level: "Expert", years: 5, icon: FaJava, description: "Enterprise application development with Spring ecosystem", projects: 15 },
  { category: "Programming Languages", name: "JavaScript", level: "Expert", years: 5, icon: BiLogoJavascript, description: "Full-stack development with modern frameworks", projects: 20 },
  { category: "Programming Languages", name: "TypeScript", level: "Advanced", years: 3, icon: TbBrandTypescript, description: "Type-safe development for large applications", projects: 12 },
  { category: "Programming Languages", name: "C#", level: "Advanced", years: 4, icon: SiDotnet, description: ".NET ecosystem and enterprise solutions", projects: 10 },
  { category: "Programming Languages", name: "Python", level: "Intermediate", years: 2, icon: FaCode, description: "Data processing and automation scripts", projects: 8 },
  { category: "Programming Languages", name: "SQL", level: "Expert", years: 5, icon: PiFileSql, description: "Database design and optimization", projects: 18 },

  // Frontend Technologies
  { category: "Frontend", name: "React", level: "Expert", years: 4, icon: FaReact, description: "Modern UI development with hooks and context", projects: 15 },
  { category: "Frontend", name: "Angular", level: "Advanced", years: 3, icon: FaAngular, description: "Enterprise-grade SPA development", projects: 10 },
  { category: "Frontend", name: "Next.js", level: "Intermediate", years: 2, icon: TbBrandNextjs, description: "Full-stack React applications", projects: 5 },
  { category: "Frontend", name: "Vue.js", level: "Intermediate", years: 1, icon: TbBrandVue, description: "Progressive web applications", projects: 3 },
  { category: "Frontend", name: "Tailwind CSS", level: "Advanced", years: 3, icon: SiTailwindcss, description: "Utility-first CSS framework", projects: 12 },

  // Backend Technologies
  { category: "Backend", name: "Spring Boot", level: "Expert", years: 4, icon: SiSpring, description: "Microservices and REST API development", projects: 15 },
  { category: "Backend", name: ".NET Core", level: "Advanced", years: 3, icon: SiDotnet, description: "Cross-platform web APIs", projects: 8 },
  { category: "Backend", name: "Node.js", level: "Advanced", years: 3, icon: BiLogoNodejs, description: "JavaScript runtime for server-side development", projects: 10 },
  { category: "Backend", name: "Express.js", level: "Advanced", years: 3, icon: BiLogoNodejs, description: "Web application framework for Node.js", projects: 8 },

  // Databases
  { category: "Databases", name: "MongoDB", level: "Advanced", years: 3, icon: BiLogoMongodb, description: "NoSQL document database", projects: 8 },
  { category: "Databases", name: "PostgreSQL", level: "Advanced", years: 4, icon: BiLogoPostgresql, description: "Relational database management", projects: 12 },
  { category: "Databases", name: "MySQL", level: "Expert", years: 5, icon: FaDatabase, description: "Open-source relational database", projects: 15 },
  { category: "Databases", name: "Redis", level: "Intermediate", years: 2, icon: SiRedis, description: "In-memory data structure store", projects: 5 },

  // Cloud & DevOps
  { category: "Cloud & DevOps", name: "Docker", level: "Advanced", years: 3, icon: BiLogoDocker, description: "Containerization platform", projects: 12 },
  { category: "Cloud & DevOps", name: "Kubernetes", level: "Intermediate", years: 2, icon: SiKubernetes, description: "Container orchestration", projects: 4 },
  { category: "Cloud & DevOps", name: "AWS", level: "Intermediate", years: 2, icon: BiLogoAws, description: "Amazon Web Services cloud platform", projects: 6 },
  { category: "Cloud & DevOps", name: "Jenkins", level: "Advanced", years: 3, icon: SiJenkins, description: "CI/CD automation", projects: 10 },
  { category: "Cloud & DevOps", name: "Git", level: "Expert", years: 5, icon: FaCode, description: "Version control system", projects: 25 },

  // Tools & Platforms
  { category: "Tools", name: "IntelliJ IDEA", level: "Expert", years: 5, icon: FaCode, description: "Java IDE with advanced features", projects: 20 },
  { category: "Tools", name: "VS Code", level: "Expert", years: 4, icon: FaCode, description: "Multi-language code editor", projects: 25 },
  { category: "Tools", name: "Figma", level: "Intermediate", years: 2, icon: SiFigma, description: "UI/UX design and prototyping", projects: 8 },
  { category: "Tools", name: "Jira", level: "Advanced", years: 3, icon: SiJira, description: "Project management and issue tracking", projects: 15 }
];

// Social Links
export const socialLinks: SocialLink[] = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/avinash-chalam-chinnala-8300501b3/",
    icon: RxLinkedinLogo,
    username: "avinash-chalam-chinnala",
    followers: 500
  },
  {
    name: "GitHub",
    url: "https://github.com/AvinashChinnala1308",
    icon: FaSquareGithub,
    username: "AvinashChinnala1308",
    followers: 200
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/avinash_chinnala/",
    icon: FaSquareInstagram,
    username: "avinash_chinnala",
    followers: 150
  }
];

// Achievements
export const achievements: Achievement[] = [
  {
    title: "Dean's List Recognition",
    description: "Maintained high academic performance for 3 consecutive semesters",
    date: "2020-2021",
    category: "Academic",
    impact: "Top 5% of graduating class"
  },
  {
    title: "Final Year Project Excellence Award",
    description: "Awarded for outstanding contribution to fall detection system project",
    date: "2022",
    category: "Award",
    impact: "Recognized by university faculty and industry partners"
  },
  {
    title: "Team Leadership Excellence",
    description: "Successfully led cross-functional teams in 3 major projects",
    date: "2023-2024",
    category: "Professional",
    impact: "Improved team productivity by 40%"
  },
  {
    title: "Open Source Contributor",
    description: "Active contributor to multiple open-source projects",
    date: "2022-Present",
    category: "Personal",
    impact: "500+ GitHub contributions"
  }
];

// Certifications
export const certifications: Certification[] = [
  {
    name: "AWS Certified Developer Associate",
    issuer: "Amazon Web Services",
    date: "2024",
    skills: ["AWS", "Cloud Computing", "Serverless", "DevOps"]
  },
  {
    name: "Spring Professional Certification",
    issuer: "VMware",
    date: "2023",
    skills: ["Spring Framework", "Java", "Microservices"]
  },
  {
    name: "Docker Certified Associate",
    issuer: "Docker Inc.",
    date: "2023",
    skills: ["Docker", "Containerization", "DevOps"]
  }
];
