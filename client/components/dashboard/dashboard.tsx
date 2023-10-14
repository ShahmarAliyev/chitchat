import React, { useEffect, useState } from 'react';

const DashboardComponent = () => {
  const handleLogout = async () => {
    window.location.href = 'http://localhost:5500/auth/logout';
  };

  return (
    <div>
      Dashboard
      <button
        onClick={() => {
          handleLogout();
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default DashboardComponent;
