import React, { useState } from 'react';
import TopBar from '../components/TopBar';
import CellBar from '../components/CellBar';
import BottomBar from '../components/BottomBar';
import SideBar from '../components/SideBar';
import Timeline from './Timeline';
import Search from './Search';
import Mail from './Mail';

function Mockup() {
  const [currState, setCurrState] = useState('HOME');
  const [onSearch, setOnSearch] = useState(false);
  const userinfo = {
    id: 'spongebob_0223',
    name: 'SpongeBob',
    imgUrl: 'https://picsum.photos/200',
    profImgUrl: 'https://picsum.photos/300',
    following: Math.round(Math.random() * 100),
    followers: Math.round(Math.random() * 100),
  };

  return (
    <div className='flex mt-16'>
      <div className='mockup-phone min-w-[442px] min-h-[765px]'>
        <div className='camera'></div>
        <div className='display drawer h-[735px]'>
          <input id='my-drawer' type='checkbox' className='drawer-toggle' />
          <div className='artboard artboard-demo phone-3 relative drawer-content'>
            <div className='flex flex-col w-full h-full'>
              <CellBar />
              <TopBar
                user={userinfo}
                state={currState}
                onSearch={onSearch}
                setOnSearch={setOnSearch}
              />
              <div className='overflow-y-auto mb-[50px]'>
                {currState === 'HOME' && <Timeline />}
                {currState === 'SEARCH' && <Search onSearch={onSearch} />}
                {currState === 'MAIL' && <Mail onSearch={onSearch} />}
              </div>
            </div>
            <BottomBar setState={setCurrState} setOnSearch={setOnSearch} />
          </div>
          <SideBar user={userinfo} />
        </div>
      </div>
    </div>
  );
}

export default Mockup;
