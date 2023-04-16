import { Source } from "./Source";
import { UnitTask } from "./UnitTask";

export interface Unit {
  id: number;
  sortOrder: number;
  title: string;
  lessonId: number,
  sources: Source[],
  tasks: UnitTask[],
}
