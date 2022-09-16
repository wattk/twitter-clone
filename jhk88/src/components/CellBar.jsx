import React from 'react';
import BatteryIcon from './icons/BatteryIcon';
import WifiIcon from './icons/WifiIcon';
import CharBarIcon from './icons/CharBarIcon';

function CellBar({ isProfile }) {
  const time = new Date();
  const fontColor = isProfile ? 'text-slate-200' : 'text-black';
  return (
    <div className='flex '>
      <div className={`w-2/4 pl-10 font-semibold ${fontColor}`}>
        {time.getHours()}:
        {time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes()}
      </div>
      <div
        className={`w-2/4 flex justify-end items-center gap-2 pr-6 ${fontColor}`}
      >
        <CharBarIcon />
        <WifiIcon />
        <BatteryIcon />
      </div>
    </div>
  );
}

export default CellBar;
