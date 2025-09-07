"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Mail, Phone, Linkedin, Code } from "lucide-react"

export default function Portfolio() {
  const projects = [
    {
      title: "Image Classification using CNNs",
      description: "Built a deep learning model to classify images into categories using TensorFlow and Keras.",
      tech: "Python, TensorFlow, Keras",
      link: "#",
    },
    {
      title: "Sentiment Analysis on Social Media Data",
      description: "Classified tweets and comments into positive, negative, and neutral sentiments using NLP and ML.",
      tech: "Python, Scikit-learn, NLTK",
      link: "#",
    },
    {
      title: "Agri Bot – AI-powered Robot for Soil Health",
      description:
        "Proposed a smart robot for soil monitoring and sustainable farming using AI-driven decision making.",
      tech: "AI, Robotics, ML",
      link: "#",
    },
  ]

  const certifications = [
    {
      name: "Fundamentals in Machine Learning (Saylor Academy)",
      link: "https://learn.saylor.org/admin/tool/certificate/index.php?code=8387037048PL",
    },
    {
      name: "Machine Learning with Python (IBM SkillsBuild)",
      link: "https://courses.skillsbuild.skillsnetwork.site/certificates/f53fcf03cc504345a63685719175bf38",
    },
    {
      name: "Specialization in Business Strategy and Leadership Management (Saylor Academy)",
      link: "https://learn.saylor.org/admin/tool/certificate/index.php?code=1860581915PL",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 p-8">
      {/* Header */}
      <header className="text-center mb-12">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-extrabold mb-4 text-gray-900 tracking-tight"
        >
          Pramoth L M
        </motion.h1>
        <p className="text-gray-600 text-lg">Aspiring AI/ML Engineer</p>
        <div className="flex justify-center gap-6 mt-4 text-sm text-gray-700">
          <a href="mailto:pramothlm@gmail.com" className="flex items-center gap-1 hover:text-blue-600 transition">
            <Mail size={16} /> pramothlm@gmail.com
          </a>
          <span className="flex items-center gap-1">
            <Phone size={16} /> +91 9791331489
          </span>
          <a
            href="https://www.linkedin.com/in/pramoth-l-m-490bb0253"
            target="_blank"
            className="flex items-center gap-1 hover:text-blue-600 transition"
            rel="noreferrer"
          >
            <Linkedin size={16} /> LinkedIn
          </a>
          <a
            href="#"
            target="_blank"
            className="flex items-center gap-1 hover:text-blue-600 transition"
            rel="noreferrer"
          >
            <Code size={16} /> GitHub
          </a>
        </div>
      </header>

      {/* Skills */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6 border-b-2 border-gray-300 inline-block pb-1">Skills</h2>
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-3 text-gray-700 text-sm">
          <li className="bg-white shadow rounded-lg p-3 hover:shadow-md transition">
            Python (NumPy, Pandas, Matplotlib)
          </li>
          <li className="bg-white shadow rounded-lg p-3 hover:shadow-md transition">
            Machine Learning (Supervised & Unsupervised)
          </li>
          <li className="bg-white shadow rounded-lg p-3 hover:shadow-md transition">
            Deep Learning (CNNs, Transfer Learning, TensorFlow, Keras)
          </li>
          <li className="bg-white shadow rounded-lg p-3 hover:shadow-md transition">
            Data Preprocessing & Visualization
          </li>
          <li className="bg-white shadow rounded-lg p-3 hover:shadow-md transition">SQL (Basics)</li>
          <li className="bg-white shadow rounded-lg p-3 hover:shadow-md transition">
            Tools: Jupyter, Git/GitHub, Google Colab
          </li>
          <li className="bg-white shadow rounded-lg p-3 hover:shadow-md transition">
            Cloud: AWS (Basics), Microsoft Azure
          </li>
          <li className="bg-white shadow rounded-lg p-3 hover:shadow-md transition">
            Web Tech (Exposure): HTML, CSS, JavaScript, React
          </li>
        </ul>
      </section>

      {/* Projects */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6 border-b-2 border-gray-300 inline-block pb-1">Projects</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
            >
              <Card className="rounded-2xl shadow-md hover:shadow-xl transition bg-white border border-gray-200">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2 text-gray-900">{p.title}</h3>
                  <p className="text-sm text-gray-600 mb-3">{p.description}</p>
                  <p className="text-xs text-gray-500 mb-4">Tech: {p.tech}</p>
                  <Button variant="outline" size="sm" asChild>
                    <a href={p.link} target="_blank" rel="noreferrer">
                      View Project
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Certifications */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6 border-b-2 border-gray-300 inline-block pb-1">Certifications</h2>
        <ul className="space-y-3">
          {certifications.map((c, idx) => (
            <li key={idx} className="bg-white p-3 rounded-lg shadow hover:shadow-md transition text-sm">
              <a href={c.link} target="_blank" className="text-blue-600 hover:underline" rel="noreferrer">
                {c.name}
              </a>
            </li>
          ))}
        </ul>
      </section>

      {/* Contact */}
      <footer className="text-center text-gray-600 text-sm mt-12 border-t pt-6">
        <p>© {new Date().getFullYear()} Pramoth L M | Built with React, Tailwind & Framer Motion</p>
      </footer>
    </div>
  )
}
