import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  backToHomePopUp: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  setBackToHomePopUp(popUp: boolean): void {
    if (this.router.url !== '/') {
      this.backToHomePopUp = popUp;
    }
  }

  goBackToHome(): void {
    this.backToHomePopUp = false;
    this.router.navigate(['/']);
  }
}
