import SOCIALS from "@/data/socials";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import Card from "../ui/Card";
import CopyToClipboard from "../ui/CopyToClipboard";

const Social = () => {
    return (
        <section
            className="flex flex-col space-y-6 scroll-animate"
            data-oid="l8r-50r"
        >
            <p className="text-lg" data-oid="tg7xl:2">
                If you're looking to collaborate on a project, hire a developer,
                or just say hello, feel free to reach out using the contact
                options below.
            </p>
            <div className="flex flex-wrap" data-oid="10pj:ic">
                {SOCIALS.map((item, index) => {
                    return (
                        <div
                            className="group m-1 flex w-fit hover-lift"
                            key={index}
                            style={{
                                animationDelay: `${index * 100}ms`,
                            }}
                            data-oid="9u128m:"
                        >
                            <Link
                                href={item.url}
                                target="_blank"
                                className="w-full"
                                data-oid="_s2-ecr"
                            >
                                <Card
                                    className="transition-all duration-300 hover:shadow-lg dark:hover:shadow-neutral-800/50"
                                    data-oid="2_k8y7t"
                                >
                                    <div
                                        className="flex items-center space-x-3"
                                        data-oid="l3z4l2f"
                                    >
                                        <div
                                            className="transform transition-transform duration-300 group-hover:scale-110"
                                            data-oid="x5_weeo"
                                        >
                                            {item.icon}
                                        </div>
                                        <div
                                            className="flex flex-col"
                                            data-oid="msm6auk"
                                        >
                                            <p
                                                className="line-clamp-1 text-sm text-neutral-900 dark:text-neutral-100"
                                                data-oid="lspk4ts"
                                            >
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                    <div
                                        className="transform text-neutral-700 transition-all duration-300 group-hover:-rotate-12 group-hover:translate-x-1 dark:text-neutral-300"
                                        data-oid="n-0d7wl"
                                    >
                                        <FiArrowUpRight
                                            size={16}
                                            className="ms-2"
                                            data-oid="a.s5tfm"
                                        />
                                    </div>
                                </Card>
                            </Link>
                        </div>
                    );
                })}
            </div>
            <div className="scroll-animate" data-oid="ly8t6z7">
                <CopyToClipboard data-oid="zcpmv1s" />
            </div>
        </section>
    );
};

export default Social;
