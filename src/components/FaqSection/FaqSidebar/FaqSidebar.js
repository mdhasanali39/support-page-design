import FaqTopic from '../FaqTopic/FaqTopic';
import { faqTopicData } from '../../../fakeData/fakeData';

const FaqSidebar = ({isExpand, setIsExpand, setSelectedTopicName,selectedTopicName, isWindowLesserLg}) => {


    return (
        <div className={`px-4 ${isExpand ? "w-full lg:w-[25%] ":"w-0 pl-0 pointer-events-none opacity-0"} pb-8`}>
            {
                faqTopicData && faqTopicData.map(topic => (
                    <FaqTopic key={topic?.id} topicName={topic?.topic_name} topicId={topic?.id} selectedTopicName={selectedTopicName} setSelectedTopicName={setSelectedTopicName} setIsExpand={setIsExpand} isWindowLesserLg={isWindowLesserLg}/>
                ))
            }
        </div>
    );
};

export default FaqSidebar;