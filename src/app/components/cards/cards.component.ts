import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {
  @Input() avaliation!: string;
  @Input() title!: string;
  @Input() imageSrc!: string;
  @Input() description!: string;
  @Input() price!: string;
}
