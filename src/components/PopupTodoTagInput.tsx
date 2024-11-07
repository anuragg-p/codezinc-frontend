"use client";
import React, { useState } from "react";
import { Input } from "./ui/input";
import { ChevronDown } from "lucide-react";

// Component for Tags box
const PopupTodoTag = () => {
  const [tagInput, setTagInput] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className={"mb-2"}>
      <div className="mb-2 ml-2">
        Tags
        <i className="text-sm text-gray-400">(optional, press Enter to add)</i>
      </div>
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
          className="block h-12 rounded-xl border-2 border-gray-600 bg-gray-900 text-base focus:outline-none"
          value={tagInput}
          onChange={(e) => setTagInput(e.target.value)}
        />
        {isHovered && (
          <button className="absolute translate-x-[350px] transform cursor-pointer">
            <ChevronDown />
          </button>
        )}
      </div>
    </div>
  );
};

export { PopupTodoTag };
