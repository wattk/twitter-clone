import React from 'react';
import ActivityBar from './ActivityBar';
import parse from 'html-react-parser';

function replaceKeys(inputString, keys) {
  const matches = [...inputString.matchAll(new RegExp(keys, 'g'))];
  for (let i = 0; i < matches.length; i++) {
    inputString = inputString.replace(
      matches[i],
      '<button className="text-sky-500">' + matches[i] + '</button>'
    );
  }
  return inputString;
}
function replaceHttp(inputString, keys) {
  const matches = [...inputString.matchAll(new RegExp(keys, 'g'))];
  for (let i = 0; i < matches.length; i++) {
    inputString = inputString.replace(
      matches[i],
      `<a className="text-sky-500" href=${matches[i]} target="_blank">` +
        matches[i] +
        '</a>'
    );
  }
  return inputString;
}
function Content({ content, activities, user }) {
  let newContent = '';
  if (content) {
    newContent = replaceKeys(content, '[@#][\\w]+');
    newContent = replaceHttp(newContent, 'https?:\\S+');
  }

  return (
    <div className='mr-4'>
      <div className='pb-2'>{parse(newContent)}</div>
      <ActivityBar activities={activities} user={user} />
    </div>
  );
}

export default Content;
