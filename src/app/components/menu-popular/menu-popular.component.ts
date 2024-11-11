import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-popular',
  templateUrl: './menu-popular.component.html',
  styleUrls: ['./menu-popular.component.css']
})
export class MenuPopularComponent {
  isSelectedBurguer: boolean = true;
  isSelectedSoda: boolean = false;
  isSelectedFries: boolean = false;
  isSelectedIce: boolean = false;

  typeList: string = 'burguer'

  selectList(listType: string){
    if(listType === 'burguer'){
      this.isSelectedBurguer = !this.isSelectedBurguer
      this.isSelectedSoda = false
      this.isSelectedFries = false
      this.isSelectedIce = false
    }
    if(listType === 'bebidas'){
      this.isSelectedSoda = !this.isSelectedSoda
      this.isSelectedBurguer = false
      this.isSelectedFries = false
      this.isSelectedIce = false
    }
    if(listType === 'acompanhamentos'){
      this.isSelectedFries = !this.isSelectedFries
      this.isSelectedSoda = false
      this.isSelectedBurguer = false
      this.isSelectedIce = false
    }
    if(listType === 'sobremesas'){
      this.isSelectedIce = !this.isSelectedIce
      this.isSelectedSoda = false
      this.isSelectedFries = false
      this.isSelectedBurguer = false

    }

    this.typeList = listType
  }
}
