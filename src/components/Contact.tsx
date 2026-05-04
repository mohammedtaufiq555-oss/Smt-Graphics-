import { motion } from 'motion/react';
import { ArrowRight, MessageSquare } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-32 px-6 bg-[#080808] flex items-center justify-center border-b border-white/10 min-h-screen">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <h2 className="font-sans font-black italic text-[12vw] md:text-[120px] leading-[0.8] tracking-tighter uppercase mb-8">
            Let's <br /> <span className="text-stroke not-italic font-black">Talk</span>
          </h2>
          <p className="font-mono text-base uppercase max-w-md opacity-80 mb-12">
            Ready to dominate your industry? Stop using generic templates and let's craft an experience that converts.
          </p>

          <div className="flex flex-col gap-6 font-mono text-xl uppercase font-bold">
            <a href="mailto:hello@stmgraphics.com" className="hover:text-accent transition-colors w-fit pb-1 border-b border-ink decoration-accent underline-offset-4">
              hello@stmgraphics.com
            </a>
            <a href="tel:+1234567890" className="hover:text-accent transition-colors w-fit pb-1 border-b border-ink decoration-accent underline-offset-4">
              +1.800.STM.GRAPHICS
            </a>
          </div>
        </div>

        <div className="bg-[#111111] border border-white/10 p-8 md:p-12 text-white relative">
          <div className="absolute top-0 right-0 p-4 bg-[#CCFF00] text-black hidden md:block">
            <MessageSquare size={32} />
          </div>
          
          <h3 className="font-sans font-black text-4xl uppercase mb-8">Start the Project</h3>
          
          <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
            <div className="flex flex-col gap-2">
              <label className="font-mono text-sm uppercase opacity-70">Name</label>
              <input 
                type="text" 
                className="bg-transparent border-b border-white/30 pb-2 focus:outline-none focus:border-[#CCFF00] text-xl font-mono transition-colors"
                placeholder="JOHN DOE"
              />
            </div>
            
            <div className="flex flex-col gap-2">
              <label className="font-mono text-sm uppercase opacity-70">Email</label>
              <input 
                type="email" 
                className="bg-transparent border-b border-white/30 pb-2 focus:outline-none focus:border-[#CCFF00] text-xl font-mono transition-colors"
                placeholder="JOHN@COMPANY.COM"
              />
            </div>
            
            <div className="flex flex-col gap-2 mb-8">
              <label className="font-mono text-sm uppercase opacity-70">Project Details</label>
              <textarea 
                rows={4}
                className="bg-transparent border-b border-white/30 pb-2 focus:outline-none focus:border-[#CCFF00] text-xl font-mono transition-colors resize-none"
                placeholder="TELL US ABOUT YOUR VISION..."
              />
            </div>

            <button type="submit" className="group bg-[#CCFF00] text-black font-sans font-black tracking-widest uppercase py-6 px-8 hover:bg-white transition-colors flex items-center justify-between w-full">
              <span>Send Request</span>
              <ArrowRight className="group-hover:translate-x-2 transition-transform" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
