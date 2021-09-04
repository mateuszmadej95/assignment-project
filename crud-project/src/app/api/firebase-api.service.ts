import { Injectable, OnInit } from '@angular/core';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FirebaseApiService implements OnInit {

constructor() { }

public ngOnInit(): void {
  
  // Initialize Firebase
  const app = initializeApp(environment.firebaseConfig);
  const db = getFirestore(); 
}

}
