
import React from 'react';

const AccountSignOut = () => {
  const handleSignOut = () => {

    alert('You have been signed out');
  };

  return (
    <div>
      <h1>Sign Out</h1>
      <button onClick={handleSignOut}>Sign Out</button>
    </div>
  );
};

export default AccountSignOut;
