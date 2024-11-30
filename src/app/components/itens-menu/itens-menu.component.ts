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
      hasBackdrop: true
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

        preco: 25.00,

        img: "../../../assets/light house.png"

      },

      {

        nome: "Duplo Cheddar ",

        descricao: "Pão com gergelim, dois hambúrgueres de carne bovina, queijo cheddar cremoso e cebola caramelizada.",

        preco: 28.00,

        img: "../../../assets/double cheddar.png"

      },

      {

        nome: "Chicken Burger",

        descricao: "Pão com gergelim, filé de frango empanado, alface, maionese.",

        preco: 16.00,

        img: "../../../assets/chicken burguer.png"

      },

      {

        nome: "Light Veggie",

        descricao: "Pão integral, 0% carne. Pão com gergelim, maionese, alface, tomate, cebola, ketchup, picles, cheddar fatiado e hambúrguer à base de proteína vegetal. ",

        preco: 22.00,

        img: "../../../assets/light veggie.png"

      },
    ]
    }else if(typeList === "bebidas"){
      this.list = [

          {

           nome: "Coca-Cola 350ml",

            descricao: "Coca-Cola em sua versão lata de 350ml. A escolha perfeita para acompanhar qualquer refeição ou para momentos de descontração.",

            preco: 7.00,

            img: "../../../assets/coca.png"

          },

          {

           nome: "Coca-Cola Zero 350ml",

            descricao: "Coca-Cola Zero em sua versão lata de 350ml. A escolha perfeita para acompanhar qualquer refeição ou para momentos de descontração.",

            preco: 7.00,

            img: "../../../assets/coca-zero.png"

          },

          {

           nome: "Guaraná Antarctica 350ml",

            descricao: "Guaraná Antarctica em sua versão lata de 350ml. Com seu sabor icônico e refrescante, é a escolha perfeita para acompanhar qualquer refeição ou para momentos de descontração.",

            preco: 7.00,

            img: "../../../assets/guarana.png"

          },

          {

            nome: "Fanta Laranja 350ml",

            descricao: "Fanta Laranja em sua versão lata de 350ml. Feita com a combinação perfeita. Conhecida por sua pureza e frescor incomparáveis.",

            preco: 7.00,

            img: "../../../assets/fanta.png"

          },

        ]


    }else if(typeList === "sobremesas"){
      this.list = [

      {

         nome: "Sundae de Chocolate",

          descricao: "Mix de baunilha com calda sabor chocolate.",

          preco: 10.00,

          img: "https://d3sn2rlrwxy0ce.cloudfront.net/Sundae-Chocolate-thumb.png?mtime=20210916155926&focal=none"

        },

      {

         nome: "Milkshake de Baunilha",

          descricao: "O Milkshake pode ser sua sobremesa ou seu acompanhamento. Shake à base de baunilha com sabor baunilha.",

          preco: 15.00,

          img: "https://d3sn2rlrwxy0ce.cloudfront.net/Nova-Embalagem_Shake-Baunilha_Externa.png?mtime=20240604103843&focal=none"

        },

      {

         nome: "Milkshake de Morango",

          descricao: "O Milkshake pode ser sua sobremesa ou seu acompanhamento. Shake à base de baunilha com sabor morango e calda de morango.",

          preco: 15.00,

          img: "https://d3sn2rlrwxy0ce.cloudfront.net/Nova-Embalagem_Shake-Morango_Externa.png?mtime=20240604104134&focal=none"

        },

      {

         nome: "Casquinha de Baunilha",

          descricao: "Deliciosa sobremesa servida numa casquinha muito crocante, sabor Baunilha.",

          preco: 4.00,

          img: "https://d3sn2rlrwxy0ce.cloudfront.net/Casquinha-Baunilha-thumb.png?mtime=20210916162214&focal=none"

        },

      {

         nome: "Casquinha Mista",

          descricao: "Deliciosa sobremesa servida numa casquinha muuuito crocante, massa mista de Baunilha e Doce de Leite.",

          preco: 4.00,

          img: "https://d3sn2rlrwxy0ce.cloudfront.net/Casquinha-Mista-thumb.png?mtime=20210916162351&focal=none"

        },

      {

         nome: "Milkshake de Chocolate",

          descricao: "O MilkShake pode ser sua sobremesa ou seu acompanhamento. Milkshake à base de baunilha com sabor chocolate e calda de chocolate.",

          preco: 15.00,

          img: "https://d3sn2rlrwxy0ce.cloudfront.net/Nova-Embalagem_Shake-Chocolate_Externa.png?mtime=20240604104016&focal=none"

        },



      ]
    }
  }
}
