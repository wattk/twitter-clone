import React, { useContext } from 'react';
import Post from '../components/Post';
import { DataContext } from '../App';
import TopBar from '../components/TopBar';
import CellBar from '../components/CellBar';
import BottomBar from '../components/BottomBar';
import SideBar from '../components/SideBar';

function Mockup() {
  const datas = useContext(DataContext);
  const userinfo = {
    id: 'spongebob_0223',
    name: 'SpongeBob',
    imgUrl: 'https://picsum.photos/200',
    following: Math.round(Math.random() * 100),
    followers: Math.round(Math.random() * 100),
  };

  return (
    <div className='flex mt-16'>
      <div className='mockup-phone min-w-[442px] h-[765px]'>
        <div className='camera'></div>
        <div className='display drawer h-[735px]'>
          <input id='my-drawer' type='checkbox' className='drawer-toggle' />
          <div className='artboard artboard-demo phone-3 relative drawer-content'>
            <div className='flex flex-col w-full h-full'>
              <CellBar />
              <TopBar user={userinfo} />
              <div className='overflow-y-auto mb-[50px]'>
                {datas.map((data, index) => (
                  <div key={index}>
                    <Post
                      url={data.url}
                      content={data.content}
                      info={data.info}
                    />
                  </div>
                ))}
              </div>
            </div>
            <BottomBar />
          </div>
          <SideBar user={userinfo} />
        </div>
      </div>
    </div>
  );
}

export default Mockup;
