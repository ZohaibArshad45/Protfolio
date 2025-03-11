"use client";
import React from "react";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
const people = [
    {
        id: 1,
        name: "Muhammad Ahamd",
        designation: "Manager / Flutter",
        image:
            "/Ahmad.jpg",
    },
    {
        id: 2,
        name: "Arslan Arshad",
        designation: "Ml/AI Python",
        image:
            "/Arslan.png",
    },
    {
        id: 3,
        name: "Anas Amin",
        designation: "Python Developer",
        image:
        "/Anas.png",
            
    },
    {
        id: 4,
        name: "Zohaib Arshad",
        designation: "React / Nextjs",
        image:
        "/ZaDev.jpg",
    },
    {
        id: 5,
        name: "Mustansir",
        designation: "Hacker",
        image:
            "/Mustansir.png",
    },
    // {
    //     id: 6,
    //     name: "Dora",
    //     designation: "The Explorer",
    //     image:
    //         "",
    // },
];

export function AnimatedTooltipPreview() {
    return (
        (<div className="flex flex-row items-center justify-center mb-10 w-full">
            <AnimatedTooltip items={people} />
        </div>)
    );
}
