
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Hero3D from './components/Hero3D';
import { ProjectCard } from './components/ProjectCard';
import { PERSONAL_INFO, PROJECTS, SKILLS, EDUCATION, VOLUNTEERING, WORK_EXPERIENCE, ACHIEVEMENTS } from './constants';
import { Project } from './types';
import { 
  Search, 
  Files, 
  GitGraph, 
  Menu, 
  X, 
  Download, 
  Mail, 
  Github, 
  Linkedin, 
  Code,
  Trophy,
  ExternalLink,
  ChevronRight,
  ChevronDown,
  Terminal,
  Play,
  Briefcase,
  GraduationCap,
  Heart,
  Award,
  Hash,
  Braces,
  Cpu,
  Monitor,
  Eye,
  CheckCircle,
  FileText,
  Server,
  Database,
  Phone,
  MessageCircle
} from 'lucide-react';

function App() {
  const [activeTab, setActiveTab] = useState('Profile');
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [activeSection, setActiveSection] = useState<'explorer' | 'search' | 'git' | 'extensions' | 'settings'>('explorer');
  const [searchQuery, setSearchQuery] = useState('');
  const [openTabs, setOpenTabs] = useState<string[]>(['Profile', 'Projects', 'Experience', 'Skills']);
  const [expandedCategories, setExpandedCategories] = useState<string[]>(SKILLS.map(s => s.name));
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Initial Responsive check
  useEffect(() => {
    if (window.innerWidth < 768) {
      setSidebarOpen(false);
    }
  }, []);

  // Merge and sort experience
  const sortedExperience = [...WORK_EXPERIENCE, ...VOLUNTEERING, ...EDUCATION, ...ACHIEVEMENTS].sort((a, b) => {
    const getYear = (period: string) => {
      // Extract year from "Month YYYY" or "YYYY"
      const match = period.match(/\d{4}/);
      return match ? parseInt(match[0]) : 0;
    };
    // Sort descending (newest first)
    return getYear(b.period) - getYear(a.period);
  });

  const filteredProjects = PROJECTS.filter(p => 
    p.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    p.techStack.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const handleDownloadCV = () => {
    window.open("https://drive.google.com/file/d/17BI99vV1DuCXe9KdSI8SM5AzE5Hfueeq/view?usp=sharing", "_blank");
  };

  const handleContact = () => {
    window.open("https://mail.google.com/mail/?view=cm&fs=1&to=div.ahmedhazam@gmail.com", "_blank");
  };

  const toggleCategory = (name: string) => {
    if (expandedCategories.includes(name)) {
      setExpandedCategories(expandedCategories.filter(c => c !== name));
    } else {
      setExpandedCategories([...expandedCategories, name]);
    }
  };

  const handleCloseTab = (e: React.MouseEvent, tab: string) => {
    e.stopPropagation();
    const newTabs = openTabs.filter(t => t !== tab);
    setOpenTabs(newTabs);
    
    if (activeTab === tab) {
      if (newTabs.length > 0) {
        setActiveTab(newTabs[newTabs.length - 1]);
      } else {
        setActiveTab('');
      }
    }
  };

  const handleOpenSection = (section: string) => {
    if (!openTabs.includes(section)) {
      setOpenTabs([...openTabs, section]);
    }
    setActiveTab(section);
    // On mobile, close sidebar after selection
    if (window.innerWidth < 768) {
      setSidebarOpen(false);
    }
  };

  return (
    <div className="flex h-screen w-screen bg-[#0B1120] text-[#cccccc] overflow-hidden font-sans select-none">
      
      {/* ACTIVITY BAR (Leftmost vertical strip) */}
      <div className="w-12 flex-shrink-0 flex flex-col items-center py-4 bg-[#1e1e1e] border-r border-[#333333] z-50">
        <div className="flex flex-col gap-6">
          <button onClick={() => { setActiveSection('explorer'); setSidebarOpen(true); }} className={`p-2 rounded-md transition-colors ${activeSection === 'explorer' && isSidebarOpen ? 'text-white border-l-2 border-white' : 'text-[#858585] hover:text-white'}`}>
            <Files size={24} strokeWidth={1.5} />
          </button>
          <button onClick={() => { setActiveSection('search'); setSidebarOpen(true); }} className={`p-2 rounded-md transition-colors ${activeSection === 'search' && isSidebarOpen ? 'text-white border-l-2 border-white' : 'text-[#858585] hover:text-white'}`}>
            <Search size={24} strokeWidth={1.5} />
          </button>
          <button onClick={() => { setActiveSection('git'); handleOpenSection('Experience'); }} className={`p-2 rounded-md transition-colors ${activeSection === 'git' ? 'text-white border-l-2 border-white' : 'text-[#858585] hover:text-white'}`}>
            <GitGraph size={24} strokeWidth={1.5} />
          </button>
          <button onClick={() => { setActiveSection('extensions'); handleOpenSection('Skills'); }} className={`p-2 rounded-md transition-colors ${activeSection === 'extensions' ? 'text-white border-l-2 border-white' : 'text-[#858585] hover:text-white'}`}>
            <Cpu size={24} strokeWidth={1.5} />
          </button>
          
          <div className="h-[1px] w-8 bg-[#333333] my-2"></div>
           
           {/* Social Shortcuts */}
           <a href={PERSONAL_INFO.socials.github} target="_blank" rel="noopener noreferrer" className="text-[#858585] hover:text-white p-2">
             <Github size={20} />
           </a>
           <a href={PERSONAL_INFO.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-[#858585] hover:text-[#0077b5] p-2">
             <Linkedin size={20} />
           </a>
           <a href={PERSONAL_INFO.socials.codeforces} target="_blank" rel="noopener noreferrer" className="text-[#858585] hover:text-[#f39c12] p-2">
             <Trophy size={20} />
           </a>
           <a href={PERSONAL_INFO.socials.leetcode} target="_blank" rel="noopener noreferrer" className="text-[#858585] hover:text-[#fbbf24] p-2">
             <Code size={20} />
           </a>
        </div>
      </div>

      {/* SIDEBAR (Explorer / Search) - Overlay on Mobile, Relative on Desktop */}
      <AnimatePresence initial={false}>
        {isSidebarOpen && (
          <motion.div 
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: 260, opacity: 1 }}
            exit={{ width: 0, opacity: 0 }}
            className="absolute md:relative left-12 md:left-0 h-full bg-[#181818] border-r border-[#2b2b2b] flex flex-col z-40 shadow-2xl md:shadow-none"
          >
            <div className="p-3 text-[11px] font-bold tracking-wider text-[#bbbbbb] uppercase flex justify-between items-center">
              {activeSection === 'search' ? 'Search' : 'Explorer'}
              <button onClick={() => setSidebarOpen(false)} className="hover:bg-[#333333] p-1 rounded"><X size={14}/></button>
            </div>

            {activeSection === 'search' ? (
              <div className="p-3">
                <div className="relative mb-4">
                    <input 
                        type="text" 
                        placeholder="Search projects..." 
                        value={searchQuery}
                        onChange={(e) => {
                            setSearchQuery(e.target.value);
                            handleOpenSection('Projects');
                        }}
                        className="w-full bg-[#3c3c3c] border border-[#3c3c3c] focus:border-[#007acc] text-sm text-[#cccccc] px-2 py-1 outline-none"
                    />
                </div>
                <div className="text-xs text-[#cccccc]">
                    {filteredProjects.length} results found
                </div>
              </div>
            ) : (
                <div className="flex-1 overflow-y-auto">
                <div className="px-2">
                    <div className="flex items-center gap-1 py-1 text-[#cccccc] text-sm font-bold cursor-pointer bg-[#37373d] mb-1">
                        <ChevronDown size={14} /> PORTFOLIO
                    </div>
                    <div className="pl-2 flex flex-col">
                        {['Profile', 'Projects', 'Experience', 'Skills'].map(item => {
                            let Icon = FileText;
                            let color = 'text-[#569cd6]'; // default ts blue
                            let ext = '.md';
                            
                            if(item === 'Projects') { Icon = Braces; color='text-[#e67e22]'; ext='.cs'; }
                            if(item === 'Experience') { Icon = GitGraph; color='text-[#f1c40f]'; ext='.git'; }
                            if(item === 'Skills') { Icon = Hash; color='text-[#e74c3c]'; ext='.json'; }
                            
                            return (
                                <div 
                                    key={item}
                                    onClick={() => handleOpenSection(item)}
                                    className={`flex items-center gap-1.5 py-1 px-2 cursor-pointer text-[13px] hover:bg-[#2a2d2e] ${activeTab === item ? 'bg-[#37373d] text-white' : 'text-[#cccccc]'}`}
                                >
                                    <Icon size={14} className={color} />
                                    <span>{item}{ext}</span>
                                </div>
                            );
                        })}
                    </div>
                </div>
                </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* MAIN CONTENT AREA */}
      <div className="flex-1 flex flex-col relative h-full bg-[#1e1e1e] overflow-hidden min-w-0">
        
        {/* TOP TABS */}
        <div className="h-9 bg-[#1e1e1e] flex items-end overflow-x-auto scrollbar-hide border-b border-[#2b2b2b]">
           {!isSidebarOpen && (
               <button onClick={() => setSidebarOpen(true)} className="h-full px-3 text-[#858585] hover:text-white border-r border-[#2b2b2b] flex-shrink-0">
                   <Menu size={16} />
               </button>
           )}
           {openTabs.map(tab => {
               let ext = '.md';
               if(tab === 'Projects') ext='.cs';
               if(tab === 'Experience') ext='.git';
               if(tab === 'Skills') ext='.json';

               return (
                <div 
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`group h-full px-3 min-w-[100px] md:min-w-[120px] max-w-[150px] md:max-w-[200px] flex items-center justify-between gap-2 text-[13px] cursor-pointer border-r border-[#2b2b2b] select-none flex-shrink-0 ${activeTab === tab ? 'bg-[#1e1e1e] text-white border-t-2 border-t-[#007acc]' : 'bg-[#2d2d2d] text-[#969696]'}`}
                >
                    <div className="flex items-center gap-1.5 truncate">
                        {tab === 'Profile' && <FileText size={14} className="text-[#569cd6] flex-shrink-0" />}
                        {tab === 'Projects' && <Braces size={14} className="text-[#e67e22] flex-shrink-0" />}
                        {tab === 'Experience' && <GitGraph size={14} className="text-[#f1c40f] flex-shrink-0" />}
                        {tab === 'Skills' && <Hash size={14} className="text-[#e74c3c] flex-shrink-0" />}
                        <span className="truncate">{tab}{ext}</span>
                    </div>
                    <div 
                        onClick={(e) => handleCloseTab(e, tab)}
                        className={`p-0.5 rounded-md hover:bg-[#4a4a4a] ${activeTab === tab ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}
                    >
                        <X size={12} />
                    </div>
                </div>
               );
           })}
        </div>

        {/* EDITOR CONTENT */}
        <div className="flex-1 relative overflow-hidden bg-[#1e1e1e]">
            {openTabs.length === 0 ? (
                <div className="h-full w-full flex flex-col items-center justify-center text-[#858585] gap-4 p-4 text-center">
                    <div className="w-48 h-48 md:w-64 md:h-64 opacity-20 bg-no-repeat bg-center" style={{backgroundImage: "url('https://github.com/AhmedHazem02.png')", backgroundSize: 'cover', borderRadius: '50%'}}></div>
                    <p className="text-sm">Select a file from the explorer to view</p>
                    <div className="flex flex-wrap justify-center gap-4 text-xs">
                        <span className="bg-[#2d2d2d] px-2 py-1 rounded">CMD + P to Search</span>
                        <span className="bg-[#2d2d2d] px-2 py-1 rounded">CMD + SHIFT + F to Find</span>
                    </div>
                </div>
            ) : (
                <>
                {/* 3D Background only visible on specific tabs or dimmed */}
                <div className={`absolute inset-0 pointer-events-none transition-opacity duration-500 ${activeTab === 'Profile' ? 'opacity-100' : 'opacity-20'}`}>
                    <Hero3D />
                </div>

                <div className="absolute inset-0 overflow-y-auto custom-scrollbar p-4 md:p-6 z-10">
                    
                    {/* PROFILE TAB */}
                    {activeTab === 'Profile' && (
                        <motion.div initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} className="max-w-4xl mx-auto mt-4 md:mt-10">
                            <div className="glass-panel p-6 md:p-8 rounded-lg shadow-2xl relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-4 opacity-10 hidden md:block">
                                    <Files size={120} />
                                </div>
                                <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center md:items-start relative z-10">
                                    <div className="relative group shrink-0">
                                        <div className="w-28 h-28 md:w-32 md:h-32 rounded-full border-2 border-[#007acc] overflow-hidden shadow-[0_0_20px_rgba(0,122,204,0.3)]">
                                            <img src={PERSONAL_INFO.profilePic} alt="Ahmed Hazem" className="w-full h-full object-cover" />
                                        </div>
                                        <div className="absolute bottom-1 right-1 w-4 h-4 bg-green-500 border-2 border-[#1e1e1e] rounded-full" title="Open to Work"></div>
                                    </div>
                                    
                                    <div className="flex-1 text-center md:text-left">
                                        <div className="flex flex-col md:flex-row items-center gap-3 mb-2">
                                            <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                                                {PERSONAL_INFO.name}
                                            </h1>
                                            <span className="px-2 py-0.5 bg-[#0e2a35] text-[#38bdf8] text-xs border border-[#38bdf8]/30 rounded-full font-mono">
                                                Backend Developer @ Xfuse
                                            </span>
                                        </div>
                                        <h2 className="text-lg md:text-xl text-[#007acc] font-mono mb-4 flex items-center justify-center md:justify-start gap-2">
                                            <Terminal size={18} /> {PERSONAL_INFO.title}
                                        </h2>
                                        
                                        <p className="text-[#a1a1aa] leading-7 mb-4 max-w-2xl text-sm md:text-base">
                                            Passionate .NET Developer specialized in building robust, scalable APIs and backend systems.
                                            Currently working as a Back-End Developer at Xfuse, and previously led backend initiatives at Sohag University's Smart Team.
                                            Expert in <span className="text-[#dcdcaa]">Clean Architecture</span> and <span className="text-[#ce9178]">SQL Optimization</span>.
                                        </p>

                                        {/* Contact Info Row */}
                                        <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-6 text-xs md:text-sm font-mono text-[#858585]">
                                            <div className="flex items-center gap-1.5">
                                                <Mail size={14} className="text-[#569cd6]" /> 
                                                <span className="select-all">{PERSONAL_INFO.email.replace('mailto:', '')}</span>
                                            </div>
                                            <div className="flex items-center gap-1.5">
                                                <Phone size={14} className="text-[#569cd6]" />
                                                <span className="select-all">{PERSONAL_INFO.phone}</span>
                                            </div>
                                        </div>
                                        
                                        <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-6">
                                            <button onClick={handleDownloadCV} className="px-4 py-2 bg-[#007acc] hover:bg-[#0062a3] text-white rounded text-sm font-medium flex items-center gap-2 transition-colors">
                                                <Download size={16} /> Download Resume (PDF)
                                            </button>
                                            <button onClick={handleContact} className="px-4 py-2 bg-[#2d2d2d] hover:bg-[#3d3d3d] text-white rounded text-sm font-medium flex items-center gap-2 transition-colors border border-[#3e3e42]">
                                                <Mail size={16} /> Contact Me
                                            </button>
                                        </div>

                                        {/* SECTION 1: CODING PROFILES (Technical Proof) */}
                                        <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-3 pt-4 border-t border-[#333333]">
                                            <span className="text-xs text-[#858585] uppercase tracking-wider font-bold md:w-28 text-center md:text-left">Coding Activity:</span>
                                            <div className="flex gap-2">
                                                <a href={PERSONAL_INFO.socials.github} target="_blank" rel="noopener noreferrer" className="p-2 bg-[#252526] hover:bg-[#37373d] rounded border border-[#333333] text-[#cccccc] hover:text-white transition-colors" title="GitHub">
                                                    <Github size={18} />
                                                </a>
                                                <a href={PERSONAL_INFO.socials.codeforces} target="_blank" rel="noopener noreferrer" className="p-2 bg-[#252526] hover:bg-[#37373d] rounded border border-[#333333] text-[#f39c12] transition-colors" title="Codeforces">
                                                    <Trophy size={18} />
                                                </a>
                                                <a href={PERSONAL_INFO.socials.leetcode} target="_blank" rel="noopener noreferrer" className="p-2 bg-[#252526] hover:bg-[#37373d] rounded border border-[#333333] text-[#fbbf24] transition-colors" title="LeetCode">
                                                    <Code size={18} />
                                                </a>
                                            </div>
                                        </div>

                                        {/* SECTION 2: SOCIALS (Connect) */}
                                        <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-3 mt-3">
                                            <span className="text-xs text-[#858585] uppercase tracking-wider font-bold md:w-28 text-center md:text-left">Socials:</span>
                                            <div className="flex gap-2">
                                                <a href={PERSONAL_INFO.socials.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 bg-[#252526] hover:bg-[#37373d] rounded border border-[#333333] text-[#0077b5] transition-colors" title="LinkedIn">
                                                    <Linkedin size={18} />
                                                </a>
                                                <a href={PERSONAL_INFO.socials.whatsapp} target="_blank" rel="noopener noreferrer" className="p-2 bg-[#252526] hover:bg-[#37373d] rounded border border-[#333333] text-[#25D366] transition-colors" title="WhatsApp">
                                                    <MessageCircle size={18} />
                                                </a>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {/* PROJECTS TAB */}
                    {activeTab === 'Projects' && (
                        <div className="max-w-7xl mx-auto pb-8">
                            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                                <Braces className="text-[#e67e22]" /> Projects <span className="text-sm font-normal text-[#858585] font-mono">({filteredProjects.length})</span>
                            </h2>
                            {filteredProjects.length === 0 ? (
                                <div className="text-[#858585] italic">No projects found matching "{searchQuery}"</div>
                            ) : (
                                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                                    {filteredProjects.map((project) => (
                                        <div key={project.title} className="h-[400px]">
                                            <ProjectCard project={project} onClick={() => setSelectedProject(project)} />
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    )}

                    {/* EXPERIENCE TAB (Git Graph) */}
                    {activeTab === 'Experience' && (
                        <div className="max-w-4xl mx-auto pb-8">
                            <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                                <GitGraph className="text-[#f1c40f]" /> Career Timeline <span className="text-sm font-normal text-[#858585] font-mono">(main branch)</span>
                            </h2>
                            
                            <div className="relative pl-6 md:pl-8 border-l-2 border-[#333333] ml-2 md:ml-4 space-y-12">
                                {sortedExperience.map((item, index) => {
                                    const isWork = item.type === 'Work';
                                    const isEdu = item.type === 'Education' || item.type === 'Certificate';
                                    const color = isWork ? '#2ecc71' : isEdu ? '#9b59b6' : '#3498db';
                                    const Icon = isWork ? Briefcase : isEdu ? GraduationCap : Heart;

                                    return (
                                        <motion.div 
                                            key={index}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.1 }}
                                            className="relative"
                                        >
                                            {/* Git Commit Dot */}
                                            <div 
                                                className="absolute -left-[33px] md:-left-[41px] top-1 w-4 h-4 md:w-5 md:h-5 rounded-full border-4 border-[#1e1e1e]"
                                                style={{ backgroundColor: color }}
                                            ></div>
                                            
                                            <div className="glass-panel p-4 md:p-6 rounded-lg border-l-4" style={{borderLeftColor: color}}>
                                                <div className="flex flex-col md:flex-row justify-between items-start mb-2 gap-2 md:gap-0">
                                                    <div>
                                                        <h3 className="text-lg md:text-xl font-bold text-white flex items-center gap-2 flex-wrap">
                                                            {item.role}
                                                        </h3>
                                                        <div className="flex items-center gap-2 text-[#007acc] font-mono text-sm mt-1">
                                                            <Icon size={14} /> @ {item.company}
                                                        </div>
                                                    </div>
                                                    <span className="text-xs font-mono text-[#858585] bg-[#252526] px-2 py-1 rounded whitespace-nowrap">
                                                        {item.period}
                                                    </span>
                                                </div>
                                                
                                                {item.description && (
                                                    <ul className="list-disc list-inside text-[#cccccc] text-sm leading-relaxed mt-4 space-y-1">
                                                        {item.description.map((desc, i) => (
                                                            <li key={i}>{desc}</li>
                                                        ))}
                                                    </ul>
                                                )}

                                                {item.link && (
                                                    <a href={item.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 mt-4 text-xs font-medium text-[#38bdf8] hover:text-[#7dd3fc] hover:underline transition-colors">
                                                        <Award size={14} /> View Certificate <ExternalLink size={12} />
                                                    </a>
                                                )}
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </div>
                    )}

                    {/* SKILLS TAB (JSON IDE) */}
                    {activeTab === 'Skills' && (
                        <div className="max-w-4xl mx-auto font-mono text-sm pb-8">
                            <div className="bg-[#1e1e1e] p-1 rounded-t-md flex items-center gap-2 text-xs text-[#858585] border border-[#333333] border-b-0 w-fit px-4">
                                <span className="w-2 h-2 rounded-full bg-yellow-500"></span> package.json
                            </div>
                            <div className="bg-[#1e1e1e] border border-[#333333] rounded-b-md p-2 md:p-4 relative shadow-2xl overflow-hidden">
                                <div className="absolute left-0 top-0 bottom-0 w-8 md:w-12 bg-[#1e1e1e] border-r border-[#333333] flex flex-col items-end pr-2 py-4 text-[#858585] select-none z-10 text-[10px] md:text-[11px]">
                                    {Array.from({length: 35}).map((_, i) => <div key={i} className="leading-6">{i+1}</div>)}
                                </div>
                                <div className="pl-10 md:pl-12 leading-6 overflow-x-auto">
                                    <div className="text-[#d4d4d4]">{'{'}</div>
                                    <div className="pl-2 md:pl-4 whitespace-nowrap">
                                        <span className="text-[#9cdcfe]">"name"</span>: <span className="text-[#ce9178]">"ahmed-hazem-portfolio"</span>,
                                    </div>
                                    <div className="pl-2 md:pl-4 whitespace-nowrap">
                                        <span className="text-[#9cdcfe]">"version"</span>: <span className="text-[#ce9178]">"1.0.0"</span>,
                                    </div>
                                    <div className="pl-2 md:pl-4 whitespace-nowrap">
                                        <span className="text-[#9cdcfe]">"skills"</span>: <span className="text-[#d4d4d4]">{'{'}</span>
                                    </div>
                                    
                                    {SKILLS.map((category, idx) => (
                                        <div key={category.name} className="pl-4 md:pl-8 relative group">
                                            {/* Indentation Guide */}
                                            <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-[#404040]"></div>
                                            
                                            <div className="flex items-center gap-2 cursor-pointer hover:bg-[#2a2d2e] -ml-2 md:-ml-4 pl-2 md:pl-4 rounded whitespace-nowrap" onClick={() => toggleCategory(category.name)}>
                                                <ChevronRight size={14} className={`text-[#858585] transition-transform ${expandedCategories.includes(category.name) ? 'rotate-90' : ''}`} />
                                                <span className="text-[#9cdcfe]">"{category.name}"</span>: <span className="text-[#d4d4d4]">{expandedCategories.includes(category.name) ? '[' : '[...] ,'}</span>
                                            </div>

                                            <AnimatePresence>
                                            {expandedCategories.includes(category.name) && (
                                                <motion.div 
                                                    initial={{height: 0, opacity: 0}}
                                                    animate={{height: 'auto', opacity: 1}}
                                                    exit={{height: 0, opacity: 0}}
                                                    className="overflow-hidden"
                                                >
                                                    {category.skills.map((skill, sIdx) => (
                                                        <div key={skill} className="pl-4 md:pl-8 relative group/skill py-0.5 whitespace-nowrap">
                                                            <span className="text-[#ce9178] hover:underline cursor-help peer">"{skill}"</span>
                                                            {sIdx < category.skills.length - 1 && <span className="text-[#d4d4d4]">,</span>}
                                                            
                                                            {/* IntelliSense Tooltip - Fixed position for mobile to avoid clipping */}
                                                            <div className="fixed md:absolute md:left-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:top-0 md:translate-x-0 md:translate-y-0 md:ml-4 hidden group-hover/skill:block z-50 w-64 bg-[#252526] border border-[#454545] shadow-xl rounded p-3">
                                                                <div className="flex items-center gap-2 mb-2 pb-2 border-b border-[#333333]">
                                                                    <div className="text-[#9cdcfe] font-bold">{skill}</div>
                                                                    <div className="text-[10px] text-[#858585] ml-auto">Verified</div>
                                                                </div>
                                                                <div className="text-xs text-[#cccccc] mb-2">Proficiency Level</div>
                                                                <div className="h-1.5 w-full bg-[#333333] rounded-full overflow-hidden">
                                                                    <div className="h-full bg-[#007acc]" style={{width: `${Math.random() * 20 + 80}%`}}></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </motion.div>
                                            )}
                                            </AnimatePresence>
                                            
                                            {expandedCategories.includes(category.name) && (
                                                <div className="pl-2 md:pl-4">
                                                    <span className="text-[#d4d4d4]">]{idx < SKILLS.length - 1 ? ',' : ''}</span>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                    
                                    <div className="pl-2 md:pl-4">
                                        <span className="text-[#d4d4d4]">{'}'}</span>
                                    </div>
                                    <div className="text-[#d4d4d4]">{'}'}</div>
                                </div>
                            </div>
                        </div>
                    )}
                    
                </div>
                </>
            )}
        </div>

        {/* STATUS BAR */}
        <div className="h-6 bg-[#007acc] text-white flex items-center justify-between px-3 text-[11px] select-none z-50">
            <div className="flex items-center gap-4">
                <div className="flex items-center gap-1"><GitGraph size={12}/> <span>main</span></div>
                <div className="flex items-center gap-1 hidden md:flex"><CheckCircle size={12}/> <span>0 errors</span></div>
                <div className="flex items-center gap-1"><Cpu size={12}/> <span>Ready</span></div>
            </div>
            <div className="flex items-center gap-4">
                <div className="flex items-center gap-1 hidden md:flex"><span>Ln 12, Col 45</span></div>
                <div className="flex items-center gap-1 hidden md:flex"><span>UTF-8</span></div>
                <div className="flex items-center gap-1"><span>C#</span></div>
                <div className="flex items-center gap-1 hidden md:flex"><Monitor size={12}/> <span>Port: 3000</span></div>
            </div>
        </div>
      </div>

      {/* PROJECT DETAIL OVERLAY */}
      <AnimatePresence>
        {selectedProject && (
             <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="fixed inset-0 z-[100] flex items-center justify-center p-0 md:p-10 bg-black/80 backdrop-blur-sm"
                onClick={() => setSelectedProject(null)}
             >
                <div 
                    className="w-full h-full md:max-w-6xl bg-[#1e1e1e] border border-[#333333] md:rounded-lg shadow-2xl flex flex-col md:flex-row overflow-hidden"
                    onClick={e => e.stopPropagation()}
                >
                    {/* LEFT: Documentation (Scrollable) */}
                    <div className="w-full md:w-1/3 bg-[#252526] border-b md:border-b-0 md:border-r border-[#333333] flex flex-col order-1 md:order-none max-h-[50%] md:max-h-full">
                        <div className="p-4 md:p-6 border-b border-[#333333] flex justify-between items-start shrink-0">
                            <div>
                                <h2 className="text-xl md:text-2xl font-bold text-white mb-1">{selectedProject.title}</h2>
                                <span className="text-[#007acc] font-mono text-xs bg-[#007acc]/10 px-2 py-0.5 rounded border border-[#007acc]/20">
                                    {selectedProject.type} Application
                                </span>
                            </div>
                            <button onClick={() => setSelectedProject(null)} className="text-[#858585] hover:text-white p-1">
                                <X size={24} />
                            </button>
                        </div>
                        
                        <div className="p-4 md:p-6 overflow-y-auto flex-1 custom-scrollbar">
                            <h3 className="text-sm font-bold text-[#cccccc] uppercase tracking-wider mb-2 md:mb-3">Description</h3>
                            <p className="text-[#9d9d9d] text-sm leading-6 mb-4 md:mb-6">
                                {selectedProject.description}
                            </p>

                            <h3 className="text-sm font-bold text-[#cccccc] uppercase tracking-wider mb-2 md:mb-3">Tech Stack</h3>
                            <div className="flex flex-wrap gap-2 mb-4 md:mb-6">
                                {selectedProject.techStack.map(tech => (
                                    <span key={tech} className="px-2 py-1 bg-[#2d2d2d] text-[#d4d4d4] text-xs rounded border border-[#3e3e42] font-mono">
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="mt-4">
                                {selectedProject.link && (
                                    <a 
                                        href={selectedProject.link} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="w-full flex items-center justify-center gap-2 bg-[#007acc] hover:bg-[#0062a3] text-white py-3 rounded text-sm font-medium transition-colors"
                                    >
                                        {selectedProject.link.includes('github.com') ? (
                                            <>
                                                <Github size={18} /> View Source Code
                                            </>
                                        ) : (
                                            <>
                                                <ExternalLink size={18} /> View Production
                                            </>
                                        )}
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* RIGHT: Preview / System Design */}
                    <div className="flex-1 bg-[#1e1e1e] flex flex-col relative order-2 md:order-none h-[50%] md:h-auto border-t md:border-t-0 border-[#333333]">
                        <div className="h-10 bg-[#2d2d2d] flex items-center px-4 border-b border-[#333333] shrink-0">
                            <span className="text-xs text-[#cccccc]">System_Architecture_Preview.png</span>
                        </div>
                        <div className="flex-1 flex items-center justify-center p-4 md:p-10 bg-[#1e1e1e] relative overflow-hidden">
                            {/* Animated Background Grid */}
                            <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(#4a4a4a 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
                            
                            {/* Simulated Architecture Diagram */}
                            <div className="relative z-10 flex flex-col items-center gap-4 md:gap-8 w-full max-w-lg transform scale-75 md:scale-100 origin-center">
                                <div className="flex gap-4 md:gap-8">
                                    <div className="w-20 h-20 md:w-24 md:h-24 bg-[#252526] border-2 border-[#007acc] rounded-lg flex flex-col items-center justify-center gap-2 shadow-[0_0_15px_rgba(0,122,204,0.2)]">
                                        <Monitor size={28} className="text-[#007acc]" />
                                        <span className="text-[10px] text-[#cccccc]">Client</span>
                                    </div>
                                    <div className="flex items-center">
                                        <div className="w-8 md:w-16 h-0.5 bg-[#4a4a4a] relative">
                                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-1 bg-[#1e1e1e] text-[8px] md:text-[9px] text-[#858585]">HTTPS</div>
                                        </div>
                                    </div>
                                    <div className="w-20 h-20 md:w-24 md:h-24 bg-[#252526] border-2 border-[#2ecc71] rounded-lg flex flex-col items-center justify-center gap-2 shadow-[0_0_15px_rgba(46,204,113,0.2)]">
                                        <Server size={28} className="text-[#2ecc71]" />
                                        <span className="text-[10px] text-[#cccccc]">API Gateway</span>
                                    </div>
                                </div>
                                
                                <div className="h-6 md:h-8 w-0.5 bg-[#4a4a4a]"></div>
                                
                                <div className="w-full h-24 md:h-32 bg-[#252526] border border-[#333333] border-dashed rounded-lg p-2 md:p-4 flex justify-around items-center relative">
                                    <span className="absolute top-1 left-2 text-[9px] md:text-[10px] text-[#858585]">Core Services</span>
                                    <div className="flex flex-col items-center gap-1">
                                        <Cpu size={20} className="text-[#e67e22]" />
                                        <span className="text-[9px] md:text-[10px]">Business Logic</span>
                                    </div>
                                    <div className="flex flex-col items-center gap-1">
                                        <Files size={20} className="text-[#9b59b6]" />
                                        <span className="text-[9px] md:text-[10px]">Data Access</span>
                                    </div>
                                </div>

                                <div className="h-6 md:h-8 w-0.5 bg-[#4a4a4a]"></div>

                                <div className="w-20 h-20 md:w-24 md:h-24 bg-[#252526] border-2 border-[#e74c3c] rounded-lg flex flex-col items-center justify-center gap-2 shadow-[0_0_15px_rgba(231,76,60,0.2)]">
                                    <Database size={28} className="text-[#e74c3c]" />
                                    <span className="text-[10px] text-[#cccccc]">Database</span>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
             </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}

export default App;
