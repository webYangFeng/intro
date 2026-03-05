"use client";

import { motion, useInView } from "framer-motion";
import { personalInfo, experiences } from "@/lib/mock";
import { Briefcase, Calendar, Code2, Sparkles, Target, Zap, Heart, MessageCircle, Lightbulb, TrendingUp } from "lucide-react";
import { useRef, useEffect, useState } from "react";

// 数字递增动画组件
function AnimatedCounter({ value, suffix = "" }: { value: string; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  
  const numericValue = parseInt(value.replace(/\D/g, ""));
  
  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = numericValue;
      const duration = 2000;
      const increment = end / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      
      return () => clearInterval(timer);
    }
  }, [isInView, numericValue]);
  
  return (
    <span ref={ref}>
      {value.includes("+") ? `${count}+` : value.includes("%") ? `${count}%` : count}
      {suffix}
    </span>
  );
}

export function About() {
  const stats = [
    { icon: Code2, value: "5", suffix: "+", label: "年开发经验" },
    { icon: Briefcase, value: "30", suffix: "+", label: "完成项目" },
    { icon: Target, value: "100", suffix: "%", label: "客户满意度" },
    { icon: Zap, value: "3", suffix: "", label: "家公司经历" },
  ];

  const highlights = [
    { icon: Heart, text: "为人幽默、喜爱交友", color: "#ef4444" },
    { icon: MessageCircle, text: "良好的沟通表达能力", color: "#3b82f6" },
    { icon: Lightbulb, text: "快速学习新技术", color: "#f59e0b" },
    { icon: TrendingUp, text: "积极乐观、执行力强", color: "#10b981" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { 
        duration: 0.6,
        ease: [0.215, 0.61, 0.355, 1] as const
      },
    },
  };

  const cardHoverVariants = {
    rest: { scale: 1 },
    hover: { 
      scale: 1.03,
      transition: { duration: 0.3, ease: "easeOut" }
    }
  };

  return (
    <section id="about" className="section bg-[#0f0f0f] relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-[#3b82f6]/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 20, 0],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-[#8b5cf6]/5 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -20, 0],
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
            关于我
          </motion.span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            了解更多<span className="gradient-text">关于我</span>
          </h2>
          <p className="text-[#6b7280] text-lg max-w-2xl mx-auto">
            我是一名热爱技术的前端工程师，致力于创造卓越的数字体验
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="p-6 bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl text-center hover:border-[#3b82f6]/50 transition-all relative overflow-hidden group"
              whileHover={{ 
                scale: 1.05, 
                y: -5,
                boxShadow: "0 20px 40px -15px rgba(59, 130, 246, 0.3)"
              }}
            >
              {/* Background glow on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-[#3b82f6]/0 to-[#8b5cf6]/0 group-hover:from-[#3b82f6]/10 group-hover:to-[#8b5cf6]/10 transition-all duration-500"
              />
              
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.3, type: "spring", stiffness: 200 }}
              >
                <stat.icon className="w-8 h-8 text-[#3b82f6] mx-auto mb-3" />
              </motion.div>
              
              <motion.div 
                className="text-3xl font-bold text-[#f5f5f5] mb-1"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.4, type: "spring", stiffness: 200 }}
              >
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </motion.div>
              
              <motion.div 
                className="text-sm text-[#6b7280]"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.5 }}
              >
                {stat.label}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }}
          >
            <motion.h3 
              className="text-2xl font-bold mb-6 inline-flex items-center gap-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <motion.span
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                👨‍💻
              </motion.span>
              我的故事
            </motion.h3>
            
            <div className="space-y-4 text-[#9ca3af] leading-relaxed">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                从2020年开始我的前端开发之旅，我对前端技术产生了浓厚的兴趣。在工作中，我主导了多个大型项目的前后端分离重构工作，
                如将jQuery项目迁移到Next.js框架，显著提升了项目性能和开发效率。
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                在菲特检测工作期间，我深入参与了工业质检相关项目，负责AI图像算法平台的前端开发，
                使用Canvas和WebAssembly实现了前端模型推理，减少了70%的服务器压力。同时开发了行车安全检测系统，
                集成海康SDK和Three.js实现了数据大屏展示。
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                目前在南京设易网络担任高级前端开发，负责公司核心产品建e网和建e全景的开发维护，
                深入研究krpano全景技术，为公司VR业务提供技术支持。同时负责全站日常活动及充值业务开发。
              </motion.p>
            </div>

            {/* Highlights */}
            <motion.div 
              className="mt-6 grid grid-cols-2 gap-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-2 p-3 bg-[#1a1a1a]/50 rounded-lg border border-[#2a2a2a]/50"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  whileHover={{ scale: 1.02, borderColor: item.color }}
                >
                  <item.icon size={16} style={{ color: item.color }} />
                  <span className="text-sm text-[#9ca3af]">{item.text}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Personal Info */}
            <motion.div 
              className="mt-8 grid grid-cols-2 gap-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
            >
              {[
                { label: "姓名", value: personalInfo.name },
                { label: "邮箱", value: personalInfo.email },
                { label: "电话", value: personalInfo.phone },
                { label: "所在地", value: personalInfo.location },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  className="p-4 bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl hover:border-[#3b82f6]/30 transition-all group"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.9 + index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -2 }}
                >
                  <motion.div 
                    className="text-sm text-[#6b7280] mb-1"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1 + index * 0.1 }}
                  >
                    {item.label}
                  </motion.div>
                  <motion.div 
                    className="font-medium text-[#f5f5f5]"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.1 + index * 0.1 }}
                  >
                    {item.value}
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Experience Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }}
          >
            <motion.h3 
              className="text-2xl font-bold mb-6 inline-flex items-center gap-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <motion.span
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                💼
              </motion.span>
              工作经历
            </motion.h3>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.6, ease: [0.215, 0.61, 0.355, 1] }}
                  className="relative pl-8 pb-6 border-l-2 border-[#2a2a2a] last:pb-0 group"
                >
                  {/* Timeline dot */}
                  <motion.div 
                    className="absolute left-0 top-0 w-4 h-4 -translate-x-[9px] rounded-full bg-[#1a1a1a] border-2 border-[#3b82f6]"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 + 0.3, type: "spring", stiffness: 300 }}
                    whileHover={{ scale: 1.3, borderColor: "#8b5cf6" }}
                  />
                  
                  {/* Pulse effect */}
                  <motion.div
                    className="absolute left-0 top-0 w-4 h-4 -translate-x-[9px] rounded-full bg-[#3b82f6]/30"
                    animate={{ scale: [1, 2], opacity: [0.5, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                  />
                  
                  <motion.div 
                    className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-5 hover:border-[#3b82f6]/50 transition-all relative overflow-hidden"
                    whileHover={{ 
                      scale: 1.02, 
                      y: -3,
                      boxShadow: "0 20px 40px -15px rgba(59, 130, 246, 0.2)"
                    }}
                  >
                    {/* Hover gradient */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-[#3b82f6]/0 via-[#3b82f6]/5 to-[#8b5cf6]/0 opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                    
                    <div className="relative">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <motion.h4 
                          className="font-semibold text-[#f5f5f5]"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.2 + 0.4 }}
                        >
                          {exp.position}
                        </motion.h4>
                        <motion.span 
                          className="text-[#3b82f6]"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.2 + 0.5 }}
                        >
                          @ {exp.company}
                        </motion.span>
                      </div>
                      
                      <motion.div 
                        className="flex items-center text-sm text-[#6b7280] mb-3"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 + 0.5 }}
                      >
                        <Calendar size={14} className="mr-1" />
                        {exp.startDate} - {exp.endDate}
                      </motion.div>
                      
                      <motion.p 
                        className="text-[#9ca3af] text-sm mb-3 leading-relaxed"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 + 0.6 }}
                      >
                        {exp.description}
                      </motion.p>
                      
                      <motion.div 
                        className="flex flex-wrap gap-2"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 + 0.7 }}
                      >
                        {exp.technologies.map((tech, techIndex) => (
                          <motion.span
                            key={tech}
                            className="px-2 py-1 text-xs bg-[#2a2a2a] text-[#9ca3af] rounded-md border border-transparent hover:border-[#3b82f6]/30 hover:text-[#3b82f6] transition-all cursor-default"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 + 0.7 + techIndex * 0.05 }}
                            whileHover={{ scale: 1.1, y: -2 }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </motion.div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
