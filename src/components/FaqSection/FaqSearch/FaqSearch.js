import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const FaqSearch = () =>{
    return (
        <div className="py-10 pl-9 pr-4 flex md:block flex-col w-full">
          <form className="">
            <div className="">
              <label htmlFor="search_by_question" className="text-xl mb-1">Enter your question</label>
              <div className="flex items-center bg-white pl-4 w-full md:w-3/5">
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
    )
}
export default FaqSearch;