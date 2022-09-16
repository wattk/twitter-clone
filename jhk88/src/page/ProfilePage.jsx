import React from 'react';
import ProfileTabs from '../components/profile/ProfileTabs';
import ProfileUser from '../components/profile/ProfileUser';

function ProfilePage({ selectedUser, user }) {
  const filteredUser =
    selectedUser.info.id === user.info.id ? user : selectedUser;
  return (
    <>
      <ProfileUser selectedUser={filteredUser} user={user} />
      <ProfileTabs selectedUser={filteredUser} />
    </>
  );
}

export default ProfilePage;
