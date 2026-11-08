import { motion } from 'motion/react';
import { Download, Briefcase, GraduationCap, Award } from 'lucide-react';
import { resume, bio } from '../data/portfolioData';
import { Button } from './ui/button';
import { generateResumePDF } from '../utils/generateResumePDF';

export function ResumePage() {
  return (
    <div className="min-h-screen pt-32 pb-24 px-6 lg:px-12">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex justify-end mb-6">
            <Button
              onClick={generateResumePDF}
              className="bg-neutral-900 hover:bg-neutral-700 text-white rounded-full px-6"
            >
              <Download className="w-4 h-4 mr-2" />
              Download Resume
            </Button>
          </div>
          <div>
            <h1 className="text-neutral-900 mb-4">{bio.name}</h1>
            <p className="text-neutral-600">{bio.tagline}</p>
            <p className="text-neutral-500">London, UK</p>
          </div>
        </motion.div>

        {/* Experience Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-20"
        >
          <div className="flex items-center gap-3 mb-10">
            <div className="w-12 h-12 rounded-full bg-neutral-100 flex items-center justify-center">
              <Briefcase className="w-6 h-6 text-neutral-900" />
            </div>
            <h2 className="text-neutral-900">Experience</h2>
          </div>

          <div className="space-y-12">
            {resume.experience.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative pl-8 border-l-2 border-neutral-200"
              >
                {/* Timeline dot */}
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-neutral-900" />
                
                <div className="pb-2">
                  <h3 className="text-neutral-900 mb-1">{job.title}</h3>
                  <div className="text-neutral-600 mb-1">
                    {job.company} • {job.location}
                  </div>
                  <div className="text-neutral-400 mb-4">{job.period}</div>
                  
                  <ul className="space-y-2">
                    {job.description.map((item, i) => (
                      <li key={i} className="text-neutral-600 flex items-start gap-2">
                        <span className="text-neutral-400 mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Education Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="flex items-center gap-3 mb-10">
            <div className="w-12 h-12 rounded-full bg-neutral-100 flex items-center justify-center">
              <GraduationCap className="w-6 h-6 text-neutral-900" />
            </div>
            <h2 className="text-neutral-900">Education</h2>
          </div>

          <div className="space-y-8">
            {resume.education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="p-6 rounded-2xl bg-neutral-50 border border-neutral-200"
              >
                <h3 className="text-neutral-900 mb-1">{edu.degree}</h3>
                <div className="text-neutral-600 mb-1">{edu.school}</div>
                <div className="text-neutral-400 mb-3">{edu.period}</div>
                <p className="text-neutral-600">{edu.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Achievements Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="flex items-center gap-3 mb-10">
            <div className="w-12 h-12 rounded-full bg-neutral-100 flex items-center justify-center">
              <Award className="w-6 h-6 text-neutral-900" />
            </div>
            <h2 className="text-neutral-900">Achievements & Recognition</h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {resume.achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-neutral-50 border border-neutral-200 hover:border-neutral-300 transition-colors"
              >
                <p className="text-neutral-900">{achievement}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Contact CTA */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="pt-16 border-t border-neutral-200 text-center"
        >
          <h2 className="text-neutral-900 mb-6">Interested in working together?</h2>
          <Button
            asChild
            className="bg-neutral-900 hover:bg-neutral-700 text-white rounded-full px-8 py-6"
          >
            <a href="mailto:damilolaodulesi@gmail.com">
              Let's Talk
            </a>
          </Button>
        </motion.section>
      </div>
    </div>
  );
}
