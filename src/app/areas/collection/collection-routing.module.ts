import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AccueilResolver } from "../accueil/accueil-resolver.service";
import { CollectionComponent } from "../collection/collection.component";

const routes: Routes = [
    {
        path: '',
        component: CollectionComponent,
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

export class CollectionRoutingModule { }
