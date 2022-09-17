import React, { useState } from 'react';
import CellBar from '../components/CellBar';
import ProfilePage from './ProfilePage';
import WriteTweet from './WriteTweet';
import * as STATE from '../data/state';

function FullPage({ isWrite, setIsWrite, currUser, setNavIndex }) {
  const [currState, setCurrState] = useState(STATE.home);
  return (
    <div className='flex flex-col w-full h-full'>
      <CellBar isProfile={currState === STATE.profile} />
      {currState === STATE.profile && <ProfilePage selectedUser={currUser} />}
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
