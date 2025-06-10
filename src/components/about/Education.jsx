import Link from "next/link";
import Card from "../ui/Card";
import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";
import usiu from "../../../public/images/education/usiu.png";

const Education = () => {
    return (
        <section className="flex flex-col space-y-6" data-oid="40b5.sb">
            <h2
                className="text-xl font-semibold tracking-tighter"
                data-oid="8xhz7tp"
            >
                Where I am studying
            </h2>

            <p data-oid="q91pp1t">
                I am currently pursuing my bachelor&apos;s degree in Software
                Engineering at the{" "}
                <Link
                    href="https://www.usiu.ac.ke/"
                    title="Visit site"
                    target="_blank"
                    className="font-medium hover:underline"
                    data-oid="0ljvr0d"
                >
                    United States International University
                </Link>{" "}
                projecting an academic honor of distinction:{" "}
                <em data-oid="k2d00f0">Magna Cum Laude</em>.
            </p>

            <div
                className="my-2 flex w-full flex-col space-y-4 space-x-0 sm:flex-row sm:space-y-0 sm:space-x-4"
                data-oid="0oqpccj"
            >
                <div className="group flex w-full" data-oid="90zphxc">
                    <Link
                        href="https://www.usiu.ac.ke/"
                        className="w-full"
                        target="_blank"
                        data-oid="zaq:v1:"
                    >
                        <Card data-oid="44bg3lf">
                            <div
                                className="flex items-center space-x-3"
                                data-oid="jb2x5:2"
                            >
                                <div data-oid="7:v._ot">
                                    <Image
                                        src={usiu}
                                        className="h-12 w-12 rounded-lg object-contain"
                                        alt="University of Perpetual Help System Laguna"
                                        data-oid="8i4vz1u"
                                    />
                                </div>
                                <div
                                    className="flex flex-col"
                                    data-oid="_9t4gb."
                                >
                                    <p
                                        className="line-clamp-1 text-sm font-bold text-neutral-900 dark:text-neutral-100"
                                        data-oid="cpwl.ag"
                                    >
                                        United States International University.
                                    </p>
                                    <p
                                        className="text-xs text-neutral-900 dark:text-neutral-100"
                                        data-oid="6h5cacf"
                                    >
                                        BS Software Engineering
                                    </p>
                                    <p
                                        className="text-xs text-neutral-900 dark:text-neutral-100"
                                        data-oid="0jzl7va"
                                    >
                                        {/* 2023 - 2027 */}
                                        Class of 2027
                                    </p>
                                </div>
                            </div>
                            <div
                                className="transform text-neutral-700 transition-transform duration-300 group-hover:-rotate-12 dark:text-neutral-300"
                                data-oid="qjrt-0g"
                            >
                                <FiArrowUpRight size={18} data-oid="wmvm.z0" />
                            </div>
                        </Card>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Education;
