import React, { useEffect, useState } from 'react';
import { faqTopicData } from '../../../fakeData/fakeData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleQuestion } from "@fortawesome/free-solid-svg-icons";

const FaqQuestions = ({selectedTopicName}) => {
    const [selectedTopic,setSelectedTopic] = useState({})

    useEffect(()=>{
    setSelectedTopic(faqTopicData.find(topic => topic.topic_name === selectedTopicName))

    },[selectedTopicName])
    

    return (
        <div className='bg-white w-3/5 p-4 border'>
            <h2 className='text-lg'>{selectedTopicName}</h2>
            <ul className='space-y-3 mt-4'>
                {
                    selectedTopic && selectedTopic?.topic_questions?.map(topic => <li key={topic.id}>
                    <a href='example.com'><FontAwesomeIcon icon={faCircleQuestion} className='text-blue-400 text-sm' /> {topic.question_name}</a>
                </li>)
                }
            </ul>
        </div>
    );
};

export default FaqQuestions;