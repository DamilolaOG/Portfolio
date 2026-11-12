import { motion } from 'motion/react';
import { Mail, Linkedin, ArrowUpRight, Send } from 'lucide-react';
import { BehanceIcon } from './icons/BehanceIcon';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { toast } from 'sonner@2.0.3';
import { projectId, publicAnonKey } from '../utils/supabase/info';

export function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const socialLinks = [
    { 
      icon: Linkedin, 
      label: 'LinkedIn', 
      href: 'http://linkedin.com/in/damilola-odulesi-7271a816a',
      isCustomIcon: false 
    },
    { 
      icon: BehanceIcon, 
      label: 'Behance', 
      href: 'https://www.behance.net/damilolaodulesi',
      isCustomIcon: true 
    },
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Store form reference before async operations
    const form = e.currentTarget;
    
    const formData = new FormData(form);
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      subject: formData.get('subject') as string,
      message: formData.get('message') as string,
    };

    try {
      console.log('Sending contact form submission...', { name: data.name, email: data.email, subject: data.subject });
      
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-29fa0f5f/send-email`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${publicAnonKey}`,
          },
          body: JSON.stringify(data),
        }
      );

      console.log('Response status:', response.status, response.statusText);

      const result = await response.json();
      console.log('Response data:', result);

      if (response.ok) {
        toast.success('Message sent successfully!', {
          description: "I'll get back to you as soon as possible.",
        });
        form.reset();
      } else {
        console.error('Failed to send email - Full error details:', {
          status: response.status,
          statusText: response.statusText,
          result: result
        });
        
        let errorDescription = 'Please email me directly at damilolaodulesi@gmail.com';
        
        if (result.error === 'Invalid API key format') {
          errorDescription = '⚠️ The Resend API key needs to be updated. It should start with "re_". Please check the environment variables.';
        } else if (result.details?.message === 'API key is invalid') {
          errorDescription = '⚠️ The Resend API key is invalid or expired. Please update it in environment variables.';
        } else if (result.error) {
          errorDescription = `${result.error}. ${result.message || 'Please email me directly.'}`;
        }
        
        toast.error('Failed to send message', {
          description: errorDescription,
        });
      }
    } catch (error) {
      console.error('Network or parsing error while sending email:', error);
      toast.error('Failed to send message', {
        description: 'Network error. Please try again or email me directly at damilolaodulesi@gmail.com',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen pt-14 pb-24 px-6 lg:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h1 className="text-neutral-900 mb-6">Let's Work Together</h1>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h2 className="text-neutral-900 mb-6">Get in Touch</h2>
              <div className="space-y-4">
                {/* Email */}
                <a
                  href="mailto:damilolaodulesi@gmail.com"
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href = 'mailto:damilolaodulesi@gmail.com';
                  }}
                  className="flex items-center gap-4 p-6 bg-neutral-50 border border-neutral-200 rounded-2xl hover:border-neutral-300 transition-colors group"
                >
                  <div className="w-12 h-12 bg-neutral-900 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-neutral-700 transition-colors">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-neutral-500 mb-1">Email</div>
                    <div className="text-neutral-900">damilolaodulesi@gmail.com</div>
                  </div>
                </a>
              </div>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-neutral-500 mb-4">Connect with me</h3>
              <div className="space-y-3">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-4 bg-neutral-50 border border-neutral-200 rounded-2xl hover:border-neutral-300 hover:bg-neutral-100 transition-all group"
                    >
                      <div className="flex items-center gap-3">
                        {social.isCustomIcon ? (
                          <Icon className="w-5 h-5 text-neutral-600 group-hover:text-neutral-900 transition-colors" />
                        ) : (
                          <Icon className="w-5 h-5 text-neutral-600 group-hover:text-neutral-900 transition-colors" />
                        )}
                        <span className="text-neutral-900">{social.label}</span>
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-neutral-900 transition-colors" />
                    </a>
                  );
                })}
              </div>
            </motion.div>

            {/* Quick links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="p-6 bg-neutral-900 rounded-2xl space-y-4"
            >
              <h3 className="text-white/60">Quick Links</h3>
              <div className="space-y-2">
                <Link
                  to="/projects"
                  className="block text-white hover:text-white/80 transition-colors"
                >
                  → View my work
                </Link>
                <Link
                  to="/resume"
                  className="block text-white hover:text-white/80 transition-colors"
                >
                  → Download resume
                </Link>
                <Link
                  to="/about"
                  className="block text-white hover:text-white/80 transition-colors"
                >
                  → Learn more about me
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-neutral-900 mb-6">Send a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm text-neutral-600">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Your name"
                  required
                  disabled={isSubmitting}
                  className="bg-white border-neutral-200 rounded-xl"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm text-neutral-600">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your.email@example.com"
                  required
                  disabled={isSubmitting}
                  className="bg-white border-neutral-200 rounded-xl"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm text-neutral-600">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  placeholder="What's this about?"
                  required
                  disabled={isSubmitting}
                  className="bg-white border-neutral-200 rounded-xl"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm text-neutral-600">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about your project..."
                  rows={6}
                  required
                  disabled={isSubmitting}
                  className="bg-white border-neutral-200 rounded-xl resize-none"
                />
              </div>
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full gap-2 bg-neutral-900 hover:bg-neutral-700 text-white rounded-full px-8 py-6 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="w-4 h-4" />
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
              <p className="text-sm text-neutral-500 text-center">
                Your message will be sent directly to my inbox
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
