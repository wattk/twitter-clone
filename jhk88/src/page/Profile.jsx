import React from 'react';
import ProfileTabs from '../components/profile/ProfileTabs';
import UserProfile from '../components/profile/UserProfile';

function Profile({ selectedUser, user }) {
  return (
    <>
      <UserProfile selectedUser={selectedUser} user={user} />
      <ProfileTabs />
    </>
  );
}

export default Profile;
