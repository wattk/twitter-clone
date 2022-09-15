import React from 'react';
import { faker } from '@faker-js/faker';
import LocationIcon from '../icons/LocationIcon';
import LinkIcon from '../icons/LinkIcon';

function UserProfile({ selectedUser, user }) {
  const info = selectedUser.info;
  const url = selectedUser.url;
  const follows = selectedUser.follows;
  const profile = selectedUser.profile;
  const isSelf = info.id === user.info.id ? true : false;
  const addFollower = () => {
    if (!user.list) user.list = [];
    user.follows.following++;
    user.list = [...user.list, selectedUser];
  };
  return (
    <>
      <div className='absolute top-0 left-0 h-[20%] overflow-hidden z-[-1]'>
        <img src={url.profImgUrl} alt='bg' className='translate-y-[-35%]' />
      </div>
      <div className='px-5'>
        <div className='mt-[100px] flex justify-between items-end'>
          <img
            className='mask mask-circle w-[65px]'
            src={url.url}
            alt='profile'
          />

          {isSelf && (
            <button className='border-[1px] border-sky-500 px-5 py-1 text-sky-500 tracking-wide rounded-[50px]'>
              Edit profile
            </button>
          )}
          {!isSelf && (
            <button
              className='bg-sky-500 px-5 py-1 text-white tracking-wide rounded-[50px]'
              onClick={addFollower}
            >
              Follow
            </button>
          )}
        </div>
        <div className='mt-2'>
          <div className='font-bold text-2xl tracking-wide'>{info.name}</div>
          <div className='text-slate-500 font-medium tracking-tight'>
            @{info.id}
          </div>
        </div>
        <div className='mt-1 font-medium'>{faker.lorem.lines()}</div>
      </div>
      <div className='my-1 ml-[1rem] text-slate-500 flex flex-row'>
        <span className='flex flex-row items-center'>
          <LocationIcon />
          {profile.location}
        </span>
        {profile.link && (
          <span className='ml-7 flex flex-row items-center'>
            <LinkIcon />
            <a
              href={profile.link}
              target='_blank'
              rel='noreferrer'
              className='text-sky-400'
            >
              {profile.link}
            </a>
          </span>
        )}
      </div>
      <div className='px-5'>
        <div className='my-1 flex'>
          <div>
            <b>
              {follows.following
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            </b>
            <span className='text-slate-500 '> Following</span>
          </div>
          <div className='pl-[60px]'>
            <b>
              {follows.followers
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            </b>
            <span className='text-slate-500 '> Followers</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserProfile;
