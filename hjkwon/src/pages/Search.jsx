import { useContext, useState } from "react";
import { Link } from "react-router-dom";

import Header from "../components/Header";
import MainSection from "../components/MainSection";
import ThreadList from "../components/thread/ThreadList";

import SearchIcon from "../components/icons/SearchIcon";
import BackIcon from "../components/icons/BackIcon";
import GlitchIcon from "../components/icons/GlitchIcon";
import CloseIcon from "../components/icons/CloseIcon";

import TwitterContext from "../context/TwitterContext";

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
        <Link to="/">
          <BackIcon />
        </Link>
        <div className="border border-blue-400 rounded-full px-3 w-80">
          <div className="h-9 flex items-center">
            <SearchIcon />
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
                <CloseIcon />
              </div>
            )}
          </div>
        </div>
        <GlitchIcon />
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
