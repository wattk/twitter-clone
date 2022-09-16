import React, { useContext, useState } from 'react';
import XMarkIcon from '../components/icons/XMarkIcon';
import ChevronDownIcon from '../components/icons/ChevronDownIcon';
import { DataContext } from '../context/DataContextProvider';
import { faker } from '@faker-js/faker';

function WriteTweet({ user, setIsWrite }) {
  const [content, setContent] = useState(null);
  const { data } = useContext(DataContext);

  function addTweet() {
    if (content.length < 1) {
      return;
    }
    const newTweet = { text: content, date: faker.date.between() };

    if (!user.tweets) user.tweets = [];
    user.tweets = [...user.tweets, newTweet];

    const newData = {
      activities: {
        replyCount: faker.datatype.number({ max: 3 }),
        retweetCount: faker.datatype.number({ max: 1 }),
        heartCount: faker.datatype.number({ max: 3 }),
      },
      info: {
        date: newTweet.date,
        name: user.info.name,
        id: user.info.id,
      },
      url: user.url,
      follows: user.follows,
      profile: user.profile,
      content: newTweet.text,
    };
    data.unshift(newData);
    setIsWrite();
  }

  return (
    <div className='drawer'>
      <input id='select-toggle' type='checkbox' className='drawer-toggle' />
      <div className='drawer-content px-2 '>
        <div className='flex justify-between py-4 px-2 mt-2'>
          <button onClick={setIsWrite}>
            <XMarkIcon />
          </button>
          <button
            disabled={!content}
            className={`text-lg tracking-wide font-medium px-4 py-1 bg-sky-${
              !content ? '400' : '500'
            } text-white rounded-3xl`}
            type='submit'
            onClick={addTweet}
          >
            Tweet
          </button>
        </div>
        <div className='flex'>
          <div>
            <img
              className='mask mask-circle w-[40px]'
              src={user.url.url}
              alt='profile'
            />
          </div>
          <div className='ml-3 w-[350px] h-[300px]'>
            <label htmlFor='select-toggle' className='drawer-button'>
              <div className='px-3 py-1 border-[1px] rounded-3xl border-sky-400 text-sky-400 w-[140px]'>
                <div className='flex gap-1 items-center font-medium'>
                  <p> All Followers </p>
                  <ChevronDownIcon />
                </div>
              </div>
            </label>
            <textarea
              id='textArea'
              className='mt-2 w-full placeholder:font-medium placeholder:text-xl focus:outline-none resize-none h-[155px]'
              placeholder="What's happening?"
              onChange={(e) => setContent(e.target.value)}
            />
          </div>
        </div>
        {/* <div className='bg-yellow-300 w-full h-[100px]'>
          <div>inside</div>
        </div> */}
      </div>
      <div className='drawer-side'>
        <label
          htmlFor='select-toggle'
          className='drawer-overlay drawer-bottom'
        ></label>
        <ul className='menu p-4 w-full h-[300px] rounded-t-3xl bg-base-100 text-base-content text-xl'>
          <li className='pt-7 text-2xl font-bold tracking-wide pb-2 border-b-2  text-center'>
            Choose audience
          </li>
          <li className='py-4 border-b-2'>All Followers</li>
          <li className='py-4'>Twitter Circle</li>
        </ul>
      </div>
    </div>
  );
}

export default WriteTweet;
