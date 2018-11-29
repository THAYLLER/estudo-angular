import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-robo-lista',
  templateUrl: './robo-lista.component.html',
  styleUrls: ['./robo-lista.component.css']
})
export class RoboListaComponent implements OnInit {

  robos: any;

  constructor(private http: HttpClient,
    private router: Router) {}

  ngOnInit() {
      this.http.get('http://localhost:3000/robo').subscribe(x => {
        console.log('conseguiu consumir' + x);
        this.robos = x;
    })
  }
  removeRobo(ww){
    this.http.delete('http://localhost:3000/robo/'+ww)
      .subscribe(retorno => {
        this.ngOnInit();
        console.log("robo removido");
      },
      (erro) => {
        console.log(erro);
      }
      );
  }

  atualizaRobo(id){
    this.router.navigate(['/robo/editar/', id])
  }

}
