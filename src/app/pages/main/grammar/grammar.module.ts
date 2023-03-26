import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GrammarRoutingModule } from "./grammar-routing.module";
import { SharedModule } from "../../../core/shared/shared.module";
import { GrammarComponent } from "./grammar.component";
import { DefaultComponent } from './default/default.component';

@NgModule({
  declarations: [
    GrammarComponent,
    DefaultComponent,
  ],
  imports: [
    CommonModule,
    GrammarRoutingModule,
    SharedModule
  ]
})
export class GrammarModule { }
