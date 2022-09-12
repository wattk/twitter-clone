import React from 'react';

function SideBar({ user }) {
  return (
    <div className='drawer-side h-[750px]'>
      <label htmlFor='my-drawer' className='drawer-overlay'></label>
      <div className='p-4 overflow-y-auto w-[250px] bg-base-100 mb-4'>
        <div className='mt-4 py-2'>
          <img
            className='mask mask-circle w-[50px]'
            src={user.imgUrl}
            alt='profile'
          />
          <p>
            <b>{user.name}</b>
          </p>
          <p>@{user.id}</p>
        </div>
        <div className='border-b-[1px] pb-2 '>
          <span>
            <b>{user.following}</b> Following
          </span>
          <span className='pl-3'>
            <b>{user.followers}</b> Followers
          </span>
        </div>
        <ul>
          <li className='py-2'>
            <button>Profile</button>
          </li>
          <li className='pb-2'>
            <button>Lists</button>
          </li>
          <li className='pb-2'>
            <button>Topics</button>
          </li>
          <li className='pb-2'>
            <button>Bookmarks</button>
          </li>
          <li className='border-t-[1px] py-2'>
            <button>Settings and privacy</button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SideBar;
