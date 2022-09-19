import React, { useState } from 'react';
import ArrowPathRoundIcon from '../icons/ArrowPathRoundIcon';
import ShareIcon from '../icons/ShareIcon';
import ChatBubbleIcon from '../icons/ChatBubbleIcon';
import HeartIcon from '../icons/HeartIcon';
import userinfo from '../../data/userinfo';

function calcNumber(numbers) {
  let calced = numbers;
  let unit = 'k';
  while (Math.floor((calced = numbers / 1000)) > 0) {
    if (calced >= 1000) {
      unit = 'm';
      continue;
    } else {
      return parseFloat(calced.toFixed(2)) + unit;
    }
  }
  if (numbers > 0) {
    return numbers;
  } else {
    return '';
  }
}

function ActivityBar({ activities, user }) {
  const [color, setColor] = useState('none');
  const colorclass = 'text-slate-500';

  const likeClicked = () => {
    const likes = userinfo.profile.likes;
    console.log('user', user, 'likes', likes);
    if (likes.filter((t) => t.tweets[0].id === user.tweets[0].id).length) {
      likes.add(user);
    }
  };
  return (
    <div className='flex justify-between w-full'>
      <div className='flex items-center'>
        <button>
          <ChatBubbleIcon classname={colorclass} />
        </button>
        <span className={`ml-1 ${colorclass}`}>
          {calcNumber(activities.replyCount)}
        </span>
      </div>
      <div className='flex items-center'>
        <button
          onClick={() => {
            activities.retweetCount = activities.retweetCount + 1;
          }}
        >
          <ArrowPathRoundIcon classname={colorclass} />
        </button>
        <span className={`ml-1 ${colorclass}`}>
          {calcNumber(activities.retweetCount)}
        </span>
      </div>
      <div className='flex items-center'>
        <button
          onClick={() => {
            setColor(color === 'deeppink' ? 'none' : 'deeppink');
            activities.heartCount =
              color === 'deeppink'
                ? activities.heartCount - 1
                : activities.heartCount + 1;
            likeClicked();
          }}
        >
          <HeartIcon classname={colorclass} color={color} />
        </button>
        <span className={`ml-1 ${colorclass}`}>
          {calcNumber(activities.heartCount)}
        </span>
      </div>
      <button>
        <ShareIcon classname={colorclass} />
      </button>
    </div>
  );
}

export default ActivityBar;
