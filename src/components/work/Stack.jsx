import STACKS from "@/data/stacks";

const Stack = () => {
    return (
        <section className="flex flex-col space-y-6" data-oid=":4_v1sx">
            <h2
                className="text-2xl font-semibold tracking-tighter"
                data-oid="anf1xse"
            >
                Tech stack
            </h2>
            <p data-oid="mjhinix">
                Programming languages, frameworks, libraries, apps, platform and
                services I use to build and run a website, application, or any
                project.
            </p>
            <div
                className="grid grid-cols-4 gap-6 sm:grid-cols-6"
                data-oid="is_g_ok"
            >
                {STACKS.map((stack, index) => {
                    return (
                        <div key={index} data-oid="y1culn-">
                            <div
                                className="aspect-h-1 aspect-w-1 flex h-20 w-full items-center justify-center rounded-md border border-gray-200 p-1 shadow-xs dark:border-neutral-700"
                                data-oid="r6rcfiv"
                            >
                                {stack?.icon}
                            </div>
                            <div
                                className="space-y-1 px-2 py-3 text-sm"
                                data-oid=":0tq.ts"
                            >
                                <h4
                                    className="text-center text-xs font-normal"
                                    data-oid="qytmue7"
                                >
                                    {stack?.name}
                                </h4>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default Stack;
