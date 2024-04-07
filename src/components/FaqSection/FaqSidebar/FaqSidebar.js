import React from 'react';
import FaqTopic from '../FaqTopic/FaqTopic';
import { faqTopicData } from '../../../fakeData/fakeData';

const FaqSidebar = ({setSelectedTopicName,selectedTopicName}) => {


    return (
        <div className='px-4 w-[20%] pb-8'>
            {
                faqTopicData && faqTopicData.map(topic => (
                    <FaqTopic key={topic?.id} topicName={topic?.topic_name} selectedTopicName={selectedTopicName} setSelectedTopicName={setSelectedTopicName}/>
                ))
            }
        </div>
    );
};

export default FaqSidebar;