import { motion } from "framer-motion";
import {
  SiGithub,
  SiLinkedin,
  SiInstagram,
  SiTwitter,
  SiGmail,
} from "react-icons/si";
import { ModernCard } from "./ui/ModernCard";
import { FadeInText, BlurText } from "./animations/TextReveal";
import { RevealOnScroll, FloatingElement } from "./animations/ScrollAnimations";
import { TiltCard, MagneticButton, HoverGlow } from "./animations/InteractiveElements";
import { Button } from "./ui/button";
import { Download, Star, Heart, Send, MapPin, Mail, Phone } from "lucide-react";
const ProfileImage = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face";

const socialLinks = [
  {
    icon: SiGithub,
    href: "https://github.com/DhairyaMajmudar",
    label: "GitHub",
    color: "hover:text-gray-900 dark:hover:text-white",
    bgColor: "from-gray-700 to-black"
  },
  {
    icon: SiLinkedin,
    href: "https://www.linkedin.com/in/dhairya-majmudar/",
    label: "LinkedIn",
    color: "hover:text-blue-600",
    bgColor: "from-blue-600 to-blue-800"
  },
  {
    icon: SiInstagram,
    href: "https://www.instagram.com/dhairya_majmudar_1511/",
    label: "Instagram",
    color: "hover:text-pink-600",
    bgColor: "from-pink-500 to-purple-600"
  },
  {
    icon: SiTwitter,
    href: "https://twitter.com/majmudar777",
    label: "Twitter",
    color: "hover:text-blue-400",
    bgColor: "from-blue-400 to-cyan-500"
  },
  {
    icon: SiGmail,
    href: "mailto:majmudar777@gmail.com",
    label: "Email",
    color: "hover:text-red-600",
    bgColor: "from-red-500 to-red-700"
  }
];

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "majmudar777@gmail.com",
    href: "mailto:majmudar777@gmail.com"
  },
  {
    icon: MapPin,
    label: "Location",
    value: "IIIT Kota, Rajasthan",
    href: "#"
  },
  {
    icon: Phone,
    label: "Available",
    value: "Mon - Fri, 9AM - 6PM",
    href: "#"
  }
];

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative dark:bg-[#111827] p-5 mt-[5rem] font-['Poppins'] max-sm:p-2 min-h-screen"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/3 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <FadeInText>
            <motion.h1 
              className="text-6xl max-sm:text-4xl font-extrabold mb-4"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <BlurText className="bg-gradient-to-r from-[#00040f] to-gray-600 dark:from-slate-200 dark:to-slate-400 bg-clip-text text-transparent">
                GET IN TOUCH
              </BlurText>
            </motion.h1>
          </FadeInText>
          
          <FadeInText delay={0.3}>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Let's collaborate and build something amazing together
            </p>
          </FadeInText>
        </div>

        {/* Main Contact Card */}
        <RevealOnScroll direction="up" className="max-w-6xl mx-auto">
          <TiltCard maxTilt={2}>
            <ModernCard 
              variant="glass" 
              className="overflow-hidden"
              glow={true}
            >
              <div className="flex max-lg:flex-col-reverse">
                {/* Contact Information */}
                <div className="flex-1 p-8 max-sm:p-6">
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                  >
                    <h2 className="text-3xl font-bold text-[#00040f] dark:text-slate-300 mb-2">
                      Abhinav
                    </h2>
                    
                    <p className="text-gray-600 dark:text-slate-400 text-lg leading-relaxed mb-8 max-w-md">
                      Google DSC Web Dev Lead | GSSoC'23 | Technical Team Lead - IIITians Network | IIIT Kota'26
                    </p>

                    {/* Contact Info Cards */}
                    <div className="space-y-4 mb-8">
                      {contactInfo.map((info, index) => (
                        <motion.div
                          key={info.label}
                          className="flex items-center gap-4 p-4 rounded-xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-white/20 dark:border-gray-700/30 hover:bg-white/70 dark:hover:bg-gray-700/50 transition-all duration-300 cursor-pointer"
                          whileHover={{ scale: 1.02, x: 5 }}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3 + index * 0.1 }}
                          onClick={() => info.href !== "#" && window.open(info.href)}
                        >
                          <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg">
                            <info.icon className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <p className="font-medium text-gray-800 dark:text-gray-200">{info.label}</p>
                            <p className="text-gray-600 dark:text-gray-400 text-sm">{info.value}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    {/* Social Links */}
                    <motion.div
                      className="mb-8"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.6 }}
                    >
                      <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">
                        Connect with me
                      </h3>
                      <div className="flex gap-4 flex-wrap">
                        {socialLinks.map((social, index) => (
                          <MagneticButton key={social.label}>
                            <motion.a
                              href={social.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="group relative w-12 h-12 rounded-xl bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                              whileHover={{ scale: 1.1, rotate: 5 }}
                              whileTap={{ scale: 0.95 }}
                              initial={{ opacity: 0, scale: 0 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              viewport={{ once: true }}
                              transition={{ delay: 0.7 + index * 0.1, type: "spring", stiffness: 200 }}
                            >
                              <div className={`absolute inset-0 bg-gradient-to-r ${social.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                              <social.icon className="w-6 h-6 text-gray-600 dark:text-gray-400 group-hover:text-white transition-colors duration-300 relative z-10" />
                            </motion.a>
                          </MagneticButton>
                        ))}
                      </div>
                    </motion.div>

                    {/* Action Buttons */}
                    <motion.div
                      className="flex gap-4 max-sm:flex-col"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.8 }}
                    >
                      <MagneticButton className="flex-1">
                        <Button 
                          className="w-full group bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                          size="lg"
                        >
                          <Download className="w-5 h-5 mr-2 group-hover:translate-y-1 transition-transform" />
                          Resume
                        </Button>
                      </MagneticButton>
                      
                      <MagneticButton className="flex-1">
                        <Button 
                          variant="outline"
                          className="w-full group border-2 border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white shadow-lg hover:shadow-xl transition-all duration-300"
                          size="lg"
                          onClick={() => window.open("https://github.com/DhairyaMajmudar/Personal-Portfolio", "_blank")}
                        >
                          <Star className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                          Star Project
                        </Button>
                      </MagneticButton>
                    </motion.div>
                  </motion.div>
                </div>

                {/* Profile Image Section */}
                <div className="flex-1 flex items-center justify-center p-8 max-sm:p-6">
                  <motion.div
                    className="relative"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, type: "spring", stiffness: 100 }}
                  >
                    <FloatingElement intensity={10} duration={4}>
                      <HoverGlow>
                        <motion.div
                          className="relative"
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.3 }}
                        >
                          {/* Animated Border */}
                          <motion.div
                            className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 p-1"
                            animate={{
                              rotate: [0, 360],
                            }}
                            transition={{
                              duration: 8,
                              repeat: Infinity,
                              ease: "linear"
                            }}
                          >
                            <div className="w-full h-full rounded-full bg-white dark:bg-gray-900" />
                          </motion.div>

                          {/* Profile Image */}
                          <img
                            src={ProfileImage}
                            alt="Abhinav"
                            className="relative z-10 w-64 h-64 max-sm:w-48 max-sm:h-48 rounded-full object-cover shadow-2xl"
                            onError={(e) => {
                              e.target.src = "https://via.placeholder.com/256x256/4F46E5/FFFFFF?text=A";
                            }}
                          />

                          {/* Floating Elements */}
                          <motion.div
                            className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full shadow-lg flex items-center justify-center"
                            animate={{
                              y: [0, -10, 0],
                              scale: [1, 1.2, 1],
                            }}
                            transition={{
                              duration: 3,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }}
                          >
                            <Heart className="w-4 h-4 text-white" />
                          </motion.div>

                          <motion.div
                            className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full shadow-lg flex items-center justify-center"
                            animate={{
                              rotate: [0, 360],
                              scale: [1, 1.3, 1],
                            }}
                            transition={{
                              duration: 4,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }}
                          >
                            <Send className="w-3 h-3 text-white" />
                          </motion.div>
                        </motion.div>
                      </HoverGlow>
                    </FloatingElement>
                  </motion.div>
                </div>
              </div>
            </ModernCard>
          </TiltCard>
        </RevealOnScroll>

        {/* Footer */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1 }}
        >
          <p className="text-[#00040f] dark:text-slate-300 text-center capitalize tracking-widest max-sm:text-sm p-2 flex items-center justify-center gap-2">
            made with 
            <motion.span
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              💙
            </motion.span>
            by Abhinav
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;