"use client";

import { Imoviecard } from "@/types";
import { FaHeart, FaPlayCircle } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { PlayVideoModal } from "../videomodal";
import { useState } from "react";
import { addToWatchList, deleteFromWatchList } from "@/app/action";
import { usePathname } from "next/navigation";

const MovieCard: React.FC<Imoviecard> = ({
  title,
  overview,
  movieId,
  watchList,
  watchListId,
  youtubeUrl,
  year,
  age,
  time,
}) => {
  const [open, setOpen] = useState<boolean>(false);
  const pathname = usePathname();

  return (
    <>
      <button onClick={() => setOpen((prev) => !prev)}>
        <FaPlayCircle size={60} />
      </button>
      <div className=" right-5 top-5 absolute z-10">
        {watchList ? (
          <form action={deleteFromWatchList}>
            <input type="hidden" name="watchlistId" value={watchListId} />
            <input type="hidden" name="pathname" value={pathname} />

            <button className="">
              <FaHeart size={16} className="text-red-500" />
            </button>
          </form>
        ) : (
          <form action={addToWatchList}>
            <input type="hidden" name="movieId" value={movieId} />
            <input type="hidden" name="pathname" value={pathname} />
            <button className=" p-2 bg-neutral-100 rounded-[6px]">
              <CiHeart size={16} className=" text-black" />
            </button>
          </form>
        )}
      </div>
      <div className=" p-5 absolute bottom-0 left-0">
        <h1 className="text-[14px] font-bold line-clamp-1">{title}</h1>
        <div className=" flex gap-x-2 items-center">
          <p className=" font-normal text-sm">{year}</p>
          <p className=" font-normal border py-0.5 px-1 border-neutral-300 rounded-[4px] text-[8px]">
            {age}+
          </p>
          <p className=" font-normal text-sm">{time}h</p>
        </div>
        <p className=" line-clamp-1 text-sm text-neutral-300 font-light">
          {overview}
        </p>
      </div>
      <PlayVideoModal
        changeState={() => setOpen((prev) => !prev)}
        overview={overview}
        state={open}
        youtubeUrl={youtubeUrl}
        title={title}
        key={movieId}
        age={age}
        time={time}
        year={year}
      />
    </>
  );
};

export default MovieCard;
