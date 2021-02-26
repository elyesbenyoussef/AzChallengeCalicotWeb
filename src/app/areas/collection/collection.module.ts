import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MaterialModule } from "src/app/shared/material.module";
import { SharedModule } from "src/app/shared/shared.module";
import { CollectionRoutingModule } from "./collection-routing.module";

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        MaterialModule,
        CollectionRoutingModule
    ],
    declarations: []
})

export class CollectionModule { }