import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule, MATERIAL_SANITY_CHECKS } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatRadioModule } from '@angular/material/radio';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSortModule } from '@angular/material/sort';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatChipsModule } from '@angular/material/chips';
import { MatExpansionModule } from "@angular/material/expansion";
import { MatCheckboxModule } from '@angular/material/checkbox';

const materialModules: any[] = [
    MatSidenavModule,
    MatToolbarModule,
    MatCardModule,
    MatListModule,
    MatInputModule,
    MatButtonModule,
    MatRadioModule,
    MatIconModule,
    MatMenuModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatDialogModule,
    MatGridListModule,
    MatProgressBarModule,
    MatTableModule,
    MatTabsModule,
    MatPaginatorModule,
    MatTooltipModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatSelectModule,
    MatChipsModule,
    MatExpansionModule,
    MatCheckboxModule
];

@NgModule({
    imports: materialModules,
    exports: materialModules,
    providers: [
        {
            provide: MATERIAL_SANITY_CHECKS,
            useValue: false
        }
    ]
})
export class MaterialModule { }
