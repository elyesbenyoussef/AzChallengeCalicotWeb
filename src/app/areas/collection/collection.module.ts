import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedModule } from "src/app/shared/shared.module";
import { AccueilResolver } from "../accueil/accueil-resolver.service";
import { AccueilService } from "../accueil/accueil.service";
import { CollectionRoutingModule } from "./collection-routing.module";
import { CollectionComponent } from "./collection.component";

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        CollectionRoutingModule
    ],
    declarations: [[CollectionComponent]],
    // providers: [
    //     AccueilResolver,
    //     AccueilService
    // ]
})

export class CollectionModule { }