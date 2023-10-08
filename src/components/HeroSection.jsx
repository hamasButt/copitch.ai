import React from "react";
import SideWaysImage from "./SideWaysImage";
import ButtonPrimary from "./ButtonPrimary";

const HeroSection = () => {
  return (
    <>
      <div className="flex flex-col lg:gap-[206px]">
        <div className="xl:flex-row flex flex-col lg:gap-8 mt-4">
          <h1 className="head-text lg:text-[80px] text-[40px]">
            Automate your Meeting Notes and Proposal
          </h1>
          <div className="lg:flex flex-col gap-8 pt-[50px]">
            <p className="text-2xl !leading-[150%] text-right">
              coPitch.ai helps your team transcribe, summarize, search, and
              analyze voice conversations to create an engaging proposal that
              helps to win whatever you are looking for.
            </p>
            <div className="flex lg:justify-end w-full gap-4 ">
              <button className="lg:py-[22px] lg:px-10 trial-req">
                Request a Trial
              </button>
              <ButtonPrimary />
            </div>
          </div>
        </div>
        <img src="/Frame 10.png" alt="" />
      </div>
      <div className=" flex flex-col xl:gap-[272px] gap-[100px] w-full justify-center">
        <SideWaysImage card={1}>
          <h2 className="header-sideways-comp lg:text-[40px] text-[30px]">
            Automatically record and transcribe meetings
          </h2>
        </SideWaysImage>
        <span className="hidden xl:block">
          <SideWaysImage card={2}>
            <h2 className="header-sideways-comp lg:text-[40px] text-[30px]">
              Find anything with AI-Powered Search
            </h2>
          </SideWaysImage>
        </span>
        <span className="block xl:hidden">
          <SideWaysImage card={1}>
            <h2 className="header-sideways-comp lg:text-[40px] text-[30px]">
              Find anything with AI-Powered Search
            </h2>
          </SideWaysImage>
        </span>
        <SideWaysImage card={1}>
          <h2 className="header-sideways-comp lg:text-[40px] text-[30px]">
            Analyze meetings using conversation intelligence
          </h2>
        </SideWaysImage>
        <span className="hidden xl:block">
          <SideWaysImage card={2}>
            <h2 className="header-sideways-comp lg:text-[40px] text-[30px]">
              Find anything with AI-Powered Search
            </h2>
          </SideWaysImage>
        </span>
        <span className="block xl:hidden">
          <SideWaysImage card={1}>
            <h2 className="header-sideways-comp lg:text-[40px] text-[30px]">
              Find anything with AI-Powered Search
            </h2>
          </SideWaysImage>
        </span>
      </div>
    </>
  );
};

export default HeroSection;
