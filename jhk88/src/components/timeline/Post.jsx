import React, { useContext } from 'react';
import Content from './Content';
import UserInfoBar from './UserInfoBar';
import EllipsisVerticalIcon from '../icons/EllipsisVerticalIcon';
import { DataContext } from '../../context/DataContextProvider';

function Post({ user, setUserProfile, setCurrUser, isUser }) {
  const { data, setData } = useContext(DataContext);

  const url = user.url;
  const info = user.info;
  const tweets = user.tweets.length > 0 ? user.tweets[0] : '';
  const activities = tweets.activities;
  return (
    <div className='flex border-b-[1px] border-slate-200'>
      <div className='pt-4 ml-4'>
        <button
          onClick={() => {
            setUserProfile();
            setCurrUser(user);
          }}
        >
          <img
            className='mask mask-circle w-[50px]'
            src={url.url}
            alt='profile'
          />
        </button>
      </div>
      <div className='pl-2 w-[315px]'>
        <UserInfoBar info={info} tweetDate={tweets.date} />
        <div className='pb-4'>
          <Content content={tweets.text} activities={activities} user={user} />
        </div>
      </div>
      <div className='mr-4 pt-[.85rem] dropdown dropdown-end'>
        <label
          tabIndex={0}
          className={`${isUser ? 'cursor-pointer' : 'cursor-default'}`}
        >
          <EllipsisVerticalIcon classname='text-slate-400' />
        </label>
        {isUser && (
          <ul
            tabIndex={0}
            className='dropdown-content menu absolute px-2 drop-shadow-lg bg-base-100 rounded-lg'
          >
            <li>
              <button
                className='hover:bg-inherit hover:font-medium'
                onClick={() => setData(data.filter((d) => d !== user))}
              >
                delete
              </button>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}

export default Post;
