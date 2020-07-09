import { Item } from './../models/item.model';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ItemsService {
  constructor(private firestore: AngularFirestore) {}

  getItems() {
    return this.firestore
      .collection<Item>('items')
      .snapshotChanges()
      .pipe(
        map((actions) => {
          return actions.map((a) => {
            const data = a.payload.doc.data();
            const uid = a.payload.doc.id;
            return { uid, ...data };
          });
        })
      );
  }

  getItemById() {
    
  }
  addItem() {
    const data = {
      title: 'Test1',
      price: '50',
      seller: 'Cyndi',
      image: 'https://farm4.staticflickr.com/3894/15008518202_c265dfa55f_h.jpg',
    };
    return new Promise<any>((resolve, reject) => {
      this.firestore.collection('items').add(data);
    });
  }
}
