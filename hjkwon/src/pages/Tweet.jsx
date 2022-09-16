import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import MainSection from "../components/MainSection";
import Profile from "../components/atomic/Profile";
import TwitterContext from "../context/TwitterContext";
function Tweet() {
  const { user, dispatch } = useContext(TwitterContext);
  const [text, setText] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    if (e.target.value.length < 140) setText(e.target.value);
  };
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 hover:text-blue-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8 text-blue-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8 text-blue-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12.75 8.25v7.5m6-7.5h-3V12m0 0v3.75m0-3.75H18M9.75 9.348c-1.03-1.464-2.698-1.464-3.728 0-1.03 1.465-1.03 3.84 0 5.304 1.03 1.464 2.699 1.464 3.728 0V12h-1.5M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8 text-blue-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8 text-blue-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
              />
            </svg>
          </div>
        </div>
      </MainSection>
    </>
  );
}

export default Tweet;
