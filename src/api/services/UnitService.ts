import { Observable } from 'rxjs';
import { Injectable } from "@angular/core";
import { BaseService } from "../BaseService";
import { HttpClient } from '@angular/common/http';
import { Unit } from '../model/Unit';

@Injectable({
  providedIn: 'root'
})
export class UnitService extends BaseService {
  public prefixUrl: string = "unit";

  constructor(http: HttpClient) {
    super(http);
  }

  getUnits(lessonId?: number): Observable<Unit[]> {
    return this.get('', { lessonId });
  }
}
