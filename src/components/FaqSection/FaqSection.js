import React, { useState } from "react";
import FaqSidebar from "./FaqSidebar/FaqSidebar";
import FaqQuestions from "./FaqQuestions/FaqQuestions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const FaqSection = () => {

    const [selectedTopicName,setSelectedTopicName] = useState("Domains")
    // console.log(selectedTopic)

  return (
    <div className="bg-blue-50">
      <div className="max-w-[1300px] mx-auto">
        {/* search by question */}
        <div className="py-10">
          <form>
            <div className="">
              <label htmlFor="search_by_question" className="text-xl mb-1">Enter your question</label>
              <div className="flex items-center bg-white pl-4 w-3/5">
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  className="text-[#B6A3AF]"
                />
                <input
                  type="search"
                  id="search_by_question"
                  className="py-3 pl-2 pr-4 w-full outline-none"
                  placeholder="How do I connect custom domain?"
                />
              </div>
            </div>
          </form>
        </div>
        {/* faq sidebar and faq questions  */}
        <div className="flex gap-4">
          <FaqSidebar setSelectedTopicName={setSelectedTopicName} selectedTopicName={selectedTopicName} />
          <FaqQuestions selectedTopicName={selectedTopicName} />
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
