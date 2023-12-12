import { basicDevFace } from "@/types/devFace";
import { ToDateStr } from "@/utils/basic";

interface devInfoFace {
  dev: basicDevFace;
  basic?: boolean;
}

const DevInfo = ({ dev, basic }: devInfoFace) => {
  const { name, bio, login, created_at } = dev;

  return (
    <>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between">
        <h1 className={` text-lg font-bold`}>
          {name && name.length > 0 ? name : "N/A"}
        </h1>
        {!basic && (
          <span className="text-xs text-gray-500 font-light">
            {ToDateStr(created_at)}
          </span>
        )}
      </div>
      <span className="text-sm text-blue-500">{login}</span>
      <p className={`font-light text-sm ${basic && "line-clamp-3"}`}>{bio}</p>
    </>
  );
};

export default DevInfo;
