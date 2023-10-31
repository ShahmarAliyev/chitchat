'use client';

import React from 'react';
import Register from '@/components/auth/register';
import Dashboard from '@/components/dashboard/dashboard';

const Home = () => {
  const userName = '';
  return (
    <div>
      {userName && <Dashboard />}
      {!userName && <Register />}
    </div>
  );
};

export default Home;
