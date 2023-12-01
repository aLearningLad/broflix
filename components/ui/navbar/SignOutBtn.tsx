"use client";

import { DropdownMenuItem } from "../dropdown-menu";
import { signOut } from "next-auth/react";

const SignOutBtn = () => {
  return (
    <DropdownMenuItem
      onClick={() => signOut()}
      className="text-white text-sm font-semibold hover:text-neutral-300 transition duration-500 ease-in-out"
    >
      Sign Out
    </DropdownMenuItem>
  );
};

export default SignOutBtn;
