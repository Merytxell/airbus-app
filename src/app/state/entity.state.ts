import { EntityAdapter, EntityState, createEntityAdapter } from "@ngrx/entity";
import { Aircraft } from "../model/aircraft.model";
import { AircraftsStateEnum } from "../ngrx/aircrafts.state";
import { Operation } from "./aircraft.state";
import { Action } from "@ngrx/store";
import { AircraftsActions, OperationActionsTypes } from "../ngrx/aircrafts.action";

export const adapter : EntityAdapter<Operation> = createEntityAdapter <Operation>({

});

export interface AircraftsState extends EntityState<Operation>{
    aircrafts : Aircraft [],
    errorMessage : string,
    dataState : AircraftsStateEnum,

}

export const initState : AircraftsState = adapter.getInitialState ({
    aircrafts : [],
    errorMessage: "",
    dataState : AircraftsStateEnum.INITIAL,
    ids: [],
    entities : {}
});

export function AircraftsReducer (state : AircraftsState = initState, action :Action) : AircraftsState {
    switch(action.type){
        case OperationActionsTypes.ADD_OPERATION:
            return adapter.addOne((<AircraftsActions>action).payload,state);
        case OperationActionsTypes.REMOVE_OPERATION : 
        return adapter.removeOne((<AircraftsActions>action).payload,state);
        default:
            return state;
    }
}