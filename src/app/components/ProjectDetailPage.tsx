import { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight, ExternalLink } from 'lucide-react';
import { projects } from '../data/portfolioData';
import { ImageWithFallback } from './figma/ImageWithFallback';
import designProcessImage from 'figma:asset/96bc89a5de55631c119185138738874c2318f191.png';
import { alatImages } from './AlatImages';
import { ImageLightbox } from './ImageLightbox';
import Group28 from '../imports/Group28-14-8127';

export function ProjectDetailPage() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  const nextProject = projects.find((p) => p.slug === project.nextProject);
  const prevProject = projects.find((p) => p.slug === project.prevProject);

  return (
    <div className="min-h-screen pt-28 lg:pt-32 pb-24">
      {/* Back Button */}
      <div className="max-w-6xl mx-auto px-6 lg:px-12 mb-12">
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-neutral-500 hover:text-neutral-900 transition-colors group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          Back to projects
        </Link>
      </div>

      {/* Project Header */}
      <section className="max-w-6xl mx-auto px-6 lg:px-12 mb-10 lg:mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-[32px] lg:text-[64px] text-neutral-900 mb-6">{project.title}</h1>
          <p className="text-neutral-600 mb-8 max-w-3xl">
            {project.oneLiner}
          </p>
          
          <div className="flex flex-wrap gap-8 text-neutral-600">
            <div>
              <div className="text-neutral-400 mb-1">Role</div>
              <div>{project.role}</div>
            </div>
            <div>
              <div className="text-neutral-400 mb-1">Timeline</div>
              <div>{project.timeline}</div>
            </div>
            <div>
              <div className="text-neutral-400 mb-1">Category</div>
              <div>{project.category}</div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Hero Image */}
      <motion.section
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="max-w-7xl mx-auto px-6 lg:px-12 mb-10 lg:mb-24"
      >
        <div className={`rounded-3xl relative ${
          slug === 'bupa-blua-engagement' ? 'bg-[#DDEEF8]' :
          slug === 'alat-onboarding-redesign' ? 'bg-[#F5F5F5]' :
          'bg-neutral-100'
        }`}>
          <ImageWithFallback
            src={project.thumbnail}
            alt={project.title}
            className="w-full h-auto rounded-3xl object-cover"
          />
          {/* ALAT Logo Overlay - Removed since new image includes the screens */}
        </div>
      </motion.section>

      {/* Problem & Goal */}
      <section className="max-w-4xl mx-auto px-6 lg:px-12 mb-10 lg:mb-[60px]">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-[20px] lg:text-[24px] text-neutral-900 mb-4">The Problem</h3>
            <p className="text-neutral-600">{project.problem}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-[20px] lg:text-[24px] text-neutral-900 mb-4">The Goal</h3>
            <p className="text-neutral-600">{project.goal}</p>
          </motion.div>
        </div>
      </section>

      {/* Process */}
      <section className="max-w-4xl mx-auto px-6 lg:px-12 mb-12 lg:mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-[20px] lg:text-[24px] text-neutral-900 mb-12">
            {slug === 'alat-onboarding-redesign' ? 'Process - Double Diamond' : 'Process'}
          </h3>
        </motion.div>

        {/* Design Process Diagram - Only for ALAT project */}
        {slug === 'alat-onboarding-redesign' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 rounded-2xl bg-neutral-50 p-8 md:p-12"
          >
            <img
              src={designProcessImage}
              alt="Design process - Double Diamond methodology showing Discover, Define, Develop, and Deliver phases"
              className="w-full h-auto rounded-lg"
            />
          </motion.div>
        )}

        <div className="space-y-8 lg:space-y-16">
          {/* Research */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-4 py-2 rounded-full bg-neutral-100 text-neutral-600 mb-4">
              01 / Research
            </div>
            <p className="text-neutral-600">{project.process.research}</p>
          </motion.div>

          {/* Ideation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-4 py-2 rounded-full bg-neutral-100 text-neutral-600 mb-4">
              02 / Ideation
            </div>
            <p className="text-neutral-600">{project.process.ideation}</p>
          </motion.div>

          {/* Design */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-4 py-2 rounded-full bg-neutral-100 text-neutral-600 mb-4">
              03 / Design
            </div>
            <p className="text-neutral-600">{project.process.design}</p>
          </motion.div>
        </div>
      </section>

      {/* Visual Gallery */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 mb-12 lg:mb-24">
        {slug === 'alat-onboarding-redesign' ? (
          <div className="space-y-16">
            {/* Existing Design */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-[20px] lg:text-[24px] text-neutral-900 mb-6">Existing design</h3>
              <div
                className="rounded-3xl overflow-hidden bg-white cursor-zoom-in"
                onClick={() => setLightboxSrc(alatImages.existingDesign)}
              >
                <img
                  src={alatImages.existingDesign}
                  alt="Existing ALAT onboarding design showing pain points"
                  className="w-full h-auto"
                />
              </div>
            </motion.div>

            {/* Final Design Outcome */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className="text-[20px] lg:text-[24px] text-neutral-900 mb-6">New design</h3>
              <div
                className="rounded-3xl overflow-hidden bg-white cursor-zoom-in"
                onClick={() => setLightboxSrc(alatImages.finalDesign)}
              >
                <img
                  src={alatImages.finalDesign}
                  alt="Redesigned ALAT onboarding with improved user experience"
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
          </div>
        ) : (
          <div className="grid gap-8">
            {project.images.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="rounded-3xl bg-neutral-100 cursor-zoom-in"
                onClick={() => setLightboxSrc(image)}
              >
                <ImageWithFallback
                  src={image}
                  alt={`${project.title} mockup ${index + 1}`}
                  className="w-full h-auto object-contain rounded-3xl"
                />
              </motion.div>
            ))}
          </div>
        )}
      </section>

      {/* Results */}
      <section className="max-w-4xl mx-auto px-6 lg:px-12 mb-16 lg:mb-32">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-[20px] lg:text-[24px] text-neutral-900 mb-12"
        >
          Results & Impact
        </motion.h3>

        <div className="grid sm:grid-cols-2 gap-8">
          {project.results.map((result, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-8 rounded-2xl bg-neutral-50 border border-neutral-200"
            >
              <p className="text-neutral-900">{result}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Full Case Study CTA - For ALAT, Bupa Blua, and Bupa .co.uk projects */}
      {(slug === 'alat-onboarding-redesign' || slug === 'bupa-blua-engagement' || slug === 'bupa-couk-mega-menu') && (
        <section className="max-w-4xl mx-auto px-6 lg:px-12 mb-16 lg:mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-neutral-900 to-neutral-800 p-12 md:p-16 text-center"
          >
            <div className="relative z-10">
              <h3 className="text-white mb-4">Want to see the complete story?</h3>
              <p className="text-neutral-300 mb-8 max-w-2xl mx-auto">
                Explore the full case study with detailed design process, user research findings, wireframes, prototypes, and stakeholder presentations.
              </p>
              <a
                href={
                  slug === 'alat-onboarding-redesign'
                    ? "https://www.figma.com/proto/EpwoSsfRva9fiChyYVpiWq/Task?page-id=16%3A938&node-id=16-1107&p=f&viewport=-12654%2C176%2C0.11&t=lDT5rZbG7SUPI7OR-1&scaling=contain&content-scaling=fixed"
                    : slug === 'bupa-blua-engagement'
                    ? "https://www.figma.com/proto/EpwoSsfRva9fiChyYVpiWq/Task?page-id=0%3A1&node-id=1-44&p=f&viewport=332%2C308%2C0.18&t=AzB3fEOEYt3nc0dz-1&scaling=min-zoom&content-scaling=fixed"
                    : "https://www.figma.com/proto/UTwl5XiPR81YU7ynSll9CM/mega-nav-case-study?page-id=0%3A1&node-id=214-832&p=f&viewport=-154%2C410%2C0.02&t=qKkOnEZUqPZVT7Qx-1&scaling=contain&content-scaling=fixed"
                }
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-white text-neutral-900 rounded-full hover:bg-neutral-100 transition-colors group"
              >
                Read Full Case Study
                <ExternalLink className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
            {/* Decorative gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/50 to-transparent pointer-events-none" />
          </motion.div>
        </section>
      )}

      {/* Navigation to Next/Previous Project */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 pt-16 border-t border-neutral-200">
        <div className="flex justify-between items-start">
          {prevProject ? (
            <Link
              to={`/project/${prevProject.slug}`}
              className="group"
            >
              <div className="flex items-center gap-4 mb-4">
                <ArrowLeft className="w-5 h-5 text-neutral-400 group-hover:-translate-x-1 transition-transform" />
                <span className="text-neutral-400">Previous Project</span>
              </div>
              <h3 className="text-neutral-900 group-hover:text-neutral-600 transition-colors">
                {prevProject.title}
              </h3>
            </Link>
          ) : (
            <div />
          )}

          {nextProject && (
            <Link
              to={`/project/${nextProject.slug}`}
              className="group text-right"
            >
              <div className="flex items-center gap-4 mb-4 justify-end">
                <span className="text-neutral-400">Next Project</span>
                <ArrowRight className="w-5 h-5 text-neutral-400 group-hover:translate-x-1 transition-transform" />
              </div>
              <h3 className="text-neutral-900 group-hover:text-neutral-600 transition-colors">
                {nextProject.title}
              </h3>
            </Link>
          )}
        </div>
      </section>
      {lightboxSrc && (
        <ImageLightbox
          src={lightboxSrc}
          alt="Case study image"
          onClose={() => setLightboxSrc(null)}
        />
      )}
    </div>
  );
}