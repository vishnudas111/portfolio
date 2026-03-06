// src/data/resume.tsx
import {
    Github,
    Linkedin,
    Mail,
    Zap,
    Accessibility,
    MessageSquareText,
} from "lucide-react";
import { SiteConfig } from "@/types";
import { SVGProps } from "react";
import { JSX } from "react/jsx-runtime";

export const resume: SiteConfig = {
    name: "Vishnudas V U",
    role: "Software Developer",
    location: "Kerala, India",
    email: "vishnudasvu111@gmail.com",

    typewriterWords: ["web applications.", "softwares.", ""],

    bio: [
        "I specialise in creating sclable and modern ", // Note: Typewriter effect follows this line
        "From large-scale merchant onboarding platforms to AI powered SaaS platform for community learning, my philosophy remains the same: keep systems reliable, performant, and simple to operate.",
        "I'm committed to continuous learning and improvement and while that may at times manifest as my well known affinity for over-engineered solutions, I believe that's the spark that makes a product particularly enticing for any users :)"
    ],

    contact: {
        socials: [
            {name: "GitHub", url: "https://github.com/vishnudas111", icon: Github},
            {name: "LinkedIn", url: "https://www.linkedin.com/in/vishnudas-v-u-246321192/", icon: Linkedin},
            // {
            //     name: "Instagram",
            //     url: "https://instagram.com/_medy__/",
            //     icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
            //         <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16" {...props}>
            //             <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
            //         </svg>
            //     )
            // },
            { name: "Email", url: "vishnudasvu111@gmail.com", icon: Mail },
        ]
    },

    skills: [
        "Java", "Spring Boot", "Python", "SQL", "Node.js", "HTML", "CSS", "JavaScript", "TypeScript",
        "React", "Git"
    ],

    attributes: [
        {
            label: "Accessibility Focused",
            description: "I build for everyone.",
            icon: Accessibility,
            color: "text-blue-400"
        },
        {
            label: "Performance First",
            description: "I optimise for speed and efficiency.",
            icon: Zap,
            color: "text-amber-400"
        },
        {
            label: "Clear Communication",
            description: "I'll give you jargon or plain English. Whichever you prefer.",
            icon: MessageSquareText,
            color: "text-emerald-400"
        },
    ],

    experience: [
        {
            type: "work",
            company: "DP World",
            logo: "/experience/dpWorld.webp",
            icon: "UC",
            containerClass: "bg-pink-500/10 border-pink-500/20",
            textClass: "text-pink-400",
            title: "Backend Developer",
            period: "May 2025 - Nov 2025",
            highlights: [
                "Led development of Service Purchase Order feature enabling end-to-end service procurement and invoicing",
                "Owned backend modules for multi-warehouse fulfillment handling retailer and manual order flows across business units.",
                "Implemented rule-based approval workflows, automated tax/GL validation, and audit trail logging"
            ],
        },
        {
            type: "work",
            company: "Vymo",
            logo: "/experience/vymo.webp",
            icon: "TU",
            containerClass: "bg-red-500/10 border-red-500/20",
            textClass: "text-red-400",
            title: "Software Development Engineer (Backend)",
            period: "Apr 2024 - Mar 2025",
            highlights: [
                "Built a secure stateless authentication system using JWT, refresh-token rotation, OAuth2 and MFA.",
                "Developed real-time session monitoring and alerting system achieving 99.9% service uptime.",
                "Implemented Redis cache-aside strategy with TTL optimization reducing database load and improving API latency."
            ],
        },
        {
            type: "work",
            company: "Jio",
            logo: "/experience/jio.webp",
            icon: "MMU",
            containerClass: "bg-blue-500/10 border-blue-500/20",
            textClass: "text-blue-400",
            title: "Software Development Engineer (Backend)",
            period: "Jul 2022 – Mar 2024",
            highlights: [
                "Built merchant self-onboarding and ordering platform using Spring Boot microservices enabling 100K+ merchants.",
                "Architected centralized logging framework using Log4j, Kafka and Elasticsearch reducing debugging time by 30%.",
                "Optimized database indexing and queries reducing API latency from 450ms to 80ms at 5K RPS."
            ],
        },
        {
            type: "education",
            company: "IIT Dhanbad",
            logo: "/experience/ism.webp",
            icon: "ISM",
            containerClass: "bg-blue-500/10 border-blue-500/20",
            textClass: "text-blue-400",
            title: "B.Tech - Civil Engineering",
            period: "Jul 2018 - May 2022",
            highlights: [
                "Btech in Civil Engineering with a specialisation in Data Science.",
                "Machine learnng, Application development, Data Structures and Algorithms",
                "Active member of multiple Hackathon teams and competitions."
            ],
        },
    ],

    projects: [
        {
            title: "Cognito",
            client: "Personal Project",
            timeline: "2025",
            techStack: ["TypeScript", "Next.js", "PostgreSQL", "Drizzle ORM", "OpenAI", "Hono", "Clerk"],
            images: ["cognito/cognito1.webp", "cognito/cognito2.webp" , "cognito/cognito3.webp"],
            description: "AI-powered community learning platform that improves learner matching using semantic goal analysis instead of keyword matching.",
            scope: "Full-stack Development",
            responsibilities: [
                "Designed scalable backend architecture using PostgreSQL and type-safe ORM.",
                "Built GPT-based semantic matching pipelines to connect learners with relevant communities.",
                "Implemented authentication and user management with Clerk.",
                "Developed API layer using Hono for high-performance request handling."
            ],
            languages: ["TypeScript", "SQL"],
            repoUrl: "https://github.com/vishnudas111/cognito-app",
            demoUrl: "https://cognito-app-hazel.vercel.app/"
        },
        {
            title: "ReviewBot",
            client: "Personal Project",
            timeline: "2024",
            techStack: ["TypeScript", "GitHub Actions", "PMAT", "YAML", "CI/CD"],
            images: ["reviewbot/review.webp"],
            description: "Automated GitHub Action bot that analyzes cyclomatic and cognitive complexity in pull requests and enforces code quality standards.",
            scope: "Backend Development / Developer Tooling",
            responsibilities: [
                "Built GitHub Action to automatically analyze pull request complexity.",
                "Integrated PMAT static analysis to compute cyclomatic and cognitive complexity.",
                "Configured CI workflow to fail builds when complexity thresholds are exceeded.",
                "Generated automated review comments with actionable suggestions."
            ],
            languages: ["TypeScript", "YAML"],
            repoUrl: "https://github.com/vishnudas111/pmat-action",
            demoUrl: ""
        }
    ],
};