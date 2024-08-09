// app/not-found.tsx
"use client";

import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";

export default function NotFound() {
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {


        
        // Redirect to the homepage after 1 seconds (or immediately)
        const timeout = setTimeout(() => {
            router.push("/home"); // Redirect to the homepage
        }, pathname === "/home" ? 0: 1000);
        
        


        return () => clearTimeout(timeout); // Cleanup the timeout on unmount
    }, [router]);

    return (
        <div className="flex items-center justify-center h-screen">
            {
                pathname === "/home" ?
                <div className="text-center">
                <h1 className="text-4xl font-bold">Page Not Found</h1>
                <p className="mt-4 text-lg">Redirecting you to the homepage...</p>
                </div> 
                : 
                <></>
            }
           
        </div>
    );
}
