import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import MainLogo from "../../../public/main-logo.svg"
import Image from "next/image";
import Navigation from "./navigation";
import LinkButton from "@/components/ui/link-button";
import RightArrow from "../../../public/right-arrow.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faXTwitter } from "@fortawesome/free-brands-svg-icons";



export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
        <header className="border-b sticky top-0 bg-[#FDF7FF] z-20">
          <nav className="flex flex-row justify-between px-[min(5rem,4vw)] py-5 items-center">
              <div className="flex flex-row gap-[5px] items-center">
                  <Image src={MainLogo} alt="Company Logo" height={80} width={80}></Image>
                  <h1 className="font-bold text-[1.75rem] invisible md:visible">Founder&apos;s Friday</h1>
              </div>
              <Navigation></Navigation>
          </nav>
        </header>
        <main>{children}</main>
        <footer className="hidden md:flex flex-col gap-16 border-t px-20 py-5">
          <div className="flex flex-row gap-[5px] items-center">
            <Image src={MainLogo} className="" alt="Company Logo" height={80} width={80}></Image>
            <h1 className="font-bold text-[1.75rem] leading-7 ">Founders<br/>Friday</h1>
          </div>
          <div className="w-9/12 self-center flex flex-col items-center gap-10">
            <h3 className="text-[2.75rem] font-bold text-center">
             Want To Be A Part Of Abuja&apos;s Biggest Tech Community?
            </h3>
            <LinkButton className="px-4 py-8 flex flex-row items-center gap-[10px] group">
              <h3 className="text-[1.75rem] font-normal">Register For Our Next Event</h3>
              <Image src={RightArrow}  alt="Right Arrow" className="group-hover:invert" height={40} width={40}></Image>
            </LinkButton>
          </div>
          <div className="flex flex-row py-8 justify-between self-start w-full items-center border-t border-purpleprime">
            <div className="flex flex-row gap-5">
              <div className="bg-purpleprime p-[10px] rounded-full">
                <FontAwesomeIcon className="text-white h-6 w-6" icon={faFacebook} />
              </div>
              <div className="bg-purpleprime p-[10px] rounded-full">
                <FontAwesomeIcon className="text-white h-6 w-6" icon={faInstagram} />
              </div>
              <div className="bg-purpleprime p-[10px] rounded-full">
                <FontAwesomeIcon className="text-white h-6 w-6" icon={faXTwitter} />
              </div>
              
            </div>
            <Navigation showLogin={false}></Navigation>
          </div>
        </footer>
    </>
  );
}
