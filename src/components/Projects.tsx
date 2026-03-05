"use client";

import {useState} from "react";
import {motion, AnimatePresence} from "framer-motion";
import {projects, personalInfo} from "@/lib/mock";
import {ExternalLink, Github, FolderOpen, Star, Layers} from "lucide-react";
import Image from "next/image";

// 简化的卡片组件 - 移除复杂的 3D 效果
function ProjectCard({project, index}: { project: typeof projects[0]; index: number }) {
    return (
        <motion.div
            layout
            initial={{opacity: 0, y: 30}}
            animate={{opacity: 1, y: 0}}
            exit={{opacity: 0, y: -20}}
            transition={{
                duration: 0.4,
                delay: index * 0.08,
                ease: "easeOut"
            }}
            className="group"
        >
            <motion.div
                className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl overflow-hidden h-full transition-colors duration-300 hover:border-[#3b82f6]/50"
                whileHover={{
                    y: -8,
                    transition: {duration: 0.25, ease: "easeOut"}
                }}
            >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-[#1a1a1a]/40 to-transparent"/>

                    {/* Featured Badge */}
                    {project.featured && (
                        <motion.div
                            className="absolute top-4 left-4 px-3 py-1.5 bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] text-white text-xs font-medium rounded-full flex items-center gap-1.5 shadow-lg"
                            initial={{opacity: 0, x: -10}}
                            animate={{opacity: 1, x: 0}}
                            transition={{delay: index * 0.08 + 0.2}}
                        >
                            <Star size={12} fill="currentColor"/>
                            精选项目
                        </motion.div>
                    )}
                </div>

                {/* Content */}
                <div className="p-6">
                    <h3 className="text-xl font-bold text-[#f5f5f5] mb-2 group-hover:text-[#3b82f6] transition-colors duration-200">
                        {project.title}
                    </h3>
                    <p className="text-[#6b7280] text-sm mb-4 line-clamp-3 leading-relaxed">
                        {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.slice(0, 4).map((tag) => (
                            <span
                                key={tag}
                                className="px-2.5 py-1 text-xs bg-[#2a2a2a] text-[#9ca3af] rounded-md transition-colors duration-200 hover:text-[#3b82f6] hover:bg-[#2a2a2a]/80"
                            >
                {tag}
              </span>
                        ))}
                        {project.tags.length > 4 && (
                            <span className="px-2.5 py-1 text-xs bg-[#2a2a2a] text-[#9ca3af] rounded-md">
                +{project.tags.length - 4}
              </span>
                        )}
                    </div>

                    {/* Links */}
                    <div className="flex gap-3">
                        {project.demoUrl && (
                            <motion.a
                                href={project.demoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] text-white text-sm font-medium rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-[#3b82f6]/30"
                                whileHover={{scale: 1.02}}
                                whileTap={{scale: 0.98}}
                            >
                                <ExternalLink size={16}/>
                                访问网站
                            </motion.a>
                        )}
                        {project.repoUrl && (
                            <motion.a
                                href={project.repoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 px-4 py-2.5 bg-[#2a2a2a] text-[#f5f5f5] text-sm font-medium rounded-lg transition-all duration-200 hover:bg-[#3a3a3a]"
                                whileHover={{scale: 1.05}}
                                whileTap={{scale: 0.95}}
                            >
                                <Github size={18}/>
                            </motion.a>
                        )}
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}

export function Projects() {
    const [filter, setFilter] = useState<"all" | "featured">("all");

    const filteredProjects =
        filter === "featured"
            ? projects.filter((p) => p.featured)
            : projects;

    const categories = [
        {key: "all", label: "全部作品", icon: Layers},
        {key: "featured", label: "精选作品", icon: Star},
    ];

    return (
        <section id="projects" className="section bg-[#0a0a0a] relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    className="absolute top-40 right-0 w-96 h-96 bg-[#3b82f6]/5 rounded-full blur-3xl"
                    animate={{
                        scale: [1, 1.2, 1],
                        x: [0, -30, 0],
                    }}
                    transition={{duration: 10, repeat: Infinity}}
                />
                <motion.div
                    className="absolute bottom-20 left-0 w-72 h-72 bg-[#8b5cf6]/5 rounded-full blur-3xl"
                    animate={{
                        scale: [1.2, 1, 1.2],
                        x: [0, 30, 0],
                    }}
                    transition={{duration: 8, repeat: Infinity}}
                />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-12"
                    initial={{opacity: 0, y: 30}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true, margin: "-100px"}}
                    transition={{duration: 0.8, ease: [0.215, 0.61, 0.355, 1]}}
                >
                    <motion.span
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1a1a1a] border border-[#2a2a2a] text-[#3b82f6] text-sm font-medium mb-4"
                        whileHover={{scale: 1.05, borderColor: "#3b82f6"}}
                    >
                        <motion.span
                            animate={{y: [0, -3, 0]}}
                            transition={{duration: 1.5, repeat: Infinity}}
                        >
                            <FolderOpen size={16}/>
                        </motion.span>
                        作品展示
                    </motion.span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                        我的<span className="gradient-text">项目作品</span>
                    </h2>
                    <p className="text-[#6b7280] text-lg max-w-2xl mx-auto">
                        以下是我近年来参与和主导的一些项目，涵盖了电商平台、VR全景、AI图像处理等多个领域
                    </p>
                </motion.div>

                {/* Filter Tabs */}
                <motion.div
                    className="flex justify-center gap-3 mb-12"
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true}}
                    transition={{duration: 0.6, delay: 0.1}}
                >
                    {categories.map((cat) => {
                        const Icon = cat.icon;
                        return (
                            <motion.button
                                key={cat.key}
                                onClick={() => setFilter(cat.key as "all" | "featured")}
                                className={`px-6 py-3 rounded-xl font-medium transition-all flex items-center gap-2 relative overflow-hidden ${
                                    filter === cat.key
                                        ? "bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] text-white shadow-lg shadow-[#3b82f6]/30"
                                        : "bg-[#1a1a1a] text-[#6b7280] hover:text-[#f5f5f5] border border-[#2a2a2a] hover:border-[#3b82f6]/50"
                                }`}
                                whileHover={{scale: 1.05, y: -2}}
                                whileTap={{scale: 0.95}}
                            >
                                <Icon size={18}/>
                                {cat.label}
                                {filter === cat.key && (
                                    <motion.div
                                        className="absolute inset-0 bg-white/20"
                                        initial={{x: "-100%"}}
                                        animate={{x: "100%"}}
                                        transition={{duration: 0.5}}
                                    />
                                )}
                            </motion.button>
                        );
                    })}
                </motion.div>

                {/* Projects Grid */}
                <motion.div
                    layout
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project, index) => (
                            <ProjectCard key={project.id} project={project} index={index}/>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* View More */}
                <motion.div
                    className="text-center mt-12"
                    initial={{opacity: 0, y: 30}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true}}
                    transition={{duration: 0.6, delay: 0.3}}
                >
                    <motion.a
                        href={personalInfo.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-[#1a1a1a] hover:bg-[#2a2a2a] text-[#f5f5f5] font-medium rounded-xl border border-[#2a2a2a] transition-all relative overflow-hidden group"
                        whileHover={{scale: 1.05, y: -3, borderColor: "#3b82f6"}}
                        whileTap={{scale: 0.95}}
                    >
                        <motion.span
                            className="absolute inset-0 bg-gradient-to-r from-[#3b82f6]/0 via-[#3b82f6]/10 to-[#3b82f6]/0"
                            initial={{x: "-100%"}}
                            whileHover={{x: "100%"}}
                            transition={{duration: 0.6}}
                        />
                        <motion.span
                            animate={{rotate: [0, 360]}}
                            transition={{duration: 20, repeat: Infinity, ease: "linear"}}
                        >
                            <Github size={20}/>
                        </motion.span>
                        在 GitHub 查看更多项目
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
}
