import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import Group28 from '../imports/Group28-14-8127';

interface ProjectCardProps {
  title: string;
  oneLiner: string;
  thumbnail: string | any;
  slug: string;
  index: number;
}

export function ProjectCard({ title, oneLiner, thumbnail, slug, index }: ProjectCardProps) {
  // Check if thumbnail is a component or a string
  const ThumbnailComponent = typeof thumbnail === 'function' ? thumbnail : null;
  
  return (
    <Link to={`/project/${slug}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="group cursor-pointer"
      >
        <div className={`relative overflow-hidden rounded-2xl aspect-[4/3] mb-6 ${
          slug === 'likeminded-website-redesign' ? 'bg-[#BCF3BA]' :
          slug === 'bupa-blua-engagement' ? 'bg-[#DDEEF8]' :
          slug === 'bupa-couk-mega-menu' ? 'bg-[#F5F5F5]' :
          'bg-neutral-100'
        }`}>
          {ThumbnailComponent ? (
            <div className="w-full h-full flex items-center justify-center">
              <ThumbnailComponent />
            </div>
          ) : (
            <ImageWithFallback
              src={thumbnail}
              alt={title}
              className={`w-full h-full transition-transform duration-700 group-hover:scale-105 ${
                slug === 'likeminded-website-redesign' || slug === 'bupa-blua-engagement'
                  ? 'object-contain'
                  : 'object-cover'
              }`}
            />
          )}
          <div className="absolute inset-0 bg-neutral-900/0 group-hover:bg-neutral-900/10 transition-colors duration-300" />
          {/* ALAT Logo Overlay - Only for ALAT project */}
          {slug === 'alat-onboarding-redesign' && (
            <div className="absolute left-[15%] lg:left-[20%] top-1/2 -translate-y-1/2 -translate-x-1/2 w-12 h-12 lg:w-16 lg:h-16">
              <Group28 />
            </div>
          )}
          <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <ArrowUpRight className="w-5 h-5 text-neutral-900" />
          </div>
        </div>
        
        <div className="space-y-2">
          <h3 className="text-neutral-900 group-hover:text-neutral-600 transition-colors text-[1.25rem]">
            {title}
          </h3>
          <p className="text-neutral-500 text-[1.125rem]">
            {oneLiner}
          </p>
        </div>
      </motion.div>
    </Link>
  );
}