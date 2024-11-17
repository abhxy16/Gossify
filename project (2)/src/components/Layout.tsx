import React from 'react';
import { Bell, Menu, Search, User } from 'lucide-react';
import Sidebar from './Sidebar';
import AuthModal from './auth/AuthModal';

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="fixed top-0 w-full bg-white border-b z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className="p-2 hover:bg-gray-100 rounded-lg lg:hidden"
              >
                <Menu className="w-6 h-6" />
              </button>
              <h1 className="text-xl font-bold">Gossify</h1>
            </div>
            
            <div className="hidden md:flex items-center flex-1 max-w-xl mx-8">
              <div className="w-full relative">
                <input
                  type="text"
                  placeholder="Search posts..."
                  className="w-full px-4 py-2 rounded-lg border bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <Search className="absolute right-3 top-2.5 w-5 h-5 text-gray-400" />
              </div>
            </div>

            <div className="flex items-center gap-4">
              <button className="p-2 hover:bg-gray-100 rounded-lg relative">
                <Bell className="w-6 h-6" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <button 
                onClick={() => setIsAuthModalOpen(true)}
                className="p-2 hover:bg-gray-100 rounded-lg"
              >
                <User className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

      <main className="pt-16 lg:pl-64">
        <div className="container mx-auto px-4 py-8">
          {children}
        </div>
      </main>

      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={() => setIsAuthModalOpen(false)} 
      />
    </div>
  );
}