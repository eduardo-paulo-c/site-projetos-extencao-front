import { Component } from '@angular/core';

@Component({
  selector: 'app-projeto',
  templateUrl: './projeto.component.html',
  styleUrls: ['./projeto.component.css']
})
export class ProjetoComponent {
  displayedColumns: string[] = ['titulo', 'descricao', 'periodo', 'cursos', 'cr', 'acoes'];
  dataSource = [
    {
      titulo: 'Projeto 1',
      descricao: 'Descrição do projeto 1',
      periodo: '6º',
      cursos: '6, 4, 2',
      cr: '6.5'
    },
  ];
}


