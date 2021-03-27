import { HttpClientModule } from "@angular/common/http";
import { NgModule, Optional, SkipSelf } from "@angular/core";
import { CollectionService } from "../services/collection.service";
import { HttpClientService } from "../services/http-client.service";
import { SnackbarService } from "../services/snackbar.service";
import { UploadFilesService } from "../services/upload-files.service";
import { UploadService } from "../services/upload.service";
import { SharedModule } from "../shared/shared.module";
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";
import { SnackBarComponent } from './snack-bar/snack-bar.component';
import { ImageLightboxComponent } from './image-lightbox/image-lightbox.component';
import { ImageService } from "../services/image.service";

@NgModule({
    imports: [SharedModule,
        HttpClientModule],
    exports: [[HeaderComponent],
    [FooterComponent],
    [ImageLightboxComponent]],
    declarations: [HeaderComponent,
        FooterComponent,
        SnackBarComponent,
        ImageLightboxComponent],
    providers: [
        HttpClientService,
        SnackbarService,
        CollectionService,
        UploadFilesService,
        UploadService,
        ImageService
    ]
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