import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { IndexComponent } from "../index/index.component";
import { AccueilResolver } from "./accueil-resolver.service";
import { AccueilComponent } from "./accueil.component";

const routes: Routes = [
    {
        path: '',
        component: IndexComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: []
})

export class AccueilRoutingModule { }

export const routedComponents = [
    AccueilComponent,
    IndexComponent
]