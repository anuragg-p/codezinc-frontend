"use client";
import React, { useState } from "react";
import { Input } from "./ui/input";
import { ChevronDown } from "lucide-react";



// Component for Tags box
const TagInput = () => {
    const [tagInput, setTagInput] = useState("")
    const [isHovered, setIsHovered] = useState(false)
    const handleMouseEnter = () => {
        setIsHovered(true);
    }
    const handleMouseLeave = () => {
        setIsHovered(false);
    }

    return (
        <div
            className="flex items-center"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <Input
                id="add-tag"
                type="text"
                placeholder="Add your Tag here..."
                defaultValue="rounded-xl"
                className="block bg-gray-900 rounded-xl h-12 text-base border-2 border-gray-600 focus:outline-none"
                value={tagInput}
                onChange={(e) => setTagInput(e.target.value)}
            />

            {isHovered &&
                <button
                    className="absolute transform translate-x-[350px] cursor-pointer"
                >
                    <ChevronDown />
                </button>
            }
        </div>
    );
};

export {TagInput}