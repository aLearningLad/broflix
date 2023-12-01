"use client";

import { IoIosInformationCircle } from "react-icons/io";
import { useState } from "react";
import { PlayVideoModal } from "../videomodal";
import { Ibtn } from "@/types";

const LearnMoreBtn: React.FC<Ibtn> = ({
  age,
  duration,
  id,
  overview,
  releaseDate,
  title,
  youtubeUrl,
}) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="w-fit py-2 px-3 bg-white/30 gap-1 flex items-center text-neutral-200 rounded-[6px] text-[14px] font-normal border-2 border-white hover:scale-90 transition duration-500 hover:bg-transparent hover:text-white"
      >
        <IoIosInformationCircle size={22} />
        Learn more
      </button>
      <PlayVideoModal
        state={open}
        changeState={setOpen}
        age={age}
        overview={overview}
        time={duration}
        youtubeUrl={youtubeUrl}
        title={title}
        year={releaseDate}
        key={id}
      />
    </>
  );
};

export default LearnMoreBtn;
