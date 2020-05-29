import { Component, OnInit, ViewChild } from '@angular/core';
import { AtorFormComponent } from '../../form/ator-form/ator-form.component';
import { Table } from 'primeng/table';
import { Ator } from '../../models/Ator';

@Component({
  selector: 'app-ator-list',
  templateUrl: './ator-list.component.html',
  styleUrls: ['./ator-list.component.css']
})
export class AtorListComponent implements OnInit {
  @ViewChild('DialogCadastrar') dialogAtor: AtorFormComponent;
  @ViewChild('dt') table: Table;

  atorSelecionado:Ator[];
  atores: any[];



  constructor() { }

  ngOnInit(): void {

    this.atores = [
            { id: '1', nome: 'Hercules' },
            { id: '2', nome: 'Jonas' },
            { id: '3', nome: 'Joao' },
            { id: '4', nome: 'Marcio' },
            { id: '5', nome: 'Maria' }


  ];
  }

  openDialog(edicao: boolean, id: number) {
    this.dialogAtor.openDialog(edicao, id);
  }

  atualizarPagina(event = null) {

  }
}
