import React, { useState } from 'react';
import ArrowPathRoundIcon from '../icons/ArrowPathRoundIcon';
import ShareIcon from '../icons/ShareIcon';
import ChatBubbleIcon from '../icons/ChatBubbleIcon';
import HeartIcon from '../icons/HeartIcon';

function ActivityBar() {
  const [color, setColor] = useState('none');
  const [likeCount, setlikeCount] = useState(Math.round(Math.random() * 100));
  const [retweetCount, setRetweetCount] = useState(
    Math.round(Math.random() * 100)
  );
  const [replyCount, setReplyCount] = useState(Math.round(Math.random() * 100));
  const colorclass = 'text-slate-500';
  return (
    <div className='flex justify-between w-full'>
      <div className='flex items-center'>
        <button>
          <ChatBubbleIcon classname={colorclass} />
        </button>
        <span className={`ml-1 ${colorclass}`}>{replyCount}</span>
      </div>
      <div className='flex items-center'>
        <button
          onClick={() => {
            setRetweetCount(retweetCount + 1);
          }}
        >
          <ArrowPathRoundIcon classname={colorclass} />
        </button>
        <span className={`ml-1 ${colorclass}`}>{retweetCount}</span>
      </div>
      <div className='flex items-center'>
        <button
          onClick={() => {
            setColor(color === 'deeppink' ? 'none' : 'deeppink');
            setlikeCount(color === 'deeppink' ? likeCount - 1 : likeCount + 1);
          }}
        >
          <HeartIcon classname={colorclass} color={color} />
        </button>
        <span className={`ml-1 ${colorclass}`}>{likeCount}</span>
      </div>
      <button>
        <ShareIcon classname={colorclass} />
      </button>
    </div>
  );
}

export default ActivityBar;
