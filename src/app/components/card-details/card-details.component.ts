import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.css']
})
export class CardDetailsComponent {
  @Input() item!: any
  @Input() okCard: boolean = false
  @Input() closeOverlay!: () => void;

  close(){
    this.closeOverlay()
  }
}
