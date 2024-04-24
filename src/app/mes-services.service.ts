import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData } from "@angular/fire/firestore";
import { Observable } from 'rxjs';
import { quote } from './models/citations.model';
import { user } from './models/user.model';

@Injectable({
  providedIn: 'root'
})
export class MesServicesService {

  constructor(private fs:Firestore) { 
  }

  getQuote():Observable<quote[]>{
    let notesref = collection(this.fs, 'quote')
    return collectionData(notesref,{idField:'id'}) as Observable<quote[]>
  }

  getUser():Observable<user[]>{
    let noteref = collection(this.fs,'user')
    return collectionData(noteref,{idField:'id'}) as Observable<user[]>
  }
}