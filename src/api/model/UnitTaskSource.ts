import { TaskSourceType } from "../enums/TaskSourceType";

export interface UnitTaskSource {
  id: number;
  type: TaskSourceType;
  sortOrder: number;
  content: string;
  value?: string;
  key?: string;
  unitTaskId: number;
}
