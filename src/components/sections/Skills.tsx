import React from "react";
import SkillsTech from "./SkillsTech";

const Skills = () => {
  return (
    <section className="text-center py-20 bg-gray-50">
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
        Skills & Expertise
      </h2>
      <p className="text-xl text-gray-600 max-w-2xl mx-auto">
        I specialize in modern web technologies and love bringing ideas to life through code.
      </p>
      <SkillsTech />
    </section>
  );
};

export default Skills;
