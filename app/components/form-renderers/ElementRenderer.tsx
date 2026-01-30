import type { QuestionComponent } from '@/lib/form-builder/types/question';
import { TextRenderer } from './TextRenderer';

interface ElementRendererProps {
  element: QuestionComponent;
  onRightClick: (element: any, event: React.MouseEvent) => void;
}

export function ElementRenderer({ element, onRightClick }: ElementRendererProps) {
  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    onRightClick(element, e);
  };

  switch (element.type) {
    case 'text':
      return <TextRenderer element={element as any} onRightClick={onRightClick} />;
    case 'table':
      return (
        <div onContextMenu={handleContextMenu} className="inline-block">
          {/* Table content - future implementation */}
          Table Element
        </div>
      );
    case 'multiple-selection':
    case 'single-selection':
      return (
        <div onContextMenu={handleContextMenu} className="inline-block">
          {/* Selection content - future implementation */}
          Selection Element
        </div>
      );
    case 'image':
      return (
        <div onContextMenu={handleContextMenu} className="inline-block">
          {/* Image content - future implementation */}
          Image Element
        </div>
      );
    default:
      return <div onContextMenu={handleContextMenu}>Unknown element type</div>;
  }
}