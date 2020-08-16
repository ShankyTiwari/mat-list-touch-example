import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-demo-one',
  templateUrl: './demo-one.component.html',
  styleUrls: ['./demo-one.component.scss']
})
export class DemoOneComponent {
  sanitizer: DomSanitizer
  constructor(sanitizer: DomSanitizer) {
    this.sanitizer = sanitizer;    
  }

  getURL() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(`${window.location.protocol}//${window.location.host}/raw-demo`);
  }
}
