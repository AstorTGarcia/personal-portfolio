"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function About() {
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

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Profile Image */}
          <motion.div variants={itemVariants} className="flex justify-center md:justify-start">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 rounded-2xl blur-2xl" />
              <div className="relative w-full h-full rounded-2xl overflow-hidden border border-primary/20 shadow-2xl">
                <Image src="/sas.jpg" alt="Astor García" fill className="object-cover" />
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold mb-4">About Me</h2>
              <div className="w-12 h-1 bg-primary rounded-full" />
            </div>

            <p className="text-lg text-foreground/70 leading-relaxed">
              I'm a Full Stack Developer and Computer Science student passionate about creating innovative digital
              solutions. With expertise in modern web technologies and a strong foundation in computer science, I build
              scalable applications that make a difference.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-4 bg-background rounded-lg border border-border">
                <p className="text-2xl font-bold text-primary">5+</p>
                <p className="text-sm text-foreground/60">Projects Completed</p>
              </div>
              <div className="p-4 bg-background rounded-lg border border-border">
                <p className="text-2xl font-bold text-primary">3+</p>
                <p className="text-sm text-foreground/60">Years of Experience</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
