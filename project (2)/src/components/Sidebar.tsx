import React from 'react';
import { Home, TrendingUp, Shuffle, Award, Tag, Users, Settings } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const navigation = [
    { name: 'Latest', icon: Home },
    { name: 'Viral', icon: TrendingUp },
    { name: 'Random', icon: Shuffle },
    { name: 'Rankings', icon: Award },
    { name: 'Categories', icon: Tag },
    { name: 'Communities', icon: Users },
    { name: 'Settings', icon: Settings },
  ];

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}
      
      <aside
        className={`fixed top-0 left-0 z-40 w-64 h-screen pt-16 pb-4 bg-white border-r transition-transform duration-300 lg:translate-x-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="h-full px-3 overflow-y-auto">
          <ul className="space-y-2 font-medium">
            {navigation.map((item) => (
              <li key={item.name}>
                <a
                  href="#"
                  className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group"
                >
                  <item.icon className="w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900" />
                  <span className="ml-3">{item.name}</span>
                </a>
              </li>
            ))}
          </ul>

          <div className="pt-4 mt-4 space-y-2 border-t border-gray-200">
            <div className="px-3 py-2">
              <h3 className="mb-2 text-sm font-medium text-gray-500">TOP CATEGORIES</h3>
              {['Confessions', 'Stories', 'Secrets', 'Life', 'Relationships'].map((category) => (
                <a
                  key={category}
                  href="#"
                  className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100"
                >
                  <span className="w-2 h-2 rounded-full bg-blue-500 mr-3"></span>
                  <span className="text-sm">{category}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}