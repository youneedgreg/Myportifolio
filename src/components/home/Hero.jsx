import Avatar from "../ui/Avatar";

const Hero = () => {
    return (
        <section className="flex flex-col space-y-8" data-oid="-8lu190">
            <Avatar className="h-16 w-16 animate-float" data-oid="jm-grac" />
            <div className="flex flex-col space-y-6" data-oid="bcks250">
                <h2
                    className="text-3xl font-bold tracking-tighter md:text-4xl scroll-animate"
                    data-oid="ce0.44-"
                >
                    Full portiolio coming soon! Stay tuned.
                </h2>
                <h1
                    className="text-3xl font-bold tracking-tighter md:text-4xl scroll-animate"
                    data-oid="a_897qz"
                >
                    Hi, I&apos;m Gregory&mdash;software engineer.
                </h1>
                <p className="scroll-animate" data-oid="ft4:vzb">
                    I&apos;m a software engineer from Nairobi, Kenya
                    specializing in building websites with{" "}
                    <span
                        className="border-b border-dashed border-neutral-400 dark:border-neutral-500 hover-lift hover:scale"
                        data-oid="_q-_-9-"
                    >
                        React,
                    </span>{" "}
                    <span
                        className="border-b border-dashed border-neutral-400 dark:border-neutral-500 hover-lift hover:scale"
                        data-oid="7ry0yg4"
                    >
                        Java{" "}
                    </span>
                    and{" "}
                    <span
                        className="border-b border-dashed border-neutral-400 dark:border-neutral-500 hover-lift hover:scale"
                        data-oid="45nh5t:"
                    >
                        Next.js
                    </span>{" "}
                    for frontend,{" "}
                    <span
                        className="border-b border-dashed border-neutral-400 dark:border-neutral-500 hover-lift hover:scale"
                        data-oid="ns-mkjv"
                    >
                        React Native
                    </span>{" "}
                    with{" "}
                    <span
                        className="border-b border-dashed border-neutral-400 dark:border-neutral-500 hover-lift hover:scale"
                        data-oid="kzmf8jj"
                    >
                        Expo SDK
                    </span>{" "}
                    for mobile applications and{" "}
                    <span
                        className="border-b border-dashed border-neutral-400 dark:border-neutral-500 hover-lift hover:scale"
                        data-oid="qz:k7pw"
                    >
                        Laravel,
                    </span>{" "}
                    <span
                        className="border-b border-dashed border-neutral-400 dark:border-neutral-500 hover-lift hover:scale"
                        data-oid="qjnn634"
                    >
                        Springboot,{" "}
                    </span>
                    <span
                        className="border-b border-dashed border-neutral-400 dark:border-neutral-500 hover-lift hover:scale"
                        data-oid=".mawjle"
                    >
                        Express,{" "}
                    </span>
                    <span
                        className="border-b border-dashed border-neutral-400 dark:border-neutral-500 hover-lift hover:scale"
                        data-oid="r9u:a-s"
                    >
                        Django{" "}
                    </span>
                    and{" "}
                    <span
                        className="border-b border-dashed border-neutral-400 dark:border-neutral-500 hover-lift hover:scale"
                        data-oid="4t_te9p"
                    >
                        MySQL{" "}
                    </span>
                    for the backend.
                </p>
                <div
                    className="flex items-center space-x-4 pt-4"
                    data-oid="5sgh_d4"
                >
                    <a
                        href="#contact"
                        className="inline-flex items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-400 dark:focus:ring-offset-blue-900 hover-lift"
                        data-oid="4c-v2gv"
                    >
                        Get in touch
                    </a>
                    <a
                        href="#projects"
                        className="inline-flex items-center justify-center rounded-md border border-neutral-200 bg-white px-4 py-2 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-offset-2 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100 dark:hover:bg-neutral-700 dark:focus:ring-neutral-500 dark:focus:ring-offset-neutral-900 hover-lift"
                        data-oid="lr6a9st"
                    >
                        View Projects
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
