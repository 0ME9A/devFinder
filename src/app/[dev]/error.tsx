"use client";
import { useRouter } from "next/navigation";

export default function Error() {
  const router = useRouter();

  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center">
      <section className="w-full text-center py-4 p-2">
        <p className="font-bold text-xl p-2">Error 404</p>
        <p className="font-thin">
          Oops! It seems like the page you&apos;re looking for doesn&apos;t
          exist.
        </p>
      </section>{" "}
      <button
        type="button"
        className="hover:underline p-1 px-5"
        onClick={() => router.back()}
      >
        Go Back
      </button>
    </section>
  );
}
