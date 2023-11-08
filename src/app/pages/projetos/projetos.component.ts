import { Component } from '@angular/core';

@Component({
  selector: 'app-projetos',
  templateUrl: './projetos.component.html',
  styleUrls: ['./projetos.component.css']
})
export class ProjetosComponent {
  displayedColumns: string[] = ['titulo', 'descricao', 'periodo', 'cursos', 'cr', 'acoes'];
  dataSource = [
    {
      titulo: 'Projeto 1',
      descricao: 'Descrição do projeto 1',
      periodo: '6º',
      cursos: '6, 4, 2',
      cr: '6.5'
    },
    {
      titulo: 'Projeto 2',
      descricao: 'Descrição do projeto 2',
      periodo: '3º',
      cursos: '6, 4, 3',
      cr: '6.5'
    },
  ];
}
