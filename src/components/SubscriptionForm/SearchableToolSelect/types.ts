export interface Tool {
  name: string;
  category: string;
}

export interface SearchableToolSelectProps {
  value: string;
  onChange: (value: string) => void;
  name: string;
  required?: boolean;
}