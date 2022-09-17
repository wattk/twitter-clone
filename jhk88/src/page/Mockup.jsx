import React, { useState } from 'react';
import SideBar from '../components/SideBar';
import userinfo from '../data/userinfo';
import MainPage from './MainPage';
import FullPage from './FullPage';
import BottomBar from '../components/BottomBar';
import * as STATE from '../data/state';

function Mockup() {
  const [currState, setCurrState] = useState(STATE.home);
  const [currUser, setCurrUser] = useState(userinfo);
  const [navIndex, setNavIndex] = useState(0);
  const [isWrite, setIsWrite] = useState(0);

  function setUserProfile() {
    setCurrState(STATE.profile);
    setNavIndex(-1);
  }
  function setProfile() {
    const drawer = document.getElementById('my-drawer');
    drawer.click();
    setUserProfile();
    setCurrUser(userinfo);
  }
  return (
    <div className='flex mt-16'>
      <div className='mockup-phone min-w-[442px] min-h-[765px]'>
        <div className='camera'></div>
        <div className='display drawer h-[735px]'>
          <input id='my-drawer' type='checkbox' className='drawer-toggle' />
          <div className='artboard artboard-demo phone-3 relative drawer-content'>
            <div className='flex flex-col w-full h-full'>
              {!isWrite && (
                <>
                  <MainPage
                    setIsWrite={setIsWrite}
                    setCurrState={setCurrState}
                    currState={currState}
                    setCurrUser={setCurrUser}
                    setNavIndex={setNavIndex}
                  />
                  <BottomBar
                    setState={setCurrState}
                    navIndex={navIndex}
                    setNavIndex={setNavIndex}
                  />
                </>
              )}
              {isWrite !== 0 && (
                <FullPage
                  isWrite={isWrite}
                  setIsWrite={setIsWrite}
                  currUser={currUser}
                  setNavIndex={setNavIndex}
                />
              )}
            </div>
          </div>
          <SideBar user={userinfo} setProfile={setProfile} />
        </div>
      </div>
    </div>
  );
}

export default Mockup;
