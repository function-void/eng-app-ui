import { Observable } from 'rxjs';
import { Injectable } from "@angular/core";
import { BaseService } from "../BaseService";
import { HttpClient } from '@angular/common/http';
import { Course } from '../model/Course';

@Injectable({
  providedIn: 'root'
})
export class CourseService extends BaseService {
  public prefixUrl: string = "course";

  constructor(http: HttpClient) {
    super(http);
  }

  geAllCourse(): Observable<Course[]> {
    return this.get();
  }
}
