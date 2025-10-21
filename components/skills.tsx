"use client"

import { motion } from "framer-motion"

export default function Skills() {
  const skillsData = [
    {
      category: "Languages",
      skills: ["Java", "C", "C++", "Python", "JavaScript", "SQL"],
    },
    {
      category: "Frameworks",
      skills: ["React", "Next.js", "React Native"],
    },
    {
      category: "Technologies",
      skills: ["HTML", "CSS", "MongoDB", "Node.js"],
    },
    {
      category: "Tools",
      skills: ["Adobe Premiere Pro", "Photoshop", "Vegas Pro"],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
    hover: {
      scale: 1.05,
      backgroundColor: "var(--color-primary)",
      color: "var(--color-primary-foreground)",
      transition: { duration: 0.2 },
    },
  }

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">Skills & Expertise</h2>
            <div className="w-12 h-1 bg-primary rounded-full" />
          </motion.div>

          {/* Skills Grid */}
          <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-12" variants={containerVariants}>
            {skillsData.map((category, idx) => (
              <motion.div key={idx} variants={itemVariants} className="space-y-4">
                <h3 className="text-xl font-bold text-primary">{category.category}</h3>
                <motion.div className="flex flex-wrap gap-3" variants={containerVariants}>
                  {category.skills.map((skill, skillIdx) => (
                    <motion.div
                      key={skillIdx}
                      variants={skillVariants}
                      whileHover="hover"
                      className="px-4 py-2 bg-background border border-border rounded-lg text-sm font-medium cursor-pointer transition-all"
                    >
                      {skill}
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* English Level */}
          <motion.div variants={itemVariants} className="mt-12 p-6 bg-background rounded-xl border border-border">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-lg font-bold mb-2">Languages</h4>
                <p className="text-foreground/60">English - B1 Intermediate Level</p>
              </div>
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center m-2">
                <span className="text-2xl font-bold text-primary">B1</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-lg font-bold mb-2">Languages</h4>
                <p className="text-foreground/60">Spanish - C2 Native Level</p>
              </div>
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center m-2">
                <span className="text-2xl font-bold text-primary">C2</span>
              </div>
            </div>
          </motion.div>
          
        </motion.div>
      </div>
    </section>
  )
}
