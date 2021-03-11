import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Front } from 'src/app/Shared/Models/front.model';

@Component({
  selector: 'app-create-front',
  templateUrl: './create-front.component.html',
  styleUrls: ['./create-front.component.css']
})
export class CreateFrontComponent implements OnInit {

  @ViewChild('nameInput') nameInputRef!: ElementRef;
  @ViewChild('ubicationInput') ubicationInputRef!: ElementRef;
  @ViewChild('descriptionInput') descriptionInputRef!: ElementRef;
  @Output() frontAdded = new EventEmitter<Front>();

  constructor() { }

  ngOnInit(): void {
  }

  onFrontAdded(){
    const name = this.nameInputRef.nativeElement.value;
    const ubication = this.ubicationInputRef.nativeElement.value;
    const description = this.descriptionInputRef.nativeElement.value;

    this.frontAdded.emit(new Front(name,ubication,description));
  }

}
