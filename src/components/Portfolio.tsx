import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const projects = [
  { title: 'NEXUS', category: 'SaaS Platform', img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop' },
  { title: 'OBLIVION', category: 'Creative Agency', img: 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&w=2194&auto=format&fit=crop' },
  { title: 'VELOCITY', category: 'E-Commerce', img: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?q=80&w=2070&auto=format&fit=crop' },
  { title: 'SYNTH', category: 'Web3 Dashboard', img: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=2070&auto=format&fit=crop' },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="py-32 px-0 bg-[#111111] text-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="font-sans font-black italic text-[10vw] md:text-[150px] leading-[0.8] uppercase tracking-tighter mb-16 text-white/20">
          Selected <br /> <span className="text-accent text-stroke-accent not-italic">Work</span>
        </h2>
      </div>

      <div className="w-full">
        {projects.map((proj, i) => (
          <motion.a
            href="#contact"
            key={i}
            className="group block border-y border-white/10 relative overflow-hidden"
            initial="initial"
            whileHover="hover"
          >
            <div className="absolute inset-0 z-0 hidden md:block">
               <motion.img 
                 src={proj.img} 
                 alt={proj.title}
                 className="w-[40vw] h-[60vh] object-cover absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 grayscale opacity-0 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-500 pointer-events-none rounded-sm"
               />
            </div>

            {/* Mobile Image */}
            <div className="w-full h-64 md:hidden relative overflow-hidden border-b border-white/10">
               <img src={proj.img} alt={proj.title} className="w-full h-full object-cover grayscale" />
            </div>

            <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-start md:items-center relative z-10 mix-blend-difference">
              <h3 className="font-sans font-black text-5xl md:text-8xl uppercase tracking-tighter group-hover:pl-4 transition-all duration-300">
                {proj.title}
              </h3>
              
              <div className="flex items-center gap-6 mt-4 md:mt-0">
                <span className="font-sans font-bold text-sm uppercase px-4 py-1 border border-white rounded-full tracking-widest text-[#111111] bg-white group-hover:bg-transparent group-hover:text-white transition-colors">
                  {proj.category}
                </span>
                <div className="w-12 h-12 rounded-full border border-white flex items-center justify-center group-hover:bg-accent group-hover:border-accent group-hover:text-black transition-all">
                  <ArrowRight className="group-hover:-rotate-45 transition-transform" />
                </div>
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
