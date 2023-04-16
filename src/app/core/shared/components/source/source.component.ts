import { Component, Input, OnInit } from '@angular/core';
import { SourceType } from 'src/api/enums/SourceType';
import { Source } from 'src/api/model/Source';

@Component({
  selector: 'app-source',
  templateUrl: './source.component.html',
  styleUrls: ['./source.component.css']
})
export class SourceComponent implements OnInit {
  @Input() sources: Source[] = [];
  type: typeof SourceType;

  constructor() {
    this.type = SourceType;
  }

  ngOnInit(): void {
  }

}
