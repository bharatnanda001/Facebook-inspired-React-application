import React from 'react';
import { Search, Home, Users, Bell, MessageCircle, Menu } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-14">
          <div className="flex items-center space-x-4">
            <h1 className="text-blue-600 text-3xl font-bold">facebook</h1>
            <div className="hidden md:flex items-center bg-gray-100 rounded-full px-3 py-2">
              <Search className="h-5 w-5 text-gray-500" />
              <input
                type="text"
                placeholder="Search Facebook"
                className="bg-transparent outline-none ml-2 w-60"
              />
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-2">
            <NavIcon Icon={Home} active />
            <NavIcon Icon={Users} />
            <NavIcon Icon={MessageCircle} />
            <NavIcon Icon={Bell} />
          </div>
          
          <div className="flex items-center space-x-2">
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <Menu className="h-6 w-6" />
            </button>
            <img
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop"
              alt="Profile"
              className="h-8 w-8 rounded-full cursor-pointer"
            />
          </div>
        </div>
      </div>
    </nav>
  );
}

function NavIcon({ Icon, active = false }: { Icon: React.ElementType; active?: boolean }) {
  return (
    <div className={`p-2 cursor-pointer rounded-xl hover:bg-gray-100 ${
      active ? 'border-b-4 border-blue-500' : ''
    }`}>
      <Icon className={`h-6 w-6 ${active ? 'text-blue-500' : 'text-gray-600'}`} />
    </div>
  );
}