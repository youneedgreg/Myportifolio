"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

export const TanstackProvider = ({ children }) => {
    const [queryClient] = useState(() => new QueryClient());
    return (
        <QueryClientProvider client={queryClient} data-oid="p2.ag:x">
            {children}
        </QueryClientProvider>
    );
};
