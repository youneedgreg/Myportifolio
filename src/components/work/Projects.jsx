import PROJECTS from "@/data/projects";
import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

const Projects = ({ company = "all" }) => {
    return (
        <div className="flex flex-col space-y-6" data-oid="rfelqnn">
            <p
                className="text-xs text-neutral-600 dark:text-neutral-300"
                data-oid="j4ia4n7"
            >
                DISCLAIMER: Some projects may have changed in both appearance
                and functionality since I&apos;m no longer maintaining them.
                Certain projects&mdash;including those owned by previous
                companies&mdash;are permitted to be showcased in this website.
            </p>
            <div
                className="grid grid-cols-2 gap-6 py-4 md:grid-cols-3"
                data-oid="3-rxo1w"
            >
                {PROJECTS.filter(
                    (project) =>
                        !company ||
                        company === "all" ||
                        project.company === company
                )
                    .sort((a, b) => Number(b.date) - Number(a.date))
                    .map((project) => (
                        <div
                            key={project?.title}
                            className={project.webUrl ? "group" : ""}
                            data-oid=".8xawub"
                        >
                            <div
                                className="aspect-h-1 aspect-w-1 w-full rounded-xs border border-gray-200 p-1.5 shadow-xs md:h-40 dark:border-neutral-700 dark:bg-neutral-900"
                                data-oid="nt9ezkw"
                            >
                                <Image
                                    src={project.image.src}
                                    alt="Project"
                                    width={1920}
                                    height={1080}
                                    className="h-full w-full rounded-xs object-contain object-center md:object-cover"
                                    data-oid="xw--1-z"
                                />
                            </div>
                            <div
                                className="space-y-2 px-2 py-3 text-sm"
                                data-oid="1rk-:15"
                            >
                                <div
                                    className="flex justify-between space-x-2"
                                    data-oid="9oepmuv"
                                >
                                    <h3
                                        className="font-semibold"
                                        data-oid="xb1yzvt"
                                    >
                                        {project.webUrl ? (
                                            <Link
                                                href={project.webUrl}
                                                target="_blank"
                                                className="group-hover:border-b group-hover:border-gray-300 hover:border-gray-600 dark:text-white dark:group-hover:border-gray-500 dark:hover:border-white"
                                                data-oid="ttze8ip"
                                            >
                                                {project?.title}
                                            </Link>
                                        ) : (
                                            project?.title
                                        )}
                                    </h3>
                                    {project.webUrl ? (
                                        <div data-oid="t0n5b7p">
                                            <FiArrowUpRight
                                                size={16}
                                                data-oid="a--e4od"
                                            />
                                        </div>
                                    ) : null}
                                </div>
                                <p
                                    className="text-xs font-light dark:text-neutral-300"
                                    data-oid="r_84w_k"
                                >
                                    {`${project?.date} • ${project?.type}`}
                                </p>
                                {(project.androidUrl || project.iosUrl) && (
                                    <p
                                        className="flex items-center space-x-2 text-xs dark:text-neutral-300"
                                        data-oid="lx3qdxp"
                                    >
                                        {project.androidUrl && (
                                            <Link
                                                href={project.androidUrl}
                                                target="_blank"
                                                className="hovered-link text-xs text-blue-800 dark:text-white"
                                                data-oid="2sk2qd7"
                                            >
                                                Google Play
                                            </Link>
                                        )}
                                        {/* <span>•</span> */}
                                        {project.iosUrl && (
                                            <Link
                                                href={project.iosUrl}
                                                target="_blank"
                                                className="hovered-link text-xs text-blue-800 dark:text-white"
                                                data-oid="3u5wp3v"
                                            >
                                                App Store
                                            </Link>
                                        )}
                                    </p>
                                )}
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default Projects;
