import { ItemsService } from './../../services/items.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new',
  templateUrl: './new.page.html',
  styleUrls: ['./new.page.scss'],
})
export class NewPage implements OnInit {
  constructor(private itemService: ItemsService) {}

  ngOnInit() {}

  onCreateItem() {
    console.log('create');
    this.itemService.addItem().then((res) => console.log('success'));
  }
}
