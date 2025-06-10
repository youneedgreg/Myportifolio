import DownloadCV from "@/components/ui/DownloadCV";
import Separator from "@/components/ui/Separator";
import Experiences from "@/components/work/Experiences";
import Stack from "@/components/work/Stack";

export const metadata = {
    title: "Work - Gregory Temwa Odete",
    description: "Software Engineer",
};

export default function WorkPage() {
    return (
        <div className="flex flex-col space-y-6" data-oid="zcifi10">
            <section className="flex flex-col space-y-6" data-oid="koq8x-o">
                <h1
                    className="text-2xl font-semibold tracking-tighter"
                    data-oid="s9k4h9:"
                >
                    My work experiences
                </h1>
                <p data-oid="_u2m2.7">
                    I&apos;m looking for a full-time role where I can
                    collaborate with a team, contribute to impactful projects,
                    and continue growing as a developer.
                </p>
                <DownloadCV data-oid="czcusev" />
            </section>
            <Separator data-oid="ci00dz8" />
            <Experiences data-oid="6594r7x" />
            <Stack data-oid="yz20ou." />
        </div>
    );
}
