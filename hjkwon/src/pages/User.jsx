import { useContext, useMemo } from "react";
import MainSection from "../components/MainSection";
import Profile from "../components/atomic/Profile";
import ThreadList from "../components/thread/ThreadList";
import TwitterContext from "../context/TwitterContext";

function User() {
  const { user, data } = useContext(TwitterContext);

  const filteredData = useMemo(() => {
    return data.filter(
      (item) => item.info.id === user.id || item.retweet.indexOf(user.id) !== -1
    );
  }, [data]);

  return (
    <>
      <MainSection bottom="5rem">
        <div className="top-0 bg-white">
          <img
            src={user.profImgUrl}
            className="w-full h-60 object-cover"
            alt="bg-img"
          />
        </div>
        <div
          className="absolute top-48 ml-10
        "
        >
          <Profile img={user.profile} size="5rem" />
        </div>
        <div className="flex justify-end mt-2 mr-5">
          <button
            type="button"
            className="border border-blue-400 rounded-full w-28 py-1 font-bold text-blue-400"
          >
            Edit Profile
          </button>
        </div>
        <div className="ml-10">
          <h4 className="font-bold text-2xl">{user.name}</h4>
          <span className="text-gray-500">@{user.id}</span>
          <p className="mt-3 mb-4">{user.intro}</p>
          <div className="mb-10">
            <span className="font-bold text-lg mr-2">Following</span>
            <span className="mr-4">{user.following}</span>
            <span className="font-bold text-lg mr-2">Follower</span>
            <span>{user.follower}</span>
          </div>
        </div>
        <ThreadList data={filteredData} />
      </MainSection>
    </>
  );
}

export default User;
