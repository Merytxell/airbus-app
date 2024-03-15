import { Component, OnInit } from '@angular/core';
import { Observable, startWith } from 'rxjs';
import { AircraftService } from 'src/app/services/aircraft.service';
import { AicraftSearchType, AircraftsActionsTypes, AppDataState, onActionEvent } from 'src/app/state/aircraft.state';
import { DataStateEnum } from 'src/app/state/aircraft.state';
import { Aircraft } from 'src/app/model/aircraft.model';
import { map, catchError, of } from 'rxjs';
import { EventService } from 'src/app/services/event.service';
import { Store } from '@ngrx/store';
import { AircraftsState, AircraftsStateEnum } from 'src/app/ngrx/aircrafts.state';
import { selectCountAlertAircrafts } from 'src/app/ngrx/aircrafts.selectors';



@Component({
  selector: 'app-aircrafts',
  templateUrl: './aircrafts.component.html',
  styleUrls: ['./aircrafts.component.css']
})
export class AircraftsComponent implements OnInit {

  aircraftsState$:Observable<AircraftsState>| null = null;
  countAlertAircrafts$ : Observable<number> | undefined;

  readonly aircraftsStateEnum = AircraftsStateEnum;
 

  constructor(private store:Store<any>) { 
    this.countAlertAircrafts$= store.select(selectCountAlertAircrafts);
  }

  ngOnInit(): void {
  this.aircraftsState$ = this.store.pipe(
    map((state) => state.airbusState)
  );
  }

  // getAllAircrafts(){
  //   this.aircrafts$ = this.aircraftService.getAircrafts().pipe(
  //     map(data => ({dataState : DataStateEnum.LOADED, data : data})),
  //     startWith ({dataState : DataStateEnum.LOADING}),
  //     catchError (err => of({dataState : DataStateEnum.ERROR, errorMessage: err.message}))
  //   );
  // }

  //méthode pour chercher les avions et les filtrer par programme.
  // search(searchAircraft : string){
  //   this.aircrafts$=this.aircraftService.getAircraftByProgram(searchAircraft).pipe(
  //     map(aircraft => ({
  //       dataState: DataStateEnum.LOADED,
  //       data : aircraft
  //     })),
  //       startWith ({dataState : DataStateEnum.LOADING}),
  //       catchError(err => of ({dataState : DataStateEnum.ERROR, errorMessage: err.message}))
  //     );

//   }
//   getAllDesignedAircrafts(){
//     this.aircrafts$=this.aircraftService.getDesignedAircrafts().pipe(
//       map(data => ({dataState : DataStateEnum.LOADED, data : data})),
//       startWith({dataState : DataStateEnum.LOADING}),
//       catchError(err => of ({dataState : DataStateEnum.ERROR, errorMessage : err.message}))
//     );
//   }
//   getAllDeveloppementAircrafts(){
//     this.aircrafts$=this.aircraftService.getDeveloppementAircrafts().pipe(
//       map(data => ({dataState : DataStateEnum.LOADED, data : data})),
//       startWith({dataState : DataStateEnum.LOADING}),
//       catchError( err => of ({ dataState : DataStateEnum.ERROR, errorMessage : err.message}))

//     );
//   }

//   onActionEvent($actionEvent : onActionEvent){
//     switch($actionEvent.type){
//       case AircraftsActionsTypes.GET_ALL_AIRCRAFTS : 
//       this.getAllAircrafts();
//       break;

//       case AircraftsActionsTypes.GET_SEARCH_AIRCRAFTS :
//         this.search($actionEvent.payload);
//         break;

//       case AircraftsActionsTypes.GET_DESIGNED_AIRCRAFTS:
//         this.getAllDesignedAircrafts();
//         break;

//       case AircraftsActionsTypes.GET_DEVELOPMENT_AIRCRAFTS:
//       this.getAllDeveloppementAircrafts();
//       break;
//     }
//   }
 }
