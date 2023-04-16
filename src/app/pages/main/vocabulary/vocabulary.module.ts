import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from "../../../core/shared/shared.module";
import { VocabularyRoutingModule } from "./vocabulary-routing.module";
import { VocabularyComponent } from "./vocabulary.component";
import { DefaultComponent } from './default/default.component';

@NgModule({
  declarations: [
    VocabularyComponent,
    DefaultComponent,
  ],
  imports: [
    CommonModule,
    VocabularyRoutingModule,
    SharedModule
  ]
})
export class VocabularyModule { }
