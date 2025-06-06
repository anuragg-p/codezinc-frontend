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
                    
                </button>
            </div>
            <div className="flex flex-wrap items-center justify-between px-10 py-2">
                <h1 className="text-4xl">
                    {Dateformat}
                </h1>
                <div className="flex justify-center">
                    
                    
                  
                  
                    
                </div>
            </div>
        </>
    );
};

export {DashBoardHeader}