import { Component, OnInit } from '@angular/core';
import { Observable, startWith } from 'rxjs';
import { AircraftService } from 'src/app/services/aircraft.service';
import { AircraftsActionsTypes, AppDataState, onActionEvent } from 'src/app/state/aircraft.state';
import { DataStateEnum } from 'src/app/state/aircraft.state';
import { Aircraft } from 'src/app/model/aircraft.model';
import { map, catchError, of } from 'rxjs';
import { EventService } from 'src/app/services/event.service';


@Component({
  selector: 'app-aircrafts',
  templateUrl: './aircrafts.component.html',
  styleUrls: ['./aircrafts.component.css']
})
export class AircraftsComponent implements OnInit {

  aircrafts$:Observable<AppDataState<Aircraft[]>> | null = null;

  readonly dataStateEnum = DataStateEnum;


  constructor(private aircraftService:AircraftService, private eventService : EventService) { }

  ngOnInit(): void {
  this.eventService.eventSubjectObservable.subscribe((actionEvent:onActionEvent) => {
    this.onActionEvent(actionEvent);
  })
    
  }

  getAllAircrafts(){
    this.aircrafts$ = this.aircraftService.getAircrafts().pipe(
      map(data => ({dataState : DataStateEnum.LOADED, data : data})),
      startWith ({dataState : DataStateEnum.LOADING}),
      catchError (err => of({dataState : DataStateEnum.ERROR, errorMessage: err.message}))
    );
  }
  //méthode pour chercher les avions et les filtrer par MSN.
  search(searchAircraft : number){
    if (searchAircraft){
      this.getAllAircrafts();
      return;
    }
    this.aircrafts$=this.aircraftService.getAircraftByMsn(searchAircraft).pipe(
      map(aircraft => ({
        dataState: DataStateEnum.LOADED,
        data : [aircraft]
      })),
        startWith ({dataState : DataStateEnum.LOADING}),
        catchError(err => of ({dataState : DataStateEnum.ERROR, errorMessage: err.message}))
      );

  }
 

  onActionEvent($actionEvent : onActionEvent){
    switch($actionEvent.type){
      case AircraftsActionsTypes.GET_ALL_AIRCRAFTS : 
      this.getAllAircrafts();
      break;

      case AircraftsActionsTypes.GET_SEARCH_AIRCRAFTS :
        this.search($actionEvent.payload);
        break;
    }
  }
}
