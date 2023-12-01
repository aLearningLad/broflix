"use client";

import { Ibtn } from "@/types";
import { useState } from "react";
import { FaPlayCircle } from "react-icons/fa";
import { PlayVideoModal } from "../videomodal";

const PlayBtn: React.FC<Ibtn> = ({
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
        className="w-fit gap-1 py-0.5 px-3 bg-white text-neutral-700 rounded-[6px] text-[14px] font-normal border-2 flex items-center border-white hover:scale-90 transition duration-500 hover:bg-transparent hover:text-white"
      >
        <FaPlayCircle size={18} />
        Play
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

export default PlayBtn;
