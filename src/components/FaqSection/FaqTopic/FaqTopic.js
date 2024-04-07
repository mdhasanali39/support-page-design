import React from "react";

const FaqTopic = ({ topicName, selectedTopicName, setSelectedTopicName }) => {

  const handleSelectTopic = () => {
    if (topicName) {
      setSelectedTopicName(topicName);
    }
  };
  return (
    <div>
      <h2
        onClick={handleSelectTopic}
        className={`p-2 text-lg font-light cursor-pointer hover:bg-blue-100 hover:font-normal transition duration-200 whitespace-nowrap ${selectedTopicName && selectedTopicName === topicName && "bg-blue-100 font-normal"}`}
      >
        {topicName}
      </h2>
    </div>
  );
};

export default FaqTopic;
