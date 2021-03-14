import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedModule } from "src/app/shared/shared.module";
import { SettingsRoutingModule } from "./settings-routing.module";
import { SettingsComponent } from "./settings.component";
import { ProductsComponent } from './products/products.component';
import { AddComponent } from './products/add/add.component';
import { FormsModule } from '@angular/forms';
import { UploadImagesComponent } from "./upload-images/upload-images.component";
import { UploadComponent } from './products/upload/upload.component';
import { SettingsResolver } from "./settings-resolver.service";


@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        SettingsRoutingModule,
        FormsModule
    ],
    providers: [SettingsResolver],
    declarations: [[SettingsComponent, ProductsComponent, AddComponent, UploadImagesComponent, UploadComponent]]
})

export class SettingsModule { }