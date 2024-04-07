import React, { useState } from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faQuestion, faArrowUpRightFromSquare} from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {

  const [selectedLanguage, setSelectedLanguage] = useState("EN")
  console.log(selectedLanguage);

  return (
    <nav className=" bg-white">
      <div className="max-w-[1300px] mx-auto flex justify-between items-center py-5">
      <div>
        <a href="example.com"><FontAwesomeIcon icon={faQuestion} /> Frequently asked questions</a>
      </div>

      <ul className="flex items-center gap-3">
        <li>
          <a href="example.com">Go to website <FontAwesomeIcon className="text-blue-500 text-sm" icon={faArrowUpRightFromSquare} /></a>
        </li>
        <li>
          <a href="example.com">Go to Help Center <FontAwesomeIcon className="text-blue-500 text-sm" icon={faArrowUpRightFromSquare} /></a>
        </li>
        <li>
          <select name="language" onChange={(e)=>setSelectedLanguage(e.target.value.toUpperCase())} className="border py-1 px-2 outline-none">
            <option value="en">{selectedLanguage ? "English" : selectedLanguage}</option>
            <option value="de">Deutch</option>
            <option value="fr">French</option>
            <option value="it">Italian</option>
            <option value="ja">Japanese</option>
            <option value="pl">Polish</option>
            <option value="pt">Portuguese</option>
            <option value="es">Spanish</option>
          </select>
        </li>
      </ul>
      </div>
    </nav>
  );
};

export default Navbar;
