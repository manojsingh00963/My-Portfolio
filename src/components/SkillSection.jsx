import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb, SiExpress } from "react-icons/si";
import {
  FaNodeJs,
  FaHtml5,
  FaCss3,
  FaJsSquare,
  FaPython,
} from "react-icons/fa";
import { motion } from "framer-motion";

/* Floating animation */
const floatVariant = (delay = 0) => ({
  initial: { y: 0 },
  animate: {
    y: [-8, 8],
    transition: {
      duration: 2.5,
      delay,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

/* Skill Card */
const SkillCard = ({ icon, label, darkMode, delay }) => (
  <motion.div
    variants={floatVariant(delay)}
    initial="initial"
    animate="animate"
    whileHover={{ scale: 1.15 }}
    className="flex flex-col items-center"
  >
    <div
      className={`w-14 h-14 flex items-center justify-center rounded-full border backdrop-blur-md
      ${
        darkMode
          ? "border-slate-500 bg-slate-800/60 shadow-lg shadow-cyan-500/20"
          : "border-neutral-400 bg-white/70 shadow-md"
      }`}
    >
      <span className="text-2xl">{icon}</span>
    </div>
    <p
      className={`mt-3 text-sm text-center ${
        darkMode ? "text-slate-300" : "text-neutral-700"
      }`}
    >
      {label}
    </p>
  </motion.div>
);

/* Section Wrapper */
const SkillGroup = ({ title, skills, darkMode }) => (
  <div className="mb-20">
    <h3
      className={`text-2xl font-semibold text-center mb-10 ${
        darkMode ? "text-slate-200" : "text-neutral-800"
      }`}
    >
      {title}
    </h3>

    <div className="flex flex-wrap justify-center gap-8">
      {skills.map((skill, index) => (
        <SkillCard
          key={index}
          icon={skill.icon}
          label={skill.label}
          darkMode={darkMode}
          delay={index * 0.15}
        />
      ))}
    </div>
  </div>
);

function SkillSection({ darkMode }) {
  /* ===== SKILL DATA ===== */

  const languages = [
    { icon: <FaHtml5 className="text-orange-600" />, label: "HTML5" },
    { icon: <FaCss3 className="text-blue-600" />, label: "CSS3" },
    { icon: <FaJsSquare className="text-yellow-500" />, label: "JavaScript" },
    { icon: <FaPython className="text-blue-500" />, label: "Python" },
  ];

  const frameworks = [
    { icon: <RiReactjsLine className="text-cyan-400" />, label: "React" },
    {
      icon: (
        <TbBrandNextjs
          className={darkMode ? "text-slate-200" : "text-neutral-800"}
        />
      ),
      label: "Next.js",
    },
    { icon: <FaNodeJs className="text-green-600" />, label: "Node.js" },
    {
      icon: (
        <SiExpress
          className={darkMode ? "text-slate-200" : "text-neutral-800"}
        />
      ),
      label: "Express.js",
    },
    { icon: <SiMongodb className="text-green-400" />, label: "MongoDB" },
  ];

  const intelligentSystems = [
    {
      icon: <FaPython className="text-indigo-500" />,
      label: "Machine Learning (Basics)",
    },
    {
      icon: <FaPython className="text-purple-500" />,
      label: "Natural Language Processing",
    },
    {
      icon: <FaPython className="text-rose-500" />,
      label: "Data Analysis (Pandas / NumPy)",
    },
    {
      icon: <FaPython className="text-sky-500" />,
      label: "Flask (AI APIs)",
    },
    {
      icon: <FaJsSquare className="text-pink-500" />,
      label: "AI Integration (OpenAI APIs)",
    },
  ];

  return (
    <section
      id="skills"
      className={`w-full px-4 lg:px-20 py-20 border-y ${
        darkMode ? "border-slate-600" : "border-neutral-300"
      }`}
    >
      {/* Main Title */}
      <motion.h2
        initial={{ opacity: 0, y: -80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className={`text-center text-4xl font-semibold mb-24 ${
          darkMode ? "text-slate-200" : "text-neutral-800"
        }`}
      >
        Skills & Expertise
      </motion.h2>

      <SkillGroup
        title="Programming Languages"
        skills={languages}
        darkMode={darkMode}
      />

      <SkillGroup
        title="Frameworks & Technologies"
        skills={frameworks}
        darkMode={darkMode}
      />

      <SkillGroup
        title="Intelligent Systems & AI"
        skills={intelligentSystems}
        darkMode={darkMode}
      />
    </section>
  );
}

export default SkillSection;
