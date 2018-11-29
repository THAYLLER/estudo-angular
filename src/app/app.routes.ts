import { LabirintoEditaComponent } from './labirinto-edita/labirinto-edita.component';
import { LabirintoNovoComponent } from './labirinto-novo/labirinto-novo.component';
import { LabirintoListaComponent } from './labirinto-lista/labirinto-lista.component';
import { RoboNovoComponent } from './robo-novo/robo-novo.component';
import {Routes} from "@angular/router"
import {HomeComponent} from "./home/home.component"
import {UsuarioNovoComponent} from "./usuario-novo/usuario-novo.component"
import {UsuarioListaComponent} from "./usuario-lista/usuario-lista.component"
import {UsuarioEditaComponent} from "./usuario-edita/usuario-edita.component"
import { RoboListaComponent } from "./robo-lista/robo-lista.component";
import { RoboEditaComponent } from './robo-edita/robo-edita.component';


export const ROUTES: Routes = [
    {path: '', component: HomeComponent},
    {path: 'usuarios', component:UsuarioListaComponent},
    {path: 'usuario/novo', component:UsuarioNovoComponent},
    {path: 'usuario/editar/:id', component:UsuarioEditaComponent},

    {path: 'robos', component:RoboListaComponent},
    {path: 'robo/novo', component:RoboNovoComponent},
    {path: 'robo/editar/:id', component:RoboEditaComponent},
    {path: 'labirintos', component:LabirintoListaComponent},
    {path: 'labirinto/novo', component:LabirintoNovoComponent},
    {path: 'labirinto/editar/:id', component:LabirintoEditaComponent},

]
