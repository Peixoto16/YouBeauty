import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public titulo = 'Central de Acesso';
  public localizacao = './../../assets/Imagens/capa.jpg';
  public login = 'exemplo@gmail.com';
  public senha = 'senha1';

  constructor() { }

  ngOnInit() {
  }

  public exibirValor(){
    console.log('login', this.login);
    console.log('senha', this.senha);
  }

}

