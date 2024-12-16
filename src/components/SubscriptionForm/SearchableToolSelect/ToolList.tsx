import React from 'react';
import { Check } from 'lucide-react';
import { Tool } from './types';

interface ToolListProps {
  tools: Tool[];
  selectedTool: string;
  onSelect: (tool: string) => void;
}

export default function ToolList({ tools, selectedTool, onSelect }: ToolListProps) {
  if (tools.length === 0) {
    return (
      <div className="p-4 text-center text-gray-400">
        No tools found matching your search
      </div>
    );
  }

  return (
    <div className="max-h-60 overflow-y-auto">
      {tools.map((tool) => (
        <button
          key={tool.name}
          type="button"
          onClick={() => onSelect(tool.name)}
          className={`w-full flex items-center justify-between px-4 py-2 hover:bg-navy-800 transition-colors ${
            selectedTool === tool.name ? 'bg-navy-800' : ''
          }`}
        >
          <div>
            <p className="text-white text-left">{tool.name}</p>
            <p className="text-gray-400 text-sm text-left">{tool.category}</p>
          </div>
          {selectedTool === tool.name && (
            <Check className="w-5 h-5 text-amber-500" />
          )}
        </button>
      ))}
    </div>
  );
}