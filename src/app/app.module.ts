import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CarouselSlideComponent } from './carousel-slide/carousel-slide.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClockComponent } from './shared/components/clock/clock.component';
import { SobreComponent } from './sobre/sobre.component';
import { RouterModule } from '@angular/router';
import { ProjetosComponent } from './projetos/projetos.component';
import { HabilidadesComponent } from './habilidades/habilidades.component';
import { ContatosComponent } from './contatos/contatos.component';
import { NavComponent } from './shared/components/clock/nav/nav.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CarouselSlideComponent,
    ClockComponent,
    SobreComponent,
    ProjetosComponent,
    HabilidadesComponent,
    ContatosComponent,
    NavComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    RouterModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
