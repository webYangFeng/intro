import type {Metadata} from "next";
import {Geist, Geist_Mono} from "next/font/google";
import "./globals.css";
import {Navbar} from "@/components/Navbar";
import {Footer} from "@/components/Footer";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "杨枫 | 前端工程师 - 5年经验",
    description: "专注于React、Vue、Next.js等现代前端技术栈的前端工程师，拥有5年开发经验，擅长大型项目前后端分离重构、性能优化、跨平台开发。",
    keywords: ["前端开发", "React", "Vue", "Next.js", "TypeScript", "微信小程序", "前端工程师"],
    authors: [{name: "杨枫"}],
    openGraph: {
        title: "杨枫 | 前端工程师 - 5年经验",
        description: "专注于React、Vue、Next.js等现代前端技术栈的前端工程师",
        type: "website",
    },
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="zh-CN" className="scroll-smooth">
        <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0f0f0f] text-[#f5f5f5] min-h-screen`}
        >
        <Navbar/>
        <main className="pt-16">
            {children}
        </main>
        <Footer/>
        </body>
        </html>
    );
}
