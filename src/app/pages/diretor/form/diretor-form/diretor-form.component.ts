import { DiretorService } from './../../services/diretor.service';
import { Diretor } from './../../models/Diretor';
import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretor-form',
  templateUrl: './diretor-form.component.html',
  styleUrls: ['./diretor-form.component.css']
})
export class DiretorFormComponent implements OnInit {
  public exibir: boolean;
  public header: string;
  public formDiretor: FormGroup;
  public diretor:Diretor;

  constructor(private diretorServico:DiretorService) { }

  ngOnInit(): void {
    this.exibir = false;
    this.header = '';
    this.diretor = new Diretor();
  }

  salvar() {
    this.diretorServico.salvar(this.diretor);
    this.exibir=false;
  }

  cadastar(diretor:Diretor) {
    this.exibir=false;
  }

  cancelar() {
    this.exibir = false;
  }

  openDialog(edicao: boolean, id: number) {
      this.exibir = true;

  }
}
