import { Injectable } from "@angular/core";
import { AircraftService } from "../services/aircraft.service";
import { Action } from "@ngrx/store";
import { Observable, catchError, map, mergeMap, of } from "rxjs";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { AircraftsActionsTypes, GetAllAircraftsActionError, GetAllAircraftsActionSucces } from "./aircrafts.action";

@Injectable()

export class AircraftsEffects {
    constructor (private aircraftService : AircraftService, private effectActions : Actions){

    }

    getAllAircraftsEffect:Observable<Action> = createEffect(
        () => this.effectActions.pipe(
            ofType (AircraftsActionsTypes.GET_ALL_AIRCRAFTS),
            mergeMap ((action)=> {
                return this.aircraftService.getAircrafts().pipe (
                    map((aircafts) => new GetAllAircraftsActionSucces(aircafts)),
                    
                    catchError ((err) => of(new GetAllAircraftsActionError(err.errorMessage)))
                    
                );
                
            })
        
        )
    );
}