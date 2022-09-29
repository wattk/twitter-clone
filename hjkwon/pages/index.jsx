import Link from "next/link";
import Header from "../src/components/Header";
import ThreadList from "../src/components/thread/ThreadList";
import { FaTwitter } from "react-icons/fa";
import Profile from "../src/components/atomic/Profile";
import Sidebar from "../src/components/Sidebar";
import MainSection from "../src/components/MainSection";
import { useState, useContext } from "react";
import TwitterContext from "../src/context/TwitterContext";
import { PencilSquareIcon } from "@heroicons/react/24/solid";

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
        <Link href="/tweet" passHref>
          <PencilSquareIcon className="w-10 h-10 text-gray-500 hover:cursor-pointer hover:text-blue-500" />
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
