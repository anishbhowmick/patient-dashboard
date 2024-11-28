import React, { useState } from 'react';
import { Header } from './components/layout/Header';
import { PersonalInfoCard } from './components/dashboard/PersonalInfoCard';
import { MedicalHistory } from './components/dashboard/MedicalHistory';
import { HealthMetricsForm } from './components/dashboard/HealthMetricsForm';
import { DiagnosisPanel } from './components/dashboard/DiagnosisPanel';
import { LogoutModal } from './components/ui/LogoutModal';
import { DashboardControls } from './components/dashboard/DashboardControls';

// Mock data
const mockPatient = {
  fullName: "Sarah Johnson",
  age: 32,
  bloodGroup: "O+",
  primaryContact: "+1 (555) 123-4567",
  emergencyContact: "+1 (555) 987-6543"
};

const mockMedicalHistory = {
  history: [
    "Appendectomy (2018)",
    "Seasonal allergies",
    "Migraine history"
  ],
  allergies: [
    { name: "Penicillin", severity: "High" },
    { name: "Pollen", severity: "Medium" },
    { name: "Latex", severity: "Low" }
  ],
  medications: [
    { name: "Zyrtec", dosage: "10mg", schedule: "Once daily" },
    { name: "Sumatriptan", dosage: "50mg", schedule: "As needed for migraines" }
  ]
};

const mockDiagnosis = {
  diagnosis: "Seasonal allergic rhinitis with occasional migraine episodes",
  timestamp: "2024-03-15T10:30:00",
  physician: "Dr. Michael Chen",
  nextAppointment: "2024-04-15T14:00:00"
};

function App() {
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);
  const [isAllExpanded, setIsAllExpanded] = useState(true);
  const [healthMetrics, setHealthMetrics] = useState([
    {
      systolicBP: 120,
      diastolicBP: 80,
      bloodSugar: 95,
      timestamp: "2024-03-14T09:00:00"
    },
    {
      systolicBP: 118,
      diastolicBP: 78,
      bloodSugar: 92,
      timestamp: "2024-03-15T09:30:00"
    }
  ]);

  const handleLogout = () => {
    console.log("Logging out...");
    setIsLogoutModalOpen(false);
  };

  const handleHealthMetricSubmit = (newMetric) => {
    setHealthMetrics([...healthMetrics, newMetric]);
  };

  const toggleAllSections = () => {
    setIsAllExpanded(!isAllExpanded);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header 
        patientName={mockPatient.fullName}
        onLogout={() => setIsLogoutModalOpen(true)}
      />
      
      <main className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        {/* Personal Information Card - Full Width */}
        <div className="mb-6">
          <PersonalInfoCard info={mockPatient} />
        </div>

        {/* Dashboard Controls */}
        <div className="mb-6">
          <DashboardControls 
            isAllExpanded={isAllExpanded}
            onToggleAll={toggleAllSections}
          />
        </div>
        
        {/* Collapsible Sections */}
        <div className="space-y-6">
          <MedicalHistory 
            {...mockMedicalHistory} 
            isExpanded={isAllExpanded}
            onToggle={() => {}}
          />
          
          <HealthMetricsForm
            onSubmit={handleHealthMetricSubmit}
            recentMetrics={healthMetrics}
            isExpanded={isAllExpanded}
            onToggle={() => {}}
          />
          
          <DiagnosisPanel 
            info={mockDiagnosis} 
            isExpanded={isAllExpanded}
            onToggle={() => {}}
          />
        </div>
      </main>

      <LogoutModal
        isOpen={isLogoutModalOpen}
        onClose={() => setIsLogoutModalOpen(false)}
        onConfirm={handleLogout}
      />
    </div>
  );
}

export default App;