/**
 * Data Generators Collection
 * Combines all generators to create form rows for the forms table
 */

import { generateFormId } from './ids';
import { generateRandomDate } from './dates';
import { generateSpanishName, generateMultipleNames } from './names';
import { generateFormTitle } from './titles';
import type { FormRow } from './types';

/**
 * Generate an array of form rows with realistic sample data
 */
export function generateFormsData(count: number): FormRow[] {
  return Array.from({ length: count }, (_, index) => {
    const formIndex = index + 1; // 1-based indexing for IDs and titles

    return {
      id: generateFormId(formIndex),
      titulo: generateFormTitle(formIndex),
      elaborado: generateSpanishName(),
      revisado: Math.random() > 0.7 ? generateMultipleNames(2) : generateSpanishName(),
      aprobado: generateSpanishName(),
      fecha: generateRandomDate()
    };
  });
}

/**
 * Generate a single form row (useful for testing)
 */
export function generateSingleForm(index: number = 1): FormRow {
  return generateFormsData(1)[0];
}

// Re-export individual generators for direct use
export { generateFormId } from './ids';
export { generateRandomDate } from './dates';
export { generateSpanishName, generateMultipleNames } from './names';
export { generateFormTitle, getAlphabetizedSequence } from './titles';

// Export types
export type { FormRow, DataGeneratorOptions } from './types';