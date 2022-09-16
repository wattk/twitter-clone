import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import MainSection from "../components/MainSection";
import Profile from "../components/atomic/Profile";
import TwitterContext from "../context/TwitterContext";
import ImageIcon from "../components/icons/ImageIcon";
import GifIcon from "../components/icons/GifIcon";
import GraphIcon from "../components/icons/GraphIcon";
import LocationIcon from "../components/icons/LocationIcon";
import CloseIcon from "../components/icons/CloseIcon";
function Tweet() {
  const { user, dispatch } = useContext(TwitterContext);
  const [text, setText] = useState("");
  const navigate = useNavigate();

  /** 트윗 140자 제한 */
  const handleChange = (e) => {
    if (e.target.value.length < 140) setText(e.target.value);
  };

  /** 트윗 추가 이벤트 */
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (text === "") return;
    else {
      dispatch({
        type: "ADD_TWEET",
        payload: {
          url: { url: user.profile, profImgUrl: user.profile },
          info: {
            id: user.id,
            name: user.name,
            date: new Date().toString(),
          },
          like: [],
          retweet: [],
          follows: { following: user.following, followers: user.follower },
          content: text,
          id: "twt" + Date.now().toString().substring(0, 3),
          depth: 1,
        },
      });
      navigate("/");
    }
  };
  return (
    <>
      <Header>
        <>
          <Link to="/">
            <CloseIcon />
          </Link>
          <button
            className="bg-blue-500 text-white font-bold rounded-full py-2 px-4 hover:border hover:border-blue-500 hover:bg-white hover:text-blue-500"
            onClick={handleSubmit}
          >
            tweet
          </button>
        </>
      </Header>
      <MainSection>
        <div className="h-screen">
          <div className="flex pt-28 px-8">
            <div>
              <Profile img={user.profile} size="4.5rem" />
            </div>
            <textarea
              placeholder="What's happening now?"
              className="block w-full text-md my-2.5 mx-8 text-lg focus:outline-gray-200"
              cols="30"
              rows="10"
              value={text}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="flex w-52 justify-between mx-8">
            <ImageIcon />
            <GifIcon />
            <GraphIcon />
            <LocationIcon />
          </div>
        </div>
      </MainSection>
    </>
  );
}

export default Tweet;
