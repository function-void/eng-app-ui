import { UnitTaskSource } from "./UnitTaskSource";

export interface UnitTask {
  id: number;
  sortOrder: number;
  title: string;
  imageUrl?: string;
  unitId: number,
  sources: UnitTaskSource[],
}
