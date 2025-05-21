import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { BookOpen, Users, BarChart3, LogOut } from 'lucide-react';

const Header: React.FC = () => {
  const { user, logout } = useAuth();
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path ? 'text-blue-500 border-b-2 border-blue-500' : '';
  };

  const handleLogout = () => {
    logout();
  };

  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <BookOpen className="h-8 w-8 text-blue-500" />
              <span className="ml-2 text-xl font-bold text-gray-800">仓库管理系统</span>
            </Link>
          </div>
          
          <div className="flex items-center">
            <nav className="hidden md:ml-6 md:flex space-x-8">
              <Link 
                to="/team" 
                className={`inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-700 hover:text-blue-500 ${isActive('/team')}`}
              >
                <Users className="mr-1 h-4 w-4" />
                团队概况
              </Link>
              <Link 
                to="/project" 
                className={`inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-700 hover:text-blue-500 ${isActive('/project')}`}
              >
                <BarChart3 className="mr-1 h-4 w-4" />
                项目进度
              </Link>
            </nav>
            
            {user.isAuthenticated && (
              <div className="ml-6 flex items-center">
                <span className="text-sm text-gray-600 mr-4">
                  欢迎, <span className="font-semibold">{user.username}</span>
                </span>
                <button
                  onClick={handleLogout}
                  className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors"
                >
                  <LogOut className="mr-1 h-4 w-4" />
                  退出登录
                </button>
              </div>
            )}
          </div>
          
          <div className="flex items-center md:hidden">
            {/* 移动端菜单按钮 */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;