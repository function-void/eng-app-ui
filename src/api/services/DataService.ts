import { EventEmitter, Injectable } from "@angular/core";
import { Subject } from 'rxjs';
import { Course } from "../model/Course";

@Injectable({
  providedIn: "root"
})
export class DataService {
  observer = new Subject();
  public subscriber$ = this.observer.asObservable();

  private groupTokenChanged: EventEmitter<any> = new EventEmitter();
  private groupToken: string;

  private lessonIdChanged: EventEmitter<any> = new EventEmitter();
  private lessonId: number;

  private coursesChanged: EventEmitter<any> = new EventEmitter();
  private courses: Course[];

  private courseIdChanged: EventEmitter<any> = new EventEmitter();
  private courseId: number;

  constructor() {
    this.courses = [];
    this.courseId = 0;
    this.groupToken = '';
    this.lessonId = 0;
  }

  get GroupToken(): string {
    return this.groupToken;
  }

  set GroupToken(value: string) {
    this.groupToken = value;
    this.groupTokenChanged.emit(value);
  }

  get LessonId(): number {
    return this.lessonId;
  }

  set LessonId(value: number) {
    this.lessonId = value;
    this.lessonIdChanged.emit(value);
  }

  get CourseId(): number {
    return this.courseId;
  }

  set CourseId(value: number) {
    this.courseId = value;
    this.courseIdChanged.emit(value);
  }

  get Courses(): Course[] {
    return this.courses;
  }

  set Courses(value: Course[]) {
    this.courses = value;
    this.coursesChanged.emit(value);
  }

  refresh(data: any) {
    this.observer.next(data);
  }
}
