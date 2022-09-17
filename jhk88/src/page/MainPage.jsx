import React, { useState } from 'react';
import TopBar from '../components/TopBar';
import CellBar from '../components/CellBar';
import Timeline from './Timeline';
import Search from './Search';
import Mail from './Mail';
import Quil from '../components/icons/Twitter_Quil.png';
import Envelope from '../components/icons/EnvelopeAddIcon';
import userinfo from '../data/userinfo';
import * as STATE from '../data/state';

function MainPage({
  setIsWrite,
  setCurrState,
  currState,
  setCurrUser,
  setNavIndex,
}) {
  const [onSearch, setOnSearch] = useState(false);

  function setUserProfile() {
    setCurrState(STATE.profile);
    setNavIndex(-1);
  }
  return (
    <>
      <CellBar isProfile={currState === STATE.profile} />
      {currState !== STATE.profile && (
        <>
          <TopBar
            user={userinfo}
            state={currState}
            onSearch={onSearch}
            setOnSearch={setOnSearch}
          />
          <div className='overflow-y-auto mb-[30px] relative'>
            {currState === STATE.home && (
              <Timeline
                setUserProfile={setUserProfile}
                setCurrUser={setCurrUser}
                userid={userinfo.info.id}
              />
            )}
            {currState === STATE.search && <Search onSearch={onSearch} />}
            {currState === STATE.mail && <Mail onSearch={onSearch} />}
          </div>
        </>
      )}
      <div className='absolute text-center right-[20px] bottom-[65px] bg-transparent w-[60px] h-[60px] rounded-full overflow-hidden drop-shadow-xl '>
        {currState !== STATE.mail && (
          <button
            onClick={() => {
              setIsWrite(STATE.write_tweet);
              setNavIndex(-1);
            }}
          >
            <img alt='write tweet' src={Quil} />
          </button>
        )}
        {currState === STATE.mail && (
          <div className='w-[60px] h-[60px] bg-sky-500 flex justify-center items-center'>
            <Envelope />
          </div>
        )}
      </div>
    </>
  );
}

export default MainPage;
