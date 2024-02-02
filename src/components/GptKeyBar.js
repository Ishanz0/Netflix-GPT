import React, { useRef } from "react";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import { addGptKey } from "../utils/gptSlice";

const GptKeyBar = () => {
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config.lang);
  const keyText = useRef(null);

  const handleGptEnterClick = async () => {
    if (keyText.current.value === "") return;
    dispatch(addGptKey(keyText.current.value));
  };

  return (
    <div className="pt-[10%] flex justify-center">
      <form
        className=" w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={keyText}
          type="text"
          className=" p-4 m-4 col-span-9"
          placeholder={lang[langKey].gptKeyPlaceholder}
        />
        <button
          className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg"
          onClick={handleGptEnterClick}
        >
          {lang[langKey].enter}
        </button>
      </form>
    </div>
  );
};

export default GptKeyBar;
