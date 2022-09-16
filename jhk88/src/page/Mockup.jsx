import React, { useState } from 'react';
import TopBar from '../components/TopBar';
import CellBar from '../components/CellBar';
import BottomBar from '../components/BottomBar';
import SideBar from '../components/SideBar';
import Timeline from './Timeline';
import Search from './Search';
import Mail from './Mail';
import ProfilePage from './ProfilePage';
import { faker } from '@faker-js/faker';
import Quil from '../components/icons/Twitter_Quil.png';
import Envelope from '../components/icons/EnvelopeAddIcon';
import WriteTweet from './WriteTweet';

const userinfo = {
  info: { id: 'spongebob_0223', name: 'SpongeBob' },
  list: [],
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
  tweets: [],
};

const profile = 'PROFILE';
const search = 'SEARCH';
const mail = 'MAIL';
const home = 'HOME';
const write_tweet = 1;
const write_mail = 2;

function Mockup() {
  const [currState, setCurrState] = useState(home);
  const [onSearch, setOnSearch] = useState(false);
  const [currUser, setCurrUser] = useState(userinfo);
  const [navIndex, setNavIndex] = useState(0);
  const [isWrite, setIsWrite] = useState(0);

  function setUserProfile() {
    setCurrState(profile);
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
              <CellBar isProfile={currState === profile} />
              {!isWrite && currState === profile && (
                <ProfilePage selectedUser={currUser} user={userinfo} />
              )}
              {!isWrite && currState !== profile && (
                <>
                  <TopBar
                    user={userinfo}
                    state={currState}
                    onSearch={onSearch}
                    setOnSearch={setOnSearch}
                  />
                  <div className='overflow-y-auto mb-[50px] relative'>
                    {currState === home && (
                      <Timeline
                        setUserProfile={setUserProfile}
                        setCurrUser={setCurrUser}
                        userid={userinfo.info.id}
                      />
                    )}
                    {currState === search && <Search onSearch={onSearch} />}
                    {currState === mail && <Mail onSearch={onSearch} />}
                  </div>
                </>
              )}
              {isWrite === write_tweet && (
                <WriteTweet
                  user={userinfo}
                  setIsWrite={() => {
                    setIsWrite(0);
                    setCurrState(home);
                    setNavIndex(0);
                  }}
                />
              )}
            </div>
            {!isWrite && (
              <>
                <div className='absolute text-center right-[20px] bottom-[65px] bg-transparent w-[60px] h-[60px] rounded-full overflow-hidden drop-shadow-xl '>
                  {currState !== mail && (
                    <button
                      onClick={() => {
                        setIsWrite(write_tweet);
                        setNavIndex(-1);
                      }}
                    >
                      <img alt='write tweet' src={Quil} />
                    </button>
                  )}
                  {currState === mail && (
                    <button
                      className='w-[60px] h-[60px] bg-sky-500 flex justify-center items-center'
                      onClick={() => {
                        setIsWrite(write_mail);
                        setNavIndex(-1);
                      }}
                    >
                      <Envelope />
                    </button>
                  )}
                </div>
                <BottomBar
                  setState={setCurrState}
                  setOnSearch={setOnSearch}
                  navIndex={navIndex}
                  setNavIndex={setNavIndex}
                />
              </>
            )}
          </div>
          <SideBar user={userinfo} setProfile={setProfile} />
        </div>
      </div>
    </div>
  );
}

export default Mockup;
