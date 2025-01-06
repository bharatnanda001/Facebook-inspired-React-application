import React from 'react';
import { Users, Bookmark, Calendar, Video, ShoppingBag } from 'lucide-react';

const menuItems = [
  { icon: Users, text: 'Friends' },
  { icon: Bookmark, text: 'Saved' },
  { icon: Calendar, text: 'Events' },
  { icon: Video, text: 'Watch' },
  { icon: ShoppingBag, text: 'Marketplace' },
];

export default function Sidebar() {
  return (
    <div className="hidden lg:block fixed left-0 top-14 w-[320px] h-screen p-4 overflow-y-auto">
      {menuItems.map((item, index) => (
        <div
          key={index}
          className="flex items-center space-x-3 p-3 hover:bg-gray-100 rounded-xl cursor-pointer"
        >
          <item.icon className="h-6 w-6 text-blue-500" />
          <span className="text-gray-700">{item.text}</span>
        </div>
      ))}
      
      <hr className="my-4" />
      
      <h3 className="text-gray-500 font-semibold mb-2">Your Shortcuts</h3>
      <div className="space-y-2">
        {['Gaming Group', 'Tech News', 'Web Development', 'Travel Photos'].map((group, index) => (
          <div
            key={index}
            className="flex items-center space-x-3 p-3 hover:bg-gray-100 rounded-xl cursor-pointer"
          >
            <div className="w-6 h-6 bg-gray-200 rounded"></div>
            <span className="text-gray-700">{group}</span>
          </div>
        ))}
      </div>
    </div>
  );
}