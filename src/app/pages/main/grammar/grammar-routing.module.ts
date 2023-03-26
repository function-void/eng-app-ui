import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GrammarComponent } from './grammar.component';
import { DefaultComponent } from "./default/default.component";

const routes: Routes = [
  {
    path: '',
    component: GrammarComponent,
    children: [
      {
        path: '',
        component: DefaultComponent
      },
      {
        path: 'lesson',
        pathMatch: 'prefix',
        data: { breadcrumb: 'Lesson' },
        loadChildren: () => import('./lesson/lesson.module').then(m => m.LessonModule),
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GrammarRoutingModule { }
