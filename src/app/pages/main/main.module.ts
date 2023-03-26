import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { DefaultComponent } from './default/default.component'
import { ListeningComponent } from './listening/listening.component';
import { SpeakingComponent } from './speaking/speaking.component';
import { VocabularyComponent } from './vocabulary/vocabulary.component';
import { SharedModule } from "../../core/shared/shared.module";

@NgModule({
  declarations: [
    MainComponent,
    DefaultComponent,
    ListeningComponent,
    SpeakingComponent,
    VocabularyComponent,
  ],
  imports: [
    MainRoutingModule,
    FormsModule,
    CommonModule,
    SharedModule
  ]
})
export class MainModule { }
