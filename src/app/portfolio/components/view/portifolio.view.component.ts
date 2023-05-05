import { Component, OnInit, Output } from '@angular/core';
import { Carrossel } from '../../model/data.model';

@Component({
  selector: 'app-portifolio',
  templateUrl: './portifolio.view.component.html',
  styleUrls: ['./portifolio.view.component.scss']
})
export class PortifolioViewComponent implements OnInit {

  // @ViewChild('scroll') scroll!: HTMLDivElement;
  toggleMenu = false;
  @Output() toggle = false;

  constructor(){
  }


  ngOnInit() {}

  contentData: Carrossel[] = [
    {
      imageSrc: 'https://images.unsplash.com/photo-1675755848374-27b8712b6769?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
      imageAtl: '',
      titleProject: 'Cutelaria',
      paragraphs: 'Projeto de uma cutelararia responsivo que conta com tela de exibição de produtos, história e formulário de contato.',
      linkProject:'https://cutlery-project.vercel.app/index.html',
    },
    {
      imageSrc: 'https://images.unsplash.com/photo-1661956600654-edac218fea67?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyMXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
      imageAtl: '',
      titleProject: 'Pokedex',
      paragraphs: 'Uma réplica do jogo estilo arcade Flappy Bird. O projeto inteiro foi desenvolvido com JavaScript puro, Canvas API, conceitos de orientação a objeto.',
      linkProject: '',
    },
    {
      imageSrc: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
      imageAtl: '',
      titleProject: 'DevLinker',
      paragraphs: 'Uma plataforma que centraliza links úteis onde é possível adicionar, remover, editar, excluir e personalizar links salvos em um banco de dados. O projeto possui gerenciamento de rotas, login com autenticação e todas as operações de um CRUD e foi desenvolvido utilizando ReactJS e Firebase.',
      linkProject: '',
    },
  ]

  public showMenu(): void{
    this.toggleMenu = !this.toggleMenu;
  }

  public showModal(): void {
    this.toggle = !this.toggle;
    console.log(this.toggle);
  }

}
