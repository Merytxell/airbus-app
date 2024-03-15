import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AircraftsState } from "./aircrafts.state";



//le selector permet d'afficher une partie due state
export const selectCountAlertAircrafts = createSelector(
    createFeatureSelector('airbusState'),
    (state : AircraftsState) => {
        let total : number = 0;
        state.aircrafts.forEach (a => {
            if (a.developpement == true && a.design == true) total++;
        
        })
        return total;
    }
);