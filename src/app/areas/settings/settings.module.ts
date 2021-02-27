import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedModule } from "src/app/shared/shared.module";
import { SettingsRoutingModule } from "./settings-routing.module";
import { SettingsComponent } from "./settings.component";
import { ProductsComponent } from './products/products.component';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        SettingsRoutingModule
    ],
    declarations: [[SettingsComponent, ProductsComponent]]
})

export class SettingsModule { }