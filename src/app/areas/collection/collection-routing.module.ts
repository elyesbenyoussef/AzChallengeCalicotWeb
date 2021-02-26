import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CollectionComponent } from "../collection/collection.component";

const routes: Routes = [
    {
        path: '',
        component: CollectionComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: []
})

export class CollectionRoutingModule { }
