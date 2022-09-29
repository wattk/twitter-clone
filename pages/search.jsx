import { useContext, useState } from "react";
import Link from "next/link";

import Header from "../src/components/Header";
import MainSection from "../src/components/MainSection";
import ThreadList from "../src/components/thread/ThreadList";

import {
  XMarkIcon,
  MagnifyingGlassIcon,
  ArrowLeftIcon,
  SparklesIcon,
} from "@heroicons/react/24/solid";

import TwitterContext from "../src/context/TwitterContext";

function Search() {
  const [keyword, setKeyword] = useState("");
  const { searchData, dispatch } = useContext(TwitterContext);
  const handleSearch = (e) => {
    if (e.key === "Enter") {
      dispatch({
        type: "SEARCH_TWEET",
        payload: e.target.value,
      });
    }
  };
  const handleKeyword = (e) => {
    setKeyword(e.target.value);
  };
  const clearKeyword = () => {
    setKeyword("");
    dispatch({
      type: "CLEAR_SEARCH",
      payload: [],
    });
  };
  return (
    <>
      <Header>
        <Link href="/">
          <ArrowLeftIcon className="w-6 h-6 hover:text-blue-500" />
        </Link>
        <div className="border border-blue-400 rounded-full px-3 w-80">
          <div className="h-9 flex items-center">
            <MagnifyingGlassIcon className="w-7 h-7 text-blue-500 mr-2" />
            <input
              type="text"
              placeholder="Search Twitter"
              className="focus:outline-none w-full"
              onKeyUp={handleSearch}
              value={keyword}
              onChange={handleKeyword}
            />
            {keyword !== "" && (
              <div
                onClick={clearKeyword}
                className="cursor-pointer text-gray-400"
              >
                <XMarkIcon className="w-6 h-6" />
              </div>
            )}
          </div>
        </div>
        <SparklesIcon className="w-7 h-7 text-blue-500" />
      </Header>
      <MainSection top="5rem" bottom="5rem">
        {searchData.length > 0 ? (
          <div className="h-fit w-full">
            <ThreadList data={searchData} />
          </div>
        ) : (
          <div className="h-screen mx-10 pt-7">
            <h5 className="font-bold text-xl">실시간 트렌드</h5>
          </div>
        )}
      </MainSection>
    </>
  );
}

export default Search;
