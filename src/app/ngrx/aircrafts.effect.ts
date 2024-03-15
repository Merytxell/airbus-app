import { Injectable } from "@angular/core";
import { AircraftService } from "../services/aircraft.service";
import { Action } from "@ngrx/store";
import { Observable, catchError, map, mergeMap, of } from "rxjs";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { AircraftsActionsTypes, GetAllAircraftsActionError, GetAllAircraftsActionSucces, GetDesignedAircraftsActionError, GetDesignedAircraftsActionSucces, GetDevelopedAircraftsError, GetDevelopedAircraftsSuccess } from "./aircrafts.action";

@Injectable()

export class AircraftsEffects {
    constructor (private aircraftService : AircraftService, private effectActions : Actions){

    }

    getAllAircraftsEffect:Observable<Action> = createEffect(
        () => this.effectActions.pipe(
            ofType (AircraftsActionsTypes.GET_ALL_AIRCRAFTS),
            mergeMap ((action)=> {
                return this.aircraftService.getAircrafts().pipe (
                    map((aircrafts) => new GetAllAircraftsActionSucces(aircrafts)),
                    
                    catchError ((err) => of(new GetAllAircraftsActionError(err.errorMessage)))
                    
                );
                
            })
        
        )
    );
    GetDesignedAircraftsEffect : Observable<Action> = createEffect(
        () => this.effectActions.pipe(
            ofType (AircraftsActionsTypes.GET_DESIGNED_AIRCRAFTS),
            mergeMap((action)=> {
                return this.aircraftService.getDesignedAircrafts().pipe(
                    map((aircrafts) => new GetDesignedAircraftsActionSucces(aircrafts)),
                    catchError((err) => of (new GetDesignedAircraftsActionError(err.message)))
                );
            })
        )
    );

    GetDevelopedAircraftsEffect : Observable <Action> = createEffect(
        () => this.effectActions.pipe(
            ofType(AircraftsActionsTypes.GET_DEVELOPED_AIRCRAFTS),
            mergeMap((action) => {
                return this.aircraftService.getDeveloppementAircrafts().pipe(
                    map ((aircrafts) => new GetDevelopedAircraftsSuccess(aircrafts)),
                    catchError((err) => of (new GetDevelopedAircraftsError(err.message)))
                );
            })
        )
    );

}
