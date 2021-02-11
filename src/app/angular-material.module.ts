import { NgModule } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTooltipModule } from '@angular/material/tooltip';
// import {MatRadioModule} from '@angular/material';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatBadgeModule } from '@angular/material/badge';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTableModule } from '@angular/material/table';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';



@NgModule({
    imports: [
        MatButtonModule,
        MatDialogModule,
        MatGridListModule,
        MatInputModule,
        MatSelectModule,
        MatBadgeModule,
        MatListModule,
        MatMenuModule,
        MatIconModule,
        MatProgressSpinnerModule,
        MatSnackBarModule,
        MatStepperModule,
        MatTableModule,
        MatDatepickerModule,
        MatFormFieldModule,
        MatNativeDateModule,
        // MatMomentDateModule,
    ],
    exports: [
        MatButtonModule,
        MatDialogModule,
        MatGridListModule,
        MatInputModule,
        MatSelectModule,
        MatBadgeModule,
        MatListModule,
        MatMenuModule,
        MatIconModule,
        MatProgressSpinnerModule,
        MatSnackBarModule,
        MatStepperModule,
        MatTableModule,
        MatDatepickerModule,
        MatFormFieldModule,
        MatNativeDateModule,
        // MatMomentDateModule,
    ],
    providers: [
        // { provide: MAT_DATE_LOCALE, useValue: 'en-GB' },
        // { provide: MAT_BOTTOM_SHEET_DEFAULT_OPTIONS, useValue: { hasBackdrop: false } },
        // { provide: MAT_DIALOG_DATA, useValue: {} },
        // { provide: MatDialogRef, useValue: {} }

    ]
})
export class AngularMaterialModule {

}