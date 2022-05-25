import { Component, OnInit, Output } from '@angular/core';
import { DokumentService } from '../services/dokument.service';

@Component({
  selector: 'app-dokumentenliste',
  templateUrl: './dokumentenliste.component.html',
  styleUrls: ['./dokumentenliste.component.scss']
})
export class DokumentenlisteComponent implements OnInit {

  constructor(public dokumentService: DokumentService) { }

  ngOnInit(): void {}

}

