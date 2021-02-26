import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MaterialModule } from "./material.module";
import { BandeauComponent } from './bandeau/bandeau.component';

@NgModule({
    imports: [
        CommonModule,
        MaterialModule
    ],
    exports: [
        CommonModule,
        MaterialModule,
        BandeauComponent
    ],
    declarations: [BandeauComponent],
    entryComponents: [],
    providers: []
})

export class SharedModule { }