import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import {
  ButtonColorsComponent,
  ColorsPageComponent,
  EqualWidthComponent,
  GridPageComponent,
  HowItWorkComponent,
  StateColorsComponent,
  TypographyColorsComponent,
  TypographyPageComponent,
  VerticalAlignmentComponent
} from './components';
import { MatLegacyCardModule as MatCardModule } from '@angular/material/legacy-card';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { SharedModule } from '../../../shared/shared.module';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatLegacyTableModule as MatTableModule } from '@angular/material/legacy-table';
import { GridTableComponent } from './components';

@NgModule({
  declarations: [
    ButtonColorsComponent,
    ColorsPageComponent,
    EqualWidthComponent,
    GridPageComponent,
    HowItWorkComponent,
    StateColorsComponent,
    TypographyColorsComponent,
    TypographyPageComponent,
    VerticalAlignmentComponent,
    GridTableComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    MatCardModule,
    MatButtonModule,
    SharedModule,
    MatGridListModule,
    MatTableModule
  ]
})
export class CoreModule { }
