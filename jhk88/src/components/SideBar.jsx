import React from 'react';

function SideBar({ user, setProfile }) {
  const info = user.info;
  const follows = user.follows;
  const url = user.url;
  return (
    <div className='drawer-side h-[750px]'>
      <label htmlFor='my-drawer' className='drawer-overlay'></label>
      <div className='p-4 overflow-y-auto w-[250px] bg-base-100 mb-4'>
        <button onClick={setProfile} className='cursor-default'>
          <div className='mt-4 py-2 text-left'>
            <img
              className='mask mask-circle w-[50px]'
              src={url.url}
              alt='profile'
            />
            <p>
              <b>{info.name}</b>
            </p>
            <p>@{info.id}</p>
          </div>
          <div className='border-b-[1px] pb-2 '>
            <span>
              <b>{follows.following}</b> Following
            </span>
            <span className='pl-3'>
              <b>{follows.followers}</b> Followers
            </span>
          </div>
        </button>
        <ul>
          <li className='py-2'>
            <button onClick={setProfile}>Profile</button>
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
