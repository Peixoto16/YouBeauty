import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Produto } from 'src/app/model/produto.model';
import { ProdutosService } from 'src/app/services/produtos.service';

@Component({
  selector: 'app-produto-novo',
  templateUrl: './produto-novo.page.html',
  styleUrls: ['./produto-novo.page.scss'],
})
export class ProdutoNovoPage implements OnInit {
  public produto: Produto = new Produto();

  public edicaoHabilitada: boolean = false;

  constructor(private produtoService: ProdutosService,
              private rota: Router) { }

  ngOnInit() {
  }

  public cadastrar() {
    this.produtoService.add(this.produto).then((resposta)=> {
      console.log(resposta);
      this.rota.navigate(['/produto']);
    })
    
  }

  public cancelarOption() {
    this.edicaoHabilitada = false;
    this.rota.navigate(['/produto']);
  }
}
