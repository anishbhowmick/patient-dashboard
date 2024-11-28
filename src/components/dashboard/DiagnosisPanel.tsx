import React from 'react';
import { Stethoscope, Calendar, ChevronDown, ChevronUp } from 'lucide-react';

interface DiagnosisInfo {
  diagnosis: string;
  timestamp: string;
  physician: string;
  nextAppointment: string;
}

interface DiagnosisPanelProps {
  info: DiagnosisInfo;
  isExpanded: boolean;
  onToggle: () => void;
}

export function DiagnosisPanel({ info, isExpanded, onToggle }: DiagnosisPanelProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between text-lg font-semibold text-gray-900 mb-4"
        aria-expanded={isExpanded}
      >
        <div className="flex items-center space-x-2">
          <Stethoscope className="w-5 h-5 text-blue-600" />
          <span>Current Diagnosis</span>
        </div>
        {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
      </button>

      {isExpanded && (
        <div className="space-y-4">
          <div>
            <p className="text-sm text-gray-500">Latest Diagnosis</p>
            <p className="text-gray-900 mt-1">{info.diagnosis}</p>
            <p className="text-sm text-gray-500 mt-1">
              {new Date(info.timestamp).toLocaleDateString()} at {new Date(info.timestamp).toLocaleTimeString()}
            </p>
          </div>

          <div>
            <p className="text-sm text-gray-500">Treating Physician</p>
            <p className="text-gray-900 mt-1">{info.physician}</p>
          </div>

          <div className="flex items-center space-x-2 text-blue-600">
            <Calendar className="w-5 h-5" />
            <div>
              <p className="text-sm font-medium">Next Appointment</p>
              <p className="text-gray-900">{new Date(info.nextAppointment).toLocaleDateString()}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}