import { Component, Input, OnInit } from '@angular/core';
import { Source } from 'src/api/model/Source';

@Component({
  selector: 'app-source',
  templateUrl: './source.component.html',
  styleUrls: ['./source.component.css']
})
export class SourceComponent implements OnInit {
  @Input() sources: Source[] = [];

  constructor() {
  }

  ngOnInit(): void {
  }

}
