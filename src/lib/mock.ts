import { Project, Skill, Experience, NavItem } from "@/types";

export const navItems: NavItem[] = [
  { label: "首页", href: "#home" },
  { label: "关于", href: "#about" },
  { label: "作品", href: "#projects" },
  { label: "技能", href: "#skills" },
  { label: "联系", href: "#contact" },
];

export const projects: Project[] = [
  {
    id: "1",
    title: "建e网 - 3D设计素材平台",
    description: "公司最主要项目，行业内有较高影响力，为设计师提供3D模型、SU模型、案例、灵感等支持。主导前后端分离重构(jQuery转Next)，负责SEO优化、多域名处理、CI/CD流水线部署，实现PM2多进程部署保障不挂机。",
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&q=80",
    tags: ["Next.js", "SEO优化", "PM2", "CI/CD", "多域名"],
    demoUrl: "https://www.justeasy.cn",
    featured: true,
  },
  {
    id: "2",
    title: "建e全景 - VR全景展示平台",
    description: "为用户提供720°全景预览，支持编辑预览效果、作品说明、一键预约等功能。兼容PC、手机、平板多端展示。独立完成前后端分离重构(jQuery转Next)，提供krpano全景技术支持，封装直播云工具类函数。",
    image: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=800&q=80",
    tags: ["Next.js", "krpano", "WebGL", "VR", "多端适配"],
    demoUrl: "https://vr.justeasy.cn",
    featured: true,
  },
  {
    id: "3",
    title: "全景海外站 - 国际化项目",
    description: "海外全景项目，提供全景图相关服务。使用gtranslate实现全局翻译功能，对接Facebook、Twitter、Google等一键登录，基于Nuxt(Vue)框架完成全部开发，负责性能优化、自研优化、普通模板等功能。",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
    tags: ["Nuxt.js", "Vue", "国际化", "gtranslate", "SSO"],
    demoUrl: "https://www.3dppano.com",
    featured: true,
  },
  {
    id: "4",
    title: "AI图像算法平台",
    description: "自研产品，一站式图像处理平台，通过前端页面标注图片缺陷坐标训练模型。使用AiLabel.js和Canvas实现人工标注，将SAM模型封装实现前端执行模型推理减少70%服务器压力，实现国际化、菜单权限、分片上传、续传等功能。",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
    tags: ["React", "Canvas", "SAM模型", "AI标注", "WebAssembly"],
    demoUrl: "https://ai.fitow.com:81",
    featured: true,
  },
  {
    id: "5",
    title: "行车安全检测系统",
    description: "工业行车安全检测系统，通过算法服务限制工人按照正确流程操作。负责Web端中台、后台、移动APP、数据大屏前端开发，海康SDK集成实现直播视频流播放，Three.js实现大屏3D效果，权限配置实现版本选择。",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    tags: ["React", "Three.js", "海康SDK", "数据大屏", "APP"],
    featured: true,
  },
  {
    id: "6",
    title: "微信小程序/H5/APP开发",
    description: "负责公司全站H5、小程序、APP迭代开发工作，包括建e网移动端、全景小程序等。使用Taro、uniapp进行跨平台开发，实现一套代码多端运行，有丰富的小程序原生开发经验。",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80",
    tags: ["微信小程序", "Taro", "uniapp", "React Native", "移动端"],
    featured: true,
  },
];

export const skills: Skill[] = [
  // 前端框架
  { name: "React / React18+", level: 95, category: "frontend" },
  { name: "Vue2 / Vue3", level: 92, category: "frontend" },
  { name: "Next.js / Nuxt.js", level: 90, category: "frontend" },
  { name: "TypeScript", level: 88, category: "frontend" },
  { name: "JavaScript (ES6+)", level: 95, category: "frontend" },
  { name: "HTML5 / CSS3", level: 95, category: "frontend" },
  { name: "Arco Design / Ant Design", level: 90, category: "frontend" },
  { name: "Three.js / Canvas", level: 82, category: "frontend" },
  
  // 跨平台开发
  { name: "微信小程序 / Taro / uniapp", level: 92, category: "backend" },
  { name: "React Native / 移动端", level: 80, category: "backend" },
  { name: "H5开发", level: 90, category: "backend" },
  { name: "响应式设计", level: 90, category: "backend" },
  
  // 工具
  { name: "Git / GitHub", level: 90, category: "tools" },
  { name: "Postman / Apifox", level: 88, category: "tools" },
  { name: "PM2 / CI/CD", level: 85, category: "tools" },
  { name: "Webpack / Vite", level: 85, category: "tools" },
  { name: "AI工具 / Cursor", level: 90, category: "tools" },
  
  // 专业能力
  { name: "SEO优化", level: 88, category: "other" },
  { name: "性能优化", level: 90, category: "other" },
  { name: "UI还原 / 产品级复现", level: 92, category: "other" },
  { name: "技术难题攻关", level: 88, category: "other" },
];

export const experiences: Experience[] = [
  {
    id: "1",
    company: "南京设易网络科技有限公司",
    position: "高级前端开发",
    startDate: "2024.09",
    endDate: "至今",
    description: "主导公司全站前后端分离工作(jQuery转Next)，负责全站H5、小程序、APP迭代开发。持续研究krpano为全景项目提供技术支持，负责全站日常活动及充值业务，解决项目中的技术难题、深入研究新兴技术。",
    technologies: ["Next.js", "React", "Vue", "krpano", "小程序"],
  },
  {
    id: "2",
    company: "梦当然科技(南京)有限公司",
    position: "前端组长",
    startDate: "2024.05",
    endDate: "2024.09",
    description: "主导公司所有前端业务，协同3名组员推动项目成功落地。负责核心模块和组件的开发，保障项目稳定性，带领团队高效完成多个重要项目交付。",
    technologies: ["React", "Vue", "Three.js", "团队管理"],
  },
  {
    id: "3",
    company: "菲特(天津)检测技术有限公司",
    position: "中级前端开发",
    startDate: "2022.09",
    endDate: "2024.05",
    description: "主导公司所有工业质检相关项目的前端工作及标准化产品开发。独自负责网站前端开发，实现产品的页面交互及功能。持续优化前端体验和页面响应速度，提升Web界面易用性。",
    technologies: ["React", "Vue", "AI图像处理", "Three.js", "海康SDK"],
  },
];

export const personalInfo = {
  name: "杨枫",
  title: "前端工程师",
  subtitle: "5年工作经验",
  email: "17611773761@163.com",
  phone: "176-1177-3761",
  location: "南京市",
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  wechat: "17611773761",
  bio: "为人幽默、喜爱交友，拥有良好的沟通表达能力，遇到问题情绪稳定，能与他人良好协作。遇到问题反馈快、及时更正，遇到不会的能快速学习上手。对新技术学习感兴趣，喜欢不断提升突破自己，积极乐观、执行力强。有良好的代码编写习惯和组件封装意识，喜欢看掘金和博客上的技术文章。",
  avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
};
