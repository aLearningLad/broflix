import { ReactNode } from "react";
import Image from "next/image";
import { Logo } from "@/components/logo";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="relative flex h-screen w-screen flex-col bg-gradient-to-br from-black to bg-pink-900 md:items-center md:justify-center md:bg-transparent">
      <Image
        src="/assets/authbg.jpg"
        alt="StunningBgImg"
        className="hidden sm:flex sm:object-cover -z-10"
        fill
        priority
      />
      <Logo />
      {children}
    </div>
  );
};

export default AuthLayout;
