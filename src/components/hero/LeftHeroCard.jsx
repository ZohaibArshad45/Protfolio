import React from "react";
import { FlipWords } from "@/components/ui/flip-words";
import { AnimatedTooltipPreview } from "./Tooltip";

export function FlipWordsDemo() {
    const words = [
        "Web Development", 
        "Python Scraping", 
        "Python Automation", 
        "App Development", 
        "Marketing",
        "SEO Optimization",
        "E-commerce Solutions",
        "Software Development",
        "AI-Powered Applications"
    ];

    return (
        <div className="h-[30rem] flex flex-col justify-center items-center p-4 text-center">
            <div className="text-2xl md:text-2xl font-normal text-neutral-600 dark:text-neutral-400">
                <p>
                    We specialize in <br />
                    <span className="inline-block text-blue-500 font-bold text-2xl md:text-4xl">
                        <FlipWords words={words} />
                    </span>
                </p>

                {/* Mobile Version (Less Text) */}
                <p className="text-sm text-neutral-500 mt-3 md:hidden">
                    Creating top-notch digital solutions with innovation & technology. 🚀
                </p>

                {/* Desktop Version (More Text) */}
                <p className=" text-lg text-neutral-500 mt-4">
                    Bringing ideas to life with cutting-edge technology & creativity. 🚀✨
                    <br />
                    Our team is dedicated to delivering high-quality solutions that help businesses grow and innovate.
                </p>

                <p className="hidden md:block text-md text-neutral-500 mt-2">
                    Whether you need a stunning website, a powerful web scraper, 
                    or an AI-driven application, we've got you covered. 
                    Let's build something amazing together!
                </p>
                

                <div className="mt-6">
                    <AnimatedTooltipPreview />
                </div>
            </div>
        </div>
    );
}
