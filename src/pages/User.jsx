import { useContext } from "react";
import MainSection from "../components/MainSection";
import Profile from "../components/atomic/Profile";
import ThreadList from "../components/ThreadList";
import TwitterContext from "../context/TwitterContext";

function User() {
  const { userData } = useContext(TwitterContext);
  return (
    <>
      <MainSection>
        <ThreadList data={userData} />
      </MainSection>
    </>
  );
}

export default User;
