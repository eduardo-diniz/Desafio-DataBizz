import { Component, OnInit } from '@angular/core';

import { ComentarioDataService } from '../backend/comentario-data.service';
import { ComentarioService } from '../backend/comentario.service';
import { Comentario } from '../backend/comentario';

@Component({
  selector: 'app-edit',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  comentario: Comentario
  key: string = '';
  constructor(private comentarioService: ComentarioService, private comentarioDataService: ComentarioDataService) { }


  ngOnInit(): void {

    this.comentario = new Comentario();
  }

  onSubmit() {
      
      this.comentarioService.insert(this.comentario);
    

    this.comentario = new Comentario();

    


    
  }

}
