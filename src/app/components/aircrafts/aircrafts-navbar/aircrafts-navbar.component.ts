import { Component, OnInit } from '@angular/core';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { GetAllAircraftsAction, GetDesignedAircraftsAction, GetDevelopedAircraftsAction } from 'src/app/ngrx/aircrafts.action';
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


  constructor(private eventService : EventService, private formBuilder : FormBuilder, private store:Store<any>) { }



  ngOnInit(): void {
    this.initForm();
  }

  private initForm () {
    this.searchCtrl = this.formBuilder.control('');
    this.searchTypeCtrl=this.formBuilder.control(AicraftSearchType.MSN);
  
  }

  getAllAircrafts(){
    this.store.dispatch(new GetAllAircraftsAction({}));
  }

  getDesignAircrafts(){
    this.store.dispatch(new GetDesignedAircraftsAction({}));
  }

  getDeveloppementAircrafts(){
    this.store.dispatch(new GetDevelopedAircraftsAction({}));

  }
  onSearch(value : any){
    this.eventService.publishEvent({type : AircraftsActionsTypes.GET_SEARCH_AIRCRAFTS, payload : value})
  }

onActionEvent($event : any){
  if($event == "ALL_AIRCRAFTS") this.getAllAircrafts();

}

}
