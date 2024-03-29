import { Component, OnInit } from '@angular/core';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { EventService } from 'src/app/services/event.service';
import { AicraftSearchType, AircraftsActionsTypes } from 'src/app/state/aircraft.state';

@Component({
  selector: 'app-aircrafts-navbar',
  templateUrl: './aircrafts-navbar.component.html',
  styleUrls: ['./aircrafts-navbar.component.css']
})
export class AircraftsNavbarComponent implements OnInit {

  @Output() eventEmitter : EventEmitter<any> = new EventEmitter();

  searchCtrl!:FormControl;
  searchTypeCtrl!:FormControl;


  constructor(private eventService : EventService, private formBuilder : FormBuilder) { }



  ngOnInit(): void {
    this.initForm();
  }

  private initForm () {
    this.searchCtrl = this.formBuilder.control('');
    this.searchTypeCtrl=this.formBuilder.control(AicraftSearchType.MSN);
  
  }

  getAllAircrafts(){
    this.eventService.publishEvent({type : AircraftsActionsTypes.GET_ALL_AIRCRAFTS,payload : null});
  }

  getDesignAircrafts(){
    this.eventService.publishEvent({type : AircraftsActionsTypes.GET_DESIGNED_AIRCRAFTS, payload : null});
  }

  getDeveloppementAircrafts(){
    this.eventService.publishEvent({type : AircraftsActionsTypes.GET_DEVELOPMENT_AIRCRAFTS, payload : null});

  }
  onSearch(value : any){
    this.eventService.publishEvent({type : AircraftsActionsTypes.GET_SEARCH_AIRCRAFTS, payload : value})
  }

onActionEvent($event : any){
  if($event == "ALL_AIRCRAFTS") this.getAllAircrafts();

}

}
