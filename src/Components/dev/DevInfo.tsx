import { devFace } from "../../types/devFace";
import { ToDateStr } from "../../utils/basic";

interface devInfoFace {
  dev: devFace;
}

const DevInfo = ({ dev }: devInfoFace) => {
  const { name, bio, login, created_at } = dev;

  return (
    <>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between">
        <h1 className={` text-lg font-bold`}>
          {name && name.length > 0 ? name : "N/A"}
        </h1>
        <span className="text-xs text-gray-500 font-light">
          {ToDateStr(created_at)}
        </span>
      </div>
      <span className="text-sm text-blue-500">{login}</span>
      <p className={`font-light text-sm `}>{bio}</p>
    </>
  );
};

export default DevInfo;
