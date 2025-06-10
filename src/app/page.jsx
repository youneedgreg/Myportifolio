import Hero from "@/components/home/Hero";
import Social from "@/components/home/Social";
// import Projects from "@/components/work/Projects";

export default function HomePage() {
    return (
        <div className="flex flex-col space-y-6" data-oid="ub0p6vy">
            <Hero data-oid="mfr97vi" />
            {/* <Projects /> */}
            <Social data-oid="2nz7m_c" />
        </div>
    );
}
