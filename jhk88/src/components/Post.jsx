import React from 'react';

function Post({ url }) {
  return (
    <div className='text-center bg-base-100 w-[95%] min-h-[200px]'>
      <img
        className='mask mask-circle w-[50px] mt-3 ml-2'
        src={url}
        alt='profilePicture'
      />
      <div></div>
      <f4>name</f4>
    </div>
  );
}

export default Post;
