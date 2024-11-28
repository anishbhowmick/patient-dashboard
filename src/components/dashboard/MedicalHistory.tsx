import React from 'react';
import { ChevronDown, ChevronUp, AlertTriangle } from 'lucide-react';

interface Allergy {
  name: string;
  severity: 'Low' | 'Medium' | 'High';
}

interface Medication {
  name: string;
  dosage: string;
  schedule: string;
}

interface MedicalHistoryProps {
  history: string[];
  allergies: Allergy[];
  medications: Medication[];
  isExpanded: boolean;
  onToggle: () => void;
}

export function MedicalHistory({ history, allergies, medications, isExpanded, onToggle }: MedicalHistoryProps) {
  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'Low': return 'bg-yellow-100 text-yellow-800';
      case 'Medium': return 'bg-orange-100 text-orange-800';
      case 'High': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between text-lg font-semibold text-gray-900 mb-4"
        aria-expanded={isExpanded}
      >
        <span>Medical History</span>
        {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
      </button>
      
      {isExpanded && (
        <div className="space-y-6">
          <div>
            <h3 className="text-md font-medium text-gray-900 mb-3">History</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              {history.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-md font-medium text-gray-900 mb-3">Allergies</h3>
            <div className="space-y-2">
              {allergies.map((allergy, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <AlertTriangle className="w-4 h-4 text-red-500" />
                  <span>{allergy.name}</span>
                  <span className={`px-2 py-1 rounded-full text-xs ${getSeverityColor(allergy.severity)}`}>
                    {allergy.severity}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-md font-medium text-gray-900 mb-3">Current Medications</h3>
            <div className="space-y-3">
              {medications.map((med, index) => (
                <div key={index} className="p-3 bg-gray-50 rounded-lg">
                  <p className="font-medium text-gray-900">{med.name}</p>
                  <p className="text-sm text-gray-600">Dosage: {med.dosage}</p>
                  <p className="text-sm text-gray-600">Schedule: {med.schedule}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}