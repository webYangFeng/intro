"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { personalInfo } from "@/lib/mock";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Send,
  MessageSquare,
  Sparkles,
  CheckCircle,
  Heart,
  Zap,
  Rocket,
} from "lucide-react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 模拟提交
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "邮箱",
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      color: "#3b82f6",
    },
    {
      icon: Phone,
      label: "电话",
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone}`,
      color: "#10b981",
    },
    {
      icon: MapPin,
      label: "地址",
      value: personalInfo.location,
      href: "#",
      color: "#f59e0b",
    },
  ];

  const socialLinks = [
    { icon: Github, label: "GitHub", href: personalInfo.github, color: "#6b7280" },
    { icon: Linkedin, label: "LinkedIn", href: personalInfo.linkedin, color: "#0077b5" },
  ];

  return (
    <section id="contact" className="section bg-[#0a0a0a] relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 right-20 w-96 h-96 bg-[#3b82f6]/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, -30, 0],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-72 h-72 bg-[#8b5cf6]/5 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, 30, 0],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        
        {/* Floating particles */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-[#3b82f6]/20 rounded-full"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + (i % 2) * 40}%`,
            }}
            animate={{
              y: [0, -50, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 5 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          />
        ))}
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
              animate={{ rotate: [0, 15, -15, 0], scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <MessageSquare size={16} />
            </motion.span>
            联系方式
          </motion.span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            与我<span className="gradient-text">取得联系</span>
          </h2>
          <p className="text-[#6b7280] text-lg max-w-2xl mx-auto">
            有项目合作意向或工作机会？欢迎随时联系我，我会尽快回复
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
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
                📬
              </motion.span>
              联系信息
            </motion.h3>
            <motion.p 
              className="text-[#6b7280] mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              无论是项目合作、技术交流还是工作机会，我都很乐意与您交流。
              您可以通过以下方式直接联系我，或者填写右侧的表单发送消息。
            </motion.p>

            {/* Contact Cards */}
            <div className="space-y-4 mb-8">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
                  whileHover={{ 
                    scale: 1.02, 
                    x: 10,
                    boxShadow: `0 10px 30px -10px ${item.color}40`
                  }}
                  className="flex items-center gap-4 p-4 bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl hover:border-[#3b82f6]/50 transition-all group relative overflow-hidden"
                >
                  {/* Background glow on hover */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ 
                      background: `linear-gradient(135deg, ${item.color}10, transparent)` 
                    }}
                  />
                  
                  <motion.div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center relative"
                    style={{ backgroundColor: `${item.color}15` }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <item.icon style={{ color: item.color }} size={20} />
                    
                    {/* Pulse effect */}
                    <motion.div
                      className="absolute inset-0 rounded-xl"
                      style={{ border: `2px solid ${item.color}` }}
                      animate={{ scale: [1, 1.2], opacity: [0.5, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </motion.div>
                  <div className="relative">
                    <div className="text-sm text-[#6b7280]">{item.label}</div>
                    <motion.div 
                      className="font-medium text-[#f5f5f5]"
                      whileHover={{ color: item.color }}
                    >
                      {item.value}
                    </motion.div>
                  </div>
                  
                  {/* Arrow indicator */}
                  <motion.div
                    className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity"
                    initial={{ x: -10 }}
                    whileHover={{ x: 0 }}
                  >
                    <Rocket size={16} style={{ color: item.color }} />
                  </motion.div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <h4 className="text-lg font-semibold mb-4">社交媒体</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl bg-[#1a1a1a] border border-[#2a2a2a] flex items-center justify-center text-[#6b7280] hover:text-[#3b82f6] hover:border-[#3b82f6]/50 transition-all relative overflow-hidden group"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.7 + index * 0.1, type: "spring", stiffness: 200 }}
                    whileHover={{ scale: 1.15, y: -4, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={social.label}
                  >
                    <motion.div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{ backgroundColor: `${social.color}10` }}
                    />
                    <social.icon size={20} className="relative z-10" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Availability Badge */}
            <motion.div
              className="mt-8 p-5 bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl relative overflow-hidden group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              whileHover={{ scale: 1.02, borderColor: "#10b98150" }}
            >
              {/* Animated background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-green-500/5 via-emerald-500/10 to-green-500/5"
                animate={{ x: ["-100%", "100%"] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />
              
              <div className="relative flex items-center gap-3">
                <div className="relative">
                  <motion.div 
                    className="w-3 h-3 bg-green-500 rounded-full"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  />
                  <motion.div 
                    className="absolute inset-0 w-3 h-3 bg-green-500 rounded-full"
                    animate={{ scale: [1, 2.5], opacity: [0.8, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                </div>
                <span className="text-[#f5f5f5] font-medium">目前可接受新项目</span>
                <motion.span
                  className="ml-auto"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  <Zap size={18} className="text-green-500" />
                </motion.span>
              </div>
              <p className="text-sm text-[#6b7280] mt-2 relative">
                我正在寻找新的工作机会和项目合作，期待与您交流！
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }}
          >
            <motion.div 
              className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl p-6 sm:p-8 relative overflow-hidden"
              whileHover={{ borderColor: "#3b82f630" }}
              transition={{ duration: 0.3 }}
            >
              {/* Background decoration */}
              <motion.div
                className="absolute -top-20 -right-20 w-40 h-40 bg-[#3b82f6]/10 rounded-full blur-3xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              
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
                  ✉️
                </motion.span>
                发送消息
              </motion.h3>

              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.8, y: -20 }}
                    transition={{ type: "spring", stiffness: 200 }}
                    className="flex flex-col items-center justify-center py-12 text-center"
                  >
                    <motion.div 
                      className="w-20 h-20 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center mb-4 shadow-lg shadow-green-500/30"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 300, delay: 0.1 }}
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.3, type: "spring" }}
                      >
                        <CheckCircle className="text-white" size={40} />
                      </motion.div>
                    </motion.div>
                    <motion.h4 
                      className="text-xl font-bold text-[#f5f5f5] mb-2"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      消息已发送！
                    </motion.h4>
                    <motion.p 
                      className="text-[#6b7280]"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                    >
                      感谢您的留言，我会尽快回复您。
                    </motion.p>
                    
                    {/* Confetti effect simulation */}
                    {[...Array(6)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-2 h-2 rounded-full"
                        style={{
                          backgroundColor: ["#3b82f6", "#8b5cf6", "#10b981", "#f59e0b"][i % 4],
                          left: `${20 + i * 12}%`,
                          top: "40%",
                        }}
                        initial={{ scale: 0, y: 0 }}
                        animate={{ 
                          scale: [0, 1, 0],
                          y: [0, -50 - Math.random() * 50],
                          x: [0, (Math.random() - 0.5) * 100],
                          rotate: [0, 360],
                        }}
                        transition={{ duration: 1, delay: 0.2 + i * 0.1 }}
                      />
                    ))}
                  </motion.div>
                ) : (
                  <motion.form 
                    key="form"
                    onSubmit={handleSubmit} 
                    className="space-y-5"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="grid sm:grid-cols-2 gap-5">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                      >
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-[#9ca3af] mb-2"
                        >
                          姓名
                        </label>
                        <motion.div
                          className="relative"
                          whileFocus={{ scale: 1.02 }}
                        >
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            onFocus={() => setFocusedField("name")}
                            onBlur={() => setFocusedField(null)}
                            required
                            className="w-full px-4 py-3 bg-[#0f0f0f] border border-[#2a2a2a] rounded-xl text-[#f5f5f5] placeholder-[#4b5563] focus:outline-none focus:border-[#3b82f6] transition-all"
                            placeholder="您的姓名"
                          />
                          <motion.div
                            className="absolute bottom-0 left-0 h-0.5 bg-[#3b82f6]"
                            initial={{ width: 0 }}
                            animate={{ width: focusedField === "name" ? "100%" : 0 }}
                            transition={{ duration: 0.3 }}
                          />
                        </motion.div>
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                      >
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-[#9ca3af] mb-2"
                        >
                          邮箱
                        </label>
                        <motion.div className="relative">
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            onFocus={() => setFocusedField("email")}
                            onBlur={() => setFocusedField(null)}
                            required
                            className="w-full px-4 py-3 bg-[#0f0f0f] border border-[#2a2a2a] rounded-xl text-[#f5f5f5] placeholder-[#4b5563] focus:outline-none focus:border-[#3b82f6] transition-all"
                            placeholder="your@email.com"
                          />
                          <motion.div
                            className="absolute bottom-0 left-0 h-0.5 bg-[#3b82f6]"
                            initial={{ width: 0 }}
                            animate={{ width: focusedField === "email" ? "100%" : 0 }}
                            transition={{ duration: 0.3 }}
                          />
                        </motion.div>
                      </motion.div>
                    </div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 }}
                    >
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-[#9ca3af] mb-2"
                      >
                        主题
                      </label>
                      <motion.div className="relative">
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          onFocus={() => setFocusedField("subject")}
                          onBlur={() => setFocusedField(null)}
                          required
                          className="w-full px-4 py-3 bg-[#0f0f0f] border border-[#2a2a2a] rounded-xl text-[#f5f5f5] placeholder-[#4b5563] focus:outline-none focus:border-[#3b82f6] transition-all"
                          placeholder="消息主题"
                        />
                        <motion.div
                          className="absolute bottom-0 left-0 h-0.5 bg-[#3b82f6]"
                          initial={{ width: 0 }}
                          animate={{ width: focusedField === "subject" ? "100%" : 0 }}
                          transition={{ duration: 0.3 }}
                        />
                      </motion.div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 }}
                    >
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-[#9ca3af] mb-2"
                      >
                        消息内容
                      </label>
                      <motion.div className="relative">
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          onFocus={() => setFocusedField("message")}
                          onBlur={() => setFocusedField(null)}
                          required
                          rows={5}
                          className="w-full px-4 py-3 bg-[#0f0f0f] border border-[#2a2a2a] rounded-xl text-[#f5f5f5] placeholder-[#4b5563] focus:outline-none focus:border-[#3b82f6] transition-all resize-none"
                          placeholder="请输入您的消息..."
                        />
                        <motion.div
                          className="absolute bottom-0 left-0 h-0.5 bg-[#3b82f6]"
                          initial={{ width: 0 }}
                          animate={{ width: focusedField === "message" ? "100%" : 0 }}
                          transition={{ duration: 0.3 }}
                        />
                      </motion.div>
                    </motion.div>

                    <motion.button
                      type="submit"
                      className="w-full px-8 py-4 bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] hover:from-[#2563eb] hover:to-[#7c3aed] text-white font-semibold rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#3b82f6]/25 relative overflow-hidden group"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.6 }}
                      whileHover={{ 
                        scale: 1.02, 
                        y: -2,
                        boxShadow: "0 20px 40px -10px rgba(59, 130, 246, 0.4)"
                      }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {/* Shine effect */}
                      <motion.span
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"
                      />
                      <motion.span
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1, repeat: Infinity }}
                      >
                        <Send size={18} />
                      </motion.span>
                      发送消息
                    </motion.button>
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
