import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedModule } from "src/app/shared/shared.module";
import { DetailComponent } from "../products/detail/detail.component";
import { CollectionRoutingModule } from "./collection-routing.module";
import { CollectionComponent } from "./collection.component";

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        CollectionRoutingModule
    ],
    declarations: [[CollectionComponent, DetailComponent]],
    // providers: [
    //     AccueilResolver,
    //     AccueilService
    // ]
})

export class CollectionModule { }