import { Component, OnInit } from '@angular/core';
import { Dokument } from '../dokument';
import { DokumentService } from '../services/dokument.service';

@Component({
  selector: 'app-uploadbereich',
  templateUrl: './uploadbereich.component.html',
  styleUrls: ['./uploadbereich.component.scss']
})
export class UploadbereichComponent implements OnInit {

  constructor(public dokumentService: DokumentService) { }

  ngOnInit(): void {
  }

  /*
    Funktion, damit sich das Dialog-Fenster zur Dokumenten-Auswahl öffnet
  */
  openFileDialog() {
    document.querySelector('input')?.click();
  }

  /*
  Funktion, um Dateien hochzuladen und dieses dem Dokumenten-Array hinzuzufügen
  */
  fileSelected(files: any) {
    const element = files.currentTarget as HTMLInputElement;
    let fileList: FileList | null = element.files;
    if (fileList) {

      for (let i = 0; i < fileList?.length; i++) {
        let file = fileList[i];
        let dokument: Dokument = {

          name: file.name,
          dateityp: "pdf",
          dummie: false,
          groesseInMB: file.size / 1024 / 1024,
          ordnungsbegriff: "asfsadasf",
          notiz: "ffffffffffff"
        }

        this.dokumentService.addDokument(dokument);

      }

    }

  }
}
