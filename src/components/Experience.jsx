import { motion } from "framer-motion";
import { ModernCard } from "./ui/ModernCard";
import { FadeInText, BlurText } from "./animations/TextReveal";
import { RevealOnScroll } from "./animations/ScrollAnimations";
import { TiltCard } from "./animations/InteractiveElements";
import { Calendar, MapPin, ExternalLink } from "lucide-react";
import IIIT_KOTA from "../assets/IIIT_Kota.png";
import {
  Hackthechain,
  GSSOC,
  IITB,
  Sports,
  IIITians,
  GDSC,
  KDE,
  Oppia,
} from "../constants/Constant";

const experiences = [
  {
    img: Oppia,
    title: "Oppia Foundation",
    subtitle: "LAcE Team Member",
    date: "November 2023 - present",
    para: "Worked collaboratively with developers from Russia and United States to remove bugs, improving user experience.",
    location: "Remote",
    type: "Open Source"
  },
  {
    img: KDE,
    title: "Season of KDE'24",
    subtitle: "Mentee",
    date: "January 2024 - present",
    para: "SoK'24 mentee for the cantor project converting documentation for several programming languages into QT Help files.",
    location: "Remote",
    type: "Mentorship"
  },
  {
    img: GDSC,
    title: "GDSC IIIT Kota",
    subtitle: "Web Development Lead",
    date: "August 2023 - present",
    para: "Leading web development initiatives and mentoring students in modern web technologies.",
    location: "IIIT Kota",
    type: "Leadership"
  },
  {
    img: IIIT_KOTA,
    title: "Webteam Trainee, IIIT Kota",
    subtitle: "Trainee",
    date: "August 2023 - present",
    para: "Maintaining and developing the official website of IIIT Kota with modern technologies.",
    location: "IIIT Kota",
    type: "Development"
  },
  {
    img: IIITians,
    title: "IIITians Network",
    subtitle: "Tech Team Lead",
    date: "April 2023 - present",
    para: "Worked collaboratively within a team to develop a captivating college social network website.",
    location: "Remote",
    type: "Leadership"
  },
  {
    img: Sports,
    title: "Sports Council, IIIT Kota",
    subtitle: "Technical Team",
    date: "June 2023 - present",
    para: "Developed a comprehensive college sports website with event management features.",
    location: "IIIT Kota",
    type: "Development"
  },
  {
    img: GSSOC,
    title: "GSSoC'23 Contributor",
    subtitle: "Contributor",
    date: "June 2023 - August 2023",
    para: "Contributed to open source repositories like GameSphere, OpenTech, Moksh, Community Website etc.",
    location: "Remote",
    type: "Open Source"
  },
  {
    img: Hackthechain,
    title: "Hack The Chain Hackathon",
    subtitle: "Organizing Team",
    date: "March 2023",
    para: "Helped organize the first hybrid Hackathon of IIIT Kota by GDSC IIITK and Codebase Club.",
    location: "IIIT Kota",
    type: "Event"
  },
  {
    img: IITB,
    title: "IIT Bombay Techfest 2016",
    subtitle: "Junior Participant",
    date: "December 2016",
    para: "Created a solar energy based three-in-one project including Mobile Charger, Mini Fan and Mini Centrifuge.",
    location: "IIT Bombay",
    type: "Competition"
  }
];

const typeColors = {
  "Open Source": "from-green-500 to-emerald-500",
  "Mentorship": "from-purple-500 to-violet-500",
  "Leadership": "from-blue-500 to-cyan-500",
  "Development": "from-orange-500 to-red-500",
  "Event": "from-pink-500 to-rose-500",
  "Competition": "from-yellow-500 to-amber-500"
};

const ExperienceCard = ({ experience, index }) => {
  return (
    <RevealOnScroll delay={index * 0.1} direction="up">
      <TiltCard className="h-full">
        <ModernCard 
          variant="glass" 
          className="h-full p-6 hover:shadow-2xl transition-all duration-500 group"
          glow={true}
        >
          <div className="flex items-start gap-4 mb-4">
            <motion.div
              className="relative"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-white/20 to-white/5 p-3 backdrop-blur-sm border border-white/10">
                <img 
                  src={experience.img} 
                  alt={experience.title}
                  className="w-full h-full object-contain rounded-full"
                />
              </div>
              <motion.div
                className={`absolute -top-1 -right-1 w-4 h-4 rounded-full bg-gradient-to-r ${typeColors[experience.type]} shadow-lg`}
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>

            <div className="flex-1 min-w-0">
              <motion.h3 
                className="text-xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-cyan-400 dark:to-blue-400 bg-clip-text text-transparent mb-1 group-hover:from-purple-600 group-hover:to-pink-600 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
              >
                {experience.title}
              </motion.h3>
              
              <p className="text-gray-700 dark:text-gray-300 font-medium mb-2">
                {experience.subtitle}
              </p>

              <div className="flex flex-wrap gap-2 mb-3">
                <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${typeColors[experience.type]} text-white shadow-sm`}>
                  {experience.type}
                </span>
              </div>

              <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-3">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>{experience.date}</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  <span>{experience.location}</span>
                </div>
              </div>
            </div>
          </div>

          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            {experience.para}
          </p>

          <motion.div
            className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            whileHover={{ x: 5 }}
          >
            <div className="flex items-center text-blue-600 dark:text-blue-400 text-sm font-medium">
              <span>Learn more</span>
              <ExternalLink className="w-4 h-4 ml-1" />
            </div>
          </motion.div>
        </ModernCard>
      </TiltCard>
    </RevealOnScroll>
  );
};

const Experience = () => {
  return (
    <section
      id="experience"
      className="relative p-5 mx-20 mb-10 font-medium font-['Poppins'] max-sm:p-2 max-sm:mx-5 min-h-screen"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-0 w-64 h-64 bg-gradient-to-r from-blue-400/5 to-cyan-400/5 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="WRAPPER mt-12 relative z-10">
        <div className="text-center mb-16">
          <FadeInText>
            <motion.h1 
              className="text-6xl max-sm:text-4xl font-extrabold mb-4"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <BlurText className="bg-gradient-to-r from-[#00040f] to-gray-600 dark:from-slate-200 dark:to-slate-400 bg-clip-text text-transparent">
                EXPERIENCE
              </BlurText>
            </motion.h1>
          </FadeInText>
          
          <FadeInText delay={0.3}>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              My journey through various roles, contributions, and achievements in the tech world
            </p>
          </FadeInText>
        </div>

        <motion.div
          className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, staggerChildren: 0.1 }}
        >
          {experiences.map((experience, index) => (
            <ExperienceCard 
              key={index} 
              experience={experience} 
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;