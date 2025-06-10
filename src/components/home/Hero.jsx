import Avatar from "../ui/Avatar";

const Hero = () => {
    return (
        <section className="flex flex-col space-y-8">
            <Avatar className="h-16 w-16 animate-float" />
            <div className="flex flex-col space-y-6">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl scroll-animate">
                    Full portiolio coming soon! Stay tuned.
                </h2>
                <h1 className="text-3xl font-bold tracking-tighter md:text-4xl scroll-animate">
                    Hi, I&apos;m Gregory&mdash;software engineer.
                </h1>
                <p className="scroll-animate">
                    I&apos;m a software engineer from Nairobi, Kenya
                    specializing in building websites with{" "}
                    <span className="border-b border-dashed border-neutral-400 dark:border-neutral-500 hover-lift hover:scale">
                        React,
                    </span>{" "}
                    <span className="border-b border-dashed border-neutral-400 dark:border-neutral-500 hover-lift hover:scale">
                        Java{" "}
                    </span>
                    and{" "}
                    <span className="border-b border-dashed border-neutral-400 dark:border-neutral-500 hover-lift hover:scale">
                        Next.js
                    </span>{" "}
                    for frontend,{" "}
                    <span className="border-b border-dashed border-neutral-400 dark:border-neutral-500 hover-lift hover:scale">
                        React Native
                    </span>{" "}
                    with{" "}
                    <span className="border-b border-dashed border-neutral-400 dark:border-neutral-500 hover-lift hover:scale">
                        Expo SDK
                    </span>{" "}
                    for mobile applications and{" "}
                    <span className="border-b border-dashed border-neutral-400 dark:border-neutral-500 hover-lift hover:scale">
                        Laravel,
                    </span>{" "}
                    <span className="border-b border-dashed border-neutral-400 dark:border-neutral-500 hover-lift hover:scale">
                        Springboot,{" "}
                    </span>
                    <span className="border-b border-dashed border-neutral-400 dark:border-neutral-500 hover-lift hover:scale">
                        Express,{" "}
                    </span>
                    <span className="border-b border-dashed border-neutral-400 dark:border-neutral-500 hover-lift hover:scale">
                        Django{" "}
                    </span>
                    and{" "}
                    <span className="border-b border-dashed border-neutral-400 dark:border-neutral-500 hover-lift hover:scale">
                        MySQL{" "}
                    </span>
                    for the backend.
                </p>
                <div className="flex items-center space-x-4 pt-4">
                    <a
                        href="#contact"
                        className="inline-flex items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-400 dark:focus:ring-offset-blue-900 hover-lift"
                    >
                        Get in touch
                    </a>
                    <a
                        href="#projects"
                        className="inline-flex items-center justify-center rounded-md border border-neutral-200 bg-white px-4 py-2 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-offset-2 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100 dark:hover:bg-neutral-700 dark:focus:ring-neutral-500 dark:focus:ring-offset-neutral-900 hover-lift"
                    >
                        View Projects
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
