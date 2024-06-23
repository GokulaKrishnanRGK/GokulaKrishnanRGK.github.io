import {
    backend,
    web,
    spring,
    django,
    terraform,
    packer,
    gcp,
    aws,
    kubernetes,
    express,
    angular,
    reactjs,
    nodejs,
    git,
    docker,
    zoho,
    sriwijaya,
    cloud,
    codecare,
    projdb,
    mobile, ember,
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Full-stack Developer",
        icon: web,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
    {
        title: "Cloud Engineer",
        icon: mobile,
    },
];

const technologies = [
    {
        name: "Spring",
        icon: spring,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "Express JS",
        icon: express,
    },
    {
        name: "Django",
        icon: django,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Angular JS",
        icon: angular,
    },
    {
        name: "Ember JS",
        icon: ember,
    },
    {
        name: "Terraform",
        icon: terraform,
    },
    {
        name: "Packer",
        icon: packer,
    },
    {
        name: "GCP",
        icon: gcp,
    },
    {
        name: "AWS",
        icon: aws,
    },
    {
        name: "Kubernetes",
        icon: kubernetes,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "docker",
        icon: docker,
    }
    /*
    {
        name: "Java",
        icon: java,
    },
    {
        name: "Python",
        icon: python,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "C/C++",
        icon: cpp,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    }*/
];

const experiences = [
    {
        title: "Software Engineer",
        company_name: "Zoho Corporation",
        icon: zoho,
        iconBg: "#E6DEDD",
        date: "August 2021 - August 2023",
        points: [
            "Led development of a feature to retrieve Azure Active Directory logs via REST API, providing reports, auditing, and real-time security alerts, contributing to a $50K annual revenue increase from client purchases.",
            "Implemented enhanced querying and integrated caching for fault tolerance and checkpointing, ensuring 99% data integrity and processing 300K data points (500MB+) per minute per source.",
            "Developed API endpoints for seamless data source configuration and management, and designed an intuitive UI, enhancing user experience through a component-driven approach.",
            "Collaborated with customer support to debug and resolve critical issues, reducing feature-related incidents by 90% and significantly improving customer satisfaction as evidenced by feedback and fewer support tickets",
            "Led a team of three to create a decision-based task automation framework for a multi-tenant application, automating 60+ operations and reducing manual labor, enabling immediate response to security vulnerabilities.",
            "Utilized multi-threading for operations and designed a schema to store fully qualified class names, using reflection to dynamically generate object instances, easing integration with on-premise and cloud products by 90%.",
            "Collaborated with cross-functional teams, including management, QA, UI/UX, and marketing, to ensure timely completion of deliverables in an Agile environment, reducing project timelines by 30% through efficient communication and coordination."
        ],
    },
    {
        title: "Software Engineer Intern",
        company_name: "Sriwijaya Textech Solutions",
        icon: sriwijaya,
        iconBg: "#E6DEDD",
        date: "April 2020 - August 2021",
        points: [
            "Collaborated with a team to engineer an automation solution optimizing cotton bale arrangement, minimizing manual labor by 70% and improving thread quality by over 85%.",
            "Developed a secure backend following MVC design patterns and a responsive single-page front-end, enhancing system security and user experience.",
            "Led a microservice project enabling users to generate output without metadata, resulting in a 90% boost in ease of generating results, and maintained deployment pipelines to diminish deployment issues by 80%.",
            "Modularized file report generation tasks into a framework, transitioning from monolithic to serverless functions, achieving a 20% performance improvement.",
        ],
    },
];

const testimonials = [
    {
        testimonial:
            "I had the opportunity to be João's instructor during the React module at Kenzie, João was very competent and interested, always seeking to deepen his knowledge beyond what the course charged. In addition, he always knew how to communicate very well.",
        name: "Raphael Gonçalves",
        designation: "Instructor - Full Dev",
        company: "Kenzie Academy Brazil",
        // image: rapha,
    }
];

const projects = [
    {
        name: "Cloud Infra & CI/CD",
        description:
            "Built CI/CD pipeline with integration tests, Terraform, and Packer validations using GitHub Actions. Developed Terraform code to deploy scalable infrastructures, including Auto-Scaling Groups, Load Balancers, and serverless functions via pub-sub CDN events.",
        tags: [
            {
                name: "cloud IaC",
                color: "blue-text-gradient",
            },
            {
                name: "terraform",
                color: "green-text-gradient",
            },
            {
                name: "packer",
                color: "pink-text-gradient",
            }
        ],
        image: cloud,
        source_code_link: "https://github.com/GokulaKrishnanRGK/tf-gcp-infra",
    },
    {
        name: "Codecare",
        description:
            "Led a team to develop a platform for accessing essential healthcare initiatives, with secure user registration, login, authentication, role-based access control, SSL communication, and a payment gateway for seamless donations.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "express",
                color: "green-text-gradient",
            },
            {
                name: "mongodb",
                color: "pink-text-gradient",
            },
            {
                name: "node.js",
                color: "blue-text-gradient",
            },
        ],
        image: codecare,
        source_code_link: "https://github.com/GokulaKrishnanRGK/codecare",
    },
    {
        name: "ProjDB",
        description:
            "Built a web app for university project management with Role-Based Access Control, authentication filters, Google/Microsoft single sign-on, ORM for database, internationalization, and logging via logback framework.",
        tags: [
            {
                name: "java",
                color: "blue-text-gradient",
            },
            {
                name: "spring",
                color: "green-text-gradient",
            },
            {
                name: "hibernate",
                color: "pink-text-gradient",
            },
        ],
        image: projdb,
        source_code_link: "https://github.com/GokulaKrishnanRGK/projdb",
    },
];

export {services, technologies, experiences, testimonials, projects};