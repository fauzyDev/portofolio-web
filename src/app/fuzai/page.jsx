import React from 'react'

export default function page() {
  return (
    <div className="dark:bg-neutral-900 min-h-screen flex flex-col items-center justify-center px-4">
      <header className="w-full max-w-2xl text-center py-4">
        <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl dark:text-white">Welcome to FUZ AI</h1>
        <p className="mt-2 text-gray-600 dark:text-neutral-400">Your AI-powered copilot for the web</p>
      </header>
      {/* you */}
      <div className="w-full max-w-2xl flex flex-col space-y-4 bg-white dark:bg-neutral-900 p-4 rounded-lg shadow-lg overflow-y-auto h-[70vh] border border-gray-200 dark:border-neutral-700">
        <li className="max-w-2xl ms-auto flex justify-end gap-x-2 sm:gap-x-4">
          <div className="grow text-end space-y-3">   
            <div className="inline-block bg-blue-600 rounded-lg p-4 shadow-sm">
              <p className="text-sm text-white">
                Cooming soon
              </p>
            </div>
          </div>
          {/* border */}
            <span className="shrink-0 inline-flex items-center justify-center size-[38px] rounded-full bg-gray-600">
              <span className="text-sm font-medium text-white leading-none">YOU</span>
            </span>
          </li>

          {/* AI */}
          <li className="flex gap-x-2 sm:gap-x-4">
            <svg className="shrink-0 size-[38px] rounded-full" width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="38" height="38" rx="6" fill="#2563EB" />
              <path d="M10 28V18.64C10 13.8683 14.0294 10 19 10C23.9706 10 28 13.8683 28 18.64C28 23.4117 23.9706 27.28 19 27.28H18.25" stroke="white" strokeWidth="1.5" />
              <path d="M13 28V18.7552C13 15.5104 15.6863 12.88 19 12.88C22.3137 12.88 25 15.5104 25 18.7552C25 22 22.3137 24.6304 19 24.6304H18.25" stroke="white" strokeWidth="1.5" />
              <ellipse cx="19" cy="18.6554" rx="3.75" ry="3.6" fill="white" />
            </svg>

           
            <div className="bg-white border border-gray-200 rounded-lg p-4 space-y-3 dark:bg-neutral-900 dark:border-neutral-700">
              <div className="space-y-1.5">
                <p className="text-sm text-gray-800 dark:text-white">
                  Msih dalam pengembangan
                </p>
              </div>
            </div>
          </li>
      </div>
      
      <div className="w-full max-w-2xl bg-white border-t border-gray-200 dark:bg-neutral-900 dark:border-neutral-700 p-4 sticky bottom-0">
        <div className="relative">
          <textarea disabled className="p-3 block w-full border border-gray-300 rounded-lg text-sm focus:ring-blue-500 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500" placeholder="Ask me anything..."></textarea>
          <button disabled type="button" className="absolute bottom-2 right-2 p-2 rounded-lg bg-blue-600 text-white hover:bg-blue-500 focus:outline-none">
            <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}
