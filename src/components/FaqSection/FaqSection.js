import React, { useEffect, useState } from "react";
import FaqSidebar from "./FaqSidebar/FaqSidebar";
import FaqQuestions from "./FaqQuestions/FaqQuestions";
import FaqSearch from "./FaqSearch/FaqSearch";

const FaqSection = () => {

    const [selectedTopicName,setSelectedTopicName] = useState("Domains")
    const [isExpand, setIsExpand] = useState(true)
    const [isWindowLesserLg, setIsWindowLesserLg] = useState(null)
    // console.log(selectedTopic)


    useEffect(()=>{ 
      const checkWindowSize = () =>{
        if(window.innerWidth >= 1024){
          setIsExpand(true)
          setIsWindowLesserLg(false)
        }else{
          setIsWindowLesserLg(true)
          setIsExpand(false)
        }
      }
      // initial call 
      checkWindowSize()

      window.addEventListener("resize", checkWindowSize)

      return ()=>{
        window.removeEventListener("resize", checkWindowSize)
      }

    },[])

  return (
    <div className="bg-blue-50 pb-14">
      <div className="max-w-[1300px] mx-auto">
        {/* search by question */}
        <FaqSearch/>

        {/* faq sidebar and faq questions  */}
        <div className="flex lg:gap-9 xl:gap-5">
          <FaqSidebar isExpand={isExpand} setIsExpand={setIsExpand} setSelectedTopicName={setSelectedTopicName} selectedTopicName={selectedTopicName} isWindowLesserLg={isWindowLesserLg} />
          <FaqQuestions selectedTopicName={selectedTopicName} isExpand={isExpand} setIsExpand={setIsExpand} />
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
