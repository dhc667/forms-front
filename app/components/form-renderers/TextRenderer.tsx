import React from 'react';
import type { TextElement } from '@/lib/form-builder/types/text';
import { InputRenderer } from './InputRenderer';
import { LiteralTextRenderer } from './LiteralTextRenderer';

interface TextRendererProps {
  element: TextElement;
  onRightClick: (element: any, event: React.MouseEvent) => void;
}

export function TextRenderer({ element, onRightClick }: TextRendererProps) {
  const handleComponentRightClick = (component: any, event: React.MouseEvent) => {
    // Stop propagation to prevent parent from handling
    event.stopPropagation();
    event.preventDefault();
    onRightClick(component, event);
  };

  return (
    <div className="text-element flex flex-wrap items-center gap-1">
      {element.components.map((component) => (
        <React.Fragment key={component.id || 'temp-id'}>
          {component.type === 'embedded-text' ? (
            <LiteralTextRenderer
              text={component}
              onRightClick={handleComponentRightClick}
            />
          ) : (
            <InputRenderer
              input={component}
              onRightClick={handleComponentRightClick}
            />
          )}
        </React.Fragment>
      ))}
    </div>
  );
}