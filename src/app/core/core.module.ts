import { HttpClientModule } from "@angular/common/http";
import { NgModule, Optional, SkipSelf } from "@angular/core";
import { HttpClientService } from "../services/http-client.service";
import { SharedModule } from "../shared/shared.module";
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";

@NgModule({
    imports: [SharedModule,
        HttpClientModule],
    exports: [[HeaderComponent],
    [FooterComponent]],
    declarations: [HeaderComponent,
        FooterComponent],
    providers: [HttpClientService]
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