import { Component } from '@angular/core';

import { ScrollSectionService } from '../../shared/animations/services/scroll-section.service';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  constructor(private scrollSectionService : ScrollSectionService) {}

  scrollToSection(sectionId: string): void {
    this.scrollSectionService.scrollTo(sectionId);
  }
}
