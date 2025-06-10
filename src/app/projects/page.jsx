"use client";

import { useState } from "react";
import ImageModal from "@/components/ui/ImageModal";

export default function ProjectsPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentImageUrl, setCurrentImageUrl] = useState("");

    const handleImageClick = (imageUrl) => {
        setCurrentImageUrl(imageUrl);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setCurrentImageUrl("");
    };

    return (
        <div
            className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-16 sm:mt-20"
            data-oid="v.bjf2v"
        >
            <header className="max-w-2xl" data-oid="4a6ra_d">
                <h1
                    className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl"
                    data-oid="aecas1z"
                >
                    Personal Projects
                </h1>
                <p
                    className="mt-6 text-base text-zinc-600 dark:text-zinc-400"
                    data-oid="--fb7de"
                >
                    A showcase of my personal projects, experiments, and side
                    endeavors. Each project represents a unique challenge and
                    learning opportunity.
                </p>
            </header>
            <div className="mt-16 sm:mt-20" data-oid="jl3ftrg">
                <div
                    className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2"
                    data-oid="hm._:81"
                >
                    {/* 2Day Project Card */}
                    <div
                        className="group relative flex flex-col overflow-hidden rounded-lg border border-zinc-200 dark:border-zinc-800 transition-transform transform hover:scale-[1.02] hover:shadow-xl duration-300 ease-in-out"
                        data-oid="iq_2g_m"
                    >
                        <img
                            src="/2day-dashboard.png"
                            alt="2Day Dashboard Screenshot"
                            width={500}
                            height={300}
                            className="w-full object-cover rounded-t-lg cursor-pointer"
                            onClick={() =>
                                handleImageClick("/2day-dashboard.png")
                            }
                            data-oid="von5tab"
                        />

                        <div
                            className="flex flex-1 flex-col justify-between p-6"
                            data-oid="pzd9mib"
                        >
                            <div className="flex-1" data-oid="q:gvo9:">
                                <h3
                                    className="text-xl font-semibold text-zinc-800 dark:text-zinc-100"
                                    data-oid="y7hs3eo"
                                >
                                    2Day - All-in-One Productivity Solution
                                </h3>
                                <div
                                    className="hidden sm:block"
                                    data-oid="bwy7zdf"
                                >
                                    <p
                                        className="mt-3 text-base text-zinc-600 dark:text-zinc-400"
                                        data-oid=".gguc5f"
                                    >
                                        A comprehensive productivity application
                                        combining habit tracking, todo lists,
                                        reminders, and notes in one seamless
                                        interface.
                                    </p>
                                    <div
                                        className="mt-4 space-y-2"
                                        data-oid="mdx:gj3"
                                    >
                                        <h4
                                            className="font-medium text-zinc-800 dark:text-zinc-100"
                                            data-oid="s-dywi6"
                                        >
                                            Key Features:
                                        </h4>
                                        <ul
                                            className="list-disc list-inside text-sm text-zinc-600 dark:text-zinc-400 space-y-1"
                                            data-oid="9-f-ymv"
                                        >
                                            <li data-oid="h61g:z2">
                                                Habit tracking with streak
                                                visualization
                                            </li>
                                            <li data-oid="i3kaoaj">
                                                Priority-based todo lists
                                            </li>
                                            <li data-oid="wesh5yv">
                                                Time-based reminders
                                            </li>
                                            <li data-oid="d8ch8gz">
                                                Rich text notes with categories
                                            </li>
                                            <li data-oid="p2.hz-_">
                                                Interactive dashboard
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="mt-6 flex flex-col gap-4"
                                data-oid="7h7e..u"
                            >
                                <div
                                    className="flex flex-wrap gap-2"
                                    data-oid=".6c_u9x"
                                >
                                    <span
                                        className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                                        data-oid="h.dzqd."
                                    >
                                        Next.js
                                    </span>
                                    <span
                                        className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                                        data-oid="z.yocey"
                                    >
                                        TypeScript
                                    </span>
                                    <span
                                        className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                                        data-oid="0prn63m"
                                    >
                                        shadcn/ui
                                    </span>
                                    <span
                                        className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                                        data-oid="v_zr68k"
                                    >
                                        Tailwind CSS
                                    </span>
                                </div>
                                <div className="flex gap-4" data-oid="9k-h56m">
                                    <a
                                        href="https://2dayy.vercel.app/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sm font-medium text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                                        data-oid="9ourlqp"
                                    >
                                        Live Demo →
                                    </a>
                                    <a
                                        href="https://github.com/youneedgreg/2day"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sm font-medium text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                                        data-oid="kl246o."
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
                data-oid="jjxoy53"
            />
        </div>
    );
}
