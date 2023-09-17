import Link from "next/link";
import Image from "next/image";
import { logo, search, wallent } from "@/assets";
const Navbar = () => {
  return (
    <div
      className=" w-screen bg-white h-20 flex items-center justify-center fixed  shadow-[0px_4px_8px_-4px_rgba(0,0,0,0.078)]
 "
    >
      {/* left side  */}
      <div className="container mx-auto flex  justify-between">
        <div className="flex items-center justify-center space-x-2">
          <Link className="cursor-pointer" href="/">
            <Image
              src={logo}
              alt="Picture of the author"
              width={30}
              height={30}
            />
          </Link>

          <Link
            href="/"
            className=" uppercase text-xl font-poppins cursor-pointer font-thin text-[#222222cb]"
          >
            nitikosh
          </Link>
        </div>
        {/* ri9ght side */}
        <div className="flex items-center justify-center space-x-4">
          <form className="flex items-center justify-center outline px-4 py-[6px] outline-[#D4D7E5] outline-1 rounded space-x-2">
            <input
              type="text"
              placeholder="Search Case..."
              id=""
              className="outline-none text-slate-400 text-sm w-48"
            />
            <Image
              src={search}
              alt="search icpon"
              width={18}
              height={18}
              className="cursor-pointer"
            />
          </form>
          <div>
            <div className=" flex items-center justify-center bg-gradient-to-r px-6 py-[6px] from-[#332885] to-[#7F8FD7] rounded cursor-pointer">
              <Image src={wallent} alt="wallet iconm" width={20} height={20} />
              <span className="text-white text-sm">Connect Wallet</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
