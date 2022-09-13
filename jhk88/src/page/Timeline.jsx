import React, { useContext } from 'react';
import Post from '../components/timeline/Post';
import { DataContext } from '../App';

function Timeline() {
  const datas = useContext(DataContext);
  return datas.map((data, index) => (
    <div key={index}>
      <Post url={data.url} content={data.content} info={data.info} />
    </div>
  ));
}

export default Timeline;
