import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-labirinto-novo',
  templateUrl: './labirinto-novo.component.html',
  styleUrls: ['./labirinto-novo.component.css']
})
export class LabirintoNovoComponent implements OnInit {

  labirinto = {};
  data = new Date();

  constructor(private http:HttpClient, private router: Router) { }

  ngOnInit() {
  }

  criaLabirinto(){
    this.labirinto['data'] = this.data.getDate() + "/" + this.data.getMonth() + "/" + this.data.getFullYear();
    this.labirinto['status'] = "ATIVO";

    this.http.post('http://localhost:3000/labirinto', this.labirinto)
      .subscribe(resposta => {
          this.router.navigate(['/labirintos']);
      }, (erro) => {
        console.log(erro);
      }
    );
  }

}
