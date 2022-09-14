import React from 'react';
import Content from './Content';
import UserInfoBar from './UserInfoBar';
import EllipsisVerticalIcon from '../icons/EllipsisVerticalIcon';

function Post({ user, setUserProfile, setCurrUser }) {
  const url = user.url;
  const content = user.content;
  const info = user.info;
  const activities = user.activities;
  const data = user;
  return (
    <div className='flex border-b-[1px] border-slate-200'>
      <div className='pt-4 ml-4'>
        <button
          onClick={() => {
            setUserProfile();
            setCurrUser(data);
          }}
        >
          <img
            className='mask mask-circle w-[50px]'
            src={url.url}
            alt='profilePicture'
          />
        </button>
      </div>
      <div className='pl-2 w-[315px]'>
        <UserInfoBar info={info} />
        <div className='pb-4'>
          <Content content={content} activities={activities} />
        </div>
      </div>
      <div className='mr-4 pt-[.85rem]'>
        <EllipsisVerticalIcon classname='text-slate-400' />
      </div>
    </div>
  );
}

export default Post;
