export const projectCategories = [
  "All",
  "Full Stack",
  "Frontend",
  "Mobile",
  "AI/ML",
];
export const projects = [
  {
    id: 1,
    title: "blogg",
    description: "A full-stack blogging platform.",
    image:
      "https://images.pexels.com/photos/261662/pexels-photo-261662.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: [
      "React.js",
      "TypeScript",
      "Hono",
      "PostgreSQL",
      "Tailwind CSS",
      "Prisma",
      "Cloudflare worker",
    ],
    category: "Full Stack",
    liveUrl: "https://blogg-cyan-mu.vercel.app",
    githubUrl: "https://github.com/manish01101/blogg",
    featured: true,
    year: "March 2025",
  },
  {
    id: 2,
    title: "Game Store",
    description:
      "A responsive game discovery platform built with React, TypeScript, and Chakra UI. Features dark theme UI, genre filtering, platform selection, and sorting. Powered by a third-party REST API for dynamic game data.",
    image:
      "https://images.pexels.com/photos/261662/pexels-photo-261662.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["React.js", "TypeScript", "Chakra UI", "REST API"],
    category: "Frontend",
    liveUrl: "https://gamestore-lake.vercel.app",
    githubUrl: "https://github.com/manish01101/game-store",
    featured: false,
    year: "July 2024",
  },
];
