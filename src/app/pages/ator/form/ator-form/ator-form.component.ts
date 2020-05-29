import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Ator } from '../../models/Ator';

@Component({
  selector: 'app-ator-form',
  templateUrl: './ator-form.component.html',
  styleUrls: ['./ator-form.component.css']
})
export class AtorFormComponent implements OnInit {
  public exibir: boolean;
  public header: string;
  public formAtor: FormGroup;
  public ator:Ator;

  constructor() { }

  ngOnInit(): void {
    this.exibir = false;
    this.header = '';
  }

  salvar() {
      this.cadastar(this.ator);
      // if (this.questao.id) {
        //this.editar(this.questao);
        //} else {
          //this.cadastar(this.questao);
          //}
          // this.alterar.emit(null);
  }

  cadastar(ator:Ator) {
    this.exibir=false;
  }

  cancelar() {
    this.exibir = false;
  }

  openDialog(edicao: boolean, id: number) {
      this.exibir = true;

  }

}
