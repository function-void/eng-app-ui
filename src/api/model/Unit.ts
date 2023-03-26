import { Source } from "./Source";

export interface Unit {
  id: number;
  sortOrder: number;
  title: string;
  lessonId: number,
  sources: Source[],
}
