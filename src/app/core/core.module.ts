import { NgModule, Optional, SkipSelf } from "@angular/core";
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";

@NgModule({
    imports: [],
    exports: [[HeaderComponent],
    [FooterComponent]],
    declarations: [HeaderComponent,
        FooterComponent],
    providers: []
})

export class CoreModule {
    constructor(
        @Optional()
        @SkipSelf()
        parentModule: CoreModule
    ) {
        this.throwIfAlreadyLoaded(parentModule, 'CoreModule');
    }

    throwIfAlreadyLoaded(parentModule: any, moduleName: string) {
        if (parentModule) {
            throw new Error(`${moduleName} has already been loaded. Import Core modules in the AppModule only.`);
        }
    }
}