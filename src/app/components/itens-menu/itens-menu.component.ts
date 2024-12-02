import { Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { CdkPortal } from '@angular/cdk/portal';
import { Component, Input, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-itens-menu',
  templateUrl: './itens-menu.component.html',
  styleUrls: ['./itens-menu.component.css']
})
export class ItensMenuComponent {
  list:{ nome: string; descricao: string; preco: number; img: string; }[] = []
  @Input() typeList!: string
  @ViewChild(CdkPortal) portal!: CdkPortal
  selectedItem: any;
  constructor(private overlay: Overlay){}

  popUpCard(index: number){
    this.selectedItem = this.list[index]
    const config = new OverlayConfig({
      positionStrategy: this.overlay.position().global().centerHorizontally().centerVertically(),
      hasBackdrop: true,
    })
    const overlayRef = this.overlay.create(config);

    overlayRef.attach(this.portal);
    overlayRef.backdropClick().subscribe(()=> overlayRef.detach())

  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['typeList']) {
      this.updateList(changes['typeList'].currentValue);
    }
  }


  updateList(typeList: string){
    if(typeList === "burguer"){
      this.list = [
      {

        nome: "Light House",

        descricao: "Pão com gergelim, hambúrguer de carne bovina, alface, tomate, cebola, picles, ketchup e maionese.",

        preco: 233,

        img: "assets/light house.png"

      },

      {

        nome: "Duplo Cheddar ",

        descricao: "Pão com gergelim, dois hambúrgueres de carne bovina, queijo cheddar cremoso e cebola caramelizada.",

        preco: 210,

        img: "assets/double cheddar.png"

      },

      {

        nome: "Chicken Burger",

        descricao: "Pão com gergelim, filé de frango empanado, alface, maionese.",

        preco: 150,

        img: "assets/chicken burguer.png"

      },

      {

        nome: "Light Veggie",

        descricao: "Pão integral, 0% carne. Pão com gergelim, maionese, alface, tomate, cebola, ketchup, picles, cheddar fatiado e hambúrguer à base de proteína vegetal. ",

        preco: 190,

        img: "assets/light veggie.png"

      },
    ]
    }else if(typeList === "bebidas"){
      this.list = [

          {

           nome: "Coca-Cola 350ml",

            descricao: "Coca-Cola em sua versão lata de 350ml. A escolha perfeita para acompanhar qualquer refeição ou para momentos de descontração.",

            preco: 150,

            img: "assets/coca.png"

          },

          {

           nome: "Coca-Cola Zero 350ml",

            descricao: "Coca-Cola Zero em sua versão lata de 350ml. A escolha perfeita para acompanhar qualquer refeição ou para momentos de descontração.",

            preco: 0,

            img: "assets/coca-zero.png"

          },

          {

           nome: "Guaraná Antarctica 350ml",

            descricao: "Guaraná Antarctica em sua versão lata de 350ml. Com seu sabor icônico e refrescante, é a escolha perfeita para acompanhar qualquer refeição ou para momentos de descontração.",

            preco: 160,

            img: "assets/guarana.png"

          },

          {

            nome: "Fanta Laranja 350ml",

            descricao: "Fanta Laranja em sua versão lata de 350ml. Feita com a combinação perfeita. Conhecida por sua pureza e frescor incomparáveis.",

            preco: 160,

            img: "assets/fanta.png"

          },

        ]


    }else if(typeList === "acompanhamentos"){
      this.list = [

          {

           nome: "Batata Cheddar",

            descricao:"Nossa deliciosas e crocantes batatas com cheddar e bacon em cubos.",

            preco: 400,

            img: "assets/fritas.png"

          },

          {

           nome: "Chicken Nuggets",

            descricao: "Pedaços de frango empanados, crocantes e com tempero suave. Com nossos molhos especiais, o seu pedido fica ainda mais gostoso.",

            preco:  300,

            img: "assets/franguert.png"

          },

          {

           nome: "Onion Rings",

            descricao: "Cebolas cortadas em forma de anéis, empanadas com uma leve camada de farinha de rosca já temperada e fritas em óleo bem quente.",

            preco: 250,

            img: "assets/onion.png"

          },

          {

            nome: "Batata Frita",

            descricao: "Nossas deliciosas e crocantes batatas, preparadas no ponto certo para agradar a todos.",

            preco: 350,

            img: "assets/fritas-normal.png"

          },

        ]


    }
    else if(typeList === "sobremesas"){
      this.list = [

      {

         nome: "Sundae de Chocolate",

          descricao: "Mix de baunilha com calda sabor chocolate.",

          preco: 300,

          img: "assets/sundae2.png"

        },

      {

         nome: "Milkshake de Baunilha",

          descricao: "O Milkshake pode ser sua sobremesa ou seu acompanhamento. Shake à base de baunilha com sabor baunilha.",

          preco: 500,

          img: "assets/baunilha.png"

        },

      {

         nome: "Milkshake de Morango",

          descricao: "O Milkshake pode ser sua sobremesa ou seu acompanhamento. Shake à base de baunilha com sabor morango e calda de morango.",

          preco: 500,

          img: "assets/milkshake.png"

        },

      {

         nome: "Casquinha de Baunilha",

          descricao: "Deliciosa sobremesa servida numa casquinha muito crocante, sabor Baunilha.",

          preco: 200,

          img: "assets/sorvete.png"

        },





      ]
    }
  }
}
