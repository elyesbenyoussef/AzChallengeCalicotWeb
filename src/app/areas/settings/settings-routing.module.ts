import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AccueilResolver } from "../accueil/accueil-resolver.service";
import { SettingsComponent } from "./settings.component";

const routes: Routes = [
    {
        path: '',
        component: SettingsComponent,
        resolve: {
            collection: AccueilResolver
        }
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: []
})

export class SettingsRoutingModule { }
