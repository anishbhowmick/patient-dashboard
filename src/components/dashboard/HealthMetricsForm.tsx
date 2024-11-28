import React, { useState } from 'react';
import { LineChart, Activity, ChevronDown, ChevronUp } from 'lucide-react';

interface HealthMetric {
  systolicBP: number;
  diastolicBP: number;
  bloodSugar: number;
  timestamp: string;
}

interface HealthMetricsFormProps {
  onSubmit: (data: HealthMetric) => void;
  recentMetrics: HealthMetric[];
  isExpanded: boolean;
  onToggle: () => void;
}

export function HealthMetricsForm({ onSubmit, recentMetrics, isExpanded, onToggle }: HealthMetricsFormProps) {
  const [formData, setFormData] = useState({
    systolicBP: '',
    diastolicBP: '',
    bloodSugar: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      systolicBP: Number(formData.systolicBP),
      diastolicBP: Number(formData.diastolicBP),
      bloodSugar: Number(formData.bloodSugar),
      timestamp: new Date().toISOString()
    });
    setFormData({ systolicBP: '', diastolicBP: '', bloodSugar: '' });
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between text-lg font-semibold text-gray-900 mb-4"
        aria-expanded={isExpanded}
      >
        <div className="flex items-center space-x-2">
          <Activity className="w-5 h-5 text-blue-600" />
          <span>Daily Health Metrics</span>
        </div>
        {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
      </button>

      {isExpanded && (
        <>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="systolicBP" className="block text-sm font-medium text-gray-700">
                  Systolic BP (mmHg)
                </label>
                <input
                  type="number"
                  id="systolicBP"
                  value={formData.systolicBP}
                  onChange={(e) => setFormData({ ...formData, systolicBP: e.target.value })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                  min="0"
                  max="300"
                />
              </div>
              <div>
                <label htmlFor="diastolicBP" className="block text-sm font-medium text-gray-700">
                  Diastolic BP (mmHg)
                </label>
                <input
                  type="number"
                  id="diastolicBP"
                  value={formData.diastolicBP}
                  onChange={(e) => setFormData({ ...formData, diastolicBP: e.target.value })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                  min="0"
                  max="200"
                />
              </div>
            </div>

            <div>
              <label htmlFor="bloodSugar" className="block text-sm font-medium text-gray-700">
                Blood Sugar (mg/dL)
              </label>
              <input
                type="number"
                id="bloodSugar"
                value={formData.bloodSugar}
                onChange={(e) => setFormData({ ...formData, bloodSugar: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
                min="0"
                max="600"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Submit Reading
            </button>
          </form>

          <div className="mt-6">
            <div className="flex items-center space-x-2 mb-4">
              <LineChart className="w-5 h-5 text-blue-600" />
              <h3 className="text-md font-medium text-gray-900">Recent Readings</h3>
            </div>
            <div className="space-y-3">
              {recentMetrics.slice(-3).map((metric, index) => (
                <div key={index} className="p-3 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-600">
                    {new Date(metric.timestamp).toLocaleDateString()} {new Date(metric.timestamp).toLocaleTimeString()}
                  </p>
                  <div className="mt-1 grid grid-cols-2 gap-2">
                    <p className="text-sm">
                      <span className="font-medium">BP:</span> {metric.systolicBP}/{metric.diastolicBP} mmHg
                    </p>
                    <p className="text-sm">
                      <span className="font-medium">Sugar:</span> {metric.bloodSugar} mg/dL
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}