import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { UploadComponent } from "./products/upload/upload.component";
import { SettingsResolver } from "./settings-resolver.service";
import { SettingsComponent } from "./settings.component";

const routes: Routes = [
    {
        path: '',
        component: SettingsComponent,
        resolve: {
            collection: SettingsResolver
        }
    },
    {
        path: "upload",
        component: UploadComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: []
})

export class SettingsRoutingModule { }
