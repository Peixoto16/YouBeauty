import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Cliente } from '../model/cliente.model';

@Injectable({
    providedIn: 'root'
})
export class ClienteService {
    constructor(private firestore: AngularFirestore) { }

    public getAll() {
        return this.firestore.collection('clientes')
                   .snapshotChanges();
    }

    public get(id: string) {
        return this.firestore
               .collection('clientes').doc(id)
               .ref.get().then((item)=>{
                    if (item.exists) {
                        const cliente = item.data();
                        return {
                            id: item.id,
                            nome: cliente['nome'],
                            email: cliente['email'],
                            senha: cliente['senha']
                        }
                    }

                    return new Cliente();
               });
    }

    public add(cliente: Cliente) {
        delete cliente.id;
        return this.firestore
                   .collection('clientes').add({
                       ...cliente
                   });
    }

    public edit(cliente: Cliente) {
        return this.firestore
                    .doc('clientes/'+cliente.id).update({
                        ...cliente
                    });
    }

    public delete(id: string) {
        return this.firestore.doc('clientes/'+id).delete();
    }
}