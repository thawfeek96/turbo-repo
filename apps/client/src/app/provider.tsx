"use client";

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { trpc } from "@/utils/trpc";
import { useState } from 'react';

interface TRPCReactProviderProps {
    children: React.ReactNode;
}


const TRPCReactProvider: React.FC<TRPCReactProviderProps> = ({ children }) => {
    
    const [queryClient] = useState(() => new QueryClient())
    
    return (
        // Wrap your entire app with QueryClientProvider and provide the QueryClient
        <QueryClientProvider client={queryClient}>
            <div>
                {children}
            </div>
        </QueryClientProvider>
    );
};

export default trpc.withTRPC(TRPCReactProvider);
