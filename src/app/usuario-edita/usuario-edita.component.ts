import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-usuario-edita',
  templateUrl: './usuario-edita.component.html',
  styleUrls: ['./usuario-edita.component.css']
})
export class UsuarioEditaComponent implements OnInit {

  usuarios: object;
  constructor(private http: HttpClient,private router:Router,
              private rote: ActivatedRoute) { }

  ngOnInit() {
    this.http.get('http://localhost:3000/usuario/'+this.rote.snapshot.params['id']).subscribe(x => {
      this.usuarios = x;
    })

  }
  atualiza_usuario(id){
    this.http.put('http://localhost:3000/usuario/'+id, this.usuarios)
      .subscribe(resposta => {
        this.router.navigate(['/usuarios']);
      }, (erro) => {
        console.log(erro);
      });
  }
}
