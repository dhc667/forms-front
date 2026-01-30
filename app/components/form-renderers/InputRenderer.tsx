import type { Input } from '@/lib/form-builder/types/inputs';
import { InlineInput } from '@/components/ui/inline-input';

interface InputRendererProps {
  input: Input;
  onRightClick: (input: Input, event: React.MouseEvent) => void;
}

export function InputRenderer({ input, onRightClick }: InputRendererProps) {
  const inlineInputProps = {
    id: input.id,
    required: input.required,
    onContextMenu: (e: React.MouseEvent) => onRightClick(input, e),
  };

  switch (input.type) {
    case 'text-input':
      return (
        <InlineInput
          {...inlineInputProps}
          type="text"
          placeholder={input.placeholder}
        />
      );

    case 'number-input':
      return (
        <InlineInput
          {...inlineInputProps}
          type="number"
          placeholder={input.placeholder}
          min={input.validation?.min}
          max={input.validation?.max}
          step={input.validation?.step}
        />
      );

    case 'date':
      return (
        <InlineInput
          {...inlineInputProps}
          type="date"
          min={input.validation?.min?.toISOString().split('T')[0]}
          max={input.validation?.max?.toISOString().split('T')[0]}
        />
      );

    case 'reference-input':
      return (
        <InlineInput
          {...inlineInputProps}
          type="text"
          placeholder="Reference input"
          disabled
        />
      );

    case 'selection-input':
      return (
        <InlineInput
          {...inlineInputProps}
          type="text"
          placeholder="Selection input"
          disabled
        />
      );

    default:
      return (
        <InlineInput
          {...inlineInputProps}
          type="text"
          placeholder="Unknown input type"
          disabled
        />
      );
  }
}