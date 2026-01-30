import type {  Input } from "./inputs";
import type { LiteralText } from "./literal-text";

export interface TextElement {
  type: 'text';
  components: (Input | LiteralText)[];
}

