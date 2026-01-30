import type { LiteralText } from '@/lib/form-builder/types/literal-text';

interface LiteralTextRendererProps {
  text: LiteralText;
  onRightClick: (text: LiteralText, event: React.MouseEvent) => void;
}

export function LiteralTextRenderer({ text, onRightClick }: LiteralTextRendererProps) {
  return (
    <span
      className="cursor-pointer hover:bg-muted/50 rounded px-1 inline"
      onContextMenu={(e) => onRightClick(text, e)}
    >
      {text.content}
    </span>
  );
}