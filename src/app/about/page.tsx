import { Code } from "lucide-react";
import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <div className="bg-white min-h-screen">
      <section className="min-h-screen pt-24 pb-16 px-10 bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          About{" "}
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Me
          </span>
        </h1>
        <div className="grid lg:grid-cols-3 gap-12 items-center justify-center">
          {/* content  */}
          <div className="lg:col-span-2 ">
            <div className="text-lg text-gray-600 space-y-5">
              <p>
                I&apos;m Manish Kumar, a Full-Stack Developer passionate about
                building modern, beautiful, and functional web applications that
                solve real-world problems and deliver exceptional user
                experiences.
              </p>
              <p>
                With a strong foundation in frontend technologies like React,
                Next.js, TypeScript, HTML, CSS, and JavaScript, I enjoy crafting
                intuitive and responsive user interfaces. On the backend, I work
                with Express, Node.js, SQL, and Prisma to build scalable and
                efficient systems.
              </p>
              <p>
                Beyond web development, I have experience with C, C++, Python,
                and Machine Learning, enabling me to tackle a wide range of
                technical challenges. I&apos;m also well-versed in DevOps tools
                and cloud platforms such as Git, Docker, Kubernetes, AWS, and
                Cloudflare, ensuring smooth deployments and reliable
                performance.
              </p>
              <p>
                I&apos;m always eager to learn, experiment, and
                collaborate—whether it&apos;s designing a sleek UI, optimizing a
                backend API, or setting up robust CI/CD pipelines. My goal is
                simple: turn ideas into impactful digital experiences.
              </p>
            </div>
            <div className="py-10 flex justify-center items-center gap-5">
              <Link
                href="/projects"
                className="inline-block bg-blue-600 px-6 py-4 rounded-lg text-white text-md font-medium transition-all duration-300 transform hover:bg-blue-700 hover:scale-103"
              >
                View My Work
              </Link>
              <Link
                href="/contact"
                className="inline-block bg-white px-6 py-4 rounded-lg text-black text-md font-medium transition-all duration-300 transform hover:bg-blue-700 hover:text-white border hover:scale-103"
              >
                Let&apos;s Connect
              </Link>
            </div>
          </div>
          {/* floating logo */}

          <div className="lg:col-span-1 flex flex-col items-center justify-center ">
            <div className="w-60 h-60 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white text-5xl font-bold shadow-2xl ring-8 ring-white ">
              Manish
            </div>
            <div className="relative top-10 left-20 w-16 h-16 bg-blue-200 rounded-full flex items-center justify-center animate-bounce [animation-duration:3s]  ">
              <Code className="w-8 h-8 text-blue-600 " />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
