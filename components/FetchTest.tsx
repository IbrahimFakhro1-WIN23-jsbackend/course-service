import React, { useEffect } from 'react';

const FetchTest: React.FC = () => {
  useEffect(() => {
    fetch('http://localhost:5001/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query: '{ courses { id title } }' }),
      credentials: 'include', // Detta säkerställer att cookies skickas med förfrågan
    })
    .then(response => response.json())
    .then(data => console.log('Data received:', data))
    .catch(error => console.error('Error fetching data:', error));
  }, []);

  return <div>Check console for fetch result</div>;
};

export default FetchTest;
