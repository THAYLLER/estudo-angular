import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuario-lista',
  templateUrl: './usuario-lista.component.html',
  styleUrls: ['./usuario-lista.component.css']
})
export class UsuarioListaComponent implements OnInit {

  usuarios: any;

  constructor(private http: HttpClient,
    private router: Router) {}

  ngOnInit() {
      this.http.get('http://localhost:3000/usuario').subscribe(x => {
        console.log('conseguiu consumir' + x);
        this.usuarios = x;
    })
  }
  removeUsuario(ww){
    this.http.delete('http://localhost:3000/usuario/'+ww)
      .subscribe(retorno => {
        this.ngOnInit();
        console.log("Usuario removido");
      },
      (erro) => {
        console.log(erro);
      }
      );
  }

  atualizaUsuario(id){
    this.router.navigate(['/usuario/editar/', id])
  }



}
