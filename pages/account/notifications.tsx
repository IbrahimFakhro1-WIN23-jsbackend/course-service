
import React, { useState } from 'react';

const AccountNotifications = () => {
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = () => {

    setSubscribed(true);
  };

  const handleUnsubscribe = () => {

    setSubscribed(false);
  };

  return (
    <div>
      <h1>Account Notifications</h1>
      {subscribed ? (
        <button onClick={handleUnsubscribe}>Unsubscribe from Newsletter</button>
      ) : (
        <button onClick={handleSubscribe}>Subscribe to Newsletter</button>
      )}
    </div>
  );
};

export default AccountNotifications;
