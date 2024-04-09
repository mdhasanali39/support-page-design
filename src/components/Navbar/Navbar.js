import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faQuestion,
  faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";
import LanguageSection from "./LanguageSection/LanguageSection";

const Navbar = () => {


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
            {/* Language Section */}
            <LanguageSection/>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
