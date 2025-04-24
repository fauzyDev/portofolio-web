import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function page() {
  return (
    <div className="relative dark:bg-neutral-800 md:container md:mx-auto min-h-screen flex flex-col items-center justify-center px-4">
      <Link href="/" className="absolute top-4 right-6 py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
        Keluar
      </Link>
      <header className="w-full max-w-2xl text-center py-4">
        <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl dark:text-white">Welcome to STAR-X AI</h1>
        <p className="mt-2 text-gray-600 dark:text-neutral-400">Your AI-powered copilot for the web</p>
      </header>

      {/* you */}
      <div className="w-full max-w-2xl flex flex-col space-y-4 bg-white dark:bg-neutral-800 p-4 rounded-lg shadow-lg overflow-y-auto h-[70vh] border border-gray-200 dark:border-neutral-700">
        <ul className="space-y-5">
          <li className="max-w-lg flex gap-x-2 sm:gap-x-4 me-11">
            <Image className="inline-block size-9 rounded-full" width={50} height={50} src="https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&&auto=format&fit=facearea&facepad=3&w=300&h=300&q=80" alt="Avatar" />

            <div className="bg-white border border-gray-200 rounded-2xl p-4 space-y-3 dark:bg-neutral-900 dark:border-neutral-700">
              <h2 className="font-medium text-gray-800 dark:text-white">
                INFO!!
              </h2>
              <div className="space-y-1.5">
                <p className="mb-1.5 text-sm text-gray-800 dark:text-white">
                  Fitur ini masih dalam tahap pengembangan
                </p>
              </div>
            </div>
          </li>

          <li className="flex ms-auto gap-x-2 sm:gap-x-4">
            <div className="grow text-end space-y-3">
              <div className="inline-block bg-blue-600 rounded-2xl p-4 shadow-sm">
                <p className="text-sm text-white">
                  Cooming Soon
                </p>
              </div>
            </div>

            <span className="shrink-0 inline-flex items-center justify-center size-[38px] rounded-full bg-gray-600">
              <span className="text-sm font-medium text-white leading-none">YOU</span>
            </span>
          </li>
        </ul>
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
