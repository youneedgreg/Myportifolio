import Image from "next/image";
import serking from "../../../public/images/me/serking.jpg";
import DownloadCV from "../ui/DownloadCV";

const Introduction = () => {
    return (
        <section className="flex flex-col space-y-6">
            <h1 className="text-3xl font-bold tracking-tighter md:text-4xl">
                Hi, I&apos;m Serking&mdash;software engineer &amp; UI/UX
                designer.
            </h1>
            <div className="grid gap-y-10 py-10 md:grid-cols-2 md:gap-y-0">
                <div className="flex items-center md:order-first">
                    <div className="flex flex-col space-y-6">
                        <p>
                            I'm a software engineer from the Philippines
                            specializing in building responsive, functional, and
                            user-focused applications for web and mobile.
                        </p>
                        <p>
                            Check my projects and work history to see what I've
                            been working on.
                        </p>
                        <DownloadCV />
                    </div>
                </div>
                <div className="order-first flex items-center justify-center md:order-last">
                    <Image
                        className="h-60 w-60 rotate-2 rounded-2xl dark:border dark:border-white/10"
                        src={serking}
                        alt="Serking de Orayom"
                    />
                </div>
            </div>
        </section>
    );
};

export default Introduction;
