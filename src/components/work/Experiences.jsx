import WORK_EXPERIENCES from "@/data/experiences";
import Separator from "../ui/Separator";
import Projects from "./Projects";

const Experiences = () => {
    return (
        <section className="flex flex-col space-y-6" data-oid="hq4o_fo">
            {WORK_EXPERIENCES.map((exp, index) => (
                <div
                    key={index}
                    className="flex flex-col space-y-6"
                    data-oid="1o6y3_v"
                >
                    <div data-oid="e5t9q.5">
                        <h2
                            className="mb-1 text-xl font-semibold tracking-tighter"
                            data-oid="cpjla48"
                        >
                            {exp.company}
                        </h2>
                        <p
                            className="text-sm text-neutral-600 dark:text-neutral-300"
                            data-oid="txrm6kp"
                        >
                            {exp.title}
                        </p>
                        <p
                            className="text-sm text-neutral-600 dark:text-neutral-300"
                            data-oid="8ogo68m"
                        >
                            {exp.duration}
                        </p>
                    </div>

                    {exp.bulletPoints.length > 0 && (
                        <ul
                            className="flex list-disc flex-col space-y-4 px-8 py-4"
                            data-oid="7r9_-11"
                        >
                            {exp.bulletPoints.map((point, i) => (
                                <li
                                    key={i}
                                    dangerouslySetInnerHTML={{
                                        __html: point.replace(
                                            /\*\*(.*?)\*\*/g,
                                            "<strong>$1</strong>"
                                        ),
                                    }}
                                    data-oid="1:oqe1b"
                                />
                            ))}
                        </ul>
                    )}
                    {exp.description?.map((paragraph, i) => (
                        <p key={i} data-oid="8k-7ev5">
                            {paragraph}
                        </p>
                    ))}
                    {exp.companyKey && (
                        <Projects company={exp.companyKey} data-oid="q8kvb:x" />
                    )}
                    <Separator data-oid="3bo:yis" />
                </div>
            ))}
        </section>
    );
};

export default Experiences;
