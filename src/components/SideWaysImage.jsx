import React from "react";
import ButtonPrimary from "./ButtonPrimary";

export default function SideWaysImage({ card, children }) {
  return (
    <div className="xl:flex-row flex flex-col xl:justify-between  justify-center items-center w-full relative">
      {card === 2 && (
        <>
          <div className=" left-0 bottom-[-35.904px]">
            <img src="/sideways-img.png" alt="" />
          </div>
          <div></div>
        </>
      )}
      <div className="xl:flex-row flex flex-col gap-20 xl:gap-10 lg:max-w-[620px]">
        <div className="flex flex-col gap-4">
          {children}
          <ol>
            {[
              "Transcribe meetings across several video-conferencing apps,dialers, and audio files.",
              "Easily invite CoPitch.ai Notetaker to meetings on your calendar.",
              "Fireflies captures video + audio, and generates transcripts in minutes.",
              "Integrates with apps like Google Meet, Zoom, Teams Webex, Ringcentral, Aircall and other platforms.",
            ].map((item, id) => (
              <li
                className="text-[20px] text-[#475569] leading-[150%]"
                key={id}
              >{`${id + 1}. ${item}`}</li>
            ))}
          </ol>
        </div>
        <div className="lg:max-w-[250px]">
          <ButtonPrimary />
        </div>
      </div>
      {card === 1 && (
        <div className=" right-0 bottom-[-35.904px]">
          <img src="/sideways-img.png" alt="" />
        </div>
      )}
    </div>
  );
}
