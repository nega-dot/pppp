import { motion } from "framer-motion";
import React from "react";
import { ModernCard } from "./ui/ModernCard";
import { FadeInText, BlurText } from "./animations/TextReveal";
import { RevealOnScroll, FloatingElement } from "./animations/ScrollAnimations";
import { TiltCard, HoverGlow } from "./animations/InteractiveElements";
import {
  HTML,
  CSS,
  Github,
  Git,
  Vite,
  TailwindCSS,
  react,
  Python,
  Javascript,
  CPP,
  C,
  Vue
} from "../constants/Constant";

const skills = [
  { name: "HTML5", img: HTML, category: "Frontend", level: 95, color: "from-orange-500 to-red-500" },
  { name: "CSS3", img: CSS, category: "Frontend", level: 90, color: "from-blue-500 to-cyan-500" },
  { name: "JavaScript", img: Javascript, category: "Frontend", level: 88, color: "from-yellow-400 to-orange-500" },
  { name: "React", img: react, category: "Frontend", level: 85, color: "from-cyan-400 to-blue-500" },
  { name: "TailwindCSS", img: TailwindCSS, category: "Frontend", level: 92, color: "from-teal-400 to-cyan-500" },
  { name: "Vue.js", img: Vue, category: "Frontend", level: 75, color: "from-green-400 to-emerald-500" },
  { name: "C++", img: CPP, category: "Programming", level: 80, color: "from-blue-600 to-purple-600" },
  { name: "C", img: C, category: "Programming", level: 78, color: "from-gray-600 to-gray-800" },
  { name: "Python", img: Python, category: "Programming", level: 82, color: "from-yellow-500 to-blue-500" },
  { name: "Vite", img: Vite, category: "Tools", level: 85, color: "from-purple-500 to-pink-500" },
  { name: "Git", img: Git, category: "Tools", level: 88, color: "from-orange-500 to-red-600" },
  { name: "GitHub", img: Github, category: "Tools", level: 90, color: "from-gray-700 to-black" }
];

const categories = ["All", "Frontend", "Programming", "Tools"];

const SkillCard = ({ skill, index }) => {
  return (
    <RevealOnScroll delay={index * 0.05} direction="up">
      <TiltCard maxTilt={8}>
        <HoverGlow>
          <ModernCard 
            variant="glass" 
            className="p-6 h-full group cursor-pointer overflow-hidden relative"
          >
            {/* Background Gradient */}
            <motion.div
              className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
              initial={false}
            />

            <div className="relative z-10">
              <FloatingElement intensity={5} duration={3}>
                <motion.div
                  className="w-20 h-20 mx-auto mb-4 relative"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-white/5 rounded-2xl backdrop-blur-sm border border-white/10" />
                  <div className="relative w-full h-full p-3">
                    <img 
                      src={skill.img} 
                      alt={skill.name}
                      className="w-full h-full object-contain filter group-hover:brightness-110 transition-all duration-300"
                      onError={(e) => {
                        e.target.src = `https://via.placeholder.com/80x80/4F46E5/FFFFFF?text=${skill.name.charAt(0)}`;
                      }}
                    />
                  </div>
                </motion.div>
              </FloatingElement>

              <motion.h3 
                className="text-lg font-bold text-center mb-2 bg-gradient-to-r from-gray-800 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent group-hover:from-blue-600 group-hover:to-cyan-600 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
              >
                {skill.name}
              </motion.h3>

              <div className="text-center mb-3">
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${skill.color} text-white shadow-sm`}>
                  {skill.category}
                </span>
              </div>

              {/* Skill Level Bar */}
              <div className="relative">
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-2">
                  <motion.div
                    className={`h-2 rounded-full bg-gradient-to-r ${skill.color} shadow-sm`}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: index * 0.1, ease: "easeOut" }}
                  />
                </div>
                <motion.div
                  className="text-center text-sm font-medium text-gray-600 dark:text-gray-400"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.5 }}
                >
                  {skill.level}%
                </motion.div>
              </div>
            </div>
          </ModernCard>
        </HoverGlow>
      </TiltCard>
    </RevealOnScroll>
  );
};

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = React.useState("All");
  
  const filteredSkills = selectedCategory === "All" 
    ? skills 
    : skills.filter(skill => skill.category === selectedCategory);

  return (
    <section className="relative p-5 mx-20 mb-10 font-['Poppins'] max-sm:p-2 max-sm:mx-5 min-h-screen">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/3 right-0 w-72 h-72 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="relative z-10">
        <div className="text-center mb-16">
          <FadeInText>
            <motion.h1 
              className="text-6xl max-sm:text-4xl font-extrabold mb-4"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <BlurText className="bg-gradient-to-r from-[#00040f] to-gray-600 dark:from-slate-200 dark:to-slate-400 bg-clip-text text-transparent">
                SKILLS
              </BlurText>
            </motion.h1>
          </FadeInText>
          
          <FadeInText delay={0.3}>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
              Technologies and tools I use to bring ideas to life
            </p>
          </FadeInText>

          {/* Category Filter */}
          <motion.div 
            className="flex justify-center gap-4 mb-12 flex-wrap"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg"
                    : "bg-white/10 dark:bg-gray-800/50 text-gray-600 dark:text-gray-400 hover:bg-white/20 dark:hover:bg-gray-700/50"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          layout
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <SkillCard skill={skill} index={index} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;