"use client";
import React, { useState } from "react";
import type { TodoItemType } from "@/types/todo.types";
import { Trash2 } from "lucide-react";

const TodoItem: React.FC<TodoItemType> = ({ name }) => {
    const [isChecked, setIsChecked] = useState(false);
    return (
        <div className="flex justify-between items-center rounded-xl bg-gray-900 px-2 py-2">
            <div className="inline-flex mx-2 space-x-2">
                <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={() => setIsChecked(!isChecked)}
                    className="cursor-pointer"
                />
                <div className={isChecked ? 'text-gray-400 line-through' : 'text-white'}>{name}</div>
            </div>
            <button className="p-2 hover:opacity-70">
                <Trash2 size={18} />
            </button>
        </div>
    );
};

export {TodoItem}