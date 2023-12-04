"use client";
import { ChangeEvent, FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { FiSearch } from "react-icons/fi";

const Searchbox = () => {
  const [inputVal, setInputVal] = useState("");
  const navigation = useRouter();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isValidInput = inputVal.trim();
    isValidInput.length > 0 && navigation.push(`@${isValidInput}`);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputVal(e.target.value);
  };

  return (
    <div className="w-full">
      <form
        onSubmit={(e: FormEvent<HTMLFormElement>) => handleSubmit(e)}
        className={`rounded-2xl flex items-center relative overflow-hidden text-black/70 dark:text-white/70 dark-text-white`}
      >
        <label
          htmlFor="search"
          className={`flex items-center absolute h-full w-fit px-3 ${
            inputVal.trim() && "hidden"
          }`}
        >
          <FiSearch className="icon" fill="blue" />
          <span className={`ml-2 text-sm opacity-70`}>
            Search Github username...
          </span>
        </label>
        <input
          type="search"
          name="search"
          id="search"
          value={inputVal}
          onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)}
          className={`pr-24 p-3 rounded-2xl w-full focus:outline-blue-500 outline-offset-0 bg-white dark:bg-navy-700`}
          required
        />
        <div className="absolute right-0 h-full p-1">
          <button
            type="submit"
            title="search"
            className={`p-2 px-3 bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300 h-full rounded-xl`}
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default Searchbox;
