import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CriarorcamentoComponent } from './components/pages/orcamento/criarorcamento/criarorcamento.component';

@NgModule({
  declarations: [
    AppComponent,
    CriarorcamentoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
