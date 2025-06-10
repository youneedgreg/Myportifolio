import Link from "next/link";
import Image from "next/image";
import { MDXRemote } from "next-mdx-remote/rsc";
import { highlight } from "sugar-high";
import React from "react";
import { TweetComponent } from "./TweetComponent";
import { LiveCode } from "./Sandpack";

function Table({ data }) {
    let headers = data.headers.map((header, index) => (
        <th key={index} data-oid="a8mfonw">
            {header}
        </th>
    ));
    let rows = data.rows.map((row, index) => (
        <tr key={index} data-oid="6:d0m9w">
            {row.map((cell, cellIndex) => (
                <td key={cellIndex} data-oid="ak7nlqo">
                    {cell}
                </td>
            ))}
        </tr>
    ));

    return (
        <table data-oid="kgkf96n">
            <thead data-oid="9amx4:j">
                <tr data-oid="x9.u26p">{headers}</tr>
            </thead>
            <tbody data-oid="apt0-vt">{rows}</tbody>
        </table>
    );
}

function List({ children }) {
    return (
        <ul
            className="mx-5 my-4 list-inside list-disc space-y-4"
            data-oid="vib1v0u"
        >
            {children}
        </ul>
    );
}

function ListItem({ children }) {
    return <li data-oid="-_a8x7t">{children}</li>;
}

function Separator() {
    return (
        <hr
            className={"border-gray-200 dark:border-neutral-700"}
            data-oid="02p382q"
        />
    );
}

function CustomLink(props) {
    let href = props.href;

    if (href.startsWith("/")) {
        return (
            <Link href={href} {...props} data-oid="zotx3mi">
                {props.children}
            </Link>
        );
    }

    if (href.startsWith("#")) {
        return <a {...props} data-oid="e2_sole" />;
    }

    return (
        <a
            target="_blank"
            rel="noopener noreferrer"
            {...props}
            data-oid="bhjfi8b"
        />
    );
}

function RoundedImage(props) {
    return <Image alt={props.alt} {...props} data-oid="at0620c" />;
}

function Callout(props) {
    return (
        <div
            className="mb-8 flex items-center rounded-sm border border-gray-200 bg-neutral-50 p-1 px-4 py-3 text-sm text-neutral-900 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100"
            data-oid=":ihzu8j"
        >
            <div className="mr-4 flex w-4 items-center" data-oid="yveirk0">
                {props.emoji}
            </div>
            <div className="callout w-full" data-oid="4hcvuj9">
                {props.children}
            </div>
        </div>
    );
}

function ProsCard({ title, pros }) {
    return (
        <div
            className="my-4 w-full rounded-xl border border-emerald-200 bg-neutral-50 p-6 dark:border-emerald-900 dark:bg-neutral-900"
            data-oid="vjc5_i5"
        >
            <span data-oid="0.nkaej">{`You might use ${title} if...`}</span>
            <div className="mt-4" data-oid="jgjlfox">
                {pros.map((pro) => (
                    <div
                        key={pro}
                        className="mb-2 flex items-baseline font-medium"
                        data-oid="c-uhe35"
                    >
                        <div className="mr-2 h-4 w-4" data-oid="mnt.q6x">
                            <svg
                                className="h-4 w-4 text-emerald-500"
                                viewBox="0 0 24 24"
                                data-oid="n6pfbd-"
                            >
                                <g
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    data-oid="m5n5y1u"
                                >
                                    <path
                                        d="M22 11.08V12a10 10 0 11-5.93-9.14"
                                        data-oid="9clx9ff"
                                    />
                                    <path
                                        d="M22 4L12 14.01l-3-3"
                                        data-oid="j6ygx.t"
                                    />
                                </g>
                            </svg>
                        </div>
                        <span data-oid="m6b7_li">{pro}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

function ConsCard({ title, cons }) {
    return (
        <div
            className="my-6 w-full rounded-xl border border-red-200 bg-neutral-50 p-6 dark:border-red-900 dark:bg-neutral-900"
            data-oid="rb66ko6"
        >
            <span data-oid="i2jjrny">{`You might not use ${title} if...`}</span>
            <div className="mt-4" data-oid="dw.l6hn">
                {cons.map((con) => (
                    <div
                        key={con}
                        className="mb-2 flex items-baseline font-medium"
                        data-oid="4ff54c:"
                    >
                        <div className="mr-2 h-4 w-4" data-oid="oftn6uf">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="h-4 w-4 text-red-500"
                                data-oid="pzlrjy3"
                            >
                                <path
                                    d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"
                                    data-oid="7pyo2it"
                                />
                            </svg>
                        </div>
                        <span data-oid="d96iv11">{con}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

function Code({ children, ...props }) {
    let codeHTML = highlight(children);
    return (
        <code
            dangerouslySetInnerHTML={{ __html: codeHTML }}
            {...props}
            data-oid="t3v3920"
        />
    );
}

function slugify(str) {
    return str
        .toString()
        .toLowerCase()
        .trim() // Remove whitespace from both ends of a string
        .replace(/\s+/g, "-") // Replace spaces with -
        .replace(/&/g, "-and-") // Replace & with 'and'
        .replace(/[^\w\-]+/g, "") // Remove all non-word characters except for -
        .replace(/\-\-+/g, "-"); // Replace multiple - with single -
}

function createHeading(level) {
    return ({ children }) => {
        let slug = slugify(children);
        return React.createElement(
            `h${level}`,
            { id: slug, className: "font-semibold" }, // Added font-bold class
            [
                React.createElement("a", {
                    href: `#${slug}`,
                    key: `link-${slug}`,
                    className: "anchor",
                }),
            ],

            children
        );
    };
}

let components = {
    h1: createHeading(1),
    h2: createHeading(2),
    h3: createHeading(3),
    h4: createHeading(4),
    h5: createHeading(5),
    h6: createHeading(6),
    Image: RoundedImage,
    a: CustomLink,
    Callout,
    ProsCard,
    ConsCard,
    StaticTweet: TweetComponent,
    code: Code,
    Table,
    LiveCode,
    ul: List,
    li: ListItem,
    hr: Separator,
};

export default function CustomMDX(props) {
    return (
        <MDXRemote
            {...props}
            components={{ ...components, ...(props.components || {}) }}
            data-oid="ip00en0"
        />
    );
}
