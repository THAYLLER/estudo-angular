import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-robo-novo',
  templateUrl: './robo-novo.component.html',
  styleUrls: ['./robo-novo.component.css']
})
export class RoboNovoComponent implements OnInit {

  robo = {};
  data = new Date();

  constructor(private http:HttpClient, private router: Router) { }

  ngOnInit() {
  }

  criaRobo(){
    this.robo['data'] = this.data.getDate() + "/" + this.data.getMonth() + "/" + this.data.getFullYear();
    this.robo['status'] = "ATIVO";

    this.http.post('http://localhost:3000/robo', this.robo)
      .subscribe(resposta => {
          this.router.navigate(['/robos']);
      }, (erro) => {
        console.log(erro);
      }
    );
  }

}
