import React from 'react';
import HomeIcon from './icons/HomeIcon';
import HomeSolidIcon from './icons/HomeSolidIcon';
import SearchIcon from './icons/SearchIcon';
import SearchSolidIcon from './icons/SearchSolidIcon';
import MicIcon from './icons/MicIcon';
import MicSolidIcon from './icons/MicSolidIcon';
import BellIcon from './icons/BellIcon';
import BellSolidIcon from './icons/BellSolidIcon';
import MailIcon from './icons/MailIcon';
import MailSolidIcon from './icons/MailSolidIcon';
import * as STATE from '../data/state';

function BottomBar({ setState, navIndex, setNavIndex }) {
  const compArray = [
    [<HomeSolidIcon />, <HomeIcon />, STATE.home],
    [<SearchSolidIcon />, <SearchIcon />, STATE.search],
    [<MicSolidIcon />, <MicIcon />, STATE.mic],
    [<BellSolidIcon />, <BellIcon />, STATE.alarm],
    [<MailSolidIcon />, <MailIcon />, STATE.mail],
  ];

  return (
    <div className='border-t-[1px] border-slate-200 h-[55px] w-full bg-white absolute bottom-0'>
      <div className='flex justify-between items-center h-full px-8'>
        {compArray.map((items, index) => {
          return navIndex === index ? (
            <div key={index}>{items[0]}</div>
          ) : (
            <button
              key={index}
              onClick={() => {
                setNavIndex(index);
                setState(items[2]);
              }}
            >
              {items[1]}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default BottomBar;
