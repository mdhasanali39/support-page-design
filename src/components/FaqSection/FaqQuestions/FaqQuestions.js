import React, { useEffect, useState } from "react";
import { faqTopicData } from "../../../fakeData/fakeData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleQuestion, faCaretLeft } from "@fortawesome/free-solid-svg-icons";

const FaqQuestions = ({ selectedTopicName, isExpand, setIsExpand }) => {
  const [selectedTopic, setSelectedTopic] = useState({});

  useEffect(() => {
    setSelectedTopic(
      faqTopicData.find((topic) => topic.topic_name === selectedTopicName)
    );
  }, [selectedTopicName]);

  return (
    <div className={`bg-white ${isExpand ? "w-0 opacity-0 pointer-events-none lg:opacity-100 lg:pointer-events-auto lg:w-3/4 xl:w-3/5":"w-full"} p-8 border relative mr-4`}>
      <h2 className="text-lg">{selectedTopicName}</h2>
      <ul className="space-y-3 mt-4">
        {selectedTopic &&
          selectedTopic?.topic_questions?.map((topic) => (
            <li key={topic.id}>
              <a href="/">
                <FontAwesomeIcon
                  icon={faCircleQuestion}
                  className="text-blue-400 text-sm"
                />{" "}
                {topic.question_name}
              </a>
            </li>
          ))}
      </ul>
      <div className={`absolute ${isExpand ? "-left-3": "-left-1"} -top-[6px] select-none`}>
            <FontAwesomeIcon onClick={()=>setIsExpand(!isExpand)} icon={faCaretLeft} className={`text-3xl text-blue-500 cursor-pointer ${!isExpand && "-rotate-180"}`} />
            </div>
    </div>
  );
};

export default FaqQuestions;
