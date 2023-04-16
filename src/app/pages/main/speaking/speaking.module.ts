import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from "../../../core/shared/shared.module";
import { SpeakingRoutingModule } from "./speaking-routing.module";
import { SpeakingComponent } from "./speaking.component";
import { DefaultComponent } from './default/default.component';

@NgModule({
  declarations: [
    SpeakingComponent,
    DefaultComponent,
  ],
  imports: [
    CommonModule,
    SpeakingRoutingModule,
    SharedModule
  ]
})
export class SpeakingModule { }
