import React from 'react';
import { LogOut, User } from 'lucide-react';

interface HeaderProps {
  patientName: string;
  onLogout: () => void;
}

export function Header({ patientName, onLogout }: HeaderProps) {
  return (
    <header className="bg-white shadow-sm px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <User className="w-6 h-6 text-blue-600" />
          <h1 className="text-xl font-semibold text-gray-900">{patientName}</h1>
        </div>
        <button
          onClick={onLogout}
          className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-red-50 text-red-600 hover:bg-red-100 transition-colors"
          aria-label="Logout"
        >
          <LogOut className="w-5 h-5" />
          <span>Logout</span>
        </button>
      </div>
    </header>
  );
}