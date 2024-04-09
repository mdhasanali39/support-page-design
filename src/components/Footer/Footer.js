import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedinIn,
  faTwitter,
  faFacebookF,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import HelpDeskSection from "./HelpDeskSection/HelpDeskSection";

const Footer = () => {
  return (
    <div className="bg-[#e2ebf7]">
      <div className="py-20 max-w-[1300px] mx-auto">
        {/* footer navigation menus  */}
        <ul className="flex gap-5 flex-col sm:flex-row justify-center items-center">
          <li>
            <a href="/">Home Page</a>
          </li>
          <li>
            <a href="/">Help Center</a>
          </li>
          <li>
            <a href="/">Video Tutorials</a>
          </li>
          <li>
            <a href="/">Blog</a>
          </li>
        </ul>
        {/* social links */}
        <ul className="flex gap-5 justify-center items-center text-white mt-8">
          <li className="bg-black p-2 rounded-full w-8 h-8 flex items-center justify-center">
            <a href="/">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
          </li>
          <li className="bg-black p-2 rounded-full w-8 h-8 flex items-center justify-center">
            <a href="/">
              <FontAwesomeIcon icon={faYoutube} />
            </a>
          </li>
          <li className="bg-black p-2 rounded-full w-8 h-8 flex items-center justify-center">
            <a href="/">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
          </li>
          <li className="bg-black p-2 rounded-full w-8 h-8 flex items-center justify-center">
            <a href="/">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </li>
        </ul>
        {/* some important sections - report abuse, how to connect our support, account docs */}
        <div>
          <HelpDeskSection />
        </div>
      </div>
    </div>
  );
};

export default Footer;
