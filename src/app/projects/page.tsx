"use client";

import { Filter, Search } from "lucide-react";
import { useState } from "react";

const categories = ["All", "Full Stack", "Frontend", "Mobile", "AI/ML"];
const projects = [
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
];
const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-6xl mx-auto text-center space-y-5">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
            My{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Projects
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A collection of projects that showcase my skills and passion for
            creating innovative solutions that solve real-world problems.
          </p>
          {/* search and filter  */}
          <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
            {/* search  */}
            {/* <div className="flex items-center gap-2 px-4 py-1 border rounded-xl border-gray-300">
              <Search className=" text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search projects..."
                className="w-full p-2 outline-none focus:ring-2 focus:ring-blue-500 rounded-md"
              />
            </div> */}
            <div className="flex items-center gap-2 px-4 border rounded-lg border-gray-300 focus-within:ring-2 focus-within:ring-blue-500">
              <Search className="text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search projects..."
                className="w-full p-2 outline-none"
              />
            </div>

            {/* filter */}
            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-gray-600" />
              <div className="flex gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                      selectedCategory === category
                        ? "bg-blue-600 text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
