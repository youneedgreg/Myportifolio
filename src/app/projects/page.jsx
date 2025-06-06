export const metadata = {
    title: "Personal Projects | Gregory Temwa",
    description: "A collection of my personal projects and side endeavors.",
};

export default function ProjectsPage() {
    return (
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-16 sm:mt-20">
            <header className="max-w-2xl">
                <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                    Personal Projects
                </h1>
                <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
                    A showcase of my personal projects, experiments, and side endeavors. Each project represents a unique challenge and learning opportunity.
                </p>
            </header>
            <div className="mt-16 sm:mt-20">
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {/* Example project card - you can add more */}
                    <div className="group relative flex flex-col overflow-hidden rounded-lg border border-zinc-200 dark:border-zinc-800">
                        <div className="flex flex-1 flex-col justify-between p-6">
                            <div className="flex-1">
                                <h3 className="text-xl font-semibold text-zinc-800 dark:text-zinc-100">
                                    Project Name
                                </h3>
                                <p className="mt-3 text-base text-zinc-600 dark:text-zinc-400">
                                    Brief description of the project and its key features.
                                </p>
                            </div>
                            <div className="mt-6 flex items-center gap-x-4">
                                <div className="text-sm text-zinc-600 dark:text-zinc-400">
                                    Technologies used
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
} 