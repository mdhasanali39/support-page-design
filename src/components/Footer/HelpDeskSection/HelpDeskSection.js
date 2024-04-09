import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";


const HelpDeskSection = () =>{
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 px-10 lg:px-16'>
        {/* Report Abuse */}
            <div>
                <h2>Report abuse</h2>
                <p className="text-[#9b6988]">To report any content violating our guidelines, simply click "Report" or <a href='mailto:reportabuse@example.com' className='text-blue-500 underline'><FontAwesomeIcon icon={faEnvelope} />  reportabuse@example.com</a>. Your reports are confidential and will be addressed promptly.</p>
            </div>
            {/* how to connect our support */}
            <div>
                <h2>How to connect our support</h2>
                <p className="text-[#9b6988]">Reach our support team via <a href='mailto:support@example.com' className='text-blue-500 underline'><FontAwesomeIcon icon={faEnvelope} /> support@example.com</a>, or live chat on our site. We're available Monday to Friday, 9:00 AM to 5:00 PM EST, for swift assistance.</p>
            </div>
            {/* account docs */}
            <div>
                <h2>Account docs</h2>
                <p className="text-[#9b6988]">For invoices, receipts, or financial statements, contact <a href='mailto:accounting@example.com' className='text-blue-500 underline'><FontAwesomeIcon icon={faEnvelope} />  ccounting@example.com</a>. Be specific with your request for expedited assistance in maintaining financial transparency.</p>
            </div>
        </div>
    );
}

export default HelpDeskSection;