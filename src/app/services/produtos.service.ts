import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

import { Produto } from '../model/produto.model';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  
  constructor(private firestore: AngularFirestore) { }

  public getAll() {
    return this.firestore.collection('produtos').snapshotChanges();
  }

  public get(id: string) {
    return this.firestore.collection('produtos').doc(id).ref.get().then((produtoDocumento)=>{
      if (produtoDocumento.exists){
        const produto = produtoDocumento.data();
        
        return{
          id: produtoDocumento.id,
          nome: produto['nome'],
          preco: produto['preco'],
          descricao: produto['descricao'],
          foto: produto['foto']
        };
      }

      return new Produto
    });
  }

  public add(produto: Produto) {
    delete produto.id;
    return this.firestore.collection('produtos').add({
      ...produto
    });
  }

  public edit(produto: Produto) {
    return this.firestore.doc('produtos/'+produto.id).update({
      ...produto
    });
  }

  public delete(id: string) {
    return this.firestore.doc('produtos/'+id).delete();
  }
}
