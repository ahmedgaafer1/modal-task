import { NgIf } from '@angular/common';
import { Component, HostListener  } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';


@Component({
  selector: 'app-number-header',
  standalone: true,
  imports: [NgIf , MatTooltipModule],
  templateUrl: './number-header.component.html',
  styleUrl: './number-header.component.scss'
})
export class NumberHeaderComponent {
  isMenuOpen = false;
  text = 'الشركة الألمانية للإبادة الفورية';
  isTruncated = false;

  toggleMenu(event: Event) {
    event.stopPropagation(); 
    this.isMenuOpen = !this.isMenuOpen;
  }

  @HostListener('document:click', ['$event'])
  closeMenu(event: Event) {
    this.isMenuOpen = false;
  }

  checkTruncation(element: HTMLElement) {
    this.isTruncated = element.scrollWidth > element.clientWidth;
  }
}
