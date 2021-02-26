import { NgModule } from "@angular/core";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatIconModule } from "@angular/material/icon";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
    imports: [
        MatSidenavModule,
        MatIconModule,
        MatGridListModule,
        MatToolbarModule
    ],
    exports: [
        MatSidenavModule,
        MatIconModule,
        MatGridListModule,
        MatToolbarModule
    ]
})

export class MaterialModule { }