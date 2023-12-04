interface notFoundGithubUserIdFace {
  userId?: string;
  message?: string;
  title?: string;
}

export const NotFoundGithubUserId = ({
  userId,
  message,
  title,
}: notFoundGithubUserIdFace) => {
  const errorMsg = (
    <>
      Dev: <strong className="text-red-500">"{userId || "N/A"}"</strong> not
      found!!!
    </>
  );

  return (
    <>
      <section className="w-full text-center py-4 p-2">
        <p className={`font-bold text-xl p-2`}>{title || "Error 404"}</p>
        <p className={`font-thin`}>{message ? message : errorMsg}</p>
      </section>
    </>
  );
};
