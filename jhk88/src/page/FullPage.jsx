import React from 'react';
import CellBar from '../components/CellBar';
import WriteTweet from './WriteTweet';
import * as STATE from '../data/state';

function FullPage({ isWrite, setIsWrite, setNavIndex, setCurrState }) {
  return (
    <div className='flex flex-col w-full h-full'>
      <CellBar isProfile={false} />
      {isWrite === STATE.write_tweet && (
        <WriteTweet
          setIsWrite={() => {
            setIsWrite(0);
            setCurrState(STATE.home);
            setNavIndex(0);
          }}
        />
      )}
    </div>
  );
}

export default FullPage;
