"use client";
import React from "react";
import RegisterCase from "./RegisterCase";
import { Navbar } from ".";
import Image from "next/image";
import Null from "./Null";

const Dashboard = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <div className="h-[calc(100vh-80px)] w-full py-16 px-32">
        <div className="flex flex-col gap-2">
          <div className="text-3xl font-medium font-lato text-[#211D3D]">
            Welcome to Dashboard
          </div>
          <p className="leading-normal text-gray-400">
            This page displays user-uploaded cases, fostering engagement, and
            enhancing user experience while facilitating easy access and
            management of their content
          </p>
          <div className="relative h-[500px] w-full shadow-xl font-poppins justify-between flex-wrap rounded-md flex p-4 gap-4 overflow-y-scroll scrollbar-hide">
            {/* <div className='cursor-pointer'>
							<Null />
						</div>
						<p className='text-[#565973] text-base'>
							The Dashboard summarizes the list of already minted
							cases.
						</p>
						<div className='border-[1px] border-[#56597399] text-[#0B0F19] rounded-md text-xl p-2 px-4'>
							Learn more
						</div> */}
            <div className="h-96 w-72 rounded-xl bg-[#E5E5E599]/60 p-2 flex flex-col overflow-hidden">
              <Image
                src="/nft.png"
                alt="dashboard"
                width={320}
                height={180}
                className=""
              />
              <div className="font-bold font-lato text-xl p-2 leading-tight">
                K. M. Nanavati v. State of Maharashtra
              </div>
              <p className="font-sans text-[15px] text-primary p-2 leading-tight">
                The Nanavati murder case (1959). This case, K.M. Nanavati v. the
                State of Maharashtra (1961) is...
              </p>
            </div>
            <div className="h-96 w-72 rounded-xl bg-[#E5E5E599]/60 p-2 flex flex-col overflow-hidden">
              <Image
                src="/nft.png"
                alt="dashboard"
                width={320}
                height={180}
                className=""
              />
              <div className="font-bold font-lato text-xl p-2 leading-tight">
                K. M. Nanavati v. State of Maharashtra
              </div>
              <p className="font-sans text-[15px] text-primary p-2 leading-tight">
                The Nanavati murder case (1959). This case, K.M. Nanavati v. the
                State of Maharashtra (1961) is...
              </p>
            </div>
            <div className="h-96 w-72 rounded-xl bg-[#E5E5E599]/60 p-2 flex flex-col overflow-hidden">
              <Image
                src="/nft.png"
                alt="dashboard"
                width={320}
                height={180}
                className=""
              />
              <div className="font-bold font-lato text-xl p-2 leading-tight">
                K. M. Nanavati v. State of Maharashtra
              </div>
              <p className="font-sans text-[15px] text-primary p-2 leading-tight">
                The Nanavati murder case (1959). This case, K.M. Nanavati v. the
                State of Maharashtra (1961) is...
              </p>
            </div>
            <div className="h-96 w-72 rounded-xl bg-[#E5E5E599]/60 p-2 flex flex-col overflow-hidden">
              <Image
                src="/nft.png"
                alt="dashboard"
                width={320}
                height={180}
                className=""
              />
              <div className="font-bold font-lato text-xl p-2 leading-tight">
                K. M. Nanavati v. State of Maharashtra
              </div>
              <p className="font-sans text-[15px] text-primary p-2 leading-tight">
                The Nanavati murder case (1959). This case, K.M. Nanavati v. the
                State of Maharashtra (1961) is...
              </p>
            </div>
            <div className="h-96 w-72 rounded-xl bg-[#E5E5E599]/60 p-2 flex flex-col overflow-hidden">
              <Image
                src="/nft.png"
                alt="dashboard"
                width={320}
                height={180}
                className=""
              />
              <div className="font-bold font-lato text-xl p-2 leading-tight">
                K. M. Nanavati v. State of Maharashtra
              </div>
              <p className="font-sans text-[15px] text-primary p-2 leading-tight">
                The Nanavati murder case (1959). This case, K.M. Nanavati v. the
                State of Maharashtra (1961) is...
              </p>
            </div>
            <div
              className="fixed cursor-pointer flex items-center justify-center bottom-16 right-16 h-12 w-12 rounded-full bg-[#7665EE]"
              onClick={() => setOpen(true)}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="8.75" width="1.5" height="20" rx="1.25" fill="white" />
                <rect
                  y="11.25"
                  width="1.5"
                  height="20"
                  rx="1.25"
                  transform="rotate(-90 0 11.25)"
                  fill="white"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      {open && <RegisterCase setOpen={setOpen} />}
    </>
  );
};

export default Dashboard;
