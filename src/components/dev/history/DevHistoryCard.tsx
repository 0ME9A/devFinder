"use client";
import { basicDevFace } from "@/types/devFace";

import Image from "@/components/extend/Image";
import Link from "@/components/extend/Link";
import DevInfo from "../DevInfo";

interface devHistoryCardFace {
  dev: basicDevFace;
  className?: string;
}
function DevHistoryCard({ dev, className }: devHistoryCardFace) {
  if (!dev) {
    return <></>;
  }

  return (
    <div
      className={`border-2 p-2 flex flex-col bg-navy-50 dark:bg-navy-800 border-transparent hover:border-white dark:hover:border-black shadow-lg rounded-xl relative ${className}`}
    >
      <Image
        src={`https://github.com/${dev.login}.png`}
        width={60}
        height={60}
        quality={100}
        alt={`${dev.login} profile`}
        className="bg-white dark:bg-navy-700 rounded-full"
      />

      {/* <div className="absolute right-2 top-2 border flex gap-1 items-center">
        <div className="p-1 border">
          <IoBookmarkOutline className={`text-2xl`} />
        </div>
        <div className="relative flex">
          <input
            type="checkbox"
            title={`select ${dev.login}`}
            id="select-dev"
            className="absolute w-5 top-0 z-0 cursor-pointer opacity-0"
          />
          <label
            htmlFor="select-dev"
            className="z-10 cursor-pointer p-1 border"
          >
            {0 ? (
              <MdCheckBoxOutlineBlank className="text-2xl" />
            ) : (
              <MdCheckBox className={"text-2xl"} />
            )}
          </label>
        </div>
      </div> */}

      <div className="scale-90 origin-left">
        <DevInfo dev={dev} basic={true} />
      </div>
      <div className="h-full"></div>
      <Link
        href={`/@${dev.login}`}
        className={
          " text-center p-2 text-sm block w-fit mt-2 rounded-lg px-5 bg-white dark:bg-black hover:ring-1"
        }
      >
        {"View"}
      </Link>
    </div>
  );
}

export default DevHistoryCard;
