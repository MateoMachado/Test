import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() sidebarToggle = new EventEmitter<any>();
  menuToggled : boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  sidebarToggled(){
    this.sidebarToggle.emit();
  }

  toggleMenu(){
    this.menuToggled = !this.menuToggled;
  }

}
