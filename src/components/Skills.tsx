import React from "react";
import { Code, Server, Palette } from "lucide-react";

const skillCategories = [
  {
    title: "Design",
    icon: <Palette className="w-8 h-8 text-primary" />,
    skills: [
      "Photoshop",
      "Figma",
      "Illustrator",
      "UI/UX Design",
      "Responsive Design",
    ],
  },
  {
    title: "Front End",
    icon: <Code className="w-8 h-8 text-primary" />,
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "JSX",
      "TypeScript",
      "Tailwind CSS",
    ],
  },
  {
    title: "Back End",
    icon: <Server className="w-8 h-8 text-primary" />,
    skills: ["Node.js", "PHP", "Laravel", "Python", "MySQL"],
  },
  /*
  {
    title: "Other",
    icon: <Server className="w-8 h-8 text-primary" />,
    skills: ["Git/Github", "PhpMyAdmin", "Docker"]
  }
    */
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Headers */}
        <div className="mb-16">
          <h3 className="text-secondary font-epilogue text-base uppercase font-thin tracking-wider mb-4">
            Skills / Expertise
          </h3>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-epilogue font-bold text-secondary">
            My Technical Skills
          </h2>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-6">
                {category.icon}
                <h3 className="text-2xl font-epilogue font-bold text-primary">
                  {category.title}
                </h3>
              </div>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium hover:bg-primary hover:text-white transition-colors duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
