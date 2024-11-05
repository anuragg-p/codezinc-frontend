"use client";
import React from "react";

const TodoFooter = () => {
    return (
        <div className="sticky bottom-0 flex flex-wrap gap-4 mx-10 mb-2">
            <p>Built by</p>
            <a
                href="https://www.google.com/"
                className="text-blue-500 underline hover:no-underline"
            >
                Codezinc
            </a>
            <a
                href="https://www.google.com/"
                className="text-blue-500 underline hover:no-underline"
            >
                GitHub
            </a>
            <a
                href="https://www.google.com/"
                className="text-blue-500 underline hover:no-underline"
            >
                Twitter
            </a>
        </div>
    );
};

export {TodoFooter}