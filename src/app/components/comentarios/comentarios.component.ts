import { Component, OnInit } from '@angular/core';

import { ComentarioDataService } from '../backend/comentario-data.service';
import { ComentarioService } from '../backend/comentario.service';
import { Comentario } from '../backend/comentario';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.css']
})
export class ComentariosComponent implements OnInit {
  
  comentarios: Observable<any>;


  constructor(private contatoService: ComentarioService, private contatoDataService: ComentarioDataService) { }


  ngOnInit(): void {

    this.comentarios = this.contatoService.getAll();
   
  
  }



}
