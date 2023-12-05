interface rffFace {
  repo: string | number;
  follower: string | number;
  following: string | number;
}

const Rff = ({ repo, follower, following }: rffFace) => {
  return (
    <table
      className={`w-full rounded-2xl text-white bg-blue-950 text-sm p-4 sm:table-fixed`}
    >
      <thead>
        <tr className="table-row text-left">
          <th className="table-cell px-4 pt-4">Following</th>
          <th className="table-cell px-4 pt-4">Repo</th>
          <th className="table-cell px-4 pt-4">Followers</th>
        </tr>
      </thead>
      <tbody>
        <tr className="table-row font-thin">
          <td className="table-cell px-4 pb-4">{following}</td>
          <td className="table-cell px-4 pb-4">{repo}</td>
          <td className="table-cell px-4 pb-4">{follower}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Rff;
