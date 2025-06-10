import Image from "next/image";
import not_found from "../../public/404.svg";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

export default function NotFound() {
    return (
        <div
            className="flex flex-col items-center justify-center space-y-6 text-center"
            data-oid="xr-3url"
        >
            <Image
                src={not_found}
                alt="Page not found."
                width={512}
                height={512}
                className="h-72 w-72 md:h-80 md:w-80"
                data-oid="1x3ldx4"
            />

            <h1
                className="text-3xl font-bold tracking-tighter md:text-4xl"
                data-oid="-k5o6wu"
            >
                Sorry, we couldn&apos;t find that page.
            </h1>
            <p className="text-lg" data-oid="_frhdl.">
                It seems like the page you requested doesn't exist.
                {/* Let&apos;s get you back on track. */}
            </p>
            <div data-oid="y86_nvr">
                <Link
                    href="/"
                    className="hovered-link inline-flex items-center"
                    data-oid="svwr4ta"
                >
                    Return to Home{" "}
                    <FaArrowRight className="ml-2" data-oid="7qt1x4n" />
                </Link>
            </div>
        </div>
    );
}
