import { SourceType } from "../enums/SourceType";

export interface Source {
  id: number;
  type: SourceType;
  sortOrder: number;
  content: string;
}
