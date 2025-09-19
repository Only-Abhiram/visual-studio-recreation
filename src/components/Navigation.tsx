import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const Navigation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-sm border-b border-border z-50 p-2">
      <div className="container mx-auto px-6 h-full flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <Link to="/" className="text-xl font-bold text-foreground  hidden md:block">
            Lorem 
          </Link>
          
          <div className="flex items-center space-x-1">
            <Link
              to="/"
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                isActive('/') && location.pathname === '/'
                  ? 'text-foreground bg-slate-200 dark:bg-gray-900' 
                  : 'text-muted-foreground hover:text-foreground hover:bg-accent/50'
              }`}
            >
              Create
            </Link>
            <Link
              to="/templates"
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                isActive('/templates')
                  ? 'text-foreground bg-slate-200 dark:bg-gray-900' 
                  : 'text-muted-foreground hover:text-foreground hover:bg-accent/50'
              }`}
            >
              Templates
            </Link>
          </div>
        </div>
        
        <div className="flex items-center space-x-2">
          <ThemeToggle />
          <button className="btn-secondary " onClick={()=>{
            navigate('/signup');
          }}>
            Sign In
          </button>
          {/* <button className="btn-primary" onClick={()=>{
            navigate('/signup');
          }}>
            Sign Up
          </button> */}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;