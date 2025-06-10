import Hero from "@/components/home/Hero";
import Social from "@/components/home/Social";
// import Projects from "@/components/work/Projects";

export default function HomePage() {
    return (
        <div className="flex flex-col space-y-6" data-oid="nhj8c:m">
            <Hero data-oid="h2s6al5" />
            {/* <Projects /> */}
            <Social data-oid="09prdwn" />
        </div>
    );
}
