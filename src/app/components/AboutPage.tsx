import { motion } from 'motion/react';
import { bio } from '../data/portfolioData';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Link } from 'react-router-dom';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';

export function AboutPage() {
  return (
    <div className="min-h-screen pt-10 pb-24 px-6 lg:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h1 className="text-[52px] md:text-[64px] font-semibold text-neutral-900 mb-6">About Me</h1>
          <p className="text-neutral-600 max-w-3xl">
            Senior product designer with over 7 years of experience leading high-impact user experience strategies across diverse B2C and B2B environments.
          </p>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-5 gap-16 mb-32">
          {/* Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="rounded-3xl overflow-hidden bg-neutral-900 aspect-[3/4] sticky top-32 flex items-end justify-center">
              <img
                src={bio.portrait}
                alt={bio.name}
                className="w-full h-full object-cover object-center mix-blend-lighten"
                style={{
                  maskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.9) 0%, rgba(0,0,0,1) 100%)',
                  WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.9) 0%, rgba(0,0,0,1) 100%)'
                }}
              />
            </div>
          </motion.div>

          {/* Bio Content */}
          <div className="lg:col-span-3 space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h2 className="text-neutral-900 mb-6">Design Philosophy</h2>
              <p className="text-neutral-600 leading-relaxed">
                {bio.philosophy}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <p className="text-neutral-600 leading-relaxed">
                {bio.fullBio}
              </p>
            </motion.div>
          </div>
        </div>

        {/* Skills Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h2 className="text-neutral-900 mb-12">Skills & Expertise</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {bio.skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-neutral-50 border border-neutral-200 hover:border-neutral-300 transition-colors"
              >
                <div className="text-4xl mb-4">{skill.icon}</div>
                <h3 className="text-neutral-900">{skill.name}</h3>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Tools Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-32"
        >
          <div className="flex flex-wrap gap-4">
            {bio.tools.map((tool, index) => (
              <motion.div
                key={tool}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="px-6 py-3 rounded-full bg-neutral-900 text-white"
              >
                {tool}
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* FAQ Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-32"
        >
          <h2 className="text-neutral-900 mb-12">FAQ</h2>
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border border-neutral-200 rounded-2xl px-6 bg-neutral-50">
              <AccordionTrigger className="text-neutral-900 hover:no-underline py-6">
                What sets your design approach apart from others?
              </AccordionTrigger>
              <AccordionContent className="text-neutral-600 pb-6 leading-relaxed">
                I use the double diamond UX strategy which helps me dive deeper into both the problem phase and the solution phase. I start by gathering insights to validate my initial assumption of the problem, analysing this insights helps my better define the problem statement which guides my solution to the problem.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border border-neutral-200 rounded-2xl px-6 bg-neutral-50">
              <AccordionTrigger className="text-neutral-900 hover:no-underline py-6">
                What kind of projects do you normally work on?
              </AccordionTrigger>
              <AccordionContent className="text-neutral-600 pb-6 leading-relaxed">
                I usually take on full-time, part-time or contract UX design projects. The scope varies based on each project's specific requirements. I prefer remotely-friendly roles but I'm open to hybrid settings too.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border border-neutral-200 rounded-2xl px-6 bg-neutral-50">
              <AccordionTrigger className="text-neutral-900 hover:no-underline py-6">
                What tools and software do you use for UX design?
              </AccordionTrigger>
              <AccordionContent className="text-neutral-600 pb-6 leading-relaxed">
                I use Figma for my design related work including wireframing, UI designs and prototyping. I rely on Notion and Miro for collaborative efforts depending on what the team feels most comfortable with. When it comes to rapid testing, I use UserTesting and Optimal Workshop.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border border-neutral-200 rounded-2xl px-6 bg-neutral-50 [&[data-state=closed]]:border-neutral-200">
              <AccordionTrigger className="text-neutral-900 hover:no-underline py-6">
                What is the best way to get in touch with you?
              </AccordionTrigger>
              <AccordionContent className="text-neutral-600 pb-6 leading-relaxed">
                Drop me a line{' '}
                <a
                  href="mailto:damilolaodulesi@gmail.com"
                  className="text-neutral-900 underline hover:text-neutral-600 transition-colors"
                >
                  via email
                </a>
                , or let's get in touch on{' '}
                <a
                  href="http://linkedin.com/in/damilola-odulesi-7271a816a"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-900 underline hover:text-neutral-600 transition-colors"
                >
                  LinkedIn
                </a>
                .
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-32 pt-16 border-t border-neutral-200 text-center"
        >
          <h2 className="text-neutral-900 mb-6">Let's Work Together</h2>
          <p className="text-neutral-600 mb-8 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-4 rounded-full bg-neutral-900 text-white hover:bg-neutral-700 transition-colors"
          >
            Get in touch
          </Link>
        </motion.section>
      </div>
    </div>
  );
}
