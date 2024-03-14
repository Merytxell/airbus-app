import { Action } from "@ngrx/store";
import { Aircraft } from 'src/app/model/aircraft.model';

//action = événement, ici déclenché par un click du user

export enum AircraftsActionsTypes{ 

    GET_ALL_AIRCRAFTS = "[Aircrafts] Get All Aircrafts",
    GET_ALL_AIRCRAFTS_SUCCESS = "[Aircrafts] Get All Aircrafts Success",
    GET_ALL_AIRCRAFTS_ERROR = "[Aircrafts] Get All Aircraft Error",
}

export class GetAllAircraftsAction implements Action {
    type: AircraftsActionsTypes = AircraftsActionsTypes.GET_ALL_AIRCRAFTS;
    constructor(public payload:any){

    }
    
}

export class GetAllAircraftsActionSucces implements Action {
type : AircraftsActionsTypes = AircraftsActionsTypes.GET_ALL_AIRCRAFTS_SUCCESS;
constructor(public payload : Aircraft[]){

    }
}

export class GetAllAircraftsActionError implements Action {
    type: AircraftsActionsTypes = AircraftsActionsTypes.GET_ALL_AIRCRAFTS_ERROR;
    constructor(public payload : string){

    }
}
export type AircraftsActions = GetAllAircraftsAction | GetAllAircraftsActionSucces | GetAllAircraftsActionError;