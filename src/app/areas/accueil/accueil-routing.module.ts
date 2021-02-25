import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AccueilResolver } from "./accueil-resolver.service";
import { AccueilComponent } from "./accueil.component";

const routes: Routes = [
    {
        path: '',
        component: AccueilComponent,
        resolve: { products : AccueilResolver }
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: []
})

export class AccueilRoutingModule { }

export const routedComponents = [
    AccueilComponent
]