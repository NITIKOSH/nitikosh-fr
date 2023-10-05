import ReactDOM from "react-dom";
import Image from "next/image";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

import { iIcon } from "@/assets";

const Step2 = ({ register, watch }) => {
  const [showTooltip, setShowTooltip] = React.useState(false);
  const [showTooltip2, setShowTooltip2] = React.useState(false);

  return (
    <div>
      <div className="w-[80%]   mx-auto flex flex-col space-y-12  ">
        <div className="space-y-12 mt-12">
          {/* //////////// */}
          <div className=" flex flex-row w-full space-x-6">
            <div className="basis-2/5  text-[#211d3d72] shadow-lg rounded-xl  outline-none px-4">
              <select
                {...register("docType")}
                defaultValue=""
                className="outline-none w-full h-full rounded-xl"
              >
                <option value="" disabled>
                  Select Case Type...
                </option>
                <option value="civil">Civil</option>
                <option value="criminal">Criminal</option>
                <option value="other">Others</option>
              </select>
            </div>
            <div className="border border-1 px-8 py-4 basis-3/5  rounded-xl flex relative">
              <input
                {...register("docName")}
                placeholder="Enter Document Name"
                className="outline-none w-full bg-transparent text-[#211d3d72] font-open-sans font-light "
                type="file"
              />
              <Image
                src={iIcon}
                alt="icon"
                width={20}
                height={20}
                className="cursor-pointer"
                onMouseEnter={() => setShowTooltip2(true)}
                onMouseLeave={() => setShowTooltip2(false)}
              />
              {showTooltip2 && (
                <div className="  text-xs  font-extralight text-[#00000067] px-2 py-1 shadow bg-white rounded absolute right-10 top-10 z-10">
                  Enter unique identification <br /> number assigned to the case
                </div>
              )}
            </div>
          </div>
          {/* ///////// */}
          {/* <input
					{...register('docName')}
					placeholder='Enter Document Name'
				/> */}
          {/* <input
					{...register('evidVideo')}
					placeholder='Upload evidence Video'
				/> */}
          {/* ////// */}
          <div className="border border-1 px-8 py-4 basis-3/5  rounded-xl flex relative">
            <input
              {...register("evidVideo")}
              placeholder="Upload evidence Video"
              className="outline-none w-full bg-transparent text-[#211d3d72] font-open-sans font-light"
              type="file"
            />
            <Image
              src={iIcon}
              alt="icon"
              width={20}
              height={20}
              className="cursor-pointer"
              onMouseEnter={() => setShowTooltip2(true)}
              onMouseLeave={() => setShowTooltip2(false)}
            />
            {showTooltip2 && (
              <div className="  text-xs  font-extralight text-[#00000067] px-2 py-1 shadow bg-white rounded absolute right-10 top-10 z-10">
                Enter unique identification <br /> number assigned to the case
              </div>
            )}
          </div>
          {/* ////// */}

          {/* <input
					{...register('evidImage')}
					placeholder='Upload evidence Image'
					// type='number'
				/> */}
          <div className="border border-1 px-8 py-4 basis-3/5  rounded-xl flex relative">
            <input
              {...register("evidImage")}
              placeholder="Upload evidence Image"
              className="outline-none w-full bg-transparent text-[#211d3d72] font-open-sans font-light"
              type="file"
            />
            <Image
              src={iIcon}
              alt="icon"
              width={20}
              height={20}
              className="cursor-pointer"
              onMouseEnter={() => setShowTooltip2(true)}
              onMouseLeave={() => setShowTooltip2(false)}
            />
            {showTooltip2 && (
              <div className="  text-xs  font-extralight text-[#00000067] px-2 py-1 shadow bg-white rounded absolute right-10 top-10 z-10">
                Enter unique identification <br /> number assigned to the case
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step2;
