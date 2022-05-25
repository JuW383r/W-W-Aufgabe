import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Dokument } from '../dokument';
import { DokumentService } from '../services/dokument.service';

@Component({
  selector: 'app-dokument',
  templateUrl: './dokument.component.html',
  styleUrls: ['./dokument.component.scss']
})
export class DokumentComponent implements OnInit {

  @Output() loeschEvent = new EventEmitter<Dokument>();
  
  @Input() dokument: Dokument =
    {
      name: "asfgdsads",
      dateityp: "pdf",
      dummie: false,
      groesseInMB: 0,
      ordnungsbegriff: "asfsadasf",
      notiz: "ffffffffffff"
    };

  constructor() { }

  ngOnInit(): void { }

  //Funktion, die für das Event benötigt wird, um das Löschen an den dokumentService hochzugeben
  loeschen() {
    this.loeschEvent.emit(this.dokument);
  }


}
