import SOCIALS from "@/data/socials";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import Card from "../ui/Card";
import CopyToClipboard from "../ui/CopyToClipboard";

const Social = () => {
    return (
        <section className="flex flex-col space-y-6 scroll-animate">
            <p className="text-lg">
                If you're looking to collaborate on a project, hire a developer,
                or just say hello, feel free to reach out using the contact
                options below.
            </p>
            <div className="flex flex-wrap">
                {SOCIALS.map((item, index) => {
                    return (
                        <div 
                            className="group m-1 flex w-fit hover-lift" 
                            key={index}
                            style={{
                                animationDelay: `${index * 100}ms`
                            }}
                        >
                            <Link
                                href={item.url}
                                target="_blank"
                                className="w-full"
                            >
                                <Card className="transition-all duration-300 hover:shadow-lg dark:hover:shadow-neutral-800/50">
                                    <div className="flex items-center space-x-3">
                                        <div className="transform transition-transform duration-300 group-hover:scale-110">
                                            {item.icon}
                                        </div>
                                        <div className="flex flex-col">
                                            <p className="line-clamp-1 text-sm text-neutral-900 dark:text-neutral-100">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="transform text-neutral-700 transition-all duration-300 group-hover:-rotate-12 group-hover:translate-x-1 dark:text-neutral-300">
                                        <FiArrowUpRight
                                            size={16}
                                            className="ms-2"
                                        />
                                    </div>
                                </Card>
                            </Link>
                        </div>
                    );
                })}
            </div>
            <div className="scroll-animate">
                <CopyToClipboard />
            </div>
        </section>
    );
};

export default Social;
