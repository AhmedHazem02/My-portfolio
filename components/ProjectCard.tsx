
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Project } from '../types';
import { 
  GitBranch, Database, Layout, Terminal, Play, Eye, Code2, ExternalLink, 
  LayoutTemplate, Server, Cpu, Globe, Hexagon, Layers, Workflow, Shield, 
  Zap, Braces, FileCode, Box, Filter, Lock, Network, Palette, Component,
  Maximize2, CreditCard
} from 'lucide-react';

interface Props {
  project: Project;
  onClick?: () => void;
}

export const ProjectCard: React.FC<Props> = ({ project, onClick }) => {
  const [viewMode, setViewMode] = useState<'overview' | 'code' | 'details'>('overview');

  const getIcon = () => {
    switch (project.type) {
      case 'System': return <Server className="w-4 h-4 text-[#38bdf8]" />;
      case 'API': return <Database className="w-4 h-4 text-[#569cd6]" />;
      case 'MVC': return <Layout className="w-4 h-4 text-[#dcdcaa]" />;
      case 'Console': return <Terminal className="w-4 h-4 text-[#ce9178]" />;
      default: return <GitBranch className="w-4 h-4 text-gray-400" />;
    }
  };

  const getTechIcon = (tech: string) => {
    const t = tech.toLowerCase();
    
    // Languages
    if (t.includes('c#')) return <Code2 className="w-3 h-3 text-[#9b59b6]" />; // Purple
    if (t.includes('c++')) return <Code2 className="w-3 h-3 text-[#5e97d0]" />; // Blue
    if (t.includes('python')) return <Terminal className="w-3 h-3 text-[#ffe873]" />; // Yellow
    if (t.includes('html')) return <FileCode className="w-3 h-3 text-[#e34c26]" />; // Orange
    if (t.includes('css')) return <Palette className="w-3 h-3 text-[#264de4]" />; // Blue
    
    // Frameworks & Libraries
    if (t.includes('bootstrap')) return <Layout className="w-3 h-3 text-[#7952b3]" />; // Purple
    if (t.includes('entity') || t.includes('ef')) return <Database className="w-3 h-3 text-[#68217a]" />; // Purple
    if (t.includes('redis')) return <Zap className="w-3 h-3 text-[#dc382d]" />; // Red
    if (t.includes('react')) return <Cpu className="w-3 h-3 text-[#61dbfb]" />; // Cyan
    
    // Concepts / Patterns
    if (t.includes('oop')) return <Box className="w-3 h-3 text-[#e67e22]" />; // Orange
    if (t.includes('design pattern')) return <Workflow className="w-3 h-3 text-[#2ecc71]" />; // Green
    if (t.includes('clean architecture') || t.includes('clean')) return <Layers className="w-3 h-3 text-[#3498db]" />; // Blue
    if (t.includes('cqrs')) return <Workflow className="w-3 h-3 text-[#9b59b6]" />;
    if (t.includes('mvc')) return <LayoutTemplate className="w-3 h-3 text-[#e67e22]" />;
    if (t.includes('repo')) return <Component className="w-3 h-3 text-[#95a5a6]" />;
    
    // Data & Networking
    if (t.includes('sql') || t.includes('mssql')) return <Database className="w-3 h-3 text-[#e74c3c]" />; // Red
    if (t.includes('linq')) return <Filter className="w-3 h-3 text-[#27ae60]" />; // Green
    if (t.includes('api') || t.includes('webhook')) return <Globe className="w-3 h-3 text-[#3498db]" />; // Blue
    if (t.includes('jwt') || t.includes('token') || t.includes('auth') || t.includes('identity') || t.includes('security')) return <Lock className="w-3 h-3 text-[#f1c40f]" />; // Yellow
    if (t.includes('payment')) return <CreditCard className="w-3 h-3 text-[#2ecc71]" />; // Green
    if (t.includes('networking') || t.includes('distributed')) return <Network className="w-3 h-3 text-[#34495e]" />;
    if (t.includes('git')) return <GitBranch className="w-3 h-3 text-[#f1502f]" />;
    if (t.includes('injection') || t.includes('dependency')) return <Hexagon className="w-3 h-3 text-[#1abc9c]" />;
    
    // Default
    return <Terminal className="w-3 h-3 text-[#7f8c8d]" />;
  };

  // Helper to generate an array of JSX lines for perfect alignment with refined C# Highlighting
  const getCodeLines = () => {
    if (project.type === 'API' || project.type === 'System') {
      return [
        <span><span className="text-[#c586c0]">using</span> <span className="text-[#d4d4d4]">Microsoft.AspNetCore.Mvc;</span></span>,
        <span><span className="text-[#c586c0]">using</span> <span className="text-[#d4d4d4]">System.Threading.Tasks;</span></span>,
        <span></span>,
        <span><span className="text-[#569cd6]">namespace</span> <span className="text-[#d4d4d4]">Portfolio.Controllers</span></span>,
        <span className="text-[#d4d4d4]">{'{'}</span>,
        <span>    <span className="text-[#d4d4d4]">[</span><span className="text-[#4ec9b0]">ApiController</span><span className="text-[#d4d4d4]">]</span></span>,
        <span>    <span className="text-[#d4d4d4]">[</span><span className="text-[#4ec9b0]">Route</span><span className="text-[#d4d4d4]">(</span><span className="text-[#ce9178]">"api/[controller]"</span><span className="text-[#d4d4d4]">)]</span></span>,
        <span>    <span className="text-[#569cd6]">public class</span> <span className="text-[#4ec9b0]">ProjectsController</span> <span className="text-[#d4d4d4]">:</span> <span className="text-[#4ec9b0]">ControllerBase</span></span>,
        <span className="text-[#d4d4d4]">    {'{'}</span>,
        <span>        <span className="text-[#6a9955]">/// &lt;summary&gt;</span></span>,
        <span>        <span className="text-[#6a9955]">/// Retrieves details for {project.title}</span></span>,
        <span>        <span className="text-[#6a9955]">/// &lt;/summary&gt;</span></span>,
        <span>        <span className="text-[#d4d4d4]">[</span><span className="text-[#4ec9b0]">HttpGet</span><span className="text-[#d4d4d4]">(</span><span className="text-[#ce9178]">"{project.title.toLowerCase().replace(/\s/g, '-').substring(0, 15)}"</span><span className="text-[#d4d4d4]">)]</span></span>,
        <span>        <span className="text-[#569cd6]">public async</span> <span className="text-[#4ec9b0]">Task</span><span className="text-[#d4d4d4]">&lt;</span><span className="text-[#4ec9b0]">IActionResult</span><span className="text-[#d4d4d4]">&gt;</span> <span className="text-[#dcdcaa]">GetProject</span><span className="text-[#d4d4d4]">(</span><span className="text-[#569cd6]">int</span> <span className="text-[#9cdcfe]">id</span><span className="text-[#d4d4d4]">)</span></span>,
        <span className="text-[#d4d4d4]">        {'{'}</span>,
        <span>            <span className="text-[#c586c0]">try</span></span>,
        <span className="text-[#d4d4d4]">            {'{'}</span>,
        <span>                <span className="text-[#569cd6]">var</span> <span className="text-[#9cdcfe]">result</span> <span className="text-[#d4d4d4]">=</span> <span className="text-[#c586c0]">await</span> <span className="text-[#9cdcfe]">_service</span><span className="text-[#d4d4d4]">.</span><span className="text-[#dcdcaa]">GetByIdAsync</span><span className="text-[#d4d4d4]">(</span><span className="text-[#9cdcfe]">id</span><span className="text-[#d4d4d4]">);</span></span>,
        <span>                <span className="text-[#c586c0]">if</span> <span className="text-[#d4d4d4]">(</span><span className="text-[#9cdcfe]">result</span> <span className="text-[#d4d4d4]">==</span> <span className="text-[#569cd6]">null</span><span className="text-[#d4d4d4]">)</span> <span className="text-[#c586c0]">return</span> <span className="text-[#dcdcaa]">NotFound</span><span className="text-[#d4d4d4]">();</span></span>,
        <span></span>,
        <span>                <span className="text-[#c586c0]">return</span> <span className="text-[#dcdcaa]">Ok</span><span className="text-[#d4d4d4]">(</span><span className="text-[#569cd6]">new</span> <span className="text-[#d4d4d4]">{'{'}</span></span>,
        <span>                    <span className="text-[#9cdcfe]">Id</span> <span className="text-[#d4d4d4]">=</span> <span className="text-[#9cdcfe]">result</span><span className="text-[#d4d4d4]">.</span><span className="text-[#9cdcfe]">Id</span><span className="text-[#d4d4d4]">,</span></span>,
        <span>                    <span className="text-[#9cdcfe]">Name</span> <span className="text-[#d4d4d4]">=</span> <span className="text-[#ce9178]">"{project.title.substring(0,10)}..."</span><span className="text-[#d4d4d4]">,</span></span>,
        <span>                    <span className="text-[#9cdcfe]">Stack</span> <span className="text-[#d4d4d4]">=</span> <span className="text-[#569cd6]">new</span><span className="text-[#d4d4d4]">[] {'{'}</span> <span className="text-[#ce9178]">"{project.techStack[0]}"</span><span className="text-[#d4d4d4]">... {'}'}</span></span>,
        <span className="text-[#d4d4d4]">                {'}'});</span>,
        <span className="text-[#d4d4d4]">            {'}'}</span>,
        <span>            <span className="text-[#c586c0]">catch</span> <span className="text-[#d4d4d4]">(</span><span className="text-[#4ec9b0]">Exception</span> <span className="text-[#9cdcfe]">ex</span><span className="text-[#d4d4d4]">)</span></span>,
        <span className="text-[#d4d4d4]">            {'{'}</span>,
        <span>                <span className="text-[#9cdcfe]">_logger</span><span className="text-[#d4d4d4]">.</span><span className="text-[#dcdcaa]">LogError</span><span className="text-[#d4d4d4]">(</span><span className="text-[#9cdcfe]">ex</span><span className="text-[#d4d4d4]">,</span> <span className="text-[#ce9178]">"Error fetching project"</span><span className="text-[#d4d4d4]">);</span></span>,
        <span>                <span className="text-[#c586c0]">return</span> <span className="text-[#dcdcaa]">StatusCode</span><span className="text-[#d4d4d4]">(</span><span className="text-[#b5cea8]">500</span><span className="text-[#d4d4d4]">,</span> <span className="text-[#9cdcfe]">ex</span><span className="text-[#d4d4d4]">.</span><span className="text-[#9cdcfe]">Message</span><span className="text-[#d4d4d4]">);</span></span>,
        <span className="text-[#d4d4d4]">            {'}'}</span>,
        <span className="text-[#d4d4d4]">        {'}'}</span>,
        <span className="text-[#d4d4d4]">    {'}'}</span>,
        <span className="text-[#d4d4d4]">{'}'}</span>
      ];
    } 
    
    if (project.type === 'MVC') {
        return [
            <span><span className="text-[#c586c0]">using</span> <span className="text-[#d4d4d4]">Microsoft.AspNetCore.Mvc;</span></span>,
            <span><span className="text-[#c586c0]">using</span> <span className="text-[#d4d4d4]">Portfolio.Models;</span></span>,
            <span></span>,
            <span><span className="text-[#569cd6]">namespace</span> <span className="text-[#d4d4d4]">Portfolio.Controllers</span></span>,
            <span className="text-[#d4d4d4]">{'{'}</span>,
            <span>    <span className="text-[#569cd6]">public class</span> <span className="text-[#4ec9b0]">HomeController</span> <span className="text-[#d4d4d4]">:</span> <span className="text-[#4ec9b0]">Controller</span></span>,
            <span className="text-[#d4d4d4]">    {'{'}</span>,
            <span>        <span className="text-[#6a9955]">/// &lt;summary&gt;</span></span>,
            <span>        <span className="text-[#6a9955]">/// Controller logic for {project.title} View</span></span>,
            <span>        <span className="text-[#6a9955]">/// &lt;/summary&gt;</span></span>,
            <span>        <span className="text-[#569cd6]">private readonly</span> <span className="text-[#4ec9b0]">ILogger</span><span className="text-[#d4d4d4]">&lt;</span><span className="text-[#4ec9b0]">HomeController</span><span className="text-[#d4d4d4]">&gt;</span> <span className="text-[#9cdcfe]">_logger</span><span className="text-[#d4d4d4]">;</span></span>,
            <span></span>,
            <span>        <span className="text-[#569cd6]">public</span> <span className="text-[#4ec9b0]">IActionResult</span> <span className="text-[#dcdcaa]">Index</span><span className="text-[#d4d4d4]">()</span></span>,
            <span className="text-[#d4d4d4]">        {'{'}</span>,
            <span>            <span className="text-[#569cd6]">var</span> <span className="text-[#9cdcfe]">model</span> <span className="text-[#d4d4d4]">=</span> <span className="text-[#569cd6]">new</span> <span className="text-[#4ec9b0]">ProjectViewModel</span></span>,
            <span className="text-[#d4d4d4]">            {'{'}</span>,
            <span>                <span className="text-[#9cdcfe]">Title</span> <span className="text-[#d4d4d4]">=</span> <span className="text-[#ce9178]">"{project.title.substring(0,10)}..."</span><span className="text-[#d4d4d4]">,</span></span>,
            <span>                <span className="text-[#9cdcfe]">IsActive</span> <span className="text-[#d4d4d4]">=</span> <span className="text-[#569cd6]">true</span><span className="text-[#d4d4d4]">,</span></span>,
            <span>                <span className="text-[#9cdcfe]">UpdatedAt</span> <span className="text-[#d4d4d4]">=</span> <span className="text-[#4ec9b0]">DateTime</span><span className="text-[#d4d4d4]">.</span><span className="text-[#9cdcfe]">UtcNow</span></span>,
            <span className="text-[#d4d4d4]">            {'};'}</span>,
            <span>            <span className="text-[#c586c0]">return</span> <span className="text-[#dcdcaa]">View</span><span className="text-[#d4d4d4]">(</span><span className="text-[#9cdcfe]">model</span><span className="text-[#d4d4d4]">);</span></span>,
            <span className="text-[#d4d4d4]">        {'}'}</span>,
            <span className="text-[#d4d4d4]">    {'}'}</span>,
            <span className="text-[#d4d4d4]">{'}'}</span>
        ];
    }

    // Default / Console
    return [
        <span><span className="text-[#c586c0]">using</span> <span className="text-[#d4d4d4]">System;</span></span>,
        <span><span className="text-[#c586c0]">using</span> <span className="text-[#d4d4d4]">System.Collections.Generic;</span></span>,
        <span></span>,
        <span><span className="text-[#569cd6]">namespace</span> <span className="text-[#d4d4d4]">Portfolio.ConsoleApp</span></span>,
        <span className="text-[#d4d4d4]">{'{'}</span>,
        <span>    <span className="text-[#6a9955]">/// &lt;summary&gt;</span></span>,
        <span>    <span className="text-[#6a9955]">/// Main entry point for {project.title}</span></span>,
        <span>    <span className="text-[#6a9955]">/// &lt;/summary&gt;</span></span>,
        <span>    <span className="text-[#569cd6]">internal class</span> <span className="text-[#4ec9b0]">Program</span></span>,
        <span className="text-[#d4d4d4]">    {'{'}</span>,
        <span>        <span className="text-[#569cd6]">static void</span> <span className="text-[#dcdcaa]">Main</span><span className="text-[#d4d4d4]">(</span><span className="text-[#569cd6]">string</span><span className="text-[#d4d4d4]">[]</span> <span className="text-[#9cdcfe]">args</span><span className="text-[#d4d4d4]">)</span></span>,
        <span className="text-[#d4d4d4]">        {'{'}</span>,
        <span>            <span className="text-[#4ec9b0]">Console</span><span className="text-[#d4d4d4]">.</span><span className="text-[#dcdcaa]">WriteLine</span><span className="text-[#d4d4d4]">(</span><span className="text-[#ce9178]">"Initializing System..."</span><span className="text-[#d4d4d4]">);</span></span>,
        <span>            <span className="text-[#6a9955]">/* {project.description.substring(0, 30)}... */</span></span>,
        <span>            <span className="text-[#569cd6]">var</span> <span className="text-[#9cdcfe]">app</span> <span className="text-[#d4d4d4]">=</span> <span className="text-[#569cd6]">new</span> <span className="text-[#4ec9b0]">{project.title.replace(/[^a-zA-Z]/g,'')}App</span><span className="text-[#d4d4d4]">();</span></span>,
        <span>            <span className="text-[#9cdcfe]">app</span><span className="text-[#d4d4d4]">.</span><span className="text-[#dcdcaa]">Run</span><span className="text-[#d4d4d4]">(</span><span className="text-[#9cdcfe]">args</span><span className="text-[#d4d4d4]">);</span></span>,
        <span>            <span className="text-[#4ec9b0]">Console</span><span className="text-[#d4d4d4]">.</span><span className="text-[#dcdcaa]">ReadKey</span><span className="text-[#d4d4d4]">();</span></span>,
        <span className="text-[#d4d4d4]">        {'}'}</span>,
        <span className="text-[#d4d4d4]">    {'}'}</span>,
        <span className="text-[#d4d4d4]">{'}'}</span>
    ];
  };

  const codeLines = getCodeLines();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ duration: 0.2 }}
      onClick={onClick}
      className={`group relative h-full w-full rounded-md border border-[#333333] bg-[#1e1e1e] overflow-hidden flex flex-col shadow-lg hover:shadow-2xl hover:border-[#007acc]/50 transition-all ${onClick ? 'cursor-pointer' : ''}`}
    >
      {/* Card Header & Tabs */}
      <div className="flex items-center justify-between px-3 py-2 border-b border-[#252526] bg-[#252526]">
         <div className="flex items-center gap-2 max-w-[50%]">
            {getIcon()}
            <span className="font-mono text-xs text-[#cccccc] font-medium truncate">
                {project.title}
            </span>
         </div>
         <div className="flex items-center gap-2">
             <div className="flex bg-[#1e1e1e] rounded p-0.5 border border-[#333333]">
                <button 
                    onClick={(e) => { e.stopPropagation(); setViewMode('overview'); }}
                    className={`p-1 rounded-sm transition-colors ${viewMode === 'overview' ? 'bg-[#37373d] text-white' : 'text-[#858585] hover:text-[#cccccc]'}`}
                    title="Overview Mode (HR)"
                >
                    <Eye className="w-3.5 h-3.5" />
                </button>
                 <button 
                    onClick={(e) => { e.stopPropagation(); setViewMode('details'); }}
                    className={`p-1 rounded-sm transition-colors ${viewMode === 'details' ? 'bg-[#37373d] text-white' : 'text-[#858585] hover:text-[#cccccc]'}`}
                    title="Details & Preview"
                >
                    <LayoutTemplate className="w-3.5 h-3.5" />
                </button>
                <button 
                    onClick={(e) => { e.stopPropagation(); setViewMode('code'); }}
                    className={`p-1 rounded-sm transition-colors ${viewMode === 'code' ? 'bg-[#37373d] text-white' : 'text-[#858585] hover:text-[#cccccc]'}`}
                    title="Code Mode (Devs)"
                >
                    <Code2 className="w-3.5 h-3.5" />
                </button>
             </div>
             {onClick && (
                <Maximize2 className="w-3.5 h-3.5 text-[#858585] group-hover:text-[#007acc] transition-colors opacity-0 group-hover:opacity-100 hidden md:block" />
             )}
         </div>
      </div>
      
      {/* Content Area */}
      <div className="flex-1 relative bg-[#1e1e1e] min-h-[240px]">
        
        {/* VIEW 1: OVERVIEW (HR Friendly) */}
        {viewMode === 'overview' && (
            <motion.div 
                initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                className="p-5 flex flex-col h-full"
            >
                <div className="flex justify-between items-start mb-3">
                    <span className="text-[10px] font-mono text-[#007acc] border border-[#007acc]/30 bg-[#007acc]/10 px-2 py-0.5 rounded">
                        {project.type}
                    </span>
                    <span className="text-[10px] text-[#858585] font-sans">{project.period}</span>
                </div>
                
                <p className="text-[#cccccc] text-sm leading-6 mb-4 font-sans line-clamp-4">
                    {project.description}
                </p>

                <div className="mt-auto">
                    <div className="text-[10px] uppercase tracking-wider text-[#6b6b6b] font-bold mb-2">Technologies</div>
                    <div className="flex flex-wrap gap-1.5">
                        {project.techStack.slice(0, 6).map((tech, i) => (
                            <span key={i} className="px-2 py-1 bg-[#2d2d2d] text-[#d4d4d4] text-[11px] rounded border border-[#3e3e42] font-mono flex items-center gap-1.5">
                                {getTechIcon(tech)}
                                {tech}
                            </span>
                        ))}
                        {project.techStack.length > 6 && (
                            <span className="px-2 py-1 text-[#858585] text-[10px] border border-transparent">+{project.techStack.length - 6}</span>
                        )}
                    </div>
                </div>

                <div className="mt-5 pt-4 border-t border-[#333333]">
                    <div className="inline-flex items-center gap-2 text-xs text-[#38bdf8] group-hover:underline group-hover:text-[#7dd3fc] transition-colors">
                        Click to view details <ExternalLink className="w-3 h-3" />
                    </div>
                </div>
            </motion.div>
        )}

        {/* VIEW 2: DETAILS (Visual/Preview) */}
        {viewMode === 'details' && (
            <motion.div 
                initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                className="flex flex-col h-full bg-[#1e1e1e]"
            >
                {/* Mock Preview Window */}
                <div className="h-32 bg-[#252526] border-b border-[#333333] relative overflow-hidden group-inner">
                    {/* Abstract Representation of the App */}
                     <div className="absolute inset-0 flex items-center justify-center">
                        {project.type === 'API' || project.type === 'System' ? (
                            <div className="flex items-center gap-4 opacity-50">
                                <Server className="w-12 h-12 text-[#569cd6]" />
                                <div className="flex gap-1">
                                    <div className="w-1 h-1 bg-white rounded-full animate-ping"></div>
                                    <div className="w-1 h-1 bg-white rounded-full animate-ping delay-75"></div>
                                    <div className="w-1 h-1 bg-white rounded-full animate-ping delay-150"></div>
                                </div>
                                <Database className="w-10 h-10 text-[#569cd6]" />
                            </div>
                        ) : project.type === 'MVC' ? (
                            <div className="grid grid-cols-2 gap-2 opacity-50 w-32">
                                 <div className="h-8 bg-[#333333] rounded"></div>
                                 <div className="h-8 bg-[#333333] rounded"></div>
                                 <div className="col-span-2 h-16 bg-[#333333] rounded flex items-center justify-center">
                                    <Layout className="w-8 h-8 text-[#dcdcaa]" />
                                 </div>
                            </div>
                        ) : (
                            <div className="w-full h-full p-4 font-mono text-[10px] text-[#cccccc] leading-tight opacity-60">
                                &gt; dotnet run<br/>
                                &gt; Initializing {project.title}...<br/>
                                &gt; Services loaded.<br/>
                                &gt; Listening on port 5000...<br/>
                                <span className="animate-pulse">_</span>
                            </div>
                        )}
                     </div>
                     <div className="absolute bottom-2 right-2 px-2 py-1 bg-black/50 text-[10px] rounded text-white backdrop-blur-sm">
                        Preview
                     </div>
                </div>

                <div className="p-4 flex-1 flex flex-col">
                    <div className="grid grid-cols-2 gap-4 mb-4">
                         <div>
                            <div className="text-[10px] text-[#858585] mb-1">Architecture</div>
                            <div className="text-xs text-[#d4d4d4] flex items-center gap-1.5 truncate">
                                <Cpu className="w-3 h-3" /> 
                                {project.techStack.includes('Clean Architecture') ? 'Clean Arch' : 'Distributed'}
                            </div>
                         </div>
                         <div>
                            <div className="text-[10px] text-[#858585] mb-1">Platform</div>
                            <div className="text-xs text-[#d4d4d4] flex items-center gap-1.5">
                                <Globe className="w-3 h-3" /> .NET Core
                            </div>
                         </div>
                    </div>
                    
                    <div className="mb-4">
                        <div className="text-[10px] text-[#858585] mb-1">Tech Stack</div>
                        <div className="flex flex-wrap gap-1.5 max-h-24 overflow-y-auto custom-scrollbar pr-1">
                            {project.techStack.map((tech, i) => (
                                <span key={i} className="px-2 py-1 bg-[#2d2d2d] text-[#d4d4d4] text-[10px] rounded border border-[#3e3e42] font-mono flex items-center gap-1.5">
                                    {getTechIcon(tech)}
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="mt-auto">
                        <div className="w-full flex items-center justify-center gap-2 bg-[#007acc] hover:bg-[#0062a3] text-white py-1.5 rounded text-xs transition-colors shadow-sm">
                            <Play className="w-3 h-3" /> Click for Full Demo
                        </div>
                    </div>
                </div>
            </motion.div>
        )}

        {/* VIEW 3: CODE (Dev Friendly) */}
        {viewMode === 'code' && (
            <motion.div 
                initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                className="flex flex-col h-full font-mono text-[13px] leading-6 bg-[#1e1e1e] overflow-auto custom-scrollbar"
            >
                {codeLines.map((line, i) => (
                    <div key={i} className="flex min-w-max hover:bg-[#2a2d2e] group/line">
                        {/* Line Number */}
                        <div className="w-10 text-right pr-3 text-[#858585] opacity-50 select-none shrink-0 border-r border-[#333333]/30 bg-[#1e1e1e] sticky left-0 z-10 group-hover/line:text-[#cccccc] group-hover/line:opacity-100 transition-colors">
                            {i + 1}
                        </div>
                        {/* Code Line */}
                        <div className="pl-3 whitespace-pre text-[#d4d4d4]">
                            {line}
                        </div>
                    </div>
                ))}
            </motion.div>
        )}
      </div>
      
      {/* Status Bar for Card */}
      <div className="px-3 py-1 bg-[#007acc] text-white flex justify-between items-center text-[10px] font-sans">
          <div className="flex gap-2 items-center">
            {viewMode === 'code' ? <Terminal className="w-3 h-3" /> : viewMode === 'details' ? <LayoutTemplate className="w-3 h-3" /> : <Layout className="w-3 h-3" />}
            <span className="truncate max-w-[80px] md:max-w-none">{viewMode === 'code' ? 'C# Source' : viewMode === 'details' ? 'Preview' : 'Design View'}</span>
          </div>
          <span>{viewMode === 'code' ? `Ln ${codeLines.length}, Col 0` : 'Read Only'}</span>
      </div>
    </motion.div>
  );
};
