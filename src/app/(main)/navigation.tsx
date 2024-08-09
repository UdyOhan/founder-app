'use client'

import LinkButton from "@/components/ui/link-button"
import Link from "next/link"
import { ArrowRight, MenuIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"

const pagesLink = {
    'Home': "/home",
    "About Us": "",
    "Gallery": "",
    "Contact Us": ""
}

export default function Navigation({ showLogin = true }: { showLogin?: boolean }) {
    const pathname = usePathname();
    const [showNav, setHideNav] = useState(false);

    return (
        <div className="flex flex-row items-center gap-[min(6rem,1vw)]">
            <Button className="md:hidden bg-transparent hover:bg-transparent" onClick={() => setHideNav(!showNav)}>
            {/*Create a hamburger Icon like this because lucide icon menu icon couldn't scale */}
            <div className="flex flex-col justify-between w-8 h-6 cursor-pointer">
                <span className="block w-full h-1 bg-black rounded-full"></span>
                <span className="block w-full h-1 bg-black rounded-full"></span>
                <span className="block w-full h-1 bg-black rounded-full"></span>
            </div>
            </Button>
            <ul className={cn({
                "hidden lg:flex md:flex-row flex-col z-10 font-medium text-xl md:text-[min(1.5rem,1.9vw)] justify-center gap-[min(1.75rem,2vw)]": true,
                "flex fixed md:static top-0 w-full left-0 flex-col items-center justify-center bg-white md:bg-transparent p-5 transition-transform duration-500 ease-in-out transform": true,
                "-translate-y-full md:translate-y-0": !showNav,  // Hidden state (slide out)
                "translate-y-0": showNav        // Visible state (slide in)
            })}>
                {
                    Object.entries(pagesLink).map(([pageName, pageLink], index) => {
                        return (
                            <li key={`link_${index}`} className={cn({
                                "text-purpleprime": pathname === pageLink
                            })}>
                                <Link href={pageLink}>
                                    {pageName}
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
            <LinkButton className={cn({
                "lg:py-3 lg:px-6 xl:py-5 xl:px-8  rounded-[20px] gap-[11px] hidden lg:flex": true,
                "hidden": !showLogin
            })}>
                <Link href="" className="text-2xl font-medium">Register</Link>
                <ArrowRight></ArrowRight>
            </LinkButton>
            <div className={cn({
                "fixed h-screen w-screen bg-black transition-opacity opacity-0 hidden top-0 left-0": true,
                "block opacity-35": showNav
            })}
                onClick={() => setHideNav(!showNav)}>
            </div>
        </div>
    )
}
