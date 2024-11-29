import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { OverlayModule } from '@angular/cdk/overlay';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { IconsComponent } from './components/icons/icons.component';
import { CardsComponent } from './components/cards/cards.component';
import { VendidosComponent } from './components/vendidos/vendidos.component';
import { MenuPopularComponent } from './components/menu-popular/menu-popular.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ItensMenuComponent } from './components/itens-menu/itens-menu.component';
import { PortalModule } from '@angular/cdk/portal';
import { CardDetailsComponent } from './components/card-details/card-details.component';
import { DeliveryComponent } from './components/delivery/delivery.component';
import { AvaliationsComponent } from './components/avaliations/avaliations.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';

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
    ItensMenuComponent,
    CardDetailsComponent,
    DeliveryComponent,
    AvaliationsComponent,
    ContactComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    OverlayModule,
    PortalModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
