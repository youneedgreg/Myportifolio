"use client";
import { useRouter } from "next/navigation";
import { FaChevronLeft } from "react-icons/fa6";

const BackButton = () => {
    const router = useRouter();

    const handleBack = () => {
        const hasReferrer = document.referrer !== "";

        if (hasReferrer) {
            router.back();
        }
        router.push("/notes");
    };

    return (
        <div
            onClick={handleBack}
            className="flex w-fit cursor-pointer items-center space-x-1 hover:underline"
            data-oid="ndn61ie"
        >
            <FaChevronLeft size={10} data-oid="7wqhq5a" />
            <span className="text-xs" data-oid="xg9x9us">
                Back
            </span>
        </div>
    );
};

export default BackButton;
