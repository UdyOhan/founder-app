import { cn } from "@/lib/utils";
import { Button } from "./button";

export default function LinkButton({className ="", children}: {className?: string, children?: React.ReactNode}){
    return(
    <>
        <Button className={cn("py-5 px-8 border-2 border-purpleprime text-purpleprime rounded-full bg-transparent hover:bg-[#9524FF] hover:text-white ", className)}>
            {children}
        </Button>
    </>
    )
}