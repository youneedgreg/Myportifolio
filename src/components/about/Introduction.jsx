import Image from "next/image";
import greg from "../../../public/images/me/greg.png";
import DownloadCV from "../ui/DownloadCV";

const Introduction = () => {
    return (
        <section className="flex flex-col space-y-6" data-oid="tm69hb7">
            <h1
                className="text-3xl font-bold tracking-tighter md:text-4xl"
                data-oid="k1a9xui"
            >
                Hi, I&apos;m Greg&mdash;software engineer.
            </h1>
            <div
                className="grid gap-y-10 py-10 md:grid-cols-2 md:gap-y-0"
                data-oid="jya0c1n"
            >
                <div
                    className="flex items-center md:order-first"
                    data-oid="hli2t.o"
                >
                    <div className="flex flex-col space-y-6" data-oid="pp58fn0">
                        <p data-oid="90box9x">
                            I'm a software engineer from the Kenya specializing
                            in building responsive, functional, and user-focused
                            applications for web, desktop and mobile.
                        </p>
                        <p data-oid="yeg4rlx">
                            Check my projects and work history to see what I've
                            been working on.
                        </p>
                        <DownloadCV data-oid="iohqnxt" />
                    </div>
                </div>
                <div
                    className="order-first flex items-center justify-center md:order-last"
                    data-oid="mz7awlx"
                >
                    <Image
                        className="h-60 w-60 rotate-2 rounded-2xl dark:border dark:border-white/10"
                        src={greg}
                        alt="Gregory Odete"
                        data-oid="imk-ll0"
                    />
                </div>
            </div>
        </section>
    );
};

export default Introduction;
