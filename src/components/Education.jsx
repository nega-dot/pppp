import { motion } from "framer-motion";
import Lottie from "lottie-react";
import education from "../assets/lottie/education.json";
const IIIT_KOTA = "https://via.placeholder.com/150x150/4F46E5/FFFFFF?text=IIIT";
import { ModernCard } from "./ui/ModernCard";
import { FadeInText, BlurText } from "./animations/TextReveal";
import { RevealOnScroll, FloatingElement, ParallaxContainer } from "./animations/ScrollAnimations";
import { TiltCard } from "./animations/InteractiveElements";
import { Calendar, MapPin, GraduationCap, Award } from "lucide-react";

const Education = () => {
  return (
    <section
      id="education"
      className="relative p-5 mx-20 mb-10 min-h-screen font-['Poppins'] max-sm:p-2 max-sm:mx-5"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/3 right-1/4 w-80 h-80 bg-gradient-to-r from-amber-400/10 to-orange-400/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 90, 180, 270, 360],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="WRAPPER mt-10 relative z-10">
        <div className="text-center mb-16">
          <FadeInText>
            <motion.h1 
              className="text-6xl max-sm:text-4xl font-extrabold mb-4"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <BlurText className="bg-gradient-to-r from-[#00040f] to-gray-600 dark:from-slate-200 dark:to-slate-400 bg-clip-text text-transparent">
                EDUCATION
              </BlurText>
            </motion.h1>
          </FadeInText>
          
          <FadeInText delay={0.3}>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              My academic journey and continuous learning path
            </p>
          </FadeInText>
        </div>

        <div className="flex gap-12 justify-between flex-row-reverse max-lg:flex-col items-center">
          {/* Education Content */}
          <RevealOnScroll direction="left" className="flex-1 max-w-2xl">
            <TiltCard maxTilt={3}>
              <ModernCard 
                variant="glass" 
                className="p-8 max-sm:p-6"
                glow={true}
              >
                {/* Institution Header */}
                <motion.div 
                  className="flex items-start gap-6 mb-8"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <motion.div
                    className="relative"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-white/20 to-white/5 p-3 backdrop-blur-sm border border-white/10 shadow-lg">
                      <img
                        src={IIIT_KOTA}
                        alt="IIIT KOTA"
                        className="w-full h-full object-contain rounded-xl"
                      />
                    </div>
                    <motion.div
                      className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full shadow-lg flex items-center justify-center"
                      animate={{
                        scale: [1, 1.2, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      <GraduationCap className="w-3 h-3 text-white" />
                    </motion.div>
                  </motion.div>

                  <div className="flex-1">
                    <motion.h2 
                      className="text-2xl max-sm:text-xl font-bold bg-gradient-to-r from-amber-600 via-orange-600 to-yellow-600 dark:from-amber-400 dark:via-orange-400 dark:to-yellow-400 bg-clip-text text-transparent leading-tight mb-2"
                      whileHover={{ scale: 1.02 }}
                    >
                      Indian Institute Of Information Technology Kota
                    </motion.h2>
                    
                    <div className="flex items-center gap-2 mb-2">
                      <Award className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                      <span className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                        Bachelor of Technology
                      </span>
                    </div>
                  </div>
                </motion.div>

                {/* Education Details */}
                <motion.div 
                  className="space-y-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  {/* Duration */}
                  <div className="flex items-center gap-3 p-4 rounded-xl bg-gradient-to-r from-blue-50/50 to-cyan-50/50 dark:from-blue-900/20 dark:to-cyan-900/20 border border-blue-200/30 dark:border-blue-700/30">
                    <Calendar className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    <div>
                      <p className="font-medium text-gray-800 dark:text-gray-200">Duration</p>
                      <p className="text-gray-600 dark:text-gray-400">November 2022 - May 2026</p>
                    </div>
                  </div>

                  {/* Specialization */}
                  <div className="flex items-center gap-3 p-4 rounded-xl bg-gradient-to-r from-purple-50/50 to-pink-50/50 dark:from-purple-900/20 dark:to-pink-900/20 border border-purple-200/30 dark:border-purple-700/30">
                    <GraduationCap className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                    <div>
                      <p className="font-medium text-gray-800 dark:text-gray-200">Specialization</p>
                      <p className="text-gray-600 dark:text-gray-400">Electronics and Communication Engineering</p>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-center gap-3 p-4 rounded-xl bg-gradient-to-r from-green-50/50 to-emerald-50/50 dark:from-green-900/20 dark:to-emerald-900/20 border border-green-200/30 dark:border-green-700/30">
                    <MapPin className="w-5 h-5 text-green-600 dark:text-green-400" />
                    <div>
                      <p className="font-medium text-gray-800 dark:text-gray-200">Location</p>
                      <p className="text-gray-600 dark:text-gray-400">Kota, Rajasthan, India</p>
                    </div>
                  </div>

                  {/* Achievements */}
                  <motion.div 
                    className="p-4 rounded-xl bg-gradient-to-r from-yellow-50/50 to-amber-50/50 dark:from-yellow-900/20 dark:to-amber-900/20 border border-yellow-200/30 dark:border-yellow-700/30"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex items-start gap-3">
                      <Award className="w-5 h-5 text-yellow-600 dark:text-yellow-400 mt-1" />
                      <div>
                        <p className="font-medium text-gray-800 dark:text-gray-200 mb-2">Key Achievements</p>
                        <ul className="text-gray-600 dark:text-gray-400 space-y-1 text-sm">
                          <li>• Google DSC Web Development Lead</li>
                          <li>• Technical Team Lead - IIITians Network</li>
                          <li>• Active contributor to open source projects</li>
                          <li>• Hackathon organizer and participant</li>
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </ModernCard>
            </TiltCard>
          </RevealOnScroll>

          {/* Animated Illustration */}
          <RevealOnScroll direction="right" className="flex-1 flex justify-center">
            <ParallaxContainer speed={0.2}>
              <FloatingElement intensity={20} duration={5}>
                <motion.div
                  className="relative max-w-[500px]"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-400/20 to-orange-400/20 rounded-2xl blur-2xl" />
                  
                  {/* Main Animation Container */}
                  <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl border border-white/20 dark:border-gray-700/30 shadow-2xl overflow-hidden">
                    <Lottie
                      animationData={education}
                      loop={true}
                      className="w-full h-full"
                    />
                  </div>

                  {/* Floating Elements */}
                  <motion.div
                    className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full shadow-lg flex items-center justify-center"
                    animate={{
                      y: [0, -10, 0],
                      rotate: [0, 180, 360],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <GraduationCap className="w-4 h-4 text-white" />
                  </motion.div>

                  <motion.div
                    className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full shadow-lg"
                    animate={{
                      scale: [1, 1.3, 1],
                      rotate: [360, 180, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </motion.div>
              </FloatingElement>
            </ParallaxContainer>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
};

export default Education;