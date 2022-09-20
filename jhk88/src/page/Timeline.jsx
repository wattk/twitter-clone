import React, { useContext } from 'react';
import Post from '../components/timeline/Post';
import { DataContext } from '../context/DataContextProvider';

function Timeline({ setUserProfile, setCurrUser, userid }) {
  const { data } = useContext(DataContext);

  return data.map((d, index) => (
    <div key={index}>
      <Post
        user={d}
        setUserProfile={setUserProfile}
        setCurrUser={setCurrUser}
        isUser={userid === d.info.userId}
      />
    </div>
  ));
}

export default Timeline;
