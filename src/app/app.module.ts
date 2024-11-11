import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { IconsComponent } from './components/icons/icons.component';
import { CardsComponent } from './components/cards/cards.component';
import { VendidosComponent } from './components/vendidos/vendidos.component';
import { MenuPopularComponent } from './components/menu-popular/menu-popular.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ItensMenuComponent } from './components/itens-menu/itens-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    IconsComponent,
    CardsComponent,
    VendidosComponent,
    MenuPopularComponent,
    CarouselComponent,
    ItensMenuComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
