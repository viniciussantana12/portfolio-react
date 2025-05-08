import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Frontend
  { name: "HTML/CSS", category: "frontend", level: 100  },
  { name: "JavaScript", category: "frontend", level: 100  },
  { name: "React", category: "frontend", level: 100  },
  { name: "TypeScript", category: "frontend", level: 100  },
  //{ name: "Tailwind CSS", level: 90, category: "frontend" },
  //{ name: "Next.js", level: 80, category: "frontend" },

  // Backend
  { name: "Node.js", category: "backend", level: 100  },
  { name: "Express", category: "backend", level: 100 },
  //{ name: "MongoDB", level: 70, category: "backend" },
  { name: "PostgreSQL", category: "backend", level: 100  },
  //{ name: "GraphQL", level: 60, category: "backend" },

  // Tools
  { name: "Git/GitHub", category: "tools", level: 100  },
  //{ name: "Docker", level: 70, category: "tools" },
  //{ name: "Figma", level: 85, category: "tools" },
  { name: "VS Code", category: "tools", level: 100  },
];

const categories = ["all", "frontend", "backend", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Minhas <span className="text-primary"> Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-forefround hover:bd-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg"> {skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: skill.level + "%" }}
                />
              </div>

              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};