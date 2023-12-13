"use client";
import { NotFound } from "../errors/NotFound";
import { devFace } from "@/types/devFace";
import { useEffect } from "react";

import setDevToLocalstorage from "@/utils/setDevToLocalstorage";
import isValidGitHubUserId from "@/utils/isValidGitHubUserId";
import Searchbox from "../Searchbox";
import GitLinks from "./GitLinks";
import DevInfo from "./DevInfo";
import Menu from "../menu/Menu";
import Image from "next/image";
import Rff from "./rff";

function DevProfileSSR({
  devId,
  data,
  status,
}: {
  devId?: string;
  data: devFace;
  status: number;
}) {
  const isValidateUserId: boolean = devId
    ? isValidGitHubUserId(devId.slice(1))
    : true;

  let returnError = <></>;

  if (status !== 200 || !isValidateUserId) {
    returnError = <NotFound userId={devId || "N/A"} />;
  }

  if (status === 403) {
    returnError = (
      <NotFound
        message={"devFinder rate limit exceeded. Please try after some time."}
        title="Error 403"
      />
    );
  }

  useEffect(() => {
    if (status === 200) setDevToLocalstorage(data);
  }, [status, data]); // Empty dependency array ensures it runs only once after initial render

  return (
    <>
      <div className="flex items-center justify-center min-h-[50vh] lg:min-h-screen">
        <div className="max-w-2xl w-full p-2 mx-auto space-y-4">
          <Menu />
          <Searchbox />

          <div
            className={`flex flex-col sm:flex-row rounded-2xl  sm:gap-4 bg-white dark:bg-navy-700 p-4 sm:p-8`}
          >
            {returnError}
            {data && status == 200 && (
              <>
                <Image
                  src={data?.avatar_url}
                  alt="profile imag"
                  width={100}
                  height={100}
                  quality={100}
                  className="aspect-square h-fit rounded-full"
                  priority={true}
                />
                <div className="w-full pt-4 space-y-4">
                  <DevInfo dev={data} />
                  <Rff
                    repo={data.public_repos}
                    follower={data.followers}
                    following={data.following}
                  />
                  <GitLinks dev={data} />
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default DevProfileSSR;
