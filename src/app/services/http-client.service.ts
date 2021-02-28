import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { mergeMap, catchError, finalize, map } from 'rxjs/operators';
import { EnveloppeReponseBase, ErreurBase } from '../entities/enveloppe-reponse.entity';

@Injectable()
export class HttpClientService {

    constructor(private http: HttpClient) { }

    public estEnErreur: boolean;
    public doitSeReconnecter: boolean;
    public urlErreur = new BehaviorSubject<string>("");
    public typeErreur = new BehaviorSubject<string>("");
    public messageErreur = new BehaviorSubject<string>("");

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    };

    post<T>(url: string, contenu: any): Observable<T> {
        return this.http.post<EnveloppeReponseBase<any>>(url, contenu).pipe(
            mergeMap((reponse: EnveloppeReponseBase<any>) => {
                this.traiterErreurFonctionnelle(reponse);
                this.estEnErreur = false;
                return of(reponse);
            }),
            catchError(this.traiterErreurTechnique),
            finalize(() => { })
        );
    }


    get<T>(url: string, options = {}): Observable<T> {
        return this.http.get<EnveloppeReponseBase<any>>(url, options).pipe(
            mergeMap((reponse: EnveloppeReponseBase<any>) => {
                this.traiterErreurFonctionnelle(reponse);
                this.estEnErreur = false;
                console.log(reponse);
                return of(reponse);
            }),
            catchError(this.traiterErreurTechnique),
            finalize(() => { })
        );
    }

    put<T>(url: string, contenu: any): Observable<T> {
        return this.http.put<EnveloppeReponseBase<any>>(url, contenu).pipe(
            mergeMap((reponse: EnveloppeReponseBase<any>) => {
                this.traiterErreurFonctionnelle(reponse);
                this.estEnErreur = false;
                return of(reponse);
            }),
            catchError(this.traiterErreurTechnique),
            finalize(() => { })
        );
    }

    delete<T>(url: string): Observable<T> {
        return this.http.delete<EnveloppeReponseBase<any>>(url).pipe(
            mergeMap((reponse: EnveloppeReponseBase<any>) => {
                this.traiterErreurFonctionnelle(reponse);
                this.estEnErreur = false;
                return of(reponse);
            }),
            catchError(this.traiterErreurTechnique),
            finalize(() => { })
        );
    }


    private traiterErreurFonctionnelle(reponse: EnveloppeReponseBase<any>) {

        if (!reponse.isValid || reponse.contientAlertes) {
            const erreur = this.rechercherErreurs(reponse);
            if (erreur) {
                this.afficherMessageErreur(erreur);
            } else {
                const avertissement = this.rechercherAvertissements(reponse);
                if (avertissement) {
                    this.afficherMessageAvertissement(avertissement);
                } else {
                    const info = this.rechercherInfos(reponse);
                    if (info) {
                        this.afficherMessageInfo(info);
                    }
                }
            }
        }
    }

    private traiterErreurFonctionnelle2(reponse: EnveloppeReponseBase<any>) {
        if (!reponse.isValid) {
            if (reponse.messages) {
                // this.snackBarService.openSnackBarError(reponse.messages[0]);
            } else {

            }
        }
    }

    private rechercherErreurs(reponse: EnveloppeReponseBase<any>): ErreurBase {
        if (reponse && reponse.errors) {
            return reponse.errors.find((a) => a.severite === 0);
        } else { return new ErreurBase(); }
    }

    private afficherMessageErreur(erreur: ErreurBase) {
        const msg = 'Code Fonctionnel: ' + erreur.codeFonctionnel +
            '\n\r Description: ' + erreur.description +
            '\n\r Severite: ' + erreur.severite;
        // this.snackBarService.openSnackBarError(erreur.description);
    }

    private rechercherAvertissements(reponse: EnveloppeReponseBase<any>): ErreurBase {
        return reponse.alertes.find((a) => a.severite === 1);
    }

    private afficherMessageAvertissement(avertissement: ErreurBase) {

    }

    private rechercherInfos(reponse: EnveloppeReponseBase<any>): ErreurBase {
        return reponse.errors.find((a) => a.severite === 0);
    }

    private afficherMessageInfo(info: ErreurBase) {

    }

    private traiterErreurTechnique: (errorResponse: any) => Observable<any> = (errorResponse: any) => {
        console.log(errorResponse);
        this.estEnErreur = true;
        const res = <HttpErrorResponse>errorResponse;

        if (this.urlErreur && res.url) { this.urlErreur.next(res.url); }

        if (this.typeErreur && res.status) { this.typeErreur.next(res.status.toString()); }

        if (this.messageErreur) { this.messageErreur.next(errorResponse.message) };

        if (res.status != 400) {
            if (res.status === 403) {
            }

            else if (res.status === 401) {

            }

            else if (res.status === 500) {

            }

        } else {

        }

        return of(res);
    }

}






