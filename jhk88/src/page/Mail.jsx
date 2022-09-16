import React from 'react';

function Mail({ onSearch }) {
  return (
    <>
      {!onSearch && (
        <div className='mt-[60%] p-4'>
          <div className='font-semibold text-3xl p-4'>
            Welcome to your inbox!
          </div>
          <div className='text-md px-4 text-slate-500'>
            Drop a line, share Tweets and more with private conversations
            between you and others on Twitter.
          </div>
          <button className='bg-sky-500 px-5 py-2 text-white font-bold m-4 tracking-wide rounded-[50px]'>
            Write a message
          </button>
        </div>
      )}
      {onSearch && (
        <div className='text-center text-sm font-semibold mt-6'>
          Try searching for people, topics or keywords
        </div>
      )}
    </>
  );
}

export default Mail;
