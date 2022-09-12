import React from 'react';
import Logo from './icons/Twitter_bird_logo_2012.svg';
import Sparkles from './icons/SparklesIcon';

function TopBar({ user }) {
  return (
    <div className='py-2 px-4 mt-2 flex justify-between items-center border-b-[1px] border-slate-200'>
      <label htmlFor='my-drawer' className='drawer-button'>
        <img
          className='mask mask-circle w-[30px]'
          src={user.imgUrl}
          alt='profile'
        />
      </label>

      <img src={Logo} alt='Twitter Logo' className='h-[22px]' />
      <Sparkles classname='text-sky-500 scale-x-[-1]' />
    </div>
  );
}

export default TopBar;
