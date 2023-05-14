import { Subject } from 'rxjs';
import { takeUntil, take } from 'rxjs/operators';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Unit } from 'src/api/model/Unit';
import { UnitService } from 'src/api/services/UnitService';
import { DataService } from 'src/api/services/DataService';

@Component({
  selector: 'app-unit',
  templateUrl: './unit.component.html',
  styleUrls: ['./unit.component.css']
})
export class UnitComponent implements OnInit, OnDestroy {
  private unsubscribe = new Subject<void>();

  isVisibleSources: boolean = false;
  units: Unit[] = [];
  selectedUnit: Unit = {} as Unit;

  constructor(
    private unitService: UnitService,
    private dataService: DataService) {
  }

  ngOnInit(): void {
    this.getUnits();
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  showSourceContent(unit: Unit) {
    this.isVisibleSources = !this.isVisibleSources
    this.selectedUnit = unit;
    console.log(this.selectedUnit)
  }

  getUnits() {
    this.unitService.getUnits(this.dataService.LessonId).pipe(takeUntil(this.unsubscribe)).subscribe(x => {
      this.units = x;
    })
  }
}
