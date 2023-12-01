import { authOptions } from "@/app/utils/auth";
import { GithubSigninButton, GoogleSigninButton } from "@/components/ui";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { redirect } from "next/navigation";

const LoginPage = async () => {
  const session = await getServerSession(authOptions);

  if (session) {
    return redirect("/home");
  }

  return (
    <div className=" mt-24 rounded-lg bg-black/60 py-10 px-6 md:mt-0 md:max-w-sm md:px-14">
      <form method="post" action="/api/auth/signin">
        <h1 className=" text-3xl font-semibold">Welcome back!</h1>
        <div className=" space-y-4 mt-5">
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="bg-neutral-700/70 rounded-lg placeholder:text-sm text-lg py-3 px-2 w-full inline-block"
          />
          <button
            type="submit"
            className=" w-full bg-[#e50914] text-white py-3 rounded-lg hover:scale-90 transition duration-500 ease-in-out hover:bg-cyan-300 hover:text-black"
          >
            Log In
          </button>
        </div>
      </form>
      <div className=" w-full flex gap-2 items-center mt-3">
        <p className=" text-xs text-neutral-300">First time here?</p>
        <Link
          className="border-b-2 border-transparent hover:border-neutral-300 transition duration-500 ease-in-out"
          href="/sign-up"
        >
          Sign Up
        </Link>
      </div>
      <div className="flex w-full justify-center items-center gap-x-3 mt-6">
        <GithubSigninButton />
        <GoogleSigninButton />
      </div>
    </div>
  );
};

export default LoginPage;
