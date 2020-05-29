import { DiretorService } from './../../services/diretor.service';
import { Diretor } from './../../models/Diretor';
import { Table } from 'primeng/table';
import { DiretorFormComponent } from './../../form/diretor-form/diretor-form.component';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-diretor-list',
  templateUrl: './diretor-list.component.html',
  styleUrls: ['./diretor-list.component.css']
})
export class DiretorListComponent implements OnInit {
  @ViewChild('DialogCadastrar') dialogDiretor: DiretorFormComponent;
  @ViewChild('dt') table: Table;

  diretorSelecionado:Diretor[];
  diretores: Array<Diretor>;
  dir: Array<any>;
  constructor(private diretorService:DiretorService) { }

  ngOnInit(): void {
    this.listar();


  }
  listar(){
    this.diretorService.listar().subscribe(dados => this.diretores = dados) ;

  }



  openDialog(edicao: boolean, id: number) {
    this.dialogDiretor.openDialog(edicao, id);
  }

  atualizarPagina(event = null) {

  }

}
