import React from 'react';

function UserInfoBar({ info, tweetDate }) {
  const infoDate = new Date(tweetDate);
  const currTime = new Date();
  const year = currTime.getFullYear() - infoDate.getFullYear();
  const month = currTime.getMonth() - infoDate.getMonth();
  const day = currTime.getDate() - infoDate.getDate();
  const hour = currTime.getHours() - infoDate.getHours();
  const minute = currTime.getMinutes() - infoDate.getMinutes();
  const second = currTime.getSeconds() - infoDate.getSeconds();
  function calcDate() {
    if (year > 0)
      return (
        infoDate.getFullYear() +
        '.' +
        infoDate.toLocaleString('default', { month: 'short' }) +
        '.' +
        infoDate.getDate()
      );
    if (month > 0 || day > 7) {
      return (
        infoDate.toLocaleString('default', { month: 'short' }) +
        ' ' +
        infoDate.getDate()
      );
    } else if (day < 8 && day > 0) {
      return `${day}d`;
    } else if (hour > 0) {
      return `${hour}h`;
    } else if (minute > 0) {
      return `${minute}m`;
    } else {
      return `${second}s`;
    }
  }
  const date = calcDate();
  return (
    <div className='flex pt-2 w-[304px] items-baseline mr-1'>
      <div className='whitespace-nowrap truncate'>
        <span className='text-lg font-semibold'>{info.name}</span>
        <span className='text-md pl-1 text-slate-600'>@{info.userId}</span>
      </div>
      <div
        className='text-md text-slate-600'
        style={{ minWidth: `${(date.length + 2) * 10}px` }}
      >
        <span className='px-1'>•</span>
        {date}
      </div>
    </div>
  );
}

export default UserInfoBar;
