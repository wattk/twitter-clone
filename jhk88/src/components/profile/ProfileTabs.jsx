import React, { useState } from 'react';
import ProfileTweets from './ProfileTweets';

function ProfileTabs({ selectedUser }) {
  const [isActive, setIsActive] = useState(0);
  const tabs = ['Tweets', 'Tweets & replies', 'Media', 'Likes'];
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
      </div>
      <div className='overflow-y-auto mb-[50px] relative'>
        {isActive === 0 && <ProfileTweets selectedUser={selectedUser} />}
      </div>
    </>
  );
}

export default ProfileTabs;
