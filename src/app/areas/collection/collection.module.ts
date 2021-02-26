import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedModule } from "src/app/shared/shared.module";
import { CollectionRoutingModule } from "./collection-routing.module";
import { CollectionComponent } from "./collection.component";

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        CollectionRoutingModule
    ],
    declarations: [[CollectionComponent]]
})

export class CollectionModule { }