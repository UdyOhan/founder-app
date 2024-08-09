import { cn } from "@/lib/utils"
import { StaticImport } from "next/dist/shared/lib/get-img-props"
import Image from "next/image"
import { AspectRatio } from "@/components/ui/aspect-ratio"

export default function HomePic({src, height, width, className, imgClassName, textClassName} : 
    {src: string|StaticImport, height: number, width: number, 
        className?: string, imgClassName?:string, textClassName?:string}){
    return(
        <div className={cn("py-[0.5625em] px-[0.4em] bg-purpleprime rounded-2xl", className)}>
            
            <Image src={src} height={height} width={width} 
                className={cn("rounded-2xl object-cover", imgClassName)}
                alt="Founder's Friday" style={{height:`${height/16}em`, width:`${width/16}em`}}></Image>
            
            <div>
                <p className={cn("text-white text-center", textClassName)}>Founder's Friday</p>
            </div>
        </div>
    )
}