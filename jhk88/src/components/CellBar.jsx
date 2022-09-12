import React from 'react';
import BatteryIcon from './icons/BatteryIcon';
import WifiIcon from './icons/WifiIcon';
import CharBarIcon from './icons/CharBarIcon';

function CellBar() {
  const time = new Date();
  return (
    <div className='flex '>
      <div className='w-2/4 pl-10 font-semibold'>
        {time.getHours()}:
        {time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes()}
      </div>
      <div className='w-2/4 flex justify-end items-center gap-2 pr-6'>
        <CharBarIcon />
        <WifiIcon />
        <BatteryIcon />
      </div>
    </div>
  );
}

export default CellBar;
