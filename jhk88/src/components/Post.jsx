import React from 'react';
import Content from './Content';
import UserInfoBar from './UserInfoBar';
import EllipsisVerticalIcon from './icons/EllipsisVerticalIcon';

function Post({ url, content, info }) {
  return (
    <div className='flex border-b-[1px] border-slate-200'>
      <div className='pt-4 ml-4'>
        <img
          className='mask mask-circle w-[50px]'
          src={url}
          alt='profilePicture'
        />
      </div>
      <div className='pl-2 w-[315px]'>
        <UserInfoBar info={info} />
        <div className='pb-4'>
          <Content content={content} />
        </div>
      </div>
      <div className='mr-4 pt-[.85rem]'>
        <EllipsisVerticalIcon classname='text-slate-400' />
      </div>
    </div>
  );
}

export default Post;
