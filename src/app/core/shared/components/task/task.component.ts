import { Component, Input, AfterViewInit } from '@angular/core';
import { TaskSourceType } from 'src/api/enums/TaskSourceType';
import { UnitTask } from 'src/api/model/UnitTask';
import { DomSanitizer } from '@angular/platform-browser';
import { UnitTaskSource } from 'src/api/model/UnitTaskSource';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent implements AfterViewInit {
  @Input() tasks: UnitTask[] = [];
  type: typeof TaskSourceType;
  rightAnswer: boolean | null = null;
  checkAnswers: Subject<TaskSourceType> = new Subject();

  constructor(private sanitizer: DomSanitizer) {
    this.type = TaskSourceType;
  }

  ngAfterViewInit(): void {
  }

  getImage(base64: string) {
    var result = this.sanitizer.bypassSecurityTrustResourceUrl(base64);
    return result;
  }

  onChangedUnitTaskSource(item: UnitTaskSource) {
  }

  checkByTask(task: UnitTask) {
    if(task.sources.length > 0) {
      this.checkAnswers.next(task.sources[0].type);
    }
  }
}
