import { Link } from "react-router-dom";
import Header from "../components/Header";
import ThreadList from "../components/thread/ThreadList";
import { FaTwitter } from "react-icons/fa";
import Profile from "../components/atomic/Profile";
import Sidebar from "../components/Sidebar";
import MainSection from "../components/MainSection";
import { useState, useContext } from "react";
import TwitterContext from "../context/TwitterContext";

function Home() {
  const {
    user: { profile },
    data,
  } = useContext(TwitterContext);
  const [isOpen, setIsOpen] = useState(false);

  /** 사이드바 노출 */
  const onClickButton = () => {
    setIsOpen(true);
  };
  return (
    <>
      <Header>
        <div>
          <Profile size="3.5rem" img={profile} onClick={onClickButton} />
        </div>
        <FaTwitter className="m-auto text-5xl text-blue-500" />
        <Link to="/tweet">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-10 h-10 text-gray-500 hover:cursor-pointer hover:text-blue-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
            />
          </svg>
        </Link>

        {isOpen && (
          <Sidebar
            open={isOpen}
            onClose={() => {
              setIsOpen(false);
            }}
          />
        )}
      </Header>
      <MainSection top="5rem" bottom="5rem">
        <ThreadList data={data} />
      </MainSection>
    </>
  );
}

export default Home;
