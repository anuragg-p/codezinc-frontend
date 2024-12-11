"use client";
import React, { useState } from "react";
import type { TodoItemType1 } from "@/types/todo.types";
import { Trash2 } from "lucide-react";

const TodoItem: React.FC<TodoItemType1> = ({ name, type, removeTodo, checked, setChecked }) => {

    const [isHovered, setIsHovered] = useState(false);
    const handleMouseEnter = () => {
        setIsHovered(true);
    };
    const handleMouseLeave = () => {
        setIsHovered(false);
    };
    return (
        <div 
        className="flex justify-between items-center rounded-xl bg-gray-900 px-2 py-2"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        >
            <div className="inline-flex mx-2 space-x-2">
                <input
                    type="checkbox"
                    checked={checked}
                    onChange={() => setChecked(name, type)}
                    className="cursor-pointer"
                />
                <div className={checked ? 'text-gray-400 line-through' : 'text-white'}>{name}</div>
            </div>
            {isHovered && (
            <button 
            className="px-2 hover:opacity-70"
            onClick={()=> removeTodo(name, type)}
            >
                <Trash2 size={18} />
            </button>
            )}
        </div>
    );
};

export {TodoItem}