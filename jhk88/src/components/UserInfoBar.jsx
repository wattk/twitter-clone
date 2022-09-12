import React from 'react';

function UserInfoBar({ info }) {
  const infoDate = new Date(info.date);
  const currTime = new Date();
  const month = currTime.getMonth() - infoDate.getMonth();
  const day = currTime.getDay() - infoDate.getDay();
  const hour = currTime.getHours() - infoDate.getHours();
  const minute = currTime.getMinutes() - infoDate.getMinutes();
  const date = () => {
    if (month > 0 || day > 7) {
      return infoDate.getDate() + ' ' + infoDate.getTime();
    } else if (day < 8 && day > 0) {
      return `${day}days`;
    } else if (hour > 0) {
      return `${hour}h`;
    } else {
      return `${minute}m`;
    }
  };
  return (
    <div className='flex pt-2 w-[304px] items-baseline mr-1'>
      <div className='whitespace-nowrap truncate'>
        <span className='text-lg font-semibold'>{info.name}</span>
        <span className='text-md pl-1 text-slate-600'>@{info.id}</span>
      </div>
      <div className='text-md text-slate-600'>
        <span className='px-1'>•</span>
        {date()}
      </div>
    </div>
  );
}

export default UserInfoBar;
