import React from 'react';
import { Phone, User2, PhoneCall, Calendar, Droplet } from 'lucide-react';

interface PersonalInfo {
  fullName: string;
  age: number;
  bloodGroup: string;
  primaryContact: string;
  emergencyContact: string;
}

export function PersonalInfoCard({ info }: { info: PersonalInfo }) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">Personal Information</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="flex items-center space-x-3">
          <User2 className="w-5 h-5 text-blue-600" />
          <div>
            <p className="text-sm text-gray-500">Full Name</p>
            <p className="text-gray-900 font-medium">{info.fullName}</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-3">
          <Calendar className="w-5 h-5 text-blue-600" />
          <div>
            <p className="text-sm text-gray-500">Age</p>
            <p className="text-gray-900 font-medium">{info.age} years</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-3">
          <Droplet className="w-5 h-5 text-red-600" />
          <div>
            <p className="text-sm text-gray-500">Blood Group</p>
            <p className="text-gray-900 font-medium">{info.bloodGroup}</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-3">
          <Phone className="w-5 h-5 text-blue-600" />
          <div>
            <p className="text-sm text-gray-500">Primary Contact</p>
            <p className="text-gray-900 font-medium">{info.primaryContact}</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-3">
          <PhoneCall className="w-5 h-5 text-red-600" />
          <div>
            <p className="text-sm text-gray-500">Emergency Contact</p>
            <p className="text-gray-900 font-medium">{info.emergencyContact}</p>
          </div>
        </div>
      </div>
    </div>
  );
}