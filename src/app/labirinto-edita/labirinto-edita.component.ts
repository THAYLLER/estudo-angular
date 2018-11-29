import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-labirinto-edita',
  templateUrl: './labirinto-edita.component.html',
  styleUrls: ['./labirinto-edita.component.css']
})
export class LabirintoEditaComponent implements OnInit {

  labirinto: object;
  constructor(private http: HttpClient,private router:Router,
              private rote: ActivatedRoute) { }

  ngOnInit() {
    this.http.get('http://localhost:3000/labirinto/'+this.rote.snapshot.params['id']).subscribe(x => {
      this.labirinto = x;
    })
  }
  atualizaLabirinto(id){

    this.http.put('http://localhost:3000/labirinto/'+id, this.labirinto)
      .subscribe(resposta => {
        this.router.navigate(['/labirintos']);
      }, (erro) => {
        console.log(erro);
      });
  }
}
