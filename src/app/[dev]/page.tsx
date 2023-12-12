import { Metadata } from "next/types";
import { Suspense } from "react";

import DevHistoryContainer from "@/components/dev/history/DevHistoryContainer";
import DevProfileSSR from "@/components/dev/DevProfileSSR";
import Loading from "./loading";
import Error from "./error";

interface PageProps {
  params: {
    dev: string;
  };
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const encodedValue = decodeURIComponent(params.dev);

  if (encodedValue.startsWith("@")) {
    const devId = encodedValue.slice(1);
    const Api = `https://api.github.com/users/${devId}`;
    const req = await fetch(Api);
    const res = await req.json();

    const desc =
      "DevFinder is a platform that allows you to discover talented developers from various domains. Explore profiles, check out projects, and connect with developers to build amazing things together.";

    return {
      title:
        req.status === 200
          ? `${res.name || "N/A"} - (${res.login}) || devFinder`
          : "Error || devFinder",
      description: res.bio || desc,
    };
  }
  return {
    title: `Error || devFinder`,
    description: `Oops! It seems like the page you're looking for doesn't exist.`,
  };
}

const Page = async ({ params }: PageProps) => {
  const encodedValue = decodeURIComponent(params.dev);

  if (encodedValue.startsWith("@")) {
    const devId = encodedValue.slice(1);
    const Api = `https://api.github.com/users/${devId}`;

    const request = await fetch(Api);
    const response = await request.json();

    return (
      <>
        <DevProfileSSR
          devId={encodedValue}
          data={response}
          status={request.status}
        />
        <Suspense fallback={<Loading />}>
          <DevHistoryContainer isSolo={false} />
        </Suspense>
        <div className="h-32"></div>
      </>
    );
  } else {
    return <Error />;
  }
};

export default Page;
