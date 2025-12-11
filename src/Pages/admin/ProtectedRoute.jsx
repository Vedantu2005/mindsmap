import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children, isLoggedIn }) => {
  // Accept either explicit isLoggedIn boolean or localStorage token
  const token = (() => {
    try {
      return localStorage.getItem('adminToken');
    } catch (err) {
      return null;
    }
  })();

  if (!isLoggedIn && !token) {
    return <Navigate to="/admin" replace />;
  }

  return children;
};

export default ProtectedRoute;