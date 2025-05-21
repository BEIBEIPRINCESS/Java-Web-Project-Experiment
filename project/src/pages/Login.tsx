import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import LoginForm from '../components/Authentication/LoginForm';

const Login: React.FC = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  // If user is already authenticated, redirect to team page
  useEffect(() => {
    if (user.isAuthenticated) {
      navigate('/team');
    }
  }, [user.isAuthenticated, navigate]);

  return (
    <div>
      <LoginForm />
    </div>
  );
};

export default Login;