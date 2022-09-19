import React from 'react';
import EllipsisVerticalIcon from '../icons/EllipsisVerticalIcon';
import Content from '../timeline/Content';
import UserInfoBar from '../timeline/UserInfoBar';

function ProfileTweets({ selectedUser }) {
  const url = selectedUser.url;
  const info = selectedUser.info;
  return selectedUser.tweets?.map((tweet, index) => (
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
  ));
}

export default ProfileTweets;
