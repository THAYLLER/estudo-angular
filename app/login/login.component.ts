import { Autenticacao } from './../autenticacao.service';
import { clientesService } from './../clientes.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { Clientes } from '../shared/clientes.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [clientesService]
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  public addUser: FormGroup;
  public cliente: Clientes = new Clientes(null,'','',null,'','','',null,'','','')

  constructor(private Autenticacao:Autenticacao,private rota:Router,private route: ActivatedRoute,private clientesService: clientesService,private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.loginForm =this.formBuilder.group({
      nome: ['', Validators.required],
      usuario: ['', Validators.required],
      senha: ['', Validators.required]
    })
  }
  public logar(): void {

    this.Autenticacao.autenticar()
  }
}
