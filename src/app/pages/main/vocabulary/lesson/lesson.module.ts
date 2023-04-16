import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from "../../../../core/shared/shared.module";
import { LessonComponent } from './lesson.component';
import { LessonRoutingModule } from './lesson-routing.module';

@NgModule({
  declarations: [
    LessonComponent,
  ],
  imports: [
    CommonModule,
    LessonRoutingModule,
    SharedModule,
  ],
})
export class LessonModule { }
