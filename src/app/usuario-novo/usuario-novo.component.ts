import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuario-novo',
  templateUrl: './usuario-novo.component.html',
  styleUrls: ['./usuario-novo.component.css']
})
export class UsuarioNovoComponent implements OnInit {

  usuario = {};
  data = new Date();

  constructor(private http:HttpClient, private router: Router) { }

  ngOnInit() {
  }

  criaUsuario(){
    this.usuario['data'] = this.data.getDate() + "/" + this.data.getMonth() + "/" + this.data.getFullYear();
    this.usuario['status'] = "ATIVO";

    this.http.post('http://localhost:3000/usuario', this.usuario)
      .subscribe(resposta => {
          this.router.navigate(['/usuarios']);
      }, (erro) => {
        console.log(erro);
      }
    );
  }

}
