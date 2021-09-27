import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class GameDbService {

  constructor(
    private db: AngularFirestore,
    ) { }

  saveGame(data: any) {
    return new Promise<any>((resolve, reject) => {
      this.db
      .collection('games')
      .add(data)
      .then(res => {}, err => reject(err));
    });
  }

}
