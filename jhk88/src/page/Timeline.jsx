import React, { useContext } from 'react';
import Post from '../components/timeline/Post';
import { DataContext } from '../App';

function Timeline({ setUserProfile, setCurrUser }) {
  let datas = useContext(DataContext);
  return datas.map((data, index) => (
    <div key={index}>
      <Post
        user={data}
        setUserProfile={setUserProfile}
        setCurrUser={setCurrUser}
      />
    </div>
  ));
}

export default Timeline;
