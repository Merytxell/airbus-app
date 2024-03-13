export interface onActionEvent {
    type : AircraftsActionsTypes,
    payload : any
}

export enum AircraftsActionsTypes {
    GET_ALL_AIRCRAFTS = "[Aircrafts] Get All Aircrafts",
    GET_DESIGNED_AIRCRAFTS= "[Aircrafts] Get Designed Aircrafts",
    GET_DEVELOPMENT_AIRCRAFTS = "[Aircrafts] Get Developed Aircrafts",
    GET_SEARCH_AIRCRAFTS= "[Aicrafts] Get Search Aircrafts"
}