import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { onActionEvent } from "src/app/state/aircraft.state";


@Injectable ({providedIn : "root"})

export class EventService{
    eventSubject : Subject<onActionEvent>=new Subject<onActionEvent>();

    eventSubjectObservable = this.eventSubject.asObservable();

    publishEvent (event : onActionEvent){
        this.eventSubject.next(event);
    }
}