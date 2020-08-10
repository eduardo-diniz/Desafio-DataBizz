import { AngularFireDatabase } from '@angular/fire/database';
import { Injectable } from '@angular/core';
import { Comentario } from './comentario';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ComentarioService {

  constructor(private database:AngularFireDatabase) { }

//insere um comentario no banco
  insert(comentario: Comentario) {
    this.database.list('comentario').push(comentario)
      .then((result: any) => {
        console.log(result.key);
      });

  }

//lista todos os campos do banco
  getAll() {
    return this.database.list<any[]>('comentario')
      .snapshotChanges()
      .pipe(
        map(changes => {
         //retorna um [] com os valores(.val) de cada posição do banco.
          return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))

        })
    )
    
  }

  
}
