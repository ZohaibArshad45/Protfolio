import React from "react";
import { FlipWordsDemo } from "./LeftHeroCard";
import { BackgroundBeamsWithCollision } from "../ui/background-beams-with-collision";

const MianHero = () => {
    return (
        <BackgroundBeamsWithCollision>
            <div className="flex flex-col lg:flex-row w-full ">
                {/* Left Section */}
                <div className="w-full  flex  items-center justify-center p-4">
                    <FlipWordsDemo />
                </div>

            </div>
        </BackgroundBeamsWithCollision>
    );
};

export default MianHero;
