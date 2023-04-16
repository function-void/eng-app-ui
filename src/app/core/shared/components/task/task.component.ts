import { Component, OnInit,Input } from '@angular/core';
import { TaskSourceType } from 'src/api/enums/TaskSourceType';
import { UnitTask } from 'src/api/model/UnitTask';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @Input() tasks: UnitTask[] = [];
  type: typeof TaskSourceType;

  constructor() {
    this.type = TaskSourceType;
  }

  ngOnInit(): void {
  }

}
