import React from "react";
import { useSelector } from "react-redux";
import { lang } from "../utils/constants/lang";

const GptSearchBar = () => {
  const language = useSelector((store) => store.config.lang);
  return (
    <div className="pt-[10%] flex justify-center">
      <form className="bg-black w-1/2 grid grid-cols-12">
        <input
          type="text"
          className="p-4 m-4 text-gray-600 border-2 bg-white col-span-9 text-2xl"
          placeholder={lang[language]["gptSearchPlaceHolder"]}
        />
        <button className="py-2 px-4 m-4 bg-red-700 text-white rounded-lg col-span-3 text-2xl">
          {lang[language]["search"]}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
