import { Component, OnInit } from '@angular/core';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { AircraftsActionsTypes } from 'src/app/model/actionEvent';




@Component({
  selector: 'app-aircrafts-navbar',
  templateUrl: './aircrafts-navbar.component.html',
  styleUrls: ['./aircrafts-navbar.component.css']
})
export class AircraftsNavbarComponent implements OnInit {

  @Output() eventEmitter : EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  getAllAircrafts(){
    this.eventEmitter.emit({type : AircraftsActionsTypes.GET_ALL_AIRCRAFTS,payload : null});
  }

  getDesignAircrafts(){
    this.eventEmitter.emit({type : AircraftsActionsTypes.GET_DESIGNED_AIRCRAFTS, payload : null});
  }

  getDeveloppementAircrafts(){
    this.eventEmitter.emit({type : AircraftsActionsTypes.GET_DEVELOPMENT_AIRCRAFTS, payload : null});

  }
  onSearch(value : any){
    this.eventEmitter.emit({type : AircraftsActionsTypes.GET_SEARCH_AIRCRAFTS, payload : value})
  }

onActionEvent($event : any){
  if($event == "ALL_AIRCRAFTS") this.getAllAircrafts();
}

}
