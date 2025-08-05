import { notFound } from "next/navigation"
import { ProjectDetail } from "@/components/project-detail"

const projects = {
  pageplaza: {
    title: "PagePlaza - Marketplace for Old Books",
    description: "A modern e-commerce solution for buying and selling used books",
    longDescription: `PagePlaza is a comprehensive e-commerce platform designed specifically for the used book market. Built with Next.js and TypeScript, it provides a seamless experience for students and book lovers to trade books efficiently and securely.

The platform features secure Google authentication, integrated Razorpay payment processing, and a sophisticated product wishlist system. Users can easily browse, search, and purchase books while sellers can manage their inventory through an intuitive interface.

The application utilizes RTK Query for efficient state management and API calls, ensuring optimal performance and user experience. The responsive design works flawlessly across all devices, making it accessible to users anywhere.`,
    technologies: [
      "Next.js",
      "RTK Query",
      "Google Auth",
      "Razorpay",
      "Node.js",
      "Express",
      "MongoDB",
      "React",
      "TypeScript",
    ],
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    liveUrl: "https://pageplaza.vercel.app",
    githubUrl: "https://github.com/chiragkachhela",
    features: [
      "Secure Google authentication",
      "Integrated Razorpay payment processing",
      "Product wishlist functionality",
      "Advanced search and filtering",
      "Responsive design for all devices",
      "Real-time inventory management",
      "User-friendly seller dashboard",
      "Secure transaction processing",
    ],
  },
  brainwave: {
    title: "Brainwave - Note Taking Website",
    description: "A full-stack note-taking application with advanced features",
    longDescription: `Brainwave is a modern note-taking web application that enables users to organize their thoughts and ideas efficiently. Built with React and Node.js, it provides a comprehensive solution for personal and professional note management.

The application features secure user authentication using JWT tokens, allowing users to safely store and access their notes from anywhere. The intuitive interface includes tag-based organization, making it easy to categorize and find specific notes quickly.

With real-time CRUD operations and MongoDB cloud storage, users can create, edit, and delete notes seamlessly. The application also includes a dark mode toggle and responsive design, ensuring a comfortable user experience across all devices and lighting conditions.`,
    technologies: ["React", "Tailwind CSS", "Node.js", "Express", "MongoDB", "JWT"],
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    liveUrl: "https://brainwave-notes.vercel.app",
    githubUrl: "https://github.com/chiragkachhela",
    features: [
      "Secure JWT-based authentication",
      "Tag-based note organization",
      "Real-time CRUD operations",
      "Dark mode toggle",
      "Responsive design",
      "MongoDB cloud storage",
      "Advanced search functionality",
      "User-friendly interface",
    ],
  },
}

export function generateStaticParams() {
  return Object.keys(projects).map((id) => ({
    id,
  }))
}

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = projects[params.id as keyof typeof projects]

  if (!project) {
    notFound()
  }

  return <ProjectDetail project={project} />
}
