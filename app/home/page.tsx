import { MovieVideo } from "@/components/ui/movievideo";
import { Navbar } from "@/components/ui/navbar";
import { RecentlyAdded } from "@/components/ui/recentlyadded";

const HomePage = () => {
  return (
    <div className=" p-5 lg:p-0">
      <MovieVideo />
      <h1 className=" text-3xl font-bold">New Releases</h1>
      <RecentlyAdded />
    </div>
  );
};

export default HomePage;
