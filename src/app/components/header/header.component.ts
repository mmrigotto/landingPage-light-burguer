import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {


  constructor(private router: Router){}
  scrollTo(sectionId: string): void {
    if (this.router.url === '/download') {
      // Navega para a página principal e realiza o scroll após a navegação
      this.router.navigate(['/']).then(() => {
        this.scrollToSection(sectionId);
      });
    } else {
      // Realiza o scroll diretamente se já estiver na página principal
      this.scrollToSection(sectionId);
    }
  }

  private scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    
  }
}
