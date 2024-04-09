import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faQuestion,
  faArrowUpRightFromSquare,
  faCaretDown,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
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
    <nav className=" bg-white">
      <div className="max-w-[1300px] mx-auto flex justify-between items-center py-5 px-4">
        <div>
          <a href="/">
            <FontAwesomeIcon icon={faQuestion} /> Frequently asked questions
          </a>
        </div>

        <ul className="flex items-center gap-5">
          <li className="hidden md:block">
            <a href="/">
              Go to home{" "}
              <FontAwesomeIcon
                className="text-blue-500 text-sm"
                icon={faArrowUpRightFromSquare}
              />
            </a>
          </li>
          <li className="hidden md:block">
            <a href="/">
              Go to Help Center{" "}
              <FontAwesomeIcon
                className="text-blue-500 text-sm"
                icon={faArrowUpRightFromSquare}
              />
            </a>
          </li>
          <li>
            <div className="relative">
              <span
                onClick={() => setIsDropDown(!isDropDown)}
                className="border px-5 py-1 text-lg flex items-center"
              >
                <FontAwesomeIcon
                  icon={faGlobe}
                  className="mr-1 text-sm self-center"
                />{" "}
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
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
