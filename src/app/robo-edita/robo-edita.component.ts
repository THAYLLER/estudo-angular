import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-robo-edita',
  templateUrl: './robo-edita.component.html',
  styleUrls: ['./robo-edita.component.css']
})
export class RoboEditaComponent implements OnInit {

  robo: object;
  constructor(private http: HttpClient,private router:Router,
              private rote: ActivatedRoute) { }

  ngOnInit() {
    this.http.get('http://localhost:3000/robo/'+this.rote.snapshot.params['id']).subscribe(x => {
      this.robo = x;
    })
  }
  atualizaRobo(id){

    this.http.put('http://localhost:3000/robo/'+id, this.robo)
      .subscribe(resposta => {
        this.router.navigate(['/robos']);
      }, (erro) => {
        console.log(erro);
      });
  }

}
