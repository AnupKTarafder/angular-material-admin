import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExtraRoutingModule } from './extra-routing.module';
import {SharedModule} from '../../../shared/shared.module';
import {FullCalendarModule} from '@fullcalendar/angular';
import {MatLegacyCardModule as MatCardModule} from '@angular/material/legacy-card';
import { DayInfoComponent } from './components/day-info/day-info.component';
import {MatLegacyDialogModule as MatDialogModule} from '@angular/material/legacy-dialog';
import { NewDayEventComponent } from './components/new-day-event/new-day-event.component';
import {CalendarPageComponent, GalleryPageComponent, InvoicePageComponent, TimeLinePageComponent} from './containers';
import { GalleryItemComponent } from './components/gallery-item/gallery-item.component';
import {GalleryService, SearchResultService, TimeLineService} from './services';
import {MatLegacyButtonModule as MatButtonModule} from '@angular/material/legacy-button';
import {MatIconModule} from '@angular/material/icon';
import { SearchResultPageComponent } from './containers/search-result-page/search-result-page.component';
import { SearchResultItemComponent } from './components/search-result-item/search-result-item.component';
import {MatLegacySelectModule as MatSelectModule} from '@angular/material/legacy-select';
import { TimePeriodSelectComponent } from './components/time-period-select/time-period-select.component';
import {FormsModule} from '@angular/forms';
import { TypeItemSelectComponent } from './components/type-item-select/type-item-select.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { ResultFilteringComponent } from './components/result-filtering/result-filtering.component';
import {MatLegacyListModule as MatListModule} from '@angular/material/legacy-list';
import { InvoiceCardComponent } from './components/invoice-card/invoice-card.component';
import {InvoiceService} from './services/invoice.service';
import {MatLegacyTableModule as MatTableModule} from '@angular/material/legacy-table';
import { TimeLineCardComponent } from './components/time-line-card/time-line-card.component';
import {AgmCoreModule} from '@agm/core';
import {googleMapKey} from '../maps/consts';
import {MatLegacyInputModule as MatInputModule} from '@angular/material/legacy-input';
import {MatLegacyChipsModule as MatChipsModule} from '@angular/material/legacy-chips';



@NgModule({
    declarations: [
        CalendarPageComponent,
        InvoicePageComponent,
        GalleryPageComponent,
        TimeLinePageComponent,
        DayInfoComponent,
        NewDayEventComponent,
        GalleryItemComponent,
        SearchResultPageComponent,
        SearchResultItemComponent,
        TimePeriodSelectComponent,
        TypeItemSelectComponent,
        ResultFilteringComponent,
        InvoiceCardComponent,
        TimeLineCardComponent
    ],
    imports: [
        CommonModule,
        ExtraRoutingModule,
        SharedModule,
        FullCalendarModule,
        MatCardModule,
        MatDialogModule,
        MatButtonModule,
        MatIconModule,
        MatSelectModule,
        FormsModule,
        MatButtonToggleModule,
        MatListModule,
        MatTableModule,
        AgmCoreModule,
        AgmCoreModule.forRoot({
            apiKey: googleMapKey
        }),
        MatInputModule,
        MatChipsModule,
    ],
    providers: [
        GalleryService,
        SearchResultService,
        InvoiceService,
        TimeLineService
    ]
})
export class ExtraModule { }
