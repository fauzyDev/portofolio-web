"use client"

import React from 'react';
import Image from 'next/image'
import Link from 'next/link'
import Input from "@/components/Input"

const ChatClient = () => {
    const [message, setMessage] = React.useState([]);

    const sendMessage = async ( input ) => {
        const response = await fetch('/api/starx-ai', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ message: input }),
        });
    
        const data = await response.json();
        console.log(data)
        setMessage([...message, { role: 'user', input }, { role: 'starx-ai', content: data.content }]);
    }

    return (
        <div className="flex min-h-screen bg-white dark:bg-neutral-800">
            {/* Sidebar */}
            <aside className="fixed bottom-0 left-0 z-10 w-full bg-white border-t dark:bg-neutral-900 dark:border-neutral-700 flex justify-center lg:justify-start lg:items-start lg:flex-col lg:w-60 lg:h-screen lg:border-r lg:py-6 lg:px-4">
                <Link
                    href="/"
                    className="m-2 lg:mx-0 py-2 px-4 w-fit text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700">
                    Keluar
                </Link>
            </aside>

            {/* Konten utama */}
            <main className="flex-1 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 lg:ml-60">
                <header className="w-full max-w-2xl text-center py-6 sm:py-8">
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-white">
                        Welcome to STAR-X AI
                    </h1>
                    <p className="mt-2 text-base sm:text-lg text-gray-600 dark:text-neutral-400">
                        Your AI-powered copilot for the web
                    </p>
                </header>

                {/* Chat Box */}
                <div className="w-full max-w-2xl flex flex-col space-y-4 bg-white dark:bg-neutral-800 p-4 sm:p-6 rounded-lg shadow-lg overflow-y-auto h-[70vh] border border-gray-200 dark:border-neutral-700">
                    <ul className="space-y-6">
                        {/* Pesan sistem */}
                        <li className="max-w-lg flex gap-x-3 sm:gap-x-4 me-10">
                            <Image
                                className="inline-block w-9 h-9 sm:w-11 sm:h-11 rounded-full"
                                width={50}
                                height={50}
                                src="https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&&auto=format&fit=facearea&facepad=3&w=300&h=300&q=80"
                                alt="Avatar"
                            />
                            <div className="bg-white border border-gray-200 rounded-2xl p-4 space-y-3 dark:bg-neutral-900 dark:border-neutral-700">
                                <h2 className="font-medium text-gray-800 dark:text-white">INFO!!</h2>
                                <p className="text-sm text-gray-800 dark:text-white">
                                    Fitur ini masih dalam tahap pengembangan
                                </p>
                            </div>
                        </li>

                        {/* Pesan user */}
                        <li className="flex ms-auto gap-x-3 sm:gap-x-4 items-end">
                            <div className="grow text-end space-y-3">
                                <div className="inline-block bg-blue-600 rounded-2xl p-4 shadow-sm max-w-sm">
                                    <p className="text-sm text-white">Coming Soon</p>
                                </div>
                            </div>
                            <span className="shrink-0 inline-flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gray-600">
                                <span className="text-sm font-medium text-white leading-none">YOU</span>
                            </span>
                        </li>
                    </ul>
                </div>

                {/* Input Chat */}
                <div className="w-full max-w-2xl bg-white border-t border-gray-200 dark:bg-neutral-900 dark:border-neutral-700 p-4 sm:p-6 sticky bottom-0">
                    <Input onSubmit={sendMessage}/>
                </div>
            </main>
        </div>
    );
}

export default ChatClient;
