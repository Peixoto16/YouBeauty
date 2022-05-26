import { Component, OnInit } from '@angular/core';

import { Produto } from 'src/app/model/produto.model';
import { ProdutosService } from 'src/app/services/produtos.service';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.page.html',
  styleUrls: ['./produto.page.scss'],
})
export class ProdutoPage implements OnInit {

  public produtos: Array<Produto> = [ ];

  constructor(private produtosServico: ProdutosService) { }

  ngOnInit() {
    this.produtosServico.getAll().subscribe((produtosColecao) =>{
      console.log(produtosColecao);

      this.produtos = produtosColecao.map((item) => {
        return {
          id: item.payload.doc.id,
          nome: item.payload.doc.data()['nome'],
          descricao: item.payload.doc.data()['descricao'],
          preco: item.payload.doc.data()['preco'],
          foto: item.payload.doc.data()['foto']
        };
      });
    });
  }

}
