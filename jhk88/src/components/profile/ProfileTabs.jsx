import React, { useState } from 'react';
import EllipsisVerticalIcon from '../icons/EllipsisVerticalIcon';
import Content from '../timeline/Content';
import UserInfoBar from '../timeline/UserInfoBar';

function ProfileTabs({ selectedUser }) {
  const [isActive, setIsActive] = useState(0);
  const tabs = ['Tweets', 'Tweets & replies', 'Media', 'Likes'];
  const url = selectedUser.url;
  const info = selectedUser.info;
  return (
    <>
      <div className='tabs flex justify-between mt-3'>
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`tab tab-bordered flex-grow ${
              index === isActive
                ? 'tab-active border-sky-400 text-sky-400'
                : 'border-slate-400 text-slate-400'
            }`}
            style={{
              borderColor: index === isActive ? '#60A5FA' : '#e1e4e8',
              borderBottomWidth: index === isActive ? '3px' : '1px',
            }}
            onClick={() => setIsActive(index)}
          >
            <span className='text-md font-bold tracking-wide'>{tab}</span>
          </div>
        ))}
      </div>{' '}
      <div className='overflow-y-auto mb-[50px] relative'>
        {isActive === 0 &&
          selectedUser.tweets?.map((tweet, index) => (
            <div className='flex border-b-[1px] border-slate-200' key={index}>
              <div className='pt-4 ml-4'>
                <img
                  className='mask mask-circle w-[50px]'
                  src={url.url}
                  alt='profile'
                />
              </div>
              <div className='pl-2 w-[315px]'>
                <UserInfoBar info={info} tweetDate={tweet.date} />
                <div className='pb-4'>
                  <Content content={tweet.text} activities={tweet.activities} />
                </div>
              </div>
              <div className='mr-4 pt-[.85rem]'>
                <EllipsisVerticalIcon classname='text-slate-400' />
              </div>
            </div>
          ))}
      </div>
    </>
  );
}

export default ProfileTabs;
