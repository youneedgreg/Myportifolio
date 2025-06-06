"use client";

import { useState } from 'react';
import ImageModal from "@/components/ui/ImageModal";

export default function ProjectsPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentImageUrl, setCurrentImageUrl] = useState('');

    const handleImageClick = (imageUrl) => {
        setCurrentImageUrl(imageUrl);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setCurrentImageUrl('');
    };

    return (
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-16 sm:mt-20">
            <header className="max-w-2xl">
                <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                    Personal Projects
                </h1>
                <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
                    A showcase of my personal projects, experiments, and side endeavors. Each project represents a unique challenge and learning opportunity.
                </p>
            </header>
            <div className="mt-16 sm:mt-20">
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
                    {/* 2Day Project Card */}
                    <div className="group relative flex flex-col overflow-hidden rounded-lg border border-zinc-200 dark:border-zinc-800 transition-transform transform hover:scale-[1.02] hover:shadow-xl duration-300 ease-in-out">
                        <img
                            src="/2day-dashboard.png"
                            alt="2Day Dashboard Screenshot"
                            width={500}
                            height={300}
                            className="w-full object-cover rounded-t-lg cursor-pointer"
                            onClick={() => handleImageClick('/2day-dashboard.png')}
                        />
                        <div className="flex flex-1 flex-col justify-between p-6">
                            <div className="flex-1">
                                <h3 className="text-xl font-semibold text-zinc-800 dark:text-zinc-100">
                                    2Day - All-in-One Productivity Solution
                                </h3>
                                <div className="hidden sm:block">
                                    <p className="mt-3 text-base text-zinc-600 dark:text-zinc-400">
                                        A comprehensive productivity application combining habit tracking, todo lists, reminders, and notes in one seamless interface.
                                    </p>
                                    <div className="mt-4 space-y-2">
                                        <h4 className="font-medium text-zinc-800 dark:text-zinc-100">Key Features:</h4>
                                        <ul className="list-disc list-inside text-sm text-zinc-600 dark:text-zinc-400 space-y-1">
                                            <li>Habit tracking with streak visualization</li>
                                            <li>Priority-based todo lists</li>
                                            <li>Time-based reminders</li>
                                            <li>Rich text notes with categories</li>
                                            <li>Interactive dashboard</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-6 flex flex-col gap-4">
                                <div className="flex flex-wrap gap-2">
                                    <span className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                                        Next.js
                                    </span>
                                    <span className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                                        TypeScript
                                    </span>
                                    <span className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                                        shadcn/ui
                                    </span>
                                    <span className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                                        Tailwind CSS
                                    </span>
                                </div>
                                <div className="flex gap-4">
                                    <a
                                        href="https://2dayy.vercel.app/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sm font-medium text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                                    >
                                        Live Demo →
                                    </a>
                                    <a
                                        href="https://github.com/youneedgreg/2day"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sm font-medium text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                                    >
                                        GitHub →
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Image Modal */}
            <ImageModal
                src={currentImageUrl}
                alt="Full screen project screenshot"
                isOpen={isModalOpen}
                onClose={handleCloseModal}
            />
        </div>
    );
} 