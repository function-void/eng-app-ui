import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main.component';
import { DefaultComponent } from './default/default.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        component: DefaultComponent
      },
      {
        path: 'grammar',
        loadChildren: () => import('./grammar/grammar.module').then(m => m.GrammarModule),
        data: { breadcrumb: 'Grammar' }
      },
      {
        path: 'vocabulary',
        loadChildren: () => import('./vocabulary/vocabulary.module').then(m => m.VocabularyModule),
        data: { breadcrumb: 'Vocabulary' }
      },
      {
        path: 'listening',
        loadChildren: () => import('./listening/listening.module').then(m => m.ListeningModule),
        data: { breadcrumb: 'Listening' }
      },
      {
        path: 'speaking',
        loadChildren: () => import('./speaking/speaking.module').then(m => m.SpeakingModule),
        data: { breadcrumb: 'Speaking' }
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule {
}
