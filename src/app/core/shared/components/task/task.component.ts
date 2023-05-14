import { Component, OnInit,Input } from '@angular/core';
import { TaskSourceType } from 'src/api/enums/TaskSourceType';
import { UnitTask } from 'src/api/model/UnitTask';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @Input() tasks: UnitTask[] = [];
  type: typeof TaskSourceType;

  constructor(private sanitizer: DomSanitizer) {
    this.type = TaskSourceType;
  }

  ngOnInit(): void {
  }

  getImage(base64: string) {
    var result = this.sanitizer.bypassSecurityTrustResourceUrl(base64);
    return result;
  }

}
