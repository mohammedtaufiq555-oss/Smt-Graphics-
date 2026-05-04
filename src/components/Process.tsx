import { motion } from 'motion/react';

const steps = [
  { num: '01', title: 'DISCOVERY', desc: 'Deep dive into your business, target audience, and brutal revenue goals. We uncover what your competitors are missing.' },
  { num: '02', title: 'STRATEGY', desc: 'We craft the blueprint. Wireframing, UX mapping, and a conversion strategy designed specifically to trap attention.' },
  { num: '03', title: 'DESIGN', desc: 'Visual execution. We build bold, aggressive UI that positions you as the premium authority in your niche.' },
  { num: '04', title: 'DEPLOY', desc: 'Development, optimization, and launch. Fast load times, responsive perfection, and tracking integration.' }
];

export function Process() {
  return (
    <section id="process" className="py-32 px-6 bg-bg border-b border-white/10 relative">
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-[#CCFF00]/5 blur-[150px] rounded-full pointer-events-none"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="font-sans font-black italic text-6xl md:text-8xl uppercase tracking-tighter mb-24 max-w-2xl">
          How We <br /> <span className="text-accent not-italic">Execute</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-x-8 gap-y-16">
          {steps.map((step, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative"
            >
              {/* Connector line */}
              {i !== steps.length - 1 && (
                <div className="hidden md:block absolute top-[28px] left-[60px] w-[calc(100%-20px)] h-px bg-white/10" />
              )}
              
              <div className="text-8xl font-sans font-black text-white/5 mb-6 absolute -top-12 -left-4">
                {step.num}
              </div>
              <h3 className="font-sans font-black text-2xl uppercase tracking-wider mb-4 relative z-10 bg-bg inline-block pr-6">
                {step.title}
              </h3>
              <p className="font-mono text-sm opacity-60 leading-relaxed max-w-xs relative z-10 uppercase">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
