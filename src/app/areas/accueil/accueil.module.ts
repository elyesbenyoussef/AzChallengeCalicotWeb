import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedModule } from "src/app/shared/shared.module";
import { AccueilResolver } from "./accueil-resolver.service";
import { AccueilRoutingModule, routedComponents } from "./accueil-routing.module";
import { AccueilService } from "./accueil.service";

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        AccueilRoutingModule
    ],
    declarations: [routedComponents],
    providers: [
        AccueilResolver,
        AccueilService
    ]
})

export class AccueilModule { }