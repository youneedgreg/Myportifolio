"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

import { HiChevronDown } from "react-icons/hi";
import { IoIosClose } from "react-icons/io";
import { NAVIGATION_LINKS } from "@/utils/consts";
import Badge from "./Badge";
import { usePathname } from "next/navigation";

const MenuToggler = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const openMenu = () => setMenuOpen(true);
    const closeMenu = () => setMenuOpen(false);

    const pathname = usePathname();

    const label = useMemo(() => {
        if (pathname === "/about") {
            return "About";
        }
        const currentLink = NAVIGATION_LINKS.find(
            (link) => link.path === pathname
        );
        return currentLink ? currentLink.label : "menu";
    }, [pathname]);

    const capitalizeLabel = (label) => {
        if (!label) return "";
        return label.charAt(0).toUpperCase() + label.slice(1);
    };

    return (
        <>
            <button
                className="group flex items-center rounded-full border border-gray-200 bg-white/90 px-4 py-2 text-xs font-medium text-zinc-800 shadow shadow-zinc-800/5 backdrop-blur-sm sm:hidden dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-50"
                aria-expanded="false"
                onClick={openMenu}
            >
                {capitalizeLabel(label)}
                <HiChevronDown className="ml-2 stroke-zinc-500 group-hover:stroke-zinc-700 dark:group-hover:stroke-zinc-400" />
            </button>
            <section className="relative md:hidden">
                {menuOpen && (
                    <div
                        className="fixed inset-0 z-50 bg-zinc-800/20 backdrop-blur-xs transition-opacity duration-300 dark:bg-black/80"
                        onClick={closeMenu}
                    />
                )}

                {menuOpen && (
                    <div className="fixed inset-x-4 top-8 z-50 origin-top rounded-3xl border border-gray-200 bg-white p-8 dark:border-neutral-700 dark:bg-zinc-900">
                        <div className="flex flex-row-reverse items-center justify-between">
                            <button
                                aria-label="Close menu"
                                className="-m-1 p-1"
                                type="button"
                                onClick={closeMenu}
                            >
                                <IoIosClose className="h-6 w-6 text-zinc-500 dark:text-zinc-400" />
                            </button>
                            <h2 className="text-xs font-bold text-zinc-600 uppercase dark:text-zinc-400">
                                MENU
                            </h2>
                        </div>
                        <nav className="mt-6">
                            <ul className="-my-2 divide-y divide-zinc-100 text-base text-zinc-800 dark:divide-zinc-100/5 dark:text-zinc-300">
                                {NAVIGATION_LINKS.map((item) => {
                                    const isSelected = item.path === pathname;

                                    return (
                                        <li
                                            key={item.path}
                                            className="cursor-pointer rounded-sm px-2 hover:bg-slate-50 dark:hover:bg-neutral-800"
                                        >
                                            <Link
                                                href={item.path}
                                                onClick={closeMenu}
                                                className="flex items-center justify-between"
                                            >
                                                <p className="relative flex py-4 align-middle text-sm capitalize transition-all hover:text-neutral-800 dark:hover:text-gray-200">
                                                    {item.label}
                                                </p>

                                                {isSelected && (
                                                    <Badge label="Current" />
                                                    // <div className="bg-black h-1.5 w-1.5 rounded-full" />
                                                )}
                                            </Link>
                                        </li>
                                    );
                                })}
                            </ul>
                        </nav>
                    </div>
                )}
            </section>
        </>
    );
};

export default MenuToggler;
