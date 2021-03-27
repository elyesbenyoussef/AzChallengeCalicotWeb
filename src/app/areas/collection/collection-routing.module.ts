import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AccueilResolver } from "../accueil/accueil-resolver.service";
import { CollectionComponent } from "../collection/collection.component";
import { DetailComponent } from "../products/detail/detail.component";
import { ProductResolver } from "../products/product-resolver.service";

const routes: Routes = [
    {
        path: '',
        component: CollectionComponent,
        resolve: {
            collection: AccueilResolver
        }
    },
    {
        path: 'detail',
        component: DetailComponent,
        resolve: {
            collection: ProductResolver
        }
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: []
})

export class CollectionRoutingModule { }
