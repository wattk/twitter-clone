import React from 'react';
import ProfileTabs from '../components/profile/ProfileTabs';
import ProfileUser from '../components/profile/ProfileUser';
import userinfo from '../data/userinfo';

function ProfilePage({ selectedUser }) {
  const filteredUser =
    selectedUser.info.userId === userinfo.info.userId ? userinfo : selectedUser;
  return (
    <>
      <ProfileUser selectedUser={filteredUser} user={userinfo} />
      <ProfileTabs selectedUser={filteredUser} />
    </>
  );
}

export default ProfilePage;
