import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { UploadbereichComponent } from './uploadbereich/uploadbereich.component';
import { AnzeigebereichComponent } from './anzeigebereich/anzeigebereich.component';
import { AktionsbereichComponent } from './aktionsbereich/aktionsbereich.component';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { DokumentenlisteComponent } from './dokumentenliste/dokumentenliste.component';
import { DokumentenzusammenfassungComponent } from './dokumentenzusammenfassung/dokumentenzusammenfassung.component';
import { DokumentComponent } from './dokument/dokument.component';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UploadbereichComponent,
    AnzeigebereichComponent,
    AktionsbereichComponent,
    DokumentenlisteComponent,
    DokumentenzusammenfassungComponent,
    DokumentComponent
  ],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatDividerModule,
    MatListModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
