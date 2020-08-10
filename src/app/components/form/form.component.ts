import { Component, OnInit } from '@angular/core';
import { ComentarioService } from '../backend/comentario.service';
import { Comentario } from '../backend/comentario';

@Component({
  selector: 'app-edit',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  comentario: Comentario
  key: string = '';
  constructor(private comentarioService: ComentarioService) { }


  ngOnInit(): void {

    this.comentario = new Comentario();
  }

  onSubmit() {

    this.comentarioService.insert(this.comentario);


    this.comentario = new Comentario();





  }

}
