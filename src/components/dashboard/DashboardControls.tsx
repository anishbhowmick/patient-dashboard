import React from 'react';
import { Maximize2, Minimize2 } from 'lucide-react';

interface DashboardControlsProps {
  isAllExpanded: boolean;
  onToggleAll: () => void;
}

export function DashboardControls({ isAllExpanded, onToggleAll }: DashboardControlsProps) {
  return (
    <button
      onClick={onToggleAll}
      className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors mb-4"
      aria-label={isAllExpanded ? "Collapse all sections" : "Expand all sections"}
    >
      {isAllExpanded ? (
        <>
          <Minimize2 className="w-4 h-4" />
          <span>Collapse All</span>
        </>
      ) : (
        <>
          <Maximize2 className="w-4 h-4" />
          <span>Expand All</span>
        </>
      )}
    </button>
  );
}