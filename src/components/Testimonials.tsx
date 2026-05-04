import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, ChevronLeft, Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "STM Graphics completely shattered our expectations. The bold style they injected into our brand increased our conversion rate by 34% in two months.",
    author: "MARCUS T.",
    role: "CEO, TechFlow",
  },
  {
    quote: "They don't just design websites. They engineer digital experiences that actually feel expensive. Best investment we made this year.",
    author: "SARAH J.",
    role: "FOUNDER, OBLIVION LABS",
  },
  {
    quote: "A completely ruthless approach to design. They stripped away all the fluff from our landing page and the results speak for themselves.",
    author: "DAVID R.",
    role: "HEAD OF GROWTH, NEXUS",
  }
];

export function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((c) => (c + 1) % testimonials.length);
  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-32 px-6 bg-accent text-bg relative overflow-hidden">
      <Quote className="absolute top-10 left-10 md:top-20 md:left-20 w-48 h-48 opacity-10 text-bg -rotate-12" />
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <span className="font-mono text-xs font-bold uppercase tracking-widest border border-bg px-4 py-2 rounded-full mb-12 inline-block">
          Client Feedback
        </span>

        <div className="min-h-[250px] flex items-center justify-center mt-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="font-sans font-black italic text-3xl md:text-6xl uppercase leading-tight tracking-tight mb-12">
                "{testimonials[current].quote}"
              </h3>
              <div className="font-mono">
                <p className="font-bold text-lg uppercase">{testimonials[current].author}</p>
                <p className="text-sm opacity-80 uppercase">{testimonials[current].role}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex items-center justify-center gap-6 mt-16">
          <button onClick={prev} className="p-4 border border-bg hover:bg-bg hover:text-accent transition-colors">
            <ChevronLeft size={24} />
          </button>
          <div className="font-mono font-bold text-sm">
            0{current + 1} / 0{testimonials.length}
          </div>
          <button onClick={next} className="p-4 border border-bg hover:bg-bg hover:text-accent transition-colors">
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}
