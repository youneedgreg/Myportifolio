"use client";

import { useState } from "react";
import { FaRegCopy } from "react-icons/fa";

const CopyToClipboard = () => {
    const [isCopied, setIsCopied] = useState(false);
    const [isCopyingError, setIsCopyingError] = useState(false);

    const copyToClipboard = () => {
        try {
            navigator.clipboard.writeText("gregorytemwa1212@gmail.com");
            setIsCopied(true);
        } catch (error) {
            setIsCopied(false);
            setIsCopyingError(true);
        }
    };

    return (
        <section data-oid="pd228np">
            {isCopyingError && (
                <div className="block space-y-3" data-oid="8xyv0oj">
                    <label
                        className="block text-xs text-red-700"
                        data-oid=".43fkts"
                    >
                        {
                            "Error copying email address. Sorry, I'm working on it! For the meantime, manually copy this:"
                        }
                    </label>
                    <label
                        className="block text-xs font-semibold"
                        data-oid="4u2ne2p"
                    >
                        {"kingdeorayom@gmail.com"}
                    </label>
                </div>
            )}
            <button
                onClick={copyToClipboard}
                className="font-sm mt-4 flex cursor-pointer flex-col space-y-2 space-x-0 text-neutral-600 md:flex-row md:space-y-0 md:space-x-4 dark:text-neutral-300"
                data-oid="cf:y6s:"
            >
                <label
                    className="flex cursor-pointer items-center hover:text-neutral-400"
                    data-oid="::b_:pw"
                >
                    <FaRegCopy
                        size={16}
                        className="cursor-pointer"
                        data-oid="ljez1oe"
                    />

                    <label
                        className="ml-2 cursor-pointer text-sm"
                        data-oid="-jkxnuq"
                    >
                        {isCopied ? "copied" : "copy email address"}
                    </label>
                </label>
            </button>
        </section>
    );
};

export default CopyToClipboard;
