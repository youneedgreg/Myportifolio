"use client";

import { signOut } from "next-auth/react";

const SignOutButton = () => {
    return (
        <button
            onClick={() => signOut()}
            className="cursor-pointer underline hover:opacity-70"
            data-oid="r5d2x.q"
        >
            <label
                className="cursor-pointer text-xs text-gray-500 dark:text-gray-300"
                data-oid=".8qbbz9"
            >
                Log out
            </label>
        </button>
    );
};

export default SignOutButton;
