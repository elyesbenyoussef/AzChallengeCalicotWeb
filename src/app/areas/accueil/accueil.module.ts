import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { TranslateModule } from "@ngx-translate/core";
import { SharedModule } from "src/app/shared/shared.module";
import { AccueilRoutingModule, routedComponents } from "./accueil-routing.module";

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        AccueilRoutingModule,
        TranslateModule
    ],
    declarations : [routedComponents]
})

export class AccueilModule { }