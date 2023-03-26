import { EventEmitter, Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class DataService {
  private groupTokenChanged: EventEmitter<any> = new EventEmitter();
  private groupToken: string;

  private lessonIdChanged: EventEmitter<any> = new EventEmitter();
  private lessonId: number;

  constructor() {
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
}
