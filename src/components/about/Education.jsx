import Link from "next/link";
import Card from "../ui/Card";
import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";
import usiu from "../../../public/images/education/usiu.png";

const Education = () => {
    return (
        <section className="flex flex-col space-y-6">
            <h2 className="text-xl font-semibold tracking-tighter">
                Where I studied
            </h2>

            <p>
                I am currently pursuing my bachelor&apos;s degree in Software Engineering at
                the{" "}
                <Link
                    href="https://www.usiu.ac.ke/"
                    title="Visit site"
                    target="_blank"
                    className="font-medium hover:underline"
                >
                    United States International University
                </Link>{" "}
                projecting an academic honor of distinction: <em>Magna Cum Laude</em>.
            </p>

            <div className="my-2 flex w-full flex-col space-y-4 space-x-0 sm:flex-row sm:space-y-0 sm:space-x-4">
                <div className="group flex w-full">
                    <Link
                        href="https://www.usiu.ac.ke/"
                        className="w-full"
                        target="_blank"
                    >
                        <Card>
                            <div className="flex items-center space-x-3">
                                <div>
                                    <Image
                                        src={usiu}
                                        className="h-12 w-12 rounded-lg object-contain"
                                        alt="University of Perpetual Help System Laguna"
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <p className="line-clamp-1 text-sm font-bold text-neutral-900 dark:text-neutral-100">
                                        United States International University.
                                    </p>
                                    <p className="text-xs text-neutral-900 dark:text-neutral-100">
                                        BS Software Engineering
                                    </p>
                                    <p className="text-xs text-neutral-900 dark:text-neutral-100">
                                        {/* 2023 - 2027 */}
                                        Class of 2027
                                    </p>
                                </div>
                            </div>
                            <div className="transform text-neutral-700 transition-transform duration-300 group-hover:-rotate-12 dark:text-neutral-300">
                                <FiArrowUpRight size={18} />
                            </div>
                        </Card>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Education;
