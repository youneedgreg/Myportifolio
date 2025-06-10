"use client";

import { signIn } from "next-auth/react";

const SignInButton = ({ provider, icon: Icon, label }) => {
    return (
        <div className="flex cursor-pointer flex-wrap gap-2" data-oid="cb7ag14">
            <div data-oid="n4ty3um">
                <button
                    onClick={() => signIn(provider)}
                    className="flex cursor-pointer items-center rounded-md border border-gray-200 bg-slate-50 px-3 py-2 text-sm leading-4 text-neutral-900 hover:bg-slate-100 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100 dark:hover:bg-neutral-800"
                    data-oid="x5rassj"
                >
                    <Icon data-oid="6.1e.yd" />
                    <div className="ml-3 cursor-pointer" data-oid="33w17t7">
                        <label
                            className="cursor-pointer text-xs"
                            data-oid="hlam3h9"
                        >
                            {label}
                        </label>
                    </div>
                </button>
            </div>
        </div>
    );
};

export default SignInButton;
