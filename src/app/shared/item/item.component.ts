import { Component, OnInit, Input } from '@angular/core';
import { Item } from 'src/app/models/item.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent implements OnInit {
  @Input() item: Item;
  constructor(private router: Router) {}

  ngOnInit() {}

  viewDetail() {
    this.router.navigate(['item', this.item.uid]);
  }
}
