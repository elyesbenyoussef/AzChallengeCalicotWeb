import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { SnackBarComponent } from "../core/snack-bar/snack-bar.component";

@Injectable()
export class SnackbarService {

    durationInSeconds = 5;

    constructor(private _snackBar: MatSnackBar) {

    }

    openSnackBar() {
        this._snackBar.openFromComponent(SnackBarComponent, {
            duration: this.durationInSeconds * 1000,
            announcementMessage: "La suppression a été éffectué avec succès !",
            panelClass: 'snackbar-success'
        });
    }

    openSnackBarSuccess() {
        this._snackBar.open('La suppression a été éffectué avec succès !', '',
            {
                duration: this.durationInSeconds * 1000,
                panelClass: 'snackbar-success'
            });
    }
}