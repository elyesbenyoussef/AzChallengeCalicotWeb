export class EnveloppeReponseBase<T> {
    public data: T;
    public isValid: boolean;
    public errors: ErreurBase[];
    public messages: ErreurBase;
    public indEstConsultantation: boolean;
    public dateHeureModification: Date;
    public error: any;

    public contientAlertes: boolean;
    public alertes: ErreurBase[];
}



export class ErreurBase {
    public codeFonctionnel: string;
    public titre: string;
    public details: string[];
    public description: string;
    public severite: number;
    public typeMessage: TypeAffichage;
}



export enum TypeAffichage{
    Toast,
    Popup
}


