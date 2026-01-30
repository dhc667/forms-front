export interface DataGeneratorOptions {
  count?: number;
  startDate?: Date;
  endDate?: Date;
}

export interface FormRow {
  id: string;
  titulo: string;
  elaborado: string;
  revisado: string;
  aprobado: string;
  fecha: string;
}