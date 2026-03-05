"use client";

import { motion, useInView } from "framer-motion";
import { skills } from "@/lib/mock";
import { Cpu, Wrench, Server, Lightbulb, Sparkles, Zap, Code2, Rocket, Smartphone, Award } from "lucide-react";
import { useRef, useEffect, useState } from "react";

// 技能进度条动画组件
function SkillBar({ skill, color, index, categoryIndex }: { 
  skill: typeof skills[0]; 
  color: string; 
  index: number;
  categoryIndex: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.5, 
        delay: categoryIndex * 0.1 + index * 0.05,
        ease: [0.215, 0.61, 0.355, 1]
      }}
      className="group"
    >
      <div className="flex items-center justify-between mb-2">
        <motion.span 
          className="text-[#f5f5f5] font-medium flex items-center gap-2"
          whileHover={{ x: 5, color }}
          transition={{ duration: 0.2 }}
        >
          <motion.span
            className="w-1.5 h-1.5 rounded-full"
            style={{ backgroundColor: color }}
            animate={{ scale: [1, 1.5, 1] }}
            transition={{ duration: 2, repeat: Infinity, delay: index * 0.1 }}
          />
          {skill.name}
        </motion.span>
        <motion.span 
          className="text-[#6b7280] text-sm font-mono"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: categoryIndex * 0.1 + index * 0.05 + 0.3 }}
        >
          {skill.level}%
        </motion.span>
      </div>
      <div className="h-2.5 bg-[#2a2a2a] rounded-full overflow-hidden relative">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-20">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute top-0 bottom-0 w-0.5 bg-white"
              style={{ left: `${i * 5}%` }}
            />
          ))}
        </div>
        
        <motion.div
          className="h-full rounded-full relative"
          style={{ backgroundColor: color }}
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.level}%` } : {}}
          transition={{
            duration: 1.2,
            delay: categoryIndex * 0.1 + index * 0.05 + 0.2,
            ease: [0.215, 0.61, 0.355, 1],
          }}
        >
          {/* Shine effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
            animate={{ x: ["-100%", "200%"] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 1, delay: index * 0.1 }}
          />
          
          {/* Glow effect */}
          <motion.div
            className="absolute right-0 top-0 bottom-0 w-4"
            style={{ 
              background: `linear-gradient(to right, transparent, ${color})`,
              filter: "blur(4px)"
            }}
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
}

export function Skills() {
  const categories = [
    { key: "frontend", label: "前端框架", icon: Cpu, color: "#3b82f6", gradient: "from-blue-500 to-cyan-400" },
    { key: "backend", label: "跨平台开发", icon: Smartphone, color: "#8b5cf6", gradient: "from-violet-500 to-purple-400" },
    { key: "tools", label: "开发工具", icon: Wrench, color: "#10b981", gradient: "from-emerald-500 to-teal-400" },
    { key: "other", label: "专业能力", icon: Award, color: "#f59e0b", gradient: "from-amber-500 to-orange-400" },
  ];

  const getSkillsByCategory = (category: string) => {
    return skills.filter((skill) => skill.category === category);
  };

  return (
    <section id="skills" className="section bg-[#0f0f0f] relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-0 left-1/4 w-96 h-96 bg-[#3b82f6]/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            y: [0, 30, 0],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-72 h-72 bg-[#8b5cf6]/5 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            y: [0, -30, 0],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }}
        >
          <motion.span 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1a1a1a] border border-[#2a2a2a] text-[#3b82f6] text-sm font-medium mb-4"
            whileHover={{ scale: 1.05, borderColor: "#3b82f6" }}
          >
            <motion.span
              animate={{ rotate: [0, 20, -20, 0], scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Sparkles size={16} />
            </motion.span>
            技能专长
          </motion.span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            我的<span className="gradient-text">技术栈</span>
          </h2>
          <p className="text-[#6b7280] text-lg max-w-2xl mx-auto">
            熟练掌握前后端开发技术，持续学习新技术以保持竞争力
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {categories.map((category, catIndex) => {
            const categorySkills = getSkillsByCategory(category.key);
            const Icon = category.icon;

            return (
              <motion.div
                key={category.key}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  duration: 0.7, 
                  delay: catIndex * 0.15,
                  ease: [0.215, 0.61, 0.355, 1]
                }}
                whileHover={{ 
                  y: -5,
                  boxShadow: `0 20px 40px -15px ${category.color}30`
                }}
                className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl p-6 hover:border-[#3b82f6]/30 transition-all relative overflow-hidden group"
              >
                {/* Background gradient on hover */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                />
                
                {/* Category Header */}
                <motion.div 
                  className="flex items-center gap-3 mb-6 relative"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: catIndex * 0.15 + 0.2 }}
                >
                  <motion.div
                    className="w-12 h-12 rounded-xl flex items-center justify-center relative"
                    style={{ backgroundColor: `${category.color}20` }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Icon size={24} style={{ color: category.color }} />
                    
                    {/* Pulse effect */}
                    <motion.div
                      className="absolute inset-0 rounded-xl"
                      style={{ border: `2px solid ${category.color}` }}
                      animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </motion.div>
                  <h3 className="text-xl font-bold text-[#f5f5f5]">
                    {category.label}
                  </h3>
                  
                  {/* Skill count badge */}
                  <motion.span
                    className="ml-auto px-2 py-1 text-xs rounded-full"
                    style={{ backgroundColor: `${category.color}20`, color: category.color }}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: catIndex * 0.15 + 0.3, type: "spring" }}
                  >
                    {categorySkills.length} 项技能
                  </motion.span>
                </motion.div>

                {/* Skills List */}
                <div className="space-y-4 relative">
                  {categorySkills.map((skill, index) => (
                    <SkillBar
                      key={skill.name}
                      skill={skill}
                      color={category.color}
                      index={index}
                      categoryIndex={catIndex}
                    />
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Tech Stack Cloud */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.h3 
            className="text-2xl font-bold text-center mb-8 inline-flex items-center gap-2 justify-center w-full"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <motion.span
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            >
              <Zap size={24} className="text-[#f59e0b]" />
            </motion.span>
            常用技术标签
          </motion.h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "React18+",
              "Vue3",
              "Next.js",
              "Nuxt.js",
              "TypeScript",
              "JavaScript",
              "HTML5",
              "CSS3",
              "Tailwind CSS",
              "Arco Design",
              "Ant Design",
              "Element UI",
              "Three.js",
              "Canvas",
              "WebGL",
              "React Native",
              "微信小程序",
              "Taro",
              "uniapp",
              "Node.js",
              "Git",
              "Postman",
              "Apifox",
              "PM2",
              "CI/CD",
              "Webpack",
              "Vite",
              "AI工具",
              "Cursor",
              "SEO优化",
              "性能优化",
            ].map((tech, index) => {
              // 随机颜色
              const colors = ["#3b82f6", "#8b5cf6", "#10b981", "#f59e0b", "#ef4444", "#ec4899"];
              const color = colors[index % colors.length];
              
              return (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    delay: index * 0.02,
                    type: "spring",
                    stiffness: 300,
                    damping: 15
                  }}
                  whileHover={{ 
                    scale: 1.15, 
                    y: -5,
                    rotate: Math.random() * 10 - 5,
                  }}
                  className="px-4 py-2 bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl text-[#9ca3af] hover:border-[#3b82f6]/50 transition-all cursor-default relative overflow-hidden group"
                  style={{ 
                    boxShadow: `0 4px 15px -5px ${color}20`,
                  }}
                >
                  {/* Hover glow */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ 
                      background: `linear-gradient(135deg, ${color}10, transparent)` 
                    }}
                  />
                  <span className="relative z-10 group-hover:text-white transition-colors">
                    {tech}
                  </span>
                </motion.span>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
