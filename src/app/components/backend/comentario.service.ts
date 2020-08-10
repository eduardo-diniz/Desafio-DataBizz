import { AngularFireDatabase } from '@angular/fire/database';
import { Injectable } from '@angular/core';
import { Comentario } from './comentario';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ComentarioService {

  constructor(private db:AngularFireDatabase) { }


  insert(comentario: Comentario) {
    this.db.list('comentario').push(comentario)
      .then((result: any) => {
        console.log(result.key);
      });

  }


  getAll() {
    return this.db.list<any[]>('comentario')
      .snapshotChanges()
      .pipe(
        map(changes => {
         
          return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))

        })
    )
    
  }

  
}
