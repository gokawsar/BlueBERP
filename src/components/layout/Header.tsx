'use client';

import { useState, useEffect } from 'react';
import { useSettings } from '@/lib/settingsContext';

interface HeaderProps {
    onMenuClick: () => void;
    title?: string;
}

export default function Header({ onMenuClick, title = 'Dashboard Overview' }: HeaderProps) {
    const [searchOpen, setSearchOpen] = useState(false);
    const { darkMode, toggleDarkMode } = useSettings();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <header className="h-16 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-4">
                {/* Mobile menu button */}
                <button
                    onClick={onMenuClick}
                    className="md:hidden p-2 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>

                <h1 className="text-xl font-bold text-gray-900 dark:text-white hidden sm:block">{title}</h1>
            </div>

            <div className="flex items-center gap-4">
                {/* Search - Desktop */}
                <div className="relative hidden md:block">
                    <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <input
                        className="pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none w-64 transition-all"
                        placeholder="Search..."
                        type="text"
                    />
                </div>

                {/* Mobile search toggle */}
                <button
                    onClick={() => setSearchOpen(!searchOpen)}
                    className="md:hidden p-2 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </button>

                {/* Notifications */}
                <button className="p-2 text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors relative">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                    </svg>
                    <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                </button>

                {/* Dark Mode Toggle */}
                {mounted && (
                    <button
                        onClick={toggleDarkMode}
                        className="p-2 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                        title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
                    >
                        {darkMode ? (
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                            </svg>
                        ) : (
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                            </svg>
                        )}
                    </button>
                )}

                {/* Divider */}
                <div className="h-8 w-px bg-gray-200 dark:bg-gray-700 mx-2 hidden sm:block"></div>

                {/* Date - Desktop */}
                <span className="text-sm text-gray-500 dark:text-gray-400 hidden sm:block">
                    {new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                </span>
            </div>

            {/* Mobile search bar */}
            {searchOpen && (
                <div className="absolute top-16 left-0 right-0 p-4 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 md:hidden z-20">
                    <div className="relative">
                        <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                        <input
                            className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                            placeholder="Search..."
                            type="text"
                            autoFocus
                        />
                    </div>
                </div>
            )}
        </header>
    );
}
