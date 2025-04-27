"use client"

import React from 'react';
import { Textarea } from "@heroui/react";

const Input = ({ onSubmit }) => {
    const [input, setInput] = React.useState("")

    const handleSubmit = () => {
        if (input.trim() === "") return;
        onSubmit(input)
        setInput("")
    }

    return (
        <div className="relative">
            <Textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                variant="faded"
                className="p-3 block w-full border border-gray-300 rounded-lg text-sm focus:ring-blue-500 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500"
                placeholder="Ask me anything..."
            />
            <button onClick={handleSubmit} type="submit" className="absolute bottom-2 right-2 p-2 rounded-lg bg-blue-600 text-white hover:bg-blue-500 focus:outline-none">
                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Z" />
                </svg>
            </button>
        </div>
    );
}

export default Input;
