"use client";

import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiC,
  SiCplusplus,
  SiPython,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiPrisma,
  SiGit,
  SiDocker,
  SiKubernetes,
  SiGithubactions,
  SiCloudflare,
  SiPostman,
  SiJest,
  SiVitest,
  SiCypress,
  SiTensorflow,
} from "react-icons/si";

import { FaAws, FaJava } from "react-icons/fa";

export default function SkillsTech2() {
  const categories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "HTML", icon: <SiHtml5 className="text-orange-500" /> },
        { name: "CSS", icon: <SiCss3 className="text-blue-500" /> },
        {
          name: "JavaScript",
          icon: <SiJavascript className="text-yellow-400" />,
        },
        {
          name: "TypeScript",
          icon: <SiTypescript className="text-blue-600" />,
        },
        { name: "React", icon: <SiReact className="text-cyan-400" /> },
        {
          name: "Next.js",
          icon: <SiNextdotjs className="text-black " />,
        },
      ],
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", icon: <SiNodedotjs className="text-green-600" /> },
        {
          name: "Express.js",
          icon: <SiExpress className="text-gray-800 " />,
        },
      ],
    },
    {
      title: "Databases",
      skills: [
        {
          name: "PostgreSQL",
          icon: <SiPostgresql className="text-blue-600" />,
        },
        { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
        { name: "Prisma", icon: <SiPrisma className="text-indigo-600" /> },
      ],
    },
    {
      title: "Programming Languages",
      skills: [
        { name: "C", icon: <SiC className="text-blue-600" /> },
        { name: "C++", icon: <SiCplusplus className="text-indigo-500" /> },
        { name: "Python", icon: <SiPython className="text-yellow-500" /> },
        { name: "Java", icon: <FaJava className="text-yellow-600" /> },
      ],
    },
    {
      title: "DevOps & Cloud",
      skills: [
        { name: "Docker", icon: <SiDocker className="text-blue-500" /> },
        {
          name: "Kubernetes",
          icon: <SiKubernetes className="text-blue-400" />,
        },
        { name: "AWS", icon: <FaAws className="text-orange-400" /> },
        {
          name: "Cloudflare",
          icon: <SiCloudflare className="text-yellow-500" />,
        },
        {
          name: "CI/CD",
          icon: <SiGithubactions className="text-yellow-500" />,
        },
      ],
    },
    {
      title: "APIs & Tools",
      skills: [
        { name: "Git", icon: <SiGit className="text-red-500" /> },
        { name: "Postman", icon: <SiPostman className="text-orange-500" /> },
      ],
    },
    {
      title: "Testing Library",
      skills: [
        { name: "Jest", icon: <SiJest className="text-red-800" /> },
        { name: "Vitest", icon: <SiVitest className="text-orange-500" /> },
        { name: "Cypress", icon: <SiCypress className="text-green-700" /> },
      ],
    },
    {
      title: "Machine Learning & AI",
      skills: [
        {
          name: "Machine Learning",
          icon: <SiTensorflow className="text-orange-400" />,
        },
      ],
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {categories.map((category) => (
          <div
            key={category.title}
            className="p-6 rounded-2xl shadow-md bg-white/70  backdrop-blur-sm border border-gray-200 0"
          >
            <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex flex-col items-center p-3 rounded-lg hover:bg-gray-100  transition"
                >
                  <div className="text-3xl mb-2">{skill.icon}</div>
                  <p className="text-sm font-medium">{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// "use client";

// import {
//   Code,
//   Braces,
//   Database,
//   Server,
//   Cloud,
//   Cpu,
//   GitBranch,
//   Boxes,
//   Network,
//   TestTube2,
//   Layers,
// } from "lucide-react";

// export default function SkillsTech() {
//   const categories = [
//     {
//       title: "Frontend Development",
//       skills: [
//         { name: "HTML", icon: <Code className="w-6 h-6 text-orange-500" /> },
//         { name: "CSS", icon: <Code className="w-6 h-6 text-blue-500" /> },
//         { name: "JavaScript", icon: <Braces className="w-6 h-6 text-yellow-500" /> },
//         { name: "TypeScript", icon: <Braces className="w-6 h-6 text-blue-600" /> },
//         { name: "React", icon: <Layers className="w-6 h-6 text-cyan-500" /> },
//         { name: "Next.js", icon: <Layers className="w-6 h-6 text-gray-900 " /> },
//       ],
//     },
//     {
//       title: "Backend Development",
//       skills: [
//         { name: "Node.js", icon: <Server className="w-6 h-6 text-green-600" /> },
//         { name: "Express.js", icon: <Server className="w-6 h-6 text-gray-700 " /> },
//         { name: "SQL", icon: <Database className="w-6 h-6 text-blue-600" /> },
//         { name: "Prisma", icon: <Database className="w-6 h-6 text-indigo-500" /> },
//       ],
//     },
//     {
//       title: "Programming Languages",
//       skills: [
//         { name: "C", icon: <Cpu className="w-6 h-6 text-blue-600" /> },
//         { name: "C++", icon: <Cpu className="w-6 h-6 text-indigo-500" /> },
//         { name: "Python", icon: <Cpu className="w-6 h-6 text-yellow-500" /> },
//       ],
//     },
//     {
//       title: "DevOps & Cloud",
//       skills: [
//         { name: "Git", icon: <GitBranch className="w-6 h-6 text-red-500" /> },
//         { name: "Docker", icon: <Boxes className="w-6 h-6 text-blue-500" /> },
//         { name: "Kubernetes", icon: <Network className="w-6 h-6 text-blue-400" /> },
//         { name: "AWS", icon: <Cloud className="w-6 h-6 text-orange-400" /> },
//         { name: "Cloudflare", icon: <Cloud className="w-6 h-6 text-yellow-500" /> },
//       ],
//     },
//     {
//       title: "APIs & Tools",
//       skills: [
//         { name: "Postman", icon: <TestTube2 className="w-6 h-6 text-orange-500" /> },
//       ],
//     },
//     {
//       title: "Machine Learning & AI",
//       skills: [
//         { name: "Machine Learning", icon: <Cpu className="w-6 h-6 text-orange-400" /> },
//         { name: "Python (ML)", icon: <Cpu className="w-6 h-6 text-yellow-500" /> },
//       ],
//     },
//   ];

//   return (
//     <section className="max-w-6xl mx-auto px-6 py-16">
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
//         {categories.map((category) => (
//           <div
//             key={category.title}
//             className="p-6 rounded-2xl shadow-md bg-white/70  backdrop-blur-sm border border-gray-200 "
//           >
//             <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
//             <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
//               {category.skills.map((skill) => (
//                 <div
//                   key={skill.name}
//                   className="flex flex-col items-center p-3 rounded-lg hover:bg-gray-100 transition"
//                 >
//                   {skill.icon}
//                   <p className="text-sm font-medium mt-2">{skill.name}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }
