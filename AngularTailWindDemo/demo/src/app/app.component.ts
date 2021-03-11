import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo';
  loadedFeature = 'home';
  opened: boolean = false;

  navigate(feature : string){
    this.loadedFeature = feature;
  }

  toggleSidebar() {
    this.opened = !this.opened;
  }
}
