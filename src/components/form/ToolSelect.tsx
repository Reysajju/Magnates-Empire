import React from 'react';

interface ToolSelectProps {
  value: string;
  onChange: (value: string) => void;
}

const tools = [
  { category: 'AI & Writing', items: ['ChatGPT Pro', 'Copy.ai', 'Jasper', 'Grammarly Premium'] },
  { category: 'SEO & Marketing', items: ['SEMrush', 'Ahrefs', 'Moz Pro', 'Ubersuggest Pro'] },
  { category: 'Design & Creative', items: ['Adobe Creative Cloud', 'Canva Pro', 'Figma Pro', 'Sketch'] },
  { category: 'Video & Audio', items: ['YouTube Premium', 'Adobe Premiere Pro', 'Descript', 'Epidemic Sound'] },
  { category: 'Productivity', items: ['Notion Pro', 'Asana Premium', 'Monday.com', 'ClickUp'] },
  { category: 'Development', items: ['GitHub Pro', 'JetBrains All Products', 'Sublime Text', 'CodePen Pro'] }
];

export default function ToolSelect({ value, onChange }: ToolSelectProps) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-300 mb-2">
        Select Tool
      </label>
      <select
        required
        className="w-full px-4 py-2 bg-navy-800 border border-gray-700 rounded-lg text-white focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="">Select a tool</option>
        {tools.map((category) => (
          <optgroup key={category.category} label={category.category}>
            {category.items.map((tool) => (
              <option key={tool} value={tool}>
                {tool}
              </option>
            ))}
          </optgroup>
        ))}
      </select>
    </div>
  );
}