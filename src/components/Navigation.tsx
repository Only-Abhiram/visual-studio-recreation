import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-sm border-b border-border z-50 h-[var(--nav-height)]">
      <div className="container mx-auto px-6 h-full flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <Link to="/" className="text-xl font-bold text-foreground">
            Playground
          </Link>
          
          <div className="flex items-center space-x-1">
            <Link
              to="/"
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                isActive('/') && location.pathname === '/'
                  ? 'text-foreground bg-accent' 
                  : 'text-muted-foreground hover:text-foreground hover:bg-accent/50'
              }`}
            >
              Create
            </Link>
            <Link
              to="/templates"
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                isActive('/templates')
                  ? 'text-foreground bg-accent' 
                  : 'text-muted-foreground hover:text-foreground hover:bg-accent/50'
              }`}
            >
              Templates
            </Link>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <button className="btn-secondary">
            Log In
          </button>
          <button className="btn-primary">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;