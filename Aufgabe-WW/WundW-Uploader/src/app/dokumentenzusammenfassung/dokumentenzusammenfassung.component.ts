import { Component, OnInit } from '@angular/core';
import { DokumentService } from '../services/dokument.service';

@Component({
  selector: 'app-dokumentenzusammenfassung',
  templateUrl: './dokumentenzusammenfassung.component.html',
  styleUrls: ['./dokumentenzusammenfassung.component.scss']
})
export class DokumentenzusammenfassungComponent implements OnInit {

  constructor(public dokumentService: DokumentService) { }

  ngOnInit(): void {
  }

}
