import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.css']
})
export class DeliveryComponent {
  constructor(private router: Router){}

  navigateToDownload(){
    this.router.navigate(['/download'])
  }
}
