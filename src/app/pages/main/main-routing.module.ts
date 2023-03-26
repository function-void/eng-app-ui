import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main.component';
import { DefaultComponent } from './default/default.component';
import { ListeningComponent } from "./listening/listening.component";
import { SpeakingComponent } from "./speaking/speaking.component";
import { VocabularyComponent } from "./vocabulary/vocabulary.component";

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
        component: VocabularyComponent,
        data: { breadcrumb: 'Vocabulary' }
      },
      {
        path: 'listening',
        component: ListeningComponent,
        data: { breadcrumb: 'Listening' }
      },
      {
        path: 'speaking',
        component: SpeakingComponent,
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
