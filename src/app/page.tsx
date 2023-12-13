import { Suspense } from "react";
import DevHistoryContainer from "@/components/dev/history/DevHistoryContainer";
import BasicLoading from "@/components/loaders/Loading";
import DevProfile from "@/components/dev/DevProfile";

function page() {
  return (
    <div className="flex flex-col justify-center min-h-screen">
      <DevProfile />
      <Suspense fallback={<BasicLoading />}>
        <DevHistoryContainer />
      </Suspense>
    </div>
  );
}

export default page;
