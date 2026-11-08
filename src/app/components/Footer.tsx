import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { Mail, Linkedin, Github } from "lucide-react";
import { BehanceIcon } from "./icons/BehanceIcon";
import avatarImage from 'figma:asset/78c21aca32a6d43a2967c87080f836280bab84c5.png';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "Email",
      icon: Mail,
      href: "mailto:damilolaodulesi@gmail.com",
      label: "damilolaodulesi@gmail.com",
      isCustomIcon: false,
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "http://linkedin.com/in/damilola-odulesi-7271a816a",
      label: "LinkedIn",
      isCustomIcon: false,
    },
    {
      name: "Behance",
      icon: BehanceIcon,
      href: "https://www.behance.net/damilolaodulesi",
      label: "Behance",
      isCustomIcon: true,
    },
    {
      name: "GitHub",
      icon: Github,
      href: "https://github.com/DamilolaOG",
      label: "GitHub",
      isCustomIcon: false,
    },
  ];

  const quickLinks = [
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Resume", href: "/resume" },
  ];

  return (
    <footer className="bg-transparent border-t-0">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand & Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-[#A4CCFF] rounded-full w-12 h-12 flex items-center justify-center overflow-hidden p-0.5 mb-4">
              <img 
                src={avatarImage} 
                alt="Damilola Odulesi"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-neutral-500">
              Available for freelance opportunities and
              collaborations.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-neutral-900 mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-neutral-600 hover:text-neutral-900 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Connect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-neutral-900 mb-4">Connect</h4>
            <div className="space-y-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                const isEmail = social.name === "Email";
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target={!isEmail ? "_blank" : undefined}
                    rel={!isEmail ? "noopener noreferrer" : undefined}
                    onClick={isEmail ? (e) => {
                      e.preventDefault();
                      window.location.href = social.href;
                    } : undefined}
                    className="flex items-center gap-3 text-neutral-600 hover:text-neutral-900 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center group-hover:bg-neutral-900 transition-colors">
                      {social.isCustomIcon ? (
                        <Icon className="w-[18px] h-[18px] group-hover:text-white transition-colors opacity-90 group-hover:opacity-100" />
                      ) : (
                        <Icon className="w-5 h-5 group-hover:text-white transition-colors" />
                      )}
                    </div>
                    <span className="text-sm">
                      {social.label}
                    </span>
                  </a>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="pt-8 border-t border-neutral-200 flex flex-col md:flex-row justify-between items-center gap-4 text-neutral-500"
        >
          <p>
            © {currentYear} Damilola Odulesi. All rights
            reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="hover:text-neutral-900 transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="hover:text-neutral-900 transition-colors"
            >
              Terms of Use
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}