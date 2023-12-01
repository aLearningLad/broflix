import { Imovieplayermodal } from "@/types";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
} from "../dialog";
import { DialogTitle } from "@radix-ui/react-dialog";

const PlayVideoModal: React.FC<Imovieplayermodal> = ({
  changeState,
  overview,
  state,
  title,
  youtubeUrl,
  age,
  time,
  year,
}) => {
  return (
    <Dialog
      onOpenChange={() => changeState((prev: boolean) => !prev)}
      open={state}
    >
      <DialogContent className="sm:max-w-[425px] bg-black border-none bg-opacity-60">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription className=" line-clamp-3">
            {overview}
          </DialogDescription>
          <div className="flex gap-x-2 items-center">
            <p className="">{year}</p>
            <p className=" text-[12px] bg-white text-neutral-700 px-1 rounded-[4px]">
              {age}+
            </p>
            <p className=" font-bold">{time}h</p>
          </div>
        </DialogHeader>
        <iframe src={youtubeUrl} height={250} className=" w-full"></iframe>
      </DialogContent>
    </Dialog>
  );
};

export default PlayVideoModal;
