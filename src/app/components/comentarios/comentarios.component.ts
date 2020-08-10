import { Component, OnInit } from '@angular/core';

import { ComentarioService } from '../backend/comentario.service';
import { Comentario } from '../backend/comentario';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.scss']
})
export class ComentariosComponent implements OnInit {

  comentarios: Observable<any>;


  constructor(private contatoService: ComentarioService) { }


  ngOnInit(): void {

    this.comentarios = this.contatoService.getAll();


  }



}
