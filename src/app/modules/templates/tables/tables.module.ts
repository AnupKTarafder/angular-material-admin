import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablesRoutingModule } from './tables-routing.module';
import { TablesBasicPageComponent } from './containers';
import { EmployeeTableComponent, MaterialTableComponent } from './components';
import { MatLegacyCardModule as MatCardModule } from '@angular/material/legacy-card';
import { MatIconModule } from '@angular/material/icon';
import { MatLegacyTableModule as MatTableModule } from '@angular/material/legacy-table';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatLegacyCheckboxModule as MatCheckboxModule } from '@angular/material/legacy-checkbox';
import { MatLegacyPaginatorModule as MatPaginatorModule } from '@angular/material/legacy-paginator';
import { SharedModule } from '../../../shared/shared.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { TablesDynamicPageComponent } from './containers';
import { NutritionTableComponent } from './components';
import { MatLegacyChipsModule as MatChipsModule } from '@angular/material/legacy-chips';
import { CustomTableComponent } from './components/custom-table/custom-table.component';

@NgModule({
  declarations: [
    TablesBasicPageComponent,
    EmployeeTableComponent,
    MaterialTableComponent,
    TablesDynamicPageComponent,
    NutritionTableComponent,
    CustomTableComponent
  ],
    imports: [
        CommonModule,
        TablesRoutingModule,
        MatCardModule,
        MatIconModule,
        MatTableModule,
        MatInputModule,
        MatButtonModule,
        MatCheckboxModule,
        MatPaginatorModule,
        SharedModule,
        MatToolbarModule,
        MatChipsModule
    ]
})
export class TablesModule { }
