import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Comentario } from './comentario'
@Injectable({
  providedIn: 'root'
})
export class ComentarioDataService {

  private comentarioSource = new BehaviorSubject({ comentario: null, key: '' });
  currentComentario = this.comentarioSource.asObservable();

  

  constructor() { }


  changeComentario(comentario: Comentario, key: string) {
    this.comentarioSource.next({ comentario: comentario, key: key });
    

  }
}
