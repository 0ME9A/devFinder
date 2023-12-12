"use client";
import { NotFound } from "@/components/errors/NotFound";
import { IoIosArrowBack } from "react-icons/io";
import { basicDevFace } from "@/types/devFace";
import { MdZoomOutMap } from "react-icons/md";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "@/RTK/store";

import Button from "@/components/extend/Button";
import DevHistoryCard from "./DevHistoryCard";
import React from "react";

interface DevHistoryContainerFace {
  isSolo?: boolean;
}

function DevHistoryContainer({ isSolo }: DevHistoryContainerFace) {
  const history = useSelector((state: RootState) => state.devsHistory.history);
  const route = useRouter();

  return (
    <section className=" container p-2 duration-300">
      <div className=" rounded-2xl bg-white dark:bg-navy-700">
        <header className="p-2 px-3 rounded-t-xl flex items-center justify-between">
          <div className="flex items-center gap-1">
            {isSolo && (
              <Button
                className="p-2 rounded-full group hover:bg-navy-50 hover:dark:bg-navy-800"
                onClick={() => route.back()}
              >
                <IoIosArrowBack className={"text-xl"} />
              </Button>
            )}
            <h2 className="text-lg font-bold">History</h2>
          </div>
          {!isSolo && (
            <Button
              className="p-2 rounded-full group hover:bg-navy-50 hover:dark:bg-navy-800"
              onClick={() => route.push("/history")}
            >
              <MdZoomOutMap className={"text-xl"} />
            </Button>
          )}
        </header>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2 p-2">
          {history.length === 0 && (
            <div className="w-full justify-center col-span-full flex items-center">
              <NotFound title="No Record Found..." message=" " />
            </div>
          )}
          {!isSolo &&
            history
              .slice(0, 12)
              .map((item: basicDevFace) => (
                <DevHistoryCard key={item.id} dev={item} />
              ))}
          {isSolo &&
            history.map((item: basicDevFace) => (
              <DevHistoryCard key={item.id} dev={item} />
            ))}
        </div>
      </div>
    </section>
  );
}

export default DevHistoryContainer;
