import { Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { CdkPortal } from '@angular/cdk/portal';
import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  messageForm!: FormGroup;
  sended: boolean = false
  @ViewChild(CdkPortal) portal!: CdkPortal
  constructor(private overlay: Overlay){}


  ngOnInit(){
    this.messageForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),
      email:  new FormControl('', [Validators.required, Validators.email]),
      message: new FormControl('', [Validators.required, Validators.minLength(20), Validators.maxLength(300)])
    })
  }
  popUpCard(){
    const config = new OverlayConfig({
      positionStrategy: this.overlay.position().global().centerHorizontally().centerVertically(),
      hasBackdrop: true
    })
    const overlayRef = this.overlay.create(config);

    overlayRef.attach(this.portal);
    overlayRef.backdropClick().subscribe(()=> overlayRef.detach())
  }


  submit(){
    if (this.messageForm.valid) {
      this.popUpCard()
      this.messageForm.reset();
    }
  }

  getName(){
    return this.messageForm.get('name')!
  }
  getEmail(){
    return this.messageForm.get('email')!
  }
  getMessage(){
    return this.messageForm.get('message')!
  }
}
