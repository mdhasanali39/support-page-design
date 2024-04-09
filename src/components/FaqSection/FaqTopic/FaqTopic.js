import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWpforms,faSearchengin, } from "@fortawesome/free-brands-svg-icons";
import {
  faGlobe,
  faGear,
  faPenToSquare,
  faMoneyCheckDollar,
  faCartFlatbedSuitcase,
  faBars,faChartSimple, faFont, faWindowRestore, faCircleQuestion, faClipboardQuestion, faTableColumns, faEnvelopeOpenText, faCubesStacked, faCode, faCircleXmark,faTriangleExclamation
} from "@fortawesome/free-solid-svg-icons";

const arr = [
  faGlobe,
  faGear,
  faPenToSquare,
  faMoneyCheckDollar,
  faWpforms,
  faCartFlatbedSuitcase,
  faBars,faChartSimple, faFont, faSearchengin, faWindowRestore, faCircleQuestion, faClipboardQuestion, faTableColumns, faEnvelopeOpenText, faTriangleExclamation, faCubesStacked, faCode, faCircleXmark
];

const FaqTopic = ({
  topicName,
  topicId,
  selectedTopicName,
  setSelectedTopicName,
  setIsExpand, isWindowLesserLg
}) => {
  const handleSelectTopic = () => {
    if (topicName) {
      setSelectedTopicName(topicName);
      if(isWindowLesserLg){
        setIsExpand(false)
      }
    }
  };
  return (
    <div>
      <h2
        onClick={handleSelectTopic}
        className={`w-min p-2 text-lg font-light cursor-pointer hover:bg-blue-100 hover:font-normal transition duration-200 whitespace-nowrap ${
          selectedTopicName &&
          selectedTopicName === topicName &&
          "bg-blue-100 font-normal"
        }`}
      >
        <FontAwesomeIcon icon={arr[topicId - 1]} className="text-blue-500 mr-3" /> {topicName}
      </h2>
    </div>
  );
};

export default FaqTopic;
