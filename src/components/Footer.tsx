"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin, Heart, ArrowUp, Sparkles } from "lucide-react";
import { personalInfo } from "@/lib/mock";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: personalInfo.github, label: "GitHub", color: "#6b7280" },
    { icon: Linkedin, href: personalInfo.linkedin, label: "LinkedIn", color: "#0077b5" },
    { icon: Mail, href: `mailto:${personalInfo.email}`, label: "Email", color: "#3b82f6" },
  ];

  const quickLinks = [
    { label: "首页", href: "#home" },
    { label: "关于", href: "#about" },
    { label: "作品", href: "#projects" },
    { label: "技能", href: "#skills" },
    { label: "联系", href: "#contact" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0a0a0a] border-t border-[#2a2a2a] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -bottom-20 left-1/4 w-96 h-96 bg-[#3b82f6]/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.215, 0.61, 0.355, 1] }}
          >
            <motion.h3 
              className="text-xl font-bold gradient-text mb-4 inline-flex items-center gap-2"
              whileHover={{ scale: 1.02 }}
            >
              <motion.span
                animate={{ rotate: [0, 20, -20, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Sparkles size={20} className="text-[#3b82f6]" />
              </motion.span>
              {personalInfo.name}
            </motion.h3>
            <motion.p 
              className="text-[#6b7280] text-sm mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              {personalInfo.title} | {personalInfo.subtitle}
            </motion.p>
            <motion.div 
              className="flex items-center text-[#6b7280] text-sm"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              whileHover={{ x: 5, color: "#3b82f6" }}
            >
              <MapPin size={16} className="mr-2" />
              {personalInfo.location}
            </motion.div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.215, 0.61, 0.355, 1] }}
          >
            <h4 className="text-[#f5f5f5] font-semibold mb-4">快速链接</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <motion.li 
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.05 }}
                >
                  <motion.a
                    href={link.href}
                    className="text-[#6b7280] hover:text-[#3b82f6] transition-colors text-sm inline-flex items-center gap-2 group"
                    whileHover={{ x: 5 }}
                  >
                    <motion.span
                      className="w-0 h-0.5 bg-[#3b82f6] group-hover:w-3 transition-all"
                    />
                    {link.label}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.215, 0.61, 0.355, 1] }}
          >
            <h4 className="text-[#f5f5f5] font-semibold mb-4">联系方式</h4>
            <motion.p 
              className="text-[#6b7280] text-sm mb-2 hover:text-[#3b82f6] transition-colors cursor-pointer"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              whileHover={{ x: 5 }}
            >
              {personalInfo.email}
            </motion.p>
            <motion.p 
              className="text-[#6b7280] text-sm mb-4 hover:text-[#3b82f6] transition-colors cursor-pointer"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              whileHover={{ x: 5 }}
            >
              {personalInfo.phone}
            </motion.p>
            
            {/* Social Links */}
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-[#1a1a1a] border border-[#2a2a2a] flex items-center justify-center text-[#6b7280] hover:text-white transition-all relative overflow-hidden group"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.1, type: "spring", stiffness: 200 }}
                  whileHover={{ 
                    scale: 1.15, 
                    y: -3,
                    borderColor: social.color,
                    boxShadow: `0 10px 20px -10px ${social.color}50`
                  }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.label}
                >
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ backgroundColor: social.color }}
                  />
                  <social.icon size={18} className="relative z-10" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 pt-8 border-t border-[#2a2a2a] flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <motion.p 
            className="text-[#6b7280] text-sm flex items-center gap-1"
            whileHover={{ scale: 1.02 }}
          >
            &copy; {currentYear} {personalInfo.name}. Made with 
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Heart size={14} className="text-red-500 inline mx-1" fill="currentColor" />
            </motion.span>
            All rights reserved.
          </motion.p>
          
          <div className="flex items-center gap-4">
            <motion.p 
              className="text-[#4b5563] text-xs"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              使用 Next.js + TypeScript + Tailwind CSS 构建
            </motion.p>
            
            {/* Back to top button */}
            <motion.button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-full bg-[#1a1a1a] border border-[#2a2a2a] flex items-center justify-center text-[#6b7280] hover:text-[#3b82f6] hover:border-[#3b82f6]/50 transition-all"
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <motion.div
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowUp size={18} />
              </motion.div>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
