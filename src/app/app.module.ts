import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { UsuarioListaComponent } from './usuario-lista/usuario-lista.component';
import { UsuarioEditaComponent } from './usuario-edita/usuario-edita.component';
import { UsuarioNovoComponent } from './usuario-novo/usuario-novo.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';

import {ROUTES} from './app.routes';
import { HttpClientModule } from '@angular/common/http';
import { RoboListaComponent } from './robo-lista/robo-lista.component';
import { RoboEditaComponent } from './robo-edita/robo-edita.component';
import { RoboNovoComponent } from './robo-novo/robo-novo.component';
import { LabirintoListaComponent } from './labirinto-lista/labirinto-lista.component';
import { LabirintoEditaComponent } from './labirinto-edita/labirinto-edita.component';
import { LabirintoNovoComponent } from './labirinto-novo/labirinto-novo.component';

import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';

@NgModule({
  declarations: [
    AppComponent,
    UsuarioListaComponent,
    UsuarioEditaComponent,
    UsuarioNovoComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    RoboListaComponent,
    RoboEditaComponent,
    RoboNovoComponent,
    LabirintoListaComponent,
    LabirintoEditaComponent,
    LabirintoNovoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES),
    Ng4LoadingSpinnerModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
