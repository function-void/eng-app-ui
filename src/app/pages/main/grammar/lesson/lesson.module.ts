import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from "../../../../core/shared/shared.module";
import { LessonComponent } from './lesson.component';
import { UnitComponent } from './unit/unit.component';
import { LessonRoutingModule } from './lesson-routing.module';
import { SourceComponent } from './source/source.component';

@NgModule({
  declarations: [
    LessonComponent,
    UnitComponent,
    SourceComponent,
  ],
  imports: [
    CommonModule,
    LessonRoutingModule,
    SharedModule
  ]
})
export class LessonModule { }
