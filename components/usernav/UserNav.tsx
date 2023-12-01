import { getServerSession } from "next-auth";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { SignOutBtn } from "../ui/navbar";
import { authOptions } from "@/app/utils/auth";

const UserNav = async () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className=" relative h-10 w-10 rounded-sm">
          <Avatar className=" h-10 w-10 rounded-sm text-white">
            <AvatarImage src="https://uvrfmtokfngbloyvmmfl.supabase.co/storage/v1/object/public/user%20image/avatar.png" />
            <AvatarFallback className=" rounded-sm">Thato</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-56 rounded-[8px] bg-neutral-700 bg-opacity-60 border-2 border-yellow-300"
        align="end"
        forceMount
      >
        <DropdownMenuLabel>
          <div className="flex flex-col space-y-1 text-white">
            <p className=" text-xs font-medium leading-none">Thato</p>
            <p className=" text-xs leading-none text-neutral-400">
              thatodev@gmail.com
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <SignOutBtn />
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserNav;
