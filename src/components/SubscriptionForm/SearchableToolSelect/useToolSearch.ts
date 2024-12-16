import { useState, useMemo } from 'react';
import { toolCategories } from '../../../data/tools';
import { Tool } from './types';

export function useToolSearch() {
  const [searchQuery, setSearchQuery] = useState('');

  const allTools = useMemo(() => {
    return toolCategories.flatMap(category => 
      category.items.map(item => ({
        name: item,
        category: category.category
      }))
    );
  }, []);

  const filteredTools = useMemo(() => {
    if (!searchQuery.trim()) {
      return allTools;
    }

    const query = searchQuery.toLowerCase();
    return allTools.filter(
      tool => 
        tool.name.toLowerCase().includes(query) ||
        tool.category.toLowerCase().includes(query)
    );
  }, [searchQuery, allTools]);

  return {
    searchQuery,
    setSearchQuery,
    filteredTools
  };
}