import { NgModule } from "@angular/core";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatIconModule } from "@angular/material/icon";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatMenuModule } from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatDividerModule} from '@angular/material/divider';


@NgModule({
    imports: [
        MatSidenavModule,
        MatIconModule,
        MatGridListModule,
        MatToolbarModule,
        MatCardModule,
        MatButtonModule,
        MatExpansionModule,
        MatFormFieldModule,
        MatMenuModule,
        MatTabsModule,
        MatTableModule,
        MatPaginatorModule,
        MatDialogModule,
        MatInputModule,
        MatSnackBarModule,
        MatSlideToggleModule,
        MatDividerModule,
    ],
    exports: [
        MatSidenavModule,
        MatIconModule,
        MatGridListModule,
        MatToolbarModule,
        MatCardModule,
        MatButtonModule,
        MatExpansionModule,
        MatFormFieldModule,
        MatMenuModule,
        MatTabsModule,
        MatTableModule,
        MatPaginatorModule,
        MatDialogModule,
        MatInputModule,
        MatSnackBarModule,
        MatSlideToggleModule,
        MatDividerModule,
    ]
})

export class MaterialModule { }