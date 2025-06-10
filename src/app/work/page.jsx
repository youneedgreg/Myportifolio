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
        <div className="flex flex-col space-y-6" data-oid="jt:5se:">
            <section className="flex flex-col space-y-6" data-oid="han6dn-">
                <h1
                    className="text-2xl font-semibold tracking-tighter"
                    data-oid="p5jomdx"
                >
                    My work experiences
                </h1>
                <p data-oid="9hgo4i0">
                    I&apos;m looking for a full-time role where I can
                    collaborate with a team, contribute to impactful projects,
                    and continue growing as a developer.
                </p>
                <DownloadCV data-oid="sjakyjf" />
            </section>
            <Separator data-oid="yluhi0f" />
            <Experiences data-oid="tcf9ka9" />
            <Stack data-oid="pdtduvw" />
        </div>
    );
}
