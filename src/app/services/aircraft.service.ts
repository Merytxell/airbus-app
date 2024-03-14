import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Aircraft } from '../model/aircraft.model';

@Injectable({
  providedIn: 'root'
})
export class AircraftService {

  constructor(private http:HttpClient) { }

  public getAircrafts():Observable<Aircraft[]>{
    let host = Math.random()>0.5 ? environment.host : environment.unreachableHost;
    return this.http.get<Aircraft[]>(host+"/aircrafts");
  }

  public getDesignedAircrafts(): Observable<Aircraft[]>{
    return this.http.get<Aircraft[]>(environment.host+"/aircrafts?design=true");
  }

  public getDeveloppementAircrafts():Observable<Aircraft[]>{
    return this.http.get<Aircraft[]>(environment.host+"/aircrafts?developpement=true");
  }

  public getAircraftByMsn(id:number): Observable <Aircraft> {
    return this.http.get<Aircraft>(environment.host+"/aircrafts/"+id);
  }

  public getAircraftByProgram(value : string): Observable<Aircraft[]>{
    return this.http.get<Aircraft[]>(environment.host+"/aircrafts?prog_like="+value);
  }
}
