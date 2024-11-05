"use client";
import React from "react";
import { Button } from "./ui/button";
import { SettingsIcon, XIcon } from "lucide-react";

// Header Component
const DashBoardHeader = () => {
    const currentDate = new Date();

    const Dateformat = currentDate.toLocaleDateString('en-US', {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
    });
    return (
        <>
            <div className="mx-1 flex flex-wrap justify-end">
                <button className="mr-8 p-2">
                    <SettingsIcon />
                </button>
            </div>
            <div className="flex flex-wrap items-center justify-between px-10 py-2">
                <h1 className="text-4xl">
                    {Dateformat}
                </h1>
                <div className="flex justify-center">
                    <input
                        type="text"
                        placeholder="Search todos"
                        className="rounded-xl border-2 border-gray-400 bg-gray-900 px-2 py-1 text-white"
                    />
                    <select
                        name=""
                        id=""
                        className="mx-2 rounded-xl border-2 border-gray-400 bg-gray-900 px-2 py-1"
                    >
                        <option value="null">All todos</option>
                    </select>
                    <Button className="rounded-xl bg-gray-900 hover:opacity-50 hover:bg-green-700">
                        <XIcon />
                    </Button>
                    <button className="ml-7 mr-5 rounded-xl bg-green-700 px-2 py-1">
                        Add Todo
                    </button>
                    <button className="text-sm text-gray-400">Remove Done</button>
                </div>
            </div>
        </>
    );
};

export {DashBoardHeader}