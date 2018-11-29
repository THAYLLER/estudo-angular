import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-labirinto-lista',
  templateUrl: './labirinto-lista.component.html',
  styleUrls: ['./labirinto-lista.component.css']
})
export class LabirintoListaComponent implements OnInit {

  labirintos: any;

  constructor(private http: HttpClient,
    private router: Router) {}

  ngOnInit() {
      this.http.get('http://localhost:3000/labirinto').subscribe(x => {
        console.log('conseguiu consumir' + x);
        this.labirintos = x;
    })
  }
  removeLabirinto(ww){
    this.http.delete('http://localhost:3000/labirinto/'+ww)
      .subscribe(retorno => {
        this.ngOnInit();
        console.log("Labirinto removido");
      },
      (erro) => {
        console.log(erro);
      }
      );
  }

  atualizaLabirinto(id){
    this.router.navigate(['/labirinto/editar/', id])
  }

}
