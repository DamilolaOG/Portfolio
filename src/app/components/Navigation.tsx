import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import avatarImage from 'figma:asset/78c21aca32a6d43a2967c87080f836280bab84c5.png';

export function Navigation() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="relative z-50 bg-transparent"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6 flex items-center justify-between">
          {/* Logo/Avatar */}
          <Link to="/" className="hover:opacity-80 transition-opacity">
            <div className="bg-[#A4CCFF] rounded-full w-16 h-16 flex items-center justify-center overflow-hidden p-0.5">
              <img 
                src={avatarImage} 
                alt="Damilola Odulesi"
                className="w-full h-full object-cover"
              />
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/about"
              className={`transition-colors font-normal leading-6 text-base tracking-[-0.3125px] ${ 
                isActive('/about')
                  ? 'text-neutral-900'
                  : 'text-[#737373] hover:text-neutral-900'
              }`}
            >
              About
            </Link>
            <Link
              to="/projects"
              className={`transition-colors font-normal leading-6 text-base tracking-[-0.3125px] ${
                isActive('/projects') || location.pathname.startsWith('/project/')
                  ? 'text-neutral-900'
                  : 'text-[#737373] hover:text-neutral-900'
              }`}
            >
              Projects
            </Link>
            <Link
              to="/resume"
              className={`transition-colors font-normal leading-6 text-base tracking-[-0.3125px] ${
                isActive('/resume')
                  ? 'text-neutral-900'
                  : 'text-[#737373] hover:text-neutral-900'
              }`}
            >
              Resume
            </Link>
            <Link
              to="/contact"
              className="bg-[#171717] hover:bg-neutral-700 text-white rounded-full px-6 py-2 font-medium text-sm leading-5 tracking-[-0.1504px] transition-colors"
            >
              Let's Talk
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-neutral-900 p-2"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 bg-neutral-900 z-[100] flex flex-col pt-[30px]"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 lg:px-12 py-6">
              <Link 
                to="/" 
                onClick={handleLinkClick} 
                className="hover:opacity-80 transition-opacity"
              >
                <div className="bg-[#A4CCFF] rounded-full w-16 h-16 p-0.5 flex items-center justify-center">
                  <img 
                    src={avatarImage} 
                    alt="Damilola Odulesi"
                    className="w-full h-full object-cover"
                  />
                </div>
              </Link>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="text-white p-2"
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>

            {/* Navigation Links */}
            <div className="flex flex-col justify-center items-center gap-6 p-6 flex-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                <Link
                  to="/about"
                  onClick={handleLinkClick}
                  className={`block py-4 text-[34px] transition-colors ${
                    isActive('/about')
                      ? 'text-white'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  About
                </Link>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                <Link
                  to="/projects"
                  onClick={handleLinkClick}
                  className={`block py-4 text-[34px] transition-colors ${
                    isActive('/projects') || location.pathname.startsWith('/project/')
                      ? 'text-white'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  Projects
                </Link>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                <Link
                  to="/resume"
                  onClick={handleLinkClick}
                  className={`block py-4 text-[34px] transition-colors ${
                    isActive('/resume')
                      ? 'text-white'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  Resume
                </Link>
              </motion.div>
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="p-6"
            >
              <Button
                asChild
                className="w-full bg-white hover:bg-neutral-100 text-neutral-900 rounded-full py-6"
              >
                <Link to="/contact" onClick={handleLinkClick}>Let's Talk</Link>
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}