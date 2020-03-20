import { NgModule } from '@angular/core';
// import { FormsModule } from '@angular/forms';
// import { ReactiveFormsModule } from '@angular/forms';

import {MatSidenavModule} from '@angular/material/sidenav';

import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatBadgeModule} from '@angular/material/badge';
import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDialogModule} from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatSelectModule} from '@angular/material/select';
import {MatChipsModule} from '@angular/material/chips';
import {MatDividerModule} from '@angular/material/divider';
import {MatTableModule} from '@angular/material/table';
import {MatStepperModule} from '@angular/material/stepper';


@NgModule({
    imports: [
        MatSidenavModule,
        DragDropModule,
        MatToolbarModule,
        MatMenuModule,
        MatButtonModule,
        MatBadgeModule,
        MatTabsModule,
        MatIconModule,
        MatListModule,
        MatInputModule,
        MatFormFieldModule,
        MatDialogModule,
        MatCardModule,
        MatExpansionModule,
        MatSelectModule,
        MatChipsModule,
        MatDividerModule,
        MatTableModule,
        MatStepperModule
        // ReactiveFormsModule,
        // FormsModule
   ],
    exports: [
        MatSidenavModule,
        DragDropModule,
        MatToolbarModule,
        MatMenuModule,
        MatButtonModule,
        MatBadgeModule,
        MatTabsModule,
        MatIconModule,
        MatListModule,
        MatInputModule,
        MatFormFieldModule,
        MatDialogModule,
        MatCardModule,
        MatExpansionModule,
        MatSelectModule,
        MatChipsModule,
        MatDividerModule,
        MatTableModule,
        MatStepperModule
        // ReactiveFormsModule,
        // FormsModule
    ]
})

export class MaterialModule {}
