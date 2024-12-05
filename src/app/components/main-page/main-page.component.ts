import { Component } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {
  title = 'light-burger';
  dataLoaded: boolean = false;
  loadingState: string = 'fade-in';


  ngOnInit(): void {
    setTimeout(() => {
      this.loadingState = 'fade-out'; // Transição de saída
      setTimeout(() => {
        this.dataLoaded = true;  // Carrega o conteúdo após a animação de saída
      }, 500); // Tempo da animação deve ser o mesmo do fade-out
    }, 1500);
  }

  maisVendidos = [  {
    avaliation: ' 4.9  (941) ',
    title: 'Light House',
    description: 'Pão com gergelim, hambúrguer de carne bovina, alface, tomate, cebola, picles, ketchup e maionese.',
    imageSrc: 'assets/light house.png',
    price: 'R$24,90'
  },
  {
    avaliation: ' 4.8  (803) ',
    title: 'Duplo Cheddar',
    description: 'Pão com gergelim, dois hambúrgueres de carne bovina, queijo cheddar cremoso e cebola caramelizada.',
    imageSrc: 'assets/double cheddar.png',
    price: 'R$24,90'
  },
  {
    avaliation: ' 4.8  (704) ',
    title: 'Chicken Burger',
    description: 'Pão com gergelim, filé de frango empanado, alface, maionese.',
    imageSrc: 'assets/chicken burguer.png',
    price: 'R$24,90'
  },
  {
    avaliation: ' 4.8  (654) ',
    title: 'Light Original',
    description: 'Pão tipo brioche, hambúrguer de carne bovina, maionese temperada e cebola salteada.',
    imageSrc: 'assets/light original.png',
    price: 'R$24,90'
  },
  {
    avaliation: ' 4.8  (441) ',
    title: 'Light Premium',
    description: 'Dois deliciosos hambúrgueres grelhados no fogo como churrasco, cheddar fatiado, cebola e picles.',
    imageSrc: 'assets/big mac.png',
    price: 'R$24,90'
  },
  {
    avaliation: ' 4.5  (341) ',
    title: 'Batata Cheddar',
    description: 'Nossa deliciosas e crocantes batatas com cheddar e bacon em cubos.',
    imageSrc: 'assets/fritas.png',
    price: 'R$24,90'
  }]

  promocoes = [  {
    avaliation: ' 4.9  (933) ',
    title: 'Onion Light',
    description: 'Hambúrguer grelhado no fogo como churrasco, cheddar fatiado, onion rings, molho barbecue e maionese.',
    imageSrc: 'assets/onionlight.png',
    price: 'R$22,90'
  },
  {
    avaliation: ' 4.9  (862) ',
    title: 'Milkshake de Morango',
    description: 'Milkshake à base de baunilha com sabor morango e calda de morango. O milkshake pode ser sua sobremesa.',
    imageSrc: 'assets/milkshake.png',
    price: 'R$14,90'
  },
  {
    avaliation: ' 4.7  (733) ',
    title: 'Light House Jr.',
    description: 'Pão com gergelim, hambúrguer de carne bovina, alface, tomate, cebola, picles, ketchup e maionese.',
    imageSrc: 'assets/jr.png',
    price: 'R$12,90'
  },
  {
    avaliation: ' 4.9  (643) ',
    title: 'Chicken 10 Nuggets',
    description: 'Pedaços de frango empanados, crocantes e com tempero suave, com nossos molhos especiais.',
    imageSrc: 'assets/franguert.png',
    price: 'R$15,90'
  },
  {
    avaliation: ' 4.8  (562) ',
    title: 'Sundae de Chocolate',
    description: 'Mix de baunilha com calda sabor chocolate. Experimente agora! Peça no app e ganhe desconto no delivery.',
    imageSrc: 'assets/sundae.png',
    price: 'R$9,90'
  },
  {
    avaliation: ' 4.8  (451) ',
    title: 'Chicken Burger',
    description: 'Pão com gergelim, filé de frango empanado, alface, maionese. Economize já pedindo no nosso app.',
    imageSrc: 'assets/chicken burguer.png',
    price: 'R$14,90'
  },
]
}
