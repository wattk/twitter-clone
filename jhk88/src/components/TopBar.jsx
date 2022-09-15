import React from 'react';
import Logo from './icons/Twitter_bird_logo_2012.svg';
import SparklesIcon from './icons/SparklesIcon';
import SettingsIcon from './icons/SettingsIcon';
import ArrowSmallLeft from './icons/ArrowSmallLeft';

function TopBar({ user, state, onSearch, setOnSearch }) {
  const mic = 'MIC';
  const search = 'SEARCH';
  const mail = 'MAIL';
  const alarm = 'ALARM';
  const home = 'HOME';

  return (
    <div
      className='py-2 px-4 mt-2 flex items-center border-b-[1px] border-slate-200 h-[47px]'
      style={{
        justifyContent: `${
          state === home || ((state === search || state === mail) && !onSearch)
            ? 'space-between'
            : 'flex-start'
        }`,
      }}
    >
      {!onSearch && (
        <label htmlFor='my-drawer' className='drawer-button'>
          <img
            className='mask mask-circle w-[30px]'
            src={user.url.url}
            alt='profile'
          />
        </label>
      )}
      {onSearch && (
        <button onClick={() => setOnSearch(false)}>
          <ArrowSmallLeft />
        </button>
      )}
      {state === home && (
        <>
          <img src={Logo} alt='Twitter Logo' className='h-[20px]' />
          <SparklesIcon classname='text-sky-500 scale-x-[-1]' />
        </>
      )}
      {state === search && (
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
      )}
      {state === mic && (
        <h1 className='ml-8 font-semibold text-xl tracking-wide'>Spaces</h1>
      )}
      {state === alarm && (
        <>
          <h1 className='ml-8 font-semibold text-xl tracking-wide'>
            Notifications
          </h1>
          <div className='absolute right-4'>
            <SettingsIcon />
          </div>
        </>
      )}
      {state === mail && (
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
      )}
      {(state === mail || state === search) && !onSearch && <SettingsIcon />}
    </div>
  );
}

export default TopBar;
