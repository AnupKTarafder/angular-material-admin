import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { MatBadgeModule } from '@angular/material/badge';
import { MatLegacyChipsModule as MatChipsModule } from '@angular/material/legacy-chips';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatLegacyDialogModule as MatDialogModule } from '@angular/material/legacy-dialog';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatLegacyCardModule as MatCardModule } from '@angular/material/legacy-card';
import { MatLegacyTabsModule as MatTabsModule } from '@angular/material/legacy-tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatLegacyFormFieldModule as MatFormFieldModule } from '@angular/material/legacy-form-field';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatLegacyMenuModule as MatMenuModule } from '@angular/material/legacy-menu';

import { CarouselModule } from 'ngx-owl-carousel-o';

import { SharedModule } from '../../../shared/shared.module';

import { UiElementsRoutingModule } from './ui-elements-routing.module';

import { NotificationPageComponent } from './containers';
import { SuccessToastComponent } from './components/success-toast/success-toast.component';
import { ErrorToastrComponent } from './components/error-toastr/error-toastr.component';
import { InfoToastrComponent } from './components/info-toastr/info-toastr.component';

import {
  IconsPageComponent,
  BadgePageComponent,
  CarouselPageComponent,
  CardsPageComponent,
  ModalPageComponent,
  TooltipsPageComponent,
  TabsPageComponent,
  WidgetPageComponent
} from './components';
import { NavbarPageComponent } from './components/navbar-page/navbar-page.component';

import {
  LocationComponent,
  LongContentComponent,
  FormComponent,
  SubscribedComponent,
  GridComponent
} from './popups';


import { MatLegacyTooltip as MatTooltip, MatLegacyTooltipModule as MatTooltipModule } from '@angular/material/legacy-tooltip';

import { MatExpansionModule } from '@angular/material/expansion';
import { ProgressPageComponent } from './components';
import { MatLegacyProgressSpinnerModule as MatProgressSpinnerModule } from '@angular/material/legacy-progress-spinner';
import { MatLegacyProgressBarModule as MatProgressBarModule } from '@angular/material/legacy-progress-bar';


import { PopoverModule } from 'ngx-smart-popover';

@NgModule({
  declarations: [
    IconsPageComponent,
    BadgePageComponent,
    CardsPageComponent,
    ModalPageComponent,
    LocationComponent,
    LongContentComponent,
    FormComponent,
    SubscribedComponent,
    GridComponent,
    NotificationPageComponent,
    SuccessToastComponent,
    ErrorToastrComponent,
    InfoToastrComponent,
    CarouselPageComponent,
    NavbarPageComponent,
    TooltipsPageComponent,
    TabsPageComponent,
    ProgressPageComponent,
    WidgetPageComponent
  ],
    imports: [
      CarouselModule,
      CommonModule,
      UiElementsRoutingModule,
      MatToolbarModule,
      SharedModule,
      MatButtonModule,
      MatCardModule,
      MatTabsModule,
      MatIconModule,
      MatBadgeModule,
      MatChipsModule,
      MatDialogModule,
      MatFormFieldModule,
      MatInputModule,
      FormsModule,
      MatGridListModule,
      MatTooltipModule,
      MatExpansionModule,
      MatProgressSpinnerModule,
      MatProgressBarModule,
      MatMenuModule,
      PopoverModule
    ]
})
export class UiElementsModule { }
