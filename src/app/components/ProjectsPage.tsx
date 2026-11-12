import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ProjectCard } from './ProjectCard';
import { projects } from '../data/portfolioData';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { BehanceIcon } from './icons/BehanceIcon';
import { ImageWithFallback } from './figma/ImageWithFallback';
import Group28 from '../imports/Group28-14-8127';
import { FlouraCTA } from './FlouraCTA';

export function ProjectsPage() {
  // Reorder projects: move first to third position (same as homepage)
  const reorderedProjects = [
    projects[1], // MyBupa
    projects[2], // ALAT
    projects[0], // Bupa .co.uk (moved to third slot)
  ];

  return (
    <div className="min-h-screen" style={{ backgroundImage: "linear-gradient(149.852deg, rgb(250, 250, 250) 0%, rgb(255, 255, 255) 50%, rgb(245, 245, 245) 100%)" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="pt-28 pb-20"
        >
          <h1 className="text-neutral-900 mb-6">Projects</h1>
        </motion.div>

        {/* Projects - Editorial Layout */}
        <div className="pb-24">
          {reorderedProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-32"
            >
              {/* Project Image */}
              <Link to={`/project/${project.slug}`} className="block mb-12">
                <div>
                  <div className={`relative overflow-hidden rounded-2xl aspect-[16/10] ${
                    project.slug === 'likeminded-website-redesign' ? 'bg-[#BCF3BA]' :
                    project.slug === 'bupa-blua-engagement' ? 'bg-[#DDEEF8]' :
                    project.slug === 'bupa-couk-mega-menu' ? 'bg-[#F5F5F5]' :
                    project.slug === 'alat-onboarding-redesign' ? 'bg-[#F5F5F5]' :
                    'bg-neutral-100'
                  }`}>
                    {typeof project.thumbnail === 'function' ? (
                      <div className="w-full h-full flex items-center justify-center">
                        {project.thumbnail()}
                      </div>
                    ) : (
                      <ImageWithFallback
                        src={project.thumbnail}
                        alt={project.title}
                        className={`w-full h-full ${
                          project.slug === 'likeminded-website-redesign'
                            ? 'object-contain p-8'
                            : 'object-cover'
                        }`}
                      />
                    )}
                    {/* ALAT Logo Overlay - Removed since new image includes the screens */}
                  </div>
                </div>
              </Link>

              {/* Project Details - Two Column Layout */}
              <div>
                <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-16">
                  {/* Left Column - Project Meta */}
                  <div className="pt-[3px]">
                    <h4 className="text-[14px] font-semibold text-neutral-900 uppercase tracking-wide mb-2 leading-[1.2]">
                      {project.title}
                    </h4>
                    <p className="text-[14px] text-neutral-500 leading-[1.2]">
                      {project.role}
                    </p>
                  </div>

                  {/* Right Column - Project Content */}
                  <div>
                    <h3 className="text-[40px] font-semibold text-neutral-900 mb-6 leading-[1.2]">
                      {project.oneLiner}
                    </h3>
                    <div className="text-[16px] text-neutral-600 mb-8 leading-relaxed space-y-4">
                      {(project.homePageSummary || project.problem).split('\n\n').map((para, i) => (
                        <p key={i}>{para}</p>
                      ))}
                    </div>
                    <Link
                      to={`/project/${project.slug}`}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-neutral-900 text-white transition-colors mb-4"
                    >
                      Read case study
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Floura CTA */}
          <div className="-mx-6 lg:-mx-12 mb-16">
            <FlouraCTA />
          </div>

          {/* Behance CTA Card */}
          <motion.a
            href="https://www.behance.net/damilolaodulesi"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: projects.length * 0.1 }}
            className="group relative overflow-hidden rounded-lg bg-neutral-900 p-8 flex flex-col justify-between min-h-[400px] hover:bg-neutral-800 transition-colors"
          >
            <div className="flex-1 flex flex-col justify-center items-center text-center">
              <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-6 group-hover:bg-white/20 transition-colors">
                <BehanceIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-white mb-4">View More Work</h3>
              <p className="text-white/70 mb-6">
                Explore my full UI portfolio and creative projects on Behance
              </p>
              <div className="flex items-center gap-2 text-white">
                <span>Visit Behance</span>
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
            </div>
          </motion.a>
        </div>

        {/* CTA Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="pt-16 pb-24 border-t border-neutral-200 text-center"
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