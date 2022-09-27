import React from 'react';
import EllipsisVerticalIcon from '../icons/EllipsisVerticalIcon';
import Content from '../timeline/Content';
import UserInfoBar from '../timeline/UserInfoBar';

function ProfileLikesTab({ selectedUser }) {
  const likes = selectedUser.profile.likes;

  return likes.map((tweet, index) => (
    <div className='flex border-b-[1px] border-slate-200' key={index}>
      <div className='pt-4 ml-4'>
        <img
          className='mask mask-circle w-[50px]'
          src={tweet.details.url.url}
          alt='profile'
        />
      </div>
      <div className='pl-2 w-[315px]'>
        <UserInfoBar
          info={tweet.details.info}
          tweetDate={tweet.details.tweets[0]?.date}
        />
        <div className='pb-4'>
          <Content
            content={tweet.details.tweets[0].text}
            activities={tweet.details.tweets[0].activities}
            user={selectedUser}
          />
        </div>
      </div>
      <div className='mr-4 pt-[.85rem]'>
        <EllipsisVerticalIcon classname='text-slate-400' />
      </div>
    </div>
  ));
}

export default ProfileLikesTab;
