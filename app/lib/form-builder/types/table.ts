import type { Input } from "./inputs";
import type { LiteralText } from "./literal-text";

export type TableCell = Input | LiteralText;
export type TableRow = TableCell[];

export interface TableElement {
  type: "table";
  title: string;
  rows: TableRow[];
}

