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
            data-oid="d95ejc5"
        >
            <header className="max-w-2xl" data-oid="rwa6l..">
                <h1
                    className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl"
                    data-oid="7ncnd.:"
                >
                    Personal Projects
                </h1>
                <p
                    className="mt-6 text-base text-zinc-600 dark:text-zinc-400"
                    data-oid=":smnwnc"
                >
                    A showcase of my personal projects, experiments, and side
                    endeavors. Each project represents a unique challenge and
                    learning opportunity.
                </p>
            </header>
            <div className="mt-16 sm:mt-20" data-oid="za2gpyb">
                <div
                    className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2"
                    data-oid="-uxv4c2"
                >
                    {/* 2Day Project Card */}
                    <div
                        className="group relative flex flex-col overflow-hidden rounded-lg border border-zinc-200 dark:border-zinc-800 transition-transform transform hover:scale-[1.02] hover:shadow-xl duration-300 ease-in-out"
                        data-oid="i--ltna"
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
                            data-oid="ej3-hvh"
                        />

                        <div
                            className="flex flex-1 flex-col justify-between p-6"
                            data-oid="_coy0nz"
                        >
                            <div className="flex-1" data-oid="9og:cxh">
                                <h3
                                    className="text-xl font-semibold text-zinc-800 dark:text-zinc-100"
                                    data-oid="6:epzkg"
                                >
                                    2Day - All-in-One Productivity Solution
                                </h3>
                                <div
                                    className="hidden sm:block"
                                    data-oid=":jp91e5"
                                >
                                    <p
                                        className="mt-3 text-base text-zinc-600 dark:text-zinc-400"
                                        data-oid="-vn4nt3"
                                    >
                                        A comprehensive productivity application
                                        combining habit tracking, todo lists,
                                        reminders, and notes in one seamless
                                        interface.
                                    </p>
                                    <div
                                        className="mt-4 space-y-2"
                                        data-oid="wv21vrq"
                                    >
                                        <h4
                                            className="font-medium text-zinc-800 dark:text-zinc-100"
                                            data-oid="_f:f4pd"
                                        >
                                            Key Features:
                                        </h4>
                                        <ul
                                            className="list-disc list-inside text-sm text-zinc-600 dark:text-zinc-400 space-y-1"
                                            data-oid="vmgkukh"
                                        >
                                            <li data-oid="-68as:z">
                                                Habit tracking with streak
                                                visualization
                                            </li>
                                            <li data-oid="im3aars">
                                                Priority-based todo lists
                                            </li>
                                            <li data-oid="jl92piz">
                                                Time-based reminders
                                            </li>
                                            <li data-oid="ovtl:hm">
                                                Rich text notes with categories
                                            </li>
                                            <li data-oid="cvd:2i2">
                                                Interactive dashboard
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="mt-6 flex flex-col gap-4"
                                data-oid=".:om1.f"
                            >
                                <div
                                    className="flex flex-wrap gap-2"
                                    data-oid="dn6aoyz"
                                >
                                    <span
                                        className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                                        data-oid="b8qvofj"
                                    >
                                        Next.js
                                    </span>
                                    <span
                                        className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                                        data-oid="5u7vo-g"
                                    >
                                        TypeScript
                                    </span>
                                    <span
                                        className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                                        data-oid="9qhl3ts"
                                    >
                                        shadcn/ui
                                    </span>
                                    <span
                                        className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                                        data-oid="ajgpt3i"
                                    >
                                        Tailwind CSS
                                    </span>
                                </div>
                                <div className="flex gap-4" data-oid="seetw3n">
                                    <a
                                        href="https://2dayy.vercel.app/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sm font-medium text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                                        data-oid="kv1ve:f"
                                    >
                                        Live Demo →
                                    </a>
                                    <a
                                        href="https://github.com/youneedgreg/2day"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sm font-medium text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                                        data-oid="wnky:e1"
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
                data-oid="tq_lo0p"
            />
        </div>
    );
}
