import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SobreComponent } from './sobre/sobre.component';
import { HomeComponent } from './home/home.component';
import { ProjetosComponent } from './projetos/projetos.component';
import { HabilidadesComponent } from './habilidades/habilidades.component';
import { ContatosComponent } from './contatos/contatos.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'sobre', component: SobreComponent },
  {path:'projetos', component: ProjetosComponent },
  {path:'habilidades', component: HabilidadesComponent },
  {path:'contatos', component: ContatosComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
