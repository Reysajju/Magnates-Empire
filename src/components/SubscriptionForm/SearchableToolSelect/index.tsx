import React, { useRef, useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { SearchableToolSelectProps } from './types';
import SearchInput from './SearchInput';
import ToolList from './ToolList';
import { useToolSearch } from './useToolSearch';
import useClickOutside from '../../../hooks/useClickOutside';

export default function SearchableToolSelect({
  value,
  onChange,
  name,
  required
}: SearchableToolSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { searchQuery, setSearchQuery, filteredTools } = useToolSearch();
  const containerRef = useRef<HTMLDivElement>(null);

  useClickOutside(containerRef, () => setIsOpen(false));

  const selectedTool = filteredTools.find(tool => tool.name === value);

  return (
    <div ref={containerRef} className="relative">
      <input type="hidden" name={name} value={value} required={required} />
      
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-2 bg-navy-800 border border-gray-700 rounded-lg text-white focus:border-amber-500 focus:ring-1 focus:ring-amber-500 flex items-center justify-between"
      >
        <span className={value ? 'text-white' : 'text-gray-400'}>
          {value || 'Select a tool'}
        </span>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-gray-400" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-400" />
        )}
      </button>

      {isOpen && (
        <div className="absolute z-50 w-full mt-2 bg-navy-900 border border-gray-700 rounded-lg shadow-xl">
          <div className="p-2">
            <SearchInput
              value={searchQuery}
              onChange={setSearchQuery}
            />
          </div>
          
          <ToolList
            tools={filteredTools}
            selectedTool={value}
            onSelect={(tool) => {
              onChange(tool);
              setIsOpen(false);
              setSearchQuery('');
            }}
          />
        </div>
      )}
    </div>
  );
}