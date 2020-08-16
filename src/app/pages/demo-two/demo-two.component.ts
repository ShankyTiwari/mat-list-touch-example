import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-demo-two',
  templateUrl: './demo-two.component.html',
  styleUrls: ['./demo-two.component.scss']
})
export class DemoTwoComponent {
  sanitizer: DomSanitizer
  constructor(sanitizer: DomSanitizer) {
    this.sanitizer = sanitizer;    
  }

  getURL() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(`${window.location.protocol}//${window.location.host}/raw-demo`);
  }
}
