import { Component, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { TaskSourceType } from 'src/api/enums/TaskSourceType';
import { UnitTaskSource } from 'src/api/model/UnitTaskSource';

@Component({
  selector: 'app-missed-word',
  templateUrl: './missed-word.component.html',
  styleUrls: ['./missed-word.component.css'],
})
export class MissedWordComponent implements OnInit {
  @Input() source: UnitTaskSource = { id: 0, type: TaskSourceType.MissedWord, sortOrder: 0, content: "", value: "", key: "", unitTaskId: 0, }
  @Input() checkAnswers!: Subject<TaskSourceType>;
  inputValue: string = "";
  rightAnswer: boolean | null = null;
  type: typeof TaskSourceType;

  constructor() {
    this.type = TaskSourceType;
  }

  ngOnInit(): void {
    this.checkAnswers.subscribe(x => {
      if (x === this.type.MissedWord) {
        this.check();
      }
    })
  }

  check() {
    if (this.source.value?.toLowerCase().trim() === this.inputValue.toLowerCase().trim()) {
      this.source.rightAnswer = true;
    } else {
      this.source.rightAnswer = false;
    }
  }
}
