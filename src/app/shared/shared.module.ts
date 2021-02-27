import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MaterialModule } from "./material.module";
import { BandeauComponent } from './bandeau/bandeau.component';
import { HttpClientModule } from "@angular/common/http";

@NgModule({
    imports: [
        CommonModule,
        MaterialModule,
        HttpClientModule
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