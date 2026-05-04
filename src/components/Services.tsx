import { motion } from 'motion/react';
import { Layout, Palette, Code, Zap } from 'lucide-react';

const services = [
  {
    title: 'UI/UX Design',
    desc: 'High-converting user interfaces designed to dominate. We do not do boring.',
    icon: <Layout size={32} />,
    color: 'border border-white/10 bg-white/5 hover:bg-[#CCFF00] hover:text-black transition-all text-white',
  },
  {
    title: 'Web Dev',
    desc: 'Lightning fast React, Next.js, and Webflow builds. Production ready code.',
    icon: <Code size={32} />,
    color: 'border border-white/10 bg-white/5 hover:bg-[#CCFF00] hover:text-black transition-all text-white',
  },
  {
    title: 'Branding',
    desc: 'Aggressive, modern brand identities that stand out in crowded markets.',
    icon: <Palette size={32} />,
    color: 'border border-white/10 bg-white/5 hover:bg-[#CCFF00] hover:text-black transition-all text-white',
  },
  {
    title: 'CRO Strategy',
    desc: 'Data-driven layout adjustments designed to turn visitors into cash.',
    icon: <Zap size={32} />,
    color: 'border border-white/10 bg-white/5 hover:bg-[#CCFF00] hover:text-black transition-all text-white',
  },
];

export function Services() {
  return (
    <section id="services" className="py-32 px-6 bg-bg border-b brutal-border relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <div>
            <span className="font-mono text-accent text-sm tracking-widest uppercase mb-4 block">// Our Arsenal</span>
            <h2 className="font-sans font-black italic text-7xl md:text-9xl uppercase tracking-tighter leading-[0.8]">
              What We <br /> <span className="text-stroke not-italic font-black">Build</span>
            </h2>
          </div>
          <p className="font-mono text-sm max-w-sm uppercase text-ink/70">
            We don't just build websites. We engineer digital assets designed to scale your revenue.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
          {services.map((svc, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className={`p-10 ${svc.color} flex flex-col justify-between group cursor-crosshair min-h-[300px]`}
            >
              <div className="mb-8 p-4 bg-white/10 rounded-full inline-block w-fit group-hover:bg-black/10 transition-colors">
                {svc.icon}
              </div>
              <div>
                <h3 className="font-sans font-black text-4xl uppercase mb-4 group-hover:tracking-wider transition-all duration-300">{svc.title}</h3>
                <p className="font-mono text-sm uppercase opacity-60 group-hover:opacity-100 leading-relaxed max-w-sm">
                  {svc.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
