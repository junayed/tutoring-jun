
import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  BookOpen, 
  Target, 
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
  Code
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
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Subjects', href: '#subjects' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Consultancy', href: '#consultancy' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl shadow-2xl py-2 border-b-2 border-yellow-400' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center gap-2">
            <div className="w-12 h-12 bg-gradient-to-tr from-yellow-400 via-orange-500 to-purple-600 rounded-xl flex items-center justify-center text-white font-black text-2xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)]">W</div>
            <span className="text-3xl font-black text-slate-900 dark:text-white tracking-tighter uppercase italic">Dr WOW</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
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
              href="#contact"
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
          </div>
        </div>
      )}
    </nav>
  );
};

const Hero = () => (
  <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-white dark:bg-slate-950 transition-colors">
    {/* Neobrutalist Decor */}
    <div className="absolute top-20 right-20 w-32 h-32 bg-yellow-400 border-4 border-slate-900 rounded-full z-0 animate-pulse hidden lg:block" />
    <div className="absolute bottom-20 left-20 w-48 h-48 bg-purple-600 border-4 border-slate-900 -rotate-12 z-0 hidden lg:block" />
    
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="text-center lg:text-left space-y-8">
          <div className="inline-flex items-center gap-2 px-6 py-2 bg-yellow-400 border-4 border-slate-900 text-slate-900 text-xs font-black uppercase tracking-widest rounded-full shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <Sparkles size={16} /> 15+ Years Expert Experience
          </div>
          <h1 className="text-7xl md:text-9xl font-black text-slate-900 dark:text-white leading-[0.85] tracking-tighter uppercase italic drop-shadow-2xl">
            Education <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-purple-600">With a WOW</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 max-w-xl mx-auto lg:mx-0 font-bold leading-relaxed">
            Mathematics, Physics, IT & Statistics. <br />
            <span className="text-purple-600 dark:text-yellow-400">UK Wide Online</span> or <span className="underline decoration-orange-500 decoration-4 underline-offset-4">Aberdeen In-Person</span>.
          </p>
          <div className="flex flex-col sm:flex-row gap-8 justify-center lg:justify-start pt-6">
            <a
              href="#contact"
              className="group flex items-center justify-center px-12 py-6 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-[2rem] text-2xl font-black uppercase tracking-tighter hover:bg-slate-800 transition-all shadow-[10px_10px_0px_0px_rgba(255,215,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
            >
              Book Test Session <ArrowRight className="ml-2 group-hover:translate-x-3 transition-transform" size={28} />
            </a>
          </div>
        </div>
        
        <div className="relative group hidden lg:block">
          <div className="relative z-10 w-full h-[650px] bg-yellow-400 rounded-[5rem] border-[12px] border-slate-900 overflow-hidden shadow-[20px_20px_0px_0px_rgba(147,51,234,1)] transform rotate-3 group-hover:rotate-0 transition-all duration-700">
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

const About = () => (
  <section id="about" className="py-32 bg-slate-100 dark:bg-slate-900 transition-colors relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="grid lg:grid-cols-2 gap-24 items-center">
        <div className="order-2 lg:order-1 space-y-8">
          <div className="inline-block px-4 py-2 bg-orange-500 text-white text-xs font-black uppercase tracking-widest rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            Meet Your Tutor
          </div>
          <h3 className="text-6xl font-black text-slate-900 dark:text-white uppercase tracking-tighter leading-none italic">
            Hi, I'm <span className="text-purple-600 dark:text-yellow-400 underline decoration-slate-900 dark:decoration-white decoration-8">Dr Hasan</span>
          </h3>
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-bold">
            Hi, I’m Dr Hasan, an experienced educator with a <span className="text-slate-900 dark:text-white">PhD in Artificial Intelligence</span> and over <span className="text-slate-900 dark:text-white">15 years of teaching experience</span>. I’ve supported learners at every level — from early primary school through to university and postgraduate research. 
          </p>
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-bold">
            Over the years, I’ve helped thousands of students build confidence, deepen understanding and achieve their academic goals in Mathematics, Physics, IT and related STEM subjects, both online and in person. My lessons are interactive and tailored to each student’s needs, whether you’re preparing for school exams, university courses, or advanced study.
          </p>
          <div className="grid grid-cols-2 gap-6 pt-4">
            <div className="p-6 bg-white dark:bg-slate-800 border-4 border-slate-900 dark:border-slate-700 rounded-3xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,0.05)]">
              <p className="text-4xl font-black text-purple-600">15+</p>
              <p className="text-xs font-black uppercase text-slate-500 tracking-widest mt-1">Years Teaching</p>
            </div>
            <div className="p-6 bg-yellow-400 border-4 border-slate-900 rounded-3xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <p className="text-4xl font-black text-slate-900">PhD</p>
              <p className="text-xs font-black uppercase text-slate-900 tracking-widest mt-1">AI Expert</p>
            </div>
          </div>
        </div>
        
        <div className="order-1 lg:order-2 flex justify-center">
          <div className="relative">
            <div className="w-[350px] sm:w-[500px] aspect-square bg-white dark:bg-slate-800 border-[12px] border-slate-900 rounded-[5rem] rotate-6 shadow-2xl flex items-center justify-center p-4">
               <img src="https://images.unsplash.com/photo-1544717305-27a734ef1904?auto=format&fit=crop&w=800&q=80" className="w-full h-full object-cover rounded-[3.5rem]" alt="Dr Hasan Professional" />
            </div>
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-purple-600 border-8 border-slate-900 rounded-full flex items-center justify-center text-white -rotate-12">
               <Zap size={48} />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Subjects = () => {
  const categories = [
    { icon: Calculator, title: "Maths", color: "bg-yellow-400", textColor: "text-slate-900", anim: "hover:rotate-2" },
    { icon: Atom, title: "Physics", color: "bg-purple-600", textColor: "text-white", anim: "hover:-rotate-2" },
    { icon: Code, title: "IT / Computing", color: "bg-orange-500", textColor: "text-white", anim: "hover:scale-105" },
    { icon: BarChart, title: "Statistics", color: "bg-blue-600", textColor: "text-white", anim: "hover:translate-y-[-10px]" }
  ];

  return (
    <section id="subjects" className="py-32 bg-white dark:bg-slate-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24 space-y-6">
          <h2 className="text-purple-600 dark:text-yellow-400 font-black uppercase tracking-[0.4em] text-sm">Curriculum Focus</h2>
          <h3 className="text-6xl md:text-8xl font-black text-slate-900 dark:text-white uppercase tracking-tighter italic">National and Scottish Level <br className="hidden md:block"/> and Beyond</h3>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {categories.map((cat, i) => (
            <div key={i} className={`p-10 ${cat.color} ${cat.textColor} rounded-[3rem] border-8 border-slate-900 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] dark:shadow-[12px_12px_0px_0px_rgba(255,255,255,0.1)] transition-all ${cat.anim} cursor-default group`}>
              <cat.icon size={64} className="mb-8 group-hover:scale-125 transition-transform" />
              <h4 className="text-4xl font-black uppercase tracking-tighter mb-4 italic">{cat.title}</h4>
              <p className="font-bold opacity-80 uppercase text-xs tracking-widest">Expert Tutoring & Mentorship</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="p-10 bg-slate-900 text-white rounded-[4rem] border-8 border-yellow-400 shadow-2xl transform hover:rotate-1 transition-transform">
            <h4 className="text-4xl font-black uppercase tracking-tighter text-yellow-400 mb-8 italic">Scottish Curriculum</h4>
            <ul className="space-y-4 font-bold text-lg">
              <li className="flex gap-4 items-center"><CheckCircle className="text-yellow-400" /> CfE Early to Senior Phase</li>
              <li className="flex gap-4 items-center"><CheckCircle className="text-yellow-400" /> S4-S6 Excellence</li>
              <li className="flex gap-4 items-center"><CheckCircle className="text-yellow-400" /> National 3-5 Focus</li>
              <li className="flex gap-4 items-center"><CheckCircle className="text-yellow-400" /> Advanced Higher Mastery</li>
            </ul>
          </div>
          <div className="p-10 bg-purple-600 text-white rounded-[4rem] border-8 border-slate-900 shadow-2xl transform hover:-rotate-1 transition-transform">
            <h4 className="text-4xl font-black uppercase tracking-tighter text-white mb-8 italic">England & UK Wide</h4>
            <ul className="space-y-4 font-bold text-lg">
              <li className="flex gap-4 items-center"><CheckCircle className="text-white" /> Key Stage 1-4 Mastery</li>
              <li className="flex gap-4 items-center"><CheckCircle className="text-white" /> GCSE Excellence</li>
              <li className="flex gap-4 items-center"><CheckCircle className="text-white" /> A Levels STEM Specialism</li>
              <li className="flex gap-4 items-center"><CheckCircle className="text-white" /> University / PhD Research</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

const Consultancy = () => (
  <section id="consultancy" className="py-32 bg-orange-500 text-slate-900 overflow-hidden relative">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="flex flex-col lg:flex-row gap-16 items-center">
        <div className="lg:w-1/2 space-y-10">
          <div className="inline-block px-4 py-2 bg-slate-900 text-white text-xs font-black uppercase tracking-widest rounded-lg">High-Level Services</div>
          <h3 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85] italic drop-shadow-lg">Thesis <br/> Consultancy</h3>
          <p className="text-2xl font-bold leading-tight max-w-lg">
            Supporting MSc & PhD researchers with methodology, AI implementation, and complex data analysis.
          </p>
          <div className="p-8 bg-white border-8 border-slate-900 rounded-[3rem] shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] flex items-center gap-6 group hover:scale-105 transition-transform">
            <div className="w-20 h-20 bg-purple-600 rounded-2xl flex items-center justify-center text-white shadow-xl">
              <Video size={40} />
            </div>
            <div>
              <h4 className="text-2xl font-black uppercase tracking-tighter">Bespoke Arrangements</h4>
              <p className="text-slate-600 font-bold">Contact for a <span className="text-purple-600">Free 15-Min Call</span> to proceed with your unique project roadmap.</p>
            </div>
          </div>
        </div>
        
        <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-8">
           <div className="p-10 bg-white border-8 border-slate-900 rounded-[3rem] shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] space-y-4">
              <Search className="text-orange-500" size={48} />
              <h5 className="text-2xl font-black uppercase italic tracking-tighter">AI Specialist</h5>
              <p className="text-sm font-bold text-slate-600">Guidance on AI research, machine learning modules, and thesis defense prep.</p>
           </div>
           <div className="p-10 bg-yellow-400 border-8 border-slate-900 rounded-[3rem] shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] space-y-4 mt-8">
              <BarChart className="text-slate-900" size={48} />
              <h5 className="text-2xl font-black uppercase italic tracking-tighter">Data Sense</h5>
              <p className="text-sm font-bold text-slate-900">Professional statistical interpretation for post-graduate datasets.</p>
           </div>
        </div>
      </div>
    </div>
  </section>
);

const Pricing = () => {
  const [isIndividual, setIsIndividual] = useState(true);

  return (
    <section id="pricing" className="py-32 bg-white dark:bg-slate-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24 space-y-6">
          <h2 className="text-purple-600 dark:text-yellow-400 font-black uppercase tracking-[0.4em] text-sm">Simple Packages</h2>
          <h3 className="text-7xl font-black text-slate-900 dark:text-white uppercase tracking-tighter italic">Transparent Rates</h3>
          
          <div className="inline-flex p-2 bg-slate-100 dark:bg-slate-800 border-4 border-slate-900 dark:border-slate-700 rounded-3xl mt-10 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <button 
              onClick={() => setIsIndividual(true)}
              className={`px-10 py-4 rounded-2xl font-black uppercase tracking-widest text-sm transition-all ${isIndividual ? 'bg-purple-600 text-white shadow-xl' : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'}`}
            >
              📍 Individual
            </button>
            <button 
              onClick={() => setIsIndividual(false)}
              className={`px-10 py-4 rounded-2xl font-black uppercase tracking-widest text-sm transition-all ${!isIndividual ? 'bg-orange-500 text-white shadow-xl' : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'}`}
            >
              📍 Group (3-5)
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {isIndividual ? (
            <>
              <PriceCard title="Pack 1: Test" price="23" desc="1 Hour Session" feature="Level Assessment" color="yellow" />
              <PriceCard title="Pack 2: Standard" price="25" desc="1 Hour Session" feature="Tailored Roadmap" color="orange" />
              <PriceCard title="Pack 3: Weekly" price="65" desc="3 Hours Total" feature="Save £10 Weekly" color="purple" highlight />
              <PriceCard title="Pack 4: Monthly" price="180" desc="8 Hours Total" feature="2 Hours / Week" color="blue" />
            </>
          ) : (
            <>
              <PriceCard title="Pack 1 Group" price="20" desc="Per Student" feature="3 Person Minimum" color="yellow" />
              <PriceCard title="Pack 2 Group" price="20" desc="Per Student" feature="3 Person Minimum" color="orange" />
              <PriceCard title="Pack 3 Group" price="55" desc="Per Student" feature="3 Person Minimum" color="purple" highlight />
              <PriceCard title="Pack 4 Group" price="150" desc="Per Student" feature="3 Person Minimum" color="blue" />
            </>
          )}
        </div>

        <div className="mt-20 p-12 bg-slate-900 text-white rounded-[4rem] border-8 border-purple-600 shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-purple-600 rotate-45 transform translate-x-16 -translate-y-16" />
          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h4 className="text-4xl font-black uppercase tracking-tighter italic text-yellow-400 mb-4">Group Discounts on All Bundles</h4>
              <p className="text-lg font-bold text-slate-400 mb-6">Bring your own group (Min 3 students). Max 5 students per session for focused attention.</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-black uppercase text-xs tracking-[0.2em]">
                <li className="flex items-center gap-2"><CheckCircle className="text-yellow-400" size={16} /> Maths / Physics</li>
                <li className="flex items-center gap-2"><CheckCircle className="text-yellow-400" size={16} /> IT / Computing</li>
                <li className="flex items-center gap-2"><CheckCircle className="text-yellow-400" size={16} /> Statistics</li>
                <li className="flex items-center gap-2"><CheckCircle className="text-yellow-400" size={16} /> All Levels Covered</li>
              </ul>
            </div>
            <div className="text-center md:text-right">
              <a href="mailto:j.hasan@dataxense.co.uk" className="inline-block px-12 py-6 bg-yellow-400 text-slate-900 rounded-full text-2xl font-black uppercase tracking-widest hover:scale-105 hover:bg-yellow-300 transition-all shadow-[8px_8px_0px_0px_rgba(255,255,255,0.2)]">
                Email to Group Book
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
    <div className={`p-10 rounded-[3rem] border-8 ${colors[color]} shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transition-all hover:-translate-y-4 hover:shadow-[20px_20px_0px_0px_rgba(0,0,0,1)] group ${highlight ? 'scale-105 z-10' : ''}`}>
      <h4 className="text-2xl font-black uppercase tracking-tighter mb-2 italic">{title}</h4>
      <p className="text-xs font-black uppercase tracking-widest opacity-60 mb-8">{desc}</p>
      <div className="flex items-baseline gap-1 mb-8">
        <span className="text-6xl font-black tracking-tighter italic">£{price}</span>
        <span className="font-bold text-sm uppercase">/ Session</span>
      </div>
      <div className="h-1 w-full bg-current opacity-20 rounded-full mb-8" />
      <p className="text-sm font-black uppercase tracking-widest mb-10 flex items-center gap-2">
        <CheckCircle size={18} /> {feature}
      </p>
      <a 
        href="mailto:j.hasan@dataxense.co.uk" 
        className={`block w-full py-4 text-center rounded-2xl font-black uppercase tracking-widest text-xs transition-all ${color === 'yellow' ? 'bg-slate-900 text-white hover:bg-slate-800' : 'bg-white text-slate-900 hover:bg-slate-50 shadow-lg'}`}
      >
        Select Pack
      </a>
    </div>
  );
};

const Contact = () => (
  <section id="contact" className="py-32 bg-slate-900 dark:bg-black transition-colors relative">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="grid lg:grid-cols-2 gap-24 items-center">
        <div className="space-y-10">
          <div className="inline-block px-4 py-2 bg-yellow-400 text-slate-900 text-xs font-black uppercase tracking-widest rounded-lg">Get In Touch</div>
          <h3 className="text-6xl md:text-8xl font-black text-white uppercase tracking-tighter leading-[0.85] italic">Start Your <br/> Journey</h3>
          <p className="text-2xl font-bold text-slate-400">Ready for a free 15-minute call or your first test session? Drop me an email or a WhatsApp message.</p>
          
          <div className="space-y-8 pt-8">
             <a href="mailto:j.hasan@dataxense.co.uk" className="flex items-center gap-6 group">
                <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center text-slate-900 group-hover:bg-yellow-400 group-hover:rotate-12 transition-all shadow-xl">
                   <Mail size={40} />
                </div>
                <div className="space-y-1">
                   <p className="text-xs font-black uppercase tracking-widest text-slate-500">Email Me Directly</p>
                   <p className="text-2xl sm:text-3xl font-black text-white group-hover:text-yellow-400 transition-colors">j.hasan@dataxense.co.uk</p>
                </div>
             </a>
             <a href="https://wa.me/447424433431" target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 group">
                <div className="w-20 h-20 bg-green-500 rounded-3xl flex items-center justify-center text-white group-hover:bg-yellow-400 group-hover:-rotate-12 transition-all shadow-xl">
                   <MessageSquare size={40} />
                </div>
                <div className="space-y-1">
                   <p className="text-xs font-black uppercase tracking-widest text-slate-500">WhatsApp Only</p>
                   <p className="text-3xl font-black text-white group-hover:text-yellow-400 transition-colors">+44 7424 433431</p>
                </div>
             </a>
          </div>
        </div>
        
        <div className="relative">
          <div className="p-16 bg-purple-600 rounded-[5rem] border-8 border-white text-white shadow-[20px_20px_0px_0px_rgba(255,215,0,1)] transform -rotate-3 hover:rotate-0 transition-transform">
             <Star size={64} className="mb-10 text-yellow-400 fill-yellow-400" />
             <h4 className="text-4xl font-black uppercase tracking-tighter italic mb-6">Expert Guidance is just an email away.</h4>
             <p className="text-xl font-bold italic opacity-90">"I reply fastest to drop-in emails. Let's build your STEM future together."</p>
             <div className="mt-12 flex gap-4">
                <div className="px-6 py-3 bg-white text-slate-900 font-black uppercase text-xs tracking-widest rounded-full">No Contact Forms</div>
                <div className="px-6 py-3 bg-slate-900 text-white font-black uppercase text-xs tracking-widest rounded-full">Direct Access</div>
             </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-white dark:bg-slate-950 py-24 border-t-8 border-slate-900 dark:border-slate-800">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="flex items-center gap-4">
           <div className="w-16 h-16 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-2xl flex items-center justify-center font-black text-3xl">W</div>
           <span className="text-5xl font-black text-slate-900 dark:text-white italic tracking-tighter">Dr WOW</span>
        </div>
        <div className="flex flex-wrap justify-center gap-10">
           {['Home', 'About', 'Subjects', 'Pricing', 'Consultancy', 'Contact'].map(link => (
             <a key={link} href={`#${link.toLowerCase()}`} className="text-slate-900 dark:text-white hover:text-purple-600 dark:hover:text-yellow-400 font-black uppercase tracking-[0.2em] text-sm transition-all">{link}</a>
           ))}
        </div>
      </div>
      <div className="mt-20 pt-10 border-t-2 border-slate-100 dark:border-slate-800 text-center">
         <p className="text-slate-400 font-black uppercase tracking-[0.5em] text-[10px]">© {new Date().getFullYear()} Dr WOW Tutoring | Aberdeen & Online Worldwide</p>
      </div>
    </div>
  </footer>
);

export default function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen font-sans antialiased selection:bg-yellow-400 selection:text-slate-900 transition-colors">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Hero />
      <About />
      <Subjects />
      <Consultancy />
      <Pricing />
      <Contact />
      <Footer />
      
      {/* Floating NEON Button */}
      <a 
        href="https://wa.me/447424433431" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-[60] w-20 h-20 bg-green-500 rounded-full border-4 border-slate-900 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center text-white hover:scale-110 active:scale-95 transition-all"
      >
        <MessageSquare size={36} />
      </a>
    </div>
  );
}
