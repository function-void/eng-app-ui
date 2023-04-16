import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UnitComponent } from '../../../../core/shared/components/unit/unit.component';
import { LessonComponent } from './lesson.component';

const routes: Routes = [
  {
    path: '',
    component: LessonComponent,
  },
  {
    path: 'unit',
    pathMatch: 'prefix',
    data: { breadcrumb: 'Unit' },
    component: UnitComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LessonRoutingModule { }
