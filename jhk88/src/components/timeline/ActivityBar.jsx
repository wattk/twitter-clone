import React, { useState } from 'react';
import ArrowPathRoundIcon from '../icons/ArrowPathRoundIcon';
import ShareIcon from '../icons/ShareIcon';
import ChatBubbleIcon from '../icons/ChatBubbleIcon';
import HeartIcon from '../icons/HeartIcon';

function ActivityBar({ activities }) {
  const [color, setColor] = useState('none');
  const colorclass = 'text-slate-500';
  const retweetLength = activities.retweetCount / 1000;
  const heartLength = activities.heartCount / 1000;
  return (
    <div className='flex justify-between w-full'>
      <div className='flex items-center'>
        <button>
          <ChatBubbleIcon classname={colorclass} />
        </button>
        <span className={`ml-1 ${colorclass}`}>
          {activities.replyCount > 0 ? activities.replyCount : ''}
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
          {activities.retweetCount > 0
            ? Math.floor(retweetLength) > 0
              ? parseFloat(retweetLength.toFixed(2)) + 'k'
              : activities.retweetCount
            : ''}
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
          }}
        >
          <HeartIcon classname={colorclass} color={color} />
        </button>
        <span className={`ml-1 ${colorclass}`}>
          {activities.heartCount > 0
            ? Math.floor(heartLength) > 0
              ? parseFloat(heartLength.toFixed(2)) + 'k'
              : activities.heartCount
            : ''}
        </span>
      </div>
      <button>
        <ShareIcon classname={colorclass} />
      </button>
    </div>
  );
}

export default ActivityBar;
