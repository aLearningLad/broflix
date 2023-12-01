"use client";

import { signIn } from "next-auth/react";
import { FaGithub } from "react-icons/fa";

const GithubSigninButton = () => {
  return (
    <button
      onClick={() => signIn("github")}
      className=" w-fit p-3 rounded-lg bg-white/30 hover:bg-white/10 transition duration-500 ease-in-out"
    >
      <FaGithub size={28} />
    </button>
  );
};

export default GithubSigninButton;
