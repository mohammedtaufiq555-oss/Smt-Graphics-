import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-20">
      <div className="max-w-7xl mx-auto px-6 w-full z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mt-12 md:mt-0">
        
        <div className="lg:col-span-8 flex flex-col gap-6 relative z-20">
          <div className="absolute -top-20 -left-20 w-80 h-80 bg-[#CCFF00]/10 blur-[120px] rounded-full pointer-events-none"></div>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-[#CCFF00] font-mono text-sm mb-6 tracking-widest uppercase block">// Creative Dominance 2026</span>
            <h1 className="font-sans text-[15vw] lg:text-[120px] xl:text-[140px] leading-[0.85] font-black uppercase tracking-tighter">
              VISUAL <br />
              <span className="text-stroke font-black">WEAPONS</span><br />
              ONLY.
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="font-sans text-xl text-white/60 max-w-md leading-relaxed"
          >
            High-velocity design for brands that refuse to play small. We transform attention into conversion with aggressive aesthetic precision.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-8 flex flex-wrap gap-6 items-center"
          >
             <a href="#contact" className="group h-16 px-10 bg-[#CCFF00] text-black font-sans font-black text-sm uppercase tracking-wider flex items-center gap-4 hover:bg-white transition-colors">
               Start Project
               <ArrowUpRight className="group-hover:rotate-45 transition-transform" />
             </a>
             <div className="flex flex-col">
               <span className="text-2xl font-sans font-bold">500+</span>
               <span className="text-[10px] uppercase tracking-widest text-white/40 font-sans font-bold">Projects Delivered</span>
             </div>
          </motion.div>
        </div>

        {/* Abstract shapes / Image placeholder for Hero */}
        <div className="lg:col-span-4 relative h-[400px] md:h-[600px] w-full mt-12 lg:mt-0">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="absolute inset-0 bg-ink grayscale hover:grayscale-0 transition-all duration-700 object-cover border-8 border-bg"
            style={{ 
              backgroundImage: 'url("https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <div className="absolute -bottom-6 -left-6 bg-accent p-6 w-48 shadow-2xl">
            <p className="font-mono text-bg text-xs font-bold uppercase">Based in the Future</p>
            <p className="font-display text-bg text-4xl mt-2 leading-none">EST 2026</p>
          </div>
        </div>

      </div>

      {/* Marquee Banner */}
      <div className="absolute bottom-0 w-full overflow-hidden bg-accent py-4 border-y border-ink">
        <div className="marquee-track flex gap-8 whitespace-nowrap">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex items-center gap-8">
              <span className="font-display text-bg text-4xl uppercase tracking-wider">Web Design</span>
              <span className="text-bg">â</span>
              <span className="font-display text-bg text-4xl uppercase tracking-wider">Branding</span>
              <span className="text-bg">â</span>
              <span className="font-display text-bg text-4xl uppercase tracking-wider text-stroke">Development</span>
              <span className="text-bg">â</span>
              <span className="font-display text-bg text-4xl uppercase tracking-wider">Conversion rate optimization</span>
              <span className="text-bg">â</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
