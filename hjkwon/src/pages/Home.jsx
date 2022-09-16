import { Link } from "react-router-dom";
import Header from "../components/Header";
import ThreadList from "../components/thread/ThreadList";
import { FaTwitter } from "react-icons/fa";
import Profile from "../components/atomic/Profile";
import Sidebar from "../components/Sidebar";
import MainSection from "../components/MainSection";
import { useState, useContext } from "react";
import TwitterContext from "../context/TwitterContext";
import WriteIcon from "../components/icons/WriteIcon";

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
          <WriteIcon />
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
