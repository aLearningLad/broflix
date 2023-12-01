import { authOptions } from "@/app/utils/auth";
import prisma from "@/app/utils/db";
import { MovieCard } from "@/components/ui/moviecard";
import { getServerSession } from "next-auth";
import Image from "next/image";

const getData = async (userId: string) => {
  const data = await prisma.watchList.findMany({
    where: {
      userId: userId,
    },
    select: {
      Movie: {
        select: {
          title: true,
          age: true,
          duration: true,
          imageString: true,
          overview: true,
          release: true,
          id: true,
          WatchLists: true,
          youtubeString: true,
        },
      },
    },
  });
  return data;
};

const BroListPage = async () => {
  const session = await getServerSession(authOptions);
  const data = await getData(session?.user?.email as string);

  return (
    <>
      <h1 className=" text-white text-4xl font-bold mt-10 px-5 sm:px-0">
        {"Bro's"} List
      </h1>
      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-5 sm:px-0 mt-10 gap-6">
        {data.map((movie) => (
          <div key={movie.Movie?.id} className=" relative h-60">
            <Image
              src={movie.Movie?.imageString as string}
              alt="movieImg"
              width={500}
              height={400}
              className=" rounded-[10px] object-cover absolute w-full h-full"
            />
            <div className="h-60 relative z-10 w-full transform transition duration-500 hover:scale-125 opacity-0 hover:opacity-100">
              <div className="flex items-center justify-center bg-gradient-to-b from-transparent via-black/50 to-black z-10 w-full h-full">
                <Image
                  src={movie.Movie?.imageString as string}
                  alt="movie"
                  width={800}
                  height={800}
                  className=" absolute w-full h-full -z-10 rounded-[12px] object-cover"
                />
                <MovieCard
                  age={movie.Movie?.age as number}
                  movieId={movie.Movie?.id as number}
                  overview={movie.Movie?.overview as string}
                  time={movie.Movie?.duration as number}
                  title={movie.Movie?.title as string}
                  watchList={
                    (movie.Movie?.WatchLists.length as number) > 0
                      ? true
                      : false
                  }
                  watchListId={movie?.Movie?.WatchLists[0]?.id as string}
                  year={movie.Movie?.release as number}
                  youtubeUrl={movie.Movie?.youtubeString as string}
                  key={movie.Movie?.id}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default BroListPage;
