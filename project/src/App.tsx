import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Login from './pages/Login';
import TeamOverview from './pages/TeamOverview';
import MemberProfile from './pages/MemberProfile';
import ProjectProgress from './pages/ProjectProgress';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/team" element={<TeamOverview />} />
          <Route path="/team/:id" element={<MemberProfile />} />
          <Route path="/project" element={<ProjectProgress />} />
          <Route path="/" element={<Navigate to="/team" replace />} />
          <Route path="*" element={<Navigate to="/team" replace />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;