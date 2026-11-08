import { motion } from 'motion/react';
import { Footer } from './Footer';
import { projects } from '../data/portfolioData';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Navigation } from './Navigation';
import { ImageWithFallback } from './figma/ImageWithFallback';
import Group28 from '../imports/Group28-14-8127';
import { FlouraCTA } from './FlouraCTA';

export function HomePage() {
  // Show first 3 projects as selected works - reorder: move first to third position
  const selectedProjects = [
    projects[1], // MyBupa
    projects[2], // ALAT
    projects[0], // Bupa .co.uk (moved to third slot)
  ];

  return (
    <div className="min-h-screen" style={{ backgroundImage: "linear-gradient(149.852deg, rgb(250, 250, 250) 0%, rgb(255, 255, 255) 50%, rgb(245, 245, 245) 100%)" }}>
      {/* Hero Section */}
      <section className="relative min-h-[867px] md:h-[867px] flex flex-col overflow-hidden pb-12 md:pb-0" style={{ paddingTop: '30px' }}> {/* Navigation - reduced from 34px to 30px (4px less) */}
        <Navigation />
        
        {/* Floating elements for visual interest */}
        <motion.div
          animate={{
            x: [0, 300, 0],
            y: [0, 48, 0],
            opacity: [0.37, 0.5, 0.37],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute left-[25%] top-[265px] w-64 h-64 rounded-full bg-[#bedbff] blur-[64px] pointer-events-none"
        />
        <motion.div
          animate={{
            x: [0, -300, 0],
            y: [0, -48, 0],
            opacity: [0.24, 0.4, 0.24],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute left-[50%] top-[313px] w-96 h-96 rounded-full bg-[#fee685] blur-[64px] pointer-events-none"
        />

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full" style={{ marginTop: '106px' }}> {/* Increased from mt-[94px] to 106px (94 + 12) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col gap-5"
          >
            <h1 className="font-semibold text-[58px] leading-[76.8px] tracking-[-0.7975px] text-[#171717]">
              Hello there 👋🏽, I'm Dami.
            </h1>
            
            <h1 className="font-semibold text-[58px] leading-[76.8px] tracking-[-0.7975px] text-[#171717]">
              I design experiences that feel easy to use,<br />yet drive business outcomes.
            </h1>
            
            <h1 className="font-semibold text-[58px] leading-[76.8px] tracking-[-0.7975px] text-[#171717]">
              I'm currently a senior product designer at{' '}
              <span
                className="inline-block text-transparent"
                style={{
                  backgroundImage:
                    'linear-gradient(100deg, #ff8a32 0%, #ff3d65 28%, #eb008b 48%, #8a1fd1 70%, #006cff 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                }}
              >
                Sky
              </span>
              .
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Selected Works Section */}
      <section className="pt-9 pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {selectedProjects.map((project, index) => (
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
                <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-8 lg:gap-16"> {/* Left Column - Project Meta */}
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
                    <h3 className="text-[32px] lg:text-[40px] font-semibold text-neutral-900 mb-6 leading-[1.2]">
                      {project.oneLiner}
                    </h3>
                    <p className="text-[16px] text-neutral-600 mb-8 leading-relaxed">
                      {project.homePageSummary || project.problem}
                    </p>
                    <Link
                      to={`/project/${project.slug}`}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-neutral-900 text-white transition-colors mb-4"
                    >
                      Read case study
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Floura CTA */}
      <FlouraCTA />

      {/* Footer */}
      <Footer />
    </div>
  );
}
