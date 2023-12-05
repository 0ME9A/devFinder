"use client";
import { NotFoundGithubUserId } from "../errors/NotFoundGithubUserId";
import { useGetUserIfValidQuery } from "@/RTK/RTKQuery/devQuery";

import isValidGitHubUserId from "@/utils/isValidGitHubUserId";
import Loading from "../loaders/Loading";
import Searchbox from "../Searchbox";
import GitLinks from "./GitLinks";
import Menu from "../menu/Menu";
import DevInfo from "./DevInfo";
import Image from "next/image";
import Rff from "./rff";

function DevProfile({ devId }: { devId?: string }) {
  const {
    data: user,
    isFetching,
    isSuccess,
    isError,
  } = useGetUserIfValidQuery(devId ? devId.slice(1) : "0me9a");

  const isValidateUserId: boolean = devId
    ? isValidGitHubUserId(devId.slice(1))
    : true;

  console.log(isValidateUserId);

  let returnError = <></>;
  if (!isValidateUserId || isError) {
    returnError = <NotFoundGithubUserId userId={devId || "N/A"} />;
  }

  return (
    <>
      <div className="flex items-center justify-center min-h-screen">
        <div className="max-w-2xl w-full p-2 mx-auto space-y-4">
          <Menu />
          <Searchbox />

          <div
            className={`flex flex-col sm:flex-row rounded-2xl  sm:gap-4 bg-white dark:bg-navy-700 p-4 sm:p-8`}
          >
            {isFetching && <Loading />}
            {returnError}
            {isSuccess && isValidateUserId && (
              <>
                <Image
                  src={user?.avatar_url}
                  alt="profile imag"
                  width={100}
                  height={100}
                  quality={100}
                  className="aspect-square h-fit rounded-full"
                  priority={true}
                />
                <div className="w-full pt-4 space-y-4">
                  <DevInfo dev={user} />
                  <Rff
                    repo={user.public_repos}
                    follower={user.followers}
                    following={user.following}
                  />
                  <GitLinks dev={user} />
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default DevProfile;
