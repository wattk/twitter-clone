import React from 'react';
import Logo from './icons/Twitter_bird_logo_2012.svg';
import SparklesIcon from './icons/SparklesIcon';
import SettingsIcon from './icons/SettingsIcon';
import ArrowSmallLeft from './icons/ArrowSmallLeft';

function TopBar({ user, state, onSearch, setOnSearch }) {
  return (
    <div
      className='py-2 px-4 mt-2 flex items-center border-b-[1px] border-slate-200 h-[47px]'
      style={{
        justifyContent: `${
          state === 'HOME' ||
          (state === 'SEARCH' && !onSearch) ||
          state === 'MAIL'
            ? 'space-between'
            : 'flex-start'
        }`,
      }}
    >
      {!onSearch && (
        <label htmlFor='my-drawer' className='drawer-button'>
          <img
            className='mask mask-circle w-[30px]'
            src={user.imgUrl}
            alt='profile'
          />
        </label>
      )}
      {onSearch && (
        <button onClick={() => setOnSearch(false)}>
          <ArrowSmallLeft />
        </button>
      )}
      {state === 'HOME' && (
        <>
          <img src={Logo} alt='Twitter Logo' className='h-[20px]' />
          <SparklesIcon classname='text-sky-500 scale-x-[-1]' />
        </>
      )}
      {state === 'SEARCH' && (
        <>
          <input
            type='text'
            className={`border border-2 rounded-[20px] bg-slate-200 px-2 w-[70%] relative ${
              onSearch ? 'inputFocus ml-7' : ''
            }`}
            placeholder='Search Twitter'
            onFocus={() => {
              setOnSearch(true);
            }}
          />
          {!onSearch && <SettingsIcon />}
        </>
      )}
      {state === 'MIC' && (
        <h1 className='ml-8 font-semibold text-xl tracking-wide'>Spaces</h1>
      )}
      {state === 'ALARM' && (
        <>
          <h1 className='ml-8 font-semibold text-xl tracking-wide'>
            Notifications
          </h1>
          <div className='absolute right-4'>
            <SettingsIcon />
          </div>
        </>
      )}
      {state === 'MAIL' && (
        <>
          <input
            type='text'
            className={`border border-2 rounded-[20px] bg-slate-200 px-2 w-[70%] ${
              onSearch ? 'inputFocus ml-7' : ''
            }`}
            placeholder='Search Direct Messages'
            onFocus={() => {
              setOnSearch(true);
            }}
          />
          {!onSearch && <SettingsIcon />}
        </>
      )}
    </div>
  );
}

export default TopBar;
