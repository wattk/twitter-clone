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
import { useState } from 'react';

function BottomBar() {
  const [clicked, setClicked] = useState(0);
  const compArray = [
    [<HomeSolidIcon />, <HomeIcon />],
    [<SearchSolidIcon />, <SearchIcon />],
    [<MicSolidIcon />, <MicIcon />],
    [<BellSolidIcon />, <BellIcon />],
    [<MailSolidIcon />, <MailIcon />],
  ];
  return (
    <div className='border-t-[1px] border-slate-200 h-[55px] w-full bg-inherit absolute bottom-0'>
      <div className='flex justify-between items-center h-full px-8'>
        {compArray.map((items, index) => {
          return clicked === index ? (
            <div key={index}>{items[0]}</div>
          ) : (
            <button
              key={index}
              onClick={() => {
                setClicked(index);
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
