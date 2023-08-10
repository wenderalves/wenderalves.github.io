import { Component, OnInit } from '@angular/core';
import { LogoSVG } from '../resources/logo';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  logo: any;

  constructor(private sanitizer: DomSanitizer) {
    this.logo = new LogoSVG(this.sanitizer).loadLogo();
  }

  ngOnInit(): void {
  }

}
