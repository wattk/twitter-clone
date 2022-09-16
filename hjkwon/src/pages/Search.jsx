import { Link } from "react-router-dom";
import Header from "../components/Header";
import MainSection from "../components/MainSection";
import SearchIcon from "../components/icons/SearchIcon";
import BackIcon from "../components/icons/BackIcon";
import GlitchIcon from "../components/icons/GlitchIcon";

function Search() {
  const handleSearch = (e) => {
    if (e.key === "Enter") console.log("event enter");
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
            />
          </div>
        </div>
        <GlitchIcon />
      </Header>
      <MainSection top="5rem" bottom="5rem">
        <div className="h-screen mx-10 pt-7">
          <h5 className="font-bold text-xl">실시간 트렌드</h5>
        </div>
      </MainSection>
    </>
  );
}

export default Search;
