import { motion } from 'motion/react';
import flouraAppImage from 'figma:asset/02f0162eeca8367e81a96735f16b97c3b17ce443.png';
import IcBaselineApple from '../imports/IcBaselineApple';

export function FlouraCTA() {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-12 mb-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative overflow-hidden rounded-3xl p-8 md:p-12 lg:p-16"
        style={{ backgroundColor: '#F4FFED' }}
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div>
            <h2 className="text-[32px] lg:text-[48px] font-semibold text-neutral-900 mb-6 leading-tight">
              Currently building Floura, exploring how AI could help with mental health support
            </h2>
            <p className="text-neutral-600 text-[16px] lg:text-[18px] mb-8 leading-relaxed">
              Every minute counts when someone needs mental health support. I founded Floura to explore how AI technology could help anyone access immediate, compassionate mental health support.
            </p>
            <a
              href="https://apps.apple.com/gb/app/floura/id6757165606"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-neutral-900 text-white rounded-full hover:bg-neutral-800 transition-colors group"
            >
              <div className="w-6 h-6">
                <IcBaselineApple />
              </div>
              Download Beta now
            </a>
          </div>

          {/* Right Column - App Image */}
          <div className="relative flex justify-center lg:justify-end">
            <img
              src={flouraAppImage}
              alt="Floura app interface showing AI therapist conversation"
              className="w-full max-w-[240px] lg:max-w-[320px] h-auto mix-blend-multiply"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}