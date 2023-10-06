import React, { useEffect, useState } from 'react';

const Dashboard = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = () => {
      fetch('http://localhost:5500/auth/login/success', {
        method: 'GET',
        credentials: 'include',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      })
        .then((response) => {
          if (response.status === 200) return response.json();
          throw new Error('authentication has been failed!');
        })
        .then((resObject) => {
          console.log(resObject);

          setUser(resObject.user);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getUser();
  }, []);
  return <div>Dashboard</div>;
};

export default Dashboard;
