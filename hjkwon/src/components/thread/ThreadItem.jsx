import { useContext, useEffect, useState, useRef } from "react";
import Profile from "../atomic/Profile";
import Button from "../atomic/Button";
import TwitterContext from "../../context/TwitterContext";

function ThreadItem({ item }) {
  const { user, dispatch } = useContext(TwitterContext);
  //해당 트윗이 로그인 유저의 트윗인지 확인
  const isUser = user.id === item.info.id;
  //삭제 버튼 노출 여부
  const [isShow, setIsShow] = useState(false);
  const labelRef = useRef(null);

  //로그인 유저 좋아요, 리트윗 여부
  const [isLike, setIsLike] = useState(item.like.indexOf(user.id) !== -1);
  const [isRetweet, setIsRetweet] = useState(
    item.retweet.indexOf(user.id) !== -1
  );

  //label 이외의 공간 클릭 시 삭제 버튼 숨기기
  useEffect(() => {
    const labelClick = (e) => {
      if (labelRef.current && !labelRef.current.contains(e.target)) {
        setIsShow(false);
      }
    };

    window.addEventListener("mousedown", labelClick);

    return () => window.removeEventListener("mousedown", labelClick);
  });

  /** 리트윗, 좋아요 버튼 클릭 이벤트 */
  const handleClick = (e) => {
    e.preventDefault();
    const target = e.currentTarget.htmlFor;
    let updateData = [];

    //버튼이 리트윗 버튼인지, 좋아요 버튼인지 분기처리
    if (target === "retweet-btn") {
      //좋아요를 누른 상태라면 로그인 유저의 아이디를 배열에서 삭제, 누르지 않은 상태라면 추가
      if (isRetweet) {
        updateData = item.retweet.filter((ele) => ele !== user.id);
      } else {
        updateData = [user.id, ...item.retweet];
      }
      //state 변경
      setIsRetweet(!isRetweet);

      //context 업데이트
      dispatch({
        type: "UPDATE_TWEET",
        payload: { id: item.id, category: "retweet", data: updateData },
      });
    } else if (target === "like-btn") {
      if (isLike) {
        updateData = item.like.filter((ele) => ele !== user.id);
      } else {
        updateData = [user.id, ...item.like];
      }
      setIsLike(!isLike);

      dispatch({
        type: "UPDATE_TWEET",
        payload: { id: item.id, category: "like", data: updateData },
      });
    }
  };

  /** 트윗 삭제 이벤트 */
  const handleDelete = (id) => {
    dispatch({
      type: "DELETE_TWEET",
      payload: id,
    });
  };

  return (
    <div className="thread grid border border-gray-100 py-7 px-12 ">
      <div className="col-span-1 row-span-3">
        <Profile img={item.url.profImgUrl} size="3.5rem" />
      </div>
      <div className="col-span-1 row-span-1 flex justify-between h-8">
        <div>
          <span className="font-bold mr-2">{item.info.name}</span>
          <span className="text-sm text-gray-500 mr-2">@{item.info.id}</span>
          <span className="text-sm text-gray-500">10min</span>
        </div>
        {isUser && (
          <div className="flex flex-col items-end" ref={labelRef}>
            <label
              htmlFor="info-btn"
              className="cursor-pointer absolute z-0"
              onClick={() => setIsShow(!isShow)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 text-gray-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
                />
              </svg>
            </label>
            <input type="button" id="info-btn" />
            {isShow && (
              <button
                type="button"
                className="bg-white border border-gray-200 rounded-md text-center w-36 py-2 text-red-600 z-0 cursor-pointer"
                onClick={() => handleDelete(item.id)}
              >
                delete
              </button>
            )}
          </div>
        )}
      </div>
      <div className="col-span-1 row-span-1">{item.content}</div>
      <div className="col-span-1 row-span-1">
        <div className="w-80 flex pt-3.5 justify-between">
          <Button
            btn="reply-btn"
            customStyle="w-6 h-6 text-gray-500"
            fill="none"
            path="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 011.037-.443 48.282 48.282 0 005.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
            children={<span className="text-gray-500 text-sm">12</span>}
            event={handleClick}
          />
          <Button
            btn="retweet-btn"
            customStyle={
              isRetweet ? "w-6 h-6 text-green-600" : "w-6 h-6 text-gray-500"
            }
            fill="none"
            path="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3"
            children={
              item.retweet.length > 0 && (
                <span
                  className={
                    isRetweet
                      ? "text-green-600 text-sm"
                      : "text-gray-500 text-sm"
                  }
                >
                  {item.retweet.length}
                </span>
              )
            }
            event={handleClick}
          />
          <Button
            btn="like-btn"
            customStyle={
              isLike ? "w-6 h-6 text-red-500" : "w-6 h-6 text-gray-500"
            }
            fill={isLike ? "currentColor" : "none"}
            path="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            children={
              item.like.length > 0 && (
                <span
                  className={
                    isLike ? "text-red-500 text-sm" : "text-gray-500 text-sm"
                  }
                >
                  {item.like.length}
                </span>
              )
            }
            event={handleClick}
          />
          <label className="flex cursor-pointer items-center justify-between w-12">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-gray-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"
              />
            </svg>

            <span className="text-gray-500 text-sm">12</span>
            <input type="button" className="text-gray-500 text-sm" />
          </label>
        </div>
      </div>
    </div>
  );
}

export default ThreadItem;
