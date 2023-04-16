import { Group } from './Group';

export interface Course {
  id: number;
  sortOrder: number;
  name: string;
  groups: Group[];
}
