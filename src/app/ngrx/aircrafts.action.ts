import { Action } from "@ngrx/store";
import { Aircraft } from 'src/app/model/aircraft.model';

//action = événement, ici déclenché par un click du user

export enum AircraftsActionsTypes{ 

    GET_ALL_AIRCRAFTS = "[Aircrafts] Get All Aircrafts",
    GET_ALL_AIRCRAFTS_SUCCESS = "[Aircrafts] Get All Aircrafts Success",
    GET_ALL_AIRCRAFTS_ERROR = "[Aircrafts] Get All Aircraft Error",
    GET_DESIGNED_AIRCRAFTS = "[Aircrafts] Get Designed Aicrafts",
    GET_DESIGNED_AIRCRAFTS_SUCCESS = "[Aircrafts] Get Designed Aircrafts Success",
    GET_DESIGNED_AIRCRAFTS_ERROR = "[Aircrafts] Get Designed Aircrafts Error",
    GET_DEVELOPED_AIRCRAFTS= "[Aircrafts] Get Developed Aicrafts Action",
    GET_DEVELOPED_AIRCRAFTS_SUCCESS = "[Aircrafts] Get Developed Aicrafts Success",
    GET_DEVELOPED_AIRCRAFTS_ERROR = "[Aircrafts] Get Developed Aicrafts Error"

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

export class GetDesignedAircraftsAction implements Action {
    type : AircraftsActionsTypes = AircraftsActionsTypes.GET_DESIGNED_AIRCRAFTS;
    constructor(public payload:any){

    }
}


export class GetDesignedAircraftsActionSucces implements Action {
    type : AircraftsActionsTypes = AircraftsActionsTypes.GET_DESIGNED_AIRCRAFTS_SUCCESS;
    constructor(public payload : Aircraft[]){
    
        }
    }

    export class GetDesignedAircraftsActionError implements Action {
        type: AircraftsActionsTypes = AircraftsActionsTypes.GET_DESIGNED_AIRCRAFTS_ERROR;
        constructor(public payload : string){
    
        }
    }

    export class GetDevelopedAircraftsAction implements Action{
        type : AircraftsActionsTypes = AircraftsActionsTypes.GET_DEVELOPED_AIRCRAFTS;
        constructor(public payload:any){

        }
    }

    export class GetDevelopedAircraftsSuccess implements Action {
        type : AircraftsActionsTypes = AircraftsActionsTypes.GET_DEVELOPED_AIRCRAFTS_SUCCESS;
        constructor(public payload : Aircraft[]){
        }
    }

    export class GetDevelopedAircraftsError implements Action{
        type : AircraftsActionsTypes = AircraftsActionsTypes.GET_DEVELOPED_AIRCRAFTS_ERROR;
        constructor(public payload : string){
        }
    }

export type AircraftsActions = GetAllAircraftsAction | GetAllAircraftsActionSucces | GetAllAircraftsActionError | GetDesignedAircraftsAction |GetDesignedAircraftsActionSucces | GetAllAircraftsActionError | GetDevelopedAircraftsAction | GetDevelopedAircraftsSuccess | GetDevelopedAircraftsError;