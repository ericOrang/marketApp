import { ItemsService } from './../../services/items.service';
import { Component, OnInit } from '@angular/core';
import { Observable, from } from 'rxjs';
import { Item } from 'src/app/models/item.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  items: Observable<Item[]>;
  constructor(public itemService: ItemsService) {
    this.items = this.itemService.getItems();
  }

  ngOnInit() {}
}
