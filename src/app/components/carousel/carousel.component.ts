import { Component, ElementRef, HostListener, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {
  @Input() nameCarousel!: string;
  @Input() listItems!: any[]

  isDragging = false;
  startPosition = 0;
  scrollLeft = 0;

  @ViewChild('carousel', { static: true }) carousel!: ElementRef;

  @HostListener('mousedown', ['$event'])
  onMouseDown(event: MouseEvent): void {
    this.isDragging = true;
    this.startPosition = event.pageX - this.carousel.nativeElement.offsetLeft;
    this.scrollLeft = this.carousel.nativeElement.scrollLeft;
    event.preventDefault();
  }

  @HostListener('window:mouseup')
  onMouseUp(): void {
    this.isDragging = false;
  }

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {
    if (!this.isDragging) return;
    event.preventDefault();
    const x = event.pageX - this.carousel.nativeElement.offsetLeft;
    const scroll = (x - this.startPosition) * 1.5;
    this.carousel.nativeElement.scrollLeft = this.scrollLeft - scroll;
  }
}
