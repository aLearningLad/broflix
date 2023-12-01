import prisma from "@/app/utils/db";
import { LearnMoreBtn, PlayBtn, SeeMoreBtn } from "../videobuttons";

const getData = async () => {
  const data = await prisma.movie.findFirst({
    select: {
      title: true,
      overview: true,
      videoSource: true,
      imageString: true,
      release: true,
      duration: true,
      id: true,
      age: true,
    },
  });
  return data;
};

const MovieVideo = async () => {
  const data = await getData();

  return (
    <div className=" h-[55vh] lg:h-[60vh] w-full flex justify-start items-center ">
      <video
        poster={data?.imageString}
        autoPlay
        muted
        loop
        src={data?.videoSource}
        className="w-full -z-10 absolute brightness-[60%] top-0 left-0 h-[60vh] object-cover"
      ></video>
      <div className=" absolute w-[90%] lg:w-[40%] mx-auto">
        <h1 className=" text-white text-3xl md:text-4xl lg:text-5xl font-bold">
          {data?.title}
        </h1>
        <p className=" text-white text-[16px] mt-5 line-clamp-3">
          {data?.overview}
        </p>
        <div className=" flex gap-x-3 mt-4">
          <PlayBtn
            overview={data?.overview as string}
            age={data?.age as number}
            duration={data?.duration as number}
            id={data?.id as number}
            youtubeUrl={data?.videoSource as string}
            title={data?.title as string}
            releaseDate={data?.release as number}
            key={data?.id}
          />
          <LearnMoreBtn
            overview={data?.overview as string}
            age={data?.age as number}
            duration={data?.duration as number}
            id={data?.id as number}
            youtubeUrl={data?.videoSource as string}
            title={data?.title as string}
            releaseDate={data?.release as number}
          />
        </div>
      </div>
    </div>
  );
};

export default MovieVideo;
