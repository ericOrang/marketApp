import { ItemsService } from './../../services/items.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-new',
  templateUrl: './new.page.html',
  styleUrls: ['./new.page.scss'],
})
export class NewPage implements OnInit {
  newItem = this.fb.group({
    title: [''],
    images: [[]],
    categories: [[]],
    location: this.fb.group({
      latitude: [''],
      longitude: [''],
    }),
    price: [''],
  });
  constructor(private itemService: ItemsService, private fb: FormBuilder) {}

  ngOnInit() {}

  onCreateItem() {
    console.log('create');
    this.itemService.addItem().then((res) => console.log('success'));
  }
}
