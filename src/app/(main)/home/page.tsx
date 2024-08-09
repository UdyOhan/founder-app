
import LinkButton from "@/components/ui/link-button";
import Image from "next/image"
import RightArrow from "@/../public/right-arrow.svg";
import { SquareArrowOutUpRight, ArrowRight, ArrowLeft } from "lucide-react";
import CafeOne from "@/../public/cafe-one.png";
import Mswitch from "@/../public/mswitch.png";
import GreenStar from "@/../public/green-star.png";
import BoldSpace from "@/../public/boldspace.png";
import Switch from "@/../public/switch.png";
import Trace from "@/../public/trace.png"
import HomePic from "./home-pic";
import FounderFriday from "@/../public/founder-friday.png"
import FounderFriday1 from "@/../public/founder-friday-1.png"
import FounderFriday2 from "@/../public/founder-friday-2.png"
import FounderFriday3 from "@/../public/founder-friday-3.png"
import FounderFriday4 from "@/../public/founder-friday-4.png"
import FounderFriday5 from "@/../public/founder-friday-5.png"
import FounderFridayGroup from "@/../public/founder-friday-group.png"
import Ngoy from "@/../public/ngoy.png"
import Community from "@/../public/community.png"
import { Button } from "@/components/ui/button"
import MainLogo from "@/../public/main-logo.svg"
import Trace2 from "@/../public/trace2.svg"
import Trace3 from "@/../public/trace3.png"
import animStyles from "@/app/animations.module.css"
import MoneyBag from "@/../public/money-bag.svg"


import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import LocationTextAnimation from "./location-anim";

const OFFERS = [
  {
    id: 'item-1',
    title: 'Monthly Meetups',
    description: 'Our cornerstone event, held on the last Friday of every month, featuring keynote speakers, panel discussions, and ample networking opportunities.',
    content: 'Our cornerstone event, held on the last Friday of every month, featuring keynote speakers, panel discussions, and ample networking opportunities.'
  },
  {
    id: 'item-2',
    title: 'Diverse Network',
    description: 'Connect with a wide range of professionals, from early-stage founders to seasoned entrepreneurs, investors, and industry experts.',
    content: 'Connect with a wide range of professionals, from early-stage founders to seasoned entrepreneurs, investors, and industry experts.'
  },
  {
    id: 'item-3',
    title: 'Knowledge Sharing',
    description: 'Connect with a wide range of professionals, from early-stage founders to seasoned entrepreneurs, investors, and industry experts.',
    content: 'Gain insights from industry experts and peers through workshops, seminars, and discussion forums.'
  },
  {
    id: 'item-4',
    title: 'Collaboration Opportunities',
    description: 'Find potential co-founders, mentors, or partners for your next big venture.',
    content: 'Partner with fellow founders on projects, share resources, and create innovative solutions together.'
  },
  {
    id: 'item-5',
    title: 'Community Support',
    description: 'Be part of a supportive ecosystem that celebrates successes and provides guidance through challenges.',
    content: 'Access a supportive community that offers guidance, feedback, and encouragement to help you succeed.'
  }
];

export default function HomePage() {
  return (

    <>
      <div className="flex relative flex-col md:flex-row px-5 sm:px-10 lg:px-20 
       py-10 sm:py-16 md:py-24 lg:py-32 overflow-x-clip">
        <div className="flex flex-col basis-2/3 gap-10 animate-slide-in">
          <div className="flex flex-col">
            <h3 className="font-semibold text-sm sm:text-base md:text-lg leading-5">Join our premier monthly meetup for startup founders and tech visionaries</h3>
            <h3 className=" text-3xl sm:text-4xl md:text-5xl lg:text-[3.125rem] font-bold text-[#5C00B3] mb-9">Connect, Collaborate, Innovate!</h3>
            <p className="text-xl md:text-2xl w-11/12 leading-9">Every last Friday of the month, we bring together the brightest minds in our local tech ecosystem.
              Whether you&apos;re a seasoned entrepreneur or just starting your journey, Founder&apos;s Friday is your launchpad for new ideas, valuable connections, and game-changing opportunities.
            </p>
          </div>
          <div>
            <LinkButton className="px-5 py-4 md:py-7 lg:py-10 flex flex-row items-center gap-[10px] group w-fit">
              <h3 className="text-lg md:text-[1.75rem] font-normal">Register For Our Next Event</h3>
              <Image src={RightArrow} alt="Right Arrow" className="group-hover:invert" height={40} width={40}></Image>
            </LinkButton>
            <p className="text-sm md:text-base text-[#6750A4] font-semibold mt-2">Join Us for our next meetup on the 26th of July 2024</p>
          </div>
          <div className="flex flex-col gap-7 mt-6">
            <div className="flex flex-row gap-8">
              <Image src={CafeOne} height={80} width={80} className="h-[clamp(5vw,2.5rem,5rem)] w-[clamp(5vw,2.5rem,5rem)] border border-[#9C92A4] rounded-full " alt="sponsor" />
              <Image src={Mswitch} height={80} width={80} className="h-[clamp(5vw,2.5rem,5rem)] w-[clamp(5vw,2.5rem,5rem)] border border-[#9C92A4] rounded-full" alt="sponsor" />
              <Image src={GreenStar} height={80} width={80} className="h-[clamp(5vw,2.5rem,5rem)] w-[clamp(5vw,2.5rem,5rem)] border border-[#9C92A4] rounded-full" alt="sponsor" />
              <Image src={BoldSpace} height={80} width={80} className="h-[clamp(5vw,2.5rem,5rem)] w-[clamp(5vw,2.5rem,5rem)] border border-[#9C92A4] rounded-full" alt="sponsor" />
              <Image src={Switch} height={80} width={80} className="h-[clamp(5vw,2.5rem,5rem)] w-[clamp(5vw,2.5rem,5rem)] border border-[#9C92A4] rounded-full" alt="sponsor" />
            </div>
            <div className="flex flex-row gap-4">
              <p className="text-sm font-bold">Become a collaborator today</p>
              <SquareArrowOutUpRight width={20} height={20}></SquareArrowOutUpRight>
            </div>
          </div>
        </div>
        <div className="h-96 w-full relative md:h-0 md:static">
          <Image src={Trace} className="invisible md:visible left-0 -top-52 md:h-[1550px] w-[1000px] absolute md:-top-[1.38rem] md:left-[37.375rem] -z-10" alt="trace" height={1125} width={1000}></Image>
          <Image src={Trace3} className="visible md:invisible -right-10 -top-80 h-[1250px] w-full absolute -z-10" alt="trace" height={1525} width={1200}></Image>
          <HomePic src={FounderFriday} height={350} width={350} className={`${animStyles.pic1} lg:invisible xl:visible left-0 top-5 md:left-[59.25rem] md:top-[9.5rem] absolute -z-10`}
          imgClassName="text-[9px] md:text-base"></HomePic>
          <HomePic src={FounderFriday1} height={350} width={350} className={`${animStyles.pic2} top-36 bg-[#6F00D9] left-56 md:left-auto md:right-[0.4%] lg:top-[14.68rem] absolute -z-10`}
          imgClassName="text-[6px] md:text-base"></HomePic>
          <HomePic src={FounderFriday2} height={188} width={188} className={`${animStyles.pic3} top-72 left-14 bg-[#EBE9ED] md:left-[62.3125rem] md:top-[39.3125rem] absolute -z-10 py-[5px] px-[2.5px]`}
          imgClassName="text-xs md:text-base" textClassName="text-black"></HomePic>
          <HomePic src={FounderFriday3} height={94} width={94} className={`${animStyles.pic4} top-96 left-56 bg-[#EBE9ED] md:left-[76.9rem] md:top-[55rem] absolute -z-10 text-[7px] py-[5px] px-[2.5px]`}
          imgClassName="text-lg md:text-base" textClassName="text-black"></HomePic>
        </div>
      </div>


      <div className="mt-60 flex flex-col xl:flex-row md:px-10 px-5 justify-between gap-5">
        <h2 className="font-bold block text-[28px] md:hidden mdtext-[2.75rem]">Who Are We?</h2>
        <Image className="md:rounded-[20px] self-center rounded-[8px] basis-2/4 h-fit" src={FounderFridayGroup}
          width={698} height={564} alt="founder's friday group pic"></Image>
        <div className="flex flex-row items-center gap-2">
          <div className="border-4 border-purple-500 border-r-0 h-[92%] min-w-8 rounded-tl-3xl rounded-bl-3xl hidden lg:block">
          </div>

          <div className="h-full flex flex-col justify-between">
            <h2 className="font-bold hidden md:block text-[2.75rem]">Who Are We?</h2>
            <p className="text-[14px] text-wrap sm:text-2xl text-[#8E8E93] mb-5">Born from the vibrant startup ecosystem of Abuja, we recognized the need for a consistent, high-quality networking platform where founders,
              innovators, and tech enthusiasts could connect, share ideas, and foster collaboration.</p>
            <p className="text-[14px] text-wrap sm:text-2xl text-[#8E8E93]">Join us at the next Founder&apos;s Friday and be part of Abuja&apos;s most dynamic startup community. Together, we&apos;re not
              just sharing ideas—we&apos;re shaping the future of tech in our city.</p>
            <div className="flex flex-row w-full mt-5 mb-10 md:mt-[69px] md:mb-[76px] flex-shrink  gap-10">
              <LinkButton className="bg-purpleprime w-fit hover:bg-purple-700  rounded-[40px] pl-[10px]  py-[2px] md:py-4 md:px-[70px] group ">
                <h3 className="text-white text-[16px] md:text-2xl ">Register</h3>
                <ArrowRight className="text-white  h-6 w-6" />
              </LinkButton>
              <LinkButton className="bg-transparent w-fit hover:bg-purple-700 hover:border-purple-700 rounded-[40px] border-[3px] pl-[20px]  py-[5px] md:py-4 md:px-[70px]  group ">
                <h3 className="text-[16px] md:text-2xl">Donate</h3>
                <Image className="group-hover:brightness-0 group-hover:invert" src={MoneyBag} alt="moneybag" height={35} width={35}></Image>
              </LinkButton>
            </div>
            <div></div>
            <div className="text-lg md:text-2xl font-bold">Founder&apos;s Friday is more than just a meetup — it&apos;s a movement.</div>
          </div>
        </div>
      </div>


      {/* WHAT WE OFFER */}

      <div className="flex flex-col w-full justify-center items-center px-5 md:px-20 mt-60">
        <h2 className="font-bold md:text-[2.75rem] text-[28px]">What We Offer</h2>
        <Accordion type="single" collapsible className="w-full">
          {OFFERS.map((offer) => (
            <AccordionItem value={offer.id} key={offer.id}>
              <AccordionTrigger className="flex flex-row">
                <div className="flex gap-x-10 items-center md:basis-2/5 basis-full">
                  <div className="h-[1.5rem] md:h-[1.5rem] w-[1.5rem] rounded-full bg-[#8300FF]"></div>
                  <h2 className="md:text-[2rem] lg:text-[2.5rem] shrink font-[600] text-start basis-3/5">{offer.title}</h2>
                </div>
                <p className="basis-3/5 md:text-[16px] lg:text-lg hidden md:inline-block text-left">{offer.description}</p>
              </AccordionTrigger>
              <AccordionContent className="text-sm md:text-base">{offer.content}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      {/*What Happens At Founders Friday*/}
      <div className="flex w-full justify-start items-center px-5 md:px-20 mt-60">
        <h2 className="font-bold md:text-[2.75rem] text-[24px]">What Happens At Founders Friday</h2>
      </div>

      {/*Why Sponsor Founders Friday?*/}
      <div className="px-5 md:px-20 mt-60">
        <div className="mb-16">
          <header className="font-bold md:text-[1.875rem] text-[20px] text-[#5C00B3]">Sponsor The Next Friday</header>
          <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl">Why Sponsor Founders Friday?</h2>
        </div>

        <div className="flex lg:flex-row flex-col  justify-center md:px-20 px-5 mt-1 gap-x-[110px]">
        <div className="flex text-sm md:text-base flex-row justify-center px-[1.25em] mt-[0.25em] gap-x-[6.875em]">
          <div className="flex flex-col w-[31.25em] border-2 gap-y-[1.25em] rounded-lg border-[#CA92FF] shadow-2xl p-[2.5em]">
            <div className="flex flex-row gap-x-[1.25em] justify-between items-center">
              <div className="bg-[#DCB6FF] size-[12.5em] border-2 p-[0.5em] pt-[2.5em] border-[#A649FF] rounded-full">
                <h2 className="text-base font-bold mb-[0.25em] text-center">Networking Opportunities</h2>
                <p className="text-[0.9em] font-medium mb-[0.75em] text-center">Connect with industry leaders, founders, and potential partners.</p>
              </div>
              <div className="bg-[#EDDBFF] size-[12.5em] border-2 p-[0.5em] pt-[2.5em] border-[#A649FF] rounded-full">
                <h2 className="text-base font-bold mb-[0.25em] text-center">Community Impact</h2>
                <p className="text-[0.9em] font-medium mb-[0.75em] text-center">Support the growth and development of the startup ecosystem.</p>
              </div>
            </div>

            <div className="flex flex-row justify-between items-center">
              <div className="bg-[#EDDBFF] size-[12.5em] px-[1em] border-2 p-[0.5em] pt-[2.25em] border-[#A649FF] rounded-full">
                <h2 className="text-base font-bold mb-[0.25em] text-center">Brand Association</h2>
                <p className="text-[0.9em] font-medium mb-[0.75em] text-center">Align your brand with innovation and entrepreneurial success.</p>
              </div>
              <div className="bg-[#DCB6FF] size-[12.5em] border-2 p-[0.5em] pt-[2.5em] border-[#A649FF] rounded-full">
                <h2 className="text-base font-bold mb-[0.25em] text-center">Visibility</h2>
                <p className="text-[0.9em] font-medium mb-[0.75em] text-center">Gain exposure to a targeted audience of young professionals and entrepreneurs.</p>
              </div>
            </div>
          </div>
        </div>



          <div className="max-w-[670px] mt-10 md:mt-0">
            <h2 className="md:text-[1.75rem] text-2xl font-bold">How To Sponsor</h2>
            <h2 className="md:text-2xl text-xl  text-[#605668] italic">Ready to Make an Impact?</h2>
            <p className="lg:text-lg text-sm ">Fill out the form below or contact us at [contact email/phone number] to learn more about how you can sponsor the next Founders Friday</p>

            <div className="flex mt-8 lg:gap-x-7 gap-x-3">
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="name">Name</Label>
                <Input type="text" id="name" placeholder="Full Name" />
              </div>
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="company">company(optional)</Label>
                <Input type="text" id="company" placeholder="Company" />
              </div>
            </div>

            <div className="flex mt-8 mb-7 lg:gap-x-7 gap-x-3">
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="email">Email</Label>
                <Input type="email" id="email" placeholder="Email Address" />
              </div>
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="phone">Phone</Label>
                <Input type="number" id="phone" placeholder="Phone Number" />
              </div>
            </div>

            <LinkButton className="bg-purpleprime hover:bg-purple-800 border-0 rounded-md py-4 px-5 lg:px-[2.8rem] group ">
              <span className="text-white">Sponsor</span>
              <ArrowRight className="mr-3 text-white  h-6 w-9" />
            </LinkButton>
          </div>
        </div>
      </div>



      <div className="w-full relative overflow-hidden h-[808px] mt-20">
        <Image
          src={FounderFriday4}
          alt="sponsor"
          layout="fill"
          objectFit="cover"
        />
        <div className="flex items-center justify-center absolute inset-5 md:inset-20 ">
          <div className="w-full">
            <header className="font-bold text-2xl  md:text-[3.12rem] leading lg:w-[762px]  text-white">Founders Friday is coming to</header>
            <h2 className="font-bold text-[64px]  md:text-[128px] leading-[10rem] text-[#A649FF] h-40 overflow-hidden relative">
              <LocationTextAnimation></LocationTextAnimation>
            </h2>
            <p className="md:text-2xl text-lg text-justify mb-7 text-white w-full ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac
              rutrum felis. Nulla nibh lorem, facilisis vel est at, vehicula dignissim lacus.
              Cras sagittis imperdiet dolor, eget accumsan leo suscipit id. Maecenas ut ante quis
              quam lobortis consequat eu id turpis. Pellentesque habitant morbi tristique senectus
              et netus et malesuada fames ac turpis egestas.
            </p>

            <LinkButton className="bg-transparent rounded-[40px]   border-[3px]  py-4 px-[70px] group ">
              <span className=" font-bold">Register Now</span>
              <ArrowRight className="mr-3 text-[#A649FF] group-hover:text-white  h-6 w-9" />
            </LinkButton>
          </div>

          <div className="lg:h-full lg:block hidden">
            <Image src={MainLogo} className="mt-4" alt="Company Logo" height={554} width={595}></Image>
          </div>
        </div>
      </div>

      <div className="flex flex-col mb-40 items-center pt-40">
        <div className="flex flex-col items-center justify-center mb-[50px] gap-5">
          <h2 className="font-bold text-3xl md:text-[2.8125rem] text-center">Register And Be Part of Our Community</h2>
          <p className="text-center text-xl md:text-2xl text-neutral-500">Join our community of over 1000+ founders, developers, and tech junkies in general.
            <br />Be inspired by people who live to inspire!</p>
        </div>
        <div className="flex flex-col items-center relative mb-20">
          <Image src={Trace2} width={1800} height={300} alt="trace2" className="w-full absolute inset-0 top-10"></Image>
          <Image src={Community} width={1800} height={300} alt="trace2" className="w-full px-20 z-10"></Image>
        </div>

        <LinkButton className="bg-transparent rounded-[40px]   border-[3px]  py-4 px-[70px] group ">
          <span className=" font-bold">Register Now</span>
          <ArrowRight className="mr-3 text-[#A649FF] group-hover:text-white  h-6 w-9" />
        </LinkButton>
      </div>


      <div className="flex flex-row flex-wrap lg:flex-nowrap mb-40 items-center px-20 gap-[52px] justify-between">
        <Image src={FounderFriday5} width={698}
          height={564} alt="trace2" className="lg:max-w-[698px] shrink-0 rounded-[20px]" />
        <div className="">
          <h2 className="mb-11 text-2xl font-bold">At Founder’s Friday, Every Friday Is a Learning Experience!</h2>
          <p className="text-lg mb-11 font-semibold">Join us in our mission to transform ideas into
            impact and shape the future of Nigeria’s startup landscape.</p>

          <LinkButton className="bg-[#A649FF] text-white rounded-[40px] py-5 px-[70px]">
            <span className="">Register </span>
            <ArrowRight className="mr-3 h-6 w-9" />
          </LinkButton>
        </div>
      </div>

      <div className="md:flex flex-col hidden">
        <div className="w-full mb-5 ">
          <div className="flex flex-row-reverse  items-center gap-10 w-full pr-20 ">
            <button
              className="flex items-center justify-center  h-24 w-24   border-[3.05px]  rounded-full border-[#E2A7F7] "
            >
              <ArrowRight className="h-12 w-12 text-black" />
            </button>
            <button
              className="flex items-center justify-center  h-24 w-24 border-[3.05px] rounded-full border-[#E2A7F7] "
            >
              <ArrowLeft className="h-12 w-12  text-black" />
            </button>

          </div>
        </div>

        <div className="mb-40 px-20 w-full hidden md:block ">
          <div>
            <h2 className="font-bold text-[2.8125rem] text-center">What Do Our Attendees Have To Say?</h2>
            <p className="text-center text-2xl text-neutral-500">Well See For Yourself!</p>
          </div>

          <div className="flex mt-20  items-center ">
            <div className="flex flex-col items-center ">
              <div className="p-[18.77px] border-[4.08px] border-[#8300FF] w-fit rounded-full">
                <Image src={Ngoy} width={195.84}
                  height={195.84} alt="trace2" className="lg:max-w-[698px] shrink-0 rounded-full" />
              </div>
              <h2 className="font-bold text-[1.875rem] mt-7 text-center">Mr Belba Ngoy</h2>
              <p className="text-center 2xl:text-2xl text-xl text-neutral-500">Always a remarkable experience for my team and myself</p>
            </div>
            <div className="flex flex-col items-center ">
              <div className="p-[18.77px] border-[4.08px] border-[#8300FF] w-fit rounded-full">
                <Image src={Ngoy} width={195.84}
                  height={195.84} alt="trace2" className="lg:max-w-[698px] shrink-0 rounded-full" />
              </div>
              <h2 className="font-bold text-[1.875rem] mt-7 text-center">Mr Belba Ngoy</h2>
              <p className="text-center 2xl:text-2xl text-xl text-neutral-500">Always a remarkable experience for my team and myself</p>
            </div>
            <div className="flex flex-col items-center ">
              <div className="p-[18.77px] border-[4.08px] border-[#8300FF] w-fit rounded-full">
                <Image src={Ngoy} width={195.84}
                  height={195.84} alt="trace2" className="lg:max-w-[698px] shrink-0 rounded-full" />
              </div>
              <h2 className="font-bold text-[1.875rem] mt-7 text-center">Mr Belba Ngoy</h2>
              <p className="text-center 2xl:text-2xl text-xl text-neutral-500">Always a remarkable experience for my team and myself</p>
            </div>
          </div>
        </div>
      </div>




      <div className="flex w-full justify-start items-center px-20 mb-80 mt-40">
        <h2 className="font-bold text-[2.75rem]">FAQs</h2>
      </div>
    </>

  );
}
