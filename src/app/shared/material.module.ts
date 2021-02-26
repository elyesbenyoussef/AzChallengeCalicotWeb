import { NgModule } from "@angular/core";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatIconModule } from "@angular/material/icon";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatMenuModule} from '@angular/material/menu';


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
        MatMenuModule
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
        MatMenuModule
    ]
})

export class MaterialModule { }