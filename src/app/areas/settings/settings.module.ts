import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedModule } from "src/app/shared/shared.module";
import { SettingsRoutingModule } from "./settings-routing.module";
import { SettingsComponent } from "./settings.component";
import { ProductsComponent } from './products/products.component';
import { AddComponent } from './products/add/add.component';
import { FormsModule } from '@angular/forms';


@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        SettingsRoutingModule,
        FormsModule
    ],
    declarations: [[SettingsComponent, ProductsComponent, AddComponent]]
})

export class SettingsModule { }