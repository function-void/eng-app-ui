import { Group } from './Group';

export interface Course {
  sortOrder: number;
  name: string;
  groups: Group[];
}
