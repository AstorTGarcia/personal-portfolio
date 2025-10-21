"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Elemental Adventure",
      description:
        "A plataform game developed in Java using the LibGDX framework. It features elemental-themed levels, unique character abilities.",
      year: "2024",
      tags: ["Java","LibGdx"],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
    hover: {
      y: -8,
      transition: { duration: 0.3 },
    },
  }

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">Featured Projects</h2>
            <div className="w-12 h-1 bg-primary rounded-full" />
          </motion.div>

          {/* Projects Grid */}
          <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-8" variants={containerVariants}>
            {projects.map((project) => (
              <motion.div
                key={project.id}
                variants={cardVariants}
                whileHover="hover"
                className="group p-6 bg-card rounded-xl border border-border hover:border-primary/50 transition-all duration-300 cursor-pointer"
              >
                {/* Project Header */}
                <div className="mb-4">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <a
                        href="#"
                        className="p-2 bg-primary/10 rounded-lg hover:bg-primary/20 transition-colors"
                        onClick={(e) => e.preventDefault()}
                      >
                        <ExternalLink size={16} className="text-primary" />
                      </a>
                      <a
                        href="https://github.com/AstorTGarcia/ElementalAdventure"
                        className="p-2 bg-primary/10 rounded-lg hover:bg-primary/20 transition-colors"
                        onClick={(e) => e.preventDefault()}
                      >
                        <Github size={16} className="text-primary" />
                      </a>
                    </div>
                  </div>
                  <p className="text-sm text-foreground/60">{project.year}</p>
                </div>

                {/* Description */}
                <p className="text-foreground/70 mb-6 leading-relaxed">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
