import { Injectable } from '@angular/core';
import { Dokument } from '../dokument';

@Injectable({
  providedIn: 'root'
})
export class DokumentService {

  constructor() { }

  dokumente: Dokument[] = [];

  getDokumente(): Dokument[] {
    return this.dokumente;
  }

  addDokument(neuesDokument: Dokument) {
    this.dokumente.push(neuesDokument);
  }

  getDateigroesseSumme(): number {
    let groesse: number = 0;

    for (let dokument of this.dokumente) {
      groesse = groesse + dokument.groesseInMB;
    }

    return groesse;
  }

  deleteDokument(dok: Dokument) {
    const index: number = this.dokumente.indexOf(dok);
    if (index !== -1) {
      this.dokumente.splice(index, 1);
    }
  }


}
