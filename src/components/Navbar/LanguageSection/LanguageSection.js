import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretDown,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";

const LanguageSection = () => {

      const [isDropDown, setIsDropDown] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  // console.log(selectedLanguage);

  const handleLanguageSelect = (language) =>{
    setSelectedLanguage(language)
    setIsDropDown(false)
  }

  // common class for language section
  const commonClasses =
    "cursor-pointer hover:bg-blue-100 px-2 py-1 transition duration-200";

    return (
        <div className="relative">
              <span
                onClick={() => setIsDropDown(!isDropDown)}
                className="border px-5 py-1 flex items-center"
              >
                <FontAwesomeIcon
                  icon={faGlobe}
                  className="mr-1 text-sm self-center text-blue-400"
                />{" "}
                {/* selected Language placed here */}
                {selectedLanguage?.slice(0, 2).toUpperCase()}{" "}
                <FontAwesomeIcon icon={faCaretDown} className="ml-1 text-xl " />
              </span>
              <div
                className={`flex flex-col gap-2 absolute z-[300] top-10 left-1/2 -translate-x-1/2 p-4 bg-blue-200 ${
                  isDropDown
                    ? "opacity-100 pointer-events-auto"
                    : "opacity-0 pointer-events-none"
                } overflow-hidden transition duration-200 border shadow-md`}
              >
                <span
                  onClick={(e)=>handleLanguageSelect(e.target.textContent)}
                  className="cursor-pointer hover:bg-blue-100 px-2 transition duration-200"
                >
                  English
                </span>
                <span
                  onClick={(e)=>handleLanguageSelect(e.target.textContent)}
                  className="cursor-pointer hover:bg-blue-100 px-2 transition duration-200"
                >
                  Deutch
                </span>
                <span
                  onClick={(e)=>handleLanguageSelect(e.target.textContent)}
                  className={commonClasses}
                >
                  French
                </span>
                <span
                  onClick={(e)=>handleLanguageSelect(e.target.textContent)}
                  className={commonClasses}
                >
                  Italian
                </span>
                <span
                  onClick={(e)=>handleLanguageSelect(e.target.textContent)}
                  className={commonClasses}
                >
                  Japanese
                </span>
                <span
                  onClick={(e)=>handleLanguageSelect(e.target.textContent)}
                  className={commonClasses}
                >
                  Polish
                </span>
                <span
                  onClick={(e)=>handleLanguageSelect(e.target.textContent)}
                  className={commonClasses}
                >
                  Portuguese
                </span>
                <span
                  onClick={(e)=>handleLanguageSelect(e.target.textContent)}
                  className={commonClasses}
                >
                  Spanish
                </span>
              </div>
            </div>
    );
};

export default LanguageSection;