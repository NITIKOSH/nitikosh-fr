import Image from "next/image";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import { hero_vault, hero_design } from "@/assets";
const Hero = () => {
  return (
    <div>
      <Left />
      <Right />
    </div>
  );
};

export default Hero;

const Right = () => {
  return (
    <div>
      {/* <Image src={hero_design} alt="hero vault" className='absolute right-0 top-0 ' /> */}
      <Image
        src={hero_vault}
        alt="hero vault"
        width={700}
        height={700}
        className="absolute right-0 top-0 -z-10"
      />
    </div>
  );
};
const Left = () => {
  return (
    <div
      className="w-screen h-screen flex flex-col iterms-center justify-center container mx-auto text-[#211D3D]"
    >
      <div className="text-5xl font-extrabold w-3/5 font-lato leading-[1.4]">
        Secure Justice with Blockchain : The Evault Revolutionizing Legal Record
        Handling
      </div>
      <div className="w-1/2 pt-4 font-open-sans font-light text-xl">
        Our platform offers efficient storage, management, and sharing with
        seamless integration
      </div>
      <div className="pt-20 flex flex-row ">
        <div className=" flex items-center justify-center text-white bg-[#5E51BF] rounded pl-6 pr-4 py-2 space-x-2 cursor-pointer">
          <span> Know More</span>
          <ChevronRightIcon className="h-4" />
        </div>{" "}
      </div>
    </div>
  );
};
