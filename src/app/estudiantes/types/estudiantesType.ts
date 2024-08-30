import { Persona } from '@/app/persona/types/PersonaTypes';

export interface Estudiante {
  id:               string;
  persona:          Persona
  codigo:           string;
  grupoMatriculado: string;
}

export interface Semestre {
  id: string;
}