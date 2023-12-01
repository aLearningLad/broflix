"use client";

import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";

const GoogleSigninButton = () => {
  return (
    <button
      onClick={() => signIn("google")}
      className="w-fit p-3 rounded-lg bg-white/30 hover:bg-white/10 transition duration-500 ease-in-out"
    >
      <FcGoogle size={28} />
    </button>
  );
};

export default GoogleSigninButton;
