export interface SelectionOption {
  id: string;
  title: string;
}

export interface MultipleSelection {
  id: string;
  type: 'multiple-selection';
  options: SelectionOption[];
}

export interface SingleSelection {
  id: string;
  type: 'single-selection';
  options: SelectionOption[];
}

export type SelectionElement = MultipleSelection | SingleSelection;

