"use client";

import {
    HTML,
    CSS,
    Tailwind,
    stylexIndex,
    stylexApp,
    stylexViteConfig,
    stylexTokens,
} from "@/lib/sandpack-files";
import { Sandpack } from "@codesandbox/sandpack-react";
import React, { Suspense } from "react";

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    render() {
        if (this.state.hasError) {
            return (
                <div
                    className="px-4 py-3 border border-red-700 bg-red-200 rounded-sm p-1 text-sm flex items-center text-red-900 mb-8"
                    data-oid="60lhuib"
                >
                    <div className="w-full callout" data-oid="yspa34e">
                        {this.props.fallback}
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}

export function LiveCode({ example }) {
    let files;

    if (example === "html") {
        files = {
            "/styles.css": {
                code: CSS,
                active: true,
            },
            "/index.html": HTML,
        };
    } else if (example === "tailwind") {
        files = {
            "/index.html": Tailwind,
        };
    } else if (example === "stylex") {
        return (
            <Suspense fallback={null} data-oid=".56fz3y">
                <ErrorBoundary
                    fallback={
                        "Oops, there was an error loading the CodeSandbox"
                    }
                    data-oid="96n.l7u"
                >
                    <Sandpack
                        theme="auto"
                        files={{
                            "App.tsx": {
                                code: stylexApp,
                                active: true,
                            },
                            "/tokens.stylex.js": stylexTokens,
                            "/vite.config.ts": stylexViteConfig,
                            "/index.html": {
                                code: stylexIndex,
                                hidden: true,
                            },
                        }}
                        template="vite-react-ts"
                        customSetup={{
                            dependencies: {
                                "@stylexjs/stylex": "^0.3.0",
                            },
                            devDependencies: {
                                "vite-plugin-stylex-dev": "latest",
                            },
                        }}
                        data-oid="t4pugmw"
                    />
                </ErrorBoundary>
            </Suspense>
        );
    }

    return (
        <Suspense fallback={null} data-oid="32rqk6s">
            <ErrorBoundary
                fallback={"Oops, there was an error loading the CodeSandbox."}
                data-oid="v0x-yb."
            >
                <Sandpack
                    theme="auto"
                    template="static"
                    files={files}
                    data-oid="17kh74q"
                />
            </ErrorBoundary>
        </Suspense>
    );
}
