import { AfterContentInit, AfterViewInit, Component, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-main',
  templateUrl: 'main.page.html',
  styleUrls: ['main.page.scss'],
})
export class MainPage implements AfterViewInit {

  @ViewChild(IonSlides) slide: IonSlides;
  public slideOpts = {
    initialSlide: 0,
    speed: 400,
  };

  constructor() {}

  ngAfterViewInit(): void {
    this.slide.lockSwipes(true);
  }
}
