import { Observable } from 'rxjs';
import { Injectable } from "@angular/core";
import { BaseService } from "../BaseService";
import { HttpClient } from '@angular/common/http';
import { Lesson } from '../model/Lesson';

@Injectable({
  providedIn: 'root'
})
export class LessonService extends BaseService {
  public prefixUrl: string = "lesson";

  constructor(http: HttpClient) {
    super(http);
  }

  getAllLessons(groupToken?: string): Observable<Lesson[]> {
    return this.get('', { groupToken });
  }
}
