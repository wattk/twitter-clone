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
function ActivityBar({ activities, user, setLikes }) {
  const colorclass = 'text-slate-500';
  const retweet = activities.retweet;
  const heart = activities.heart;
  const [color, setColor] = useState(heart.hearted ? 'deeppink' : 'none');

  function handleHearted() {
    heart.hearted = !heart.hearted;
    setColor(heart.hearted ? 'deeppink' : 'none');
    heart.heartCount = heart.hearted
      ? heart.heartCount + 1
      : heart.heartCount - 1;
  }
  function likeClicked() {
    const id = activities.id;
    let likes = userinfo.profile.likes;
    if (heart.hearted) {
      likes.push({ id: user.tweets[0].id, details: user });
    } else {
      likes = likes.filter((t) => t.id !== id);
    }
    // how do you make the list to reload????????
  }
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
            retweet.retweetCount = retweet.retweetCount + 1;
          }}
        >
          <ArrowPathRoundIcon classname={colorclass} />
        </button>
        <span
          className='m1-1'
          style={{ color: retweet.retweeted ? '' : '#64748b' }}
        >
          {calcNumber(retweet.retweetCount)}
        </span>
      </div>
      <div className='flex items-center'>
        <button
          onClick={(e) => {
            handleHearted();
            likeClicked();
          }}
        >
          <HeartIcon classname={colorclass} color={color} />
        </button>
        <span className={`ml-1 ${colorclass}`}>
          {calcNumber(heart.heartCount)}
        </span>
      </div>
      <button>
        <ShareIcon classname={colorclass} />
      </button>
    </div>
  );
}

export default ActivityBar;
