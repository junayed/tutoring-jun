
import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  BookOpen, 
  Users, 
  Mail, 
  MapPin, 
  Calculator, 
  Cpu, 
  Atom, 
  BarChart, 
  CheckCircle, 
  Star, 
  ChevronDown, 
  ArrowRight, 
  Zap, 
  MessageSquare, 
  Sun, 
  Moon, 
  GraduationCap, 
  Video, 
  Sparkles, 
  Search, 
  Code,
  Music,
  ExternalLink
} from 'lucide-react';

// --- Theme Management ---
const useTheme = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') as 'light' | 'dark' || 'light';
    }
    return 'light';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(prev => prev === 'light' ? 'dark' : 'light');
  return { theme, toggleTheme };
};

// --- Sub-components ---

const Navbar = ({ toggleTheme, theme }: { toggleTheme: () => void, theme: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Subjects', href: '#subjects' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Consultancy', href: '#consultancy' },
    { name: 'Contact', href: '#contact' },
  ];

  const whatsappLink = "https://wa.me/447424433431";

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl shadow-2xl py-2 border-b-2 border-yellow-400' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center gap-2">
            <div className="w-12 h-12 bg-gradient-to-tr from-yellow-400 via-orange-500 to-purple-600 rounded-xl flex items-center justify-center text-white font-black text-2xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)]">W</div>
            <span className="text-3xl font-black text-slate-900 dark:text-white tracking-tighter uppercase italic">Dr WOW</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-700 dark:text-slate-300 hover:text-purple-600 dark:hover:text-yellow-400 text-sm font-black uppercase tracking-widest transition-all hover:-translate-y-0.5"
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-2xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-yellow-400 transition-all hover:rotate-12 border-2 border-transparent hover:border-yellow-400"
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-purple-600 text-white px-8 py-3 rounded-full text-sm font-black uppercase tracking-tighter hover:bg-purple-700 transition-all shadow-[6px_6px_0px_0px_rgba(255,215,0,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
            >
              Start Now
            </a>
          </div>

          <div className="md:hidden flex items-center gap-4">
            <button onClick={toggleTheme} className="p-2 text-slate-800 dark:text-yellow-400">{theme === 'light' ? <Moon size={24} /> : <Sun size={24} />}</button>
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-slate-900 dark:text-white transition-colors">{isOpen ? <X size={28} /> : <Menu size={28} />}</button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white dark:bg-slate-900 shadow-2xl animate-in slide-in-from-top duration-300 border-b-8 border-yellow-400">
          <div className="px-4 pt-4 pb-12 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-900 dark:text-white block px-4 py-5 text-2xl font-black uppercase tracking-tighter border-b border-slate-100 dark:border-slate-800"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full mt-4 bg-purple-600 text-white block px-4 py-5 text-center text-xl font-black uppercase tracking-widest rounded-2xl shadow-xl"
              onClick={() => setIsOpen(false)}
            >
              Start Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

const Hero = () => {
  const whatsappLink = "https://wa.me/447424433431";

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-white dark:bg-slate-950 transition-colors">
      <div className="absolute top-20 right-20 w-32 h-32 bg-yellow-400 border-4 border-slate-900 rounded-full z-0 animate-pulse hidden lg:block" />
      <div className="absolute bottom-20 left-20 w-48 h-48 bg-purple-600 border-4 border-slate-900 -rotate-12 z-0 hidden lg:block" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-12 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="text-center lg:text-left space-y-8">
            <div className="inline-flex items-center gap-2 px-6 py-2 bg-yellow-400 border-4 border-slate-900 text-slate-900 text-xs font-black uppercase tracking-widest rounded-full shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <Sparkles size={16} /> 15+ Years Expert Experience
            </div>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-slate-900 dark:text-white leading-[0.85] tracking-tighter uppercase italic drop-shadow-2xl">
              Education <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-purple-600">With a WOW</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 max-w-xl mx-auto lg:mx-0 font-bold leading-relaxed">
              Mathematics, Physics, IT & Statistics. <br />
              <span className="text-purple-600 dark:text-yellow-400">UK Wide Online</span> or <span className="underline decoration-orange-500 decoration-4 underline-offset-4">Aberdeen In-Person</span>.
            </p>
            <div className="flex flex-col sm:flex-row gap-8 justify-center lg:justify-start pt-6">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center px-12 py-6 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-[2rem] text-xl md:text-2xl font-black uppercase tracking-tighter hover:bg-slate-800 transition-all shadow-[10px_10px_0px_0px_rgba(255,215,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
              >
                Book Test Session <ArrowRight className="ml-2 group-hover:translate-x-3 transition-transform" size={28} />
              </a>
            </div>
          </div>
          
          <div className="relative group hidden lg:block">
            <div className="relative z-10 w-full h-[650px] bg-yellow-400 border-[12px] border-slate-900 rounded-[5rem] overflow-hidden shadow-[20px_20px_0px_0px_rgba(147,51,234,1)] transform rotate-3 group-hover:rotate-0 transition-all duration-700">
              <img 
                src="https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=1200&q=80" 
                alt="Dr WOW Tutoring" 
                className="w-full h-full object-cover grayscale-0 group-hover:grayscale-0 transition-all"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
              <div className="absolute bottom-12 left-12 right-12 bg-white p-8 border-4 border-slate-900 rounded-[2.5rem] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <p className="text-slate-900 font-black uppercase text-xl italic tracking-tighter italic">"Mastering STEM subjects through logic and interaction."</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const About = () => (
  <section id="about" className="py-24 md:py-32 bg-slate-100 dark:bg-slate-900 transition-colors relative overflow-hidden scroll-mt-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <div className="order-2 lg:order-1 space-y-8">
          <div className="inline-block px-4 py-2 bg-orange-500 text-white text-xs font-black uppercase tracking-widest rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            Meet Your Tutor
          </div>
          <h3 className="text-5xl md:text-6xl font-black text-slate-900 dark:text-white uppercase tracking-tighter leading-none italic">
            Hi, I'm <a href="https://drjunayed.dataxense.co.uk" target="_blank" rel="noopener noreferrer" className="text-purple-600 dark:text-yellow-400 underline decoration-slate-900 dark:decoration-white decoration-4 md:decoration-8 hover:text-orange-500 dark:hover:text-orange-400 transition-colors">DR HASAN</a>
          </h3>
          <div className="space-y-6 text-base md:text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-bold">
            <p>
              Hi, I’m Dr Hasan, an experienced educator with a <span className="text-slate-900 dark:text-white">PhD in Artificial Intelligence</span> and over <span className="text-slate-900 dark:text-white">15 years of teaching experience</span>. I’ve supported learners at every level — from early primary school through to university and postgraduate research. 
            </p>
            <p>
              Over the years, I’ve helped thousands of students build confidence, deepen understanding and achieve their academic goals in Mathematics, Physics, IT and related STEM subjects, both online and in person. My lessons are interactive and tailored to each student’s needs, whether you’re preparing for school exams, university courses, or advanced study.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 md:gap-6 pt-4">
            <div className="p-4 md:p-6 bg-white dark:bg-slate-800 border-4 border-slate-900 dark:border-slate-700 rounded-3xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,0.05)]">
              <p className="text-3xl md:text-4xl font-black text-purple-600">15+</p>
              <p className="text-[10px] md:text-xs font-black uppercase text-slate-500 tracking-widest mt-1">Years Teaching</p>
            </div>
            <div className="p-4 md:p-6 bg-yellow-400 border-4 border-slate-900 rounded-3xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <p className="text-3xl md:text-4xl font-black text-slate-900">PhD</p>
              <p className="text-[10px] md:text-xs font-black uppercase text-slate-900 tracking-widest mt-1">AI Expert</p>
            </div>
          </div>
        </div>
        
        <div className="order-1 lg:order-2 flex justify-center">
          <div className="relative">
            <div className="w-[300px] sm:w-[450px] lg:w-[500px] aspect-square bg-white dark:bg-slate-800 border-[10px] md:border-[12px] border-slate-900 rounded-[3rem] md:rounded-[5rem] rotate-3 md:rotate-6 shadow-2xl flex items-center justify-center p-4 overflow-hidden">
               <img src="https://drjunayed.dataxense.co.uk/hasan.jpg" className="w-full h-full object-cover rounded-[2rem] md:rounded-[3.5rem]" alt="Dr Hasan - Experienced Educator" />
            </div>
            <div className="absolute -top-6 md:-top-10 -left-6 md:-left-10 w-24 h-24 md:w-32 md:h-32 bg-purple-600 border-4 md:border-8 border-slate-900 rounded-full flex items-center justify-center text-white -rotate-12 animate-bounce">
               <Zap size={40} className="md:w-12 md:h-12" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Subjects = () => {
  const categories = [
    { icon: Calculator, title: "Maths", color: "bg-yellow-400", textColor: "text-slate-900", anim: "hover:rotate-6" },
    { icon: Atom, title: "Physics", color: "bg-purple-600", textColor: "text-white", anim: "hover:-rotate-6" },
    { icon: Code, title: "IT / Comp", color: "bg-orange-500", textColor: "text-white", anim: "hover:scale-110" },
    { icon: BarChart, title: "Statistics", color: "bg-blue-600", textColor: "text-white", anim: "hover:-translate-y-4" }
  ];

  return (
    <section id="subjects" className="py-24 md:py-32 bg-white dark:bg-slate-950 transition-colors scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 md:mb-24 space-y-6">
          <h2 className="text-purple-600 dark:text-yellow-400 font-black uppercase tracking-[0.4em] text-sm">Curriculum Focus</h2>
          <h3 className="text-4xl md:text-6xl lg:text-8xl font-black text-slate-900 dark:text-white uppercase tracking-tighter italic">National & Scottish Level <br className="hidden md:block"/> and Beyond</h3>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-12 mb-16 md:mb-20">
          {categories.map((cat, i) => (
            <div key={i} className={`p-6 md:p-10 ${cat.color} ${cat.textColor} rounded-[2rem] md:rounded-[3rem] border-4 md:border-8 border-slate-900 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,0.1)] transition-all ${cat.anim} cursor-default group`}>
              <cat.icon size={48} className="mb-4 md:mb-8 group-hover:scale-125 transition-transform" />
              <h4 className="text-xl md:text-3xl lg:text-4xl font-black uppercase tracking-tighter mb-2 md:mb-4 italic">{cat.title}</h4>
              <p className="font-bold opacity-80 uppercase text-[8px] md:text-xs tracking-widest">Expert Mentorship</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          <div className="p-8 md:p-10 bg-slate-900 text-white rounded-[3rem] md:rounded-[4rem] border-8 border-yellow-400 shadow-2xl transition-transform hover:rotate-1">
            <h4 className="text-3xl md:text-4xl font-black uppercase tracking-tighter text-yellow-400 mb-6 md:mb-8 italic">Scottish Curriculum</h4>
            <ul className="space-y-3 md:space-y-4 font-bold text-base md:text-lg">
              <li className="flex gap-4 items-center"><CheckCircle className="text-yellow-400 flex-shrink-0" /> CfE Early to Senior Phase</li>
              <li className="flex gap-4 items-center"><CheckCircle className="text-yellow-400 flex-shrink-0" /> S4-S6 Excellence</li>
              <li className="flex gap-4 items-center"><CheckCircle className="text-yellow-400 flex-shrink-0" /> National 3-5 Focus</li>
              <li className="flex gap-4 items-center"><CheckCircle className="text-yellow-400 flex-shrink-0" /> Advanced Higher Mastery</li>
            </ul>
          </div>
          <div className="p-8 md:p-10 bg-purple-600 text-white rounded-[3rem] md:rounded-[4rem] border-8 border-slate-900 shadow-2xl transition-transform hover:-rotate-1">
            <h4 className="text-3xl md:text-4xl font-black uppercase tracking-tighter text-white mb-6 md:mb-8 italic">England & UK Wide</h4>
            <ul className="space-y-3 md:space-y-4 font-bold text-base md:text-lg">
              <li className="flex gap-4 items-center"><CheckCircle className="text-white flex-shrink-0" /> KS1-KS4 National Curriculum</li>
              <li className="flex gap-4 items-center"><CheckCircle className="text-white flex-shrink-0" /> GCSE & A Levels STEM</li>
              <li className="flex gap-4 items-center"><CheckCircle className="text-white flex-shrink-0" /> University / PhD Modules</li>
              <li className="flex gap-4 items-center"><CheckCircle className="text-white flex-shrink-0" /> AI & Statistics Support</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

const Consultancy = () => (
  <section id="consultancy" className="py-24 md:py-32 bg-orange-500 text-slate-900 overflow-hidden relative scroll-mt-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="flex flex-col lg:flex-row gap-12 md:gap-16 items-center">
        <div className="lg:w-1/2 space-y-8 md:space-y-10">
          <div className="inline-block px-4 py-2 bg-slate-900 text-white text-xs font-black uppercase tracking-widest rounded-lg">High-Level Services</div>
          <h3 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85] italic drop-shadow-lg">Thesis <br/> Consultancy</h3>
          <p className="text-xl md:text-2xl font-bold leading-tight max-w-lg">
            Supporting MSc & PhD researchers with methodology, AI implementation, and complex data analysis.
          </p>
          <div className="p-6 md:p-8 bg-white border-4 md:border-8 border-slate-900 rounded-[2rem] md:rounded-[3rem] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex items-center gap-4 md:gap-6 group hover:scale-105 transition-transform">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-purple-600 rounded-2xl flex items-center justify-center text-white shadow-xl">
              <Video size={36} className="md:w-10 md:h-10" />
            </div>
            <div>
              <h4 className="text-xl md:text-2xl font-black uppercase tracking-tighter">Bespoke Arrangements</h4>
              <p className="text-slate-600 font-bold text-sm md:text-base">Contact for a <span className="text-purple-600">Free 15-Min Call</span> to discuss your unique project roadmap.</p>
            </div>
          </div>
        </div>
        
        <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 w-full">
           <div className="p-8 md:p-10 bg-white border-4 md:border-8 border-slate-900 rounded-[2rem] md:rounded-[3rem] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] space-y-4">
              {/* Fix: Merged duplicate className attributes */}
              <Search className="text-orange-500 md:w-12 md:h-12" size={40} />
              <h5 className="text-xl md:text-2xl font-black uppercase italic tracking-tighter">AI Specialist</h5>
              <p className="text-xs md:text-sm font-bold text-slate-600">Guidance on AI research, machine learning modules, and thesis defense prep.</p>
           </div>
           <div className="p-8 md:p-10 bg-yellow-400 border-4 md:border-8 border-slate-900 rounded-[2rem] md:rounded-[3rem] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] space-y-4 md:mt-8">
              {/* Fix: Merged duplicate className attributes */}
              <BarChart className="text-slate-900 md:w-12 md:h-12" size={40} />
              <h5 className="text-xl md:text-2xl font-black uppercase italic tracking-tighter">Data Sense</h5>
              <p className="text-xs md:text-sm font-bold text-slate-900">Professional statistical interpretation for post-graduate datasets.</p>
           </div>
        </div>
      </div>
    </div>
  </section>
);

const Pricing = () => {
  const [isIndividual, setIsIndividual] = useState(true);

  const individualPacks = [
    { title: "Pack 1: Test", price: "23", desc: "1 Hour Session", feature: "Level Assessment", color: "yellow" },
    { title: "Pack 2: Standard", price: "25", desc: "1 Hour Session", feature: "Tailored Roadmap", color: "orange" },
    { title: "Pack 3: Weekly", price: "65", desc: "3 Hours Total", feature: "Weekly Continuity", color: "purple", highlight: true },
    { title: "Pack 4: Monthly", price: "180", desc: "8 Hours Total", feature: "2 Hours / Week", color: "blue" },
  ];

  const groupPacks = [
    { title: "Pack 1 Group", price: "20", desc: "Per Student", feature: "Group of 3+", color: "yellow" },
    { title: "Pack 2 Group", price: "20", desc: "Per Student", feature: "Group of 3+", color: "orange" },
    { title: "Pack 3 Group", price: "55", desc: "Per Student", feature: "Group of 3+", color: "purple", highlight: true },
    { title: "Pack 4 Group", price: "150", desc: "Per Student", feature: "Group of 3+", color: "blue" },
  ];

  return (
    <section id="pricing" className="py-24 md:py-32 bg-white dark:bg-slate-900 transition-colors scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 md:mb-24 space-y-6">
          <h2 className="text-purple-600 dark:text-yellow-400 font-black uppercase tracking-[0.4em] text-sm">Simple Packages</h2>
          <h3 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white uppercase tracking-tighter italic">Transparent Rates</h3>
          
          <div className="inline-flex p-1.5 bg-slate-100 dark:bg-slate-800 border-2 md:border-4 border-slate-900 dark:border-slate-700 rounded-3xl mt-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <button 
              onClick={() => setIsIndividual(true)}
              className={`px-6 md:px-10 py-3 md:py-4 rounded-2xl font-black uppercase tracking-widest text-xs md:text-sm transition-all ${isIndividual ? 'bg-purple-600 text-white shadow-xl' : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'}`}
            >
              📍 Individual
            </button>
            <button 
              onClick={() => setIsIndividual(false)}
              className={`px-6 md:px-10 py-3 md:py-4 rounded-2xl font-black uppercase tracking-widest text-xs md:text-sm transition-all ${!isIndividual ? 'bg-orange-500 text-white shadow-xl' : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'}`}
            >
              📍 Group (3-5)
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {(isIndividual ? individualPacks : groupPacks).map((pack, i) => (
            <PriceCard key={i} {...pack} />
          ))}
        </div>

        <div className="mt-16 md:mt-20 p-8 md:p-12 bg-slate-900 text-white rounded-[3rem] md:rounded-[4rem] border-8 border-purple-600 shadow-2xl relative overflow-hidden">
          <div className="relative z-10 grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h4 className="text-3xl md:text-4xl font-black uppercase tracking-tighter italic text-yellow-400 mb-4">Group Tutoring Available</h4>
              <p className="text-base md:text-lg font-bold text-slate-400 mb-6">Bring and arrange your own group (Min 3 students). Max 5 students per session. All subjects covered.</p>
              <div className="flex flex-wrap gap-3">
                 <span className="px-4 py-2 bg-white/10 rounded-full text-[10px] md:text-xs font-black uppercase tracking-widest">Maths</span>
                 <span className="px-4 py-2 bg-white/10 rounded-full text-[10px] md:text-xs font-black uppercase tracking-widest">Physics</span>
                 <span className="px-4 py-2 bg-white/10 rounded-full text-[10px] md:text-xs font-black uppercase tracking-widest">IT</span>
                 <span className="px-4 py-2 bg-white/10 rounded-full text-[10px] md:text-xs font-black uppercase tracking-widest">Statistics</span>
              </div>
            </div>
            <div className="text-center md:text-right">
              <a href="https://wa.me/447424433431" target="_blank" rel="noopener noreferrer" className="inline-block px-10 py-5 bg-yellow-400 text-slate-900 rounded-full text-xl md:text-2xl font-black uppercase tracking-widest hover:scale-105 hover:bg-yellow-300 transition-all shadow-[6px_6px_0px_0px_rgba(255,255,255,0.2)]">
                Inquire Group
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const PriceCard = ({ title, price, desc, feature, color, highlight }: any) => {
  const colors: any = {
    yellow: "bg-yellow-400 text-slate-900 border-slate-900",
    orange: "bg-orange-500 text-white border-slate-900",
    purple: "bg-purple-600 text-white border-slate-900",
    blue: "bg-blue-600 text-white border-slate-900"
  };

  return (
    <div className={`p-8 md:p-10 rounded-[2.5rem] md:rounded-[3rem] border-4 md:border-8 ${colors[color]} shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all hover:-translate-y-4 hover:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] group ${highlight ? 'lg:scale-110 z-10' : ''}`}>
      <h4 className="text-xl md:text-2xl font-black uppercase tracking-tighter mb-2 italic">{title}</h4>
      <p className="text-[10px] font-black uppercase tracking-widest opacity-60 mb-6 md:mb-8">{desc}</p>
      <div className="flex items-baseline gap-1 mb-6 md:mb-8">
        <span className="text-5xl md:text-6xl font-black tracking-tighter italic">£{price}</span>
        <span className="font-bold text-xs uppercase">/ student</span>
      </div>
      <div className="h-1 w-full bg-current opacity-20 rounded-full mb-6 md:mb-8" />
      <p className="text-xs md:text-sm font-black uppercase tracking-widest flex items-center gap-2">
        <CheckCircle size={16} className="md:w-5 md:h-5" /> {feature}
      </p>
    </div>
  );
};

const MusicSection = () => (
  <section className="py-24 bg-purple-600 text-white relative overflow-hidden scroll-mt-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="bg-slate-900/40 backdrop-blur-xl border-4 md:border-8 border-white rounded-[3rem] md:rounded-[5rem] p-8 md:p-16 flex flex-col md:flex-row items-center gap-12 shadow-[20px_20px_0px_0px_rgba(255,215,0,1)]">
        <div className="w-48 h-48 md:w-64 md:h-64 bg-yellow-400 rounded-[3rem] rotate-6 flex items-center justify-center shadow-2xl overflow-hidden group">
          <Music size={100} className="text-slate-900 group-hover:scale-125 transition-transform" />
        </div>
        <div className="flex-1 space-y-6 text-center md:text-left">
          <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter italic">I do music as well!</h3>
          <p className="text-xl font-bold italic text-purple-100">"Logic meets rhythm. When I'm not tutoring STEM, I'm creating beats."</p>
          <a 
            href="https://on.soundcloud.com/j9dQJtfCcxGPhtYKLc" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-4 px-10 py-5 bg-white text-slate-900 rounded-full text-xl font-black uppercase tracking-widest hover:bg-yellow-400 transition-all hover:scale-105 shadow-xl"
          >
            Stream on SoundCloud <ExternalLink size={24} />
          </a>
        </div>
      </div>
    </div>
  </section>
);

const Contact = () => (
  <section id="contact" className="py-24 md:py-32 bg-slate-900 dark:bg-black transition-colors relative scroll-mt-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="grid lg:grid-cols-2 gap-16 md:gap-24 items-center">
        <div className="space-y-8 md:space-y-10">
          <div className="inline-block px-4 py-2 bg-yellow-400 text-slate-900 text-xs font-black uppercase tracking-widest rounded-lg">Get In Touch</div>
          <h3 className="text-6xl md:text-8xl font-black text-white uppercase tracking-tighter leading-[0.85] italic">Start Your <br/> Journey</h3>
          <p className="text-xl md:text-2xl font-bold text-slate-400">Ready for a free 15-minute call or your first test session? Drop me an email or a WhatsApp message.</p>
          
          <div className="space-y-6 md:space-y-8 pt-4 md:pt-8">
             <a href="mailto:j.hasan@dataxense.co.uk" className="flex items-center gap-4 md:gap-6 group">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-2xl md:rounded-3xl flex items-center justify-center text-slate-900 group-hover:bg-yellow-400 group-hover:rotate-12 transition-all shadow-xl">
                   <Mail size={32} className="md:w-10 md:h-10" />
                </div>
                <div className="space-y-0.5 md:space-y-1">
                   <p className="text-[10px] md:text-xs font-black uppercase tracking-widest text-slate-500">Email Me Directly</p>
                   <p className="text-xl sm:text-2xl lg:text-3xl font-black text-white group-hover:text-yellow-400 transition-colors break-all">j.hasan@dataxense.co.uk</p>
                </div>
             </a>
             <a href="https://wa.me/447424433431" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 md:gap-6 group">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-green-500 rounded-2xl md:rounded-3xl flex items-center justify-center text-white group-hover:bg-yellow-400 group-hover:-rotate-12 transition-all shadow-xl">
                   <MessageSquare size={32} className="md:w-10 md:h-10" />
                </div>
                <div className="space-y-0.5 md:space-y-1">
                   <p className="text-[10px] md:text-xs font-black uppercase tracking-widest text-slate-500">WhatsApp Only</p>
                   <p className="text-2xl md:text-3xl font-black text-white group-hover:text-yellow-400 transition-colors">+44 7424 433431</p>
                </div>
             </a>
          </div>
        </div>
        
        <div className="relative">
          <div className="p-10 md:p-16 bg-purple-600 rounded-[3rem] md:rounded-[5rem] border-4 md:border-8 border-white text-white shadow-[12px_12px_0px_0px_rgba(255,215,0,1)] transform -rotate-2 hover:rotate-0 transition-transform">
             <Star size={48} className="mb-6 md:mb-10 text-yellow-400 fill-yellow-400 md:w-16 md:h-16" />
             <h4 className="text-2xl md:text-4xl font-black uppercase tracking-tighter italic mb-4 md:mb-6 leading-tight">Expert Guidance is just an email away.</h4>
             <p className="text-lg md:text-xl font-bold italic opacity-90">"I reply fastest to drop-in emails. Let's build your STEM future together."</p>
             <div className="mt-8 md:mt-12 flex flex-wrap gap-4">
                <div className="px-5 md:px-6 py-2 md:py-3 bg-white text-slate-900 font-black uppercase text-[10px] md:text-xs tracking-widest rounded-full">No Contact Forms</div>
                <div className="px-5 md:px-6 py-2 md:py-3 bg-slate-900 text-white font-black uppercase text-[10px] md:text-xs tracking-widest rounded-full">Direct Access</div>
             </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-white dark:bg-slate-950 py-16 md:py-24 border-t-8 border-slate-900 dark:border-slate-800 transition-colors">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="flex items-center gap-4">
           <div className="w-14 h-14 md:w-16 md:h-16 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-2xl flex items-center justify-center font-black text-2xl md:text-3xl shadow-xl">W</div>
           <span className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white italic tracking-tighter">Dr WOW</span>
        </div>
        <div className="flex flex-wrap justify-center gap-6 md:gap-10">
           {['Home', 'About', 'Subjects', 'Pricing', 'Consultancy', 'Contact'].map(link => (
             <a key={link} href={`#${link.toLowerCase()}`} className="text-slate-900 dark:text-white hover:text-purple-600 dark:hover:text-yellow-400 font-black uppercase tracking-[0.2em] text-[10px] md:text-sm transition-all">{link}</a>
           ))}
        </div>
      </div>
      <div className="mt-16 md:mt-20 pt-10 border-t-2 border-slate-100 dark:border-slate-800 text-center">
         <p className="text-slate-400 font-black uppercase tracking-[0.4em] md:tracking-[0.5em] text-[8px] md:text-[10px]">© {new Date().getFullYear()} Dr WOW Tutoring | Aberdeen & Online Worldwide</p>
      </div>
    </div>
  </footer>
);

export default function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen font-sans antialiased selection:bg-yellow-400 selection:text-slate-900 transition-colors overflow-x-hidden">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Hero />
      <About />
      <Subjects />
      <Consultancy />
      <Pricing />
      <MusicSection />
      <Contact />
      <Footer />
      
      {/* Floating NEON Button */}
      <a 
        href="https://wa.me/447424433431" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-[60] w-16 h-16 md:w-20 md:h-20 bg-green-500 rounded-full border-4 border-slate-900 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center text-white hover:scale-110 active:scale-95 transition-all animate-bounce"
      >
        <MessageSquare size={32} className="md:w-9 md:h-9" />
      </a>
    </div>
  );
}
