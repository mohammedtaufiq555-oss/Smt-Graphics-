import { ArrowUp } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-transparent text-white pt-24 pb-8 px-6 border-t border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        <h2 className="font-sans font-black text-[20vw] leading-[0.7] tracking-tighter uppercase text-center w-full whitespace-nowrap mb-16 text-white/5 hover:text-white/10 transition-colors cursor-crosshair">
          STM<span className="text-[#CCFF00]">.</span> GRAPHICS
        </h2>

        <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-12 font-sans font-bold text-[10px] uppercase tracking-[0.2em] border-t border-white/10 pt-12">
          
          <div className="md:col-span-2">
            <p className="opacity-60 max-w-sm leading-relaxed tracking-wider">
              We design and build brutal, high-converting digital experiences for ambitious brands that want to dominate.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <span className="opacity-40 mb-2 tracking-[0.3em]">Socials</span>
            <a href="#" className="hover:text-[#CCFF00] focus:outline-none focus-visible:text-[#CCFF00] transition-colors">Instagram</a>
            <a href="#" className="hover:text-[#CCFF00] focus:outline-none focus-visible:text-[#CCFF00] transition-colors">Twitter // X</a>
            <a href="#" className="hover:text-[#CCFF00] focus:outline-none focus-visible:text-[#CCFF00] transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-[#CCFF00] focus:outline-none focus-visible:text-[#CCFF00] transition-colors">Behance</a>
          </div>

          <div className="flex flex-col gap-4">
            <span className="opacity-40 mb-2 tracking-[0.3em]">Legal</span>
            <a href="#" className="hover:text-[#CCFF00] focus:outline-none focus-visible:text-[#CCFF00] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#CCFF00] focus:outline-none focus-visible:text-[#CCFF00] transition-colors">Terms of Service</a>
            
            <button 
              onClick={scrollToTop}
              className="mt-8 flex items-center gap-2 group w-fit cursor-pointer text-[#CCFF00] hover:text-white transition-colors"
            >
              <span>BACK TO TOP</span>
              <div className="w-8 h-8 rounded-full border border-current flex items-center justify-center group-hover:-translate-y-1 transition-transform">
                <ArrowUp size={16} />
              </div>
            </button>
          </div>

        </div>

        <div className="w-full text-center mt-24 font-sans font-bold text-[10px] opacity-40 uppercase tracking-[0.2em] flex items-center justify-between">
          <div>&copy; {new Date().getFullYear()} STM GRAPHICS — ALL RIGHTS RESERVED</div>
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span>Taking New Projects</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
