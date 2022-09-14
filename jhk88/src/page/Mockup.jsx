import React, { useState } from 'react';
import TopBar from '../components/TopBar';
import CellBar from '../components/CellBar';
import BottomBar from '../components/BottomBar';
import SideBar from '../components/SideBar';
import Timeline from './Timeline';
import Search from './Search';
import Mail from './Mail';
import Profile from './Profile';
import { faker } from '@faker-js/faker';

const userinfo = {
  info: { id: 'spongebob_0223', name: 'SpongeBob' },
  url: {
    url: faker.image.cats(500, 500, true),
    profImgUrl: faker.image.cats(600, 600, true),
  },
  profile: {
    intro: faker.lorem.lines(),
    location: faker.address.cityName() + ', ' + faker.address.countryCode(),
    link: Math.round(Math.random()) ? faker.internet.domainName() : '',
  },
  follows: {
    following: Math.round(Math.random() * 100),
    followers: Math.round(Math.random() * 100),
  },
};

function Mockup() {
  const [currState, setCurrState] = useState('HOME');
  const [onSearch, setOnSearch] = useState(false);
  const [currUser, setCurrUser] = useState(userinfo);
  const [navIndex, setNavIndex] = useState(0);
  function setUserProfile() {
    setCurrState('PROFILE');
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
              <CellBar isProfile={currState === 'PROFILE'} />
              {currState === 'PROFILE' && (
                <Profile selectedUser={currUser} user={userinfo} />
              )}
              {currState !== 'PROFILE' && (
                <>
                  <TopBar
                    user={userinfo}
                    state={currState}
                    onSearch={onSearch}
                    setOnSearch={setOnSearch}
                  />
                  <div className='overflow-y-auto mb-[50px]'>
                    {currState === 'HOME' && (
                      <Timeline
                        setUserProfile={setUserProfile}
                        setCurrUser={setCurrUser}
                      />
                    )}
                    {currState === 'SEARCH' && <Search onSearch={onSearch} />}
                    {currState === 'MAIL' && <Mail onSearch={onSearch} />}
                  </div>
                  <div className='absolute right-[20px] bottom-[60px] bg-yellow-500 w-[100px] h-[50px]'>
                    icon
                  </div>
                </>
              )}
            </div>
            <BottomBar
              setState={setCurrState}
              setOnSearch={setOnSearch}
              navIndex={navIndex}
              setNavIndex={setNavIndex}
            />
          </div>
          <SideBar user={userinfo} setProfile={setProfile} />
        </div>
      </div>
    </div>
  );
}

export default Mockup;
